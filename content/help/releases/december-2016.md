---
title: December 2016 Release
tags:
- Cloud
- Releases
- "2016"
category: help
menu:
  help:
    parent: releases
    weight: 201611
aliases:
- /cloud/releases/december-2016
---
## Release Notes

### Changes:

* Add full IPv6 support.
* Add and improve addon icons.
* Add meta tags for discussion links to generate Twitter cards (when added to tweets).
* Add settings to Dashboard for category max display depth.
* Add some padding to HTML tables in posts (improve legibility).
* Add support for our new CDN.
* Add accessibility attributes to Customize Theme.
* Add pager to log views.
* Improve category headings detection and table view support.
* Improve markup of category settings page.
* Ensure password editing fields toggle appropriately.
* Allow removal of button from HTML email.
* Restore Theme Preview functionality (except for Mobile 2014).
* Default to secure cookies if "ForceSSL" is set and using HTTPS.
* Skip validating discussion title when a draft is saved.
* Improve markup and make further enhancements to Dashboard v3.
* Restrict upload filename to be per post instead of by entire discussion.
* Allow uploading a Photo when creating a new category.
* Avoid auto-scrolling to top when in comment embed.
* Confirm that user wants to delete images before deleting (in Dashboard).
* Update documentation links for Social Connect addons.
* Replace "Hide Category" with "Mute Category" option.
* Allow new messages to accept a subject parameter (if enabled) via URL.
* Fix delete message button (in Dashboard).
* Fix delete ban button (in Dashboard).
* Fix category depth calculation in subcommunities.
* Fix IP filtering on user management page
* Fix heading categories sometimes being wrapped in an anchor.
* Fix dashboard pager next button when there are 0 results.
* Fix the user photo in search.
* Fix extra &lt;br> tags in plain text emails.
* Fix issue where nav is cut off on category add/edit.
* Fix wrong heading for "activity" on profile page
* Fix activity notifications falsely flagging as sent when it was skipped.
* Fix ICO transparency issue after upload (in Dashboard).
* Fix permission check for Change Log page to allow moderators (Moderation.Manage).
* Fix avatar cropping in profile.
* jsConnect: Add warning to jsConnect dashboard when provider is in test mode.
* jsConnect: [Security] Add content-type to callback endpoint to prevent potential XSS.
* Badges: Add badge name as alt text to badge images.
* Badges: Add the ability to edit thresholds for some badges.
* Polls: Fix results percentage.
* Polls: Fix cancel button.
* Polls: Hide category dropdown when already inside a category.
* Polls: Fix auto-selecting first child category in category dropdown.
* Q&A: Fix auto-selecting first child category in category dropdown.
* Reactions: Add inform message to Reactions enable toggle (in Dashboard).
* Reactions: Fix RSS view when BestOf is configured as tiles.
* Reactions: Fix customizations reverting after database updates.
* Reactions: [Security] Add missing CSRF protection on "react" endpoint.
* Reactions: Fix reactions popup possible overlap.
* Reactions: Translate reaction names in navigation breadcrumbs.
* MailChimp: Fix issue with synchronizing lists.
* Profile Extender: Fix checkbox display on registration.
* Ignore: Fix failure to unignore user if their ignore privileges have been revoked.
* Groups: Fix search in groups when the category is not viewable.
* Warnings & Notes: Fix extra line after quote.
* Civil Tongue: Add support for groups and group events.
* Salesforce: Remove from options on profile social connect.
* Split/Merge: Make the System user the new discussion's author when splitting comments.
* SAML: Allow SAML to accommodate differently-configured XML responses. 
* SimpleAPI: Fix situations where other addons could conflict with API endpoints.
