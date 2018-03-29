---
title: Pockets
tags:
- Features
- Addons
category: help
menu:
  help:
    parent: addons
    identifier: addons-pockets
aliases:
- /addons/pockets
---

## Overview

Pockets add areas to your forum where you can inject custom HTML or Javascript into your theme. It is a powerful tool that makes Vanilla flexible for ad placement, google analytics, and other small customizations.  

Pockets are designed to be used by advanced users and developers who can write and review their own code.   


### Setup

Pockets are available on all plan levels. To activate it, simply locate it in your addon list (`/dashboard/settings/addons`) and toggle it on. It will then be available in the "settings" tab of your dashboard, listed under "Appearance" in the left side menu. You can navigate to the page directly by going to `/settings/pockets`


## Working With Pockets

Once you navigate to the new Pockets menu in your Dashboard, you’ll have two options immediately available - “Add Pocket” and “Enable Pocket Locations.”


### Enable Pocket Locations

Before you work with pockets, you need to know where the specific locations will appear on the front end of your community. Toggling this option on will allow you to see all the places where a pocket is available. Only users with the permission to add/edit pockets will be able to see the Pocket Locations while this setting is on.  

![A Community with Pocket locations enabled](https://images.v-cdn.net/docs/Pockets_ViewPockets.png)


### Add Pocket

Once you know where the locations are, you can add a pocket and choose where to set it.

![The ‘Add Pocket’ button, as displayed in the Dashboard](https://images.v-cdn.net/docs/Pockets_AddPocket.png)

Creating a pocket will present you with its settings page. First, there is a toggle for enabling the pocket. An individual pocket can be left disabled, which is useful for temporary ads, and testing. Below that you can name the pocket and place your code into the body field.

### Additional Settings

**Page:** By default, a new pocket will be set to occupy the selected placeholder on every page of your community.  If you’d rather it only work in certain areas, you can narrow the location down by using the drop-down menu and selecting a specific area of your forum - such as user profile pages or the inbox.  

**Location:**  Each placeholder has a specific location in your community, as shown when "Enable Pocket Locations" is active. In this drop-down menu, you are able to select exactly where you want the pocket to appear.

**Repeat:** Some Pocket locations, such as "Panel" and "Between Discussions" have multiple placeholders to choose from. You can specify if you want the pocket to appear before or after, as indicated by their location label. Numbered placholders can be selected using "Given Indexes". Selecting "Repeat Every" will open two new settings, allowing you to select the starting point and frequencey of the pockets appearance. This is geared towards placing content, such as advertisements, between comments or discussions. 

**Test Mode:** Before you save your Pocket and have it go live to everyone in your community, you can toggle this switch so the Pocket will only be seen by administrators with permission to edit Pockets. Once you’re satisfied that the Pocket is working as expected, you can toggle Test Mode off and save again, pushing the Pocket out to the public.   


## Debugging

It’s important to note that Pockets should be reserved for advanced users. JavaScript errors and incorrect HTML can cause conflicts with Vanilla's functionality. Debugging code in Pockets is out side the scope of support, so you must be able to resolve your own errors. Use test mode when trying out new things, and disable pockets if you suspect they are causing issues. Rotating ads are a common issue, so be diligent.


## Additional Resources:

* [Pockets: Adding Custom HTML and Javascript to Your Vanilla Forum](https://blog.vanillaforums.com/help/power-pockets-adding-custom-html-js-vanilla-forum/#more-6244)
* [Adding Analytics To Your Community](https://blog.vanillaforums.com/help/adding-analytics-to-your-community/)
* [Using Pockets For Banner Ads](https://blog.vanillaforums.com/help/pockets-banner-ads/)
* [Going Ad-Free with Pockets](https://blog.vanillaforums.com/help/going-ad-free-pockets/#more-7727)
