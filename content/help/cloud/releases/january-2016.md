---
title: "January 2016 Release"
tags: ["Cloud","Releases","2016"]
category: "help"
menu:
    help:
        parent: "cloud-releases"
        weight: 201601
---

## Release Notes

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
