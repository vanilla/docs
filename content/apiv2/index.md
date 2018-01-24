---
title: Vanilla API v2
tags: ["API", "APIv2"]
category: "apiv2"
menu:
  apiv2:
    identifier: apiv2
    name: Overview
    weight: 1
---

We've rebuilt Vanilla's API from the ground up to enable tighter integrations and lower-level access to all of Vanilla's features using an API-first strategy. The initial release will provide feature partiy with our API v1. New endpoints will become available as they are completed, so watch for new product announcements.

## Key improvements in API v2

- More authentication options, including per-user access tokens.
- Complete, custom API docs in your dashboard, including examples you can use immediately.
- More endpoints so you can control more of your site from the API.
- Cross-origin resource sharing (CORS) support.
- Greater functional consistency, and higher conformance to current industry best practices.
- Better automated testing, to reduce regression bugs and unwanted changes.

## Features

### Pagination

We use 2 types of pagination in the API:

- Numbered pagination
  - Used where possible.
  - Have access to First, Last, Prev and Next pages.
- More pagination
  - Used where querying the totals of a particular resource would not be performant.
  - Have access to First, Prev and Next pages.

Resources that support pagination have `page` and `limit` parameters. For example: `/api/v2/{RESOURCE}?page={PAGE_NUM}&limit={NUM_ITEMS}`

Since the API returns an array of records, the paging information is sent through HTTP headers. Depending on the pagination type, the following headers are returned (all values are represented as relative URLs):

- `Paging-First`: First page of records.
- `Paging-Last`: Last page of records.
- `Paging-Prev`: Previous page of records. *Only available if page > 1.*
- `Paging-Next`: Next page of records. *Only available if more records are available.*


*Note that __results per pages__ can be lower than __limit__ even if more pages are available. This is due to rows being removed based on the current user's permissions. It is also possible to have empty pages for the same reason.
 The `Paging-Next` header will always be present when more rows are available.*
