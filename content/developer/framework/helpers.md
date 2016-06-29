---
title: Helpers
layout: docs
categories: ["Developers","Framework"]
---

# Helper functions

This is a quickstart guide to some of Vanilla's globally available functions and methods. Familiarizing yourself with them will save you time and effort in the long term, and give you clues about how best to use the framework. 

This is by no means an exhaustive list, nor full signature documentation. You'll want to find them in the source code (files at `/library/core/functions.*.php`) for more info.


## Getting & setting

See `functions.compatibility.php` for more info.

* `val()` allows the retrieval of a named key or property from an array or object, and optionally provide a default if the named item does not exist (default: `false`). This is helpful when you're unclear whether a key/property is set, or what data type you have currently. This function was previously named `GetValue()`, which is now deprecated.
* `setValue()` is the opposite of `val()` - it sets the named value on the array/object with the specified value.
* `Gdn::get()` retrieves a key from the `GDN_UserMeta` table with a UserID of 0. This is used for generic data storage, especially large, plugin-related settings.
* `Gdn::set()` places data into the `GDN_UserMeta` table with the given key against UserID 0.


## Configuration

See `functions.general.php` for more info.

* `c()` grabs a value from the configuration with the option to provide a default (`false` if none is provided).
* `saveToConfig()` saves a value to the config. Pass `false` as the third parameter to only set the config for the current runtime.


## HTML

See `functions.render.php` for more info.

* `url()` generates a valid, full URL for a resource on your site.
* `externalUrl()` generates a valid URL to a resource not on your current site.
* `anchor()` creates an HTML link.
* `img()` creates an `img` tag for the provided resource.
* `wrap()` places HTML tags around content.


## Safety tips

* Use the `Form` object to generate HTML forms.
* Use the `Format` object to handle outputting user-generated content.
* Use `safeHeader()` to send a header.
* Use `safeRedirect()` to redirect a user.
* Use `checkPermission()` to do just what it says on the tin.

## Forum assets

See `functions.render.php` for more info.

* `userUrl()` & `userAnchor()` take a user and create a URL or full anchor tag around their username.
* `userPhoto()` & `userPhotoUrl()` create a user's avatar or avatar location, respectively.
* `categoryUrl()` generates a category's URL.

## Developer tools

* `decho()` outputs nicely-formatted debug information nicer than `print_r()`.
* `deprecated()` indicates information about when a method or function was deprecated.