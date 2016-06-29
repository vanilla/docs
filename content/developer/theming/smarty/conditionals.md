---
title: Smarty Conditionals
layout: docs
categories: ["Theming", "Smarty"]
---

## Smarty Conditionals

Smarty includes a base amount of logic that you can insert into your template. One of these is a conditional statement. A couple of basic examples should give you an idea of the syntax and format of Smarty conditionals.

This example uses the user data from the controller's data array to print out a welcome message if the user is signed in and a generic message if the user is not signed in. [Learn more about accessing the controller's data array using Smarty.](../#accessing-controller-data-with-smarty)

```
{if $User.SignedIn}
    <h3>Welcome Back!</h3>
{else}
    <h3>Hello Stranger!</h3>
{/if}
```

This example checks to see if the locale matches 'fr' and if so, inserts the contents a pocket named 'French Pocket'. [Learn more about the Smarty pocket function.](/functions/pocket.html.md)

```
{if $CurrentLocale.Lang === 'fr'}
    {pocket name='French Pocket'}
{/if}
```

The following PHP internal functions are available for use in Smarty if statements: array, list, isset, empty, count, sizeof, in_array, is_array, true, false, and null. We've also whitelisted some PHP functions in Vanilla that can be used in Smarty if statements. The most useful of these functions are outlined below.

### Category

Returns an array representing the current category.

#### Category Example

This example prints out a message if the user is browsing a page in the "General" category. Also uses the GetValue function, outlined below.

```
{if GetValue('Name', Category()) === 'General'}
    <p>You're checking out content in the General category!</p>
{/if}
```

### CheckPermission

Tests whether the current user has the passed permission or array of permissions and returns true if the current user has one of the given permission(s).

#### CheckPermission Example

This example checks whether the user has either the "Garden.Settings.Manage" or "Garden.Settings.View" permission and if so, adds a link to the dashboard.

```
{if CheckPermission(array('Garden.Settings.Manage', 'Garden.Settings.View'))}
    {dashboard_link}
{/if}
```

### InSection

Returns true if the user is in a section or one of an array or sections. You can see what section a Vanilla page belongs to by inspecting the body tag using your browser tools and checking its CSS class. There will be an Section-* class, where * is the current section.

#### InSection Example

This example checks whether the user is in either the Profile, Conversation or ActivityList section and if so, adds the panel asset.

```
{if InSection(array('Profile', 'Conversation', 'ActivityList'))}
    {asset name="Panel"}
{/if}
```

### InCategory

Given a category's url code, returns true if the user is on a page in that category. You can manage the url codes of your forum's categories from the Manage Categories page in the dashboard.

#### InCategory Example

This example prints out a message if the user is browsing a page in a category with the url code 'general-category'.

```
{if InCategory('general-category')}
    <p>You're checking out content in the General category!</p>
{/if}
```

### GetValue

Given an array key or property name, returns its value from an associative array or an object.

#### GetValue Example

See the [Category example]('#category-example') above.

### Other conditional functions

There are a few other (less useful) functions that can be used in conditional statements in Vanilla's Smarty implementation. These are MultiCheckPermission, SetValue and Url. These function declarations are in `/library/core/functions.general.php`. To understand how to use these functions, refer to the source code there.
