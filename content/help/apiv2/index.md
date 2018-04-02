---
title: Vanilla API v2
tags: 
- API
- APIv2
- API v2
category: "apiv2"
aliases:
- /apiv2/
menu:
  help:
    identifier: apiv2
    name: API v2
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
  - Have access to first, last, previous and next pages.
- More pagination
  - Used where querying the totals of a particular resource would not be performant.
  - Have access to first, previous and next pages.

Resources that support pagination have `page` and `limit` parameters. For example: `/api/v2/{RESOURCE}?page={PAGE_NUM}&limit={NUM_ITEMS}`

Since the API returns an array of records, the paging information is sent using the [Link header](https://tools.ietf.org/html/rfc5988).

Link header example:

```text
Link: <https://forum.example.com/api/v2/users?page=1&limit=100>; rel="first",
  <https://forum.example.com/api/v2/users?page=5&limit=100>; rel="next"
```

*The example includes a line breaks for readability.*


Depending on the pagination type, the following `rel` values are possible:

|||
|---|---|
| `first` | The link relation for the first page of records. |
| `last` | The link relation for the last page of records. |
| `prev` | The link relation for the immediate previous page of records. *Only available if page > 1.* |
| `next` | The link relation for the immediate next page of records. *Only available if more records are available.* |


*Note: __results per pages__ can be lower than __limit__ even if more pages are available. This is due to rows being removed based on the current user's permissions. It is also possible to have empty pages for the same reason.
 The `Paging-Next` header will always be present when more rows are available.*
