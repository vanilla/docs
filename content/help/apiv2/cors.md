---
title: "Cross-Origin Resource Sharing (CORS)"
tags: 
- API
- APIv2
- API v2
category: "apiv2"
menu:
  help:
    name: CORS
    parent: apiv2
    weight: 10
---

Cross-origin resource sharing allows pages on other domains to access the API. In order to take advantage of CORS support you'll have to specifically whitelist each domain you want to grant access to ensure that no bad actors are calling your API from sites you don't control.

## Whitelisting Domains for CORS

To whitelist a domain and grant it access to the API take the following steps.

1. Go into **Dashboard › Settings › Security**.
2. Add the domain you want to whitelist to the **Trusted Domains** list. Just enter the domain without the "https://" part.

## Making a CORS Request

Most javascript AJAX clients support CORS transparently so you wont have to do anything special once the site has whitelisted your domain. If you are unsure if your client is making the request properly then open up your network inspector and make sure the request has the **Origin** header and it includes your domain. That is the domain that must be whitelisted in Vanilla.

## Avoiding Pre-flighted Requests

CORS has the concept of "pre-flighted requests" which involves the browser making an initial request to see if it has authorization and then the actual request if everything checks out. Pre-flighted requests are suboptimal because they essentially double up the requests you have to make.

Fortunately, the API has a workaround to avoid most pre-flighted requests. Here are the steps you need to take.

1. Pass the access token in the **access_token** querystring rather than the authorization header. If you do this, leave out the "Bearer" part of the access token.
2. GET requests that contain the access token in the querystring should avoid pre-flight requests.
3. When you make a POST request you can't set the content type to application/json or else it will trigger a pre-flight request. If you want to post JSON you can set your content type to text/plain and the API will assume it's application/json.
4. If you are still noticing pre-flight requests then you are probably adding some sort of header to your request. Look at [MDN's help on simple requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests) to see what extraneous header may be triggering the pre-flight.

These workarounds are only necessary if you are making requests within a browser. If you are making requests elsewhere then you should set the access token in the header and use a content type of application/json.