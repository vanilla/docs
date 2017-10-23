---
title: CSS
tags:
- Theming
- CSS
category: addons
menu:
  developer:
    parent: addons
    weight: 20
aliases:
- /theming/css
- /developer/theming/css
---
## Theming with CSS

### Theming Hosted Vanilla
You can overide any theming you want in the customize theme section in your Vanilla dashboard. Apply any CSS you feel is appropriate to override the current theme. If you are looking to learn more about customizing CSS in our hosted product, check out theme tips on our [blog](https://blog.vanillaforums.com/tag/fridaytips/).

#### Adding additional CSS

To add additional CSS to the existing base Vanilla CSS file:

1. Create a new file called `custom.css`
2. Place it in the design folder in your theme folder (i.e., `/themes/your_theme_name/design/custom.css`)

This CSS file is added after the base CSS file and all other plugin and application-specific CSS files.

### Tips and troubleshooting

Here are a few gotchas that can occur when styling Vanilla.

#### Layouts

Vanilla offers either a HTML table layout or list layout for its Categories and Discussions listings. Each layout has its own set of CSS classes, so it's best to decide which layout you'd like to use before you start styling your theme. This layout can be selected from the dashboard's Homepage section. You can also specify your theme's layout in the $ThemeInfo array in your theme's [addon.json](/developer/addons/addon-info) file. When your theme is enabled, the settings in the Layout section will be set to match what is specified in that file. See the [Theming Quickstart Guide](/developer/addons/them-quickstart#set-layout-options) for instructions on setting these values.

#### Addons

Addons have the ability to add CSS files to your forum or HTML elements to views. As such, enabling an addon can sometimes mess with your forum's CSS and layout. To mitigate this, it's best to enable all the addons you anticipate using while you work on your theme.

If you do enable an addon and encounter some undesirable CSS side effects, it's good to know that your theme's custom.css file is added after the plugins' CSS files, so overriding the CSS rules defined in the plugin's CSS should be a breeze.

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
