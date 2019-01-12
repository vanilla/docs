---
title: nginx
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

Vanilla includes excellent support for nginx. In fact, it's our server of choice for our cloud service. 

When configuring nginx, it's an excellent idea to save a backup copy of every file you intend to edit before you do it, so you can keep track of all changes you've made in case you need to revert some of them.

## Configuration Notes

The most important consideration to getting Vanilla running on nginx is to make sure the rewrite rules are correct. Below is one suggested configuration which locks down the server to only respond to requests via `index.php`, which we strongly recommend if Vanilla is the only application running.

Make sure that you set the `fastcgi_param` named `X_REWRITE` to `1`.

Make sure that you define `PATH_INFO` in your `fastcgi_param` file. You may find this [example set of FastCGI params](https://www.nginx.com/resources/wiki/start/topics/examples/phpfcgi/) helpful.

When configuring FastCGI, using `$realpath_root` instead of `$document_root` may be necessary in some setups (e.g. when using symlinks).

We define `SCRIPT_NAME` and `SCRIPT_FILENAME` explicitly because some configurations may redundantly re-add them during the rewrite, resulting in a name of "/index.php/index.php". The end result of this is all your Javascript and CSS assets paths in the page start with "/index.php", thus breaking them. Feel free to omit those two lines if you're confident your configuration is immune.

## Sample Configuration

This would go within the appropriate `server { }` block. It assumes you've already assigned a `root` and `index`, among other things.

```nginx
    # Block some folders as an extra hardening measure.
    location ~* /\.git { deny all; return 403; }
    location /build/ { deny all; return 403; }
    location /cache/ { deny all; return 403; }
    location /cgi-bin/ { deny all; return 403; }
    location /uploads/import/ { deny all; return 403; }
    location /conf/ { deny all; return 403; }
    location /tests/ { deny all; return 403; }
    location /vendor/ { deny all; return 403; }

    # This handles all the main requests thru index.php.
    location ~* ^/index\.php(/|$) {
        # send to fastcgi
        include fastcgi.conf;
        fastcgi_param SCRIPT_NAME /index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root/index.php;
        fastcgi_param X_REWRITE 1;
        fastcgi_pass php-fpm; # where 'php-fpm' is the upstream, probably defined in nginx.conf 
    }

    # If this is some other PHP script, disallow it by redirecting to /index.php
    location ~* \.php(/|$) {
        rewrite ^ /index.php$uri last;
    }

    # Default path handling
    location / {
        try_files $uri @vanilla;
    }
    
    location @vanilla {
        rewrite ^ /index.php$uri last;
    }
```

## Troubleshooting

As recommended in the nginx docs, a good first step is to replace your `index.php` file temporarily with this code to reveal what nginx is passing along to PHP:

`<?php var_export($_SERVER)?>`

You should see `PATH_INFO` available with a value of a relative path, for example: `/discussion/1/some-title-of-a-discussion` if you had clicked on a discussion or `/entry/signin?Target=discussions` if you clicked on "Sign In". Your `SCRIPT_NAME` should be `/index.php`. Failing to set `X_REWRITE` may create a redirect loop or errors in Vanilla.

If you get a 500 error, you've probably made a critical error in your nginx configuration and may need to start over if you aren't sure what changes you've made.
