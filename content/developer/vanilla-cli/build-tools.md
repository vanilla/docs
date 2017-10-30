---
title: Build Tools
tags:
- Developers
- Build
- Tools
- process
category: developer
menu:
  developer:
    parent: cli
---

Both the core of Vanilla and its many addons often have their own tools to build their frontend dependencies. Normally these tools bundle, concatenate, and/or minify the javascript and styles, compress images and other assets, and may include a CSS authoring tool such as [Sass](http://sass-lang.com/) or [Less](http://lesscss.org/). Many of these build toolchains accomplish the same objective but in different ways.

The vanilla build tool aims to provide a consistant experience to building a frontend assets for vanilla (js/css/images). By default it will check your project for an existing build process and attempt to hook into that, but it provides its own mature, well tested build processes as well.

You can choose which build process to use by defining a `buildProcessVersion` in your project's [addon.json](http://docs.vanillaforums.com/developer) file and settings it to a valid build process version. Currently valid versions are `1.0` and `legacy`

## Usage
`vanilla build [<options>]`

### Options

#### `--process [process_version]`
Select the build process you wish to use. This will override any other method of settings the `buildProcessVersion`. See [processes](#build-processes) for information about the different built processes.

#### `--watch`
Run the build process in watch mode. This will listen for changes in your code and recompile the parts that have changed. It spawns a local server meant to hook into the [livereload](http://livereload.com/extensions/) browser extension for [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/livereload/), and [Safari](http://livereload.com/extensions/). This is officially supported by the `1.0` build process only. It may also work with the `legacy` build process if the theme supports it.

#### `--verbose`
Log additional output to stdout. This is helpful for finding out what might be wrong in your build process and outlines each step as they occur.

#### `--reset`
This tool has its own javascript dependencies that it relies on to function properly. Some of these are native modules and may require recompilation if your OS or Node.js installation get upgraded. This flags clears all cached modules and reinstall/recompiles them. The tool will attempt to do this automatically if necessary, but this command can be useful for fixing dependency related issues.
