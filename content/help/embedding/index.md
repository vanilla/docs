---
title: Embedding
tags:
- Features
- Embedding
- Advanced Embedding
category: help
menu:
  help:
    identifier: embedding-help
aliases:
- /features/embedding
- /features/embedding/advanced
- /help/forum-settings/embedding
- /developer/embedding/advanced
---

Looking for Setup instructions? Take a look at our [developer documentation](/developer/embedding/).

## Embedding Forum

Embedding Vanilla Forums works by putting a snippet of code on your website page, and may be a choice if you want to insert your forum into a site quickly. The snippet points to some javascript and the forum is embedded into the page using an iframe

**Embedding Checklist**

1.  Choose the embed friendly theme. This theme has minimal padding around it and will look good at any width. (Make modifications in Customize theme as you like).
2.  Ensure you have ***"Enabled Embedding"*** in your dashboard.
3.  Make sure that the page in which you embed is free of javascript errors.

Some considerations when it comes to  Embedding:

1. The possibility of slower loading times, as your site needs to load the forum via JavaScript along with any other content you may have loading via JavaScript.
2. Issues with SEO, as Google (and other search engines) don't always do a great job of indexing framed content.

## Embedding comments

This feature will allow those of you who have a blog or news site to use Vanilla as a commenting system and really engage readers who might otherwise just enter a comment and leave.  

1. A single profile, reputation and user experience across the community and the comments
2. Engage commenters with Vanilla’s existing gamification and curation features
3. Use blog traffic to quickly seed community participation and vice versa

### How do I implement comments?

There is a [WordPress plugin](https://wordpress.org/plugins/vanilla-forums/) available that allows you to enable comments on your WordPress blog from your WordPress dashboard. Alternately, we have a universal javascript code snippet that can be placed into any page to get comments enabled.

If you are using different blog software, you will need to edit the blog template and replace the existing blog comments with the code that can be found in the Dashboard under Forum>Blog Comments. Use our Universal Code, the code snippet can be modified to create discussion threads in the appropriate forum category based on the blog post category.

### What does Vanilla use as an excerpt from my blog article when creating a blog comment discussion?

When Vanilla creates a discussion thread based on a blog article, it will grab the blog title, the first few lines of the blog text and an image. You can use Open Graph meta tags to specify what image should be used. Otherwise, it grabs the first 4 images on the page and finds the "best" one it can - i.e. the biggest image that is at least 100x100, but smaller than 800px wide and not banner-shaped.

Readers can log in using a Disqus ID, Twitter, Google, FaceBook or via single sign on.

## Overview

The advanced embedding technique is for developers who require programmatic interaction between the Vanilla iframe and their parent window. It employs [easyXDM](http://easyxdm.net/wp/) and a special container layer to achieve this. It requires a more in-depth setup than Vanilla's basic embed solution.

## Testing embedding locally on Docker

If your local environment is set up with [vanilla-docker](https://github.com/vanilla/vanilla-docker) local embed setups are very simple to configure.

1. Clone the [stub-embed-providers repo](https://github.com/vanilla/stub-embed-providers) next to your vanilla-docker repo.

__Simple & Comments Embed__
2. Add the following to your configuration.

```php
$Configuration['Garden']['Embed']['Allow'] = true;
```

3. Navigate to `http://embed.vanilla.localhost` and test your forum.
4. Navigate to `http://comments-embed.vanilla.localhost/` and test your comments embed.

__Advanced Embed__

2. Add the following to your configuration. 

```php
$Configuration['Garden']['Embed']['Allow'] = 2;
```

3. Navigate to http://advanced-embed.vanilla.localhost and test your forum.

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

### Custom Callbacks

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
