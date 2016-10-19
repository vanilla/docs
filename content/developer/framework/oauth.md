---
title: OAuth
tags:
- Developers
- Framework
category: developer
menu:
  developer:
    parent: framework
aliases:
- /developers/framework/oauth
---

## SSO with OAuth: Overview

Vanilla currently provides OAuth2 integrations with these third-party services as ready-to-go addons:

* Facebook
* Twitter
* LinkedIn
* Google+

Because OAuth 2.0 is an SSO *framework* and not a narrowly defined protocol (see [OAuth 2.0 Spec](https://tools.ietf.org/html/rfc6749)), custom services work is typically required to set up an OAuth solution for your forum. In an attempt to minimize the amount of custom services required to create SSO integrations, Vanilla has created a base class that can easily be extended by custom plugins. This base class might look like many of our plugins (containing event handlers, etc.) it is not intended to be executed directly. To take advantage of this class, either use our **OAuth2 Plugin** or **Create Your Own OAuth2 Plugin**. 

## OAuth2 Plugin

### Overview

Vanilla has created an OAuth2 plugin that, for most use-cases, can provide a plug-and-play SSO solution.

OAuth2 accounts are mapped to existing forum accounts by email address, or a new account is created if no match is found.

### Workflow

This plugin has a workflow of three distinct steps:

 * An **authorization request** (request for a code)
 * A **token request** (the code is exchanged for an authorization token)
 * A **profile request** (by passing the authoriztion token)

### Assumptions

Besides requiring that you follow the workflow above, this plugin has several assumptions about the setup of the Authorization Server. If your Authorization Server does not meet these assumptions it does not mean that you cannot integrate with a Vanilla forum, it means that you will not be able to use this plugin out of the box and that you will requires some level of customization.

 * All requests from Vanilla are sent with the header `Content-Type: application/x-www-form-urlencoded`
 * The Authorization Server will expect an authorization request sent by GET with the following parameters:
  * `response_type` => `code`
  * `client_id`
  * `redirect_uri` => https://*[The url of the forum]*/entry/oauth2
  * `scope`
  * `state`
 * The Authorization Server will respond to a successful log in by sending a `code` through GET to the `redirect_uri`
 * The Authorization Server will expect a token request sent by POST with the following parameters:
  * `code` => *[the code returned from the authorization request]*
  * `client_id`
  * `client_secret`
  * `redirect_uri` => https://*[The url of the forum]*/entry/oauth2
  * `grant_type` => `authorization_code`
  * `scope`
 * The Authorization Server will send a JSON response with the variable `access_token`
 * The Authorization Server will accept a request for the user's profile sent by GET with `access_token`
 * The Authorization Server will send a JSON response with at least the following:
  * A uniqueID for the user
  * the user's email
  * the user's name (display name, nickname)

**NOTE**: Not supported in this work flow are **"nonce" support** (a hash sent in the `state` and verified to be unchanged) and **refresh tokens**.

### Features

The OAuth2 Plugin attempts to "parameterize" as many aspects of the functionality as possible. A settings form in the dashboard allows you to set:

 * The client id
 * The client secret
 * The full path to the authorization URI, registration uri, sign out uri, token endpoint and profile endpoint
 * The scope
 * The exepected keys in the json response in the profile request

### Possible Pitfalls

A number of things can go wrong when trying to implement SSO with this plugin:

 * Double check that all the parameters outlined in the Assumptions section above are met
 * Your forum must be accessed over `https` and must contact your Authorization Server in the same way
 * Your Authorization Server will usually need to "whitelist" the redirect URI (i.e. https://*[The url of the forum]*/entry/oauth2)

## Create Your Own OAuth2 Plugin

For more on how to create your own plugin see our docs on [Plugins](/developer/plugins/). 

Feel free to use the OAuth2 plugin as a template. Make sure your plugin extends Gdn_OAuth2. You may want to change your ProviderKey (the key used to store your configuration data in the db) to something unique:

`$this->setProviderKey('myOauthConnection');`

This key will appear as part of a URL on the public facing site when users connect so you will want to make it relevant, readable and url safe.

Now you can override any of the methods or constants in Gdn_OAuth2 or create new hooks for added functionality.
