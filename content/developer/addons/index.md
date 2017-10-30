---
title: Addons
tags:
- Developers
- Addons
- Plugins
- Addons
- Themes
category: developer
menu:
  developer:
    weight: 11
    identifier: addons
aliases:
- /developers/plugins
- /developer/plugins
- /developer/theming
---

Vanilla is a very customizable, flexible platform because there are many ways to hook into it without ever modifying its code. There are normal vanilla [addons](#addon-definition) and [themes](#theme-definition). Themes and addons are very similar, but serve different purposes.

## Addons and Plugins and Themes - Oh My!

Before Vanilla `2.5` there were plugins, applications, and themes. Each had varying functionalities and capabilities. Starting in Vanilla `2.5` all 3 of these have been combined into 1 format - Addons. An addon is capable of doing everything that each those 3 used to do. Existing plugins, themes, and applications are treated as addons in Vanilla `2.5`.

Many references to `Plugin` have been changed to `Addon`. Remaining references to `Plugin`, `Addon`, and `Theme` should be undestood as follows:

### Plugin Definition

A class that extends `Gdn_Plugin` or implements `Gdn_IPlugin`.

### Addon Definition

An installable extension to a Vanilla Forum. An addon provides additional functionality and is contained in a top level folder that gets symlinked into the `plugins` directory of a Vanilla Forums installation. In the future Addons will be installable to an `addons` directory instead. Its information is defined in an [addon.json file](/developer/addons/addon-info) with its `type` key set to `addon`. Older addons defined [$PluginInfo](/developer/addons/plugin-theme-info#plugins) in their plugin file.

An `Addon` can contain 

- A Plugin (an instance of `Gdn_Plugin`)
    - [Handle events](/developer/addons/events-and-handlers) fired by existing classes that extend `Gdn_Pluggable` - Controllers, Modules, Models, Router, Plugin, Model, etc
    - [Inject new CSS/JS](/developer/addons/css-and-javascript) into the page
    - [Override core functions](/developer/addons/function-overrides)
    - Run code when addon is enabled or `utility/update` is called
- Controllers (instances of `Gdn_Controller`)
- Modules (instances of `Gdn_Module`)
- Models (instances of `Gdn_Model`)
- New views or view overrides

### Theme Definition

A theme is a special type of Addon, with some additional facilities provided in order to to simplify development. It is placed in a top level folder that gets symlinked into the `themes` directory of a Vanilla Forums installation. Its information is defined in an [addon.json file](/developer/addons/addon-info#theme-addon-json-example) with its `type` key set to `theme`. Older themes may define [$ThemeInfo](/developer/addons/plugin-theme-info#themes) in an `about.php` file.

The goal of a theme is to selectively override CSS and views in a forum.

Themes can do everything a normal Addon can do, but gains the following additional functionality and requirements.

- A Theme can contain a Plugin. If it does the plugin must have a classname ending in `ThemeHooks` and must have a filename containing `class.themehooks.php`. The prevailing convention results in a class `MySiteThemeHooks` and file `class.mysite.themehooks.php`.
- A theme can define a [Master View](/developer/theming/views/#the-master-view) to be automatically loaded in place of the default master view.
- A theme will automatically load a javascript file at `<mythemefolder>/js/custom.js` and a CSS file at `<mythemefolder>/design/custom.css` into the head of the site.
- A theme can define [Theme Options](/developer/addons/theme-options) to offer an easy way to load different styles and text for a single theme.

Most themes only override the Master View and include some additional stylesheets and javascript. This type of the theme is the most easily maintainable. The fewer themehooks and view overrides inside of a theme, the more likely it is to work throughout updates to Vanilla without modification.

## Cloud upgrade considerations

If you're considering moving to one of our cloud plans in the future, we recommend limiting your modifications to the default.master.tpl view and CSS overrides. That will allow a smooth transition without any customization services being required.

## Getting Started

Check out our guides to get started on a new addon or theme!

[Addon Quickstart](/developer/addons/addon-quickstart)

[Theme Quickstart](/developer/addons/theme-quickstart)

[Ultimate Vanilla Forums Theme Guide](http://blog.vanillaforums.com/help/vanilla-forums-themes/)
