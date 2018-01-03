---
title: Using Web Fonts
category: help
menu:
  help:
    parent: appearance-custom-theme
    weight: 2
aliases:
- /appearance/custom-theme/webfont
---

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

* [Vanilla Blog: Adding a Custom Font](https://blog.vanillaforums.com/help/friday-theme-tips-one-list/)
