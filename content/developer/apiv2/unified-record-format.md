---
title: Unified Record Format
tags:
- Developers
- Framework
- API
category: developer
menu:
  developer:
    parent: framework-apiv2
    weight: 40
aliases:
- /developers/framework/apiv2/unified-record-format
---
## Unified Record Format

For the sake of consistency and ease of consuming its endpoints, usage of common field names is recommended.

### Common Fields

* `name`: A title for the resource (e.g. a discussion's title).
* `body`: The primary text content of a resource (e.g. a comment's text).
* `format`: Field specifying what format **body** is in.
* `insertUserID`: Unique numeric ID of the user who created this resource.
* `dateInserted`:  Full datetime the resource was created.
* `insertIPAddress`: IP address associated with the user who created this resource, at the time it was created.
* `updateUserID`: Unique numeric ID of the user who last updated this resource.
* `dateUpdated`: Full datetime the resource was last updated.
* `updateIPAddress`: IP address associated with the user who last updated this resource, at the time the update was made.
* `key`: A unique string identifier for a resource (e.g. "urlCode").
* `status`: An indicator for the condition of a resource (e.g. "state").

If a resource has a field that is analogous to a common field, it should populate that field with its value. For example, if a row has a `text` field and no `body` field, and the purpose is the same, a `body` field should be added with the contents of `text`. This would be done so the data is easily consumed. No further modification of the rows is necessary. Various fields, unique to each resource type, remain in the row as part of the full dataset.

### Multi-Resource Responses

API endpoints returning datasets containing different types of resources (e.g. search) will need to include two additional fields for each row.

* `recordType`: The type of resource (e.g. discussion).
* `recordID`: The unique ID of the resource row (e.g. a discussion's numerical ID).

The unique ID field for a row should not be removed when `recordID` is added. For example, `commentID` and `recordID` are valid on a single row, simultaneously.
