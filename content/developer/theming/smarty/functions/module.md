---
title: "{module}"
layout: docs
categories: ["Theming", "Smarty", "Smarty Functions"]
---

## Function: `{module}`

```
{module name="string" ... }
```

This is a super handy little function that renders any module in Vanilla. It instantiates the specified module class, sets the properties specified in the function's parameters and calls the toString() function of the module.

The available parameters differ depending on module itself and the available modules depend on which addons are enabled. If a module is contained in an addon, the addon must be enabled in order for the module to render (a common gotcha).

There are many modules available in Vanilla and in its addons. They can be found in the modules directory of an application or addon. [Learn more about modules.](../../../developers/framework/modules.html.md)

### Parameters

Parameter       | Type      | Default   | Description
---             | ---       | ---       | ---
__`name`__      | `string`  | none      | The full class name of the module

You can set any property of a module by specifying it as a parameter as long as that property has a setter method or has a visibility of public.

### Example

Here's an example of a tag that renders the Promoted Content Module, a module that can filter discussions based on role, rank, score, category, or the promoted reaction:

```
{module name="PromotedContentModule" Selector="role" Selection="Developer,Administrator" Limit="12" Group="3"}
```
