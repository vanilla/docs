---
title: Schemas
layout: docs
categories: ["Developers"]
---

# Schemas

In Vanilla, the `Garden\Schema` class is used to whitelist and validate input, primarily for API endpoints.

## Usage

### Types

* Array (a) *This must be a numerically-indexed array with a zero index.*
* Object (o) *This must be an associative array.*
* Base64 (=)
* Integer (i)
* String (s)
* Float (f)
* Boolean (b)
* Timestamp (ts)
* Datetime (dt) *This value must be [a valid format.](http://php.net/manual/en/datetime.formats.php)*

### Examples

#### Basic

```php
$schema = $this->schema([
    's:name' => 'The title of the discussion.',
    's:body' => 'The body of the discussion.',
    's:format?' => 'The discussion format.', // The question mark denote that this field is optional
    'i:categoryID' => 'The category to place the discussion.',
])
->setDescription('Add a new discussion.')
->validate($body)
```

#### Object

```php
$schema = $this->schema([
    'o:user' => [
        's:name' => 'The username of the user.',
        's:email' => 'The email address of the user.'
    ]
])
```

### Array

```php
$schema = $this->schema([
    'i:userID' => 'The ID of the user.',
    'a:roleIDs' => [
        'description' => 'Role IDs for the user.',
        'items' => [
            'type' => 'integer',
            'required' => true
        ]
    ]
])
```
