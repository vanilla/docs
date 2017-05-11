---
title: Backend
tags:
- Developers
category: developer
menu:
  developer:
    identifier: backend
aliases:
- /developers/backend
---
## Server

Vanilla works with Apache, nginx (our preference) or IIS with proper configuration. The core team does not officially support IIS but accept bug reports and patches related to it.

### Apache

Vanilla includes an `.htaccess` file for out-of-box Apache support. You may need to edit the htaccess file as indicated for subfolder usage. Obviously, htaccess files must be enabled for your web root.

### nginx

The key to specifically running Vanilla under nginx is getting the basic rewrite rule in `nginx.conf` correct. These are by no means complete conf files nor an nginx tutorial, these are simply excerpts of the Vanilla-specific rules needed.

An example of **Vanilla 2.2 and earlier** running in the root web folder:

        location @site {
           rewrite ^ /index.php?p=$uri&$args last;
        }
        
        location / {
           try_files $uri @site;
        }

An example of **Vanilla 2.2 and earlier** in a subfolder:

        location /subfolder {
           try_files $uri @subfolder;
        }

        location @subfolder {
           rewrite ^/subfolder(/.*) /subfolder/index.php?p=$1&$args last;
        }

In **Vanilla 2.3**, these rules change because the `p` parameter has been removed in favor of strict usage of `PATH_INFO`, and therefore no rewrite is needed. However, it's important that your fastcgi params are setup to pass this information to PHP.

### IIS

We do not officially support this server, but information and help may be provided on our [community forum](https://open.vanillaforums.com). We welcome additions to this documentation.

## Advanced Handling of Headers

To utilize advanced handling of request and networking headers, it is recommended you make the necessary modifications in a `bootstrap.before.php` file. You may need to create this file in your config folder, if it does not already exist. The contents of this file are executed at the very beginning of Vanilla's bootstrapping process. 

If, for example, you wanted to use the `Host` header from an incoming request to set the host Vanilla sees, you would add the following into `bootstrap.before.php`:

        if (isset($_SERVER['HTTP_HOST'])) {
            $_SERVER['SERVER_NAME'] = $_SERVER['HTTP_HOST'];
        }

This will overwrite the host set by the server with the value of the `Host` header. It is crucial to verify the validity of any such data. **If you cannot verify the hosts provided in these headers, do not attempt to use them.**

## Caching

### OPcache

OPcache replaced APC as the preferred opcode caching solution for PHP as of 5.5. Vanilla is compatible with OPcache and no additional configuration is necessary beyond simply enabling it.

### Memcached

Vanilla has support for both Memcache and Memcached, but we strongly recommend Memcached if you have an option. It does require additional configuration beyond installing and enabling it in PHP.

```
$Configuration['Cache']['Enabled'] = true;
$Configuration['Cache']['Method'] = 'memcached';
$Configuration['memcached']['Store'] = 'localhost';
```

You can also specify a port for memcached. Store, e.g.: `localhost:11211`.

Lastly, you can optionally set Memcached options directly in your Vanilla config. Here are some example settings you may wish to use. Note that these require Memcached to be enabled on your server or else adding these to your config will cause errors.

```
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_COMPRESSION] = true;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_DISTRIBUTION] = Memcached::DISTRIBUTION_CONSISTENT;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_LIBKETAMA_COMPATIBLE] = true;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_NO_BLOCK] = true;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_TCP_NODELAY] = true;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_CONNECT_TIMEOUT] = 1000;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_SERVER_FAILURE_LIMIT] = 2;
```
