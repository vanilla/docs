---
title: Events & Handlers
tags:
- Developers
- Addons
- Events
- Handlers
category: addons
menu:
  developer:
    parent: addons
---
## Events & Handlers

Any class that extends the class "Pluggable" has the ability to call

```php
$this->fireEvent('EventName');
```
and then Plugins can attach to that event to perform an action.

There is an AddonManager that detects any enabled addons. When the `FireEvent` method is called, it pings the AddonManager class to see if there are any addons that want to attach to the event name being fired.

Addons attach to an event by creating a method named with the object name, event name, and the word `handler` separated by underscores. Say the `DiscussionsController` fired an event named 'Kaboom'. Here is how you would use it:

```php
class MyPlugin extends Gdn_Plugin() {
    public function discussionsController_kaboom_handler($sender, $args) {
    // Do stuff at the 'Kaboom' event here.
        $sender->index(); // You can invoke DiscussionsController methods here.
    }
}
```
Notice that 2 parameters are passed. The first is the object invoking the event (usually `$this`). The second is *optional*, and is an array of event arguments being passed as additional info or options to be modified.


## EventArguments

Usually these arguments are the data being set up by the object, a toggle the handler can switch on or off, or other contextual info.

For example:

```php
$this->EventArguments['DuckDodgers'] &= '24.5';
$this->fireEvent('Kaboom');
```

Now in our `Handler` method above, $args would be an array of `'DuckDodgers' => '24.5'`. If we set `$args['DuckDodgers'] = 0;` in our `handler` method, it would also be changed back in the `DiscussionsController` because it was passed by reference.

To invoke a handler on ALL methods, use the prefix `base` instead of an object name. Example: `base_kaboom_handler`. It is best to avoid unnecessary calls by using this *very* conservatively.

Custom events are added on a case-by-case basis as the need arises. If you feel you need a new event, request it on the community forum.

## Magic Events

Magic events were an elaborate system of hook possibilities that involved the method prefix 'x' and PHP's `__call()` method. Currently, there is only one undeprecated magic event in Vanilla: `render_before`. It invokes just before the page is rendered. Example use: `base_render_before($sender)`. **It is best to avoid when another event is usable.**

For a better alternative hook that reliably fires early on every request, try `gdn_dispatcher_appStartup_handler` instead. To universally include a CSS file, use `assetModel_styleCss_handler`.

## Magic Methods

Magic methods allow you to create new methods and add them to existing objects. They are created in much the same way that you plug into events. Imagine you wanted to add a method named `Kaboom` to the DiscussionsController:

```php
class MyPlugin extends Gdn_Plugin {
   public function discussionsController_kaboom_create($sender) {
        echo "Kaboom!";
   }
}
```

With this addon enabled, going to the URL `/discussions/kaboom` would now output the text "Kaboom!". You can references other methods and properties on the extended object using the `$sender` variable.

If you use a magic method to duplicate an existing method name, it will be overridden completely. And call to it will be directed to your plugin instead. The only exception is the `Index()` method.

Magic methods only work in classes that extend `Gdn_Pluggable`. For example, notice the `Gdn_Form` class does, but the `Gdn_Format` class does not. All models and controllers do.
