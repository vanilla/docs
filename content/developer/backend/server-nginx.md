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

## Configuration Notes

The most important consideration to getting Vanilla running on nginx is to make sure the rewrite rules are correct. Below is one suggested configuration which locks down the server to only respond to requests via `index.php`, which we strongly recommend if Vanilla is the only application running.

Make sure that you set the `fastcgi_param` named `X_REWRITE` to `1`.

When configuring fastcgi, using `$realpath_root` instead of `$document_root` may be necessary in some setups (e.g. when using symlinks).

We define `SCRIPT_NAME` and `SCRIPT_FILENAME` explicitly because some configurations may redundantly re-add them during the rewrite, resulting in a name of "/index.php/index.php". The end result of this is all your Javascript and CSS assets paths in the page start with "/index.php", thus breaking them. Feel free to omit those two lines if you're confident your configuration is immune.

## Sample Configuration

```nginx
    # Block some folders as an extra hardening measure.
    location ~* /\.git { deny all; return 403; }
    location ~* ^/build/ { deny all; return 403; }
    location ~* ^/cache/ { deny all; return 403; }
    location ~* ^/cgi-bin/ { deny all; return 403; }
    location ~* ^/uploads/import/ { deny all; return 403; }
    location ~* ^/conf/ { deny all; return 403; }
    location ~* ^/tests/ { deny all; return 403; }
    location ~* ^/vendor/ { deny all; return 403; }

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

    # Default path handling is to pass it back to /index.php.
    location / {
        try_files $uri @vanilla;
    }
    
    location @vanilla {
        rewrite ^ /index.php$uri last;
    }
```

## Hardening

Here are some directories that should be forbidden:

```nginx
    
```
