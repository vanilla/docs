---
title: Coding Standard - PHP
tags:
- Developers
- Contributing
- Coding Standard
- PHP
category: developer
menu:
  developer:
    parent: contributing
aliases:
- /developers/contributing/coding-standard
- /developer/contributing/coding-standard
---

As of May 2014, Vanilla will adhere to [PSR-2] \(and therefore [PSR-1]) with a few exceptions. We have been mass-updating our source code as possible without breaking backwards compatibility (most notably by refraining from changing the casing of existing variables).

We've named our primary exception to PSR-2 the **[Lord Brackos](https://twitter.com/linc/status/462308222427480065)** rule - Same-line open braces on all classes, method, and function definitions.

We adopted this standard for all the usual reasons: our team is growing, and we want to make sure things stay consistent between our various projects, and it's annoying and hard to read when everything is styled differently. Key words in this document ("MUST", "SHOULD", etc.) are used as described in [RFC 2119] which is as boring and obvious as you expect but mercifully brief.

## PHP Version

All code in `master` must work under PHP 7.0, but we strongly recommend using 7.2.

All code in `release/2.5` must work under PHP 5.6.

All code in `release/2.3` must work under PHP 5.4.

For up-to-date information you can look at our [self-hosting-requirements](https://github.com/vanilla/vanilla/tree/master#self-hosting-requirements) section.

## Validating your PHP code

CodeSniffer is a tool you can plug into your IDE or run from the command line to help you adhere to a coding standard like this one. This installation guide requires PHP >= 7 and composer to be installed.

1. Get CodeSniffer 3.x: `composer global require squizlabs/php_codesniffer "^3.0"`.
1. Ensure that composer's `bin` directory is on your path. If it is `which phpcs` should return a path similar to the following: `~/.composer/vendor/bin/phpcs`
1. Get the Vanilla Standard from our [Standards repo](https://github.com/vanilla/standards)

Keep note of the path where you copied/cloned the `vanilla/standards` repo. This will be referred to as `PATH_TO_STANDARDS_REPO`.

### CodeSniffer PHPStorm Integration

1. Go to your PHP Preferences.
1. Navigate to `Languages & Frameworks > PHP > Code Sniffer`.
1. Click on the `...` next to `Configuration`.
1. Set the path to your `phpcs`. This can be found by running `which phpcs`.
1. Click `Apply`.
1. Navigate to `Editor > Inspections > PHP > PHP Code Sniffer Validation`
1. In the right pane set your `Coding standard` to custom.
1. Click the `...`.
1. Set "Path to ruleset" to `PATH_TO_STANDARDS_REPO/code-sniffer/Vanilla`.

### CodeSniffer from the Command Line

It is not recomended that you attempt to run `phpcs` on the full Vanilla repo. It is likely you will experience a memory exhaustion error if you attempt to.

```shell
phpcs --standard=/PATH_TO_STANDARDS_REPO/code-sniffer/Vanilla /file/or/dir/to/check
```

Thus ends the readable part of your adventure as you descend into the dry, technical blather of a coding standard. Godspeed, coding warrior.

[RFC 2119]: http://www.ietf.org/rfc/rfc2119.txt
[PSR-1]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md
[PSR-2]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md

### PHPStorm Code Style

In order to enable the PHPStorm `Code > Reformat Code` command to be of any use, your PHPStorm `Editor > Code Style > PHP` needs to be configured.

1. Download the <a href="/documents/VanillaPHPStormCodingStyle.xml" download>Vanilla PHPStorm Code Style</a>.
1. Navigate to `Editor > Code Style > PHP`
1. Open the Settings/Cogwheel dropdown at the top.
1. Use `Import Scheme > Intellij IDEA code style XML` to import the downloaded configuration.

## 1. Overview

- Code MUST use 4 spaces for indenting, not tabs.

- Opening braces for classes and functions SHOULD be on the same line.

- Control structure keywords MUST have one space after them; method and
  function calls MUST NOT.

- Opening braces for control structures MUST go on the same line, and closing
  braces MUST go on the next line after the body.

- Opening parentheses for control structures MUST NOT have a space after them,
  and closing parentheses for control structures MUST NOT have a space before.

- There MUST NOT be a hard limit on line length; the soft limit MUST be 120
  characters; lines SHOULD be 80 characters or less.

- Namespace is not required.

- Files MUST use only `<?php` tag.

- Files MUST use only UTF-8 without BOM for PHP code.

- Files SHOULD *either* declare symbols (classes, functions, constants, etc.)
  *or* cause side-effects (e.g. generate output, change .ini settings, etc.)
  but SHOULD NOT do both.

- Class names MUST be declared in `StudlyCaps`.

- Class constants MUST be declared in all upper case with underscore separators.

- Method names SHOULD be declared in `camelCase`.

- View files are excluded from this standard.  You SHOULD try to follow as many rules as possible.


[PSR-1]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md


### 1.1. Example

This example encompasses some of the rules below as a quick overview:

```php
<?php
/**
 * @copyright 2009-2014 Vanilla Forums Inc.
 * @license http://www.opensource.org/licenses/gpl-2.0.php GPLv2
 */

/**
 * The is the foo class that does foo.
 *
 * This is a longer description that spans multiple
 * lines.
 */
class Foo extends Bar implements FooInterface {
    /**
     * The is the foo class that does foo.
     *
     * This is a longer description that spans multiple
     * lines.
     *
     * @param string $a Must be a full sentence.
     * @param string|null $b Must be a full sentence.
     *
     * @return bool
     */
    public function sampleFunction($a, $b = null) {
        if ($a === $b) {
            bar();
        } elseif ($a > $b) {
            $foo->bar($arg1);
        } else {
            BazClass::bar($arg2, $arg3);
        }

        return true;
    }


}
```


## 2. General

### 2.1. Files
All PHP files MUST use the Unix LF (linefeed) line ending.

All PHP files MUST end with a single blank line.

The closing `?>` tag MUST be omitted from files containing only PHP.

All view files are excluded from this standard.  You SHOULD try to follow as many rules as possible.

### 2.2. PHP Tags

PHP code MUST use the long `<?php ?>` tags; it
MUST NOT use the other tag variations.

### 2.3. Character Encoding

PHP code MUST use only UTF-8 without BOM.

### 2.4. Side Effects

A file SHOULD declare new symbols (classes, functions, constants,
etc.) and cause no other side effects, or it SHOULD execute logic with side
effects, but SHOULD NOT do both.

The phrase "side effects" means execution of logic not directly related to
declaring classes, functions, constants, etc., *merely from including the
file*.

"Side effects" include but are not limited to: generating output, explicit
use of `require` or `include`, connecting to external services, modifying ini
settings, emitting errors or exceptions, modifying global or static variables,
reading from or writing to a file, and so on.

The following is an example of a file with both declarations and side effects;
i.e, an example of what to avoid:

```php
<?php
// side effect: change ini settings
ini_set('error_reporting', E_ALL);

// side effect: loads a file
include "file.php";

// side effect: generates output
echo "<html>\n";

// declaration
function foo() {
    // function body
}
```

The following example is of a file that contains declarations without side
effects; i.e., an example of what to emulate:

```php
<?php
// declaration
function foo() {
    // function body
}

// conditional declaration is *not* a side effect
if (! function_exists('bar')) {
    function bar() {
        // function body
    }
}
```

### 2.5. Lines

There MUST NOT be a hard limit on line length.

The soft limit on line length MUST be 120 characters; automated style checkers
MUST warn but MUST NOT error at the soft limit.

Lines SHOULD NOT be longer than 80 characters; lines longer than that SHOULD
be split into multiple subsequent lines of no more than 80 characters each.

There MUST NOT be trailing whitespace at the end of non-blank lines.

Blank lines MAY be added to improve readability and to indicate related
blocks of code.

There MUST NOT be more than one statement per line.

### 2.6. Indenting

Code MUST use an indent of 4 spaces, and MUST NOT use tabs for indenting.

<aside class="note">
N.b.: Using only spaces, and not mixing spaces with tabs, helps to avoid
problems with diffs, patches, history, and annotations. The use of spaces
also makes it easy to insert fine-grained sub-indentation for inter-line
alignment.
</aside>

### 2.7. Keywords and True/False/Null

PHP [keywords] MUST be in lower case.

The PHP constants `true`, `false`, and `null` MUST be in lower case.

[keywords]: http://php.net/manual/en/reserved.keywords.php


## 3. Namespace and Use Declarations

No requirements.


### 4. Class Constants, Properties, and Methods

The term "class" refers to all classes, interfaces, and traits.

### 4.1. Constants

Class constants MUST be declared in all upper case with underscore separators.
For example:

```php
<?php
namespace Vendor\Model;

class Foo {
    const VERSION = '1.0';
    const DATE_APPROVED = '2012-06-01';
}
```

### 4.2. Extends and Implements

The `extends` and `implements` keywords MUST be declared on the same line as
the class name.

The opening brace for the class MUST go on the same line as the class name; the closing brace
for the class MUST go on the next line after the body.

```php
<?php

class ClassName extends ParentClass implements \ArrayAccess, \Countable {
    // constants, properties, methods
}
```

Lists of `implements` MAY be split across multiple lines, where each
subsequent line is indented once. When doing so, the first item in the list
MUST be on the next line, and there MUST be only one interface per line.

```php
<?php

class ClassName extends ParentClass implements
    \ArrayAccess,
    \Countable,
    \Serializable
{
    // constants, properties, methods
}
```

### 4.3. Properties

Visibility MUST be declared on all properties.

The `var` keyword MUST NOT be used to declare a property.

There MUST NOT be more than one property declared per statement.

Property names SHOULD NOT be prefixed with a single underscore to indicate
protected or private visibility.

A property declaration looks like the following.

```php
<?php

class ClassName {
    public $foo = null;
}
```

### 4.4. Methods

Method names MUST be declared in `camelCase()`.

Visibility MUST be declared on all methods.

Method names SHOULD NOT be prefixed with a single underscore to indicate
protected or private visibility.

Method names MUST NOT be declared with a space after the method name. The
opening brace MUST go on the same line as the method name, and the closing brace MUST go on the
next line following the body. There MUST NOT be a space after the opening
parenthesis, and there MUST NOT be a space before the closing parenthesis.

A method declaration looks like the following. Note the placement of
parentheses, commas, spaces, and braces:

```php
<?php

class ClassName {
    public function fooBarBaz($arg1, &$arg2, $arg3 = []) {
        // method body
    }
}
```

#### Event method exception

One major exception to this rule is Event Methods. Any method that has the following patterns:

```
'_handler',
'_create',
'_before',
'_override',
'_after',
'controller_',
```

Event methods MUST be `camelCase` separated by `_`.

#### API method exception

Another exception to this rule is `Controller` methods. Controllers routed through `ResourceRoute` may have methods prefixed with any of the following:

```
'get_',
'patch_',
'post_',
'index_',
'put_',
'options_',
'delete_',
```

### 4.5. Method Arguments

In the argument list, there MUST NOT be a space before each comma, and there
MUST be one space after each comma.

Method arguments with default values MUST go at the end of the argument
list.

```php
<?php

class ClassName {
    public function foo($arg1, &$arg2, $arg3 = []) {
        // method body
    }
}
```

Argument lists MAY be split across multiple lines, where each subsequent line
is indented once. When doing so, the first item in the list MUST be on the
next line, and there MUST be only one argument per line.

When the argument list is split across multiple lines, the closing parenthesis
and opening brace MUST be placed together on their own line with one space
between them.

```php
<?php

class ClassName {
    public function aVeryLongMethodName(
        ClassTypeHint $arg1,
        &$arg2,
        array $arg3 = []
    ) {
        // method body
    }
}
```
### 4.6. Global Functions

New global functions __MUST NOT__ be created.

### 4.7. `abstract`, `final`, and `static`

When present, the `abstract` and `final` declarations MUST precede the
visibility declaration.

When present, the `static` declaration MUST come after the visibility
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

### 4.8. Method and Function Calls

When making a method or function call, there MUST NOT be a space between the
method or function name and the opening parenthesis, there MUST NOT be a space
after the opening parenthesis, and there MUST NOT be a space before the
closing parenthesis. In the argument list, there MUST NOT be a space before
each comma, and there MUST be one space after each comma.

```php
<?php
bar();
$foo->bar($arg1);
Foo::bar($arg2, $arg3);
```

Argument lists MAY be split across multiple lines, where each subsequent line
is indented once. When doing so, the first item in the list MUST be on the
next line, and there MUST be only one argument per line.

```php
<?php
$foo->bar(
    $longArgument,
    $longerArgument,
    $muchLongerArgument
);
```

## 5. Control Structures

The general style rules for control structures are as follows:

- There MUST be one space after the control structure keyword
- There MUST NOT be a space after the opening parenthesis
- There MUST NOT be a space before the closing parenthesis
- There MUST be one space between the closing parenthesis and the opening
  brace
- The structure body MUST be indented once
- The closing brace MUST be on the next line after the body

The body of each structure MUST be enclosed by braces. This standardizes how
the structures look, and reduces the likelihood of introducing errors as new
lines get added to the body.


### 5.1. `if`, `elseif`, `else`

An `if` structure looks like the following. Note the placement of parentheses,
spaces, and braces; and that `else` and `elseif` are on the same line as the
closing brace from the earlier body.

```php
<?php
if ($expr1) {
    // if body
} elseif ($expr2) {
    // elseif body
} else {
    // else body;
}
```

The keyword `elseif` SHOULD be used instead of `else if` so that all control
keywords look like single words.


### 5.2. `switch`, `case`

A `switch` structure looks like the following. Note the placement of
parentheses, spaces, and braces. The `case` statement MUST be indented once
from `switch`, and the `break` keyword (or other terminating keyword) MUST be
indented at the same level as the `case` body. There MUST be a comment such as
`// no break` when fall-through is intentional in a non-empty `case` body.

```php
<?php
switch ($expr) {
    case 0:
        echo 'First case, with a break';
        break;
    case 1:
        echo 'Second case, which falls through';
        // no break
    case 2:
    case 3:
    case 4:
        echo 'Third case, return instead of break';
        return;
    default:
        echo 'Default case';
        break;
}
```


### 5.3. `while`, `do while`

A `while` statement looks like the following. Note the placement of
parentheses, spaces, and braces.

```php
<?php
while ($expr) {
    // structure body
}
```

Similarly, a `do while` statement looks like the following. Note the placement
of parentheses, spaces, and braces.

```php
<?php
do {
    // structure body;
} while ($expr);
```

### 5.4. `for`

A `for` statement looks like the following. Note the placement of parentheses,
spaces, and braces.

```php
<?php
for ($i = 0; $i < 10; $i++) {
    // for body
}
```

### 5.5. `foreach`

A `foreach` statement looks like the following. Note the placement of
parentheses, spaces, and braces.

```php
<?php
foreach ($iterable as $key => $value) {
    // foreach body
}
```

### 5.6. `try`, `catch`

A `try catch` block looks like the following. Note the placement of
parentheses, spaces, and braces.

```php
<?php
try {
    // try body
} catch (FirstExceptionType $e) {
    // catch body
} catch (OtherExceptionType $e) {
    // catch body
}
```

## 6. Closures

Closures MUST be declared with a space after the `function` keyword, and a
space before and after the `use` keyword.

The opening brace MUST go on the same line, and the closing brace MUST go on
the next line following the body.

There MUST NOT be a space after the opening parenthesis of the argument list
or variable list, and there MUST NOT be a space before the closing parenthesis
of the argument list or variable list.

In the argument list and variable list, there MUST NOT be a space before each
comma, and there MUST be one space after each comma.

Closure arguments with default values MUST go at the end of the argument
list.

A closure declaration looks like the following. Note the placement of
parentheses, commas, spaces, and braces:

```php
<?php
$closureWithArgs = function ($arg1, $arg2) {
    // body
};

$closureWithArgsAndVars = function ($arg1, $arg2) use ($var1, $var2) {
    // body
};
```

Argument lists and variable lists MAY be split across multiple lines, where
each subsequent line is indented once. When doing so, the first item in the
list MUST be on the next line, and there MUST be only one argument or variable
per line.

When the ending list (whether or arguments or variables) is split across
multiple lines, the closing parenthesis and opening brace MUST be placed
together on their own line with one space between them.

The following are examples of closures with and without argument lists and
variable lists split across multiple lines.

```php
<?php
$longArgs_noVars = function (
    $longArgument,
    $longerArgument,
    $muchLongerArgument
) {
   // body
};

$noArgs_longVars = function () use (
    $longVar1,
    $longerVar2,
    $muchLongerVar3
) {
   // body
};

$longArgs_longVars = function (
    $longArgument,
    $longerArgument,
    $muchLongerArgument
) use (
    $longVar1,
    $longerVar2,
    $muchLongerVar3
) {
   // body
};

$longArgs_shortVars = function (
    $longArgument,
    $longerArgument,
    $muchLongerArgument
) use ($var1) {
   // body
};

$shortArgs_longVars = function ($arg) use (
    $longVar1,
    $longerVar2,
    $muchLongerVar3
) {
   // body
};
```

Note that the formatting rules also apply when the closure is used directly
in a function or method call as an argument.

```php
<?php
$foo->bar(
    $arg1,
    function ($arg2) use ($var1) {
        // body
    },
    $arg3
);
```

## 7. Doc Blocks

- Descriptions MUST BE a full sentence with a capital to start and period to end

- A short description MUST be provided

- There MUST be one empty line after the short description.

- Param annotations with a description MUST be provided UNLESS
  - An `@inheritdoc` param is provided.

- If a long description is provided there MUST be an empty line after it

- There MUST be one space before and after parameters


```php
/**
 * Short description.
 * 
 * This a long description. It has more detail than a short one. I must be a sentence with a full stop.
 *
 * @param string $string Parameter descriptions must be a sentence with full stop.
 *
 * @return bool True if user is added else false.
 */

/**
 * @inheritdoc
 */
```

## 8. Conclusion

There are many elements of style and practice intentionally omitted by this
guide. These include but are not limited to:

- Declaration of global variables and global constants

- Operators and assignment

- Inter-line alignment

- Class name prefixes and suffixes

- Best practices

Future recommendations MAY revise and extend this guide to address those or
other elements of style and practice.
