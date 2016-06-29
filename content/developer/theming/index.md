---
title: Theming
layout: docs
categories: ["Theming"]
---

## Theming Overview

Vanilla themes are built by selectively overriding the views and CSS in the product. They are also imbued with the power of plugins via a special hooks file.

It is extremely important to never modify Vanilla by directly editing the files distributed in the release. Nearly anything can by accomplished with views, CSS, and hooks in a properly formatted theme.

### Quickstart

To override [CSS](/theming/css), create a custom.css file in your theme; it will be included in the page after our CSS, so you can override without higher specificity or !importants in your rules. To use [hooks](/theming/hooks), create a file named class.themehooks.php and format it like a new plugin. To customize a [view](/theming/views), copy it to your theme in the appropriate location.

The best way to get started with theming is to run through our [Quickstart](/theming/quickstart) to build your own simple theme. Once you see how it's done, you'll be off to the races.

### Cloud upgrade considerations

If you're considering moving to one of our cloud plans in the future, we recommend limiting your modifications to the default.master.tpl view and CSS overrides. That will allow a smooth transition without any customization services being required.
