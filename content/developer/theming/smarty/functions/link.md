---
title: "{link}"
layout: docs
categories: ["Theming", "Smarty", "Smarty Functions"]
---

## Function: `{link}`

```
{link path="string" text="string" notag=boolean format="string" withdomain=boolean}
```

Takes a route and prepends the web root (expects `/controller/action/params` as `path`).

### Parameters

Parameter       | Type      | Default   | Description
---             | ---       | ---       | ---
__`path`__      | `string`  | none      | The relative path for the url. There are some special paths that can be used to return "intelligent" links
`text`          | `string`  | none      | HTML text to be put inside an anchor. If this value is set then an HTML `<a></a>` is returned rather than just a url
`notag`         | `boolean` | `false`   | Whether or not the output should be wrapped in a tag or just be a URL
`format`        | `string`  | none      | Custom format to use when wrapping links. Available template variables are `%url`, `%class`, and `%text`
`withdomain`    | `boolean` | `false`   | Whether or not to prepend the base (`http://your-forums.com/`) URL to the outputted link
