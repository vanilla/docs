---
title: Ranks
tags:
- Features
- Addons
category: help
menu:
  help:
    parent: addons
    identifier: addons-ranks
aliases:
- /addons/ranks
- /addons/ranks/adding-and-editing-ranks
- /addons/ranks/applying-ranks-over-sso
- /addons/ranks/using-ranks-as-incentives
- /addons/ranks/using-ranks-to-defeat-spam-or-abuse
- /help/addons/ranks/adding-and-editing-ranks
- /help/addons/ranks/applying-ranks-over-sso
- /help/addons/ranks/using-ranks-as-incentives
- /help/addons/ranks/using-ranks-to-defeat-spam-or-abuse
---
## What is a Rank?

A rank can be assigned to a user to grant or remove certain privileges on your forum. A rank is *not* Roles & Permissions, which govern content access, moderation abilities, and administrator access.

A user can only have one rank at a time. Typically, the user's rank is displayed on their discussions and comments just after their name. If a user has a Title, that is displayed separately, after their Rank.

Ranks can be assigned automatically or manually. You can configure automatic ranks to be given for total posts, points, how long they've been a member, and/or a permission level.

## Why use Ranks?

Ranks can solve a number of challenges forum owners face. They can limit malicious practices, publicly identify certain types of members, reward users for participation, or allow veteran members a greater deal of control on your forum. Once you learn how Ranks work, you will have a powerful tool for creating new functionality.

## Default ranks

Ranks comes with 7 default ranks. There are "Level 1" thru "Level 5", "Moderator", and "Administrator". The order of the list matters. In this case, "Administrator" is the highest rank because it has the highest number for "Level" and is therefore last in the list. "Level 1" is the lowest rank.

## Adding and Editing Ranks

### Adding a Ranks

Go to the "Ranks" page of the Dashboard and click the "Add Rank" button at the bottom of the list.

### Editing a Rank

On the "Ranks" page, click the "Edit" button next to the Rank you wish to modify.

### Rank information

#### Name & Label

The name of the rank is how it is referred to. Users will see it in the notification they receive when they attain the rank. The label is what will appear next to the user's name in discussions and comments after they attain the rank.

#### Body & Message

These only appear immediately after a user attains a rank. The "Body" is emailed to the user. The "Message" appears at the top of the page when the rank is triggered.

#### CSS Class

The CSS Class is a feature for theme developers. You can assign a valid CSS class to a rank and it will be applied to the wrapper around their discussion or comment. This is useful for making certain ranked users' content appear more prominently. For example, if you had an "Expert" rank, maybe you'd highlight their comments with a special background color.

#### Level

Level is a number that determines the precedence of assigning ranks. Ranks that are not manual will always attempt to give the user the rank with the highest level that they have met the criteria for.

If you create a manually assigned rank and do not want any automated ranks to overrule it, make sure it has a higher level than all your automated rules.

### Setting Criteria

You can set thresholds for:

* Points
* Posts (comments + discussions)
* Duration of membership
* Permission level (e.g. moderator or admin)

All thresholds you set must be met for the rank to be assigned. For instance, if you set Points to 50 and posts to 10, it means a member must have 50 points AND 10 posts to be assigned the rank.

### Manually Assigning a Rank

Rank assignment is done via "Edit Profile" from the user's profile. Any users in a role with the permission to edit users will be able to assign a rank.

### Abilities

Each ability may be given the value of "Grant", "Revoke", or "Default". The default value represents what the user would be allowed to do if Ranks was disabled. The grant and revoke options override their normal abilities.

Some abilities are effected by other addons. It's important to understand your current Vanilla installation before changing the default values for abilities.

For instance, in a default Vanilla installation, users will not have a "Title" field. Therefore, Ranks' "default" would be that no one has a Title. However, Profile Extender can be used to add a "Title" field, which would give Titles to all users. In that case, Ranks' default would be that everyone has a title.

## Applying Ranks over SSO

Create a new rank or edit an existing one, checking "Applied Manually".

You can now edit a user's profile and select that Rank or apply it over SSO by adding a matching RankID or Rank_Name parameter to the callback.

This only works if you have checked "Applied Manually" on the rank. Also make sure that no automatically-triggered Ranks have a higher level, or they will override when triggered.

## Using Ranks: Incentives

You can use Ranks as an incentive for members to participate by rewarding them for more and better participation.

### Example Case

What follows is an example for abilities to grant to higher ranks. It uses the default ranks Levels 1-5 and assumes the default Criteria of 50, 100, 500, and 1000 points for Level 2 thru 5 consecutively.

Gaining points on your site is done thru addons such as Badges and Reactions. Users who gain the point levels of the default ranks have demonstrated their ability to positively contribute to your community.

### Suggested abilities

Levels 1 and 2 will remain as default, or you can assign them abilities according the *Using Ranks to Defeat Spam and Abuse* document.

Level 3, set the follow abilities.

* Title: Give
* Location: Give
* Me Actions: Give

"Title" and "Location" are fields that appear in every comment a user makes. This allows them to display more information about themselves. "Me Actions" are a fun ability to make specially-formatted posts based on chatroom actions. Add a comment that simple says "/me runs away" (minus the quotes) to see it inaction as an administrator.

Level 4, set the same as Level 3, plus:

* Signatures: Give
* Discussion & Comment Editing: Authors may edit for 1 week

"Signatures" are snippets of text or images that a user may add to their profile which will show after every comment they make. You must have the Signatures addon enabled for this to work.

Discussion & Comment Editing is something that makes forum use more enjoyable for members, but has a high potential for abuse. Therefore, only more trusted members should have longer editing time windows.

Level 5, set the same as Level 3 and 4, plus:

* Content Curation: Give
* Discussion & Comment Editing: Authors may edit for 1 month

Content Curation is an effect that interacts with the Reactions addon. The ability to Curate gives the special reaction "Promote" if it's available on your site, which is +5 points and puts the post on the Best Of page. It also means a "Spam" reaction from that user can move a post immediately to your Spam Queue for review by moderators.

Again, we set a longer Discussion & Comment Editing timeout for our most-trusted and experienced users.

## Handling Spam or Abuse

Ranks can be used to limit the ability of spammers to take advantage of your site and protect members from abuse. To do this, limit the abilities of your newest users until they have been proven their value to the community.

### Who is this for?

This guide is for communities currently having spam problems that have already tried other automated filtering solutions like Akismet and Stop Forum Spam. Because this solution inhibits new user actions which can have a detrimental effect, it should be used as a response to issues not as preemptive prevention.

### Setting up Ranks to inhibit spam and abuse

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

### Setting up Ranks to prevent false-positives on spam

For your higher ranks, set the Ability "Verified" to "bypass". This will prevent your trusted members' content from being evaluated by the spam filter, which means their content will never be put into the spam queue.
