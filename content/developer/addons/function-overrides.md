---
title: Overriding Functions
tags:
- Developers
- Addons
- Function
- Override
category: addons
menu:
  developer:
    parent: addons
    weight: 14
---

Sometimes you may want to override an existing core function in Vanilla. This can be done anywhere inside of your addon, but is generally best done at the bottom of your Plugin.

Confused about addons and plugins? Learn the difference between [Addons, Plugins, and Themes](/developer/addons/#addons-and-plugins-and-themes-oh-my).

In order to facilitate this all functions in the framework are declared like so:

```php
if (!function_exists('functionName')) {
    function functionName() {
        // Do something.
    }
}
```

Addons may override any of these functions by redefining the function inside of an addon's plugin, which will be loaded before the core functions. See the full list of existing core functions by looking in files beginning with `functions.` inside of the `library/core` directory of your Vanilla installation. The most commonly overridden functions can be found in the [library/core/functions.general.php](https://github.com/vanilla/vanilla/blob/master/library/core/functions.general.php).
