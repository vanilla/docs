---
title: Twitter
tags:
- Features
- Addons
- Integrations
category: help
menu:
  help:
    parent: sso
aliases:
- /help/addons/social/twitter
---

Twitter Connect allows users to sign in using their Twitter account. You must register your application with Twitter for this plugin to work.

### Setting up social login in Twitter Connect

1. Register Vanilla with Twitter at: [https://apps.twitter.com/app/new](https://apps.twitter.com/app/new)
2. Set the Callback URL by appending `/entry/twauthorize` to the end of your forum’s URL. (If your forum is at `example.com/forum`, your Callback URL would be `http://example.com/forum/entry/twauthorize`).
3. After registering, copy the "Consumer Key" and "Consumer Secret" into your Twitter plugin settings page from your Vanilla dashboard.

![Settings in Twitter](/img/help/addons/social/twitter/settings.png)
