---
title: "{breadcrumbs}"
tags: ["Theming", "Smarty", "Smarty Functions"]
category: "developer"
---

## Function: `{breadcrumbs}`

```
{breadcrumbs homelink="string" hidelast=boolean}
```

Render a breadcrumb trail for the user based on the page they are on.

### Parameters

Parameter   | Type      | Default   | Description
---         | ---       | ---       | ---
`homeurl`   | `string`  | `Home`    | Title of the first link in the breadcrumbs
`hidelast`  | `boolean` | `false`   | Whether or not to hide the currently active (last) crumb
