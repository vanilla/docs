---
title: Reactions
tags:
- Features
- Addons
category: help
menu:
  help:
    parent: addons
    identifier: addons-reactions
aliases:
- /addons/reactions
- /addons/reactions/adding-and-editing-reactions
- /addons/reactions/curating-with-reactions
- /help/addons/reactions/adding-and-editing-reactions
- /help/addons/reactions/curating-with-reactions
---
{{% cloudfeature %}}

## What are reactions?

Reactions are a 1-click response to discussions and comments. Using Reactions enables community members to indicate an emotional ("Awesome", "LOL") or empirical ("Agree", "Vote Down") response without typing a comment. This introduces feedback that is otherwise missing from a community when members don't have anything to add to a discussion via a comment. Reactions are available via an addon.

## How does the Reactions addon work?

After each post, a row of reactions will appear. Members can click one (and only one) Reaction to each post. This will add or subtract points to the post and the user as defined by that Reaction's settings. The post will show a running tally of how many of each Reaction it has received. Clicking a different reaction will switch how you reacted. Clicking the same reaction a second time will revoke it.

Reactions also creates a "Best Of" page in which content with the most positive reactions are collected.

## Uses for Reactions

Communities can use Reactions for a number of scenarios. All reactions can be customized to meet your need. Some benefits include:

* Positive reinforcement for contributions
* Increased participation and interaction
* Member-powered curation of content
* Enables skimming by high-reaction comments
* Optional integration with Badges for gamification

Reactions is a dynamic tool that encourage emergent behaviors and uses. We consider it a feature that most communities will benefit from in some way.

## Adding and Editing Reactions

### Selecting Reactions

Vanilla comes with a wide range of reactions in your Dashboard, of which a few are enabled by default. You can toggle them on or off depending on what reactions are appropriate to your community. To enable or disable a reaction on your forum, click the "Active/Inactive" toggle next to each reaction in the Dashboard under "Reactions".

Generally, we recommend using one to four reactions. Reacting should be simple and reflexive, not a complex decision over which reaction to use.

![The list of Reactions in the Dashboard](/img/help/addons/reactions/list.png)

Reactions are universal to all categories on your site. You can use CSS rules to hide certain reactions in certain categories, but they cannot be officially disabled selectively.

### Edit a Reaction

To edit a reaction, go to Reactions in the Dashboard and click the name of the Reaction you wish to edit.

Editing an existing reaction is the best way to tweak your list to fit the culture of your community. We recommend selecting the default reaction that most closely matches your desired reaction and simply changing its name.

You can also change the "Points" field to modify how many points it give to the user receiving each reaction of that type. The number of points assigned to the discussion or comment is not currently editable via the Dashboard. Yes, Reactions assigns points to users and content independently.

Doing this allows you to keep any automated badges associated with that reaction, which you can then rename appropriately as well. See the Badges - Adding and Editing Badges to see how to do this safely.

### Adding a Reaction

To add a new reaction, contact support or your sales representative.

### Advanced Settings

You can access "Advanced Settings" for Reactions via a link near the top of the Reactions page of the Dashboard.

![The Advanced Settings page](/img/help/addons/reactions/advanced.png)

"Show Who Reacted to Posts" changes how reaction tallies are displayed under comments. The default is "in a popup" which requires hovering your mouse pointer over the reaction to see who reacted that way. Use "As avatars" on small to medium-sized sites to show a row of avatars under each comment for who reacted. Or select "Don't show" to hide it entirely.

"Best of Style" changes the layout of your Best Of page.

Reactions come with the option to order your comments based on reactions. In general, we do not recommend doing this.

## Curating with Reactions

Reactions can provide your community with powerful self-curation tools. It's very important to understand your community (or the community you intend to build) before selecting what reactions to use.

Any of the thresholds or increment values mentioned in this document can be modified via support.

### Promoting content

Promote is a special reaction. Only users with the "Curation" permission (or that ability via Ranks) are able to use it. It assigns five points to the discussion or comment. The user that made the post receives the number of points indicated under that reaction in your Dashboard.

Discussions or comments with five or more points assigned to it will be added to the Best Of page and will get the "promoted" CSS class added to them. These points can come from any type of reaction.

After content is added to the Best Of page, it is never removed, no matter what its future point total is. The "promoted" CSS class is reevaluated as point totals change. You can use this special class to style promoted content different (like highlighting it with a special background color).

### Burying content

Discussions and comments that reach a score of -5 or lower will be "buried". Buried content appears collapsed by default and requires a user to click on the content before it can be read. You can style buried content using the "Buried" CSS class.

### Abuse and Spam

Abuse and Spam reactions are available to all users when enabled but have special actions attached to them. Five or more Abuse reactions will add the content to the Moderation Queue for moderator review. Ten or more will remove it. Five or more Spam reactions will move the content to the Spam Queue.

A user with the "Curation" permission counts as 5 of either of these reactions when they use it.

### Using negative reactions

The current default for negative reactions in new installations of Vanilla is for them to remove 1 point from the discussion or comment, but to have no effect on the point total of the user who made the post. This discourages abuse of negative reactions beyond simple voting scenarios.

There is always the potential for abuse when you open up avenues of self-curation in a community. In general, we discourage the use of any negative reactions unless there are established guidelines for their use in your community.
