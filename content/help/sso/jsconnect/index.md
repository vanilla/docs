---
title: jsConnect
tags:
- Features
- Single Sign-On
- jsConnect
category: help
menu:
  help:
    parent: sso
    identifier: sso-jsconnect
    weight: 3
aliases:
- /features/sso/jsconnect
- /features/sso/jsconnect/embed
- /features/sso/jsconnect/overview
- /help/sso/jsconnect/embed
- /help/sso/jsconnect/overview
---

## Why jsConnect?

SSO systems are complex. Setting up your own SAML or OAuth system takes a lot of time, and generally is not feasible for small-to-medium business owners.

If you have a website that stores your user's identity and the only thing you need to integrate is a forum, jsConnect is a far simpler solution. This is because we've abstracted most of the work to our side of the connection, and provide sample code for making your side.

However, even our easier solution does require a developer on your team. A developer can typically set up the client side of jsConnect in 2-6 hours using our [technical documentation](/help/sso/jsconnect/overview). The only exception is **WordPress** users, for which we've developed a ready-to-go [SSO plugin](https://wordpress.org/plugins/vanilla-forums/).

Ready to learn more about jsConnect? Read on.

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

![](/img/help/features/sso/jsconnect-overview.png)

## Two Flavors of SSO
There are two implementations of SSO that jsConnect supports. You can implement either of the methods or both as they serve different purposes.

### Method 1: Site-Wide SSO
You implement site-wide SSO when Vanilla is as a full site. With this method you need to create a page that provides your login information in jsonp format.

### Method 2: Embedded SSO
Vanilla also has the ability to be embedded in an html page either as an entire site or just as embedded comments. With this scenario you need to create a special SSO string that can be passed to the embedded Vanilla and provide login information.

## Technical Overview

For jsConnect to work you'll put some code on your site that identifies your users in a way that Vanilla can understand. Vanilla then requests this information when the user wants to sign in and synchronizes the user with Vanilla. This is done via [JSONP](http://en.wikipedia.org/wiki/JSONP), which allows us to send your cookies from your site to you and obtain login information.

Vanilla's web-based single sign on (SSO) has 2 parts:

1. Your SSO endpoint (based on one of our example libraries) on _your_ site.
2. Vanilla's jsConnect plugin.

jsConnect pings your endpoint whenever it wants to know if a user is logged in on your site. It does this using the user's current session, so you can use your normal "is logged in" detection to determine this - nothing fancy here.

### Your Endpoint & Client Libraries

Your endpoint needs to say 1 of 3 things when it's called:

1. The current user is a **guest** (not logged in).
2. User is logged in here, but this wasn't a secure request (no signature + timestamp), so here's their **name & photo only**.
3. User is logged in AND this was securely requested, so here's **all the user data** (including email and a unique ID from your system, which are required).

Our example libraries help you structure the output so that jsConnect can read it correctly. **If we provide a client library that you can use then we highly recommend using it.**

These libraries are open source and maintained on Github:

