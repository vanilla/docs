---
title: Hero Image
tags:
- Addons
- Hero Image
- Image upload
category: help
menu:
  help:
    parent: addons
    identifier: addon-hero-image
versioning:
  added: 2.6
---

## Overview

{{% cloudfeature %}}

This plugin allows you to:

- Associate an background image with a category.
- Inherit the parent categories image if one isn't set.
- Set a "top-level" image that everything falls back to if no image is found on a parent category.
- Access this image through a [Smarty Template]() or [Customize Theme]().

## Setup

- Visit the addon's page of the dashboard.
- Enable the HeroImage plugin.

![](/img/help/addons/hero-image/hero-image-settings.png)

## Set the default image

1. Click on the settings icon next to the plugin.
2. Click on the file picker to select your image.
![](/img/help/addons/hero-image/hero-image-set-default.png)
3. Click save.

## Set a category image.

1. Navigate to the category page of the dashboard. (`/vanilla/settings/categories`)
2. Edit a category.
3. Scroll to the Hero Image section.
4. Use the file picker to upload a file.
![](/img/help/addons/hero-image/hero-image-set-category.png)
5. Click Save.

## Usage in PHP and Smarty

The URL of the image for the current page will be made available to Smarty Templates and customize theme with the tag:

```tpl
{hero_image_url}
```

If you place this custom smarty tag in your CustomizeTheme, and disable the Hero Image plugin you site _will_ break until you either remove the tag or re-enable the plugin.

It is made available through PHP (such as in a themehooks file) with the function call:

```php
if (class_exists("HeroImagePlugin")) {
    $link = HeroImagePlugin::getCurrentHeroImageLink();
}
```

## Example usage

The simplest usage is to just use the provided link in an image tag.

```html
<img src="{hero_image_url}" class="MyHeroImage"/>
```

Sometimes you the need the flexibility of background image though (if you want to the image to stretch across the whole screen). An example might look like the following:

```html
<div class="MyHero" style="background-image: url('{hero_image_url}')">
    <h1>{$Title}</h1>
    <p>{$Description}</p>
    {breadcrumbs}
</div>
```

```css
.MyHero {
    width: 100%;
    height: 300px;
    background-color: grey;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
```

Note that the actual image is set using the inline style.
