---
title: Assets
layout: docs
categories: ["Developers","Framework"]
---

## Assets

Assets organize content in a document. Assets are called by the main template (e.g. default.master.tpl) which renders the content currently stored in them. Assets are managed with code via plugins or the theme hooks file.

### Default assets

Vanilla uses these assets by default: `Head`, `Content`, `Panel`, and `Foot`. You cannot rely on every theme having a `Panel`, which is typically used as a sidebar. The `Content` asset is required, because it is where the view is rendered. You can, however, assign it additional content.

### Using assets

You can create your own arbitrary assets in your templates and simply add content to them using `Gdn::controller()->addAsset('AssetName', $Content, 'ContentName')`. This is a great strategy for creating flexible themes that are easily customized by rearranging assets in the `default.master.tpl` file.

A common scenario is using [modules](/developers/framework/modules) to add content to an asset. (Note: In plugin hooks, you will typically be using `$Sender` in place of `Gdn::controller()` since the Sender _is_ the controller).

You can set the sort order in which content in an asset is displayed via the [config](/developers/configuration). Use a key like `Modules.{Application}.{Asset}` (e.g. `Modules.Vanilla.Content`) to define an array of `ContentName` values that you used when calling `addAsset()`. See `$ModuleSortContainer` in `Gdn_Controller`.
