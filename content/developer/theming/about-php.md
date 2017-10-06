---
title: about.php
tags:
- Theming
category: developer
menu:
  developer:
    parent: theming
    weight: 60
aliases:
- /theming/about
---

## The "about.php" file

Each theme has an about.php file that contains some important information for Vanilla. Put this file in your theme root.

Here's a sample file:

```php
<?php

$ThemeInfo['ExampleTheme'] = [
    'Name'        => "Example Theme",
    'Description' => "Custom theme example",
    'Version'     => '1.0.0',
    'Author'      => "Stéphane LaFlèche",
    'AuthorEmail' => 'stephane.l@vanillaforums.com',
    'AuthorUrl'   => 'www.vanillaforums.com',
    'License'     => 'Proprietary',
    'Layout'      => [
        'Discussions' => 'table',
        'Categories'  => 'modern',
    ]
];
```

### Theme "key"

```
$ThemeInfo['ExampleTheme']
```

It's important to put a unique key here for your theme. A common mistake is to copy another theme and then forget to edit the about.php file. This key is how Vanilla identifies your theme internally.






### Name
The name will appear in the theme selection page.

### Description
Short description of your theme. Will also appear in theme selection page.

### Version
Version of the theme. The cache is tied to this version. If you ever run into an issue with the cache, you can try to bump up this version number.

### Author
Author of the theme

### AuthorEmail
Email of the author

### License
License of the theme.


### Layout
This is an optional property that tells Vanilla which views the theme was meant to use. Sometimes custom themes only work with a specific view. Keep in mind that this will not block an admin from changing the views, but it will give them a warning in the dashboard.

**Layouts for Discussions:**

  * modern
  * table

**Layouts for categories:**

  * modern
  * table
  * mixed

### Visibility
If you've got [Vanilla Cloud](http://vanillaforums.com), make sure to also [set your theme's visibility]({{< relref "developer/theming/theme-visibility.md" >}}).


### Theme Options:

The about.php file also supports [Theme Options]({{< relref "developer/theming/theme-options.md" >}}).
 