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

## Options for using OAuth 2.0

Vanilla currently provides tailored OAuth 2.0 integrations with these third-party identity providers as ready-to-go addons:

* Facebook
* Twitter
* LinkedIn
* Google+

We also provide a generic OAuth2 addon that works with basic implementations, including support for the third-party service Auth0.

Because OAuth 2.0 is an SSO *framework* and not a narrowly defined protocol (see [OAuth 2.0 Spec](https://tools.ietf.org/html/rfc6749)), 
custom services work is occassionally required to set up an OAuth solution tailored to your forum. Our generic OAuth2 addon is highly extensible to be able to render these services quickly and efficiently.

If you do not currently have an OAuth 2.0 identity provider, we strongly recommend using a third-party provider in place of creating a new one before launching your forum.

## How OAuth2 works in Vanilla
 
As with all our SSO solutions, OAuth2 accounts are mapped to existing forum accounts by email address, or a new account is created if no match is found. You may combine it with any other SSO connections.

A settings form in the dashboard allows you to define custom parameter names for:
 
 * Client id
 * Client secret
 * Full path to the authorization URI, registration URI, sign out URI, token endpoint and profile endpoint
 * Scope
 * Exepected keys in the JSON response to the profile request

### Setting up your OAuth2 Provider

With most SSO providers, you will have two additional requirements:

 * Your forum must be accessed over `https` by users.
 * Your forum must contact your Authorization Server using `https`.
 * Your Authorization Server will need to whitelist the redirect URI (e.g. `https://[forum-domain].com/entry/oauth2`)
 

### Automating OAuth2 connections with Javascript

This section details how a developer on your team could use Javascript to automatically forward a user thru the OAuth2 SSO process, creating a more seamless experience. It is not required for any service, nor is it generally recommended (it will generate _significantly_ increased traffic against your identity provider). We do not provide this as a service.

The following instructions will determine if the user is currently signed into their authentication provider and, if the user is indeed signed in, automatically initiate a SSO login into Vanilla using that authentication provider.

#### Create a connection in Javascript

First, make a standard HTTPS GET request to the authentication provider's authorize endpoint. If you're using Auth0, this is usually something like `https://[eauth-domain].com/authorize`. Use the following parameters:

* `response_type: code`
* `client_id: 1234567890ABCDEFG` (found in the provider's application settings)
* `redirect_uri: https://[forum-domain]/entry/oauth2` (required to initiate SSO on Vanilla's side)
* `scope: openid profile email` (can be configured in the OAuth2 settings page in Vanilla)

The result is a URL which, when visited by a user signed in on the authentication provider, will route the user back to Vanilla to begin SSO authentication. If the user already has an account, they can automatically connect to an existing or can automatically create a new account, they will be signed into Vanilla at the end of the request chain. The URL will look something like this: 
`https://[auth-domain].com/authorize?response_type=code&client_id=1234567890ABCDEFG&redirect_uri=https%3A%2F%2Fcyourforum.com%2Fentry%2Foauth2&scope=openid+profile+email`

#### Test the connection

1. Sign in at `https://[auth-domain].com` (your actual SSO sign in page)
2. Visit `https://[forum-domain].com`. Make sure you are not logged in. Clear your cookies, if necessary.
3. Visit the "authorize" link described above.
4. You should automatically arrive back at `https://[forum-domain].com`, but you should now be signed into Vanilla.

In Vanilla, this can be implemented as Javascript in your page via the Customize Theme feature or a Pocket. Contact support if you need clarification on these steps.
