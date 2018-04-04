---
title: Controllers & URLs
tags:
- Developers
- Framework
- Controllers
- Urls
category: developer
menu:
  developer:
    parent: framework
    weight: 10
aliases:
- /framework/controllers
- /developers/framework/controllers
---

In our MVC context, controllers are the traffic cops. They receive a parsed request (typically the URL in the address bar), build some data using models, and send it back to the browser in a view.

## Dispatcher

Vanilla maps URLs to controllers in a fairly direct way. The Dispatcher (`Gdn_Dispatcher`) receives incoming [requests](/developer/framework/requests) and invokes the appropriate controller(s).

## Mapping URLs

First it looks for an application name, then a controller name, then a method name, then any arguments which will be passed in the order given. 

An example that includes all of these is: `/dashboard/profile/notifications/1/Lincoln`. This calls the Dashboard's `ProfileController` invoking the `Notifications` method, which it passes the arguments `1` and `Lincoln`, in that order. It roughly translates to:

```
$profileController = new ProfileController();
$profileController->notifications('1', 'Lincoln');
```

If the application is omitted, it will automatically search enabled applications for a suitably named controller. Therefore, avoid controller name overlap. If the method name is omitted, the `index()` method will be invoked. Therefore, the basic profile URL `/profile/1/Lincoln` could be more verbosely written as `/dashboard/profile/index/1/Lincoln` to more clearly understand what code it is invoking.

## Pretty URLs

All requests are dispatched thru the index.php file. While it's possible to use the framework by passing a 'p' parameter with the rest of the path (e.g. `/index.php?p=/profile`), it's best to configure your server to handle "pretty" URLs.

On Apache, this is accomplished with the `.htaccess` file provided with Vanilla that contains these rewrite rules:

```
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php\?p=$1 [QSA,L]
```

Consult the [community](/developer/community) if you need assistance configuring another server platform such as nginx or IIS.

Vanilla will attempt to detect whether your system can handle pretty URLs during installation. If it sets it incorrectly, the [config](/developer/configuration) setting to enable pretty URLs is:

```
$Configuration['Garden']['RewriteUrls'] = true;
```
The ability to use non-pretty URLs may be deprecated in the future.


## `setData()` and `data()`

Each controller contains an array of data that get's passed into it's view & templates for rendering. While it's possible to work with the `$controller->Data` object directly this is discouraged. Instead two functions utility functions are provided to fetch directly from the $Data array.

Data is read and written using [dot notation](/developer/configuration).

### data

The `data()` function takes 2 parameters.

- {string} $path - The data path to look up in dot notation.
- {mixed} $default - The value to return if no data is found. Defaults to an empty string.

### setData

The `setData` function takes 3 properties.

- {string} $path - the path to set the data at.
- {mixed} $value - The value to set for the data.
- {bool} $addProperty - Optionaly set the path directly on the controller in addition to the $Data array.

Alternatively `setData` can be passed an array of multiple `$path => $value` pairs instead of the 3 parameters. In this case each of these paths will be set in the $Data array with their given values.
