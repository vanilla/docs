---
title: Resource Routing
tags:
- Developers
- Framework
- API
category: developer
menu:
  developer:
    parent: framework-apiv2
    weight: 10
aliases:
- /developers/framework/apiv2/resource-routing
---
## RESTful Resource Routing to Controller Methods

This section tells you how to name your controller objects and methods so that they can be accessed by API requests. By default, all of your controllers are accessed from the **/api/v2/** base path. After that, the rest of the path and the HTTP method determines what method gets called within your app.

## Controller Names

In order for a controller to be accessible from the API its name must end in "ApiController". For example if you want to write a controller for the "/discussions" endpoints you would name it "DiscussionsApiController". URLs support dashes. When a dash is encountered it will map to a capital letter in the controller name. For example the "/sites-proxy" endpoints map to the "SitesProxyApiController". Vanilla's addon manager is case-insensitive, but we recommend that you name your classes with proper casing because not all autoloaders are case-insensitive.

In RESTful APIs controllers should be plural. Think of controllers as folders in your file system. Folders contain many files and are usually named with the plural words such as "documents" or "pictures". Always try and name your controllers in a similar way. When working on a project with many people it's important to stick to a common naming convention.

Currently, controllers do not support namespaces, but that is coming soon. When it does the namespace won't matter when routing to the controller so choose your controller names wisely in order to avoid clashes with other controllers.

## Methods Names (Actions)

When adding methods (actions) to your controllers their names determine what what type of request they'll map to. Here are the rules that determine which action is called.

- &lt;method&gt;`()` maps with METHOD /controller (ex. DiscussionsApiController::post() maps with "POST /discussions").
- &lt;method&gt;`_name()` maps with METHOD /controller/name (ex. ProfileApiController::get_activity() maps with "GET /profile/activity").
- `index()` maps with GET /controller.
- `name()` maps with any HTTP method. Try to avoid such global actions.

URLs can also contain dashes for method names. They map in much the same way as controller names. Because methods are case-insensitive a URL of /controller/my-comments is equivalent to /controller/mycomments. We may remove these ambiguities in the future so make sure to use proper casing and dashes in your method names and URLs respectively.

### HTTP Method vs. Controller Method

The HTTP method refers to the method of the *HTTP request*. This is usually one of the following verbs: GET, POST, PATCH, PUT, DELETE, HEAD, and OPTIONS. With object oriented programming, functions declared on a class are also referred to as methods. It's sometimes confusing trying to differentiate between the two. For this reason we will usually refer to the HTTP methods as methods and the other methods as **actions**.

### Protected Methods

Usually, all public methods can be accessed via URL. This could present a security concern where you might want a class method to be public, but not accessible via API. There are a couple of ways to protect public controller methods.

1. Getters and setters that begin with "get", "set", or "is" and are followed by a non-underscore character cannot be accessed by the API. If you want to make such a name accessible (such as "settings") you can put an HTTP verb before the name (ex. get_settings).

2. If your controller implements an "isProtected($name)" method then it will be called by the router to check all method names to see if they are public actions.

## Parameters

When you add parameters to your methods they get mapped from the URL's path. This is usually how you add a record's ID to your RESTful API. For example, you can map GET /comments/123 to CommentsApiController::get($id).

*Note: In previous versions of Vanilla's API, method parameters were also mapped from the query string. This is no longer the case so make sure to keep this in mind if you are upgrading older endpoints.*

### Parameter Ambiguities

Let's say you've defined the following methods on your controller:

```php
class DiscussionsApiController {
    public function index($page = '') { }

    public function get($id) { }
}
```

Looking at the definition you would expect we want something like the following:

- GET /discussions/p2 maps to DiscussionsApiController::index('p2')
- GET /discussions/123 maps to DiscussionsApiController::get('123')

The problem is that the router doesn't know which method you want to map to. By default, because the **get()** method takes precedence over **index()** it would get dispatched both times. To avoid these ambiguities there are a few strategies.

1. Use the query string more. In the above example the page should really be a query string parameter because that's how it's behaving. This is a break from Vanilla's older APIs.
2. Parameter names can act as constraint. By default Vanilla has a constraint on the **id** parameter where it must contain all digits: perfect for database primary keys. Constraints are regular expressions or callbacks and are added to the routing object. Try to avoid adding constraints yourself though because they are currently global.
3. Parameter count matters when mapping paths to actions. A path with more or less parts than action parameters will not map to that method. If your action has optional parameters then they aren't required though. A path with less parts will call your action with the remaining default values.

If you understand these rules you will be able to overcome most edge cases. However, you should aim to keep your controllers simple. We don't want to see complex action names just because you are worried about name clashes.

### Parameter Mapping

Some parameters will be automatically mapped from request data. In order to map request data you can use the following naming convention. Note that the type hints matter (TODO, but this is a good idea).

- **array $query** will receive the query string as an array (`$_GET`).
- **array $body** will receive the request body (`$_POST`).
- **array $data** will receive a combination of the reflected method parameters, query string, and body. Use this to include the method parameters in a schema check.
- **Garden\Web\RequestInterface $*** will receive the request object.
- **...$*** variadics will receive the rest of the path.
- **$path** is like the variadic, but will get a string (TODO).

Using parameter mapping begins to make controller methods look more like model methods or plain PHP functions. This is intentional and you should keep that theory in mind when writing controller methods. Controller methods should be able to be called without the entire request bootstrapping process.

## A Default RESTful Resource Controller

In general, you want to write your controller to contain mainly the basic HTTP methods. Often this will be all that you need and will provide basic CRUD functionality for a database table. Below is a skeletal /widgets resource illustrating this example.

```php
class WidgetsApiController {
    // List and search for widgets.
    public function index(array $query = []) { }

    // Add a widget.
    public function post(array $data) { }

    // Update an existing widget.
    public function patch($id, array $data) { }

    // Delete a widget.
    public function delete($id) { }
}
```
