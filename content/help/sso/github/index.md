---
title: Github
tags:
- Features
- Addons
- Integrations
category: help
menu:
  help:
    parent: sso
aliases:
- /help/integrations/github
- /help/addons/social/github
---

This plugin allows you to submit user discussion and comments as GitHub issues.

### Setup Instructions

If you already have a Github account, you need to enable API Access for this plugin to work.

1. [Create a new application in GitHub](https://github.com/settings/applications/new), and set the callback URL by appending `/profile/githubconnect` to the end of your forum’s URL. (If your forum is at `example.com/forum`, your callback URL would be `http://example.com/forum/profile/githubconnect`).
2. Once your application has been set up, you must copy the **ClientID** and **Secret** into your Github plugin settings page from your Vanilla dashboard.
3. Enter the repositories you want to be allowed into your Github plugin settings page from your Vanilla dashboard.
