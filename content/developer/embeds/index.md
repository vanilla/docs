---
title: Embeds
tags:
- Developers
category: developer
menu:
  developer:
    identifier: embeds
aliases:
- /developers/embeds
---

## Embeds

Vanilla allows developers to develop create components that are capable of scraping content from an external site and embedding it Vanilla content using custom markup. This capability is implemented using two components: a server-side component and a client-side component.

## Server-Side Components

To add a new embed type to the site, a new embed class must be created and registering it with the site's embed manager. This class will be responsible for obtaining relevant information from an external site, converting it into a standard format and generating the markup necessary for a browser to render the data.

### Creating a New Embed Class

All embed classes must extend the `Vanilla\Embeds\Embed` class. Strict type checking is performed when registering a new embed handler. If an embed component instance is determined to not be a child class of `Vanilla\Embeds\Embed`, it will trigger an error. Additionally, the embed base class provides several helpful methods for simplifying an embed implementation:

* `Embed::httpRequest` - Perform a full-customizable HTTP request.
* `Embed::imageSize` - Given an image URL, this method will attempt to determine its dimensions.
* `Embed::oembed` - Fetch full oEmbed data from an oEmbed source URL.
* `Embed::normalizeOembed` - Normalize oEmbed data to Vanilla's naming standard.

While the base class does try to handle most of the common functionality necessary for an embed, child classes must implement a few key methods:

* `__construct` - The constructor must be implemented for each child class to define the embed's primary type (e.g. "youtube") and its secondary type (e.g. "video")
* `canHandle` - Given both a domain and a full URL, this method determines if a URL can be handled by the embed class. If the result indicates it cannot handle a URL, subsequent calls to this embed for this URL are halted. If the result indicates the embed class can handle the URL, it is assumed a call to `matchUrl` is safe and will return relevant data.
* `matchUrl` - This method is expected to obtain relevant information about a URL. This does not necessarily mean the information has to be found in the document the URL points to. For example, the YouTube embed class retrieves the video ID from the URL, then fetches a separate oEmbed endpoint to get specific information about that video. Data returned from this endpoint should either be an associative array or `null`, if unable to obtain relevant information. If an array, the following keys are allowed:
    * name: Name of the resource (e.g. video's title).
    * body: Body text, if any (e.g. video description).
    * photoUrl: Associated image URL (e.g. video thumbnail).
    * height: Height of the resource (e.g. video height).
    * width: Width of the resource (e.g. video width).
    * attributes: An array of arbitrary associated data (e.g. a video ID).
* `renderData` - Embed markup generated for inclusion on a page is expected to be returned by this method. The data array parameter should be the same as was returned by the `matchUrl` method in the class.

### Registering the Embed Component

Once an embed class has been created, it must be registered with the embed manager. The embed manager is the centralized handler of what embed classes are called, based on a URL. New embeds must be added with the `EmbedManager::addEmbed` method, called on the shared instance. This requires hooking early into Vanilla's setup, but after the dependency injection container has been initialized. The `container_init` event can be used to perform this action.

```php
public function container_init_handler(Container $dic) {
    $dic->rule(Vanilla\Embeds\EmbedManager::class)
        ->addCall('addEmbed', [new Reference(MyEmbed::class)])
}
```

After the embed class has been registered, subsequent calls to the embed manager will use the class for URL scraping and markup generation. To test, you can use Vanilla's API v2 media endpoint to scrape a URL that should be handled by the new component.

## Client-Side Components

Client-side rendering is performed with JavaScript. The implementation of a client-side embed renderer is straightforward, primarily powered by a single renderer function.

Vanilla's `registerEmbed` function is required to register the new renderer. It must be imported from `@dashboard/embeds`. In addition, the `IEmbedData` interface is also required for  constructing a proper render function signature. To import these two requirements, you may include the following:

```javascript
import { registerEmbed, IEmbedData } from "@dashboard/embeds";
```

The renderer is expected to take two parameters: `element` and `data`. The `element` parameter is the HTML element that will contain the rendered embed, while `data` is expected to be an instance of `IEmbedData`, containing the data returned from a server-side embed component's `matchUrl` method. This function returns no value. It is expected to act on `element`.

```javascript
export async function myRenderer(element: HTMLElement, data: IEmbedData)
```

Lastly, a call to `registerEmbed` is necessary to ensure when an embed of the target type is encountered, the renderer function is called.

```javascript
registerEmbed("custom", myRenderer);
```

All the pieces can be seen coming together in the image embed renderer.

```javascript
import { registerEmbed, IEmbedData, FOCUS_CLASS } from "@dashboard/embeds";

// Setup image embeds.
registerEmbed("image", imageRenderer);

/**
 * Render an image embed in the editor.
 */
export async function imageRenderer(element: HTMLElement, data: IEmbedData) {
    element.classList.add("embed-image");
    element.classList.add("embedImage");

    const image = document.createElement("img");
    image.classList.add("embedImage-img");
    image.setAttribute("src", data.url || "");
    image.setAttribute("alt", data.name || "");

    element.appendChild(image);
}
```
