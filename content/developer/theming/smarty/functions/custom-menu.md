---
title: "{custom_menu}"
layout: docs
categories: ["Theming", "Smarty", "Smarty Functions"]
---

## Function: `{custom_menu}`

```
{custom_menu format="string" wrap="string"}
```

A bucket for addon menu items. Adds links depending on which addons are enabled.

### Parameters

Parameter   | Type      | Default   | Description
---         | ---       | ---       | ---
`format`    | `string`  | none      | Custom format to use when wrapping links. Available template variables are `%url`, `%class`, and `%text`
`wrap`      | `string`  | `li`      | Element to wrap around each link in the menu
