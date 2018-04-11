---
title: Theming Modules
tags:
- Theming Modules
- Theming
- Modules
- Developers
- Addons
category: addons
menu:
  developer:
    parent: addons
    weight: 0

---

## Group Search Module

{{% cloudfeature %}}

{{% versioning added="2.7" %}}

The groups page has a search field by default, but if you wish to move it somewhere else, you can. There are 2 ways to add it to your theme.

Note that the custom CSS class and the button contents is **optional** and will change the markup if used.

### Adding Group Search Module - With Smarty

```smarty
{module name="GroupSearchModule" buttonContents="<span class='myCustomButtonContents'>Search Groups</span>" cssClass="customSearch"}
``` 

### Adding Group Search Module - With PHP

```PHP
if (Gdn::addonManager()->isEnabled('groups', Vanilla\Addon::TYPE_ADDON)) { // Make sure we have groups enabled
    $groupSearch = new GroupSearchModule($sender); // Create group search module
    $groupSearch->setButtonContents("Search Groups"); // Optional (HTML supported)
    $groupSearch->setCssClass("someCustomClass"); // Optional, will remove default ".SiteSearch" if set
    $sender->setData('groupSearch', $groupSearch->toString()); // Set to variable to use in Smarty, OR you could echo it out if the theme hook is in the right spot
}
```

### Custom CSS Class (optional)

When there is no custom css class, `.SiteSearch` will be added for compatibility with older themes to the module. This will position the search button absolutely, on top of the input field. Note that many themes hide this button. 

`.SiteSearch` is removed when adding a custom class to make it easier to theme. Instead of fighting against existing classes, you can write you own.

### Custom Button Contents (optional)

By default, the search button will get a magnifying class background from a sprite sheet and an accessible `<span class="sr-only">Search Groups</span>` inside the `<button>`.

You can overwrite this by adding your own "button contents", HTML is supported. However, you should really only be adding text, `<span>`, `<img>` or an `<svg>`. Anything else is not valid HTML and might break the `<button>`.
