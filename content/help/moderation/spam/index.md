---
title: Spam
category: help
menu:
  help:
    identifier: spam
    weight: 62
aliases:
- /moderation/spam
---

## Spam Prevention 

Vanilla is equipped with several layers of SPAM prevention.  While automated tools do most of the work, we encourage you to be vigilant and to enlist your membership to report any suspected spam. 

### Spam Detection 

Vanilla includes 2 spam detection plugins:  StopForumSpam and Akismet.  These can be turned on in your Dashboard from the Addons page. 
 * Akismet: this plugin feeds your posts through the Akismet spam detection algorythm which looks at several factors including live data to determine if a post is spam. 
 * StopForumSpam:  this plugin checks users against a list of reported spammers and will report posts as spam or reject them outright. The threshold for reporting and rejection can be set in the plugin's settings. 

### Spam Reaction 

If you have Reactions enabled, you can choose to display the Spam Reaction which lets community members report spam posts. By default, if 5 members report a post as spam, it will be moved to the spam queue. 


### Flood Control 

This feature is to prevent a spambot from doing too much damage if it manages to register.  Spambots can be kept out using the reCaptcha test on registration (or on your own website's registration if you have implemented SSO) and can also be caught by the spam filters.    Flood control lets you limit how many discussions, comments, private messages, and replies to private messages that a user can create within a time period. 

### Spam Queue 

Any detected Spam will show up in the Spam Queue.  From here you can indicate if a registering user is a spammer or not and indicate if a post is a spam post or not.  Once in a while, the spam filters will report legitimate content as spam, this is known as a false positive.    When you indicate that a post is spam, you will have the option to delete the post, additionally, you will have the option of deleting all posts by the offending user and banning that user. 

### User Ranks 

Another tool available to combat spam and abuse is User Ranks. Many community managers want new members to prove themselves before they are given the ability to fully participate.  Ranks, which can be awarded by moderators or by accumulating reputation points, can be linked to abilities such as having links in posts or editing posts once they have been submitted.   

### Verifying Users 

Verified users will bypass spam filters. A user can be verified by admins and mods on the users' profile page, by looking up the user via the Dashboard or the verified status can be assigned automatically by earning a Rank which grants verification. 
