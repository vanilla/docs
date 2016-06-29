---
title: Configuration
layout: docs
categories: ["Developers","Configuration"]
---

## Vanilla configuration files

Vanilla uses a file-based configuration system.

Vanilla is distributed with a file at `/conf/config-defaults.php` which we will call "config-defaults". After installation, a file is created at `/conf/config.php` which we will call simply "config" or "config.php".

Your config-defaults file should **never** be edited. It is overwritten during every upgrade. Sometimes future changes may depend on your default configuration being changed and this is the mechanism thru which it will happen.

All configuration changes are to be exclusively made to your config.php file. We recommend periodically making a backup copy of your `config.php` and storing it in a safe location (not on your web server).

## Editing configuration

```php
<?php
// Config file entries look like this:
$Configuration['Area']['FeatureSet']['Setting'] = 'Value';
```

Config entires must render as valid PHP code, so the placement of quotes, brackets, and semicolons is extremely important. Line order does not matter, unless you accidentally duplicate values (which should be avoided). In that case, the last duplicate would take precedence.

Some scenarios for editing your config:

* You want to change a config setting, so you simply change 'Value' on 1 line.
* You want to change a default, so you copy a line from config-defaults into config, then modify its value.
* You want to add a new config value entirely, so you enter it using the format indicated above on a new line in the config.

## Avoiding accidental overwrites

Only open or copy your config for editing *after* you have applied or saved your latest settings in the Dashboard, and wait until you are done editing to make further changes to your site. Saving your config will overwrite any changes you may have made elsewhere at the same time.

## Shorthand references

When we talk about config lines, we use the following shorthand:

`Area.FeatureSet.Setting = 'Value'`

```php
<?php
// The shorthand written using the full formatting
$Configuration['Area']['FeatureSet']['Setting'] = 'Value';
```

If the above is written in instructions or comments, it is still to be formatted in the config according to the format shown earlier with brackets and quotes.

Always double-check you have properly transcribed the name and value before saving.
