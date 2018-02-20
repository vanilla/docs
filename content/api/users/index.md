---
title: "Endpoint: users"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: users
    weight: 400
---

## /users/add

```http
POST /api/v1/users/add.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Insert a user.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter   | Type                                  | Description                             |
| ----------- | ------------------------------------- | --------------------------------------- |
| __`Name`__  | `string`                              | Username                                |
| __`Email`__ | `string`                              | Email address                           |
| `Password`  | `string`                              | User’s password                         |
| `Photo`     | `String`                              | Photo URL                               |
| `ShowEmail` | `boolean`                             | Allow others to see this email address? |
| `Gender`    | `string`                              | `m`,`f`, or `u` for unspecified         |
| `Title`     | `string`                              | Freeform user title                     |
| `Location`  | `string`                              | Freeform user location                  |
| `Role`      | [`multi smart id`](../multi smart-id) | Role ID (corresponds to GDN_Role)       |
| `Rank`      | [`smart id`](../smart-id)             | Rank ID (corresponds to GDN_Rank)       |

{{% /scrollableTables %}}

### Notes

The Photo field submitted here is only able to take a remotely hosted URL, not a file upload. In order to upload an avatar to the service, use the [users/photo]({{< relref "#users-photo" >}})

## /users/edit

```http
POST /api/v1/users/edit.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Modify user information.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter   | Type                                  | Description                             |
| ----------- | ------------------------------------- | --------------------------------------- |
| __`User`__  | [`smart id`](../smart-id)             | Required. The user to edit              |
| `Name`      | `string`                              | Username                                |
| `Email`     | `string`                              | Email address                           |
| `ShowEmail` | `boolean`                             | Allow others to see this email address? |
| `Gender`    | `string`                              | `m`,`f`, or `u` for unspecified         |
| `Title`     | `string`                              | freeform user title                     |
| `Location`  | `string`                              | Freeform user location                  |
| `Role`      | [`multi smart id`](../multi smart-id) | Role ID (corresponds to GDN_Role)       |
| `Rank`      | [`smart id`](../smart-id)             | Rank ID (corresponds to GDN_Rank)       |

{{% /scrollableTables %}}

## /users/photo

```http
POST /api/v1/users/photo HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Upload a new avatar

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required 

### Parameters

| Parameter  | Type                      | Description                |
| ---------- | ------------------------- | -------------------------- |
| __`UserID`__ | [`smart id`](../smart-id) | Required. The user to edit |
| `Avatar`  | `string`                  | Uploaded file              |

### Notes

The Picture field submitted here takes a file upload using the multipart /form-data Content-Type in the request headers. It does not support a string URL like [users/edit#Photo]({{< relref "#users-edit" >}})

## /users/discussions

```http
GET /api/v1/users/discussions.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Gets a list of discussions that the user posted.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): No

### GET Parameters

| Parameter  | Type                      | Description                              |
| ---------- | ------------------------- | ---------------------------------------- |
| __`User`__ | [`smart id`](../smart-id) | required. The user whose settings to retrieve or modify |

## /users/comments

