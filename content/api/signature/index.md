---
title: "Endpoint: signature"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: signature
    weight: 400
---

## /signature/get

```http
GET /api/v1/signature/get.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Get a user’s signature, and other signature configuration properties.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

| Parameter   | Type                                  | Description                             |
| ----------- | ------------------------------------- | --------------------------------------- |
| __`User`__  | [`smart id`](../smart-id)             | Required. The user whose list we’re modifying|

## /signature/set

```http
POST /api/v1/signature/set.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Add someone to a user’s ignore list.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

| Parameter   | Type                                  | Description                             |
| ----------- | ------------------------------------- | --------------------------------------- |
| __`User`__  | [`smart id`](../smart-id)             | Required. The user whose list we’re modifying. This must be passed as a GET argument|
| `Body`      | `string`                              | User’s signature body                                |
| `Format`     | `string`                              | Signature contents format. ‘BBCode’, ‘Markdown’, ‘Html’, ‘IPB’|
| `HideAll` | integer                             | Whether to simply hide signatures entirely|
| `HideImages`    | integer                            | Whether to hide images in signatures       |
| `HideMobile`     | integer                            | Whether to hide signatures while viewing on a mobile device|
