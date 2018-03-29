---
title: MailChimp Push
tags:
- Features
- Addons
category: help
menu:
  help:
    parent: addons
    identifier: addons-mailchimp
aliases:
- /addons/mailchimp
---

## Overview

MailChimp is one of the world’s leading email marketing platforms, allowing it’s users to send newsletters, automated messages, and set up targeted campaigns to help their business.  

Our plugin synchronizes the email addresses of your community’s users with a designated mailing list. As your community grows, or users change their email address, Vanilla will send notifications to MailChimp to update the specified list.

### Enabling MailChimp Push

MailChimp Push is a feature provided at every plan level, it can be activated for your forum through a support request.

Once activated, MailChimp can be found in the Settings tab in your dashboard. It will be listed in the side menu under “Site Settings”. You can also navigate to it directly by going to `/plugin/mailchimp`.  

## Configuration

You will need to provide an API key to allow Vanilla to communicate with MailChimp. You can read how to generate your MailChimp API key [here.](http://kb.mailchimp.com/integrations/api-integrations/about-api-keys).  

![This shows the plugin before a valid API key is added. Your other options will not appear until a valid key has been inserted](https://images.v-cdn.net/docs/mailchimp_api_key.jpg)

Once you’ve provided a valid API key, the plugin will display a menu with all the mailing lists tied to your MailChimp account. Select the mailing list that you wish to sync with your Vanilla community. A dropdown for "Groups" will appear if you have created any in MailChimp for particular list you've selected. You can read about groups in their knowledge base, [here.](http://kb.mailchimp.com/lists/groups/create-a-new-list-group)

![The options after you've inserted your API key](https://images.v-cdn.net/docs/mailchimp_api_key_group.jpg)

After your settings have been saved, every time a new user registers with your community or an existing user changes their email address, Vanilla will notify MailChimp and update that mailing list.

## Mass Synchronization

By default, MailChimp Push will only update the mailing list when it detects changes. If you decide to start a mailing list after your community has been around for a while, it is still possible to sync up your users’ emails with MailChimp using ‘Mass Synchronization’.

![The Mass Synchronization tab.](https://images.v-cdn.net/docs/mailchimp_masssync.jpg)

Mass Synchronization is a one-time action that sends an entire community’s worth of email addresses to a selected mailing list. You can also choose to sync banned and deleted users. Syncing banned users will add them to your mailing list despite their banned status in Vanilla. If you have deleted some users on the Vanilla side, syncing deleted users will change their emails in MailChimp to a nonfunctional email.  

When you hit Synchronize, a progress bar will appear to indicate that the process has started. Note that having a large userbase will cause synchronization to take a while. Choosing to send a confirmation email will also add time to the sync, and those users will not appear in your list on MailChimp until they have confirmed on their end.

Vanilla’s integration with MailChimp is one-way only.  Only email addresses edited within your community will be changed in your MailChimp mailing list. It will not work the other way around. Its also important to note that MailChimp Push can only grab and send email addresses, no other profile data can be passed between vanilla through this addon.


## Additional resources:

* [Creating a forum newsletter with MailChimp](https://blog.vanillaforums.com/help/creating-forum-newsletter-mailchimp/)

* [Helping Your Community Members come out of the shadows](https://blog.vanillaforums.com/community/help-your-community-members-come-out-of-the-shadows/)
