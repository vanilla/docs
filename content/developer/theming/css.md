---
title: Theming CSS
layout: docs
categories: ["Theming"]
---

## Theming with CSS

### Theming Hosted Vanilla
You can overide any theming you want in the customize theme section in your Vanilla dashboard. Apply any CSS you feel is appropriate to override the current theme. If you are looking to learn more about customizing CSS in our hosted product, check out theme tips on our [blog](https://blog.vanillaforums.com/tag/fridaytips/).

### Adding CSS to your theme

There are two options for adding CSS to your theme in our open source version. You can completely override the existing base CSS file (style.css) or you can add an additional CSS file (custom.css) that gets added after the base CSS file.

Especially for beginners or new Vanilla users, adding an additional CSS file (custom.css) is is often preferable to completely overriding the base CSS for a number of reasons:

1. Support: Any upgrades to the base CSS file will still be applied to your theme.
2. Completeness: There will still be styling applied to anything missed by your new CSS file.
3. Clarity: It's easier for you to see what your specific customizations to Vanilla are, as they are self-contained in custom.css.

#### Adding additional CSS

To add additional CSS to the existing base Vanilla CSS file:

1. Create a new file called custom.css
2. Place it in the design folder in your theme folder (i.e., /themes/your_theme_name/design/custom.css)

This CSS file is added after the base CSS file and all other plugin and application-specific CSS files.

#### Overriding the base CSS

This option should be used only if you know what you're doing. To completely override the existing base Vanilla CSS file:

1. Create a new file called style.css
2. Place it in the design folder in your theme folder (i.e., /themes/your_theme_name/design/style.css)

Starting from scratch can be a daunting task so you may want to copy the existing base CSS from /applications/dashboard/design/style.css into your new style.css file and then edit the existing CSS.

This CSS file is added before the plugin and application-specific CSS files. You may still want a custom.css file to override CSS rules in the plugin and application-specific CSS files.

### Tips and troubleshooting

Here are a few gotchas that can occur when styling Vanilla.

#### Layouts

Vanilla offers either a HTML table layout or list layout for its Categories and Discussions listings. This layout can be specified in the dashboard's Homepage section. Each layout has its own set of CSS classes, so it's best to decide which layout you'd like to use before you start styling your theme.

#### Plugins

Plugins have the ability to add CSS files to your forum or HTML elements to views. As such, enabling a plugin can sometimes mess with your forum's CSS and layout. To mitigate this, it's best to enable all the plugins you anticipate using while you work on your theme.

If you do enable a plugin and encounter some undesirable CSS side effects, it's good to know that your theme's custom.css file is added after the plugins' CSS files, so overriding the CSS rules defined in the plugin's CSS should be a breeze.

#### Hiding content

Using `display: none;` to hide elements on a page is often a good choice for removing content that is not valuable to you or your community. However, when doing so, make sure to make the CSS rule as specific as possible.

For instance, let's say you want to hide the discussions link in the side panel navigation on the Discussions page. A very bad way to accomplish this would be by using the CSS rule:

```css
.Discussions {
  display: none;
}
```
This rule will succeed in hiding the link, but also the body of the Discussions page, as the body element includes the Discussions CSS class. A better, safer rule would be:

```css
.Section-DiscussionList .FilterMenu .Discussions {
  display: none;
}
```

`.Section-DiscussionList` targets the discussion page, `.FilterMenu` targets a filtering menu, and `.Discussions` targets a specific list item in the menu. This is much less likely to have undesired side effects.
