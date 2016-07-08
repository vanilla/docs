---
title: '{link}'
tags:
- Theming
- Smarty
- Smarty Functions
category: developer
menu:
  developer:
    parent: theming-smarty-functions
aliases:
- /theming/smarty/functions/link
---
## Function: `{link}`

### Usage

```
{link path="string" text="string" notag=boolean format="string" withdomain=boolean}
```

Takes a route and prepends the web root (expects `/controller/action/params` as `path`).

## Parameters

{{< params "theming/function/link.json" >}}