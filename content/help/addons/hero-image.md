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

This plugin provides an easy way to have a custom background image for every page of the forum. It allows you to upload this image in the dashboard and access it through a [Smarty Template](/developer/smarty/functions/#function-hero-image-url) or [Customize Theme](/help/appearance/custom-theme).

It also allows you override the main image on a per-category basis. A category can optionally have its own background image. Any child categories inside this category will inherit from the parent category, unless it has its own image set. Discussions will always user their category's image.

<aside class="note">In order to be flexible this plugin does __not__ provide an out of the box solution for existing themes. Integrating the image will require custom theming work to be done. It's best to be knowledgeable in both HTML and CSS before using this plugin.

See our <a href="/developer/addons/theme-quickstart/">Custom Theme Guide</a> and <a href="/developer/addons/theme-quickstart/">Theming Quickstart Guide</a> for tips and guides on getting started.
</aside>

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

The default image is the one set in [plugin's setting](#set-the-hero-image). This image will always be returned for pages like activity, profile, search, and many category & discussion pages.

A discussion page will always return the same image as the category it is in.

A category page will return the default image (set in the [plugin's setting](#set-the-hero-image)) unless:
- It has an [image override](#override-the-hero-image-for-a-category) set in the category settings.
- One of its parent categories has an [image override](#override-the-hero-image-for-a-category) set in the category settings.

## Usage in Smarty

The URL of the image for the current page will be made available to Smarty Templates and customize theme with the tag:

```tpl
{hero_image_link}
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

### Simple example

The easiest way to use the hero image url is through and image tag.
```html
<img src="{hero_image_link}" class="MyHeroImage"/>
```

### Advanced Usage
Sometimes you need more flexibility than an `<img>` tag can provide. If so you can set an inline background-image. This usage requires both HTML and CSS. An example might look like the following:

#### HTML
```html
<div class="MyHero" style="background-image: url('{hero_image_link}')">
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
