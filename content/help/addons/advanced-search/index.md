---
title: Advanced Search
tags:
- Features
- Addons
category: help
menu:
  help:
    parent: addons
    identifier: addons-advanced-search
aliases:
- /addons/advanced-search
---

## What Is Advanced Search?

Advanced Search adds robust options to Vanilla’s native search to help users hunt down specific content within your community. It is available on Corporate level plans and above. If your account is at the appropriate level, the plugin can be toggled on from the addon menu in your community’s Dashboard.

## Using Advanced Search

Navigating to `/search` will bring you to a page with an expandable search bar. Clicking the arrow on the right side of the bar will show you all the extra parameters you have available for search:
![You can search threads by title, author, and tags. You can narrow results down to a specific category, and choose what discussion types to search.  ](https://images.v-cdn.net/docs/search_expanded.jpg)

You can also link to `/search?adv=1` to have these options already expanded.  

By default, users will only see these options on the `/search` page. To switch out the search bar on your homepage, simply change out `{searchbox}` for `{searchbox_advanced}` in your custom theme.

Advanced search also enables an autocomplete function that pulls results as you type.
![Autocompleted results based on a keyword](https://images.v-cdn.net/docs/search_autocomplete.jpg)


If you are looking for something very specific, there are some additional parameters you can use to help narrow down results.

* `“keyword phrase”`: A phrase wrapped in quotes must occur in that order.
* `+keyword`: The keyword must occur in the search result.
* `-keyword`: The keyword must not occur in the result.


## Excluding Content From Search

Normal viewing permissions apply to search results. Searching as a guest or member will not return results with content from moderation or administration sections.

Archiving a category will prevent its content from coming up in the site-based search. Threads in archived categories are still indexed by search engines. You can use this setting to exclude old announcements or other irrelevant threads from search results without causing broken links.
