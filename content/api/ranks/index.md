---
title: "Endpoint: ranks"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: ranks
    weight: 400
---

## /ranks/list

```http
GET /api/v1/ranks/list.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Retrieve a list of available ranks.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

None

## /ranks/get

```http
GET /api/v1/ranks/get.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Retrieve a rank.

[__Authentication__]({{< relref "/api/index.md#making-api-calls" >}}): required

### Parameters

| Parameter   | Type                                  | Description                             |
| ----------- | ------------------------------------- | --------------------------------------- |
| __`Rank`__  | [`smart id`](../smart-id)             | Required. The rank to retrieve          |
