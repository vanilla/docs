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
aliases:
    - /developer/vanilla-cli/build-process-core/
versioning:
    added: 2.7
---

Vanilla's frontend scripts use a single global build process. This is used for all internal javscript, both in core and addons.

## What does it do?

The included build process uses Typescript and Webpack to bundle typescript files to into javascript bundles.

Every addon in your current vanilla project containing entries will get built. Currently that means bundling scripts from the following addons:

- `vanilla`
- `dashboard`
- `rich-editor`
- `foundation`
- `subcommunities`
- `knowledge`
- `vanillaanalytics`
- Varioius others.

The outputted bundles will automatically be loaded by Vanilla into the page if their addon is enabled.

## Prerequisites

Node 10+ and Yarn are prerequisites to run this build tool. To install them:

```bash
brew install node@10
npm install -g yarn
```

Next you will need to install the repo's `node_modules`. The build process will handle installation of any addons' `node_modules` itself.

```sh
# Navigate to the root of your Vanilla installation
cd /path/to/vanilla
yarn install
```

## Composer post-install

The build is run automatically in a `post-install` hook of composer. This is to ensure a `composer install` provides a fully functioning vanilla setup. The equivalent command will be run:

```sh
yarn install --pure-lockfile
yarn build -i
```

There are a few environmental variables that can affect how this composer post-install script is started.

### VANILLA_BUILD_DISABLE_AUTO_BUILD

Setting this environmental variable will disable automatic building after a composer install. So if you have a post-checkout hook and don't want to run the build on every checkout you can could run your install like this:

```sh
VANILLA_BUILD_DISABLE_AUTO_BUILD=true composer install
```

### VANILLA_BUILD_DISABLE_CODE_VALIDATION

Setting this environmental variable will disable type checking and code validation. It is particularly useful for memory constrained environments, as the code validation is particularly memory intensive.

```sh
VANILLA_BUILD_DISABLE_CODE_VALIDATION=true composer install
```

### VANILLA_BUILD_NODE_ARGS

The value of this environemental variable will be passed as arguments to the nodejs process used by the build script.

```sh
# Restrict the node process to 512Mb of RAM.
VANILLA_BUILD_NODE_ARGS="--max-old-space-size=512" composer install
```

## Usage

```sh
# From the root of your vanilla installation
yarn build <options>
yarn build:<mode> <options>

# Modes
yarn build
yarn build:dev
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

## build

This is the default production build.
It will generate full sourcemaps and output production ready javascript to the disk inside of your repos.
It is:

- Required to ship production code.
- Slow.
- Accurate.

## build:dev

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

## build:analyse

This command runs a production build then uses `webpack-analyze` to open a local webserver with details about:

- What size your bundles are (in original, parsed, and gzipped size).
- Where that size comes from.
- How large files are.
- Which files are in which bundles.

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

Entries __MUST__ be placed directly in the `src/scripts/entries` directory of an addon. Adding an entry of a given name will create an entry of that type. Currently Vanilla defines 3 common entries: `forum`, `admin`, and `knowledge`.

This means an entry for one of those sections would be one of the following files.

- `/plugins/MY_PLUGIN/src/scripts/entries/forum.ts`
- `/plugins/MY_PLUGIN/src/scripts/entries/admin.ts`
- `/plugins/MY_PLUGIN/src/scripts/entries/knowledge.ts`
- `/plugins/MY_PLUGIN/src/scripts/entries/forum.tsx`
- `/plugins/MY_PLUGIN/src/scripts/entries/admin.tsx`
- `/plugins/MY_PLUGIN/src/scripts/entries/knowledge.tsx`

Every other file may be imported from one of these entries.

### Dynamic entries

Anytime you have secondary content of a significant size that is not the primary content of a page it should be dynamically imported. This will split everything from that import down the chain into it's own javascript bundle. If the import statement is reached, that separate bundle will be dynamically loaded by the client, and the imported file's exports returned in a Promise.

Rich Editor is a great example of this. It:

- Only loads under certain conditions (signed in user, posting permissions, on a comment/posting page).
- Very large (~400 Kb).

So in the `plugins/rich-editor/src/scripts/entries/forum.ts` you can find code similar to the following:

```ts
async function startEditor() {
    if (pageNeedsRichEditor()) {
        const mountEditorModule = await import("./mountEditor" /* webpackChunkName="chunks/mountEditor" */)
        const mountEditor = mountEditorModule.default;
        mountEditor(getMountPoint());
    }
}
```

There are a few things to decouple here.

1. The `import()` function returns a Promise of module. It is an asyncrounous operation and must be handled as such.
2. Default exports get put on a named property `default` of the imported module. Named exports will be put on a property of their name. See [webpack's import() documentation](https://webpack.js.org/api/module-methods/#import-) for more details.
3. You __MUST__ provide a `webpackChunkName` property. Omitting it will result in a chunk named `0.min.js` or `1.min.js` in the root the sections build directory where 0 or 1 will be a automatically incrementing integer. The files will still be loaded, but providing a name allows for easier viewing of what scripts are loaded in the page.

## Site Sections

Every addon may offer entrypoints for different "sections" of the site. These will get loaded based off the javascript files requested from the `AssetModel::getWebpackJsFiles(string $section)`.

__`forum` entries__

Forum entries are loaded in what would be considered the "frontend" of the site. That is anything using the `default` master view (currently `default.master.tpl`).

__`admin` entries__

Admin entries are for the administrative dashboard of the site. That is anything using the `admin` master view (currently `admin.master.tpl`).

__Additional entries__

If you wanted to create a entry for a new section (lets use `mySection` as an example) you would do the following:

1. Create a file `src/scripts/entries/mySection.ts` or `src/scripts/entries/mySection.tsx` in your addon.
2. Run the build.
3. Call `$assetModel->getWebpackJsFiles('mySection')` and add the resulting script files to your page.

## Output files

The `WebpackAssetProvider` is responsible for gathering build files. You should not be referencing them directly as their locations may change in the future. Please use `WebpackAssetProvider` and use it's methods instead.

### Location

Output files are build into the `dist` directory. Each section get's it own folder. The folder structure of a section looks like this:

__dist/forum__
```
runtime.min.js   (Webpack runtime)
vendors.min.js   (vendor JS. Everything from node_modules)
shared.min.js    (Shared code from the `@library`)
addons/*         (Build entry points from addons. Eg. `addons/rich-editor.mins.js`, `addons/dashboard.min.js`)
bootstrap.min.js (The script the fires the `onReady()` event.)
async~someChunkName.min.js
```

Each of these files has its own sourcemap file as well. The `async~` the chunks build from dynamic import statements.
