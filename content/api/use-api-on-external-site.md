---
title: Use API on External Sites
tags: ["API"]
category: "api"
menu:
  api:
    identifier: external-sites
    weight: 20
---

The Vanilla Forums API can be used to display information from your community outside of the community such as your blog. This guide shows a basic example using javascript and jQuery.

## JSONP

Default browser security does not let you make API calls from an external site. This is necessary to prevent a wide range of hacking and in general keeps the web a safer place. However, to get around this limitation with the API Vanilla uses a technology called JSONP. There are some small differences with the way JSONP is used as apposed to basic AJAX, but most frameworks such as jQuery have built in support for JSONP making it very easy to use.

*In order to use JSONP with the Vanilla API you must have JSONP support turned on for your community. Ask support and they'll be happy to do this for you.*

## Making an API call with jQuery and JSONP

To make an API call with jQuery you'll need to look at our [API documentation]() and find the appropriate call. Here is an example call of the basic discussions endpoint.

```javascript
// Get the results of the discussions endpoint and display them in a list.
$.ajax({
    // The url of the api endpoint.
    url: "https://example.vanillaforums.com/api/v1/discussions.json",

    // The name of the callback parameter which should always be "callback".
    jsonp: "callback",

    // Tell jQuery we're expecting JSONP.
    dataType: "jsonp",

    // Work with the response.
    success: function(response) {
        var discussions = response['Discussions'];

        // The discussions variable now contains the discussions from the API call.
    }
});
```

### Notes

There are a few things to note about this code.

1. Notice that `jsonp: "callback"` argument? That's telling the forums to use JSONP. jQuery looks for that and handles everything for you. If you are using some other framework you'll have to look up how it handles JSONP. (Also note that older versions of jQuery have different ways of working with JSONP. Be sure to look at the documentation to be sure you are using the right method)

2. This call is being made agains https. You can make calls against http, but if you are within an https page then a call to an http page will fail. It's best to look for the right https page and make the call there.

3. Notice that there is no `access_token` query string parameter. Never, ever put the `access_token` in a script that is on the client-side. It is like a password and should only be used from the server.

4. The JSONP call will be made with the credentials of the user that is currently signed in to the forums. If no one is signed in then the call will be made as a guest.

### A Real Example

We've made a simple example using a feed from vanillaforums.com. Check it out on [codepen.io](http://cdpn.io/zxXwvJ).
