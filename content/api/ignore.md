---
title: "Endpoint: ignore"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: ignore
    weight: 400
---

## /ignore/list

```http
GET /api/v1/ignore/list.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Get a user’s ignore list.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter   | Type                                  | Description                             |
| ----------- | ------------------------------------- | --------------------------------------- |
| __`User`__  | [`smart id`](../smart-id)             | Required. The user whose ignores should be listed            |

{{% /scrollableTables %}}

## /ignore/add

```http
POST /api/v1/ignore/add.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Add someone to a user’s ignore list.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter   | Type                                  | Description                             |
| ----------- | ------------------------------------- | --------------------------------------- |
| __`User`__  | [`smart id`](../smart-id)             | Required. The user whose list we’re modifying              |
| __`IgnoreUser`__   |[`smart id`](../smart-id)                            | Required. The user who should be put on ignore|

{{% /scrollableTables %}}

## /ignore/remove

```http
POST /api/v1/ignore/remove.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Remove someone from a user’s ignore list.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter  | Type                      | Description                |
| ---------- | ------------------------- | -------------------------- |
| __`User`__ | [`smart id`](../smart-id) | Required. The user whose list we’re modifying|
| __`IgnoreUser`__  | [`smart id`](../smart-id)                | Required. The user who should be removed from ignore|

{{% /scrollableTables %}}

## /ignore/restrict

```http
POST /api/v1/ignore/restrict.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Bestow or Revoke a user’s ignore privilege.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter  | Type                      | Description                              |
| ---------- | ------------------------- | ---------------------------------------- |
| __`User`__ | [`smart id`](../smart-id) | Required. The user whose privilege we’re modifying |
| __`Restricted`__ | `string` | Required. ‘true’ or ‘false’. Whether or not this user’s ignore privileges are restricted |

{{% /scrollableTables %}}
