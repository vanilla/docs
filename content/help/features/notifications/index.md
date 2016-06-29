---
title: Notifications
layout: docs
categories: ["Features","Notifications"]
---

# Notifications

Notifications for certain forum events can be delivered in-app (via Growl-style popups) and/or via email. New users will be opted in to a list of notifications that can be configured by the administrator. Users may edit these preferences in their profile at any time.

Any notification level may be selectively disabled globally. It is also possible to globally disable all email sending by setting `Garden.Email = false` in your config.


## Basic notifications

Notifications available by default to all users.

* Notify me when people write on my wall.
* Notify me when people reply to my wall comments.
* Notify me when people mention me in comments.
* Notify me when people comment on my discussions.
* Notify me when people comment on my bookmarked discussions.
* Notify me when people mention me.
* Notify me of private messages.
* Notify me when I am added to private conversations.


## Addon notifications

Addons may add more notifications.

### Badges (cloud-only)

* Notify me when I earn a badge.
* Notify me when a badge is requested. [Moderator only]

### Ideation (cloud-only)

* Notify me when my ideas' statuses change.    
* Notify me when the status changes on an idea I've voted on.


## Advanced notifications

Moderators and administrators have permission to be notified for every new comment or discussion, and they can set this per category. These are available on the same Edit Preferences page under Edit Profile. *Do not enable this feature for all users.*


## Setting defaults

You can set default notification levels for new users in your config. Setting a value to `1` is on, `0` is off, and `false` disables it globally. Any user has already chosen their preferences will be unaffected.

Vanilla starts with these defaults:

    Preferences.Email.ConversationMessage   = 1;
    Preferences.Email.BookmarkComment       = 1;
    Preferences.Email.WallComment           = 0;
    Preferences.Email.ActivityComment       = 0;
    Preferences.Email.DiscussionComment     = 0;
    Preferences.Email.ParticipateComment    = 0;
    Preferences.Popup.ConversationMessage   = 1;
    Preferences.Popup.BookmarkComment       = 1;
    Preferences.Popup.WallComment           = 1;
    Preferences.Popup.ActivityComment       = 1;
    Preferences.Popup.DiscussionComment     = 1;
    Preferences.Email.Mention               = 0;
    Preferences.Popup.Mention               = 1;