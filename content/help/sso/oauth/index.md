---
title: OAuth
tags:
- Features
- Single Sign-On
- OAuth
category: help
menu:
  help:
    parent: sso
    identifier: sso-oauth
    weight: 2
aliases:
- /features/sso/oauth
---

## SSO with OAuth: Overview

Vanilla currently provides OAuth2 integrations with these third-party services as ready-to-go addons:

* Facebook
* Twitter
* LinkedIn
* Google+

Because OAuth 2.0 is an SSO *framework* and not a narrowly defined protocol (see [OAuth 2.0 Spec](https://tools.ietf.org/html/rfc6749)), 
custom services work is typically required to set up an OAuth solution for your forum. In an attempt to minimize the amount of custom 
services required to create SSO integrations, Vanilla has created a base class that can easily be extended by custom plugins. This base 
class might look like many of our plugins (containing event handlers, etc.) it is not intended to be executed directly. To take advantage 
of this class, either create a plug in to extend its features or use the OAuth2 plugin. 

## OAuth2 Plugin
 
### Overview

Vanilla has created an OAuth2 plugin that, for most use-cases, can provide a plug-and-play SSO solution.

OAuth2 accounts are mapped to existing forum accounts by email address, or a new account is created if no match is found.

### Features

The OAuth2 Plugin attempts to "parameterize" as many aspects of the functionality as possible. A settings form in the dashboard allows you to set:
 
 * The client id
 * The client secret
 * The full path to the authorization URI, registration URI, sign out URI, token endpoint and profile endpoint
 * The scope
 * The exepected keys in the JSON response in the profile request

### Possible Pitfalls

A number of things can go wrong when trying to implement SSO with this plugin:

 * Double check that all the parameters outlined in the Assumptions section above are met
 * Your forum must be accessed over `https` and must contact your Authorization Server in the same way
 * Your Authorization Server will usually need to "whitelist" the redirect URI (i.e. https://*[The url of the forum]*/entry/oauth2)
