---
title: Apache
tags:
- Developers
- Server
category: developer
menu:
  developer:
    parent: backend
aliases:
- /developers/backend/apache
---

Vanilla has excellent built-in support for Apache. It's designed to work without additional confguration being necessary, but every setup is different.

## Requirements

You need to have the [mod_rewrite](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) module enabled.

### About .htaccess

Vanilla includes an [.htaccess](https://github.com/vanilla/vanilla/blob/master/.htaccess.dist)
file for full Apache support. `.htaccess` files [must be enabled for your web root](http://httpd.apache.org/docs/current/howto/htaccess.html) (unless you can use the content of the `.htaccess` in your main server config file instead).

It's renamed to `.htacess` during the install process. It's named with a `.dist` appended to start to prevent folks from accidentally overwriting it during copy/paste upgrades.

To run Vanilla in a subfolder, you may need to edit it as indicated within the file.

The provided `.htaccess` already comes with some decent security hardening:

- The only PHP script that can be requested directly is `/index.php`.
- Folders that should not be accessed from the web return a 403.

We're always eager to learn about various host restrictions and challenges you might run into. Start a discussion on the [community forum](https://open.vanillaforums.com/discussions) to tell us about situations you've come across or to request help with Apache.
