---
title: "Endpoint: categories"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: categories
    weight: 200
---

## /categories/add

```http
POST /api/v1/categories/add.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Adds a new category.

[__Authentication__](../#making-api-calls): required

### Parameters

Parameter           | Type      | Description
---                 | ---       | ---
__`Name`__          | `string`  | The name of the category
__`UrlCode`__       | `string`  | URL friendly category stub
__`Description`__   | `string`  | Description of this category
`Sort`              | `integer` | Category sort order rank
`ParentCategoryID`  | `integer` | Parent Category (ID, use if no Name)
`ParentCategory`    | `string`  | Parent Category (Name, use if no ID)
`Archived`          | `boolean` | Whether this category is archived
`Permissions`       | `array`   | Custom permissions for the category. This must be an array with one item per role. Each item contains a role ID and the permissions to set.
`Permissions.RoleID`| `integer` | The ID of the role to set the permissions for.
`Permissions.*`     | `boolean` | Each permission is a dot-separated key with a boolean value. The basic permissions are Vanilla.Discussions.View, Vanilla.Discussions.Add, Vanilla.Discussions.Edit, Vanilla.Discussions.Announce, Vanilla.Discussions.Sink, Vanilla.Discussions.Close, Vanilla.Discussions.Delete, Vanilla.Comments.Add, Vanilla.Comments.Edit, Vanilla.Comments.Delete

## /categories/edit

```http
POST /api/v1/categories/edit.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Edits an existing category.

[__Authentication__](../#making-api-calls): required

### Parameters

Parameter           | Type      | Description
---                 | ---       | ---
__`CategoryID`__    | `integer` | Category to be edited (ID, use if no Name)
__`Category`__      | `string`  | Category to be edited (Name, use if no ID)
`Name`              | `string`  | The name of the category
`UrlCode`           | `string`  | URL friendly category stub
`Description`       | `string`  | Description of this category
`ParentCategoryID`  | `integer` | Parent Category (ID, use if no Name)
`ParentCategory`    | `string`  | Parent Category (Name, use if no ID)
`AllowDiscussions`  | `boolean` | Whether this category allows new discussions
`Archived`          | `boolean` | Whether this category is archived
`CustomPermissions` | `boolean` | Whether this category has custom permissions. Setting this to `false` will wipe custom permissions.
`Permissions`       | `array`   | Custom permissions for the category. This must be an array with one item per role. Each item contains a role ID and the permissions to set.
`Permissions.RoleID`| `integer` | The ID of the role to set the permissions for.
`Permissions.*`     | `boolean` | Each permission is a dot-separated key with a boolean value. The basic permissions are Vanilla.Discussions.View, Vanilla.Discussions.Add, Vanilla.Discussions.Edit, Vanilla.Discussions.Announce, Vanilla.Discussions.Sink, Vanilla.Discussions.Close, Vanilla.Discussions.Delete, Vanilla.Comments.Add, Vanilla.Comments.Edit, Vanilla.Comments.Delete

## /categories/delete

```http
POST /api/v1/categories/delete.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Deletes an existing category.

[__Authentication__](../#making-api-calls): required

### Parameters

Parameter           | Type      | Description
---                 | ---       | ---
__`CategoryID`__    | `integer` | Category to be deleted (ID, use if no Name)
__`Category`__      | `string`  | Category to be deleted (Name, use if no ID)

## /categories/get

```http
GET /api/v1/categories/get.ext?CategoryID=123 HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Get a single category.

[__Authentication__](../#making-api-calls): required

## /categories/list

```http
GET /api/v1/categories/list.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Get a list of categories.

[__Authentication__](../#making-api-calls): optional  
If not provided, perspective will be that of a guest.

### Parameters

_This method does not take any parameters._

