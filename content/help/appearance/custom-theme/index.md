---
title: Custom Theme
category: help
menu:
  help:
    parent: appearance
    identifier: appearance-custom-theme
    weight: 1
aliases:
- /appearance/custom-theme
- /appearance/custom-theme/webfont
- /help/appearance/custom-theme/webfont
---

## Customize Theme 

Vanilla's base theme HTML can be modified and CSS can be overriden. In order to modify a Vanilla theme,  you  must posses good knowledge of HTML and CSS. Please consult the [Vanilla Forums Theme Guide](https://static.v-cdn.net/vfcom/docs/Vanilla-Forums-Theme-Guide.pdf) for detailed theming instructions. 

![Customize Theme](/img/help/appearance/custom-theme.png)

## Using Web Fonts

The easiest way to change the font in the base theme is to use a web font.  You will have to add a link to the font in the theme HTML and target the 

For example, to change the font to the Google Font Lato:

 * Get the link snippet from fonts.google.com:  `<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">`
 * Get the CSS rule: `font-family: 'Lato', sans-serif;`
 * Go to HTML tab on the Customize Theme page of the Vanilla Dashboard 
 * Add the font link snippet above in between the <head> tags 
 * Add the following to the CSS tab:  `body {font-family: 'Lato', sans-serif;}` 

Notes:
 * Knowledge of CSS is required to use the CSS customization features of Vanilla 
 * If you would like to install a font that is not available as a webfont, please contact Vanilla support.  

Additional Resources:

* [Vanilla Forums Theme Guide](https://static.v-cdn.net/vfcom/docs/Vanilla-Forums-Theme-Guide.pdf)
* [Vanilla Blog: Theme Tips](https://blog.vanillaforums.com/help/friday-theme-tips-one-list/)
* [Video: Theming Vanilla Forums](https://www.youtube.com/playlist?list=PLEdMTbLR4h8wGFwPz75W265zbQdeZllAW)
* [Vanilla Blog: Adding a Custom Font](https://blog.vanillaforums.com/help/friday-theme-tips-one-list/)
