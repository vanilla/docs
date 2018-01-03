---
title: Embedding
tags:
- Features
- Embedding
category: help
menu:
  help:
    identifier: embedding-help
aliases:
- /features/embedding
- /help/forum-settings/embedding
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
