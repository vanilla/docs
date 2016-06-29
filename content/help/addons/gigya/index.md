---
title: Gigya Sign In
layout: docs
categories: ["Features", "Addons", "Integrations"]
---

## Gigya Sign In

The Gigya Sign In adds the ability to sign to your community with Gigya Social Login. You will need to configure your site in your [Gigya dashboard](https://platform.gigya.com/Site/partners/dashboard.aspx) and then set up your login plugin on the [Gigya plugins page](https://platform.gigya.com/Site/partners/Plugins.aspx#cmd%3DPlugins.LoginPlugin) before you can use the Gigya addon in Vanilla.

### Setting up your site in Gigya

1. Instructions on setting up a a site in Gigya can be found in their [site setup documentation](http://developers.gigya.com/010_Developer_Guide/82_Socialize_Setup).
2. Once you've set up your site you'll need to copy and paste your **Client ID** and **Client secret** into your Vanilla dashboard.

### Setting up the login plugin in Gigya

1. You'll need to configure the look and feel of your login widget on the [Gigya plugins page](https://platform.gigya.com/Site/partners/Plugins.aspx#cmd%3DPlugins.LoginPlugin).
2. Once you've set up your login plugin you'll need to copy and paste the **head template** and **body template** into your Vanilla dashboard.

### Setting up the Gigya Addon in Vanilla

1. Go to your dashboard/addons and find the **Gigya Sign In** plugin.
2. Click **Settings**.
3. You should see spots for all of the settings from the above steps.
4. Click save.

### Notes

* The default Vanilla theme gives 170px to alternate sign in methods. There is a place to set the login width on the [Gigya plugins page](https://platform.gigya.com/Site/partners/Plugins.aspx#cmd%3DPlugins.LoginPlugin).
* Make sure the url that you specify for your site matches your forum. If you set up a custom domain after setting up Gigya then you'll have to change this later.
