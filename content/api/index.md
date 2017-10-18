---
title: Vanilla API
tags: ["API"]
category: "api"
---

Vanilla has had a read-only ReSTful API for some time, but until now, no formal way to access any write methods. This all changes with Simple API. Now developers can access Vanilla’s write methods using an access_token configured in the dashboard.

## Configuring Simple API

Simple API is a plugin. Once you've enabled the plugin you’ll see a new link in your dashboard called "API". This page allows forum owners to set the access token, define a user account that will be used for API access, and determine whether API calls are allowed over HTTP and HTTPS, or just HTTPS.


### Access Token

The access token is like a password for accessing the API from outside of Vanilla. A suitable token is randomly generated for you when the plugin is first loaded, but you can change it at any time. Changing the token will necessarily invalidate the existing one, so remember to update existing projects if they use the API. Remember though: this token is a kind of password, so make sure it is long and complex, just like the initial token that we pre-filled for you.

### User

When an API call is made, your access token confirms that you are authorized to make API calls, but we need some way to determine what level of access to give the API once you’re authenticated. We do this by "logging you in" temporarily as the user you specify here. The API session will inherit all of this user's permissions and will have the same level of access as this user. By default, we use the Vanilla System User, who has unrestricted administrative access.

### Security

Considering that the API gives unprecedented access to Vanilla’s data, it is prudent to be concerned with security. For this reason you have the option to ignore API requests that are not secured by HTTPS. HTTPS encrypts the connection, including the request URL, thereby preventing potential hackers from seeing your access token in request URLs. __This setting is highly recommended, but not required__.

## Making API Calls

All API calls should be made against your forum's "Vanilla URL", for example: `https://mycompany.vanillaforums.com`

### Versioned Endpoint

```http
# Example of versioned endpoint
https://mycompany.vanillaforums.com/api/v1/categories/list.ext
```

The Vanilla API is versioned to allow backwards compatibility during upgrades. __API requests should always be made with a version stub__.

### `GET` vs. `POST`

Calls to the API are strictly separated by HTTP request type. Requests for data (which do not cause modifications) are done using `GET`, while changes and updates are done using `POST`. When reading the documentation for a method, make sure to take note of its expected request type.

### Wire Format

Regardless of the request type, the `access_token` should always be supplied in the query string:

```http
GET /categories/all.json?access_token=abc123 HTTP/1.1
Host: mycompany.vanillaforums.com
```

The above request will yield the following response:

```http
HTTP/1.1 200 OK
Date: Tue, 19 Jul 2012 19:50:02 GMT
Content-Type: application/json
Vary: Accept-Encoding
Content-Length: 90
Connection: close
```

### API Smart IDs

Some API methods ask require a user ID for one or more of their parameters. Sometimes it's difficult to know what their user ID is so the Vanilla API can look up the user if you pass the user in a special way. This is referred to as a smart ID and you can read about it here.

### Request Encoding

By default, the API expects incoming request data to be `application/x-www-form-urlencoded`. If no `Content-Type` is provided, this will be assumed. It is also possible to alter this behaviour and cause the API to parse a JSON-encoded request body by setting the `Content-Type` to `application/json`.

### Response Encoding

The data encoding of the response is determined by the file extension attached to the request's method. In the above example, the controller name is categories and the method is all. The file extension on the method is `.json`, which will result in JSON encoded data being returned. If the request is being made to the controller's root method, index, the method may be omitted and the file extension may be applied to the controller instead.

### Recognized file extensions

Extension     | Description
---           | ---
`.json`       | JSON encoded response
`.xml`        | XML encoded response
No extension  | XHTML response, suitable for user interface

## Response Codes

Generally, if an API request is successful it will return the standard response code of  `200`. You can check for this response code. If you get an error code (`4xx`-`5xx`) then you can check the `Exception` property of the response some error text that will help you to determine what went wrong.

