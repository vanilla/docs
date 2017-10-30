---
title: Addon Utilities
tags:
- Developers
- CLI
- addon-doctor
- addon-json
- addon-cache
category: developer
menu:
  developer:
    parent: cli
---

These commands all make managing addons a little bit easier. These commands currently require a functioning Vanilla installation >= `2.4.201`. They only work on addons currently installed in that Vanilla installation and function by using Vanilla's built in addon manager to do the heavy lifting. As a result, these commands require you to point them to the vanilla directory with the `--vanillasrc` parameter.

Alternatively you can set the the environmental variable `VANILLACLI_VANILLA_SRC_DIR` to the installation path.

## `vanilla addon-cache [<options>]`

Reads the vanilla's addon-cache.

### Options

#### `--regenerate`

Will clear the addon-cache and regenerate it. This is useful for priming the cache without needing to load a page.

## `vanilla addon-doctor [<options>]`

Scans for issues in your addons.

## `vanilla addon-json [<options>]`

Convert addons from using `$PluginInfo` / `$ThemeInfo` / `about.php` metadata declaration to the new addon.json format. This will convert all addons linked to you vanilla installation.

