---
title: Addon Visibility
tags:
- Theming
- Plugin
- Addon
- Visibility
category: addons
menu:
  developer:
    parent: addons
aliases:
- /theming/visibility
- /developer/theming/themevisibility
---

{{% cloudfeature %}}

If you've got [Vanilla Cloud](http://vanillaforums.com), custom addons will be hidden by default. This is to ensure custom themes are only visible to their respective owners.

**In order of importance**, here are the rules for a theme to be visible:

## Method 1:
If the theme is set to be visible with this site option:
```
Garden.Themes.Visible
```
You can add multiple sites by separating sites with a comma. **This method is discouraged**. Themes are generally visible to all clients, or only to one client.

## Method 2:

In the [about.php](/developer/theming/about-php) file, you can set the theme's visibility with **Hidden**.

Example:

```
$ThemeInfo['ExampleTheme'] = [
    'Name'        => "Example Theme",
    'Description' => "Custom theme example",
    'Version'     => '1.0.0',
    'Author'      => "Stéphane LaFlèche",
    'AuthorEmail' => 'stephane.l@vanillaforums.com',
    'AuthorUrl'   => 'www.vanillaforums.com',
    'License'     => 'Proprietary',
    'Hidden'      => true
];
```

All core themes have their **Hidden** variable set to **false** to be visible to clients.



## Method 3:

If there is no config set and a theme doesn't explicitly have **Hidden** set, the **Sites** variable is used.

```
$ThemeInfo['ExampleTheme'] = [
    'Name'        => "Example Theme",
    'Description' => "Custom theme example",
    'Version'     => '1.0.0',
    'Author'      => "Stéphane LaFlèche",
    'AuthorEmail' => 'stephane.l@vanillaforums.com',
    'AuthorUrl'   => 'www.vanillaforums.com',
    'License'     => 'Proprietary',
    'Sites'       => ['example.staging.com', 'example.production.com']
];
```

This is a list of sites that can view the theme. **This is the best method for custom client themes**.

### Notes

- You can use an asterisk in the site name for wildcard matches (ex. 'site-*.example.com'). Wildcards are great for clusters that are on the Vanilla Hub.
- The variable **Site** works like **Sites**, but only takes one site, as a string. This variable is deprecated, use **Sites** instead.
