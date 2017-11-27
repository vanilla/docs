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

Vanilla works with Apache, nginx (our preference) or IIS with proper configuration.
The core team does not officially support IIS but accept bug reports and patches related to it.
Information and help may be provided on our [community forum](https://open.vanillaforums.com).
We welcome additions to this documentation.

See the dedicated sections for more information about Apache and nginx.

## Advanced Handling of Headers

To utilize advanced handling of request and networking headers, 
it is recommended you make the necessary modifications in a `bootstrap.before.php` file.
You may need to create this file in your config folder, if it does not already exist.
The contents of this file are executed at the very beginning of Vanilla's bootstrapping process. 

If, for example, you wanted to use the `Host` header from an incoming request to set the host Vanilla sees,
you would add the following into `bootstrap.before.php`:

```php
    if (isset($_SERVER['HTTP_HOST'])) {
        $_SERVER['SERVER_NAME'] = $_SERVER['HTTP_HOST'];
    }
```

This will overwrite the host set by the server with the value of the `Host` header.
It is crucial to verify the validity of any such data. **If you cannot verify the hosts provided in these headers,
do not attempt to use them.**

## Caching

### OPcache

OPcache replaced APC as the preferred opcode caching solution for PHP as of 5.5.
Vanilla is compatible with OPcache and no additional configuration is necessary beyond simply enabling it.

### Memcached

Vanilla has support for both Memcache and Memcached, but we strongly recommend Memcached if you have an option.
It does require additional configuration beyond installing and enabling it in PHP.

```php
$Configuration['Cache']['Enabled'] = true;
$Configuration['Cache']['Method'] = 'memcached';
$Configuration['memcached']['Store'] = 'localhost';
```

You can also specify a port for memcached. Store, e.g.: `localhost:11211`.

Lastly, you can optionally set Memcached options directly in your Vanilla config.
Here are some example settings you may wish to use.
Note that these require Memcached to be enabled on your server or else adding these to your config will cause errors.

```php
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_COMPRESSION] = true;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_DISTRIBUTION] = Memcached::DISTRIBUTION_CONSISTENT;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_LIBKETAMA_COMPATIBLE] = true;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_NO_BLOCK] = true;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_TCP_NODELAY] = true;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_CONNECT_TIMEOUT] = 1000;
$Configuration['Cache.Memcached.Option.'.Memcached::OPT_SERVER_FAILURE_LIMIT] = 2;
```
