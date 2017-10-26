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
---

Vanilla is a very customizable, flexible platform because there are many ways to hook into it without ever modifying its code. There are normal vanilla [addons](/developer/addons/addon-quickstart) and [themes](/developer/addons/theme-quickstart). Themes and addons are very similar, but serve different purposes.

## Addons and Plugins and Themes - Oh My!

Vannilla addons used to be made up of plugins, applications, and themes. Each had varying functionalities and capabilities. Starting in Vanilla `2.5` these differences have been reduced and  

### An `Addon` can contain 

- A Plugin (an instance of `Gdn_Plugin`)
    - [Handle events](/developer/addons/events-and-handlers) fired by existing classes that extend `Gdn_Pluggable` - Controllers, Modules, Models, Router, Plugin, Model, etc
    - [Inject new CSS/JS](/developer/addons/css-and-javascript) into the page
    - [Override core functions](/developer/addons/function-overrides)
    - Run code when addon is enabled or `utility/update` is called
- Controllers (instances of `Gdn_Controller`)
- Modules (instances of `Gdn_Module`)
- Models (instances of `Gdn_Model`)
- New views or view overrides

### What are Themes?

The goal of a theme is to selectively override CSS and views in a product. Themes are a special type of Addon, with some additional facilities provided in order to to simplify the process.

Themes can contain all of the above listed functionalities but have a few of their own requirements:

- The theme's plugin (if it contains one) must have a classname ending in `ThemeHooks` and must be in a file containing `class.themehooks.php`
- Themes must define a [Master View](/developer/theming/views/#the-master-view)

Most themes only override the Master View and include some additional stylesheets and javascript. This type of the theme is the most easily maintainable. The fewer themehooks and view overrides inside of a theme, the more likely it is to work throughout updates to Vanilla without modification.

**Cloud upgrade considerations**

If you're considering moving to one of our cloud plans in the future, we recommend limiting your modifications to the default.master.tpl view and CSS overrides. That will allow a smooth transition without any customization services being required.

## Getting Started

Check out our guides to get started on a new addon or theme!

[Addon Quickstart](/developer/addons/addon-quickstart)

[Theme Quickstart](/developer/addons/theme-quickstart)

[Ultimate Vanilla Forums Theme Guide](http://blog.vanillaforums.com/help/vanilla-forums-themes/)
