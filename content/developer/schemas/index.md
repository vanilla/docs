---
title: Schemas
tags:
- Developers
category: developer
menu:
  developer:
    identifier: schemas
aliases:
- /developers/schemas
---

# Schemas

## Garden\Schema

In Vanilla, the `Garden\Schema` class is used to whitelist parameters for a data structure and validate array of data.  It is primarily used for filtering input to API endpoints.

The constructor of `Garden\Schema` accepts an associative array, describing the expected parameters.  The keys of the array define the name of a parameter and its flags (e.g. data type, is required). The values of the array provide a description for each parameter.

A parameter can be defined as having one of the following types: 

* Array (a) *This must be a numerically-indexed array with a zero index.*
* Object (o) *This must be an associative array.*
* Base64 (=)
* Integer (i)
* String (s)
* Float (f)
* Boolean (b)
* Timestamp (ts)
* Datetime (dt) *This value must be [in a valid format.](http://php.net/manual/en/datetime.formats.php)*

If a parameter's name is followed by a question mark (?), it is flagged as optional.

## Validating

To validate an array, you must pass it to an instance's `Garden\Schema::validate` function.  This will validate the incoming array's structure and data against the schema's configuration.  If a required parameter is not detected, or a configured parameter does not match its specified type, an exception of `Garden\Exception\ValidationException` is thrown, describing all errors encountered while validating the array.  Unexpected parameters are handled based on the schema's configured validation behavior.

## Validation Behavior

When `Garden\Schema` encounters a parameter that has not been explicitly defined, it can handle things a few different ways, depending on how it is configured.  Configuring the behavior is done by passing one of the `Garden\Schema::VALIDATE_*` constants to an instance's `Garden\Schema::setValidationBehavior` function.

The available validation constants are:

* `Garden\Schema::VALIDATE_EXCEPTION` - Throw a `Garden\Exception\ValidationException` when an unexpected parameter is encountered.
* `Garden\Schema::VALIDATE_NOTICE` - This is the default behavior.  Trigger a PHP notice when an unexpected parameter is encountered, then remove it and continue.
* `Garden\Schema::VALIDATE_REMOVE` - Silently remove any unexpected parameters.

#### Basic Example

This is a basic schema with only top-level parameters.

```php
$schema = new Garden\Schema();
$schema([
    's:name' => 'The title of the discussion.',
    's:body' => 'The body of the discussion.',
    's:format?' => 'The discussion format.',
    'i:categoryID' => 'The category to place the discussion.',
])
->setDescription('Add a new discussion.')
->validate($body)
```

In this example, there are four parameters:

1. `name` (string, required) - The title of the discussion.
2. `body` (string, required) - The body of the discussion.
3. `format` (string, optional) - The discussion format.
4. `categoryID` (integer, required) - The category to place the discussion. 

#### Nested Example

Schemas can also be written to allow the inclusion of objects as parameters.

```php
$schema = new Garden\Schema();
$schema([
    'o:user' => [
        's:name' => 'The username of the user.',
        's:email' => 'The email address of the user.'
    ]
])
```

This example shows how to define an object as a parameter, as well defining requirements for its properties. `user` __*must*__ be an associative array and it __*must*__ include `name` and `email` keys, each with string values.
