---
title: Writing API Endpoints
tags:
- Developers
- Framework
- API
category: developer
menu:
  developer:
    parent: framework-apiv2
    weight: 2
aliases:
- /developers/framework/apiv2/api-endpoints
---
## Controller Endpoints

When writing an API controller class, each method represents an endpoint. How to define those endpoint names and parameters is covered in the [resource routing](./resource-routing) guide. This guide concerns writing the contents of a method.

## The Controller Base Class

Although controllers don't need to inherit from any class, the **Vanilla\Web\Controller** class offers useful functionality and is going to be the class you inherit from almost 100% of the time. This guide assumes you are inheriting from that class and using its utility methods.

## Dependency Injection

Most controllers are thin wrappers that add permission checks around calls to models that do most of the real work. The dispatcher creates all controllers using a dependency injection container, so you can have your controller's models and other support objects properly initialized by declaring type-hinted parameters in your controller's constructor.

The controller base class also has some default dependencies that you can also use:

- **getSession()**. This is the session object corresponding to the user that invoked the controller.
- **getEventManager()**. This is the event manager and can be used to fire events from within the controller.

## The Anatomy of a Controller Action

When writing a controller action, your methods are going to have a similar layout. Take this post action as an example:

```php
public function post(array $data) {
    // Check permissions.
    $this->permission('...');

    // Define the input schema.
    $sch = $this->schema([
        ...
    ], __FUNCTION__);

    // Define the output schema.
    $out = $this->schema([
        ...
    ], __FUNCTION__, 'out');

    // Validate the input data against the input schema.
    $row = $sch->validate($data);

    // Do the controller's job.
    $result = $this->model->insert($row);

    // Trim the full result to the output schema.
    $result = $out->validate($result);

    // Return the result.
    return $result;
}
```

### Check Permissions

The first line of most actions is a call to `$this->permission()`. This applies even if your endpoint doesn't require any specific permissions and has few exceptions. If you don't think your endpoint requires a permission then just make the call with an empty string:

```php
$this->permission(''); // no specific permission required
```

We want to strictly enforce a permission call because there can be other reasons why a user may not have permissions such as a site being in update mode or being a private community. Such permission restrictions are known as bans. There are several default bans listed as constants on the **Vanilla\Permissions** class. You can bypass a ban by specifying it as a permission name in your call to the **permission()** method.

```php
// This endpoint is still available when the site is in update mode.
$this->permission(['Vanilla.Discussions.View', Permissions::BAN_UPDATING]);
```

#### Checking Multiple Permissions

If an endpoint requires multiple permissions you can make several calls to **permission()**. Try and put the most "important" permission first, but the only impact the order of the calls has is on the order of error messages if the user doesn't have either permission.

If an endpoint is available to a user with **any** of a set of permissions then specify all of them as an array in one call to **permission()**.

#### Later Permission Checks

You can make calls to **permission()** later in the action. The most common reason to do this would be to lookup a record before deciding what permission the user needs. Even if you make a permission call later like this you should still include an initial call to **permission()**. *Always be thinking about protecting your endpoints!*

### Define The Input Schema

The input schema is important for the following reasons:

1. It cleans your input data beyond what JSON can do. For example, dates are converted into **DateTimeImmutable** objects.
2. It helps define your API's specification. Proper APIs should be backwards-compatible whenever new features are added. The schema helps ensure you support your old consumers.
3. It helps secure your endpoint using a whitelist of what's allowed. This means you don't have to worry about extra database fields sneaking in and overwriting sensitive data (such as admin flags). Ask any security expert and they'll tell you that whitelist security is preferred to blacklist security.
4. It documents your endpoint. The schema is used to generate automatic documentation, but beyond that it's also useful to other developers that are modifying your endpoint.

Schemas returned from the **schema()** method are instances of the **Vanilla\Schema** class which is a thin subclass of the **Garden\Schema** class that adds some meta information useful for endpoint documentation and events for extension.

### Define The Output Schema

The output schema isn't as important a the input schema, but a properly specified API should have both. The output schema's most important role is for documentation. It also helps trim unnecessary data from the result.

It may seem strange to define the output schema right below the input schema instead of where it is used. However, this is done to aid in automated documentation generation.

### Validate The Input Data

Validating the input is as easy as calling the the schema's **validate()** method. This does the following:

1. The data is validated. If the validation fails then an exception is thrown that the dispatcher understands how to render.
2. The data is cleaned. Values are coerced to proper types and extraneous fields are stripped. This leaves the resulting data suitable for use without worrying about bad data.

### Do the Controller's Job

The controller's main job is done after permission checking and input validation. What the controller does is up to you, but try keeping it simple. If you controller is overly complex think of whether that means you need to instead add functionality to your model. If you aren't sure maybe refactor to a private method on the controller so that the actual endpoint keeps its thin wrapper status.

### Trim The Result

You trim the result by validating the output schema. This may also have the effect of throwing an error. In this case you've done something wrong. Hopefully, such errors come out in unit testing and not in production.

### Return The Result

In API controllers the result is returned rather than being rendered directly. In fact, the base controller has no **render()** method at all. The result is rendered by the dispatcher.

#### The Data Class

Usually, you will return an array which is easily passed to other functions or rendered to JSON. Returning an array in this way represents a 200 response. If you want to return some other response code you can return a **Garden\Web\Data** object that takes an HTTP status code as an argument in its constructor. The Data class also implements array access so it's fairly easy to move from an array to an instance of this class.

You can also return an object that implements **JsonSerializable**. An object like this that doesn't have any other specific information will only renderable as JSON which isn't as forwards-compatible as the other classes so be careful here. The Data class isn't in its final form and it will get more and more support for advanced scenarios in the future.

## Tips And Tricks

- Try and not reference any global objects or static methods in your controllers. Use dependency injection. We are trying to wrestle globals out of our application. This won't be 100% possible at first, but keep the theory in the back of your mind.

- Clever, yet lazy developers may notice that action methods have just gotten a lot longer than previous API versions. This is all for good reason and I hope this guide lays that out quite clearly. We want a good, testable, secure API. The only way to achieve that is to have the endpoints properly specified. This will pay dividends in the long term. Okay this isn't exactly a tip or a trick, but the clever yet lazy developer is likely to scroll and read only this section.

- Still, defining schemas is probably going to be the most arduous task. If you define a method that returns the output schema for your **get()** endpoint then you'll be able to use that same schema as the row format of your **index()** endpoint:

    ```php
    public function getRowSchema($method) {
        return $this->schema([
                ...
            ], $method, 'out');
    }

    // In your index() endpoint:
    $out = $this->schema([
            '*:a' => $this->getRowSchema('')
        ], __FUNCTION__, 'out');

    // In your get() endpoint:
    $out = $this->getRowSchema(__FUNCTION__);
    ```

- Remember to always make the initial call to **permission()**. *Protect that endpoint!*

- You may have noticed that the examples above have odd names for the schema variables. That's because variables with three characters indent nicely with method chaining, and schemas are very likely to method chain. Don't hate on the 3LVs.
