---
title: Smarty Modifiers
layout: docs
categories: ["Theming", "Smarty"]
---

## Smarty Modifiers

Smarty modifiers can be applied to variables, custom functions or strings. You can use a modifier by adding a | (pipe) after the element you wish to modify and adding the modifier name. Modifiers can also accept parameters which are separated by a : (colon). These modifiers must follow the order of their appearance in the signature. [Learn more about Smarty modifiers from the Smarty site.](http://www.smarty.net/docsv2/en/language.modifiers.tpl).

Vanilla supports the built-in Smarty modifiers as documented on the Smarty site, and has created a few more for you to use in your templates.

### Modifier: `asset_url`

Converts a string to an asset url. Solves the problem of trying to using a relative path when Vanilla exists in a subfolder.

#### `asset_url` Parameters (in order)

Parameter       | Type      | Default   | Description
---             | ---       | ---       | ---
`withDomain`    | `boolean` | `false`   | Whether or not to prepend the base (`http://your-forums.com/`) URL to the outputted link
`addVersion`    | `boolean`  | `false`  | Whether or not to append a version to the resulting asset to help bust the cache

#### `asset_url` Example

In the following example, if the asset_url modifier was not specified, the image would not work if Vanilla existed in a subfolder. It also adds the domain name to the url and appends the theme version number.

```
<img alt="My logo" src="{"/themes/MyTheme/design/images/my-logo.png"|asset_url:true:true}">
```

### Modifier: `date`

Formats a timestamp consistently with Vanilla's date formatting, which by default varies depending on how much time has passed.

#### `date` Parameter

Parameter   | Type      | Default   | Description
---         | ---       | ---       | ---
`format`    | `string`  | varies    | The  [strftime](http://php.net/manual/en/function.strftime.php) format of the date

#### `date` Example

The following example prints out the current year and uses the [{$smarty} reserved variable](http://www.smarty.net/docsv2/en/language.variables.smarty.tpl) to get the current timestamp

```
{$smarty.now|date:"%Y"}
```

### Modifier: `translate`

Translates a string into the selected locale's definition.

#### `translate` Parameter

Parameter   | Type      | Default   | Description
---         | ---       | ---       | ---
`default`   | `string`  | none      | Default translation. Good idea to set when using short-names

#### `translate` Example

This example outputs the breadcrumbs, where the home link text is the translated 'Forum' definition. [Learn more about the breadcrumbs tag.](/functions/breadcrumbs.html.md)

{breadcrumbs homelink="Forum"|translate}
