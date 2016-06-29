---
title: SSO with jsConnect
layout: docs
categories: ["Features","Single Sign-On","jsConnect"]
---

## jsConnect Concepts Overview

Our SSO solution has a few basic assumptions:

* Your user is signed into a **website**.
* **You** control this website and can add files & pages to it.

The integration will be a lot easier and tighter if:

* You have unique, validated **usernames** for users.
* You have confirmed, unique **email addresses** for users.

## Creating & mapping users

Data that can currently be passed over SSO with jsConnect:

* Unique ID from your system (*required*)
* Email (*required*)
* Username (*recommended*)
* Photo URL
* Roles (Vanilla's permissions management groups)

When receiving an SSO response, Vanilla will do a lookup by **email address** against the forum database. If it finds a match and the user connects, a **permanent mapping** is made against the unique ID your provided. This means future email changes on your side do not effect the login process.

If no email match is found, a new forum account will be created instantly using the provided data. If no username is provided, the user will be prompted to create one.

Data is synced at every new login. For instance, providing a different email address on the user's fifth login will still log them into the same account, but will update their Vanilla email address.

The Photo URL is accepted only if the user has not uploaded their own avatar in the forum yet, and it is a valid URL. Imported avatars (if you migrated to Vanilla from another platform) count as the user having uploaded their own avatar.

**We strongly recommend against creating new users via the API.** Our SSO solution lazy-creates new users for maximum robustness and reliability. Once a new user is created, you can optionally sync additional data about the user over API as needed.

## Unified user experience

In Vanilla, these optional configuration changes are possible:

* Auto-connect to existing forum user accounts without prompting for a password (i.e. your SSO source is 100% trusted).
* Disable all email sending in Vanilla.
* Disable profile editing.
* Redirect user profile links to another system.

Cloud users can contact support to make these changes.

## How it connects

Clicking the "Sign In" button in Vanilla generates an asynchronous request **in the user's browser session** back to the main website. This means the user's cookies are sent as if they had visited the page directly, and that your normal login detection logic will work.

![](/features/sso/images/jsconnect-overview.png)

## Two Flavors of SSO
There are two implementations of SSO that jsConnect supports. You can implement either of the methods or both as they serve different purposes.

### Method 1: Site-Wide SSO
You implement site-wide SSO when Vanilla is as a full site. With this method you need to create a page that provides your login information in jsonp format.

### Method 2: Embedded SSO
Vanilla also has the ability to be embedded in an html page either as an entire site or just as embedded comments. With this scenario you need to create a special SSO string that can be passed to the embedded Vanilla and provide login information.

## Make it seamless

When setting up a jsConnect connection in full-site mode, you have the option to specify it as "default". Doing this attaches it to the special `/sso` endpoint in Vanilla. When a user clicks "Forum" in your website's navigation, instead of linking to the forum homepage, instead link them to the `/sso` page. This will auto-fire the asynchronous call back to your website rather than waiting for the user to click "sign in", then drops them on the homepage as normal.

For more information, read our [technical overview](/features/sso/jsconnect/overview).

## WordPress plugin

If your site is using WordPress then we make a plugin that allows you to use SSO with your WordPress site. It also helps you set up an embedded forum and embedded comments on your site. <a href="https://wordpress.org/plugins/vanilla-forums/" target="_blank">Get the plugin</a>.
