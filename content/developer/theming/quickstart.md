---
title: Theming Quickstart
layout: docs
categories: ["Theming"]
---

**Vanilla Forums Cloud Customers, check out our [Ultimate Vanilla Forums Theme Guide](http://blog.vanillaforums.com/help/vanilla-forums-themes/).**

With Vanilla, you have full control over both the CSS and the actual HTML of every page in every application. The easiest thing for most designers is to just alter the CSS, so we'll start there:

## Part 1: CSS &amp; Design

1. Copy the /themes/default folder and rename it to your theme name so it sits in the root theme folder like this: `/themes/your_theme_name`.
2. Open the about.php file and edit the information to reflect your theme's information.
3. Create a custom.css file in the "design" folder of your custom theme.
4. Go to your Dashboard &gt; Themes, and apply your new theme.
5. Edit the custom.css file to your heart's content. The custom.css file is added *after* the base theme's css. Alternately, you can completely replace the base theme file (style.css) by copying it from the `/applications/dashboard/design` folder into your theme's design folder.

Learn more by reading our docs on [Theming with CSS](/theming/css)

### Other things you should know:

* If you want to edit the look &amp; feel of the administrative screens, you can accomplish it by creating an admincustom.css file in your design folder.

## Part 2: Themehooks (optional)

Themes have the ability to tap into Vanilla's event firing system and override functions using a special themehooks file. To use hooks, create a file named class.themehooks.php in your theme's root directory (`/themes/your_theme_name/class.themehooks.php`) and edit it there.

This is a very powerful feature. Learn more about it by reading the [Theming Hooks](/theming/hooks) docs.

## Part 3: HTML &amp; Views (optional)

If you don't like the way we've structured our HTML, you can edit that too. Our pages are made up of two parts:

1. **Master Views**: These represent everything that wraps the main content of every page. If all you want to do is add a menu or banner above Vanilla, this is the only file you will need to alter. To do so, copy the default master view from `/applications/dashboard/views/default.master.tpl` to `/themes/your_theme_name/views/default.master.tpl` and edit it there. This master view is built on the Smarty template engine. Familiarize yourself with this special master view by reading on docs on [Theming Views](/theming/views). Also check out our docs on [Theming with Smarty](/theming/smarty).

2. **Views**: These represent all of the content in each page. Every application has a "views" folder that contains all of the html for every page. So, for example, if you wanted to edit the html for the discussion list, you could copy the views from `/applications/vanilla/views/discussions` to `/themes/your_theme_name/views/discussions` and edit them there. There are some overriding and editing views. Be sure to check out our docs on [Theming Views](/theming/views) to learn more.

### Other things you should know:

* The administrative screens have their own master view. If you want to change their master view, copy the `/applications/dashboard/views/admin.master.php` file to `/themes/your_theme_name/views/admin.master.php`.
