---
title: Variables and Structure
tags:
- Developers
- Theme
- Themes
- Boilerplate
- Variables
category: developer
menu:
  developer:
    parent: theme-boilerplate
---

## SCSS Folder Structure

### Base

Styles defining the scaffold of the theme. You can use this folder to import fonts, define typography, mixins.

### Components

Components are self contained pieces of UI. They can be very small, like a breadcrumb or a button. They can also be complex and composed of other components like the Advanced Search. Each component must have a unique class. They should also get a SASS partial with the same name.

Variables specific to a component should be defined on the top of the component's `.scss` file with a proper default and should only be used for that component.

### Sections

Sections are present in almost every page. For example the main header is considered to be a section. Variables to be used in a section should be on the `_variables.scss` file since those variables may be inherited by a component.

Styles on this folder can overwrite components.

### Pages

Styles inside this folder should only be effective on a particular page. For example, you may want to add different styles specific to the profile page. In this case, you create a file `_profile.scss` and start your scss like this:

```
.Section-Profile {
    ...your styles here...
}
```

This way, styles described in the file above will only affect the layout on the profile page.

Styles on this folder can overwrite components and sections.

## Naming Convention

We're following a similar naming convention for the variables and the class names. This allows for quick and easy search and replace, since the variable names and css classes match. Also makes it really easy to know where it's supposed to be used. Camel case is used, like we do for the class names.

We want to go from generic to specific. We start with the element it styles, followed by the sub-element and the property.

```
{block}-{sub element (optionnal)}_{state (optionnal)}_{property}
```

Examples:

```
$vanillaBox-icon_padding
$input_height
```

What about more abstract styles that are applied to multiple blocks? Use the block name "global".

```
$global-button_paddingTop
```

What about states? Append "hover" after the sub element.

```
$vanillaBox-icon-hover_paddingTop
```

## Variables Description

### Utility

Utility variables are used as helpers, like for example for spacing. These variables are heavily inherited and should not be edited.  Doing so may break the layout.

### Global

- **$global-body_fontFamily**: Main font family. Used pretty much for every text on the theme.
- **$global-body_fontWeight**: Same as above but for font weight.
- **$global-medium_fontSize**: Same as above but for font size.
- **$global-base_lineHeight**: Same as above but for line height.
- **$global-condensed_lineHeight**: Line height used for elements that usually stands as one line (for example tags, tittle, counts).

### Global Overwrites

- **$global-main_width**: Desktop view max width.
- **$global-color_primary**: Your brand's primary color. (Recommended to have good contrast with `$global-color_bg`)
- **$global-color_primaryAlt**: A variation of the primary color, usually used on hover state.
- **$global-color_secondary**: Your brand's secondary color. generally used for important call to actions, or hover/focus color. Recommended to have good contrast with `$global-color_bg`)
- **$global-color_bg**: Main color used for background. Adding a dark color to this variable will transform your theme into a dark theme, so make sure the `$global-color_fg` has high contrast with the color declared here.
- **$global-color_fg**: Main color used for foreground elements like text, icons, etc. Should have high contrast between `$global-color_bg`.
- **$link-default_color**: Color used on links.
- **$link-default-hover_color**: Color used on links, but on hover state.


### Buttons Colors ###

- Variables in this section define colors for buttons.

### Theme User Photos

- **$theme-photo_round**: Variable used to define if profile photos should have round edges. Valid values are `true` or `false`. If `true` the variable `$theme-photo_borderRadius` is ignored.
- **$theme-photo_borderRadius**: Value used to define profile photos border radius if `$theme-photo_round` is set to false.

### Body

- Variables in this section define background values for the theme outside the frame.

### Frame

- Variables in this section define values for the theme inside the frame, within the limit define in `$global-main_width`.

### Header

Variables related to the main header section.

### Navigation

Variables related to the mobile navigation section.

### Content

Variables related to the main content section.

### Panel

Variables related to the panel section. These variables also have the subsection **item**.

### Footer

Variables related to the main Footer section.

### Component

Variables under the `component` name space define general values to be used within components, for example lists. These variables also have the subsections **title**, **base** and **meta**.

- **$component-item_spacing**: Space between items. Generally used on categories and discussions lists. If the value of this variable is `0`, the items will collapse. 
- **$component_borderWidth**: Border width used on items. Border's will always be solid. Set this value to `0` to remove the border.
- **$component_lateralBorder**: This variable defines if the components should have lateral borders. Valid values are `true` or `false`. If set to `false` lateral paddings will be ignored and content will flush on the sides.

### Form Element

Variables under this name space define rules for form elements like inputs, selects, textarea.

### Form Button

Variables under this name space define rules for buttons.



>  **Notice:** Variables relative to specific components are inside the component's `.scss` file. To overwrite those you can migrate them to the bottom of your `_variables.scss`  and define the value you want, always keeping the `!default` flag.
