---
title: Twitter
tags:
- Features
- Addons
- Integrations
category: help
menu:
  help:
    parent: social
    identifier: addons-social-twitter
aliases:
- /addons/social/twitter
---

## Twitter

Twitter Connect allows users to sign in using their Twitter account. You must register your application with Twitter for this plugin to work.

### Setting up social login in Twitter Connect

1. Register Vanilla with Twitter at: [http://dev.twitter.com/apps/new](http://dev.twitter.com/apps/new)
2. Set the Callback URL by appending `/entry/twauthorize` to the end of your forum’s URL. (If your forum is at `example.com/forum`, your Callback URL would be `http://example.com/forum/entry/twauthorize`).
3. After registering, copy the "Consumer Key" and "Consumer Secret" into your Twitter plugin settings page from your Vanilla dashboard.

![Settings in Twitter](/img/help/addons/social/twitter/settings.png)
