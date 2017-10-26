---
title: PluginInfo & ThemeInfo
tags:
- Developers
- Addons
- Configuration
- about.php
- addon.json
versioning:
  deprecated: 2.5
category: addons
menu:
  developer:
    parent: addons
    weight: 17
aliases:
- /developer/theming/about-php
---

For Vanilla versions < `2.5` addons are split into themes, and plugins. Their information is declared in a similar way to the [addon.json file](/developer/addons/addon-info), but is instead declared in PHP.

## Themes

Each theme should have an `about.php` file which will declare its `$ThemeInfo`. Put this file in your theme's root folder.

Here's a sample file:

```php
<?php

$ThemeInfo['example-theme'] = [
    "Name"        => "Example Theme",
    "Description" => "Custom theme example",
    "Version"     => "1.0.0",
    "Author" => "Your Name",
    "AuthorEmail" => "you@yourdomain.com",
    "AuthorUrl" => "http://yourdomain.com",
    "License"     => "Proprietary",
    "Layout"      => [
        "Discussions" => "table",
        "Categories"  => "modern",
    ]
];
```

## Plugins

A Plugin should declare `$PluginInfo` at the top of its plugin file.

```php
<?php
// Define the plugin:
$PluginInfo["fancy-plugin"] = array(
    "Name" => "Lincoln&rsquo;s Fancy Plugin",
    "Description" => "This is a sample plugin.",
    "Version" => "1.0",
    "Author" => "Your Name",
    "AuthorEmail" => "you@yourdomain.com",
    "AuthorUrl" => "http://yourdomain.com",
    "MobileFriendly" => true,
);

class MyPlugin extends Gdn_Plugin {

}
```

### Item Details

#### Theme/Plugin "key"

```
$ThemeInfo['example-theme']

$PluginInfo["fancy-plugin"]
```

It's important to put a unique key here for your theme/plugin. This key must match your theme/plugins's directory name. It and your directory should be named in `dashed-lower-case`. A common mistake is to copy another theme and then forget to edit the about.php file. This key is how Vanilla identifies your theme internally.

#### Name
The name will appear in the plugin/theme selection page.

#### Description
Short description of your plugin/theme. Will also appear in plugin/theme selection page.

#### Version
Version of the plugin/theme. The cache is tied to this version. If you ever run into an issue with the cache, you can try to bump up this version number.

#### Author
Author of the plugin/theme

#### AuthorEmail
Email of the author

#### License
License of the plugin/theme.

#### Layout
This is an optional property that tells Vanilla which views the theme was meant to use. Sometimes custom themes only work with a specific view. Keep in mind that this will not block an admin from changing the views, but it will give them a warning in the dashboard.

**Layouts for Discussions:**

  * modern
  * table

**Layouts for categories:**

  * modern
  * table
  * mixed

## Visibility
If you've got [Vanilla Cloud](http://vanillaforums.com), make sure to also [set your theme's visibility](/developer/addons/addon-visibility).

## Theme Options:

The about.php file also supports [Theme Options](/developer/addons/theme-options).
 
