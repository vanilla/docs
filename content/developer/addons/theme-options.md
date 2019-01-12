---
title: Theme Options
tags:
- Theming
- Options
- Stylesheets
- Text
- Screenshots
- Custom
category: addons
menu:
  developer:
    parent: addons
    weight: 0
aliases:
- /theming/themeoptions
- /developer/theming/themeoptions
---

Themes offer a simplified way to create a minimal dashboard page with some special options for the site. This can help reduce the need for a Plugin.

Confused about addons and plugins? Learn the difference between [Addons, Plugins, and Themes](/developer/addons/#addons-and-plugins-and-themes-oh-my).

This functionality is defined using a theme's [addon.json](/developer/addons/addon-info). Still using the deprecated [about.php](/developer/addons/plugin-theme-info)? Follow along by learning [differences between addon.json and AddonInfo/PluginInfo](/developer/addons/plugin-theme-info/#translation-guide-from-addon-json).

## Choosing Between Stylesheets

A theme can offer a custom dashboard settings page that allows an admin to choose between different CSS files in its design folder.

In the design folder of your theme, you can add any number of CSS files. The naming convention is `custom_*.css`, where * is the theme variant.

Given options like the following:

```json
"options": {
    "styles": {
        "Default": "%s", 
        "Blue": "%s_blue",
        "Green": "%s_green"
    },
}
```

The blue option has a key of `Blue` and a value of `%s_blue`. If a value of `%s_blue` is selected, than the stylesheet at `design/custom_blue.css` will be loaded. This is in addition to the `design/custom.css` file that is always loaded if found.

The key with a value of "%s" will not load any additional stylesheets. Only `design/custom.css`.

So, the above options lets you choose between 3 different combinations of CSS files. 
- **Default** - `custom.css`
- **Blue** - `custom.css` & `custom_blue.css`
- **Green** - `custom.css` & custom_green.css`

If want to load only a variant css file (ex. load just `custom_blue.css`). You would remove the "Default" option.

```json
"options": {
    "styles": {
        "Blue": "%s_blue",
        "Green": "%s_green"
    },
}
```

The issue here is that there is no default. You can set one in your themehooks file though.

```php
class MyCustomThemeHooks extends Gdn_Plugin {
    /**
     * Runs when the theme is enabled
     */
    public function setup() {
        $this->structure();
    }

    /**
     * Runs on `/utility/update`
     */
    public function structure() {
        // Set default theme option, but don't override it if it exists.
        \Gdn::config()->touch([
            "Garden.ThemeOptions.Styles.Key" => "Blue",
            "Garden.ThemeOptions.Styles.Value" => "%s_blue",
        ]);
    }
}
```

## Screenshots

The theme options settings page will also look for screenshots in the design folder of your theme that follow the naming convention of `screenshot_*.ext` where * is the theme variant and the extension is one of png, jpg or gif. If it finds the screenshots, they will be displayed on the theme options settings page. Use `screenshot.ext` for the default theme.

## Adding Custom Text to a Theme

To add custom text to a theme, add a 'Text' key to the 'options' object. The value of of the 'Text' key will be an array that can have multiple values. Each one of these will be text field on the settings page. You can specify a Type of 'textbox', which is a regular text input, or 'textarea', the default, which is a multiline textarea element.

The text saved in this field can then be inserted into your theme template. If using Smarty, you can use the [text function](/smarty/functions/text/) to insert the text in the theme, using the Text array's key as the 'code' parameter. For example, if you had this options array:

```json
"options": {
    "text": {
        "Custom&nbsp;Text": {
            "Description": "Custom text to be inserted in the theme.",
            "Type": "textbox"
        }
    }
}
```
Then you could insert the text into your theme using the Smarty tag:

```
{text code="Custom&nbsp;Text" default="Some default custom text"}
```

The text is saved in your config, so you could also access it in PHP using `c('ThemeOption.Custom&nbsp;Text', "Some default custom text");` [Learn more about the config here.](/developers/configuration/using)

### Example

Here's an example `addon.json` array that uses both the above theme options, so you can see how it all comes together.

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
    "layout": {
        "categories": "Modern",
        "discussions": "Modern"
    },
    "options": {
        "styles": {
            "Default": "%s",
            "Blue": "%s_blue",
            "Green": "%s_green",
        },
        "text": {
            "Custom&nbsp;Text": {
                "Description": "Custom text to be inserted in the theme.",
                "Type": "textbox"
            }
        }
    }
}
```
