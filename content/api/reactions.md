---
title: "Endpoint: reactions"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: reactions
    weight: 400
---

## /reactions/list

```http
GET /api/v1/reactions/list.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Retrieve a list of reactions.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

None

## /reactions/get

```http
GET /api/v1/reactions/get.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Retrieve a reaction by UrlCode

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

| Parameter      | Type                                  | Description                             |
| -----------    | ------------------------------------- | --------------------------------------- |
| __`UrlCode`__  | `string`            			 | Required. Reaction to retrieve          |

## /reactions/add

```http
POST /api/v1/reactions/add.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Creates a new reaction.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter  | Type                      | Description                |
| ---------- | ------------------------- | -------------------------- |
| __`UrlCode`__  | `string`            			 | Required. URL code (slug) for new reaction         |
| __`Name`__    | `string`                  | Required. Reaction name            |
| `Description`    | `string`                  | Description of reaction           |
| `Class`    | `string`                  | Class, or grouping, of this reaction        |
| `Points`    | `string`                  | Points awarded for reaction       |

{{% /scrollableTables %}}

## /reactions/edit

```http
POST /api/v1/reactions/edit.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Modifies an existing reaction.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter  | Type                      | Description                              |
| ---------- | ------------------------- | ---------------------------------------- |
| __`UrlCode`__ | `string`   | Required. URL code (slug) of reaction|
|`Name` | `string`   | Required. Reaction name|
|`Description` | `string`   | Description of reaction|
|`Class` | `string`   | Class,  or grouping of this reaction|
|`Points` | `string`   | Points awarded for reaction|

{{% /scrollableTables %}}

## /reactions/toggle

```http
POST /api/v1/reactions/toggle.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Activate or de-activate a reaction.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

| Parameter  | Type                      | Description                              |
| ---------- | ------------------------- | ---------------------------------------- |
| __`UrlCode`__ | `string`  | Required. URL code (slug) of reaction |
|__`Active`__| integer   | Required. 1 or 0 for ‘active’ or ‘inactive’|
