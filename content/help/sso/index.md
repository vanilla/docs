---
title: Single Sign-On (SSO)
tags:
- Features
- Single Sign-On
category: help
menu:
  help:
    identifier: sso
    weight: 9
aliases:
- /features/sso
- /help/addons/social
---

## Single Sign-On overview

Single sign-on (SSO) is how to let your users sign on to a third-party system (like a Vanilla Forum) without needing a separate username and password.

In broad terms, an SSO solution defines how two systems securely communicate the identity of a user that is switching between them. In the context of Vanilla, that means the forum securely talking to your site or identity provider to see if a user is signed in, and then automatically using that identity.

## Solutions we offer

Vanilla offers three flavors of single sign-on:

* [SAML](/help/sso/saml) (cloud-only)
* [OAuth 2](/help/sso/oauth)
* [jsConnect](/help/sso/jsconnect) (our in-house solution)

We also offer:


* Social SSO (Twitter, Facebook, and more).
* Third-party service integration (e.g. Auth0; cloud-only).
* Custom SSO integrations (cloud-only).

All flavors and types of SSO follow general rules in Vanilla, many of which are outlined below.

## General principles

Regardless of your type of SSO, these principles apply to how Vanilla handles it:

* We recommend against creating new users over the API. The fault-tolerant way to map users to your forum is to always let them be asynchronously created as they login.
* We **only** connect to existing accounts by matching email address. No exceptions. Automatic account connection must be opted into for security reasons. 
* Once a connection is made to an account, the connection is remembered forever. Future email address changes are irrelevant.
* Omitting the parameter for username (often 'name') will send the user to an interstitial page that prompts them to create one.


## Logging users out

We recommend using the default logout approach, which is generally accomplished by 1) Setting a default connection and 2) including in its config your site's signout URL. After a user clicks "Sign Out" on Vanilla, we will redirect them to your page. If someone signs out on your side, we recommend doing the opposite: send them thru our signout page. You can redirect them afterward by including a `Target` paramenter indicating the URL you wish them to land on afterward.

This is an imperfect strategy, but it does general accomplish its goal and is the most simple and effective approach.

The only other way to log a user out of Vanilla is this:

* Your forum must be on a subdomain of the domain your main site resides on.
* Modify your cookie domain to be: `*.domain.com`. Cloud customers must contact support to do this.
* You can now manually delete a user's forum cookies from your site.
* Create a redirect from `/entry/signout` in Vanilla to your signout page instead. Cloud customers must contact support to do this.

Directly manipulating cookies requires technical expertise and may result in additional troubleshooting being required from your team in some situations. We strongly recommend using the redirect method unless you have developers dedicated to your project.
