---
title: Build Process - v1
tags:
- Developers
- CLI
- Build Tools
- Process
- v1
category: developer
menu:
  developer:
    parent: cli
versioning:
  added: 2.5
---

This is the primary build process. It is based on the build tool [gulp](http://gulpjs.com/). It builds stylesheets using [node-sass](https://github.com/sass/node-sass) or [less](https://github.com/less/less.js/tree/master) and bundles javascript with [Webpack](https://github.com/webpack/webpack) and [babel](https://babeljs.io/).

This build process was formerly called `1.0`. It has now been renamed to `v1`. Existing addon.json files referencing the process version `1.0` will continue to work.

## Folder Structure

Source files are always found in one of two places - the `src` directory or the `node_modules` directory. Node modules can be installed from [npm](https://www.npmjs.com/) with [yarn](https://yarnpkg.com/en/).

### Stylesheets

This build process works with the [Sass preprocessor](http://sass-lang.com/) and the [Less preprocessor](http://lesscss.org/). Only one preprocessor may be used at a time. A preprocessor is selected either through the [addon.json file](/developer/addons/addon-info#build) or as a [command line argument](/developer/vanilla-cli/)

This tool has better support for Sass than Less. Less support exists primarily to facilitate the conversion of older addons.

#### Sass

Source files should be placed in the `src/scss` directory. Any file ending in `*.scss` that does not begin with an underscore `_` is considered a source file. Filenames beginning with an underscore such as `_partial.scss` signify a partial. These do not get built on their own and must use the `@import` directive to include them. See [The Sass language guide](http://sass-lang.com/guide) for more details.

#### Less

Source files should be placed in the `src/less` directory. Any file ending in `*.less` that does not begin with an underscore `_` is considered a source file. Filenames beginning with an underscore such as `_partial.less` signify a partial. These do not get built on their own and must use the `@import` directive to include them. See [Less - The Import Directive](http://lesscss.org/features/#import-directives-feature) for more details.

### Javascript

The javascript entry point is currently always found at `src/js/index.js`. This tool does not currently support multiple javascript entry files.

### Images

Image files can be placed in the `src/images` folder. Each image is its own entry. Images in the src folder will be minified using [ImageMin](https://github.com/imagemin/imagemin) before they are copied to the output directory.

## Output

### Stylesheets

Each entry stylesheet will be run through their preprocessor and be outputed into the `design` folder with the filename `<entryname>.css`. So for an outputted file to be `design/myfile.css`, its source file would need to be located at `src/scss/myfile.scss` or `src/less/myfile.less`. Themes automatically load the css file located at `design/custom.css` a source file called `custom.scss` or `custom.less` is common. All partials will be resolved. See [Sass Bundling](/developer/vanilla-cli/bundling-process/#sass) and [Less Bundling](/developer/vanilla-cli/bundling-process/#less)for more information on how stylesheet bundling works.

### Javascript

The single javascript entry will be bundled and outputted to `js/custom.js`. See [The Bundling Process](/developer/vanilla-cli/bundling-process/#javascript) for more information on how the build process works.

### Images

Images are outputted with the same filenames and structure as their entries into the `design/images` folder.

### Example Folder Structure

This build process relies on the addon having the following structure for its source files:

```
addonfoldername
|--src
   |--js
      |--index.js
      |--another-file.js
   |--scss
      |--some-entry-file.scss
      |--_not-an-entry-file.scss
   |--images
      |--image1.png
      |--image2.jpg
```

Running a build on the given folder structure would would result in the following output files

```
addonfoldername
|--design
   |--some-entry-file.css
   |--images
      |--image1.png
      |--image2.jpg
|--design
   |--custom.js
```

## Bundling Process

See the [Bundling Process](/developer/vanilla-cli/bundling-process) page for details about the CLI bundles it's assets.
