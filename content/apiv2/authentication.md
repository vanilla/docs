---
title: Authentication
tags: ["API", "APIv2"]
category: "apiv2"
menu:
  apiv2:
    weight: 10
---

The API supports two means of authentication. Both require an access token.

## HTTP Header

To authenticate with the HTTP header pass you access token in the **Authorization** field with the bearer scheme.

```
Authorization: Bearer <your_access_token>
```

This is the preferred way of authenticating against the API because headers are not usually logged on servers. If you are making server to server calls its worth looking up how to add custom headers in your API client.

## Query String Parameter

If you can't add a custom header or you want to avoid pre-flight requests you can pass the access token in the query string using the `access_token` parameter.

## Access Tokens

Currently, you can obtain a personal access token from your profile. These access tokens are meant for server to server integrations and should not be exposed to HTML pages. To obtain a personal access token do the following:

1. From the me box click "Edit Profile". You can also do this from your own profile page.
2. Click the "Access Tokens" menu item.
3. Click "Generate New Token".
4. Give the token a name that will help you remember its use.
5. Click "Generate" to generate the token and copy the value into your app.


