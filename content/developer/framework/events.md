---
title: Events
tags:
- Developers
- Framework
category: developer
menu:
  developer:
    parent: framework
---

Events are a fundamental way for different [addons](/developer/addons) to communicate with each other. Events are fired with and any addon can hook into / listen to these events and respond to them.

The `EventManager` is responsible for creating and responding to events in Vanilla.

## Getting the Event Manager

The proper way to get the event manager is through the [container](/developer/framework/dependency-injection). Do not create a new instance yourself.

## Firing an Event

There are multiple ways to fire events.

## `fire()`

The simplest method of firing an event is using the `EventManager::fire(string $event, ...$args): array`. You pass an event name, and any arguments you want the event handlers to have, and get back an array of responses from every responding event.

__Example 1__

```php
class HtmlProcessor {
    // ...

    private $allowedUrlSchemes = ['http://', 'https://', 'mailto://', 'tel://'];

    public function __construct(EventManager $eventManager) {
        // Allow addons to add extra allowed URL schemes
        /** @var string[] */
        $extraUrlSchemes = $eventManager->fire('getExtraAllowedUrlSchemes');
        $this->allowedUrlSchemes = array_merge($this->allowedUrlSchemes, $extraUrlSchemes);
    }

    // ...
}
```

Let's take a look at what the handler for this event would look like. Using `Gdn_Plugin` is the easiest way to register event handlers. All methods on the plugin instance are automatically bound as events.

```php
class SteamPlugin extends Gdn_Plugin {
    public function getExtraAllowedUrlSchemes() {
        return "steam://";
    }
}
```

## `fireFilter()`

The previous `EventManager::fire()` call was simple, but does not work for every case. Imagine a scenario where you would like multiple addons to be able build on top of the results of each other. Such as the the `GET /api/v2//discussions` endpoint. Here we want _multiple_ addons to be able to modify the result, and we want them all to be working with the same thing. We also want to pass the context of the request into the event.

`EventManager::fireFilter(string $event, $initialValue, ...$args)` is the perfect candidate for this. It will fire an event name of `$event`, gather all of the handlers, and pass `$initalValue` as the first parameter of the event handler, then pass the return value of the previous event handler into the first parameter of the each other handler. The result of the last handler will be returned.

The rest of the arguments will be passed along to each handler.

__Example__

```php
class DiscussionsApiController extends AbstractApiController {
    public function index(array $query) {
        // ...

        // Allow addons to modify the result.
        $result = $this->getEventManager()->fireFilter(
            'discussionsApiController_indexOutput',
            $result,
            $this,
            $in,
            $query,
            $rows
        );

        // ...
    }
}
```

And the handler:

```php
class ReactionsPlugin extends Gdn_Plugin {
    public function discussionsApiController_indexOutput(
        array $previousResult,
        DiscussionsApiController $sender,
        Schema $inSchema,
        array $query,
        array $rows
    ): array {
    $newResult = $previousResult
    // Modify the result in same way
    return $newResult;
}
```

Note that the return type should be the same as the `$previousResult` type, because it will be passed into the next handler.

## `fireDeprecated()`

The fire deprecated method is very similar to the `fire()` method. It functions identically except:

- If any handler is bound to it
- It will trigger a deprecated notice (`E_USER_DEPRECATED`).

### Gdn_Pluggable

The `EventManager` class represents the modern way of firing and handling events in Vanilla. Previously events were fired through the `PluginManager` or through and abstraction `Gdn_Pluggable`. Lots of Vanilla classes extend from `Gdn_Pluggable`. Almost every class beginning with `Gdn` extends from `Gdn_Pluggable` including `Gdn_Plugin` and `Gdn_Controller`.

Using this method of firing events is now ___discouraged___. While the implementation now uses the `EventManager` internally, firing events this way carries the overhead of multple additional function calls and has a less explicit syntax.

`Gdn_Pluggable` exposes a method `Gdn_Pluggable::fireEvent(string $eventName, array $args)`. It would join the name of the class firing and event with the `$eventName` and fire that as an event. The class property `->EventArguments` would be merged with `$args` and passed to any handler. If the class name was not preferable the event prefix could be set by calling the `Gdn_Pluggable::fireAs(string $prefix)` method before calling `fireEvent()`.

The common method of the receiving data back from the events was to use the fact that array values are passed by reference and modify them inside of the handlers.

Let's look at an example.

```php
class Gdn_Form extends Gdn_Pluggable {
    public function bodyBox($column = 'Body', $attributes = []) {
        // ...

        $this->EventArguments['Table'] = val('Table', $attributes);
        $this->EventArguments['Column'] = $column;
        $this->EventArguments['Attributes'] = $attributes;
        $this->EventArguments['BodyBox'] =& $result;
        $this->fireEvent('BeforeBodyBox');

        // ...
    }
}
```

And a handler. Notice

- The calling class being passed in as the first parameter.
- The arguments array being passed as the second array.
- The arguments array is modified by reference.

```php
class EditorPlugin extends Gdn_Plugin {
    public function gdn_form_beforeBodyBox_handler(Gdn_Form $sender, array $args) {
        // ...

        // Convert the form body to WYSIWYG
        if ($this->ForceWysiwyg == true && $needsConversion) {
            $wysiwygBody = Gdn_Format::to($sender->getValue('Body'), $this->Format);
            $sender->setValue('Body', $wysiwygBody);

            $this->Format = 'Wysiwyg';
            $sender->setValue('Format', $this->Format);
        }

        // Append the editor HTML
        $view = $c->fetchView('editor', '', 'plugins/editor');
        $args['BodyBox'] .= $view;
    }
}
```

