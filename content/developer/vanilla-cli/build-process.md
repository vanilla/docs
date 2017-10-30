---
title: Build Process
tags:
- Developers
- CLI
- Build
- Tools
- Processes
category: developer
menu:
  developer:
    parent: cli
---

The CLI contains multiple build processes. All new projects should use the latest version.

## 1.0

This is the primary build process. It is based on the build tool [gulp](http://gulpjs.com/) It builds stylesheets using [node-sass](https://github.com/sass/node-sass), bundles javascript with [Webpack](https://github.com/webpack/webpack) and [babel](https://babeljs.io/).

### Folder Structure

Source files are always found in one of two places - the `src` directory or the `node_modules` directory. Node modules can be installed from [npm](https://www.npmjs.com/) with [yarn](https://yarnpkg.com/en/).

#### Sass

This build process works with the [Sass preprocessor](http://sass-lang.com/). Source files should be placed in the `src/scss` directory. Any file ending in `*.scss` that does not begin with an underscore `_` is considered a source file. Filenames beginning with an underscore such as `_partial.scss` signify a partial file to sass. These do not get built on there own and must use the `@import` directive to include them. See [The Sass language guide](http://sass-lang.com/guide) for more details.

#### Javascript

The javascript entry point is currently always found at `src/js/index.js`. It does not currently support multiple javascript entry files.

#### Images

Image files can be placed in the `src/images` folder. Each image is its own entry. Images in the src folder will be minified using [ImageMin](https://github.com/imagemin/imagemin) before they are copied to the output directory.

#### Output

#### Sass

Each entry file will be placed run through Sass and have outputed into the `design` folder with the filename `<entryname>.css`. So if you would like the outputted file to be `design/myfile.css`, you would use a source file at `src/scss/myfile.scss`. Themes automatically load the css file located at `design/custom.css` so you normally want a source file called `custom.scss`. All partials will be resolved. See [Processing Sass] for more information on how the sass build works.

#### Javascript

The single javascript entry will be bundled and outputted to `js/custom.js`. See [Processing Javascript] for more information on how the build process works.

#### Images

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

### Bundling Process

See the [Bundling Process](/developer/vanilla-cli/bundling-process) page for details about the CLI bundles it's assets.

## Legacy

### Notice

This build process is deprecated and only exists to support legacy addons. New projects should use the latest numbered build process. 

- It requires whatever tooling the addon requires. This could be node, yarn/npm, or ruby.
- It may require other global node dependancies such as `gulp`, `grunt`, or `bower`.
- It may require installation of ruby gems or node modules before building.

**This build process is not a magic bullet. It will not fix a broken legacy build process. It is only a wrapper around existing ones.**

This build process will attempt to find the tasks `build` and `watch` tasks by:
1. Checking if any `npm scripts` exists named `build` or `watch` and running those.
2. Then checking and running any of the following if they exist. You can have multiple of these
- `gulp default`, `gulp build`, or `gulp watch` tasks.
- `grunt default`, `grunt build`, or `grunt watch` tasks
- If a Gemfile exists, try to build ruby-sass with [Compass](https://github.com/Compass/compass) using `compass compile` or `compass watch`

This legacy build process will also create an empty `bower_components` if a `bower.json` file exists and the folder does not. This is to prevent certain build process from crashing even if you have no bower components.

This process will **not** install your `node_modules` or `bower_components` for you. You are responsible for those yourself and they can normally be handled by running `yarn install`.

If there are major issues with a legacy build process consider converting it to use one of the [built in processes](/developer/vanilla-cli/build-quickstart).
