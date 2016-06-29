---
title: Using Ranks to Defeat Spam or Abuse
layout: docs
categories: ["Features", "Addons", "Ranks"]
---

## Using Ranks: Spam

Ranks can be used to limit the ability of spammers to take advantage of your site and protect members from abuse. To do this, limit the abilities of your newest users until they have been proven their value to the community.

## Who is this for?

This guide is for communities currently having spam problems that have already tried other automated filtering solutions like Akismet and Stop Forum Spam. Because this solution inhibits new user actions which can have a detrimental effect, it should be used as a response to issues not as preemptive prevention.

## Setting up Ranks to inhibit spam and abuse

What follows is a generalized recommendation for a large, high-traffic site. Please adjust the suggested values to match your needs and community.

Click "Edit" on your "Level 1" rank. If you've edited your default ranks already, instead set a Rank to have level 1 (or any level as long as it is the lowest level) with no Criteria (all fields should be blank.

Under Abilities, set the following values:

* Formatting Posts: Text
* Verified: Force Check
* Post Links: Take Away
* Titles: Take Away
* Locations: Take Away
* Signatures: Take Away
* Discussion & Comment Editing: Authors may never edit

For your Level 2 rank, set some low Criteria. A good recommendation would be a Post total of 5 or 10, depending on the activity level of your site. For this rank, set Abilities:

* Formatting Posts: text, links, and YouTube
* Titles: Take Away
* Locations: Take Away
* Signatures: Take Away
* Discussion & Comment Editing: Authors may never edit

Finally, for Levels 3 set a higher Criteria like 50 posts or points. For this level (and any higher) you can leave default values or grant additional abilities with the "Give" option.

## Setting up Ranks to prevent false-positives on spam

For your higher ranks, set the Ability "Verified" to "bypass". This will prevent your trusted members' content from being evaluated by the spam filter, which means their content will never be put into the spam queue.
