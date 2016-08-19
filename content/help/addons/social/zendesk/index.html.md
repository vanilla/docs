---
title: Zendesk
tags:
- Features
- Addons
- Integrations
category: help
menu:
  help:
    parent: social
    identifier: addons-social-zendesk
aliases:
- /addons/social/zendesk
---

## Zendesk

This plugin allows you to submit user discussion and comments to your hosted Zendesk.

### Setup Instructions

If you already have an account you need to enable API Access for this plugin to work.

1. Login to your Zendesk Site
2. Go to the Admin Setting
3. Under Channels Select API
4. Select the OAuth Clients
5. Add a client
6. Complete the form
7. Copy the Unique Identifier and Secret and enter it below
8. Set the Redirect URLs by appending `/profile/zendeskconnect` and then `/plugin/zendesk/connect` to the end of your forum’s URL. (If your forum is at `example.com/forum`, your Redirect URLs would be `http://example.com/profile/zendeskconnect` and `http://example.com/plugin/zendesk/connect`).

If you don't have an account you can create one for free at [Zendesk](http://www.zendesk.com/).
