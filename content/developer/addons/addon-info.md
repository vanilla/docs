---
title: Addon Information
tags:
- Developers
- Addons
- Configuration
- about.php
- addon.json
- addon-info
- addon
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

## Legacy addon information formats

Confused about addons and plugins? We've made some changes recently. Learn about how addons, plugins, and themes interact with each other in our new [Addon Documentation](/developer/addons/#addons-and-plugins-and-themes-oh-my).

Some existing plugins/themes may use `$ThemeInfo` and `$PluginInfo` declarations in PHP to declare their information. This form is deprecated, but will continue to function going forward. See [Plugin & Theme Info](/developer/addons/plugin-theme-info) for details.

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
    },
    "sites": [
        "mysite.vanillastaging.com",
        "mysite.vanillacommunities.com"
    ]
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
        "categories": "modern",
        "discussions": "modern"
    },
    "sites": [
        "mysite.vanillastaging.com",
        "mysite.vanillacommunities.com"
    ]
}
```

## Item Details

### key

The theme key. This should be unique and ***must exactly match*** the folder name, including capitalization. So an addon with the key `example-addon` would need to be located in a `plugins/example-addon` directory in your Vanilla installation. Addon keys and their directories should be named in `dashed-lower-case`.

```json

```

### name

The name of your addon. This will appear in the dashboard. Defaults to the `key`.

*To include special characters here or in the description, use their [HTML entity code](https://www.w3schools.com/html/html_entities.asp).*

```json
"name": "Adam&rsquo;s Fancy Addon"
```

### description

A short description of your addon. This will also appear in the dashboard.

*To include special characters here or in the description, use their [HTML entity code](https://www.w3schools.com/html/html_entities.asp).*

```json
"description": "An addon to add some specific functionality to a forum. It's made to support some use case affects x, y, and z parts of the forum."
```

### version

Version of the addon. You should increment this every time you ship a new version  of your addon. Try to familiarize yourself with [semantic versioning](http://semver.org/).

```json
"version": "1.0.6",
```

### documentationUrl

A link to documentation of your addon. It will show as an icon next to the addon name in the dashboard.

```json
"documentationUrl": "http://mysite.com/myplugindocumentation.html",
```

### type

Can be either `addon`, `theme`, or `locale`.

```json
"type": "theme",
```

### license

License that you wish to distribute your addon under.

```json
"license": "MIT",
```

### priority

Addons use a priority system to determine which order they load in. The higher the priority an addon has, the later in the process it loads. Avoid using this is you can.

The following defaults are set:

- **Application**: `10`
- **Locale**: `11` 
- **Plugin**: `100`
- **Theme**: `1000`

```json
"priority": "99",
```

### icon

The location of the your icon file relative to the addon's folder.

```json
"icon": "my-addon-icon.jpg",
```

### mobileFriendly

`true` or `false`. Allows the addon to be automatically disabled when accessing the site via a mobile device. Defaults to `true`.

```json
"mobileFriendly": false,
```

### settingsUrl

Link to an in-dashboard settings page. This will be loaded in a popup over the addon manager.

```json
"settingsUrl": "/settings/mysettingspage",
```

### settingsPermission

The permission required to access the addon's settings page.

```json
"settingsPermission": "Garden.Settings.Manage",
```

### registerPermissions

A map of new permissions created by the addon, and the default value of that permission. If the user has the permission on the right side, they will have the permission on the left side by default.

```json
"registerPermissions"
```

### authors

An array of authors of an addon.

```json
"registerPermissions": {
    "FancyAddon.NewPostType.Add": "Garden.Discussions.Add",
    "FancyAddon.Stuff.Manage": "Garden.Settings.Manage"
},
```

### require

An map of dependancies and their minimum version. The addon manager ensure these addons (or vanilla version) will be active to enable your addon. If they are not found, the addon will not be able to be turned on.

```json
"require": {
    "vanilla": ">=2.4",
    "someOtherPlugin": ">=1.4.1"
},
```

### layout
A theme only property that tells Vanilla which views the theme users. Sometimes custom themes only work with a specific view. Keep in mind that this will not block an admin from changing the views, but it will give them a warning in the dashboard.

#### Layouts for Discussions

- modern
- table

#### Layouts for categories

- modern
- table
- mixed

```json
"layout": {
    "categories": "modern",
    "discussions": "modern"
},
```

### Sites
A list of Vanilla Forums Cloud sites to show display the addon on. See [Addon Visibility](/developer/addons/addon-visibility) for details.

```json
"sites": [
    "mysite.vanillastaging.com",
    "mysite.vanillacommunities.com
],
```

### build

Specifies options for the [Vanilla CLI's build tool](/developer/vanilla-cli#build-tools).

#### build.processVersion

Which process version to use. Currently available processes are [v1](/developer/vanilla-cli/build-process-v1) and [legacy](/developer/vanilla-cli/build-process-legacy). The default is `legacy` for backwards compatibility purposes.

#### build.cssTool

Which CSS preprocessor to use. Current options are `scss` and `less`. The default is `scss`.

#### Example 
```json
"build": {
    "processVersion": "v1",
    "cssTool": "scss"
}
```

### lint

Specifies options for the [Vanilla CLI's lint tool](/developer/vanilla-cli#linting-tools).

#### lint.scripts

##### lint.scripts.enable

Enable linting of script files. Defaults to true.

##### lint.scripts.configFile

Provide a path to an ESLint config file. By default the following files will be checked:

- `<addonDirectory>/.eslintrc`
- `<addonDirectory>/.eslintrc.json`
- `<addonDirectory>/.eslintrc.yaml`
- `<addonDirectory>/config.eslintrc.js`

#### lint.styles

##### lint.scripts.enable

Enable linting of SCSS stylesheets. Defaults to true.

##### lint.scripts.configFile

Provide a path to an StyleLint config file. By default the following files will be checked:

- `<addonDirectory>/.stylelintrc`
- `<addonDirectory>/.stylelintrc.json`
- `<addonDirectory>/.stylelintrc.yaml`
- `<addonDirectory>/config.stylelintrc.js`

#### paths

An array of files or globs to lint. Defaults to
```json
[
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.scss"
]
```

#### Example

```json
"lint": {
    "scripts": {
        "configFile": "otherDirectory/.eslintrc"
    },
    "styles": {
        "enable": false,
    },
    "paths": [
        "otherDirectory/src/**/.js",
        "otherDirectory/src/**/.jsx"
    ]
}
```

#### build.cssTool

Which CSS preprocessor to use. Current options are `scss` and `less`. The default is `scss`.

#### Example 
```json
"build": {
    "processVersion": "v1",
    "cssTool": "scss"
}
```
