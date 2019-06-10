---
title: Self Hosting Basics
tags:
- Developers
- Installation
category: developer
menu:
  developer:
    parent: installation
---

## The Basics

Vanilla requires a server with PHP, MySQL, and web server software (like Apache or nginx). You'll probably need to own a domain, and already have it configured on your server with DNS. You usually need to create a database for it via your hosting provider, often via phpMyAdmin. Then you'll need to visit that domain after uploading Vanilla to continue installation. 

Up to this point, your web host is responsible for all these things. You should consult their docs and contact their support with any questions to getting as far as that.

Say you bought some web space and someone told you how to access it. It might be that you bought a domain like `example.com` or you received only a cryptic sub domain of your provider like `abc123456789.yourwebhoster.com` or you might only have received an IP address, so that you can reach your web space with `1.2.3.4`.

When you enter one of those to reach your web host, your web server shows what is in a folder of your web space. Often, that folder is called `public_html`. Say you own `example.com` and that's what you set up on your server. You have created a subfolder called `forum` (always use lowercase letters!) and uploaded Vanilla to it (see [installation below](https://github.com/vanilla/vanilla/blob/master/README.md#installation)). Then, you will be able to see the Vanilla installer when you visit `example.com/forum` in your browser.

## Requirements

We strongly recommend:

*  **PHP 7.3** or higher.
*  MySQL 5.7 or higher (or Percona/MariaDB equivalent).
* SSL encryption (check out [LetsEncrypt](https://letsencrypt.org/)).

If your server is not running PHP 7.1 or higher, **you should address this soon**. PHP 7.0 has reached end of life and will no longer receive security patches. **Vanilla's support for PHP 7.0 will end soon**.

Our _minimum_ requirements are now:

* PHP 7.1 or newer. (_This change to 7.2 in 2020._)
* PHP extensions mbstring (`--enable-mbstring`), cURL (`--with-curl`), GD (on by default), and PDO (on by default).
* To [import into Vanilla](#migrating-to-vanilla) you need MySQLi (`--with-mysqli`).
* To use our social plugins you need [OpenSSL](http://php.net/manual/en/openssl.installation.php).
* MySQL 5.0 or newer (or Percona/MariaDB equivalent).
* MySQL strict mode [disabled](https://www.liquidweb.com/kb/how-to-disable-mysql-strict-mode/).

Vanilla ships with a `.htaccess` file required for Apache support. Using nginx or IIS may require additional configuration. We have [docs for nginx](https://docs.vanillaforums.com/developer/backend/server-nginx/).

## Installation

Vanilla is built to be simple, and its installation is no exception.

1. Upload Vanilla's [pre-built version](https://open.vanillaforums.com/addon/vanilla-core) to your server.
1. Using nginx? [See our nginx guide](https://docs.vanillaforums.com/developer/backend/server-nginx/).
1. Confirm the `cache`, `conf`, and `uploads` folders are writable by PHP.
1. Navigate to the folder where you uploaded Vanilla in your web browser.
1. Follow the instructions on screen.

If you run into a problem, see [Getting Help](#getting-help) below.

## Upgrading

Follow these steps to upgrade Vanilla when a new stable release is announced. These instructions assume you're using SFTP to manually copy files to a server.

Please consider using [maintenance mode](#using-maintenance-mode) before running database updates if your database is very large (millions of users or comments).

1. Backup your database, `.htaccess` and `conf/config.php` file somewhere safe.
1. Delete all files in `/dist`.
1. Upload the new release's files so they overwrite the old ones.
1. Delete all files in `/cache` (except `.htaccess` if you use Apache).
1. Follow all version-specific instructions below. It is **critcal** you delete the listed files.
1. Go to `example.com/utility/update` to run any database updates needed. (404? See next paragraph.) If it fails, try it a second time by refreshing the page.

If you run into a problem, see [Getting Help](#getting-help) below.

### From Vanilla 2.8 or earlier

* Delete `plugins/EmojiExtender`. (Directory is now `plugins/emojiextender`). The addon key is still `emojiextender`.
* URL Rewriting is mandatory!! You're site should not be using URLs like `?p=/somepath`. See the 2.3 upgrade notes for more information.

### From Vanilla 2.6 or earlier

* Delete `plugins/Pockets`. (This is now in core.) 
* Delete `plugins/akismet`. (This is now in core.)
* Delete `plugins/Debugger`. (This is no longer maintained and no longer works. See [Debug Bar](https://open.vanillaforums.com/addon/debugbar-plugin) instead.
* Delete `applications/dashboard/models/class.assetmodel.php`

A few addons have been moved out of core. These are no longer maintained and may represent security holes for your forum.

- `ButtonBar` Use the built-in Rich Editor or Advanced Editor.
- `OpenID`

### From Vanilla 2.5 or earlier:

* Delete `plugins/HtmLawed`. (This is now in core.)
* Delete `plugins/Tagging`. (This is now in core.)

### From Vanilla 2.3 or earlier:

* Delete `/applications/vanilla/controllers/class.settingscontroller.php`.

If your forum still uses URLs including `?p=`, support for this URL structure has ended. Follow these steps to switch to the simpler format:

1. Confirm your server is setup to handle rewrites. On Apache, using the `.htaccess` file provided will accomplish this. Additional setup is required on [nginx](https://docs.vanillaforums.com/developer/backend/server-nginx/) and other platforms. 
2. Test whether it is working by visiting `/discussions` - if you see a discussions list (rather than a 404), it is likely setup correctly. 
3. Open `/conf/config.php` and find the line with `$Configuration['Garden']['RewriteUrls'] = false;` and **delete the entire line**. 

Your site should immediately switch to "pretty" URL paths instead of using the 'p' parameter. If there is a problem, re-add the line to your config and do further troubleshooting.

### From Vanilla 2.1 or earlier:

* Update ALL locales you have installed (in `/locales`).
* Apache users must update their `.htaccess` file.
* Delete `/themes/mobile/views/discussions/helper_functions.php`
* Delete `/applications/dashboard/views/default.master.php`

### From Vanilla 1.0:

Upgrading from 1.0 (any version) requires a full migration (see next section). Themes and plugins are not compatible. Backup your Vanilla 1 data and files completely, then delete them from your server before attempting to install Vanilla 2.

## Migrating to Vanilla

1. Get [Vanilla Porter](https://open.vanillaforums.com/addon/porter-core) and verify it supports your platform.
1. Read the Advanced Uses notes on that page.
1. Upload it to your current server.
1. Navigate to the file in your web browser & run it.
1. Take the file it produces and import it to Vanilla via the Dashboard's "Import" option.

If you run into a problem, see [Getting Help](#getting-help) below.

## Using Maintenance Mode

You can temporarily halt all access to your forum by putting it into maintenance mode. Users currently signed in with owner privileges (the user who created the forum) will still be able to use the site.

To put your site in maintenance mode, add this to `/conf/config.php` and save it:

`$Configuration['Garden']['UpdateMode'] = true;`

To end maintenance mode, delete it and save.

## Getting Help

* [Troubleshooting upgrades & installs](http://docs.vanillaforums.com/developers/troubleshooting/)
* [Official documentation](http://docs.vanillaforums.com)
* [Vanilla community forums](https://open.vanillaforums.com/discussions)
* [Official cloud hosting with professional support & migration services](https://vanillaforums.com/plans)
