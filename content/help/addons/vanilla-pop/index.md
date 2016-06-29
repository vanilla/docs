---
title: Vanilla Pop
layout: docs
categories: ["Features","Vanilla Pop"]
---

# Vanilla Pop

Vanilla Pop is a feature of Vanilla's Enterprise forums that allows you to interact with your forum through email. 

- With Vanilla Pop you can:
- Reply to an emailed discussion on the forum or through email.
- Have conversations through email, but keep a record on Vanilla.

## Your Forum's Email Address

The top of the page tells you your forum's email address. This is the address that the application will send emails to, in order to interact with your forum. This email may not be the email address you want to show your users, so you should forward all emails from the address that you want to share. **Important: Make sure your outgoing email address is the same as the one that forwards to your forum's email address or else email replies will not work.**

### Email Directly into a category

You can also set up additional email addresses to forward to individual categories. To do this forward email to the appropriate categorycode, using the following syntax: categorycode.forumname@vanillacommunity.email.  The “categorycode”,  is the numerical value assigned for the category (hover over the catgeory url in your dashboard to get the number).

## Vanilla Pop Settings

When you have Vanilla Pop enabled you will see an __Incoming Email__ item in your dashboard under Site Settings. The page looks like this:

![Vanilla Pop Settings](/addons/vanilla-pop/images/vanilla-pop.png)

Let's run down the settings one by one:

### Default Category

Emails that are sent to your forum will start a new discussion. These discussions will be put into the category you specify here. We recommend using roles & permissions to limit the visibility of this category to just moderators and administrators. (Usually people that email you don't expect their email to be publicly viewable to the world.) The choice is up to you,  though.

## Allow Users to be Registered through Email

When a user emails your forum, we check their email address to see what user to post as. If there is no user associated with that email address then a new user is created. This is fine in cases where you are handling support requests through email, but it may not be fine in more tightly-knit communities. Use this setting to control whether or not new users can be registered by sending their first email.

### Add Information to the From Field in Email Addresses to Help with Replies

If you enable this setting, information is added to the from field of email sent from the forum. This is done by adding a plus (+) sign and code before the @ symbol in the email address. We recommend this option because some devices, such as Blackberry, don't send correct header information with their emails. Disable this option if your email server doesn't allow the plus signs.


### Outgoing Email Address

This is the email address that shows up in the from field of email sent from the forum. This is also the email address that people will reply to.

### Email Content

You can modify the content included in your Vanilla Pop emails, some of the items:

- {Category.Name} = Includes the Category Name
- [{Title}] = Includes Discussion Title
- {Body} = Includes Content of the item
