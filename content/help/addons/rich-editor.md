---
title: Rich Editor
tags:
    - Features
    - Addons
    - Rich Editor
    - Advanced-editor
    - editor
    - quotes
category: help
menu:
    help:
        parent: addons
versioning:
    added: 2.8
---

## Overview

The Rich Editor is the default editor on Vanilla. It allows for intuitive styling and formatting to posts and discussions.

![A full view of editor](https://images.v-cdn.net/docs/richeditor_editorview.PNG

It should be noted that older clients of Vanilla may still be using our Advanced Editor, and are allowed to upgrade at any time.

## Important Functions

Rich Editor provides your users with familiar formatting tools. Here is a quick rundown of the functions that are currently available:

### Text Formatting

![The bold, italic, strikethrough, code, and link buttons](https://images.v-cdn.net/docs/richeditor_inlineformats.PNG

This first set of buttons allows you to add bold, italic, strike, code, or link formatting to selected text. This menu is dynamic and contextual, appearing wherever the user makes a selection. The following standard keyboard shortcuts also work when you have begun typing inside the editor.

-  `ctrl+b` or `⌘+b` for bold.
-  `ctrl+i` or `⌘+i` for italic.
-  `ctrl+k` or `⌘+k` for link.

### Lists

![Number List, Bullet List](https://images.v-cdn.net/docs/richeditor_lists.PNG

List are created by inputting `-` or `1.`, causing either numbers or bullet-points to mark each item in the list. After starting one of these two options, Rich Editor will jump you to the first point in your list. After writing the first point, hitting enter will bring you to the next point. Once you’re done with your list, just hit enter twice, and it will let you work on other aspects of your post.

### Headings and Special Text Formatting

![The format button and its menu](https://images.v-cdn.net/docs/richeditor_paragraphmenu.PNG

The block formatting menu provides a range of formatting options that take up 1 or multiple lines. Current formats include:

-   Text
-   Headings (level 1 and 2)
-   Quotes/Blockquotes
-   Code Blocks
-   Spoilers

![Block Formats Examples](https://images.v-cdn.net/docs/richeditor_blockformats.PNG)

Once a spoiler is posted it's contents will be hidden until their content is toggled. The spoiler format is always visible while editing a post, and can be interacted with once the post is published.

### Emoji

![Emoji](https://images.v-cdn.net/docs/richeditor_emojis.PNG)

This button contains a list of emoji that can be used within a post. Rich Editor provides 1000s of emojis for all of users sorted into 8 different categories.

## Uploading Images

Users with permission to upload images can add images to their post using the image upload button next to the emoji picker. Alternatively images can be dragged into Rich Editor.

## Uploading Files

Users with permission to upload files can add files to their post for others to download. This can be done by clicking the 'Paperclip' icon at the bottom of the Rich Editor text box. Users can also upload files by dragging them directly into the Rich Editor.  

![Successful File Upload](https://images.v-cdn.net/docs/richeditor_FileUploadSuccess.PNG

## Mentions

Mentions are a popular feature that have been brought over from the old Advanced Editor that allow users to notify other users on your forum of certain comments and discussions that may interest them. Depending on that user's notification settings, they'll get a pop-up on the forum or an email telling them that they've been mentioned in a post and provide them a link to where. It's a quick way to bring their attention to a certain place in a forum.  

To make a mention, simply type an "@" sign then immediatly start typing the user's name.  A drop-down menu will appear with a list of possible users, then narrow down as you type the name out.  

![Making a Mention](https://images.v-cdn.net/docs/richeditor_makingmention.PNG)

Mentions are sorted with case sensitivity and accents included to allow for more precise matching. It also has support for all characters except for the "@" sign.  

## Rich Embeds

Rich Editor supports embedding of external content within posts. Use the embed menu to transform a link into a rich content embed.

![Embed menu](https://images.v-cdn.net/docs/richeditor_embedmenu.PNG)

While we fetch the data for the embedded content, the link appears as a link with a loading indicator.

![Embed loading indicator](/img/help/addons/rich-editor/embed-loading.png)

Once the embed is ready it will display in it's final form directly in the editor.

### Quotes

If you embed a link from the same forum, or click on the "Quote" button, and embedded version of that content will be embedded in your post.

If the content is too long, an expand and collapse menu will be shown for that Rich Quote.

![Internal Link Quoted content](/img/help/addons/rich-editor/embed-quote.png)

### Links

Rich Editor offers a beautiful link embed. It fetches titles, descriptions, and images from the linked URL and displays them in a sleek modern view.

![External Link Embedded content](/img/help/addons/rich-editor/embed-site.png)

### Twitter

Twitter links get transformed into embedded tweets.

![Twitter Embed](/img/help/addons/rich-editor/embed-twitter.png)

### Videos

Videos appear as a fast, responsive thumbnail, with the full video loading on when the play button is clicked. Rich Editor currently supports:

-   Youtube
-   Vimeo
-   Twitch
-   Wistia

![Video Embed](/img/help/addons/rich-editor/embed-video.png)

### SoundCloud

![Soundcloud Embed](/img/help/addons/rich-editor/embed-soundcloud.png)

### Other Embeds

In additional to these types of embedded content, Rich Editor currently supports:

-   Giphy
-   Instagram
-   Getty Images
-   Codepen

## Enabling Rich Editor

While Rich Editor is now the default editor for Vanilla Forums, older clients may still find themselves using existing posting formats such as "Markdown", "BBCode", and "HTML" from [Advanced Editor](/help/addons/advanced-editor).

If you are an administrator you can use the Rich Editor format by:

1. Navigate to the Addons page.
2. Toggle the Rich Editor (WIP) plugin.

Enabling Rich Editor will automatically make "Rich" your default post format. To change your format back, go to the Posting page in dashboard settings, or navigate directly to `/vanilla/settings/posting`.

![Posting Format Settings page Rich](/img/help/addons/rich-editor/post-format-rich.png)

## FAQ

### What do I do with my existing Advanced Editor posts?

Rich Editor can function side by side with Advanced Editor. Leave Advanced Editor enabled in addition to Rich Editor, and older posts will still be editable using Advanced Editor.

### Why am I getting an error message when I try to upload a file?

There are two common errors that can occur when uploading a file to the Rich Editor. 

![File Type Error](https://images.v-cdn.net/docs/richeditor_fileuploaderrortype.PNG)

This error indicates that the file being uploaded is not currently allowed on the forum. If there is a specific file type that your site needs greenlisted, please reach out to Vanilla Support or your CSM to make the necessary change in your site's configuration.  

![File Too Big](/img/help/addons/rich-editor/https://images.v-cdn.net/docs/richeditor_fileuploaderrorsize.PNG)

This error indicates that the uploaded file's size is too large and can not be accepted. The default maximum file size is set at 50mb, but this can be changed to suit a site's needs. If you need to increase or decrease the maximum allowed file size limit, reach out to Vanilla Support or your CSM to make the necessary change in your site's configuration. 

### What causes the warning icon while inserting a Rich Embed?

Some users using browsers with strict privacy settings or adblockers may not be able to load a Rich Embed from certain sites in their browser. The warning icon indicates that all the data necessary to render the embed is present in the editor, but the user's browser is not allowing thet embed to be created.

These embeds will be still be able to load for users with a more permissive browser, even on the same post.

### Why is my published post replaced with "There was an error rendering this rich post"?

This message appears when an a published post was inserted improperly. This can happen through incorrect insertion of a post through the API.

The `Rich` format must be stored in a very particular way. Content from sources other than Rich Editor should not be stored with this format.

![Number List, Bullet List](/img/help/addons/rich-editor/rich-render-error.png)


## Additional Resources

-   [More information on posting](http://docs.vanillaforums.com/help/posting/)
