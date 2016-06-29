---
title: Theme Options
layout: docs
categories: ["Theming"]
---

## Theme Options

This is a rather advanced theme configuration and is often unnecessary but can be very useful in certain circumstances.

You can configure a custom dashboard settings page for your theme that allows an admin to choose between different CSS files in your theme's design folder. You can also allow an admin to add custom text to your theme.

This functionality can be added simply by editing your theme's about.php file by adding an 'Options' key to your theme info array with an array as its value. The content of the 'Options' array is discussed below.

### Choosing Between Stylesheets

In the design folder of your theme, you can add any number of CSS files. The naming convention is `custom_*.css`, where * is the theme variant.

You will still need to have the custom.css file as a default for when the theme is first enabled. In order to allow the admin to switch back to the default, you'll need to add an option where the value is simply %s.

So, let's say you have three CSS files you want to let the user chose from: custom_blue.css, custom_green.css, and custom.css (the default). This is how your Options array should look:

```php
'Options' => array(
    'Styles' => array(
        'Default' => '%s',
        'Blue' => '%s_blue',
        'Green' => '%s_green',
    ),
)
```

The theme options settings page will also look for screenshots in the design folder of your theme that follow the naming convention of `screenshot_*.ext` where * is the theme variant and the extension is one of png, jpg or gif. If it finds the screenshots, they will be displayed on the theme options settings page. Use `screenshot.ext` for the default theme.

### Adding Custom Text to a Theme

To add custom text to a theme, add a 'Text' key to the 'Options' array. The value of of the 'Text' key will be an array that can have multiple values. Each one of these will be text field on the settings page. You can specify a Type of 'textbox', which is a regular text input, or 'textarea', the default, which is a multiline textarea element.

The text saved in this field can then be inserted into your theme template. If using Smarty, you can use the [text function](/functions/text.html.md) to insert the text in the theme, using the Text array's key as the 'code' parameter. For example, if you had this options array:

```php
'Options' => array(
    'Text' => array(
        'Custom&nbsp;Text' => array(
                'Description' => 'Custom text to be inserted in the theme.',
                'Type' => 'textbox'
        )
    )
)
```
Then you could insert the text into your theme using the Smarty tag:

```
{text code="Custom&nbsp;Text" default="Some default custom text"}
```

The text is saved in your config, so you could also access it in PHP using `c('ThemeOption.Custom&nbsp;Text', "Some default custom text");` [Learn more about the config here.](../developers/configuration/using.html.md)

### Example

Here's an example $ThemeInfo array that uses both the above theme options, so you can see how it all comes together.

```php
$ThemeInfo['mytheme'] = array(
    'Name' => 'My Theme',
    'Description' => "My Theme is the greatest.",
    'Version' => '1.0.0',
    'Author' => "Your Name",
    'AuthorEmail' => 'your@email.com',
    'AuthorUrl' => 'http://yourwebsite.com',
    'Options' => array(
        'Description' => 'This theme has an alternative colour scheme and custom text.',
        'Styles' => array(
            'Default' => '%s_default',
            'Dark' => '%s_dark',
            'Blue' => '%s_blue',
        ),
        'Text' => array(
            'Custom&nbsp;Text' => array(
                    'Description' => 'Custom text to be inserted in the theme.',
                    'Type' => 'textbox'
            )
        )
    )
);
```
