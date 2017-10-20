---
title: "Endpoint: comments"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: comments
    weight: 300
---

## /comments/add

```http
POST /api/v1/comments/add.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Creates a new comment.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

Parameter           | Type      | Description
---                 | ---       | ---
__`DiscussionID`__  | `integer` | Discussion to post comment to
__`Body`__          | `string`  | Comment body
__`Format`__        | `string`  | Comment output format
`ForeignID`         | `string`  | Related foreign content identifier
`Type`              | `string`  | Comment type
