---
title: Embedding
tags:
- Features
- Embedding
category: developer
menu:
  developer:
    identifier: embedding-developer
aliases:
- /features/embedding/advanced
- /developer/embedding/advanced
---

## Overview

The advanced embedding technique is for developers who require programmatic interaction between the Vanilla iframe and their parent window. It employs [easyXDM](http://easyxdm.net/wp/) and a special container layer to achieve this. It requires a more in-depth setup than Vanilla's basic embed solution.

## Setting Up Advanced Embedding

Enable forum embedding via the Dashboard. Then set `Garden.Embed.Allow` to `2` in your config. _Cloud customers will have this done by support staff_.

1. Include easyXDM: `/js/easyXDM/easyXDM.min.js`
2. Include Vanilla's advanced embed script: `/js/vanilla.embed.js`
3. Create a div to contain Vanilla and give it an ID.
4. Call `Vanilla.embed({options})`.

### Options

Vanilla.embed() takes an associative array of options:

`root` **Required**. The root url of your Vanilla forum. Example: http://community.yoursite.com

`container` **Required**. The ID or DOM element of the container for Vanilla.

`initialPath` **Optional**. The initial path to browse to when embedding the forum. Our example below demonstrates using the hash part of the URL to automatically set this, e.g. `site.com/embedpage#/categories/some-category`. 

`sso` **Optional**. An SSO string that will automatically sign the user into Vanilla. See [our example code](https://github.com/vanillaforums/jsConnectPHP/blob/master/functions.jsconnect.php#L130).

`autoStart` **Optional**. Whether or not to start the embed when `embed()` is called. If this is false then you must call embed.start() to start the embed. Default: `true`.

`onReady()` **Optional**. A callback function to call when the embed is ready.

`notifyLocation(path)` **Optional**. A function that will be called when the url of the embedded iframe changes. You can use this callback to update your history. By default this function adds the path as the current location's # fragment. Combine this with initialPath to implement your own custom history.

`height(x)` **Optional**. A function that is called to set the height of the embedded iframe. If you override this method then you can access the embedded iframe using `this.iframe`.

### Methods

`start()` Start the embed. Only call this method if you set autoStart to `false`.

`setLocation(path)` Manually set the location of the embedded iframe. Just specify the path and not the full domain of the embed.

## Custom Callbacks

The embed API allows custom Javascript to be called between the parent and child iframes.

## Exposing a method to Vanilla

You can expose a method to the child iframe with the following code:

```javascript
Vanilla.embed.fn.functionName = function(args,...) { … }
```

The embed requires all functions on both sides to be explicitly registered to prevent a third party hijacking the embed and calling functions with unforeseen consequences.

Vanilla embed supports a callback function on both ends of the embed. If you want to support a callback function then declare it as the last argument of your function. When the other endpoint of the embed calls your function using `callRemote()` it can then specify a callback and the framework will handle calling the callback across the domain. 

## Calling a method in Vanilla

You can call a method in Vanilla with the following code:

```javascript
Vanilla.embed.callRemote("functionName", args [, callback]);
```

If you supply the callback argument to `callRemote()` then it will be supplied as the last argument to the remote function. It is the remote function’s job to call the function. Keep in mind that using `call()`, `apply()`, etc. to set a context for the function will not work as a context cannot be passed across the domain.

### Functions you can call on Vanilla

`Vanilla.embed.signout()` Calling this function will sign the user out of Vanilla. It won’t refresh the page so you may want to do that afterwards.

## Example implementation

```html
<!DOCTYPE html>
<html>
   <head>
   	  <meta charset="utf-8">
   	  <title>Sample Embed</title>
   	  <style>
         body {
            margin: 0;
         }
         #embedVanilla iframe {
            width: 100%;
         }
      </style>
      <script type="text/javascript" src="js/easyXDM/easyXDM.min.js"></script>
      <script type="text/javascript" src="js/vanilla.embed.js"></script>
   </head>
   <body style="background: #ff6600;">
      <div style="height: 50px">foo</div>
      <div id="embedVanilla"></div>
      <script type="text/javascript">
        // Help older browsers parse JSON.
        easyXDM.DomHelper.requiresJSON("js/easyXDM/json2.js");

        var vanillaEmbed = new Vanilla.embed({
          // The element or its ID.
          container: "embedVanilla",
          // This is the location of the forum.
          root: "http://yoursite.local",
          // initial path, please start it with a "/"
          initialPath: window.location.hash.substring(1),
          onReady: function() {
            // A lot of the functions need to be done after the embed is ready.

            // This how you set the location of the embedded frame.
            // vanillaEmbed.setLocation('/categories');
          }
        });
      </script>
   </body>
</html>
```
