---
title: "{asset}"
layout: docs
categories: ["Theming", "Smarty", "Smarty Functions"]
---

## Function: `{asset}`

```
{asset name="string" id="string" tag="string" class="string"}
```
Renders an asset from the controller.

Assets in Vanilla are containers for different sets of content. The content of each of these asset containers is variable depending on the page. The content of each asset is not currently configurable via the template.

Vanilla's asset names are Head, Foot, Content and Panel. Your template will need to contain the Head, Foot and Content assets. The Panel asset is optional, but you'll likely want to at least include it in the Profile, EditProfile and Conversation sections as it has important functionality in those sections that are not included in the Content asset.

### Parameters

Parameter   | Type      | Default   | Description
---         | ---       | ---       | ---
__`name`__  | `string`  | none      | The name of the asset
`id`        | `string`  | `$name`   | The id of the tag if different than the name
`tag`       | `string`  | none      | The type of tag to wrap the asset in
`class`     | `string`  | none      | The class to add to the asset wrapper
