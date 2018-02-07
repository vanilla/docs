---
title: "Endpoint: badges"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: badges
    weight: 400
---

## /badges/list

```http
GET /api/v1/badges/list.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Retrieve a list of available badges.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

None

## /badges/get

```http
GET /api/v1/badges/get.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Retrieve a badge by ID.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): No

### Parameters

{{% scrollableTables %}}

| Parameter   | Type                                  | Description                             |
| ----------- | ------------------------------------- | --------------------------------------- |
| __`Badge`__  | [`smart id`](../smart-id)            | Required. Badge to retrieve             |

{{% /scrollableTables %}}

## /badges/user

```http
GET /api/v1/badges/user HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Retrieve a user’s current badge list.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter  | Type                      | Description                |
| ---------- | ------------------------- | -------------------------- |
| __`User`__ | [`smart id`](../smart-id) | Required. User whose badges should be listed |

{{% /scrollableTables %}}

## /badges/add

```http
POST /api/v1/badges/add.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Creates a new badge.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter  | Type                      | Description                              |
| ---------- | ------------------------- | ---------------------------------------- |
| __`Name`__ | `string` 		 | Badge name |
| `Slug `    | `string` | URL slug for badge. No spaces    |
| `Description `    | `string` | Badge description   |
| `Points `    | integer | Badge point value   |
| `Photo `    | file | Badge image  |

{{% /scrollableTables %}}

## /badges/edit

```http
POST /api/v1/badges/edit.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Edit a badge.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Usage

All fields are optional except Badge. Updates are sparse, so supply only the fields you want to change.

### Parameters

{{% scrollableTables %}}

| Parameter  | Type                      | Description                              |
| ---------- | ------------------------- | ---------------------------------------- |
| __`Badge`__ | [`smart id`](../smart-id) | Required. The badge we’re modifying|
| `Name`| `string` 		 | Badge name |
| `Slug `    | `string` | URL slug for badge. No spaces    |
| `Description `    | `string` | Badge description   |
| `Points `    | integer | Badge point value   |
| `Photo `    | file | Badge image. If supplied, the Content-Type of the request should be forced to multipart/form-data  |

{{% /scrollableTables %}}

## /badges/give

```http
POST /api/v1/badge/giveuser.ext HTTP/1.1
HOST: https://yoursite.vanillaforums.com
```

Gives an existing user a badge.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter  | Type                                  | Description                  |
| ---------- | ------------------------------------- | ---------------------------- |
| __`UserID`__ | [`smart id`](../smart-id)  | Required. The user who should get the badge|
| __`BadgeID`__ | integer | Required. The ID of the badge to give|
| `Reason`| `string` | Optional friendly message to provide with the badge|

{{% /scrollableTables %}}
