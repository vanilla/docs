---
title: Advanced Editor
tags:
- Features
- Addons
category: help
menu:
  help:
    parent: addons
    identifier: addons-advanced-editor
aliases:
- /addons/advanced-editor
- /help/addons/advanced-editor/additional-settings
---

## Overview

Advance Editor adds formatting and style controls that can be utilized while composing a post. The editor can be set to use WYSIWYG, simple HTML, Markdown, TextEx or BBCode. This plugin is available on all plan levels and can easily be toggled on in the 'Addon' menu of the Dashboard.

![A full view of editor](https://images.v-cdn.net/docs/Posting_Editor.png)

## Important Functions

Once enabled, Advanced Editor provides your users with familiar formatting tools. Here is a quick rundown of the functions that are currently available:

### Text Formatting

![The bold, italic, and strikethrough buttons](https://images.v-cdn.net/docs/AE_Bold-Italic-Strike.PNG)

This first set of buttons allows you to add bold, italic, or strike through tags to selected text. The standard keyboard shortcuts, ctrl+b, ctrl+i, and ctrl+s also work when you have begun typing inside the editor.

### Lists
![Number List, Bullet List](https://images.v-cdn.net/docs/AE_List.PNG)

These two buttons give the user the ability to start a list - using either numbers or bullet-points to mark each item in the list. After hitting one of those two options, Advanced Editor will jump you to the first point in your list. After writing the first point, hitting enter will bring you to the next point. Once you’re done with your list, just hit enter twice, and it will let you work on other aspects of your post.  

### Headings and Special Text Formatting
![The format button and its menu](https://images.v-cdn.net/docs/AE_HeadingFormats.PNG)

This button provides access to a list of formats that can be applied to text and serve various functions. First, the two headings will allow for some basic text size changes:

![Heading Examples](https://images.v-cdn.net/docs/AE_HeadingFormatExamples.PNG)

Quoting creates a block quote from your currently selected text. Additionally, you can turn on the "Quoting" addon in your dashboard to display a button on each post in your community. Quoting a post directly will automatically link back to the comment, and user.

Content placed in a spoiler will be hidden until the ‘Show’ button is clicked. The Spoiler format is not visible while editing a post, even in wysiwyg. You can interact with the toggle once the post is published.

The code tag allows you to place code in your post without formatting conflicts. The way this displays on your forum will depend on your theme. There is an addon called "Syntax Prettfyier" that adds enhanced options to how code is displayed in your forum, allowing you to override the default CSS and add numbered lines, if desired.  

### Emoji
![Emoji](https://images.v-cdn.net/docs/AE_Emojis.PNG)

This button contains a list of emoji that can be used within a post. You can find a list of current emoji, [here](https://blog.vanillaforums.com/features/the-complete-list-vanilla-emoji/).

### Adding URLs
![URL](https://images.v-cdn.net/docs/AE_URL.PNG)

This button allows the user to create a hyperlink within their post. After highlighting the text that needs to be a link, the user can click on this button to paste the URL into the form. Once ‘Ok’ is clicked, the highlighted text will become a link to the designated website.  

### Attaching Images and Uploading Files
![Attach File Tool](https://images.v-cdn.net/docs/AE_FileUpload2.PNG)

This next icon indicates the Attach File tool. With Advanced Editor, there are a few easy ways to attach files to a post.  

The easiest way to upload is the drag-and-drop method. Dragging a file from your computer's file explorer and hovering it over your new post will display an overlay, letting you know that you can drop it into the editor. Dropping it into the editor will immediately upload the file.  

You'll know that the file upload was successful when you see the name of the file appear in a small box underneath the comment box. Clicking the small X next to the file will remove it from the post. You can click the icon again to place it back, or save the post to remove it permanently.

![Successful File Upload](https://images.v-cdn.net/docs/AE_ExampleFile.PNG)

After you post your comment with an attached file, other users will see the upload appear underneath your comment in box labeled with the file's name. Clicking on the box starts an automatic download of that file to the user's computer.  

![Attach Image Tool](https://images.v-cdn.net/docs/AE_ImageUpload.PNG)

Next to attach file is the Attach Image tool. The Attach Image tool works almost identically to the File Upload tool above, except that when a user uploads an image to a post, the image is automatically embedded. .JPG, .PNG and .GIF files will be displayed.

This menu also allows you to take a URL from an image hosted on another site and embed that in the post directly.  

Below is an animated example of the drag-And-drop method of image attachments. If the editor is in WYSIWYG mode, the image will appear in the editor just as it will when its posted:

![Drag and Drop Image Example](https://images.v-cdn.net/docs/AE_DragAndDropExample.gif)

For HTML, BBC and Markdown modes, the appropriate markup for an image will be inserted where the cursor is, and the image will appear when the post is published. File types other than images that are dropped in will appear underneath the comment box.

### Changing A Post's Body Alignment
![Alignment](https://images.v-cdn.net/docs/AE_Alignment.PNG)

These familiar buttons allow users to align text within their post to the left, center, or to the right, depending on their need or preference. Alignment cannot be adjusted when using Markdown, so these buttons wont appear if Advanced Editor is set to that format. 

### HTML View
![HTML View Toggle](https://images.v-cdn.net/docs/AE_HTMLView.PNG)

This last button toggles HTML view for posts created in WYSIWYG for more advanced editing and format correction.  

![HTML View](https://images.v-cdn.net/docs/AE_HTMLViewExample.PNG)

You can return to the normal WYSIWYG view by hitting the HTML view toggle again.  

## Additional settings

Advanced Editor has different modes to help you accommodate the needs of your community.

If you are an administrator, you can change the settings for the editor in the Dashboard. Click the Settings icon next to advanced-editor on your addon list, or navigate directly to `/settings/editor`.

![Advanced Editor Dashboard Settings](https://images.v-cdn.net/docs/AE_DashboardSettings.PNG)

By default, all forums are set to use Markdown as their post format.

### Wysiwyg

WYSIWYG stands for "What you see is what you get". It is a familiar and intuitive format for most end users. In this mode, pictures and text formatting will display in the editor as the user composes their post, eliminating the need for them to understand formatting tags.

When selected, there will be an additional option to reinterpret all old posts as Wysiwyg. The purpose of this option is to normalize the editor format. If you have posts on your forum that were composed in BBC or Markdown, they will still display their formatting tags unless this box is checked.


### Markdown

Markdown is a lightweight markup language that is popular and flexible. When selected for your forum, all of the formatting buttons will place the corresponding markup into the post. [This article](https://en.wikipedia.org/wiki/Markdown) will be linked under the editor to help guide unfamiliar users.


### HTML

HTML is the standard markup language of the web. [This article](http://www.simplehtmlguide.com/cheatsheet.php) will be linked below the editor when this mode is enabled.


### BBCode

BBC stands for Bulletin Board Code. It is a common markup language for community forums, and a great option for communities with users who are already familiar with forums. [This article](https://en.wikipedia.org/wiki/BBCode) will be linked below the editor when this mode is enabled.


### Text Ex

Text Ex is a plain text version of the editor that still allows Links, Emoji, and file attachments. Smart Embed will also still work in this mode, allowing for videos and other sharable content to be posted inline.

### Text

For communities that need to restrict formatting entirely, this mode enables only plain text posting.

## Mobile Editor

You can choose a different format for posts made from your mobile site. Using the same format is recommended.


## Additional Resources

- [More information on posting](http://docs.vanillaforums.com/help/posting/)
- [Using Emoji](http://docs.vanillaforums.com/help/posting/emoji/)
- [Using Smart Embed](http://docs.vanillaforums.com/help/posting/smart-embed/)
