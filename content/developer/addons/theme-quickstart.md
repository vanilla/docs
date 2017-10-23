---
title: Theme Quickstart
tags:
- Theming
- Developers
- Addons
- Quickstart
category: addons
menu:
  developer:
    parent: addons
    weight: 10
aliases:
- /theming/quickstart
- /developer/theming/quickstart
---
**Vanilla Forums Cloud Customers, check out our [Ultimate Vanilla Forums Theme Guide](http://blog.vanillaforums.com/help/vanilla-forums-themes/).**

With Vanilla, you have full control over both the CSS and the actual HTML of every page in every application. The easiest thing for most designers is to just alter the CSS, so we'll start there:

1. [Name your theme](#1-name-your-theme).
1. [Define your theme](#2-define-your-theme).
1. [CSS & Design](#3-css-design).
1. [Create a Master View (Optional)](#4-create-a-master-view-optional).
1. [Themehooks (Optional)](#5-themehooks-optional).

### 1. Name your Theme

Your theme needs a user-facing name, and a 'slug' name without spaces or special characters. If your theme is named "Adam's Fancy Theme" a good slug name would be `adams-fancy-theme` or even just `fancytheme`.

### 2. Define your Theme

First, create a folder in the `themes` directory, using the slug name you selected (e.g. `adams-fancy-theme`). Next let's create a file called `addon.json`. This file will define basic information about our theme. See an exhuastive list of [all of the options](/developer/addons/addon-info). Next open the file add the theme information. You can use this as a starting point:

```json
{
    "type": "theme",
    "key": "adams-fancy-theme",
    "name": "Adam&rsquo;s Fancy Theme",
    "description": "This is a fancy theme!",
    "version": "1.0.0",
    "authors": [
        {
            "name": "Your Name",
            "email": "you@yourdomain.com",
            "homepage": "http://yourdomain.com"
        }
    ]
}
```

The `key` value (`adams-fancy-theme` above) ***must exactly match*** the folder name, including capitalization. Some systems are case-insensitive and will ignore differences in capitalization, but others are not, so make sure they match!

Now run `composer install` in your Vanilla installation directory to regenerate your cache. Alternatively you could delete the `cache/theme-index.php` file. Visit the **themes** page of your dashboard and enable your theme!

#### Define basic info

The `name` parameter is optional; it will default to the slug if omitted. To include special characters here or in the description, use their [HTML entity code](https://www.w3schools.com/html/html_entities.asp).

Provide a great `description` that briefly explains what is special about the theme or who it is for. For `version`, familiarize yourself with [semantic versioning](http://semver.org/).

The `authors` parameters are at your discretion. We recommend using a support address for both the email and URL. `authors` takes an array so be sure to include anyone who's name you want on the addon.

All further optional parameters described below default to `false` if not defined.

#### Set Layout Options

Some theme's only work with a specific view. Add the following to your addon.json to set the default layouts for the theme.

```json
"layout": {
    "categories": "modern",
    "discussions": "modern"
}
```

Keep in mind that this will not block an admin from changing the views, but it will give them a warning in the dashboard.

**Layouts for Discussions:**

modern
table

**Layouts for categories:**

modern
table
mixed

#### Add a Thumbnail for Your Theme

The dashboard can show a thumbnail for your theme on the themes page. Create a image called `screenshot.png` (600px wide and 480px high is a good size) and place it in the root of your theme folder.  Then add the following to your `addon.json`

```json
"icon": "screenshot.png"
```

#### Visibility

If you've got [Vanilla Cloud](http://vanillaforums.com), make sure to also [set your themes's visibility](/developer/adddons/addon-visibility).

#### Whew!

That whole definitions section probably didn't *seem* very quick, but you just did a huge amount of work in just a few lines of code. Your theme is now hooked up to Vanilla and ready to edit!

### 3. CSS & Design

Creata a new directory inside of your theme called `design`. Inside of that directory create a new file called `custom.css` and place any of your custom styles here. More complex themes may use a CSS pre-processor like `sass`, `less`, or `stylus` in order to gain advanced css features. You can use these, just make sure that your output file is still called `custom.css` inside of the `design` folder.

Learn more by reading our docs on [Theming with CSS](/developer/addons/theming-width-css)

### 4. Create a Master View (optional)

If you don't like the way we've structured our HTML, you can edit that too. Our pages are made up of two parts:

1. **Master Views**: These represent everything that wraps the main content of every page. If all you want to do is add a menu or banner above Vanilla, this is the only file you will need to alter. To do so, copy the default master view from `/applications/dashboard/views/default.master.tpl` to `/themes/your_theme_name/views/default.master.tpl` and edit it there. This master view is built on the [Smarty template engine](/developer/smarty).

2. **Views**: These represent all of the content in each page. Every application has a "views" folder that contains all of the html for every page. These can be edited, but we recomend using a different method of modifying the page. You would be surprised what can be accomplished with CSS!

By not overriding normal views you

- Make Vanilla upgrades easier in the future - new version come with new features and better experiences. Overridden views can break when you upgade to newer versions of Vanilla and are not always simple to fix.
- If you plan to move to move to [Vanilla Cloud](http://vanillaforums.com) you will only be able to override the Master View (unless you are a VIP customer and have your own server cluster).

For more details see [Overridding Views](/developer/addons/overriding-views) and [Templating with Smarty](/developer/smarty).

**Cloud upgrade considerations**

If you're considering moving to one of our cloud plans in the future, we recommend limiting your modifications to the default.master.tpl view and CSS overrides. That will allow a smooth transition without any customization services being required.

## 5: Themehooks (optional)

Themes can do anything an Addon can do! Including [creating new functionality](/developer/addons/creating-new-functionality) and including a plugin to [handle events](/developer/addons/event-and-handlers). Theme should try to do as little of this as they can though. If you find a theme is including a lot of functionality in a Plugin or creating a lot of new functionality, you should split that functionality into it's own Addon. See [The Addon Quickstart Guide](/developer/addons/addon-quickstart.md).

Themes can embed their own Plugin by creating a file called `class.themehooks.php` (permutations such as `class.mycompany.themehooks.php` work too) in the root of your theme. Then create a class extending `Gdn_Plugin` and name it something original ending with `ThemeHooks` (eg. `MyCompanyThemeHooks`). See [handling events](/developer/addons/event-and-handlers) and [function overrides](/developer/addons/function-overrides) for more details.
