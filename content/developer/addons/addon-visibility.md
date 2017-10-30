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
    weight: 11
    parent: addons
aliases:
- /theming/visibility
- /developer/theming/themevisibility
---

{{% cloudfeature %}}

If you have [Vanilla Cloud](http://vanillaforums.com), custom addons will be hidden by default. This is to ensure custom addons are only visible to their respective owners.

This functionality is defined using a theme's [addon.json](/developer/addons/addon-info). Still using the deprecated [about.php](/developer/addons/plugin-theme-info)? Follow along by learning [differences between addon.json and AddonInfo/PluginInfo](/developer/addons/plugin-theme-info/#translation-guide-from-addon-json).

There are multiple methods for changing addon visibility. Later methods take precedance over earlier ones for backwards compatibility reasons.

## The `sites` key:

If no other methods have been used, the **sites** key is used. It should be set in the [addon.json file](/developers/addons/addon-info). Confused about addons and plugins? Learn the difference between [Addons, Plugins, and Themes](/developer/addons/#addons-and-plugins-and-themes-oh-my).

```json
{
    "type": "addon",
    "key": "fancyaddon",
    "name": "Lincoln&rsquo;s Fancy Addon ",
    "description": "This is a fancy addon!",
    "version": "1.0.0",
    "mobileFriendly": true,
    "authors": [
        {
            "name": "Your Name",
            "email": "you@yourdomain.com",
            "homepage": "http://yourdomain.com"
        }
    ],
    "sites": [
        "mysite.vanillastaging.com",
        "mysite.vanillacommunities.com"
    ]
}
```

Adding a domain to the `sites` array allows a vanilla forum hosted at that domain see your addon. These domains should be the original vanilla domain, *not* a custom domain.

**This is the best method for custom client addons**.

## Site Configuration Option

The following method works only with `theme` type addons. A theme can be shown on a specific site by using the following config key:

```json
{
    "Garden": {
        "Themes": {
            "Visible": 'mysite.vanillacommunities.com, mysite.vanillastaging.com'
        }
    }
}
```
You can add multiple domains by separating them with a comma. 

**This method is discouraged**.

## The `hidden` key

In the [addon.json file](/developer/addons/addon-info), you can set the addon's visibility with the `hidden` key.

Example:

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
    "hidden": true
}
```

Core themes have their `hidden` key set to `false` to be visible to all clients.

## Notes

- You can use an asterisk in the site name for wildcard matches (ex. 'site-*.example.com'). Wildcards are great for clusters that are on the Vanilla Hub.
- The key `key` works like `sites`, but only takes one site, as a string. This key is deprecated, use `sites` instead.
