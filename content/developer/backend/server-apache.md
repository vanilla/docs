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
## Apache

### Pre-requisite

You need to have the [mod_rewrite](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) module enabled.

### Configuration

Vanilla includes an [.htaccess](https://github.com/vanilla/vanilla/blob/master/.htaccess.dist)
file for out-of-box Apache support.
You may need to edit it, as indicated inside itself, for subfolder usage.
Obviously, `.htaccess` files [must be enabled for your web root](http://httpd.apache.org/docs/current/howto/htaccess.html).

If you are able to, you can also take the content of the `.htaccess` and use it directly in your main server config file.

### Hardening

The provided `.htaccess` already comes with some decent hardening:

- The only php script that can be requested directly is /index.php
- Folders that should not be accessed from the web return a 403.
