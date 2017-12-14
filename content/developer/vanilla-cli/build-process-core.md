---
title: Build Process - Core
tags:
- Developers
- CLI
- Build Tools
- Process
- core
- parent
- child
- library
- dependency

category: developer
menu:
  developer:
    parent: cli
versioning:
  added: 2.6
---

This is the primary Vanilla Forums build process. It is used to build assets for vanilla's core, and it's addons. It is build using [Webpack](https://webpack.js.org/), [node-sass](https://github.com/sass/node-sass) and [babel](https://babeljs.io/). The `core` process can generate multiple javascript bundles and multiple built stylesheets for an addon. Its primary differences from the v1 process is that it enables building against other addons. Code can be shared between addons by using [dependency bundles](#dependency-bundles) and [child themes](#child-themes).

## Contents

- [Folder Structure](#folder-structure)
- [Dependency Bundles](#dependency-bundles)
- [Executable Bundles](#executable-bundles)
- [App & Admin Bundles](#app-admin-bundles)
- [Stylesheets](#stylesheets)
- [Child Themes](#child-themes)

## Folder Structure

Source files are always found in one of two places - the `src` directory or the `node_modules` directory. Node modules can be installed from [npm](https://www.npmjs.com/) with [yarn](https://yarnpkg.com/en/).

Javascript source files are located in the `src/js` directory and built into the `js` directory of the addon. Stylesheet source files (Sass) are located in the `src/scss` directory and are built into the `design` directory of the addon.

Javascript entry points must be explicitly defined in the [addon.json file](/developer/addons/addon-info#build). Stylesheet entry points are inferred. Any file matching the pattern `src/scss/**/*.scss` that does not match `_*.scss` will be used as an entry point.

## Dependency Bundles
Dependency bundles are built from the files defined in `build.exports` of the [addon.json file](/developer/addons/addon-info/#build-exports).

Dependency Bundles are used to separate out common chunks of code from between addons. Each export will generate a `lib-<ADDON_KEY>-<EXPORT_KEY>.js` bundle in the `js` folder of the addon and a `*-manifest.json` file in the `manifests` folder of the addon. The manifest file is a mapping for other bundles to build against so be sure to check those into version control. So an `exports` object like the following

```json
"build": {
    "key": "dashboard",
    "process": "core",
    "exports": {
        "app": ["./common/Modal", "./app/ProfileEvents", "moment"],
        "admin": ["./common/Modal", "./admin/jenga-blocks", "ace", "moment", "bootstrap", "jquery"]
    }
}
```

would generate bundles `js/lib-dashboard-app.js` and `js/lib-dashboard-admin.js` and manifests `manifests/app-manifest.json` and `manifests/admin-manifest.json`

### What should go into a dependency bundle?

- Modular code that you want to consume from your own addon and/or other addons.
- Vendor Libraries.
- React Components.

### What not to include in a dependency bundle?

- Code that needs to be run by including a script in the page. If you want to put code for your own addon in a dependency bundle, be sure to import it properly in a [executable bundle](#executable-bundles).
- Large files that are only meant to be included on a single page. These should be included in a separate bundle, or used as a global for that page.

## Consuming a dependency bundle

Dependency bundles can be consumed through other dependency bundles or through a [executable bundle](#executable-bundles). Any time that you build a bundle it will check the requirements declared in the `require` [addon.json key](/developer/addons/addon-info/#require) and build against the libraries from that addon. In addition to the requirements explicity declared in the `require` key, all addons build against their own dependency bundles and the core dependency bundles.

If a file declared in a required dependency bundle is imported, then that import will automatically be replaced with a reference to the dependency bundle in the outputed file. This is only possible if the imported file path resolves to the same location as the `build.exports` declaration in the required addon.

Some aliases have been provided to make importing slightly easier.

- `@core` => `<VANILLA_SRC_DIRECTORY>/core/src/js` 
- `@vanilla` => `<VANILLA_SRC_DIRECTORY>/applications/vanilla/src/js`
- `@dashboard` => `<VANILLA_SRC_DIRECTORY>/applications/dashboard/src/js`
- Required addons will also have aliases generated for them. For example if the `vanilla-editor` addon was required, the following mapping would be generated.      
    - `@vanilla-editor` => `<VANILLA_SRC_DIRECTORY>/plugins/editor/src/js`.

```js
import * as React from "react";
import { Modal } from "@dashboard/app/components";
import Editor from "@vanilla-editor/editor";
import Events from "@core/events";
```

You should very rarely need to build off of an addon other than `core`, `dashboard`, or `vanilla`.

### node_modules

The `core` build process will automatically attempt to resolve node_modules in the following order:

1. `core/node_modules` 
1. `applications/dashboard/node_modules` 
1. `applications/vanilla/node_modules` 
1. `YOUR_ADDON/node_modules`.

No special syntax is required. If the modules you are trying to import is not explicitly an export from core, dashboard, vanilla, or your own addon will not be de-duplicated, so watch your bundle sizes!

## Executable Bundles

Executable bundles are built from the `build.entries` of the [addon.json file](/developer/addons/addon-info/#build-entries). Each entry point will generate an `<ADDON_KEY>-<ENTRY_KEY>.js` bundle in the `js` folder of the addon. So an `entries` object like the following

```json
"build": {
    "key": "dashboard",
    "process": "core",
    "entries": {
        "app": "./app/index.js",
        "admin": "./admin/index.js"
    }
}
```

would generate bundles `js/dashboard-app.js` and `js/dashboard-admin.js` from the entrypoints `src/js/app/index.js` and `src/js/admin/index.js`.

An executable bundle is the actual runnable javascript for your addon. This is the place for 

- Registering event listeners and hooks.
- Modifying the DOM.
- Mounting React components.
- Consuming library components.

## App & Admin Bundles

Addons should attempt to build as few separate bundles as possible. Many addons can get away with having a single entry points, but App & Admin sections are a common separation point. These are not strictly defined by the the build tool but the convention is to have any entries/exports key with multiple keys (`admin`, `app`). See [the addon.json build key example](/developer/addons/addon-info#build-example).

### App

The App section of Vanilla is the front-end/client/consumer facing portion of Vanilla. This is the part of Vanilla that is viewed by an average user. Currently this includes CategoryLists, DiscussionLists, Discussions, Profiles, ConversationLists, Conversations, and more.

This is ***not***:

- Everything the in Vanilla application.
- Front-end as in front-end/back-end web development.

### Admin

The Admin section of Vanilla is what is traditionally thought of as the "Dashboard". It is made up of all the configuration screens / admin panel / etc. This is accessible to much fewer users. This should not be confused with the `dashboard` addon, which provides both an Admin section (the control panel, settings, etc), and an app section (The profile pages).

## Stylesheets

Stylesheets are built with SCSS. Source files should be placed in the `src/scss` directory. Any file ending in `*.scss` that does not begin with an underscore `_` is considered a source file. Filenames beginning with an underscore such as `_partial.scss` signify a partial. These do not get built on their own and must use the `@import` directive to include them. See [The Sass language guide](http://sass-lang.com/guide) for more details.

Each entry stylesheet will be run through their preprocessor and be outputed into the `design` folder with the filename `<entryname>.css`. So for an outputted file to be `design/myfile.css`, its source file would need to be located at `src/scss/myfile.scss`.

This build process works with the [Sass preprocessor](http://sass-lang.com/). This build tool uses a custom importer function simplifiy importing node_modules scss dependencies. See [the bundling process](/developer/vanilla-cli/bundling-process/#sass) for more details on importing sass files.

### Child Themes

The `core` build process allows themes to build against each other by specifying the [parent key in the addon.json file](/developer/addons/addon-info/#parent). For the build to work both themes must define be using the `core` build process. This enables the parent theme to specify some special entry points in it's stylesheets for the child theme to hook into. ***Note: while multiple levels of children may technically build (eg. grandchildren) this setup is heavily discouraged.***

#### Defining a Parent Theme

Any theme can be a parent theme. Parent themes can, but don't necessarily have to define special entrypoints for it's children. They go in a scss file and look like this:

**themes/parent-theme/src/scss/custom.scss**
```scss
/** @vanilla-cli-placeholder: _variables.scss **/

// Parent theme styles here
$color: red !default;

.selector {
    color: $color
}

/** @vanilla-cli-placeholder: _custom.scss **/
```

When building the parent theme directory these placeholders will just be ignored because they are comments. The file name specified after `@vanilla-cli-placeholder:` will be used to lookup a child files to get dynamically inserted while building a child theme.

#### Building a Child Theme

The only strict requirement for a theme to be a child theme are:

- Specifying a `parent` key in the addon.json file.
- Both the parent theme and child theme use the `core` build process.
- Both the parent theme and the child theme must be symlinked into the same vanilla source directory.

By default running `vanilla build` in a child theme will lookup the parent theme, and build the parent's stylesheets in `themes/parent-theme/src/scss` into `themes/child-theme/design`. The magic happens with `@vanilla-cli-placeholder` annotations in the parent theme. The child theme can define files to replace those placeholders.

For example. If the parent theme defines the `custom.scss` file above it has two placeholders files.

- `_variables.scss`
- `_custom.scss`

If you create these two files in `themes/child-theme/src/scss` their contents will be inserted in place of the respective `@vanilla-cli-placeholder` annotations.

## Bundling Process

See the [Bundling Process](/developer/vanilla-cli/bundling-process) page for details about the CLI bundles it's assets and the transforms that can be applied to javascript through the build process.
