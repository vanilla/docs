---
title: Functions
tags:
- Theming
- Smarty
category: developer
menu:
  developer:
    parent: smarty
aliases:
- /theming/smarty/conditionals
- /developer/theming/smarty/functions
- /developer/theming/smarty/functions/asset
- /developer/theming/smarty/functions/breadcrumbs
- /developer/theming/smarty/functions/custom-menu
- /developer/theming/smarty/functions/event
- /developer/theming/smarty/functions/homepage-title
- /developer/theming/smarty/functions/i18n
- /developer/theming/smarty/functions/include-file
- /developer/theming/smarty/functions/link
- /developer/theming/smarty/functions/logo
- /developer/theming/smarty/functions/mobile-logo
- /developer/theming/smarty/functions/module
- /developer/theming/smarty/functions/page-links
- /developer/theming/smarty/functions/permission
- /developer/theming/smarty/functions/pocket
- /developer/theming/smarty/functions/searchbox
- /developer/theming/smarty/functions/text
---

## Smarty Functions

This section outlines all the Vanilla-specific Smarty functions made available for use in your Smarty templates.

You are also able to use the [built-in Smarty functions](http://www.smarty.net/docsv2/en/language.custom.functions.tpl) in your template.


## Function: `{asset}`

### Usage

```
{asset name="string" id="string" tag="string" class="string"}
```
Renders an asset from the controller.

Assets in Vanilla are containers for different sets of content. The content of each of these asset containers is variable depending on the page. The content of each asset is not currently configurable via the template.

Vanilla's asset names are Head, Foot, Content and Panel. Your template will need to contain the Head, Foot and Content assets. The Panel asset is optional, but you'll likely want to at least include it in the Profile, EditProfile and Conversation sections as it has important functionality in those sections that are not included in the Content asset.

### Parameters

{{< params "theming/function/asset.json" >}}

## Function: `{breadcrumbs}`

### Usage

```
{breadcrumbs homelink="string" hidelast=boolean}
```

Render a breadcrumb trail for the user based on the page they are on.

### Parameters

{{< params "theming/function/breadcrumbs.json" >}}

## Function: `{custom_menu}`

### Usage

```
{custom_menu format="string" wrap="string"}
```

A bucket for addon menu items. Adds links depending on which addons are enabled.

### Parameters

{{< params "theming/function/custom_menu.json" >}}

## Function: `{event}`

### Usage

```
{event name="string"}
```

Fire an event with the specified `name`. [Learn more about events in Vanilla.](../../../developers/plugins/#events-%26-handlers)

### Parameters

{{< params "theming/function/event.json" >}}


## Function: `{homepage_title}`

### Usage

```
{homepage_title}
```

Writes the site title to the page. You can change the site title from the 'Banner' settings page in the dashboard.

### Parameters

_This tag does not take any parameters._

## Function: `{t}`

### Usage

```
{t c="string" d="string"}
```

Output a translatable string with an optional default.

### Parameters

{{< params "theming/function/t.json" >}}

## Function: `{include_file}`

### Usage

```
{include_file name="string"}
```

Inserts the contents the specified file into the template. The file must be in the same directory as the Smarty template file. Especially useful for inserting html headers or footers into a Smarty template.

### Parameters

{{< params "theming/function/include_file.json" >}}

## Function: `{link}`

### Usage

```
{link path="string" text="string" notag=boolean format="string" withdomain=boolean}
```

Takes a route and prepends the web root (expects `/controller/action/params` as `path`).

### Parameters

{{< params "theming/function/link.json" >}}

## Function `{*_link}`

We've created dedicated Smarty functions for a number of links to Vanilla pages that make it easier to build your forum's navigation.

### Usage
Here's the basic syntax, where * is the link type.

```
{*_link wrap="string" text="string" format="string"}
```

They take all of the same parameters as a `{link}` but have the `path` and `string` prefilled. These include 

### Parameters

{{< params "theming/function/link.json" >}}

### Available `{*_link}` functions


#### Function: {bookmarks_link}

Link to the My Bookmarks page.

#### Function: {categories_link}

Link to the categories page.

#### Function: {category_link}

Link to the current category page.

#### Function: {dashboard_link}

Link to the dashboard.

#### Function: {discussions_link}

Link to the discussions page.

#### Function: {drafts_link}

Link to the drafts page.

#### Function: {activity_link}

Link to the recent activity page.

#### Function: {forum_root_link}

Link to the forum root page.

#### Function: {home_link}

Link to the home page.

#### Function: {inbox_link}

Link to the inbox.

#### Function: {mydiscussions_link}

Link to the My Discussions page.

#### Function: {nomobile_link}

Link for showing the desktop version of the site.

#### Function: {photo_link}

Link to the session's user profile that displays as the user's avatar.

#### Function: {profile_link}

Link to session's user profile. The link text is the username. Includes a notification count.

#### Function: {signin_link}

If there is a valid session, this outputs a signout link, otherwise a signin link.

#### Function: {signinout_link}

If there is a valid session, this outputs a signout link, otherwise a signin link.

#### Function: {user_link}

Link to session's user profile. The link text is this username. Does not include a notification count.


## Function: `{logo}` & `{mobile_logo}`

### Usage

```
{logo}
{mobile_logo}
```

Writes the site logo to the page. You can change the site logo from the 'Banner' settings page in the dashboard.

### Parameters

_These tags does not take any parameters._

## Function: `{module}`

### Usage

```
{module name="string" ... }
```

This is a super handy little function that renders any module in Vanilla. It instantiates the specified module class, sets the properties specified in the function's parameters and calls the toString() function of the module.

The available parameters differ depending on module itself and the available modules depend on which addons are enabled. If a module is contained in an addon, the addon must be enabled in order for the module to render (a common gotcha).

There are many modules available in Vanilla and in its addons. They can be found in the modules directory of an application or addon. [Learn more about modules.](../../../developers/framework/modules.html.md)

### Parameters

{{< params "theming/function/asset.json" >}}

You can set any property of a module by specifying it as a parameter as long as that property has a setter method or has a visibility of public.

### Example

Here's an example of a tag that renders the Promoted Content Module, a module that can filter discussions based on role, rank, score, category, or the promoted reaction:

```
{module name="PromotedContentModule" Selector="role" Selection="Developer,Administrator" Limit="12" Group="3"}
```

## Block: `{permission}`

### Usage

```
{permission require="string"}
    Foo
{/permission}
```

Only output content if the current user has the specified permission.

### Parameters

{{< params "theming/function/permission.json" >}}

## Function: `{pocket}`

### Usage

```
{pocket name="string"}
```

Writes a pocket to the page. Pockets placed in the template in this way should have their location set to 'custom'. You can edit this setting from the 'Pockets' settings page in the dashboard.

### Parameters

{{< params "theming/function/pocket.json" >}}

## Function: `{searchbox}`

### Usage

```
{searchbox placeholder="string"}
```

Writes the search box to the page.

### Parameters

{{< params "theming/function/searchbox.json" >}}

## Function: `{searchbox_advanced}`

### Usage

```
{searchbox_advanced placeholder="string"}
```

Writes an `AdvancedSearchModule` to the page. This functionality is only the available to the Vanilla Cloud customers with the `AdvancedSearch` plugin enabled. More details about advanced search can be found in the [help documentation](/help/addons/advanced-search/#using-advanced-search).

### Parameters

{{< params "theming/function/searchbox.json" >}}

## Function: `{text}`

### Usage

```
{text code="string" default="string"}
```

Returns the custom text from a theme's options page. [Learn more about how to configure your theme options.](developer/theming/themeoptions/)

### Parameters

{{< params "theming/function/text.json" >}}
