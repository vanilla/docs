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
## nginx

### Configuration

The key to specifically running Vanilla under nginx is getting the basic rewrite rule in nginx.conf correct.
You can see a working example in the Hardening section.

Some tips:
- When configuring fastcgi make sure that you use `$realpath_root` instead of `$document_root`.
- Make sure that you set the `fastcgi_param` `X_REWRITE` parameter to `1`.

### Hardening

Here are some directories that should be forbidden:

```nginx
    location ~* "/\.git" { deny all; return 403; }
    location ~* "^/build/" { deny all; return 403; }
    location ~* "^/cache/" { deny all; return 403; }
    location ~* "^/cgi-bin/" { deny all; return 403; }
    location ~* "^/uploads/import/" { deny all; return 403; }
    location ~* "^/conf/" { deny all; return 403; }
    location ~* "^/tests/" { deny all; return 403; }
    location ~* "^/vendor/" { deny all; return 403; }
```

We alo recommend to disallow any script but `/index.php` from being called directly.
This can be achieved like so:

```nginx
    # /index.php handler
    location ~* "^/index\.php(/|$)" {
        # send to fastcgi
        include fastcgi.conf;
        fastcgi_param X_REWRITE 1; # Needed for pretty URLs
        fastcgi_pass php-fpm; # Upstream defined in nginx.conf 
    }

    # If it is a php script disallow its execution by redirecting the call it to /index.php
    location ~* "\.php(/|$)" {
        rewrite ^ /index.php$uri last;
    }

    # Default location handling
    location / {
        try_files $uri @vanilla;
    }

    location @vanilla {
        rewrite ^ /index.php$uri last;
    }
```
