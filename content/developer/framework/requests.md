---
title: Requests
layout: docs
categories: ["Developers","Framework"]
---

## Requests

Vanilla's base Controller class (the class from which all [controllers](/developers/framework/controllers) are extended) accepts a DeliveryType parameter on every request. Depending on the type of delivery being requested, a controller in Garden will deliver all of a page, part of a page, or part of a page plus extra information as JSON.

### DeliveryType

There are four delivery types available:

1. `DELIVERY_TYPE_ALL`: Entire page (default).
2. `DELIVERY_TYPE_ASSET`: Content for the requested [asset](/developers/framework/assets).
3. `DELIVERY_TYPE_VIEW`: Only the requested [view](/developers/framework/views).
4. `DELIVERY_TYPE_BOOL`: Only report request success (true/false).

If no delivery type is provided in the request, `DELIVERY_TYPE_ALL` is assumed.

In order to made the controller deliver content other than `DELIVERY_TYPE_ALL`, you would have to append the request URL (or post data) with the `DeliveryType` parameter set to the above value you want. 

A `DELIVERY_TYPE_VIEW` request can be easily used for progressive data loading. That or a `DELIVERY_TYPE_ASSET` request could be used to update part of a page. A `DELIVERY_TYPE_BOOL` request is used for actions like closing a discussion.

### DeliveryMethod

The DeliveryMethod defines what format you want the response in.

1. `DELIVERY_METHOD_XHTML`: Delivered as HTML (default).
2. `DELIVERY_METHOD_JSON`: As JSON.
3. `DELIVERY_METHOD_XML`: As XML.
4. `DELIVERY_METHOD_TEXT`: As text/plain (since 2.1).
5. `DELIVERY_METHOD_PLAIN`: No Content-Type is set (since 2.1).
6. `DELIVERY_METHOD_RSS`: An RSS feed (since 2.1).

Vanilla builds datasets for its pages in generic collections that can be output in any of the above formats, assuming an appropriate view is available.

You can define a `DeliveryMethod` by appending it to your request like `DeliveryType`, or by appending an extension to your request after the method. For example, try viewing `/profile` on your forum vs. `/profile.json`. Note that arguments are added normally after another slash. Supposing you wanted to view userid 2's profile with the name Lincoln, you would use `/profile.json/2/Lincoln`.

### Parsing Requests

Vanilla parses incoming URLs and parameters for you. There is rarely any reason to directly access PHP globals like `$_GET`. The `Gdn_Request` class (in `/library/core/class.request.php`) handles this for you.

`Gdn::request()->domain()` will return the current domain. These methods also work as you'd expect: `Host`, `IpAddress`, `Path`, and `Port`. You can also call `Get` and `Post` with a parameter name to see its current value. See `Gdn_Request` for more request data.

A few more useful methods:

Use `Gdn::request()->isAuthenticatedPostback()` to check that the current user sent a `POST` request along with their TransientKey to protect against CSRF attacks. All forms built with Vanilla include a TransientKey.

Use `Gdn::request()->url()` to build safe URLs to other parts of Vanilla. The  `url()` function is a shortcut to this method.

Use `Gdn::request()->requestMethod()` to find out which Vanilla method was called by the current request.