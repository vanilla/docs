---
title: Build Process - Legacy
tags:
- Developers
- CLI
- Build Tools
- Process
- Legacy
category: developer
menu:
  developer:
    parent: cli
versioning:
  added: 2.4.2
  deprecated: 2.5
---

This build process is deprecated and only exists to support legacy addons. New projects should use the [built in build process](/developer/vanilla-cli/build-process-v1). If you are able to consider migrating projects off the the legacy process to the built-in. If the build tool is not capable of replacing your addon's built process, consider filing an issue on [this project's github repo](https://github.com/vanilla/vanilla-cli/issues).

This build process is primarily meant to be a wrapper around a projects existing process in order give it similar interface to the built in processes. *This build process is not a magic bullet. It will not fix an existing build process that is already broken.*

## Usage

Unlike the [built in build process](/developer/vanilla-cli/build-process-v1), this process requires additional setup for every project. 

For most projects the following steps will suffice:

1. Navigate to the project directory.
1. Follow the project's setup instructions.
1. Verify that the existing process works.
1. If it works, try running `vanilla build` or `vanilla build --watch`.

## Caveats
- The legacy process requires whatever tooling the addon requires. This could be node, yarn/npm, or ruby.
- The legacy process may require other global node dependancies such as `gulp`, `grunt`, or `bower`.
- The legacy process may require installation of ruby gems or node modules before building.

## How it works

This build process will attempt to find the tasks `build` and `watch` tasks by:

1. Checking if the package.json contains of the the following items in its `scripts`: `build`, `watch`
2. Then checking and running any of the following if they exist. You can have multiple of these
    - `gulp default`, `gulp build`, or `gulp watch` tasks.
    - `grunt default`, `grunt build`, or `grunt watch` tasks
    - If a Gemfile exists, try to build ruby-sass with [Compass](https://github.com/Compass/compass) using `compass compile` or `compass watch`

This legacy build process will also create an empty `bower_components` if a `bower.json` file exists and the folder does not. This is to prevent certain build process from crashing even if you have no bower components.

This process will **not** install your `node_modules` or `bower_components` for you. You are responsible for those yourself and they can normally be handled by running `yarn install`.

## Having Issues?
If there are major issues with a legacy build process consider converting it to use the [built in build process](/developer/vanilla-cli/build-quickstart).
