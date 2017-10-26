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
    weight: 10
    parent: addons
versioning:
  added: 2.5
---

Every Vanilla addons must declare certain information about itself. This includes:

- Addon Metadata
- Author Metadata
- Addon support links
- Addon configuration details
- Details about how to load the addon

## The `addon.json` file

In an effort to simplify the management and creation of plugins, applications, and themes, Vanilla `2.5` and onwards uses a single unified addon information format. The new format is a `json` file that should live in the root of your addon's directory. It looks like this:

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

The theme key. This should be unique and ***must exactly match*** the folder name, including capitalization. So an addon with the key `example-addon` would need to be located in a `plugins/example-addon` directory in your Vanilla installation. Addon keys and their directories should be named in `dashed-lower-case`.

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
