---
title: Smarty
layout: docs
categories: ["Theming"]
---

## Smarty Overview

Vanilla currently supports both PHP and Smarty views. [Smarty](http://www.smarty.net) is a template engine that allows dynamic content to be inserted into a HTML template using tags. These tags are wrapped in curly braces: {tag}, and can represent variables or the output of a function call. They are replaced when the page is rendered. The default master view in Vanilla is a smarty template. See it in action by navigating to `/applications/dashboard/views/default.master.tpl`.

You can [override this view](/theming/views) in a theme or plugin, or by using the Custom Theme plugin which allows you to modify your current theme's master view from the dashboard. This section will give you some ideas how you can customize your master view to suit your community's needs.

### Accessing Controller Data with Smarty

You can output the content of the current page's controller's data array using Smarty by using `{$ArrayKey.NestedArrayKey}` syntax. For instance, `{$BodyClass}` in Vanilla's master view outputs the css class names for the current page. `{$User.Name}` would render the session's username. To see what data you have available to you on any given page, you can insert a `{debug}` tag into your Smarty template and a popup listing the data in the data array will appear.

### Smarty Functions

In the default master view in Vanilla, you'll find tags like `{searchbox}` which calls a function to render a search box in the page and `{breadcrumbs}` which calls a function to render the breadcrumbs. These are tags are mapped to php functions.

Some smarty functions in Vanilla can include parameters. For example, here `{breadcrumbs homelink="My Forum's Home"}`, the "homelink" parameter modifies the rendering of the breadcrumbs so that the "Home" breadcrumb renders as "My Forum's Home". Vanilla's set of smarty functions that can be used in your template can be found by navigating to `library/vendors/SmartyPlugins`. The [Smarty Functions section](/theming/smarty/functions) documents these functions and their available parameters.

### Smarty Conditional Functions

Vanilla's Smarty implementation has whitelisted a number of functions that can be used in Smarty conditional statements. For example, you can insert a Smarty tag or a snippet of HTML into your template only if the user is in a specific section or has a specific permission. These functions and how they can be used in your template, as well as a basic overview on using Smarty conditionals are outlined in [Smarty Conditionals](/theming/smarty/conditionals).

### Smarty Modifiers

Smarty modifiers can be applied to variables, custom functions or strings. Vanilla-implemented modifiers and a general overview of modifiers can be found on the [Smarty Modifiers](/theming/smarty/modifiers) page.
