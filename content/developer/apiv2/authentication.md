---
title: Authentication
tags:
- Developers
- Framework
- API
category: developer
menu:
  developer:
    parent: framework-apiv2
    weight: 30
aliases:
- /developers/framework/apiv2/authentication
---
## Authenticating API Calls

When making calls to the API you'll need to pass an access token in order to authenticate as a user. Vanilla has core support for access tokens, with the following features:

- Access tokens can be issued, verified, and revoked with the **AccessTokenModel**
- An access token submitted in the **Authorization** header will authenticate the appropriate user.
- Expired access tokens are automatically pruned from the access token table, but stick around for a bit to give appropriate expired errors.

## Issuing Access Tokens

There isn't a built-in user interface for issuing access tokens (yet). Right now, addons are expected to issue access tokens as part of their specific single-sign-on mechanism. You can create and issue access tokens with the **AccessTokenModel**. The **AccessTokenModel** is a regular model, but you will usually be interacting with it through specific methods.

```php
// Issue a token
$model = new AccessTokenModel();
$accessToken = $model->issue(Gdn::session()->UserID(), '1 month', $scope);

// Verify a token.
$tokenRow = $model->verify($accessToken);

// Revoke a token.
$model->revoke($accessToken);
```

When a token is issued it is also signed with its expiry date and a secure hash. These are verified before a token is looked up to help prevent certain brute force attacks. Even if an access token passes its check it must also be verified from the database. In this way access tokens can be revoked before they expire.

### Access Token Scope (WIP)

The **issue()** method has a scope parameter. This can be left empty or you can specify an array of permission names. If you specify a scope like this then the access token will reduce the permissions of the user for the request to those listed in the scope. In this way access tokens can be issued with less permissions than a user has. It's considered a best practice to use a scope with only the permissions you need.

*You can never have a scope that gives a user more permissions than they already have. If more permissions are specified then they'll be ignored.*

## Passing Access Tokens

Access tokens are past to REST requests in the **Authorization** header. You pass an access token with the bearer scheme:

```
Authorization: Bearer <access token>
```

If the access token verifies then the request will be made with the appropriate user. If it doesn't then there will be a 401 error. In this case check the **X-WWW-Authenticate** header for specific information.
