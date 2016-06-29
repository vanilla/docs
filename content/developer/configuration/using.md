---
title: Using The Config
layout: docs
categories: ["Developers","Configuration"]
---

## When to use the config

Use the config for saving settings in your theme or plugin. You should only save small amounts of data to the config, and it should not be data that is changed frequently.

If you have large quantities of data or data that is written frequently, consider using the [database](/developers/framework/database) instead.

## Reading from config

The `c` function is the appropriate shortcut for reading from the config. The first parameter is the name of the config value in [dot notation](/developers/configuration). The second is an optional default value to return if requested config setting is not defined.

Example:
`$Value = c('Name.Of.Setting', 'DefaultValue');`

You can call a partial config key to get an array of all values below it in dot notation. For instance, say this was in your config:

```php
$Configuration['Example']['Settings']['A'] = 1;
$Configuration['Example']['Settings']['B'] = 2;
```

Now calling `c('Examples.Settings');` will return `array('A'=>1, 'B'=>2)`.

## Writing to config

Save to the config with the `SaveToConfig` function. It takes the name of the config value, a new value to associate with it, and an optional options array. In the options array, you can pass the key `Save` with the value `FALSE` to make the config change only apply for this pageload.

Change a config setting permanently: `SaveToConfig('Name.Of.Setting', 'NewValue');`

Change a config setting only for this pageload: `SaveToConfig('Name.Of.Setting', 'NewValue', array('Save' => FALSE));`

Simply passing the value `FALSE` in place of the options array has the same effect as passing `array('Save' => FALSE)`.

<aside class="warning">Do not used numeric-key arrays as config values. Associative arrays are fine.</aside>

## Configuration module

We've created a shortcut for making simple settings pages using the `ConfigurationModule`.

The configuration module can be instantiated and rendered from any plugin. You `Initialize` it with an array of config values, each of which has its own array of properties to define it (type of field, label, default, etc). See `applications/dashboard/modules/class.configurationmodule.php` for details.

This is how the Akismet plugin uses the ConfigurationModule to build a simple settings page consisting of a text field and a dropdown:

```php
$Cf = new ConfigurationModule($Sender);
$Cf->Initialize(array(
    'Plugins.Akismet.Key' => array('Description' => $KeyDesc),
    'Plugins.Akismet.Server' => array('Description' => 'You can use either Akismet or TypePad antispam.', 'Control' => 'DropDown', 'Items' => array('' => 'Aksimet', 'api.antispam.typepad.com' => 'TypePad', 'DefaultValue' => ''))
));
$Cf->RenderAll();
```

That's all there is to it - no custom view is involved.
