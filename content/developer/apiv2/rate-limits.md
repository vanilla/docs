---
title: Rate Limits
tags: 
- API
- APIv2
- API v2
- Rate Limits
- Throttling
category: "apiv2"
aliases:
- /apiv2/rate-limits/
menu:
  help:
    parent: apiv2
    weight: 50
---

The API is rate-limited in order to prevent abuse and protect our origins from attack. Rate limiting is performed on a 
per-IP basis.

Exceeding the following rate limits will result in a temporary block, during which the service will respond 
with **HTTP 429 Too Many Requests**. The block will lift automatically after **1 hour**.

## GET requests

These types of requests are limited to **300 requests** per **1 minute**, per IP.

## POST / PUT / PATCH / DELETE requests

These types of requests are limited to **20 requests** per **1 minute**, per IP.
