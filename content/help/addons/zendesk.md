---
title: Zendesk
tags:
- Addons
category: help
menu:
  help:
    parent: addons
    identifier: addon-zendesk
aliases:
- /addons/zendesk
---

## Overview

This plugin allows you to:

- Link your Zendesk account to your Vanilla user profile.
- Submit users' discussions and comments as tickets to your hosted Zendesk.

## Setup

If you already have an account you need to enable API Access for this plugin to work.

1. Login to your Zendesk Site.
1. Go to the Admin Setting.
1. Under Channels Select API.
1. Select the OAuth Clients.
1. Add a client.
1. Complete the form.
1. Copy the Unique Identifier and Secret and enter it below.
1. Set the Redirect URLs by appending `/profile/zendeskconnect` and then `/plugin/zendesk/connect` to the end of your forum's URL.
    - If your forum is at `https://forum.example.com/`, your Redirect URLs would be `https://forum.example.com/profile/zendeskconnect` and `https://forum.example.com/plugin/zendesk/connect`.
    - If your forum is at `https://forum.example.com/en/`, your Redirect URLs would be `https://forum.example.com/en/profile/zendeskconnect` and `https://forum.example.com/en/plugin/zendesk/connect`.

## Link your account

1. Login to Vanilla.
1. Go to your profile page.
1. Edit your profile.
1. Click on the Social section. *(/profile/connections)*
1. Click "Connect" on Zendesk.
1. Follow the instructions from there.

If you don't have an account you can create one for free at [Zendesk](http://www.zendesk.com/).

## F.A.Q

### I get an error saying `Invalid Authorization Request. bad_request` when I try to link my account.

Make sure that the URL you are on when you are in the social section of your profile matches the Redirect URLs that you set in the configuration.

Example: If the URL when you are on in your profile's social section is `https://forum.example.com/somedirectory/profile/connections`,
you should have `https://forum.example.com/somedirectory/profile/zendeskconnect` and `https://forum.example.com/somedirectory/plugin/zendesk/connect`
in your configuration.
