---
title: Build Quickstart
tags:
- Developers
- CLI
- Build Tools
- Quickstart
- Convert
- Conversion
category: developer
menu:
  developer:
    parent: cli
versioning:
  added: 2.5
---

## New Projects

Creating a new project with the Vanilla CLI, the process is simple. There are just a few key steps.

1. Follow the [setup guide](https://github.com/vanilla/vanilla-cli#setup) in the `vanilla-cli` repo.
1. Create a key `build.processVersion` in your addon.json file and set it to `v1`. Don't know about the addon.json file? Check out our [detailed documentation](/developer/addons/addon-info)!
1. Read about how [structure your source files](/developer/vanilla-cli/build-process-v1#folder-structure). Looking for an example? Check out our [Vanilla CLI example repo](https://github.com/vanilla/vanilla-cli-example).
1. Create some new source files.
1. Run `vanilla build` or `vanilla build --watch`.

## Converting Existing Projects

Existing projects using Sass, Less, or normal CSS can be converted to use the Vanilla build tool with relatively minor modifications. Other CSS preprocessors are currently not supported, so those projects cannot be converted without radical changes in their code.

### Using npm instead of bower

Some existing build process may contain bower components. Bower is deprecated and is not supported by the Vanilla build tool so these dependancies will need to be fetched another way. The best place to check is on [npm](http://npmjs.org). If the package is still maintained that's the place to look. Once found, be sure to install it with `yarn add <my-package-name>`.

Many projects using Bower also use a tool called `wiredep` to automatically wire up all of the installed components. This will need to be removed. See the [bundling process documentation](/developer/vanilla-cli/bundling-process) for information about the proper way to bundle together these dependencies.

### Remove the existing build process

It can be helpful to remove the existing build process before moving other files around.

1. Remove any dependancies relating to the existing build process. Open the `package.json` file and remove any related packages in the `dependencies` and `devDependencies`. Most of these packages will likely be related to gulp, or grunt.
1. Delete any Gruntfile, Gulpfile, or gemfile
1. Delete the `bower_components` and `node_modules` folders.
1. Delete the bower.json file.
1. Run `yarn install`

### Moving the Files

The next step is to move all existing files into [the proper folder structure](/developer/vanilla-cli/build-process-v1#folder-structure). Looking for an example? Check out our [Vanilla CLI example repo](https://github.com/vanilla/vanilla-cli-example).

Javascript files go into `src/js` and stylesheets go into `src/scss`. Using normal CSS? Rename your the file's extension from `.css` to `.scss`. You now have a valid Sass file because any valid CSS is valid Sass.

If you want to handle compressing your image assets manually, you can leave them out of the `src` folder and place them directly `design`.

### Run the build

Now that the project structure has been changed, we need to set up the build tool itself.

1. Follow the [setup guide](https://github.com/vanilla/vanilla-cli#setup) in the `vanilla-cli` repo.
1. Create a key `buildProcessVersion` in your addon.json file and set it to `1.0`. Don't know about the addon.json file? Check out our [detailed documentation](/developer/addons/addon-info)!
1. Run `vanilla build` or `vanilla build --watch`.

## Having Trouble?

The most likely cause of errors is a dependency not being imported correctly. Check the [bundling process documentation](/developer/vanilla-cli/bundling-process) to see if you are importing things correctly. If the problem still persists, file an issue on [the projects github](https://github.com/vanilla/vanilla-cli/issues).
