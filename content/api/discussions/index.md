---
title: "Endpoint: discussions"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: discussions
    weight: 200
---

## /discussions/add

```http
POST /api/v1/discussions/add.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Creates a new discussion.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

Parameter           | Type      | Description
---                 | ---       | ---
__`Name`__          | `string`  | Discussion name
__`Body`__          | `string`  | Discussion body
__`Format`__        | `string`  | Discussion output format
__`CategoryID`__    | `integer` | Discussion Category (ID, use if no Name)
__`Category`__      | `string`  | Discussion Category (Name, use if no ID)
`ForeignID`         | `string`  | Related foreign content identifier
`Tags`              | `csv`     | List of discussion tags
`Type`              | `string`  | Discussion type
`Closed`            | `boolean` | Discussion closed state
`Announce`          | `boolean` | Discussion announced state
`Sink`              | `boolean` | Discussion sunk state


## /discussions/bookmark

```http
POST /api/v1/discussions/bookmark.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Bookmark or unbookmark a discussion.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

Parameter           | Type                      | Description
---                 | ---                       | ---
__`Discussion`__    | [`smart id`](../smart-id) | Discussion to be bookmarked
`User`              | [`smart id`](../smart-id) | The user bookmarking the discussion. If blank then the currently authenticated user will be used
`Bookmark`          | `boolean`                 | Whether or not to bookmark the discussion

### Notes

You need the `Garden.Moderation.Manage` permission to bookmark a discussion for another user.


## /discussions/bookmarked

```http
GET /api/v1/discussions/bookmarked.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

List a user's bookmarked discussions.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required


## /discussions/edit

```http
POST /api/v1/discussions/edit.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Edits an existing discussion.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

Parameter           | Type                      | Description
---                 | ---                       | ---
__`Discussion`__    | [`smart id`](../smart-id) | Discussion to be deleted.
`Name`              | `string`                  | Discussion name
`Body`              | `string`                  | Discussion body
`Format`            | `string`                  | Discussion output format
`CategoryID`        | `integer`                 | Discussion Category (ID, use if no Name)
`Category`          | `string`                  | Discussion Category (Name, use if no ID)
`ForeignID`         | `string`                  | Related foreign content identifier
`Tags`              | `csv`                     | List of discussion tags
`Type`              | `string`                  | Discussion type
`Closed`            | `boolean`                 | Discussion closed state
`Announce`          | `boolean`                 | Discussion announced state
`Sink`              | `boolean`                 | Discussion sunk state


## /discussions/list

```http
POST /api/v1/discussions/list.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): optional  
If not provided, perspective will be that of a guest.


## /discussions/category

```http
GET /api/v1/discussions/category.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Get a list of discussions within a category.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): optional  
If not provided, perspective will be that of a guest.

### Parameters

Parameter                   | Type                  | Description
---                         | ---                   | ---
__`CategoryIdentifier`__    | `integer` `string`    | Category identifier (`CategoryID` or `UrlCode`)
`Page`                      | `integer`             | Page number

## /discussions/promoted

```http
GET /api/v1/discussions/promoted.ext HTTP/1.1
HOST: https://yoursite.vanillaforums.com
```

Get a list of discussions filtered by the selector and selection parameters.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): optional  
If not provided, perspective will be that of a guest.

### Parameters

Parameter           | Type               | Description
---                 | ---                | ---
__`selector`__      | `string`           | What property to filter the discussions by. The available selectors are listed in the Selectors and Selections section below.
`selection`         | `string` `integer` | What value to filter the discussions by. Learn more about the possible values in the Selectors and Selections section below.
`contenttype`       | `string`           | The value can be `all`, `discussions`, or `comments`. You can choose to fetch only comments or only discussions. The default is all.
`limit`             | `integer`          | The number of posts to fetch. The max number is 50.
`expiry`            | `integer`          | How long in seconds to cache the content.

##### Selectors and Selections

The promoted endpoint only supports filtering by one selector and selection. The available selectors are:

* **role**: Filter posts based on the author's role. The selection can be one or more of your forum's role names. Here's an example query string: `?selector=role&selection=Moderator%2CAdministrator`.
* **rank**: Filter posts based on the author's rank. The selection can be any one of your forum's rank names or rank IDs. Here's an example query string selecting by rank name: `?selector=rank&selection=Level%201` or by rank ID: `?selector=rank&selection=1`.
* **category**: Filter posts based on the content's category. The selection can be the category's url code or the category ID. Here's an example query string selecting by url code: `?selector=category&selection=general` or by category ID: `?selector=category&selection=1`.
* **score**: Filter posts based on a minimum score. A post's score is determined by reactions. Will only fetch posts with a score greater than the selection. Here's an example query string: `?selector=score&selection=3`.
* **promoted**: Filter posts based on whether it has the promoted reaction. Here's an example query string: `?selector=promoted`.
