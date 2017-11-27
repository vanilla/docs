---
title: "Endpoint: search"
tags: ["API"]
category: "api"
menu:
  api:
    identifier: search
    weight: 400
---

## /search

```http
GET /api/v1/search.ext HTTP/1.1
Host: https://yoursite.vanillaforums.com
```
Searches the site.

### Auth required

No

### Parameters

{{% scrollableTables %}}

| Parameter   | Type                                  | Description                             |
| ----------- | ------------------------------------- | --------------------------------------- |
| __`search`__ | `string`             | The string used to search|

{{% /scrollableTables %}}

### Advanced Search

If you have advanced search enabled then search can take these additional parameters.

{{% scrollableTablesWide %}}

| Parameter   | Type                                  | Description                             |
| ----------- | ------------------------------------- | --------------------------------------- |
| `Search`  | `string`                            | The search parameter is a list of keywords to search. There is also an advanced syntax you can use to modify the keywords: 								  **`”keyword phrase”:`** A phrase wrapped in quotes must occur in that order 			  **`”+keyword”:`** The keyword must occur in the search result  					**`”-keyword”:`** The keyword must **not** occur in the result|
| `title` | `string`            | Search just discussion titles             |
| `author` | `string`            | A comma-separated list of author names            |
| `cat` | integer            | The category ID of discussion to search           |
| `subcats` | bool            | Pass subcats=1 to search the category and its subcategories          |
| `archived` | bool            | Pass archived=1 to include archived categories in your search         |
| `tags` | `string`             | A comma-separated list of tag names     |
| `tags-op` | `string`             | Specify tags-op=and to make the search require all of the tags rather than any one of the tags  |
| `date` | `string`             | Specify a date to search on. This can be a data specified in yyyy-mm-dd syntax, but can also include text such as “Monday” or “today” or “last week” |
| `within` | `string`             | You can use this in conjunction with the date parameter to provide a range of dates. You can pass a string such as “1 day” or “3 weeks” etc |
| `page` | `string`             | The page of results you want to get. You can also specify a range like 1-10 to get the first 10 results|

{{% /scrollableTablesWide %}}