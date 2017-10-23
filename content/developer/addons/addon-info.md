---
title: Addon Information
tags:
- Developers
- Addons
- Configuration
- about.php
- addon.json
category: addons
menu:
  developer:
    parent: addons
aliases:
- /developer/theming/about-php
---
## Addon Information

Every Vanilla addons must declare certain information about itself. This includes:

- Addon Metadata
- Author Metadata
- Addon support links
- Addon configuration details
- Details about how to load the addon

### Which format do I use?

Addon information can come in different formats be located in different places depending on which version of Vanilla you are running

**I am using Vanilla Forums >= 2.4 or Vanilla Cloud**

Use the new [addon.json](#the-addon-json-file) format.

**I am using Vanilla Forums < 2.4**

See [PHP Information Format](#php-information-format).

## The `addon.json` file

In an effort to simplify the management and creation of plugins, applications, and themes, Vanilla `2.4` and onwards uses a single unified addon information format. The new format is a `json` file that should live in the root of your addon's directory. It looks like this:

### `addon.json` example

```json
{
    "key": "example-addon",
    "name": "Example Addon",
    "description": "Provides an example of an Addon",
    "version": "2.0.0",
    "documentationUrl": "http://site.com/link-to-documentation",
    "type": "addon",
    "icon": "icon-location.png",
    "mobileFriendly": true,
    "hasLocale": false,
    "settingsUrl": "/settings/myaddon",
    "settingsPermission": "Garden.Settings.Manage",
    "registerPermissions": {
        "Plugins.MyPlugin.MyPermission": "Garden.Settings.Manage"
    },
    "authors": [
        {
            "name": "Todd Burry",
            "email": "todd@vanillaforums.com",
            "homepage": "https://open.vanillaforums.com/profile/todd"
        }
    ],
    "require": {
        "vanilla": ">=2.4"
    }
}
```

### Theme `addon.json` example

Theme's tend to be a little bit simpler and would look like this:

```json
{
    "key": "example-theme",
    "name": "Example Theme",
    "description": "Custom Theme Example",
    "version": "2.0.0",
    "type": "theme",
    "license": "MIT",
    "author": [
        {
            "name": "Adam Charron",
            "email": "adam.c@vanillaforums.com"
        }
    ],
    "layout": {
        "categories": "Modern",
        "discussions": "Modern"
    }
}
```

### Details

#### key

The theme key. This should be unique and ***must exactly match*** the folder name, including capitalization. So an addon with the key `example-addon` would need to be located in a `plugins/example-addon` directory in your Vanilla installation. Likewise a theme with the key `UpperCaseTheme` would need to be located in a `themes/UpperCaseTheme` directory inside your Vanilla installation.

#### name

The name of your addon. This will appear in the dashboard. Defaults to the `key`.

*To include special characters here or in the description, use their [HTML entity code](https://www.w3schools.com/html/html_entities.asp).*

#### description

A short description of your addon. This will also appear in the dashboard.

*To include special characters here or in the description, use their [HTML entity code](https://www.w3schools.com/html/html_entities.asp).*

#### version

Version of the addon. You should increment this every time you ship a new version  of your addon. Try to familiarize yourself with [semantic versioning](http://semver.org/).

#### documentationUrl

A link to documentation of your addon. It will show as an icon next to the addon name in the dashboard.

#### type

Can be either `addon`, `theme`, or `locale`.

#### license

License that you wish to distribute your addon under.

#### priority

Addons with the highest priority number load before others. You should avoid using this is you can.

#### icon

The location of the your icon file relative to the addon's folder.

#### mobileFriendly

`true` or `false`. Allows the addon to be automatically disabled when accessing the site via a mobile device. Defaults to `false`.

#### settingsUrl

Link to an in-dashboard settings page. This will be loaded in a popup over the addon manager.

#### settingsPermission

The permission required to access the addon's settings page.

#### registerPermissions

A map of new permissions created by the addon, and the default value of that permission. If the user has the permission on the right side, they will have the permission on the left side by default.

#### authors

An array of authors of an addon.

#### require

An map of dependancies and their minimum version. The addon manager ensure these addons (or vanilla version) will be active to enable your addon. If they are not found, the addon will not be able to be turned on.

#### layout
A theme only property that tells Vanilla which views the theme users. Sometimes custom themes only work with a specific view. Keep in mind that this will not block an admin from changing the views, but it will give them a warning in the dashboard.

**Layouts for Discussions:**

  * modern
  * table

**Layouts for categories:**

  * modern
  * table
  * mixed

## PHP Information Format

For Vanilla versions < `2.4` addons are split into themes, and plugins. Their information is declared in the same way but they are located in different places.

### Themes

Each theme should have an `about.php` file which will declare its `$ThemeInfo`. Put this file in your theme's root folder.

Here's a sample file:

```php
<?php

$ThemeInfo['ExampleTheme'] = [
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

### Plugins

A Plugin should declare `$PluginInfo` at the top of its plugin file.

```php
<?php
// Define the plugin:
$PluginInfo["FancyPlugin"] = array(
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
$ThemeInfo['ExampleTheme']

$PluginInfo["FancyPlugin"]
```

It's important to put a unique key here for your theme/plugin. This key must match your theme/plugins's directory name. A common mistake is to copy another theme and then forget to edit the about.php file. This key is how Vanilla identifies your theme internally.

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
 
