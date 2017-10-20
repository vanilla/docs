---
title: "Endpoint: roles"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: roles
    weight: 400
---

## /roles/add

```http
POST /api/v1/roles/add.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Add a new role.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

Parameter                           | Type      | Description
---                                 | ---       | ---
__`Name`__                          | `string`  | The name of the role
__`Description`__                   | `string`  | Description of this role
`Permissions`                       | `array`   | The permissions of the role. Each global permission is a dot-separated key with a boolean value.
`Permissions.Category`              | `array`   | Custom category permissions. Each item in the array is a permission for a particular category. Note that the category must be configured to have custom permissions to be viable in this array.
`Permissions.Category.CategoryID`   | `integer` | The ID of the category to set the permission for.
`Permissions.Category.*`            | `boolean` | Each custom category permission is a dot-separated key with a boolean value.

## /roles/edit

```http
POST /api/v1/roles/edit.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Edit a role.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

Parameter                           | Type      | Description
---                                 | ---       | ---
__`RoleID`__                        | `RoleID`  | The ID of the role to edit.
__`Name`__                          | `string`  | The name of the role
__`Description`__                   | `string`  | Description of this role
`Permissions`                       | `array`   | The permissions to the role. See roles/add.

## /roles/list

```http
GET /api/v1/roles/list.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Get all of the roles.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

## /roles/get

```http
GET /api/v1/roles/get.ext?roleid=123 HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Get a single role.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

Parameter                           | Type      | Description
---                                 | ---       | ---
__`RoleID`__                        | `RoleID`  | The ID of the role to get.