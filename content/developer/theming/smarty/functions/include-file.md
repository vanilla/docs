---
title: "{include_file}"
layout: docs
categories: ["Theming", "Smarty", "Smarty Functions"]
---

## Function: `{include_file}`

```
{include_file name="string"}
```

Inserts the contents the specified file into the template. The file must be in the same directory as the Smarty template file. Especially useful for inserting html headers or footers into a Smarty template.

### Parameters

Parameter       | Type      | Default   | Description
---             | ---       | ---       | ---
__`name`__      | `string`  | none      | The name of the file to include
