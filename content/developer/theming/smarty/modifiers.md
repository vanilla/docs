---
title: Smarty Modifiers
tags:
- Theming
- Smarty
category: developer
menu:
  developer:
    parent: theming-smarty
aliases:
- /theming/smarty/modifiers
---

## Smarty Modifiers

Smarty modifiers can be applied to variables, custom functions or strings. You can use a modifier by adding a | (pipe) after the element you wish to modify and adding the modifier name. Modifiers can also accept parameters which are separated by a : (colon). *These parameters must follow the order of their appearance in the signature*.

Vanilla supports the built-in Smarty modifiers as documented on the Smarty site, and has created a few more for you to use in your templates. [Learn more about Smarty modifiers from the Smarty site.](http://www.smarty.net/docsv2/en/language.modifiers.tpl).

## Modifier: *asset_url*

Converts a string to an asset url. Solves the problem of trying to using a relative path when Vanilla exists in a subfolder.


{{% scrollableTables %}}

Parameter       | Type      | Default   | Description
---             | ---       | ---       | ---
`withDomain`    | `boolean` | `false`   | Whether or not to prepend the base (`http://your-forums.com/`) URL to the outputted link
`addVersion`    | `boolean`  | `false`  | Whether or not to append a version to the resulting asset to help bust the cache

{{% /scrollableTables %}}

### Example

In the following example, if the asset_url modifier was not specified, the image would not work if Vanilla existed in a subfolder. It also adds the domain name to the url and appends the theme version number.

```
<img alt="My logo" src="{"/themes/MyTheme/design/images/my-logo.png"|asset_url:true:true}">
```

## Modifier: *date*

Formats a timestamp consistently with Vanilla's date formatting, which by default varies depending on how much time has passed.

{{% scrollableTables %}}

Parameter   | Type      | Default   | Description
---         | ---       | ---       | ---
`format`    | `string`  | varies    | The  [strftime](http://php.net/manual/en/function.strftime.php) format of the date

{{% /scrollableTables %}}

### Example

The following example prints out the current year and uses the [{$smarty} reserved variable](http://www.smarty.net/docsv2/en/language.variables.smarty.tpl) to get the current timestamp

```
{$smarty.now|date:"%Y"}
```

## Modifier: *translate*

Translates a string into the selected locale's definition.

{{% scrollableTables %}}

Parameter   | Type      | Default   | Description
---         | ---       | ---       | ---
`default`   | `string`  | none      | Default translation. Good idea to set when using short-names

{{% /scrollableTables %}}

### Example

This example outputs the breadcrumbs, where the home link text is the translated 'Forum' definition. [Learn more about the breadcrumbs tag.](/functions/breadcrumbs.html.md)

```
{breadcrumbs homelink="Forum"|translate}
```