- [PHP jsConnect client library](https://github.com/vanillaforums/jsConnectPHP)
- [Ruby jsConnect client library](https://github.com/vanillaforums/jsConnectRuby)
- [Java jsConnect client library](https://github.com/vanillaforums/jsConnectJava)
- [.NET jsConnect client library](https://github.com/vanillaforums/jsConnectdotNet)
- [Python jsConnect client library](https://github.com/vanilla/python-jsconnect)


All of these libraries have one file with all of the library code you'll need and one file that gives an example usage. They also have a readme that tells you which file is which. _Please note that these libraries don't support [embedded SSO](/help/features/sso/jsconnect/embed)._

If your site is programmed in a language that doesn't have a client library then we provide documentation on our jsConnect protocol. Have a look at the [jsConnect technical implementation guide](/help/sso/jsconnect-quickstart).

### How jsConnect maps users

After calling your endpoint and getting a "signed in" reply, jsConnect looks up the user. If they've _already_ used SSO, we've permanently mapped their unique ID to our UserID, so we sign them into that account. If they _haven't_ used SSO before, 1 of 3 things happens:

1. If the email for the user has never been used on the forum, it makes them a new account using the data passed and signs them into it.
2. If the email is in use and `AutoConnect` is enabled, we will immediately sign them in (and permanently store the mapping).
3. If the email is in use and `AutoConnect` is NOT enabled, we will prompt the user for their forum password to confirm their identity. This is the default setting because it is safer to assume you haven't verified their email address.

Vanilla Cloud customers should request Support enable `AutoConnect` if they desire it. That is an important component of a seamless experience.

### Tightening the integration

To get very tight SSO integration, you will also want to follow these steps. Always carefully test your _basic_ SSO authentication **before** tightening your integration.

1. Change your registration method to 'Connect' to block non-SSO users from registering.
2. Set your sign-in, sign-out, and registration URLs under jsConnect's settings in your Dashboard.
3. Check "Make this connection your default signin method."
4. When linking or redirecting signed-in users to your forum, use the `/sso` endpoint on the forum. This triggers jsConnect's user lookup **on the connection with "default sign in method" selected** without the user needing to click. Optionally, you can provide a `Target` parameter with a relative path to specify where they should ultimately land on the forum. Example: `http://forum.yoursite.com/sso?Target=/categories`. This is the final critical step in a fully seamless experience.
5. For seamless SSO on an embedded forum, see our [embedded SSO solution](http://blog.vanillaforums.com/jsconnect-technical-documentation-for-embedded-sso/).

If no jsConnect connection is designated as the "Default", you cannot use the `/sso` endpoint. Instead, use expanded endpoint that specifies the client ID of the connection you wish to trigger: `/entry/jsconnect?client_id={value_in_settings}`. This setup is useful in situations where you are using jsConnect in addition to normal logins or alternate SSO solutions, rather than as the sole connector.

### Testing the integration

Use the "Test URL" link under your jsConnect settings to see if your endpoint is returning a good response.

Try using your browser's Incognite/Private window mode for testing. This allows you to have a separate "test" session while you stay logged in as the administrator in your main session to make changes quickly.


### Common questions

**What do we do if SSO breaks and we're locked out?**

You can log back in using the "hidden" URL `/entry/password` to sign-in with an existing forum account. This page is never redirected for SSO.

**Can't we just add users over the API?**

We _strongly recommend against_ adding users over the API. Using jsConnect and allowing it to add users as they sign-in is the most robust and reliable approach that will cause you the fewest issues.

**Can we use multiple SSO connections?**

Absolutely. However, only one can be the default, which is what will trigger when `/sso` is used.

**How do we have seamless sign-in for users who go directly to the forum?**

If you've followed all the steps above, the only way a user can be not signed into the forum while signed into your main site is if they sign into your site separately and then manually visit the forum by typing in the address manually or clicking a browser bookmark. In this scenario, they would need to click a prompt to finish forum sign-in.

**How is sign-out handled?**

We bounce them to your sign-in page after they sign-out on the forum. To do the opposite, redirect users thru our sign-out page, again passing a `Target` parameter so they finish where you want them to.

**Does this work for native applications, non-web scenarios, or third-party products?**

No. jsConnect is purely a web-based SSO workflow for your existing login system. We have separate products for popular third-party platforms and non-web scenarios.

**Can we reverse-SSO to Vanilla via API to see if a user is logged in there?**

Not at this time.

**Can we use jsConnect without providing an email address?**

No. You absolutely must send an email, which is the only method for mapping users. If you are importing forum users without email addresses and need a way to map them over SSO, we recommend using dummy email addresses that follow a formula like `{uniqueID}`@yoursite.com.

**Our system has overlapping names but Vanilla needs unique ones. How can we handle this?**

We strongly recommend assigning them unique usernames in your system, then passing that unique username to jsConnect. Keep in mind that, for features like mentions and autocomplete to work, usernames must be unique and adhere to Vanilla's username restrictions. Passing a duplicate `Name` field for a new user over jsConnect will cause the connection to fail.

**Can we set roles over jsConnect?**

Yes, see our [quickstart documentation](/help/features/sso/jsconnect-quickstart) for more information.

**The settings & endpoint response look correct now, but it's still not working or redirecting properly.**

Try clearing your cookies and browser cache and restarting your browser. Use Incognito/Private mode whenever possible. Also, beware of Firefox caching redirects; when in doubt, double-check a redirect using another browser.

Repeatedly attempting SSO with many sessions and accounts with changing settings can cause unexpected results. This isn't a problem users would ever run into day-to-day.

## Make it seamless

When setting up a jsConnect connection in full-site mode, you have the option to specify it as "default". Doing this attaches it to the special `/sso` endpoint in Vanilla. When a user clicks "Forum" in your website's navigation, instead of linking to the forum homepage, instead link them to the `/sso` page. This will auto-fire the asynchronous call back to your website rather than waiting for the user to click "sign in", then drops them on the homepage as normal.

For more information, read our [technical overview](/help/sso/jsconnect/#technical-overview) and our [quickstart guide](/help/sso/jsconnect-quickstart).

## Embedding with Seamless jsConnect

[Our technical overview](#technical-overview) explained how to set up jsConnect SSO for site-wide SSO. However, if you have Vanilla embedded in a page you'll notice that the SSO doesn't automatically sign you in even if users are signed in to the containing page. In order to make the sign in seamless you need to add some SSO information to your embed code.

First, we'll address another important issue: Mobile Safari. **Attempting embedded SSO across two domains will not work in this browser (and therefore, on all Apple devices)**. 

To solve this, your forum must be hosted on a subdomain of your main site. For example, if your site is url.com, you could put your forum on forum.url.com, and then embed it from there. This sidesteps Mobile Safari's issue, and potentially increases your search engine value as well. Our clients can change their forum to a subdomain of their site by going to "Customize Domain" in their Dashboard and following the instructions there.

Now, on to revising your embed code with some additional SSO information.

## Vanilla Embed Code

Consider the embed code for Vanilla comments:

```html
<script type="text/javascript">

/*** Required Settings: Edit BEFORE pasting into your web page ***/

var vanilla_forum_url = 'http://your.url.com/'; // The full http url &amp; path to your vanilla forum
var vanilla_identifier = 'your-content-identifier'; // Your unique identifier for the content being commented on
**var vanilla_sso = 'SSO STRING'; // Your SSO string.**

/*** DON'T EDIT BELOW THIS LINE ***/

(function() {
var vanilla = document.createElement('script');
vanilla.type = 'text/javascript';
var timestamp = new Date().getTime();
vanilla.src = vanilla_forum_url + '/js/embed.js';

(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(vanilla);
})();

</script>
```

If you declare **vanilla_sso** and give it the proper value then Vanilla will be able to sign in your user. Here is what you need to do to generate your SSO string:

1. Start with the signed in user. This has the same fields as the user from the [seamless setup.](#seamless-setup)
1. Add your **client_id** to the user so Vanilla will know how to identify you.
1. JSON encode the user.
1. Base64 encode the user in UTF-8. This is your signature string.
1. Sign the signature string with your signature and the current timestamp using HMAC SHA1. Confirm the signature string is hex encoded.

```js
signature = hmacsha1(signature_string + " " + timestamp, secret);
```

- Build your final sso string:

```js
vanilla_sso = signature_string + " " + signature + " " + timestamp + " hmacsha1"
```

That's it! The value of vanilla_sso from above is what you put in your embed code. Since this needs to be dynamically generated by your site you can't use SSO on a static page.

### Gotchas

- The above example is for blog comments. For a full forum embed, use the code provided under "Forum Embed" in the Dashboard.
- Even though your signature string is base64 encoded make sure the actual signature is hex encoded. The correct string will be 40 characters consisting of the numbers 0-9 and a-f.
- The timestamp is a unix timestamp. That means it will be an integer and represents the number of seconds since 1 January 1970. Most languages have a way of getting this timestamp.


## WordPress plugin

If your site is using WordPress then we make a plugin that allows you to use SSO with your WordPress site. It also helps you set up an embedded forum and embedded comments on your site. <a href="https://wordpress.org/plugins/vanilla-forums/" target="_blank">Get the plugin</a>.
