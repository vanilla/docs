---
title: '{asset}'
tags:
- Theming
- Smarty
- Smarty Functions
category: developer
menu:
  developer:
    parent: theming-smarty-functions
aliases:
- /theming/smarty/functions/asset
---
## Function: `{asset}`

### Usage

```
{asset name="string" id="string" tag="string" class="string"}
```
Renders an asset from the controller.

Assets in Vanilla are containers for different sets of content. The content of each of these asset containers is variable depending on the page. The content of each asset is not currently configurable via the template.

Vanilla's asset names are Head, Foot, Content and Panel. Your template will need to contain the Head, Foot and Content assets. The Panel asset is optional, but you'll likely want to at least include it in the Profile, EditProfile and Conversation sections as it has important functionality in those sections that are not included in the Content asset.

## Parameters

{{< params "theming/function/asset.json" >}}