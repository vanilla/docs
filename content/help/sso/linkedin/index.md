---
title: LinkedIn
tags:
- Features
- Addons
- Integrations
category: help
menu:
  help:
    parent: sso
aliases:
- /help/addons/social/linkedin
---

Linked In social sign in allows users to sign in using their LinkedIn account. You must register your application with LinkedIn for this addon to work.

### How to Set up LinkedIn Social Sign in

1. Go to the LinkedIn Developer Network at [https://www.linkedin.com/secure/developer](https://www.linkedin.com/secure/developer)/
2. Click **Add New Application**. When you create the application, you can choose what to enter in most fields, but you have to make sure you enter specific information for some fields.
3. Under **Website URL** enter your forum's root url.
4. Under **Default Scope** make sure you've selected at least **r_basicprofile** and **r_emailaddress**.
5. Set the **OAuth 2.0 Redirect URLs** by appending both `/entry/connect/linkedin` and `/profile/linkedinconnect` to the end of your forum’s URL. (If your forum is at `example.com/forum`, your Redirect URLs would be `http://example.com/forum/entry/connect/linkedin` and `http://example.com/forum/profile/linkedinconnect`).
6. Once your application has been set up, you must copy the **Client ID** and **Client Secret** into your LinkedIn plugin settings page from your Vanilla dashboard.

![Settings in LinkedIn](/img/help/addons/social/linkedin/settings.jpg)
