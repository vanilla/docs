---
title: Building Javascript
tags:
- Developers
- CLI
- Build
- Typescript
- Javscript
- Bundle
- Webpack
category: developer
menu:
  developer:
    parent: tools
---

Vanilla's frontend scripts use a single global build process. This is used for all internal javscript, both in core and addons.
This build process is __not__ suitable for 3rd party addons, as it relies on having commit access to the [vanilla/vanilla](http://github.com/vanilla/vanilla) repository.

## What does it do?

The included build process uses Typescript and Webpack to bundle typescript files to into javascript bundles.
These bundles will be automatically loaded by Vanilla if the addon they belong to is enabled.
The output files live in `/js/webpack` folders throughout the core and in addons.

## Prerequisites

Node 8+ and Yarn are prerequisites to run this build tool. To install them:

```bash
brew install node@10
# Make sure not to link these or a yarn upgrade will upgrade your node!
brew install yarn --without-node
```

Next you will need to install the repo's `node_modules`. The build process will handle installation of any addons' `node_modules` itself.

```sh
# Navigate to the root of your Vanilla installation
cd /path/to/vanilla
yarn install
```

## Usage

```sh
# From the root of your vanilla installation
yarn build <options>
yarn build:<mode> <options>

# Modes
yarn build
yarn build:development
yarn build:analyze
yarn build:polyfills

# Short and long version of the different params
yarn build:dev --verbose
yarn build:dev -v
yarn build --verbose --install --fix
yarn build -vif
```

### Modes

There are multiple different build modes and each of them does something different.
It also possible to specify any of these modes through the `--mode` option.

#### build

This is the default production build.
It will generate full sourcemaps and output production ready javascript to the disk inside of your repos.
It is:

- Required to ship production code.
- Slow.
- Accurate.

#### build:development

Development builds _do not_ write javascript to the disk.
Instead the typescript files from all of your enabled addons and will be build into a single file that is kept in memory only and served through a local web server.

There are a few benefits to this approach.

- Significantly faster rebuilds (less than a second normally).
- "Hot" automatic reloading of parts of the page. With React components a full page refresh is not required. Instead only the changed components will be refreshed.

Using the development build requires you to set the following configuration value:

```php
$Configuration['HotReload']['Enabled'] = true;
```

Setting this config value will instruct your Vanilla installation to load its built javascript
from the development build's web-server instead of the pre-built files. Don't forget to turn this off when you're done!

#### build:analyse

This command runs a production build then uses `webpack-analyze` to open a local webserver with details about:

- What size your bundles are (in original, parsed, and gzipped size).
- Where that size comes from.
- How large files are.
- Which files are in which bundles.

#### build:polyfills

Separate from any application Vanilla's `AssetModel` provides a page blocking polyfill for older browsers (does not execute in modern ones).
This is build process for that file. Since that file is the first thing loaded it can have no vanilla or addon specific dependencies and gets built separately.

### Options

The following flags have a long option and name a short alias. Use whichever your prefer.

#### --verbose or -v

Print additional output to your console.

#### --install or -i

Automatically install `node_modules` of all addons being built at the start of the build.

#### --fix or -f

Automatically fix styling and fixable lint errors in all built source files.
Do __not__ use this at the same time as an IDE that formats on save. Your IDE will have conflicts with the build tool as they both attempt to write to the same file.

## Source files and entries

All source files __MUST__ be typescript files with an extension of `.ts` or `.tsx` and reside in the `src/scripts` directory of an addon.

Entries __MUST__ be placed directly in the `src/scripts/entries` directory of an addon.
Vanilla currently supports 2 core entries: `forum` and `admin`.
This means your entry file may be one of the following file:

- `/plugins/MY_PLUGIN/src/scripts/entries/forum.ts`
- `/plugins/MY_PLUGIN/src/scripts/entries/admin.ts`
- `/plugins/MY_PLUGIN/src/scripts/entries/forum.tsx`
- `/plugins/MY_PLUGIN/src/scripts/entries/admin.tsx`

Every other file may be outputted from there.
