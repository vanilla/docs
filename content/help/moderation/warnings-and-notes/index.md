---
title: Warnings and Notes
tags:
- Features
- Moderation
category: help
menu:
  help:
    parent: moderation
    identifier: warnings
aliases:
- /moderation/warnings
- /moderation/warnings-and-notes/adding-and-editing-user-notes
- /moderation/warnings-and-notes/upgrading-from-warnings
- /moderation/warnings-and-notes/warning-a-user
- /help/moderation/warnings-and-notes/adding-and-editing-user-notes
- /help/moderation/warnings-and-notes/upgrading-from-warnings
- /help/moderation/warnings-and-notes/warning-a-user
---
## What are Warnings?

Warnings can be given to users by moderators for behavior that is not appropriate in the community. Warnings use a points system that increases a user’s warning level with successive warnings until the warnings expire. Once users reach certain points thresholds they can be jailed or banned.

## What are Notes?

User notes are notes attached to individual users that only moderators can add and see. They allow moderators to keep track of information about users that may be important to other moderators.

## Warning Levels and Expiry

When a moderator warns a user the severity of the warning determines how many points it adds to the user’s warning level and when the warning expires. Admins can see a user’s warning level from the member profile via a banner at the top. Moderators can see the details of warning and expiry from the notes tab.

When a user’s warnings expire then their warning level will be reset to zero and the user will have a clean slate.

If you warn a user that has already been warned then the points from the new warning will be added their warning level and their expiry will be extended. When a user reaches certain warning levels they will be punished.

### Warning Level 3: Jailed

Users that reach warning level 3 are considered jailed. Being jailed means the following:

* A jail icon is overlaid over the user’s avatar.
* The user can’t start new discussions.
* The user is flood controlled so they can only post once every 150 seconds.
* The user’s signature is hidden.

The idea behind being jailed is to punish the user a little bit to let them know that you’re serious, but to let them continue to be a part of the community to correct their behavior.

### Warning Level 5: Banned

Users that reach warning level 5 are banned from the community completely.

## Usage

### Adding a Note

To add a note for a user go to their profile. In their edit profile drop down there should be an item called Add Note. Users must have the permission Garden.Moderation.Manage or Moderation.UserNotes.Add (if present) to add notes.

### Viewing Notes

To view a user’s notes go to their profile. There will be a notes link on the side panel. Note that both notes and warnings are displayed in the same list. Notes are identified by a note tag. Users must have the permission Garden.Moderation.Manage or Moderation.UserNotes.View (if present) to view notes.

### Editing and Deleting a Note

You can edit and delete user notes by hovering over them and clicking the corresponding button. Users must have the permission Garden.Moderation.Manage or Moderation.UserNotes.Add (if present) to edit or delete notes.

## Upgrading from Warnings

### Warnings & Notes is version 2

The first version of this addon was titled simply "Warnings". It did not include the User Notes feature. It had more granular controls for Warning a user with particular point levels and durations.

We recommend all users disable the "Warnings" addon if they still have it and immediately enable the "Warnings & Notes" addon instead.

### Why does "Warnings & Notes" have less granular settings?

We discovered that additional options created ambiguity among moderator teams over what an appropriate warning level was for particular user behaviors. By limiting the number of options, we've increased clarity for how to use the feature.

## Warning a User

You can warn a user from their profile, or from a post that they’ve made. Warnings may be given by users with the permission Garden.Moderation.Manage or Moderation.Warnings.Add (if present).

### Profile Warning

To warn a user from their profile click on their edit profile drop down. There should be an item called Warn.

### Warn from a Post

You can warn a user for a post they’ve made. To do this click on the post’s flag menu and click Warn.

## Warn Dialog

Clicking a warn button will bring up the warn dialog where you can enter information about the warning.

### Severity

Select from a list of warning severities. The idea is that moderators should pick a severity based on the action that the user did and let the system keep track of those warnings to decide on punishments based on the points that accumulate on successive warnings.

### Message To User

Enter a message that will be sent to the user explaining why you’re warning them. This message is sent in the form of a private message and the user can reply to it to plead their case.

### Private Note to Moderators:

Optional. Enter a short note that only moderators can see. This is useful if you want to convey sensitive information that should be hidden from the user that has been warned.

### Attach this warning to the post

If you warn a user from a post then there will be a checkbox to attach the warning to the post. When you select this then the post will be linked to the warning.

## Viewing Warnings

To view a user’s warnings go to their profile. There will be a notes link on the side panel. Note that both notes and warnings are displayed in the same list. Warnings are identified by a warning tag.

Users that may view warnings are those with the permission Garden.Moderation.Manage or Moderation.UserNotes.View (if present).

## Reversing Warnings

You can reverse warnings by hovering over them and clicking the reverse button. Reversing a warning removes its points from the user’s warning level, but doesn’t remove the warnings from the user’s profile. Reversed warnings are noted with a reversed tag.
