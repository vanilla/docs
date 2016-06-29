---
title: Releases
layout: docs
categories: ["Cloud","Releases"]
---

# Release Notes

Our clients on [VIP plans](http://vanillaforums.com/plans) receive a timed code release every two months with new features, fixes, and enhancements. All other plan levels receive these changes continuously as they become available.

We publish changes after each VIP release below, well after other plan levels may have received it.


## March 2016

### Changes:

* HTML emails now available.
* Applicants list is now asynchronous with improved UI.
* Spoilers added as core feature with updated formatting.
* Automatic bans (from Banning rules) can now be reversed.
* Reactions will now always show on all devices, instead of on-hover for larger screens ("desktop").
* Sign In form now auto-focuses on Username field.
* Fix newest comment data for zero-comment discussions in table view.
* Post excerpts (as in search) now have a minimum length of 32 even if a double-return is found first.
* Remove line breaks in meta description.
* Added events to support new analytics system.
* Fix styling of '/me' posts.
* QnA: Allow users to accept their own answer.
* Reactions: Add an option to allow users to react to their own posts.
* Add advanced editor options to New Poll screen.
* Fix plus signs in URLs, especially usernames / profiles.
* Improve SSO workflow for existing usernames.
* Rework discussion sorting and filtering architecture.
* Add no-store header to profiles so read/unread status updates on Back button.
* Pockets: fix repeating pockets between discussions, and enable on table view.
* Subcommunities: Fix category dropdown filtering when in a subcommunity.
* Hide editor toolbar when previewing.
* Fix double-deletion of comment drafts when posting, which could cause a Javascript error.
* Fix scenario where Quotes could interfere with Spoilers.
* Vanillicons: Now defaults to v2.
* NBBC: Fix scenario that could break search results formatting.
* Fix opaque photo cropping box.
* Fix and unify logic for determining permission to edit a user's photo.
* Allow quotes to be collapsed in reported posts.
* Allow collapsing of quotes with alternate formatting.
* Make even deeply-nested quotes minimally legible.
* Update dropdown menu rendering in several places.
* Update number formatting for discussion & comment counts on All Categories page.
* Update stock themes for Ideation.
* Groups: Allow anyone who can edit an event to also delete it.

### New addons available:

* Ideation (vote on ideas) - Contact your CSM for more details
* Microsoft Account SSO
* CAS SSO
* Keyword Blocker (send posts with certain keywords to mod queue)
* Necro Posts (labels recently-revived discussions)
* User Points Booster (allow awarding points for discussions or comments)
* Whitelist (provide an IP whitelist for site access)

## January 2016

### Changes:

* Restore no-store header to discussion & category lists (fixes "read" markers not updating on "Back").
* Improved formatting of Vanilla Comments in certain input formats.
* Updated Smarty template parsing library.
* Fix an issue in draft saving.
* Fix spam deletion error.
* Update Editor to use files' real names when downloading.
* Fix RSS feed when table view is in use.
* Remove deprecated form field name prefixing.
* Add more category data to VanillaPop emails.
* Update gifv embed to prefer WebM.
* Various low-level fixes for PHP 7 compatibility.
* Fix CSRF check when deleting a ban.
* Close open redirect & fix flood control in database updating endpoint.
* Improve security in how Vimeo is embedded.
* Add Wistia embed.
* Enforce POST data for several endpoints.
* Improve theme compatibility with Groups.
* Automatically remove spaces around Banning rules to prevent bad data being entered.
* Improve image resizing to always use highest quality images possible.
* Fix Facebook SSO: retrieval of email address, avatar distortion, & name overwriting.
* Remove "dashboard" namespace from several dashboard URLs.
* Fix several MySQL strict mode errors.
* Remove livequery jQuery extension and all remaining uses of it.
* Remove base64 encoding from all asynchronous requests.
* Allow setting of avatar via API.
* Allow category permissions to be set via API.
* Allow certain configurations to be set depending on permission level.
* Re-add user count to the user list whenever possible based on size of table.
* Give full formatting bar to Activity form.

