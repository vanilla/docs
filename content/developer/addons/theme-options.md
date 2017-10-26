---
title: Theme Options
tags:
- Theming
- Options
category: addons
menu:
  developer:
    parent: addons
    weight: 0
aliases:
- /theming/themeoptions
- /developer/theming/themeoptions
---

This is a rather advanced theme configuration and is often unnecessary but can be very useful in certain circumstances.

You can configure a custom dashboard settings page for your theme that allows an admin to choose between different CSS files in your theme's design folder. You can also allow an admin to add custom text to your theme.

This functionality can be added simply by editing your theme's [addon information](/developer/addons/addon-info.md) file by adding an 'options' key to your theme's `addon.json` with an object as its value. The content of the 'options' object is discussed below.

## Choosing Between Stylesheets

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
        touchConfig([
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
