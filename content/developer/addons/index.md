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
    identifier: addons
aliases:
- /developers/plugins
- /developer/plugins
---
## Extending Vanilla with addons

Vanilla is a very customizable, flexible platform because there are many ways to hook into it without ever modifying its code. There are normal vanilla [addons](/developer/addons/addon-quickstart) and [themes](/developer/addons/theme-quickstart). Themes and addons are very similar, but serve different purposes.

## Addons and Plugins and Themes - Oh My!

Vannilla addons used to be made up of plugins, applications, and themes. Each had varying functionalities and capabilities and each had there own managers. Starting in Vanilla `2.4` these have been consolidated into a single `Addon` class with a single `AddonManager`. 

#### An `Addon` can contain 

- A Plugin (an instance of `Gdn_Plugin`)
    - [Handle events](/developer/addons/events-and-handlers) fired by existing classes that extend `Gdn_Pluggable` - Controllers, Modules, Models, Router, Plugin, Model, etc
    - [Inject new CSS/JS](/developer/addons/css-and-javascript) into the page
    - [Override core functions](/developer/addons/function-overrides)
    - Run code when addon is enabled or `utility/update` is called
- Controllers (instances of `Gdn_Controller`)
- Modules (instances of `Gdn_Module`)
- Models (instances of `Gdn_Model`)
- New views or view overrides

#### What are Themes?

The goal of a theme is to selectively override CSS and views in a product. Themes are a special type of Addon, with some additional facilities provided in order to accomplish this goal.

Themes can contain all of the above listed functionalities with a few differences:

- The theme's plugin (if it contains one) must have a classname ending `ThemeHooks` and must be in a file containing `class.themehooks.php`
- Themes must define a [Master View](/developer/theming/views/#the-master-view)
- 

Addons are used to create or modify functionality in a Vanilla forum. Many addons don't change the visual appearance of a forum. Instead adding only the minimum amount of styles necessary to create the desired functionality. Major visual style changes are generally best left to a theme. Addons are an ideal fit for small focused pieces of functionality.

#### Themes

Vanilla Themes are built , and should define a for the product. Themes have the ultimate say over the layout of a Vanilla Forum. They can, but generally should not, include an addon inside of them by using a [themehooks file](/developer/theming/hooks/).

**Cloud upgrade considerations**

If you're considering moving to one of our cloud plans in the future, we recommend limiting your modifications to the default.master.tpl view and CSS overrides. That will allow a smooth transition without any customization services being required.

## Getting Started

Check out our guides to get started on a new addon or theme!

[Addon Quickstart](/developer/addons/addon-quickstart)

[Theme Quickstart](/developer/addons/theme-quickstart)

[Ultimate Vanilla Forums Theme Guide](http://blog.vanillaforums.com/help/vanilla-forums-themes/)
