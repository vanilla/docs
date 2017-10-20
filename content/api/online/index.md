---
title: "Endpoint: online"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: online
    weight: 400
---

## /online/privacy

```http
POST /api/v1/online/privacy.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Adjust a user’s Online privacy.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

{{% scrollableTables %}}

| Parameter   | Type                                  | Description                             |
| ----------- | ------------------------------------- | --------------------------------------- |
| __`User`__  		| [`smart id`](../smart-id)             | Required. The user whose privilege we’re modifying|
| __`PrivateMode`__ 	| `string`                        | Required. ‘true’ or ‘false. Whether not this user is hidden from Online status|

{{% /scrollableTables %}}

## /online/count

```http
GET /api/v1/online/count.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Get a count of users currently online.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

None