```http
GET /api/v1/users/comments.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Gets a list of comments that a user posted.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): No  

### GET Parameters

| Parameter  | Type                      | Description                              |
| ---------- | ------------------------- | ---------------------------------------- |
| __`User`__ | [`smart id`](../smart-id) | required. The user whose settings to retrieve or modify |

## /users/multi

```http
GET /api/v1/users/multi.ext HTTP/1.1
HOST: https://yoursite.vanillaforums.com
```

Get multiple users’ information.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

| Parameter  | Type                                  | Description                  |
| ---------- | ------------------------------------- | ---------------------------- |
| __`User`__ | [`multi smart id`](../multi smart-id) | Required. A list of user IDs |

## /users/notifications

```http
GET /api/v1/users/notifications.ext HTTP/1.1
POST 
HOST: https://yoursite.vanillaforums.com
```

Get/Set user notification preferences.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### GET Parameters

{{% scrollableTables %}}

| Parameter  | Type                      | Description                              |
| ---------- | ------------------------- | ---------------------------------------- |
| __`User`__ | [`smart id`](../smart-id) | Required. The user whose settings to retrieve or modify. Required for setting and getting. |

{{% /scrollableTables %}}

### POST Parameters

{{% scrollableTablesWide %}}

| Parameter                   | Type    | Description                              |
| --------------------------- | ------- | ---------------------------------------- |
| `Email.Mention`             | integer | Email notify when user us mentioned      |
| `Popup.Mention`             | integer | Popup notify when user us mentioned      |
| `Email.Badge`               | integer | Email notify when user receives a badge  |
| `Popup.Badge`               | integer | Popup notify when user receives a badge  |
| `Email.WallComment`         | integer | Email notify when user receives a wall post |
| `Popup.WallComment`         | integer | Popup notify when user receives a wall post |
| `Email.ActivityComment`     | integer | Email notify when user receives wall comment reply |
| `Popup.ActivityComment`     | integer | Popup notify when user receives wall comment reply |
| `Email.ConversationMessage` | integer | Email notify when user receives a private message |
| `Popup.ConversationMessage` | integer | Popup notify when user receives a private message |
| `Email.DiscussionComment`   | integer | Email notify when user receives a topic reply |
| `Popup.DiscussionComment`   | integer | Popup notify when user receives a topic reply |
| `Email.BookmarkComment`     | integer | Email notify when user receives a reply to a bookmarked topic |
| `Popup.BookmarkComment`     | integer | Popup notify when user receives a reply to a bookmarked topic |
| `Email.BadgeRequest`        | integer | Email notify when a new badge is requested |
| `Popup.BadgeRequest`        | integer | Popup notify when a new badge is requested |
| `Email.Applicant`           | integer | Email notify when anyone applies for membership |

{{% /scrollableTablesWide %}}

## /users/get

```http
GET /api/v1/users/get.ext HTTP/1.1
HOST: https://yoursite.vanillaforums.com
```

Get user information.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): no, But Perspective will be that of a guest

### Parameters

{{% scrollableTables %}}

| Parameter  | Type                      | Description                     |
| ---------- | ------------------------- | ------------------------------- |
| __`User`__ | [`smart id`](../smart-id) | Required. The user to retrieve. |

{{% /scrollableTables %}}

## /users/sso

```http
GET /api/v1/users/sso.ext HTTP/1.1
POST
HOST: https://yoursite.vanillaforums.com
```

Gets/Sets single-sign-on (SSO) information for a user.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): yes

### GET

Gets the SSO information for a single user.

### Parameters

{{% scrollableTables %}}

| Parameter  | Type                      | Description                |
| ---------- | ------------------------- | -------------------------- |
| __`User`__ | [`smart id`](../smart-id) | Required. The user to get. |

{{% /scrollableTables %}}

### POST

Update the SSO information for a user.

### Parameters

{{% scrollableTables %}}

| Parameter            | Type     | Description                              |
| -------------------- | -------- | ---------------------------------------- |
| __`ClientID`__       | `string` | The client ID from your SSO provider     |
| __`UniqueID`__       | `string` | The ID that uniquely identifies the user on your system (not Vanilla) |
| __`Username/Email`__ | `string` | Either the username or the email of the user in Vanilla |
| __`Password`__       | `string` | The password of the user in Vanilla      |

{{% /scrollableTables %}}

## /users/delete

```http
POST /api/v1/users/delete.ext HTTP/1.1
HOST: https://yoursite.vanillaforums.com
```

Delete a user from the application.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): yes

### Parameters

{{% scrollableTables %}}

| Parameter          | Type                      | Description                              |
| ------------------ | ------------------------- | ---------------------------------------- |
| __`User`__         | [`smart id`](../smart-id) | Required. The user to retrieve           |
| __`DeleteMethod`__ | `string`                  | Required. The method of content deletion. This should be one of: `keep` the user's content. `wipe` Replace the user's content with a “this content has been deleted” type method, `delete` Delete the user's content |

{{% /scrollableTables %}}
