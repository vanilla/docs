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

This plugin provides an easy way to have a custom background image for every page of the forum. It allows you to upload this image in the dashboard and access it through a [Smarty Template](/developer/smarty/functions/#function-hero-image-url) or [Customize Theme](/help/appearance/custom-theme).

It also allows you override an the main image on a per-category basis. Overriding this background image for a category will also override the background image for every category or discussion inside of that category. This allows you to have a tree of background images through your forum, managed through the dashboard.

<aside class="note">In order to be flexible this plugin does __not__ provide an out of the box solution for existing themes. Integrating the image will require custom theming work to be done. It's best to be knowledgeable in both HTML and CSS before using this plugin.</aside>


## Setup

- Visit the addon's page of the dashboard. (`dashboard/settings/addons`)
- Enable the HeroImage plugin.
![](/img/help/addons/hero-image/hero-image-enable.png)

## Set the hero image

1. Click on the settings icon next to the plugin.
![](/img/help/addons/hero-image/hero-image-settings.png)
2. Click on the file picker to select your image.
![](/img/help/addons/hero-image/hero-image-set-default.png)
3. Click save.

## Override the hero image for a category.

1. Navigate to the category page of the dashboard. (`/vanilla/settings/categories`)
2. Edit a category.
3. Scroll to the Hero Image section.
4. Use the file picker to upload a file.
![](/img/help/addons/hero-image/hero-image-set-category.png)
5. Click Save.

## Which image will show up for a page?

The default image is the one set in [plugin's setting](#set-the-hero-image). This image will always be returned for pages like Activity, Profile, Search, and many Ctegory & Discussion pages.

A Discussion page will always return the same image as the category it is in.

A Category page will by default return the default image unless:
- It has an [image override](#override-the-hero-image-for-a-category) set directly on itself through the dashboard.
- One of its parent categories has an image override set through the dashboard. A category will use it's closest parent category's image if set.

## Usage in Smarty

The URL of the image for the current page will be made available to Smarty Templates and customize theme with the tag:

```tpl
{hero_image_url}
```

If you place this custom smarty tag in your [Customize Theme](/help/appearance/custom-theme), and disable the Hero Image plugin you site _will_ break until you either remove the tag or re-enable the plugin.

## Usage in PHP
Alternatively, this image url is made available through PHP (such as in a [themehooks](/developer/addons/theme-hooks) file) with the function call:

```php
if (class_exists("HeroImagePlugin")) {
    $link = HeroImagePlugin::getCurrentHeroImageLink();
}
```

## Example usage

There are multiple ways to use the image URL. 

### With an Image Tag
```html
<img src="{hero_image_url}" class="MyHeroImage"/>
```

### With a background image
Sometimes you the need the flexibility of background image though (if you want to the image to stretch across the whole screen). This usage requires both HTML and CSS. An example might look like the following:

#### HTML
```html
<div class="MyHero" style="background-image: url('{hero_image_url}')">
    <h1>{$Title}</h1>
    <p>{$Description}</p>
    {breadcrumbs}
</div>
```

#### Styles

This plugin doesn't provide styles for a background image. You will need to set them yourself in the CSS portion of [Customize Theme](/help/appearance/custom-theme). See the [Vanilla Forums Theme Guide](https://static.v-cdn.net/vfcom/docs/Vanilla-Forums-Theme-Guide.pdf) for tips and tricks on using Customize Theme.

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
