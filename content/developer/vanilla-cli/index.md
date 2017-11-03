---
title: Vanilla CLI
tags:
- Developers
- CLI
- Build Tool
category: developer
menu:
  developer:
    identifier: cli
versioning:
  added: 2.4.2
---

Vanilla provides a [command line tool](https://github.com/vanilla/vanilla-cli) to make various tasks easier for developers working on Vanilla Forums core or addons.

Current functionalities include:

- Building frontend assets (scripts, stylesheets, and images).
- Generating cache files for addons.
- Converting addons' [PluginInfo/ThemeInfo](/developer/addons/plugin-theme-info) to the [addon.json format](/developer/addons/addon-info).
- Validate addons in a Vanilla installation.

## Contents

- [Getting Started](#getting-started)
- [Build Tools](#build-tools)
- [Addon Utilities](#addon-utilities)

## Getting Started

Follow the [setup guide](https://github.com/vanilla/vanilla-cli#setup) in the `vanilla-cli` repo.

## Build Tools

The Vanilla CLI bundles it's own build tool to make starting and mainting your Vanilla Forums addons easier.

- [Build Tool Quickstart Guide](/developer/vanilla-cli/build-quickstart)
- [Build Process - 1.0](/developer/vanilla-cli/build-process-v1)
- [Build Process - Legacy](/developer/vanilla-cli/build-process-legacy)
- [How Bundling Works](/developer/vanilla-cli/bundling-process)

Both the core of Vanilla and its many addons often have their own tools to build their frontend dependencies. Normally these tools bundle, concatenate, and/or minify the javascript and styles, compress images and other assets, and may include a CSS authoring tool such as [Sass](http://sass-lang.com/) or [Less](http://lesscss.org/). Many of these build toolchains accomplish the same objective but in different ways.

The Vanilla Build Tool aims to provide a consistant experience to building frontend assets for Vanilla. If you specify a build process in your [addon.json](/developer/addons/addon-info/#build) it will use that process automatically, but falls back to [legacy build process](/developer/vanilla-cli/build-process-legacy) for older projects. This is to try to smooth the edges of working with older addons, but is not as simple as using one of the built in processes.

### Usage
`vanilla build [<options>]`

### Options

#### `--process [process_version]`
Select the build process you wish to use. This will override any other method of settings such the `build.processVersion` in the [addon.json](/developer/addons/addon-info/#build). Current options are [v1](/developer/vanilla-cli/build-process-v1) and [legacy](/developer/vanilla-cli/build-process-legacy).

#### `--csstool [tool_name]`
Select the CSS preprocessor to use. Current options are `scss` and `less`. The default is `scss`.

#### `--watch`
Run the build process in watch mode. This will listen for changes in your code and recompile the parts that have changed. It spawns a local server meant to hook into the [livereload](http://livereload.com/extensions/) browser extension for [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/livereload/), and [Safari](http://livereload.com/extensions/). This is officially supported by the `1.0` build process only. It may also work with the `legacy` build process if the addon supports it.

#### `--verbose`
Log additional output to stdout. This is helpful for finding out what might be wrong in your build process and outlines each step as they occur.

#### `--reset`
This tool has its own javascript dependencies that it relies on to function properly. Some of these are native modules and may require recompilation if your OS or Node.js installation get upgraded. This flags clears all cached modules and reinstall/recompiles them. The tool will attempt to do this automatically if necessary, but this command can be useful for fixing dependency related issues.

## Addon Utilities

The Vanilla CLI offers a few utilities to make managing your addons easier. They only work with addons currently installed in a Vanilla installation and function by using Vanilla's built in addon manager to do the heavy lifting. As a result, these commands require you to point them to the vanilla directory with the `--vanillasrc` parameter.

Alternatively you can set the the environmental variable `VANILLACLI_VANILLA_SRC_DIR` to the installation path.

## `vanilla addon-cache [<options>]`

Reads the vanilla's addon-cache.

### Options

#### `--vanillasrc`

You vanilla installation's source directory.

#### `--regenerate`

Will clear the addon-cache and regenerate it. This is useful for priming the cache without needing to load a page.

## `vanilla addon-doctor [<options>]`

Scans for issues in your addons.

### Options

#### `--vanillasrc`

You vanilla installation's source directory.

## `vanilla addon-json [<options>]`

Convert addons from using `$PluginInfo` / `$ThemeInfo` / `about.php` metadata declaration to the [newer addon.json format](/developer/addons/addon-info). This will convert all addons linked to you vanilla installation.

### Options

#### `--vanillasrc`

You vanilla installation's source directory.
