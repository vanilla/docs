---
title: Rich Editor
tags:
- Features
- Addons
- Rich Editor
- Advanced-editor
- editor
category: help
menu:
  help:
    parent: addons
---

## Overview

The Rich Editor adds intuitive styling and formatting to a posts and documents on Vanilla. The plugin is available on all plan levels and can easily be toggled on in the `Addon` menu of the dashboard.

![A full view of editor](/img/help/addons/rich-editor/editor-view.png)

## Important Functions

Once enabled, Rich Editor provides your users with familiar formatting tools. Here is a quick rundown of the functions that are currently available:

### Text Formatting

![The bold, italic, strikethrough, code, and link buttons](/img/help/addons/rich-editor/inline-formats.png)

This first set of buttons allows you to add bold, italic, strike, code, or link formatting to selected text. This menu is dynamic and contextual, appearing wherever the user makes a selection. The standard keyboard shortcuts, `ctrl+b`, `ctrl+i`, and `ctrl+k` also work when you have begun typing inside the editor.

### Lists
![Number List, Bullet List](/img/help/addons/rich-editor/lists.png)

List are created by inputting  the `- ` or `1. ` - using either numbers or bullet-points to mark each item in the list. After starting one of these two options, Rich Editor will jump you to the first point in your list. After writing the first point, hitting enter will bring you to the next point. Once you’re done with your list, just hit enter twice, and it will let you work on other aspects of your post.

### Headings and Special Text Formatting
![The format button and its menu](/img/help/addons/rich-editor/paragraph-menu.png)

The block formatting menu provides a range of formatting options that take up 1 or multiple lines. Current formats include

- Text
- Headings (level 1 and 2)
- Quotes/Blockquotes
- Code Blocks
- Spoilers

![Block Formats Examples](/img/help/addons/rich-editor/block-formats.png)

Once a spoiler is posted it's contents will be hidden until their content is toggled. The spoiler format is always visible while editing a post, and can be interacted with once the post is published.

### Emoji
![Emoji](/img/help/addons/rich-editor/emojis.png)

This button contains a list of emoji that can be used within a post. Rich Editor provides 1000s of emojis for all of users sorted into 8 different categories.

### Uploading images and attachments  

## Rich Embeds

Rich Editor supports embedding of external content within posts. Use the embed menu to transform a link into a rich content embed.

![Embed menu](/img/help/addons/rich-editor/embed-menu.png)

While we fetch the data for the embedded content, the link appears as a link with a loading indicator.

![Embed loading indicator](/img/help/addons/rich-editor/embed-loading.png)

Once the embed is ready it will display in it's final form directly in the editor.

### Links

Rich Editor offers a beautiful link embed. It fetches titles, descriptions, and images from the linked URL and displays them in a sleek modern view.

![External Link Embedded content](/img/help/addons/rich-editor/embed-link.png)

### Twitter

Twitter links get transformed into embedded tweets.

![Twitter Embed](/img/help/addons/rich-editor/.png)

### Videos

Videos appear as a fast, responsive thumbnail, with the full video loading on when the play button is clicked. Rich Editor currently supports

- Youtube
- Vimeo
- Twitch
- Wistia

![Video Embed](/img/help/addons/rich-editor/embed-video.png)

### SoundCloud

![Soundcloud Embed](/img/help/addons/rich-editor/embed-video.png)

### Other Embeds

In additional to these types of embedded content, Rich Editor supports

- Giphy
- Instagram
- Getty Images

## FAQ

### What do I do with my existing Advanced Editor posts?

Rich Editor can function side by side with Advanced Editor. Leave Advanced Editor enabled in addition to Rich Editor, and older posts will still be editable using Advanced Editor.

### What causes the warning icon while inserting a Rich Embed?

Some users using browsers with strict privacy settings or adblockers may not be able to load a Rich Embed from certain sites in their browser. The warning icon indicates that all the data necessary to render the embed is present in the editor, but the user's browser is not allowing thet embed to be created.

These embeds will be still be able to load for users with a more permissive browser, even on the same post.

### Why is my published post replaced with "There was an error rendering this rich post"?

This message appears when an a published post was inserted improperly. This can happen through incorrect insertion of a post through the API.

The `Rich` format must be stored in a very particular way. Content from sources other than Rich Editor should not be stored with this format.

## Additional Resources

- [More information on posting](http://docs.vanillaforums.com/help/posting/)
