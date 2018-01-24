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
  - Used where querying the total count of a particular resource would be bad performance wise.
  - Have access to First, Prev and Next pages.

Resources that supports pagination

- Have the "page" and "limit" parameter.
- Can be browsed like so: `/api/v2/{RESOURCE}?page={PAGE_NUM}&limit={NUM_ITEMS}`

Since the API returns an array of records the paging information are sent through the HTTP header.
Depending on the pagination type, the following headers are returned:

- `Paging-First`: Relative URL to the first page of records.
- `Paging-Last`: Relative URL to the last page of records.
- `Paging-Prev`: Relative URL to the previous page of records. *Only available if page > 1*
- `Paging-Next`: Relative URL to the next page of records. *Only available if more records are available*


*Note that __results per pages__ can be lower than __limit__ even if more pages are available 
due to records being filtered because of permissions. It is also possible to have empty pages because of that.
To know for sure if more records are available check if `Paging-Next` is present in the header.*
