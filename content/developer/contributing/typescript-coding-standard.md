---
title: Coding Standard - Typescript
name: fuck
tags:
- Developers
- Contributing
- Coding Standard
- Typescript
- Prettier
- Linter
category: developer
menu:
  developer:
    name: Coding Standard - TS
    parent: contributing
---

As of April 2018, Vanilla will follow the following coding standard for all frontend scripts. Existing code should not (and cannot) be mass-updated, but all _new_ code must follow this standard.

We adopted this standard for all the usual reasons: our team is growing, and we want to make sure things stay consistent between our various projects, and it's annoying and hard to read when everything is styled differently. Key words in this document ("MUST", "_SHOULD_", etc.) are used as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) which is as boring and obvious as you expect but mercifully brief.


## Language Features

For code in `release/2.6` or below, no transpilation step or polyfills may be assumed.

For code in `master` or `release/2.7` the [vanilla-cli build tool](/developer/vanilla-cli/build-process-core) _MUST_ be used.

All typescript features up to typescript version 2.8 is supported. This includes anything found in the [Typescript documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html). This includes but is not limited to the following features:

- All new features in the [ES2015 (ES6) specification](https://babeljs.io/learn-es2015/).
- All new features in the [ES2016 and ES2017 specifications](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_Next_support_in_Mozilla).
- [Object Rest/Spread](https://babeljs.io/docs/plugins/transform-object-rest-spread)
- [React JSX](https://reactjs.org/docs/introducing-jsx.html)
- [ES Modules Dynamic imports through webpack](https://webpack.js.org/api/module-methods/#import-)

### Browser Support

Whether the final javascript that runs in the browser has been transpiled or not, all javascript must support the following browsers:

- IE11
- The last 2 versions of the following browsers
  - Edge
  - Firefox
  - Chrome
  - Chrome for Android
  - Safari
  - iOS Safari

## Validating your Typescript

The simplest way to validate your Typescript code is to use the [vanilla-cli build tool](/developer/vanilla-cli/build-process-core). If the a build succeeds with the no warnings or errors, then it should be valid.

Vanilla uses Prettier and TSLint to enforce coding standards on Typescript. Prettier will automatically format your code to conform to style standards, while TSLint will perform static analysis to check  code for readability, maintainability, and functionality errors.

There are multiple ways to use these tools.

### `vanilla-cli`

Running the build command from the [vanilla-cli build tool](/developer/vanilla-cli/build-process-core) will automatically format all compiled code with Prettier. Additionally it will attempt to validate the code with TSLint. Some warnings can and will be automatically fixed by TSLint. Others will require manual attention.

### IDE Integration

Prettier and TSLint have integrations with many popular IDEs and editors.

#### Prettier

Prettier's IDE integrations generally allow automatic formatting on save, on input, or manually.

- [WebStorm, PHPStorm](https://prettier.io/docs/en/webstorm.html#webstorm-20181-and-above)
- [VSCode, Atom, Sublime Text, Vim, Emacs](https://prettier.io/docs/en/editors.html)

Vanilla's prettier config can be found at [vanilla/prettier-config](https://github.com/vanilla/prettier-config) or on npm `@vanillaforums/prettier-config`.

All repositories in the `vanilla` organization are meant to be developed in the context of a [vanilla/vanilla installation](https://github.com/vanilla/vanilla). `master` and `release/2.7` and above should have these presets already installed listed in their `package.json` along with their peer-dependencies. Additionally `vanilla-cli` contains its own copies.

#### TSLint
- [WebStorm, PHPStorm](https://www.jetbrains.com/help/phpstorm/tslint.html)
- [VSCode, Atom, Vim, Emacs](https://palantir.github.io/tslint/usage/third-party-tools/)

Vanilla's TSLint config can be found at [vanilla/prettier-config](https://github.com/vanilla/tslint-config) or on npm `@vanillaforums/tslint-config`.

All repositories in the `vanilla` organization are meant to be developed in the context of a [vanilla/vanilla installation](https://github.com/vanilla/vanilla). `master` and `release/2.7` and above should have these presets already installed listed in their `package.json` along with their peer-dependencies. Additionally `vanilla-cli` contains its own copies.

## 1. Overview

- All new files in the `vanilla/vanilla` repo _MUST_ be in Typescript.

- New code _MUST NOT_ use JQuery. Instead native browser API's and utility functions from `@core/dom` may be used.

- All files _MUST_ be formatted with Prettier.

- Files _SHOULD NOT_ declare more than 1 class in a single file.

- Files with a default export _MUST_ be named equivalently to the symbol (class, function, interface, constant) that they export.

- Interfaces for code defined inside of Vanilla Forums code _MUST_ be named beginning with the character `I` (Eg. `IThing`, `IButtonOptions`). This rule does not apply to type definitions for dependencies.

- Method names _SHOULD_ be declared in `camelCase`.

- Static class properties _MUST_ be declared in all upper case with underscore separators.

- Class names _MUST_ be declared in `PascalCase`.

- `const` _MUST_ be used where possible. Otherwise `let` _MUST_ be used. `var` _MUST NOT_ be used.

- `===` _MUST_ be used instead of `==`. An exception is made for null checks specifically `someVar == null`.

- A file _MUST NOT_ contain unused imports.

- Test files _MUST_ be located in a directory `__tests__` and end with the extension `.test.ts` or `.test.js`.

- `console.log` and other built in logging functions _MUST NOT_ be used. Instead logging functions from `@core/utility` may be used.

### 1.1. Styling rules

All files _MUST_ be formatted with Prettier. This is to ensure consistent formatting, and to prevent overly large diffs if someone when someone else formats a file. This encompasses all spacing and formatting rules. The following rules among others will all be automatically enforced by formatting with Prettier.

- Code _MUST_ use 4 spaces for indenting, not tabs.

- Opening braces for classes and functions _MUST_ be on the same line.

- Control structure keywords _MUST_ have one space after them; method and
  function calls _MUST NOT_.

- Opening braces for control structures _MUST_ go on the same line, and closing
  braces _MUST_ go on the next line after the body.

- Opening parentheses for control structures _MUST NOT_ have a space after them,
  and closing parentheses for control structures _MUST NOT_ have a space before.

- Lines _MUST_ be less than 120 characters or less.

- Semicolons are REQUIRED;

- Colons in object and interface declarations _MUST NOT_ be preceeded by a space and _MUST_ be followed by a space.

- Object and array declarations _MUST_ contain a trailing comma, if it is declared on multiple lines.

### 1.2. Example

This example encompasses some of the rules below as a quick overview:

```ts
/**
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license http://www.opensource.org/licenses/gpl-2.0.php GPLv2
 */

/**
 * The is the foo class that does foo.
 *
 * This is a longer description that spans multiple
 * lines.
 */
export default class SomeClass extends ParentClass implements ISome {

    /**
     * The is a method that does a thing.
     *
     * This is a longer description that spans multiple
     * lines.
     *
     * @param a Must be a full sentence if provided.
     * @param b Must be a full sentence if provided.
     *
     * @returns Must be a full sentence if provided.
     */
    public function sampleFunction(a: string, b?:  = string): boolean{
        if (a === b) {
            return bar();
        } else if (a > b) {
            return foo->bar(a);
        } else {
            return BazClass.bar(a, b);
        }
    }
}
```

## 2. Isolating legacy code

New code _MUST NOT_ use JQuery. Instead native browser API's and utility functions from `@core/dom` may be used.

An exception is made to this rule for code being gradually ported into the new code base, but does not have a long term future. This code _MUST_ be contained in a directory call `legacy`. At some point in the future legacy code will be completely removed so anything important enough to save _SHOULD_ be migrated into the either `@core/application`, `@core/utility`, or `@core/dom`, without a dependency on JQuery.

New code _MUST NOT_ access methods or properties in the global `Vanilla` or `gdn` objects. Instead functions from `@core/utility` and `@core/application` may be used.

## 3. General

### 3.1. Files
All files _MUST_ use the Unix LF (linefeed) line ending.

All files _MUST_ end with a single blank line.

A file wiht a default export _MUST_ be named the same as the export.

### 3.2. Character Encoding

Code _MUST_ use only UTF-8 without BOM.

### 3.3. Lines

There _MUST NOT_ be a hard limit on line length.

The soft limit on line length _MUST_ be 120 characters; automated style checkers
_MUST_ warn but _MUST NOT_ error at the soft limit.

Lines _MUST NOT_ be longer than 120 characters; lines longer than that MUST
be split into multiple subsequent lines of no more than 120 characters each.

There _MUST NOT_ be trailing whitespace of any kind.

Blank lines _MAY_ be added to improve readability and to indicate related blocks of code.

There _MUST NOT_ be more than one statement per line.

### 3.4. Indenting

Code _MUST_ use an indent of 4 spaces, and _MUST NOT_ use tabs for indenting.

<aside class="note">
N.b.: Using only spaces, and not mixing spaces with tabs, helps to avoid
problems with diffs, patches, history, and annotations.
</aside>

## 4. Namespaces, Types, and Interfaces

### Namespaces

Typescript namespaces _MUST NOT_ be used. ES Modules _MUST_ be used instead.

### 4.1. Types and Interfaces

- Interfaces names _MUST_ be prefixed with the an uppercase `I` eg. `IProps`, `IState`.

- Interfaces _MUST_ be used instead of type literals. Eg.

```ts
// Good
interface IThing {
    foo: number;
}

// Bad
type IOtherThing = {
    foo: number;
}
```

### 4.2. Type casting

- When casting a type the `variable as IType` syntax _MUST_ be used.

- When casting a type the `<IType>variable` syntax _MUST NOT_ be used.

```ts
interface IFoo {
    foo: string;
}

// Good
(getFooLikeStructure() as IFoo).foo;

// Bad
(<IFoo>getFooLikeStructure()).foo;
```

### 4.3. Forbidden Types

The following types _MUST_ not be used. Instead their alternatives should be used.

| Forbidden Type | Reason | Alternative |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Boolean` | This type refers to non-primitive boxed object that are almost never used appropriately in JavaScript code. | Use `boolean` |
| `Number` | This type refers to non-primitive boxed object that are almost never used appropriately in JavaScript code. | Use `number` |
| `String` | This type refers to non-primitive boxed object that are almost never used appropriately in JavaScript code. | Use `string` |
| `Symbol` | This type refers to non-primitive boxed object that are almost never used appropriately in JavaScript code. | Use `symbol` |
| `Object` | This type refers to non-primitive boxed object that are almost never used appropriately in JavaScript code. | An interface is the preferred method method of annotating an object. If you do not know the contents, use the `any` type. If you actually are trying to refer to the primitive object type use `object`. |
| `Function` | Function is overly generic descriptor. If you are accepting a function you should be more specific about the properties and return types. If you are to pass the function arguments, those should be in the type declaration.  | Use a explicit function declaration `() => void` or `(arg1: string) => boolean`. |

## 5. Class Constants, Properties, and Methods

### 5.1. Static class properties

Static class properties _MUST_ be declared in all upper case with underscore separators.

```ts

class Foo {
    public static VERSION = '1.0';
    public static DATE_APPROVED = '2012-06-01';
}
```

### 5.2. Extends and Implements

The `extends` and `implements` keywords _MUST_ be declared on the same line as
the class name.

The opening brace for the class _MUST_ go on the same line as the class name; the closing brace
for the class _MUST_ go on the next line after the body.

```ts
class ClassName extends ParentClass implements ArrayAccess, Countable {
    // constants, properties, methods
}
```

Lists of `implements` _MAY_ be split across multiple lines, where each
subsequent line is indented once. When doing so, the first item in the list
_MUST_ be on the next line, and there _MUST_ be only one interface per line.

```ts
export default class ClassName extends ParentClass implements
    ArrayAccess,
    Countable,
    Serializable
{
    // constants, properties, methods
}
```

### 5.3. Properties

Visibility _MUST_ be declared on all properties.

A type declaration _SHOULD_ be declared on all properties.

There _MUST NOT_ be more than one property declared per statement.

Private properties _SHOULD_ use the the private or protected visibility instead of prefix with a single underscore. A single underscore _MAY_ be used to denote a internal property that must still be exported, but should not be used elsewhere.

A property declaration looks like the following.

```ts
export default class ClassName {
    public foo = null;
}
```

### 5.4. Methods

Method names _MUST_ be declared in `camelCase()`.

Visibility _MUST_ be declared on all methods.

Private methods _SHOULD_ use the the private or protected visibility instead of prefix with a single underscore. A single underscore _MAY_ be used to denote a internal method that must still be exported, but should not be used elsewhere.

Method names _MUST NOT_ be declared with a space after the method name. The opening brace _MUST_ go on the same line as the method name, and the closing brace _MUST_ go on the next line following the body. There _MUST NOT_ be a space after the opening parenthesis, and there _MUST NOT_ be a space before the closing parenthesis.

A method declaration looks like the following. Note the placement of
parentheses, commas, spaces, and braces:

```ts
export default class ClassName {
    public static function fooBarBaz(arg1: string, arg2: number , arg3?: IOptions[] = []) {
        // method body
    }
}
```

### 5.5 Method and property order

Properties and methods _MUST_ be implemented and in the following order.

- public-static-field
- public-static-method
- protected-static-field
- protected-static-method
- private-static-field
- private-static-method
- public-instance-field
- protected-instance-field
- private-instance-field
- constructor
- public-instance-method
- protected-instance-method
- private-instance-method

### 5.6 Methods with a bound `this` context

When passing a method as callback or as an event handler, it often necessary to bind the this context.

The context _SHOULD NOT_ be bound in the constructor or at the call site.

The context _SHOULD_ be bound by declaring the method as a class property with an arrow function like so:

```ts
export default class ClassName {

    // This method will automatically have it's context bound as the class instance.
    public static fooBarBaz = (arg1: string, arg2: number , arg3?: IOptions[] = []) => {
        // method body
    }
}
```

### 5.7. `abstract` and `static`

When present, the `abstract` declaration _MUST_ precede the
visibility declaration.

When present, the `static` declaration _MUST_ come after the visibility
declaration.

```php
<?php

abstract class ClassName {
    protected static $foo;

    abstract protected function zim();

    final public static function bar() {
        // method body
    }
}
```

## 6. Variables, Objects & Functions

### 6.1. Variable declarations

- `const` _MUST_ be used where possible. Otherwise `let` _MUST_ be used. `var` _MUST NOT_ be used.

- Multiple variables _MUST NOT_ be declared at once.

```ts
// Good
const foo = "foo";
const bar = "bar";

// Bad
const foo = "foo",
    bar = "bar";

let thing1, thing2, thing3;
```

- Variables _MUST_ be named in either `lowerCamelCased` or `UPPER_CASED` formatting.

### 6.2. Objects

- Objects keys `MUST_NOT` use quotes unless necessary.

```ts
const object = {
    lookMa: "noQuotes",
    "quote-are-necessary-here",
}
```

- Object literal shorthand _MUST_ be used where possible.

```ts
const foo = "foo";
const bar = "bar";

// Good
const good = {
    foo,
    bar,
    other: "other",
};

// Bad
const bad = {
    foo: foo,
    bar: bar,
    other: "other",
};
```

- The "spread" operator _MUST_ be used instead of `Object.assign`.

```ts
const thing1 = {
    foo: "foo",
};

const thing2 = {
    bar: "bar",
};

// Good
const good = {
    other: "other",
    ...thing1,
    ...thing2,
};

// Bad
const bad = Object.assign(
    {},
    thing1,
    thing2
);
```

### 6.3. Declaring functions

Functions _MUST_ be declared as
  - An arrow function.
  - A named function.
  - A function declaration.

Anonymous functions that are not an arrow function _MUST NOT_ be used.

```ts
// Good
function foo(event: ClickEvent) {}

const foo = function foo(event: ClickEvent) {};

const foo = (event: ClickEvent) => {};

document.addEventListener("click", (event: ClickEvent) => {})

document.addEventListener("click", foo);

// Bad
const foo = function() {};

document.addEventListener("click", function(event: ClickEvent) {})
```

### 6.4. Calling Functions

When making a method or function call, there _MUST NOT_ be a space between the
method or function name and the opening parenthesis, there _MUST NOT_ be a space
after the opening parenthesis, and there _MUST NOT_ be a space before the
closing parenthesis. In the argument list, there _MUST NOT_ be a space before
each comma, and there _MUST_ be one space after each comma.

```ts
bar();
foo.bar($arg1);
Foo.baz($arg2, $arg3);
```

Argument lists _MAY_ be split across multiple lines, where each subsequent line
is indented once. When doing so, the first item in the list _MUST_ be on the
next line, and there _MUST_ be only one argument per line.

```ts
foo.bar(
    $longArgument,
    $longerArgument,
    $muchLongerArgument
);
```

## 57 Control Structures

The general style rules for control structures are as follows. Many are automatically enforced by Prettier.

- There _MUST_ be one space after the control structure keyword
- There _MUST NOT_ be a space after the opening parenthesis
- There _MUST NOT_ be a space before the closing parenthesis
- There _MUST_ be one space between the closing parenthesis and the opening
  brace
- The structure body _MUST_ be indented once
- The closing brace _MUST_ be on the next line after the body

The body of each structure _MUST_ be enclosed by braces. This standardizes how
the structures look, and reduces the likelihood of introducing errors as new
lines get added to the body.

### 7.1. `if`, `elseif`, `else`

An `if` structure looks like the following. Note the placement of parentheses,
spaces, and braces; and that `else` and `elseif` are on the same line as the
closing brace from the earlier body.

```ts
if (expr1) {
    // if body
} else if (expr2) {
    // else if body
} else {
    // else body;
}
```

The keyword `elseif` _SHOULD_ be used instead of `else if` so that all control
keywords look like single words.

If statements _MUST_ have opening and closing brackets and be split onto multiple lines. Single line if statements are prohibited.

### 7.2. `switch`, `case`

A `switch` structure looks like the following. Note the placement of
parentheses, spaces, and braces. The `case` statement _MUST_ be indented once
from `switch`, and the `break` keyword (or other terminating keyword) _MUST_ be
indented at the same level as the `case` body. There _MUST_ be a comment such as
`// no break` when fall-through is intentional in a non-empty `case` body.

```ts
switch (expr) {
    case 0:
        doThing('First case, with a break');
        break;
    case 1:
        doThing('Second case, which falls through');
        // no break
    case 2:
    case 3:
    case 4:
        doThing('Third case, return instead of break');
        return;
    default:
        doThing('Default case');
        break;
}
```

### 7.3. `for of`, `forEach`, and `for in`

`for of` and `foreach` are preferred over `for in`.

```ts
const arrayVals = [1, 2, 3, 4];
const objectVals = {
    key: "value",
};

arrayVals.forEach(val => {
    // Do something
});

// Iterate over an object
for (const [key, value] of Object.entries(objectVals)) {
    // do something
}
```

A `for in` loop _MUST_ contain a `hasOwnProperty()` check.

```ts
for (const key in objectVals) {
    if (objectVals.hasOwnProperty(key)) {
        // Do something
    }
}
```

### 8. Doc Blocks

- Classes _MUST_ contain a multi-line description comment.

- Class methods and properties _MUST_ contain a visibility declaration.

- All files _MUST_ contain an opening multi-line comment containing `@copyright 2009-2018 Vanilla Forums Inc.` where 2018 shall be replaced with the current year. Scripts in open source projects _MUST_ contain an `@license` parameter with name and link to license of the project it is contained in. For example a file in the `vanilla/vanilla` repo, which is licensed under GPLv2 _MUST_ contain `@license http://www.opensource.org/licenses/gpl-2.0.php GPLv2`.

- All functions, except for anonymous functions, and all class methods, _MUST_ contain a multi-line JSDoc style comment. This comment:
  - _MUST_ contain a short description.
  - _MAY_ contain an extended description.
  - _MAY_ contain `@param` annotations.
  - _MUST NOT_ contain type hints in its `@param` or `@returns` annoations. Type hints should be declared directly as part of the function signature.
  - _MUST NOT_ align its `@param` descriptions by using additional spaces.
  - _MAY_ contain a single `@returns` annotation.
