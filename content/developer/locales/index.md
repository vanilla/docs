---
title: Locales
tags:
- Developers
- Locales
category: developer
menu:
  developer:
    identifier: locales
aliases:
- /developers/locales
---
## Translating Vanilla

Want to help us improve our translations? We have a [Transifex project](https://www.transifex.com/projects/p/vanilla/) for contributing to this. Create an account there and submit your improvements.

Need to customize the phrasing just on your site in particular? See "Overriding locales" below.

## Translation tips

Want to help translate? Awesome! Here are some tips for creating great translations.

1. Please make sure that your changes use generic terminology and good grammar that can apply to all forums and avoids interest- or region-specific terms.
2. Avoid HTML encoding of UTF-8 characters. For example, just use `ö`, not `&ouml;`. Vanilla's entire stack is UTF-8 so the former _always_ works, but our default emails are not HTML, so the latter will fail.

## Installing locales

1. Download the locale you want from the [Addon Directory](https://open.vanillaforums.com/addon/browse/all/popular/recent/).
2. Upload the folder to your `locales` folder.
3. In the Dashboard, go to `Addons > Locales`.
4. Enable the locale.
5. Change the Default Locale at the top of the page, and Save.

## Using multiple locales

The [Multilingual plugin](https://open.vanillaforums.com/addon/multilingual-plugin) allows each user select their preference from all enabled locales.

## Overriding locales

```php
<?php if (!defined('APPLICATION')) exit();

// Note about what you're translating
$Definition['TranslationString1'] = "Override String 1";
$Definition['TranslationString2'] = "Override String 2";

// More stuff
$Definition['TranslationString3'] = "Override String 3";
$Definition['TranslationString4'] = "Override String 4";
```

### Overriding All Locales

You can override your default locale by adding a `conf/locale.php` file to your installation with additional definitions. Any definitions in this file will override all locales.

To find out what the translation strings for core components are please check our open source [Locales Repo](https://github.com/vanilla/locales). The core strings can be found in the [`tx-source/site_core.php`](https://github.com/vanilla/locales/blob/master/tx-source/site_core.php) file. 

If you are using Multilingual to enable multiple locales, please note his override will effect **all** locales.

### Overriding Locales with the Multilingual plugin

If you have the [Multilingual plugin](https://open.vanillaforums.com/addon/multilingual-plugin) enabled you may not want to use the same translation for every locale. In this case you will have multiple locale override files. One per locale. Places these in the `locale/` folder and name them `{locale-id}.php`. For example, the French language file would located at `locale/fr.php`.

**`locale/fr.php`**
```php
<?php if (!defined('APPLICATION')) exit();

// Note about what you're translating
$Definition['TranslationString1'] = "Quelque chose en français";
$Definition['TranslationString2'] = "Une autre chose en français";
```

**`locale/es.php`**
```php
<?php if (!defined('APPLICATION')) exit();

// Note about what you're translating
$Definition['TranslationString1'] = "Algo en español";
$Definition['TranslationString2'] = "Otra cosa en español";
```

## Defining new translations strings

If you are creating a custom theme or plugin for a multilingual community you may want to offer translations strings for text defined in your theme/plugin. Vanilla offers ways to define these strings in [Smarty Templates](http://docs.vanillaforums.com/developer/theming/smarty/functions/i18n/) and in [PHP](http://docs.vanillaforums.com/developer/framework/i18n/).
