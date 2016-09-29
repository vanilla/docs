---
title: September 2016 Release
tags:
- Cloud
- Releases
- "2016"
category: help
menu:
  help:
    parent: releases
    weight: 201609
aliases:
- /cloud/releases/september-2016
---
## Release Notes

### Changes:

* New Dashboard! This changed every page in the moderator/admin backend, including all addon settings pages.
* Add navigation memory to the Dashboard. It will now preserve menu collapsing states & your page within each section between visits.
* Add "Flat Categories" feature and optional navigation module. This allows browsing hundreds of categories as an alphabetical directory.
* Improve how categories are managed in the Dashboard.
* Categories now default to type "Nested" and must have a type assigned.
* Add full recipients list to Badges. Click the "Given" number from "Badges" in the Dashboard.
* Add new "Post Numbering" addon (by request only, currently).
* Add new "Role Tracker" addon (by request only, currently).
* Add ability to convert discussions to "ideas" (if Ideation is enabled).
* Add ability to configure warnings in Warnings & Notes addon.
* Add redirects for Lithium and Ning community imports (Redirector addon).
* Add support for vBulletin 3 & 4 showthread.php?p={POSTID} URL redirects.
* Allow "Location" and "Title" to be edited from User Edit.
* Fix Profile Extender's handling of non-ASCII characters in field names.
* Refactored how we handle all requests (dispatcher).
* Update MailChimp addon to use v3 of their API and support MailChimp "groups".
* Update Facebook addon to use versioned endpoint.
* Fix "Mark All Viewed" endpoint to prevent accidental or malicious triggering and fix its redirect.
* Fix Bootstrap3 theme color schemes "paper" and "sandstone".
* Remove "SafeStyles" option (previously deprecated).
* General addon code maintenance done on: Groups, Reactions, Ranks, Polls, SAMLSSO, and Badges.
* Fix issue with embedding where you could stay scrolled down when changing page.
* Add username validation to /message/add endpoint (when pre-filling "To:" field via URL).
* Fix conflict between Discussion Photos addon and Ideation addon.
* Add ability for Smarty templates to access `isMobile` function, `userAgentType` function, `homepage_title` function, and `Homepage` (boolean variable).
* Fix issue where default role settings weren't transferred from old system correctly.
* Add additional line break to welcome email.
* Do not wrap images in a div if they are already in an anchor to fix potential clicking issue.
* Fix autocomplete dropdown display in modals with Bootstrap3 theme.
* Add the post that a user was warned for in the email notification.
* Do not serve empty (or comment-only) CSS files from Custom Theme feature.
* Fix photos' URL for /user/summary API endpoint.
* Fix quotes that are done on a user with spaces in its name.
* Fix `tabindex` for comments, conversations, discussions (for keyboard navigation around page).
* Add announcements to discussions RSS (in posting order).
* Block adding banning rules that would HAL-9000 the entire crew, like `*.*`.
* Fix the basic (not advanced, which had no issue) search pager.
* Do not revalidate username on edit if no change on user edit.
* Do not send `noindex` meta on error pages to prevent legit pages from being un-indexed.
* Increase the priority of custom.css to be higher.
* Fix log link showing when no log exists.
* Allow "Unanswered Questions" page title to be translated (Q&A addon).
* Add support for alternate SAML document structures (SSO).
* Enforce max tags limit on the front end and cleanup tag validation.
* Encode slashes in usernames when creating profile links.
* Allow comment drafts to be orphaned (instead of removed) when their discussion is deleted and rework drafts view.
* Unregister plugins immediately after it has been disabled instead of waiting until the next page request.
* Hide email preferences when email is disabled globally.
* Hide the RSS icon from categories that are type 'Categories' since they contain no discussions.
* Trim all control characters from discussion title (helps prevent broken or blank titles).
* Fix scenario where discussion title could be blank.
* Fix user search to allow numeric usernames as long as it's an exact match.
* Akismet will now validate your key before accepting it (Cloud customers do not require their own key; it is optional).
* Improve Akismet addon description and deprecate TypePad option (no longer offered by TypePad).
* Hide Participated menu for guests (Participated addon).
* Let welcome email fallback to HomepageTitle when the site's name is not set properly.
* Turn off autocomplete on text fields when editing users in dashboard (to prevent accidental data insertion).
* Improve how table layouts choose their column widths according to the content in them.
* Improve Q&A and how it interacts with Subcommunities, especially displaying an Unanswered count per community.
* Change H2s for H1s for a few edit profile pages.
* Improve consistency in module (widget) titles (usually H4) so they are properly configurable.
* Add invited user data to user exports.
* Fix button height in Share This widget.
* Add OAuth2 library to core product for building custom implementations more easily.
* Fix potential duplicate rank promotion notifications.
* Change the priority order of the SimpleAPI plugin so Subcommunities does not interfere with API calls.
