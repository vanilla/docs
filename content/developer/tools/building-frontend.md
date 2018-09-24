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

- `dashboard`
- `rich-editor`
- Various internal addons.

The outputted bundles will automatically be loaded by Vanilla into the page if their addon is enabled.

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

## build

This is the default production build.
It will generate full sourcemaps and output production ready javascript to the disk inside of your repos.
It is:

- Required to ship production code.
- Slow.
- Accurate.

## build:development

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

## build:polyfills

Separate from any application Vanilla's `AssetModel` provides a page blocking polyfill for older browsers (does not execute in modern ones).
This is build process for that file. Since that file is the first thing loaded it can have no vanilla or addon specific dependencies and gets built separately.

### Options

The following flags have a long option and name a short alias. Use whichever your prefer.

#### --verbose or -v

Print additional output to your console.

#### --fix or -f

Automatically fix styling and fixable lint errors in all built source files.
Do __not__ use this at the same time as an IDE that formats on save. Your IDE will have conflicts with the build tool as they both attempt to write to the same file.

## Source files and entries

All source files __MUST__ be typescript files with an extension of `.ts` or `.tsx` and reside in the `src/scripts` directory of an addon.

Entries __MUST__ be placed directly in the `src/scripts/entries` directory of an addon. Adding an entry of a given name will create an entry of that type. Currently 2 entries are provided by the dashboard and rich-editor addons `forum` and `admin`.

This means an entry for one of those sections would be one of the following files.

- `/plugins/MY_PLUGIN/src/scripts/entries/forum.ts`
- `/plugins/MY_PLUGIN/src/scripts/entries/admin.ts`
- `/plugins/MY_PLUGIN/src/scripts/entries/forum.tsx`
- `/plugins/MY_PLUGIN/src/scripts/entries/admin.tsx`

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

Every addon may offer entrypoints for different "sections" of the site. These will get loaded based of the javascript files requested from the `AssetModel::getWebpackJsFiles(string $section)`.

__`forum` entries__

Forum entries are loaded in what would be considered the "frontend" of the site. That is anything using the `default` master view (currently `default.master.tpl`).

__`admin` entries__

Admin entries are for the administrative dashboard of the site. That is anything using the `admin` master view (currently `admin.master.tpl`).

__Additional entries__

If you wanted to create a entry for a new section (lets use `mySection` as an exampel) you would do the following:

1. Create a file `src/scripts/entries/mySection.ts` or `src/scripts/entries/mySection.tsx` in your addon.
2. Run the build.
3. Call `$assetModel->getWebpackJsFiles('mySection')` and add the resulting script files to your page.
