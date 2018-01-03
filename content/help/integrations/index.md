---
title: Integrations
category: help
menu:
  help:
    identifier: integrations
    weight: 11
aliases:
- /integrations/integrations
- /integrations/wordpress
- /features/wordpress/using-comments
- /help/integrations/wordpress
---

Vanilla integrates with several third party applications, including:

* Salesforce
* Zendesk
* GitHub 
* Wordpress 
* Akismet 
* WithList 
* MailChimp 
* Social logins (Facebook, Twitter, LinkedIn, etc.) 

Vanilla also supports integration through an [API](../api). 

## Wordpress Integration 

Vanilla's integration to Wordpress lets you do a few things:

 * SSO from Wordpress to Vanilla 
 * Use Vanilla as a commenting system on your Wordpress blog 
 * Add a widget to your Wordpress site. 

### Vanilla plugin for Wordpress 

You can find the Wordpress plugin [here](https://wordpress.org/plugins/vanilla-forums/).

### Integration Setup Instructions 

Integration instructions can be found [here](https://blog.vanillaforums.com/help/how-to-use-vanilla-forums-with-wordpress/).

## Transition to Vanilla Comments

Vanilla doesn't have access to your WordPress comments, so simply turning off WP's comments and turning on Vanilla's would hide all your existing comments.
There's 3 ways to go about remedying this.

The first is to import all your WordPress comments to Vanilla. You will need need the XML export from your WordPress Dashboard to do this. VanillaForums.com clients may request this as an additional service via support or their sales representative.

The second is to edit your WordPress template manually to show WordPress comments on posts published before the date of your switchover, and Vanilla comments after the date of your switchover. This would require some elementary PHP.
"
The third option is to disable all *new* WordPress commenting, and manually add Vanilla Comments embed code in the template after WordPress. You'd also want to remove WordPress's "empty state" message for when there are no comments. This would have the effect of showing all old WordPress comments, followed by any new Vanilla comments, and then the Vanilla commenting box. Obviously this option is a little more complex, so I'd only do it if your comfort level with WordPress template editing is fairly high.
