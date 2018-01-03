---
title: Badges
tags:
- Features
- Addons
category: help
menu:
  help:
    parent: addons
    identifier: addons-badges
aliases:
- /addons/badges
- /addons/badges/adding-and-editing-badges
- /addons/badges/giving-and-requesting-badges
- /help/addons/badges/adding-and-editing-badges
- /help/addons/badges/giving-and-requesting-badges
---
{{% cloudfeature %}}

## Purpose

Badges are designed to reinforce desirable behaviors on a forum. They are not necessarily awards for the best or most of something, but rather signs that point the way to positive participation in a community.

## Default badges

Vanilla's Badges addon automatically creates a wide variety of badges. Some relate to core forum functions (like commenting), and some are only triggered by using additional addons (like Reactions). Default badges are typically assigned to users automatically when certain conditions are met.

## Badges list

All badges are listed in the Dashboard under "Badges". This includes any badge ever created in your forum, regardless of whether it is currently active or achievable.

## Users' badges

A list of a users' badges will display, by default, in the panel of their profile as a grid of badge images. Badges awarded incrementally (such as membership anniversaries) will "stack", meaning only the highest-increment badge will show.

## Viewing a badge

Clicking a badge's name in the badges list will take you to a public page describing the badge. Users can get to this page by clicking the badge in their profile. This page shows the most recent recipients of the badge.

## Disabling badges

To disable a badge and prevent it from displaying publicly, click "Yes" in the badge's row under the "Active" column. That will toggle it to "No", indicating it is no longer active.  Inactive badges remain awarded to any users that received it previously. You can re-enable them by clicking "No", which will then toggle back to "Yes", indicating it is active again.

It is not currently possible to delete a badge entirely.

## Editing a badge

You can safely edit the Name, Description, and/or Image of any badge without effecting its automated functionality. These will be updated for any users who previously received the badge as well.

The "Slug" field is what shows in the URL for the badge's page. It is its unique identifier. Changing a badge's Slug will cause it to be disassociated with any automation assigned to it. Therefore, *do not change the Slug of the Badges that come with Vanilla by default*.

You may change the Points for a badge at any time. Point changes are not retroactive for users who previously received it.

## Creating your own badges

Create a memorable Name for your badge and give it a Description that explains what it is for and how users can earn it. This information will appear on the Badge's page.

The Slug should consist of only lowercase letters, numbers, and hyphens. The Slug must be unique for each badge.

Add a 200x200 PNG for the image.

All badges created in your Dashboard must be given manually.

## Creating automated badges

It is not currently possible to create your own automated badges thru the Dashboard. To discuss custom possibilities for your community, contact sales.

## Giving a badge

Badges->Give is the permission that defines who can give badges. By default, moderators and administrators have it.

To manually give a badge to one or more users, click the "Give" button from the Badges list. Type a username in the provided box. You can give a badge to many users at once by typing all their names, separated by commas.

From a user's profile, you may select "Give Badge" from their options menu to give that user a particular badge.

## Revoking a badge

To revoke a badge from one or more users, contact support. It is not currently possible to revoke the points assigned.

## Requesting a badge

Badges->Request is the permission that defines who can request a badge.

Manually-awarded badges will have a "Request This Badge" button on their view page. Badges that are triggered automatically do not have this option.

Requests for badges are viewable in the Dashboard under "Badge Requests". There are options to Approve or Decline them individually or en masse.

Users with permission to Give badges will be able to see the Badge Requests page. They will also have an option under Notification Preferences in their profile to be notified of new badge requests.

## Addons that assign badges

* Reactions: Gives badges for incremental levels of positive reactions received by a user's content.
* Q&A: Gives badges for incremental levels of accepted answers as user has posted.
