---
title: Smart IDs
tags:
- API
- ForeignID
- Foreign
- APIv2
- API v2
category: "apiv2"
aliases:
- /apiv2/smart-ids/
menu:
  help:
    parent: apiv2
---

Vanilla's API v2 supports smart IDs. These are specially-formatted placeholders that can transparently lookup resource IDs, based on supported criteria. For example, you can use a smart ID in an API request to lookup a category by its URL code. Another example is the ability to use a smart ID to lookup a user based on their SSO foreign IDs.

## Usage

The basic format of a smart ID is: `${field}:{value}`, where "field" is the property you're attempting the lookup with and "value" is its corresponding criteria. Vanilla will attempt to resolve the smart ID to a specific resource and substitute the row's primary ID in its place. Submitting a request to /api/v2/users/`$name:baz` will ultimately be dispatched by Vanilla as /api/v2/users/15, where 15 is the ID of a user with the name "baz".

Smart IDs can be used in three areas of a request: the path, the query and the body. When received in one of these areas of a request, Vanilla will attempt to lookup the corresponding record, based on the criteria provided. Depending on where the smart ID is used, the resolution of the target record ID is dependent on different criteria. For example, if received in the path, the URL will be used to determine what type of record we're looking up. A request to /api/v2/users/`$name:foo` will attempt to lookup a user with the name "foo", while a request to /api/v2/categories/`$name:foo` will attempt to lookup a category with the name "foo". The same smart ID is used, but the context determines which resource is queried. Similarly, when a smart ID is used in a query or the body of the request, the key of the value is used to resolve the resource. In the case of a smart ID in a query, say /api/v2/discussions?insertUserID=`$name:bar`, Vanilla will attempt to lookup a user with the name "bar", because the associated key is "insertUserID". The same request could be modified to /api/v2/discussions?categoryID=`$name:bar` and now a category with the name "bar" will used.

If a smart ID resolves to multiple rows, or none at all, a fatal error will be generated. A smart ID must resolve to exactly one row.

## Supported Fields

Categories support smart ID lookup using one of two fields:

1. name - The name of a category.
1. urlcode - The URL code of a category.

Users support smart ID lookup using one of three fields:

1. name - The name of a user.
1. email - The email address of a user. This field is only accessible if the user submitting the request has the ability to view user email addresses.
1. A foreign ID from an SSO connection. Given the key for an authentication provider, and the foreign ID of a user connected by that provider, you can resolve a foreign ID to a Vanilla user ID. For example, if a site has an authentication provider with a key of "authprovider", you could attempt to lookup a user with a foreign ID from that provider by using the following smart ID: `$authprovider:1234`. Vanilla will attempt a lookup of any users connected from "authprovider" with a foreign ID of 1234. If one is found, their local user ID will be subsituted in place of the smart ID. If no matching user is found, an error is encountered.
