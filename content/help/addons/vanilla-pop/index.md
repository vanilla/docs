---
title: Vanilla Pop
tags:
- Features
- Vanilla Pop
category: help
menu:
  help:
    parent: addons
    identifier: addons-vanilla-pop
aliases:
- /addons/vanilla-pop
- /addons/vanilla-pop/site-hub
- /help/addons/vanilla-pop/site-hub
---
{{% cloudfeature %}}

## Email Interaction

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

![Vanilla Pop Settings](https://images.v-cdn.net/docs/vanillapop-settings.png)

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

{{% cloudfeature %}}

## Vanilla Pop with Site Hub

Vanilla Pop works in much the same way on the hub as it does on regular sites. The node email addresses are slightly different and there are a few more features which are detailed below.

## Node Email Addresses

Each node's email address is comprised of two parts: The node slug and the hub slug seperated by a dot, followed by a vanillaforums.email domain. You can see this by going to the **Incoming Email** page in your nodes' dashboards.

### Example

Let's say you are on the **acme** hub and you create a node with the slug **anvil**. You will see that the node's email address will be shown as `anvil.acme@vanillaforums.emal`.

### Emailing Directly Into a Category

You can email directly into a category by prepending the category's URL code to the node's email address followed by a dot.

### Example

Let's say in the above example you want to email the **general** category. You would send an email to `general.anvil.acme@vanillaforums.email`.

## Using One Email Address for an Entire Hub

The hub provides a flexible way to email any node and even any category within a node. However, let's say you want to set up a single email address for your entire hub and have emails route into the nodes.

Each hub can use an abbreviated email address and then make use of the email subject to route the email to the correct node. If you want to do this then the email address for your entire hub is the hub slug followed by the vanillaforums.email domain. Then the first word of the subject will be matched against a node and optional category. You can optionally enclose the first word in square brackets.

### Example

From the above examples, you have the **acme** hub, and the **anvil** node, and the **general** category.

* The hub's email address is `acme@vanillaforums.email`
* An email with the subject `[anvil] I need some help` will be routed to the anvil node.
* An email with the subject `[general.anvil] I need some help` will be routed to the general category of the anvil node.

### Removing the Node Slug to Email Categories

You can have your hub configured to remove the need for node slugs in the subject of emails. To do so you must do the following:

1. Ensure that you use unique URL codes across all of your nodes. This is your responsibility.
2. Make a support request to configure your hub to look at the category of a node first.

### Setting Up a Custom Email Address for Your Hub

The reason why the hub supports a single email address is to allow you to set up a single custom email address for your communities and then use the subject to route emails accordingly. In order to do so you must have control over the email address and then you must do the following:

1. Set up your email address to forward all emails to the hub's email address. 
2. Make a support request notifying Vanilla staff of your forward. Tell them what the email address is and they will configure your hub to send emails from that address.

In order to make the email forwarding work you must ensure the following:

1. The emails must not be altered when being forwarded (ex. don't add a "Fw: " prefix to the subjects).
2. In order to ensure the best email routing the email should re-addd any arguments in the email address to the forum's email address. This is common behaviour amongst most email servers.

## Email Replies and Hub Email Addresses

Most emails sent to your communities will be in reply to a notification such as a comment or a private message. In this case Vanilla adds special routing information to help make sure the reply is routed to the correct community. In this case this information will take precidence over the specific email address. In most cases users will not know this, but if you specifically try and alter an email address when replying to try and make the email send to a specific community, you might still find that the email still goes to its originally indended destination.

## Emailing to a Non-Existant Node

If your email address or subject is malformed in such a way that Vanilla cannot find the node you are trying to email then it will send back a response telling you that the site you are trying to email could not be found.
