---
title: VanillaConnect
tags:
- Features
- Single Sign-On
- VanillaConnect
category: help
menu:
  help:
    parent: sso
    identifier: sso-vanillaconnect
aliases:
- /features/sso/vanillaconnect
---

## Why VanillaConnect?

Much simple than, for example, SAML or OAuth VanillaConnect is perfect for small-to-medium business owners.

However, even if simpler, VanillaConnect still requires a developer on your team. 
Setting it up usually require between 2 to 6 hours using our [technical documentation](/help/sso/vanillaconnect/technical).

## VanillaConnect Concepts Overview

Our SSO solution has a few basic assumptions:

* Your user is signed into a **website** AKA **provider**.
* **You** control this website and can add files & pages to it.
* Your user have a **unique identifier**. This can be a number or a randomly generated string.
What is important is that no users can have the same **unique identifier** and that identifier will never change.

The integration will be a lot easier and tighter if:

* You have unique, validated **usernames** for users.
* You have confirmed, unique **email addresses** for users.

## Creating & mapping users

Data that can currently be passed over SSO with VanillaConnect:

* id: The **unique identifier** of the user on your system (*required*)
* email: The email address of the user (*required*)
* name: The name of the user (*recommended*)
* photourl: The URL of the photo/avatar of the user.
* roles: A comma separated list of Vanilla's roles name.

When receiving an SSO response, Vanilla will do a lookup by **email address** against the forum database.
If it finds a match and the user connects, a **permanent mapping** is made against the unique ID your provided.
This means future email changes on your side do not affect the login process.

If no email match is found, a new forum account will be created instantly using the provided data.
If no username is provided, the user will be prompted to create one.

Data is synced at every new login. 
For instance, providing a different email address on the user's fifth login will still log them into the same account,
but will update their Vanilla email address.

The Photo URL is accepted only if the user has not uploaded their own avatar in the forum yet, and it is a valid URL.
Imported avatars (if you migrated to Vanilla from another platform) count as the user having uploaded their own avatar.

**We recommend against creating new users via the API.** 
Our SSO solution lazy-creates new users for maximum robustness and reliability.
Creating users manually may potentially cause problems with out auto mapping process.
Once a new user is created, you can optionally sync additional data about the user over API as needed.

## Unified user experience

In Vanilla, these optional configuration changes are possible:

* Auto-connect to existing forum user accounts without prompting for a password (i.e. your SSO source is 100% trusted).
* Disable all email sending in Vanilla.
* Disable profile editing.
* Redirect user profile links to another system.

Cloud users can contact support to make these changes.

## How it connects

Clicking the "Sign In" button in Vanilla redirects the user to the **provider** which 
will validate the authentication request and redirect back to vanilla with an authentication response.
From there, the user will be either:

- Signed In.
- Asked to provide missing information to complete the Sign In process.
- Displayed an error message if something went wrong. (*This should not be happening under normal circumstances*)

More information on our [technical documentation](/help/sso/vanillaconnect/technical).

## Two Flavors of SSO

There are two implementations of SSO that VanillaConnect supports. 
You can implement either of the methods or both as they serve different purposes.

### Method 1: Site-Wide SSO

You implement site-wide SSO when Vanilla is as a full site.
With this method you need to use our VanillaConnect library to process the Authentication Request JWT and
reply with an Authentication Response JWT.

### Method 2: Embedded SSO

Vanilla also has the ability to be embedded in a page either as an entire site or just as embedded comments. 
With this scenario you need to create a special SSO string that can be passed to the embedded Vanilla 
and provide login information.

This effectively skip the authentication request and do an authentication response directly.
By doing so you Push 

Again, refer to the [technical documentation](/help/sso/vanillaconnect/technical) for more details.

## Make it seamless

When setting up a jsConnect connection in full-site mode, you have the option to specify it as your "default" connection.
Doing this attaches it to the special `/sso` endpoint in Vanilla. 
When a user clicks "Forum" in your website's navigation, instead of linking to the forum homepage, 
instead link them to the `/sso` page. This will auto-fire the SignIn process rather than waiting for the user to click "sign in", 
then drops them on the homepage as normal.
