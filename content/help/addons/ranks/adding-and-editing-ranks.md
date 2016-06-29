---
title: Adding and Editing Ranks
layout: docs
categories: ["Features", "Addons", "Ranks"]
---

## Adding a Ranks

Go to the "Ranks" page of the Dashboard and click the "Add Rank" button at the bottom of the list.

## Editing a Rank

On the "Ranks" page, click the "Edit" button next to the Rank you wish to modify.

## Rank information

### Name & Label

The name of the rank is how it is referred to. Users will see it in the notification they receive when they attain the rank. The label is what will appear next to the user's name in discussions and comments after they attain the rank.

### Body & Message

These only appear immediately after a user attains a rank. The "Body" is emailed to the user. The "Message" appears at the top of the page when the rank is triggered.

### CSS Class

The CSS Class is a feature for theme developers. You can assign a valid CSS class to a rank and it will be applied to the wrapper around their discussion or comment. This is useful for making certain ranked users' content appear more prominently. For example, if you had an "Expert" rank, maybe you'd highlight their comments with a special background color.

### Level

Level is a number that determines the precedence of assigning ranks. Ranks that are not manual will always attempt to give the user the rank with the highest level that they have met the criteria for.

If you create a manually assigned rank and do not want any automated ranks to overrule it, make sure it has a higher level than all your automated rules.

## Setting Criteria

You can set thresholds for:

* Points
* Posts (comments + discussions)
* Duration of membership
* Permission level (e.g. moderator or admin)

All thresholds you set must be met for the rank to be assigned. For instance, if you set Points to 50 and posts to 10, it means a member must have 50 points AND 10 posts to be assigned the rank.

Checking "Assigned Manually" means the criteria is ignored and the rank will only be assigned by a moderator or administrator editing the user's profile and selecting the rank.

## Manually Assigning a Rank

Rank assignment is done via "Edit Profile" from the user's profile. Any users in a role with the permission to edit users will be able to assign a rank.

## Abilities

Each ability may be given the value of "Grant", "Revoke", or "Default". The default value represents what the user would be allowed to do if Ranks was disabled. The grant and revoke options override their normal abilities.

Some abilities are effected by other addons. It's important to understand your current Vanilla installation before changing the default values for abilities.

For instance, in a default Vanilla installation, users will not have a "Title" field. Therefore, Ranks' "default" would be that no one has a Title. However, Profile Extender can be used to add a "Title" field, which would give Titles to all users. In that case, Ranks' default would be that everyone has a title.
