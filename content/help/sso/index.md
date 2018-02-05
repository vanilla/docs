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

Regardless of your type of SSO, the following principles/recommendations apply to how Vanilla handles it:

- Since you are the provider you have to make sure that the information you pass through SSO are validated. 
Email addresses, for example, **should be already confirmed** on your side before a user is allowed to connect through SSO.
- We strongly recommend against creating new users over the API.
The fault-tolerant way to map users to your forum is to always let them be asynchronously created as they login.

### Account connection

When a user logs in through SSO for the first time, a connection is made using the SSO UniqueID and Vanilla UserID.
That connection is remembered forever and future change to user information are irrelevant.
ie. If the user changes his email address after the first connection it won't causes any problem.

Generally, two things can happen when that connection is being made:

- All the required information are passed through SSO and their do not match any user account on the forum.
   - This will result in a brand new user created on the forum.
- Some required information are missing or some information match an existing user account on the forum. 
   - The user will be redirected to an interstitial page where he will have to either:
      - Fill out the missing information.
      - Manually connect to an existing forum account by specifying the password of that account. 
      *This ensure that the user owns the forum's account.*
      - Create a new account with a name/email that does not conflict with an existing forum account.

*Omitting one required information, for example username (often 'name'), will send the user to that interstitial page.*

### AutoConnect

AutoConnect is a feature that uses email addresses to automatically connect an account in the [Account connection](#account-connection) process.
When this feature is enabled, and the email passed through SSO matches the email of a user account on the forum,
the connection between the SSO UniqueID and Vanilla UserID is made right away without the user having to go 
through the interstitial page to confirm its ownership over an account.

For *security reasons* it must be opted into.
Email addresses **must be validated on your side** when using this feature..

*We __only__ connect to existing accounts by matching email address. No exceptions.* 

### Redirection

*Most SSO solution honour this behavior.*

When tightening your SSO configurations to redirect users automatically after the Sign In process, you can use `{target}` in the redirect URL.
Vanilla will replace `{target}` by the page the user is currently on when generating the URL.

Example (using jsConnect): `https://sso.example.com/jsconnect/signin?redirect={target}` would become something like
`https://sso.vanilla.localhost/jsconnect/signin?redirect=/discussions`

## Logging users out

We recommend using the default logout approach, which is generally accomplished by 1) Setting a default connection and 2) including in its config your site's signout URL. After a user clicks "Sign Out" on Vanilla, we will redirect them to your page. If someone signs out on your side, we recommend doing the opposite: send them thru our signout page. You can redirect them afterward by including a `Target` paramenter indicating the URL you wish them to land on afterward.

This is an imperfect strategy, but it does general accomplish its goal and is the most simple and effective approach.

The only other way to log a user out of Vanilla is this:

* Your forum must be on a subdomain of the domain your main site resides on.
* Modify your cookie domain to be: `*.domain.com`. Cloud customers must contact support to do this.
* You can now manually delete a user's forum cookies from your site.
* Create a redirect from `/entry/signout` in Vanilla to your signout page instead. Cloud customers must contact support to do this.

Directly manipulating cookies requires technical expertise and may result in additional troubleshooting being required from your team in some situations. We strongly recommend using the redirect method unless you have developers dedicated to your project.
