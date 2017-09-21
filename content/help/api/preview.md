---
title: API Preview Release
tags:
- API
category: help
weight: 120
aliases: []
---

## API v2 Overview

Vanilla is presenting a preview release of our upcoming API v2. This is a complete rewrite and rearchitecture of our API to be a low-level feature of our platform rather than a wrapper around our existing product.

This preview exposes access to only the most core Vanilla resources:

* Users
* Roles
* Discussions
* Comments
* Categories
* Conversations (private messages)
* Messages (text banners)
* Tokens (basic API access management)

The full API v2 release will introduce parity with the API v1 feature set, and will trigger the beginning of a sunset period for that API which will last at least 6 months.

We will continue to add new endpoints to API v2 throughout 2018 to increase your access to functionality in Vanilla's community platform.


## Getting the API v2 preview

All cloud customers below the VIP level now have access to the API v2 endpoints.

Contact your Customer Success Manager or email support@vanillaforums.com to enable your customized, in-dashboard docs.

**No special steps will be necessary if you simply want to wait for the full API v2 release.**

If you are at the VIP level, you already have the release on your staging site. If you want the API preview release in production, talk to your Customer Success Manager to coordinate a new product release to your cluster.

## Using the API v2 preview

You may continue using API v1 alongside API v2.

### Get a token

As an administrator, mannually visit the URL `/profile/token` to generate a personal access token. In API v2, all tokens are assigned to a user account. There is no global token as in API v1. **Your API v1 token will not work.**

### Read the docs

We dynamically generate API v2 docs in your dashboard so they are specific to your currently enabled addons. They are available as "API v2" under the "Technical" section of the "Settings" tab once you have requested them to be enabled (see above).

### Test carefully!

The examples and "Try it now!" options really do fire immediately against your database. If you decide to "test" the discussion **Delete** endpoint, it really will delete it, and no, there's no undo!

### Report back

The point of this preview is to gather feedback and find issues. Please contact support when you find them, and provide reproduction steps and examples whenever possible. We want to deliver the best product possible and we highly value your help in doing so.