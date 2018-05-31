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

### Creating a New Renderer

Any new client-side rendering functions must accept two parameters: `element` and `data`. The `element` parameter is the HTML element that will contain the rendered embed, while `data` is expected to be an instance of `IEmbedData` (which must be imported from `@dashboard/embeds`), containing the data returned from a server-side embed component's `matchUrl` method. Renderer functions do not return a value. They are expected to render any new HTML elements by acting on the value of `element`.

Renderers may be defined as asynchronous functions. This can be particularly beneficial when ensuring an additional script is available as part of the rendering process. For example, a Twitter embed renderer might want to include the official Twitter widget library and wait for it to load, before proceeding with rendering.

```typescript
export async function renderTweet(element: Element, data: IEmbedData) {
    // Ensure the twitter library is loaded.
    await ensureScript("//platform.twitter.com/widgets.js");

    if (!window.twttr) {
        throw new Error("The Twitter widget failed to load.");
    }
    // ...
}
```
### Registering the Renderer

Vanilla's `registerEmbed` function is required to register new renderer functions and must be imported from `@dashboard/embeds`. To register an embed renderer, an embed type and a function must be provided.

```typescript
registerEmbed("myEmbed", renderMyEmbed);
```

Registering an embed renderer ensures it will automatically be used in JavaScript rendering contexts, such as those used by the Rich Editor addon.

### Calling the Renderer

Registering a renderer is a good way to have it automatically called on new content. However, sometimes existing content on the page will need to be converted (e.g. Twitter links from server-rendered content). In those cases, it's best to create a separate function to perform the conversion. Within this function, the specific elements can be queried and passed through the renderer function, one at a time. This conversion function can then be called, directly in the script, to perform the necessary updates.

```typescript
// Convert existing "MyEmbed" embeds.
function convertExistingEmbeds() {
    // Grab all the unconverted embeds. The my-unconverted-embeds class was part of the MyEmbeds::renderData output.
    const unconverted = Array.from(document.querySelectorAll(".my-unconverted-embeds"));
    if (unconverted.length > 0) {
        unconverted.forEach(element => {
            // Get embed data out of the data attributes.
            const url = element.getAttribute("data-myembed") || "";

            const renderData: IEmbedData = {
                type: "myEmbed",
                url,
            };

            renderMyEmbed(element, renderData);
        });
    }
}
```

### Example

All the pieces can be seen coming together in the image embed renderer.

```typescript
import { registerEmbed, IEmbedData, FOCUS_CLASS } from "@dashboard/embeds";

// Setup image embeds.
registerEmbed("image", imageRenderer);

/**
 * Render an image embed in the editor.
 */
export function imageRenderer(element: HTMLElement, data: IEmbedData) {
    element.classList.add("embed-image");
    element.classList.add("embedImage");

    const image = document.createElement("img");
    image.classList.add("embedImage-img");
    image.setAttribute("src", data.url || "");
    image.setAttribute("alt", data.name || "");

    element.appendChild(image);
}
```
