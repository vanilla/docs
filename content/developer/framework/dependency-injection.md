---
title: Dependency Injection
tags:
- Developers
- Framework
- Event
- container_init
category: developer
menu:
  developer:
    parent: framework
---

Vanilla uses [garden-container](https://github.com/vanilla/garden-container) for dependency injection. The `\Garden\Container` object is a PSR-11 (Container Interface) compliant container class. This document outlines its usage in Vanilla, rather than how to use it, so it is worht reading the in-repo documentation.

## Creating Container Rules

The container is primarily configured in vanilla's bootstrap file `bootstrap.php`. An alterative configuration is provided for the test environment `VanillaTests\Bootstrap`.

Sometimes an addon needs to modify or add additional rules for the container. Vanilla's bootstrap fires an event called `container_init` which provides the container instance after its initial configuration.

### Example

__/plugins/some-addon/SomeAddonPlugin.php
```php
class SomeAddonPlugin extends Gdn_Plugin {
    public function container_init(\Garden\Container $container) {
        $container->rule(\SomeClass::class)
            ->addCall('someMethod', 'someArgument');
    }
}
```

## Autowiring Dependencies

`garden-container` autowires dependencies in the constructor. For example:

```php
final class SomeController extends \Vanilla\Web\Controller {
    /**
     * @param SomeModel $someModel Model used to fetch some data in the controller.
     */
    public function __construct(SomeModel $someModel) {
        // someModel
    }
}
```

Any instance of `SomeController` that is created through the container will have an instance of `SomeModel` passed in from the container. This is pretty straightforward from the perspective of a class with no sub-classes.

## InjectableInterface

When creating something that will be used as a base class though, we often do not want the constructors of our children to need to redeclare all of our dependencies.

This is where `\Vanilla\InjectableInterface` comes in. Vanilla's container instance is pre-configured to call the `setDependencies()` method on any class implementing `InjectableInterface` with dependencies provided from the container.

Let's look at an example with the `\Vanilla\Web\Controller`.

```php
abstract class Controller implements InjectableInterface {

    // ...

    /**
     * Set the base dependencies of the controller.
     *
     * This method allows subclasses to declare their dependencies in their constructor without worrying about these
     * dependencies.
     *
     * @param SessionInterface|null $session The session of the current user.
     * @param EventManager|null $eventManager The event manager dependency.
     * @param LocaleInterface|null $local The current locale for translations.
     * @param Upload $upload File upload handler.
     */
    public function setDependencies(
        SessionInterface $session = null,
        EventManager $eventManager = null,
        LocaleInterface $local = null,
        Upload $upload
    ) {
        $this->session = $session;
        $this->eventManager = $eventManager;
        $this->locale = $local;
        $this->upload = $upload;
    }

    //...
}
```

In this way our previous `SomeController` class does not need to redeclare all of these dependencies in it's contstructor.

## Gdn::getContainer()

Sometimes you want to use a depedency injected class in one that is not autowired.
An example of this would be implementing some new or updated functionality that must be introduced to an older system that cannot currently be dependency injected such as:

- Updating an old or deprecated global function.
- Updating a static method that cannot have all of its call-sites replaced with an instance method.

`Gdn::getContainer()` will return the instance of the container statically. This practice is ___discouraged___. Autowiring is preferred in any case possible.
