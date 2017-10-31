---
title: Bundling Process
tags:
- Developers
- CLI
- Build
- Javascript
- Bundle
- Webpack
- ES Module
category: developer
menu:
  developer:
    parent: cli
versioning:
  added: 2.4.2
---

The Vanilla CLI's sass and javascript build processes provide multiple methods to import other sass/css or javascript files. *This only works with the built-in build processes.*

## Javascript

The javascript files are bundled *not concatenated*. Concatenation is how many legacy process work. A legacy build script would need to define the order that javscript files would get loaded in and they would get attatched to each other in order. Each file would place their contents in the global namespace and rely on their particular order to only reference things loaded before themselves. Bundling allows import/require statements to be resolved dynamically, and be deduplicated. All dependancies must be implicitly defined at the top of each file.

### Syntax

All ES2017 syntax and features are supported, including 

- `class`
- `Promise`
- `async/await`
- Generator functions `function* name()`
- `let`/`const`
- arrow functions `() => {}`
- template strings
- Rest/Spread `...params`
- default function values
- array & object destructuring
- Iterators & `for..of`
- `Symbol`
- `Map`/`Set`
- `Array.prototype.map`/`Array.prototype.reduce`/`Array.prototype.filter`
- `import`/`export`

### Methods of exporting javascript

There are currently multiple different ways to export javascript and this tool supports all of them. [ES Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) are the preferred method though.

#### ES Module Export

ES modules provide 2 types of exports. Default and named exports. See [ES Modules in depth](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) for more details.

```js
export default function defaultFunction() {
    return "foo";
}

export const myVariable = 'bar'
```

#### require.js `module.exports`

Require.js is Node's module system. A file exports whatever it's module.exports. While ES modules can have both named exports and a default export, require.js module can have one or the other. Not both.

```js
module.exports = {
    function1,
    function2,
    object1
}

// or

module.exports = function(){

}
```

### Methods of importing javascript

While browser implementations of ES Modules only support importing other ES Modules, this build tools leverages [Webpack](https://github.com/webpack/webpack) to allow mixing import methods.

#### ES Module Imports
You will almost always be able to use ES Module imports even if the module you are trying to import is using `require.js` (most npm modules will). If you need to import something dynamically that will require one of [webpack's dynamic imports](https://webpack.js.org/guides/code-splitting/).

```js
// Import a default export
import Thing from 'thing';

// Import a named export
import {VariableOrFunction} from 'thing';

// Import both
import Thing, {VariableOrFunction1, VariableOrFunction2} from 'thing';

// Import everything into "namespace" type construct
// If there is a default it will be assigned to the variable 'Thing.default'
import * as Thing from 'thing';

// Import something that doesn't export any module
// This is generally used for something that attatches globally or has
// global side effects (e.g. some jquery plugins)
import 'jquery-thing';
```

`jquery` itself is already attatched globally by Vanilla, so you don't need to worry about importing it. You can just access it as `jQuery` or `$`.

### Module Resolution

The CLI uses will mostly resolve files using node module resolution. This means you can import files in 2 different ways.

#### Module

Importing something from `node_modules` is simple. If you've installed a package with `yarn add <package-name>` that module will be available with 

```js
import "package-name";
```

The actual entry point is determined by the key `main` in the package's `package.json`. 

#### Relative path

You can include your own files by using relative paths

```js
import {someFunction} from "../file-in-parent-directory";
import {someOtherFunction} from "../sibling-file";
```

If you are importing a file ending in `.js` or `.jsx` you do not need to and should not provide a file extension.

## Sass

Sass partials can be required as usual with

```css
@import "./_some-relative-partial.scss";

// You don't actually need the extension
@import "./_some-relative-partial";

// Or the ./
@import "_some-relative-partial";

// Or the _
@import "some-relative-partial";
```

The CLI provides some additional import syntax to make importing stylesheet dependancies easier. If a node module dependancy defines a key `style` in its `package.json` and that points to a .scss or .css file, or if it defines a key `main` that points to a .scss or .css file, that file can be loaded using a special syntax.

So if your folder structure looked like this

|--my-addon
   |--src
      |--scss
         |--some-entry-file.scss
         |--_not-an-entry-file.scss
   |--node_modules
      |--some-module
         |--package.json
         |--some-directory
            |--somefile.scss

And the package.json defined `style` or `main` pointing to `somefile.scss`

**some-entry-file.scss**
```css
// you could use this
@import "~module-name";

// Instead of this
@import "../../node_modules/some-module/some-directory/somefile.scss";
```

Using this type of import makes scss modules easier to consume and is already used in different modules on npm. If you want to use a module that doesn't have a `style` key in it's package.json you can use the relative path import, but consider making a PR on the project!
