---
title: Theming Views
layout: docs
categories: ["Theming"]
---

## Theming Views

### The master view

The master view for your forum is the wrapper for each page in your forum. Often, this is the only view you'll have to manipulate in your theme. The master view file is called the default.master.tpl (Smarty template) or the default.master.php. We recommend using Smarty templates for your master view, however you can decide to use a regular ol' php view if you like.

To override the default master view:

1. Create a new file called default.master.tpl (or default.master.php)
2. Place it in the view folder in your theme folder (i.e., /themes/your_theme_name/design/custom.css)

If you're new to this, it's probably a good idea to copy the content of /applications/dashboard/views/default.master.tpl into your theme's master view and manipulate it from there.

#### Smarty tags in the master view

You can accomplish a great deal of things using Smarty in your default master view. We highly recommend checking out our [complete Smarty docs](/theming/smarty) to get a bearing on this, but here's what you need to know to get started.

##### Required tags

There are a few assets that need to appear and an event that needs to be fired from your master view in order for everything to run smoothly. (To learn more about assets and events, check out [our framework docs](/developers/framework).) The contents of these tags are programmatically generated, depending on your forum's data and configuration. Omitting any one of these tags may result in some strange behaviour on your forum.

1. **The head asset** `{asset name="Head"}` This should appear within the head `<head>` block of your html. It contains the css and javascript needed for your applications and plugins.
2. **The content asset** `{asset name="Content"}` This should appear within the body `<body>` block of your html. It contains the main content of any page.
3. **The panel asset** `{asset name="Panel"}` This should appear within the body `<body>` block of your html. It generally adds tertiary functionality to the forum, however it does include necessary functionality for the *Profile* and *Conversation* sections of forum. If you decide to go with a panel-less design, we recommend using css to hide the panel on pages where it's unnecessary or to manually adding the panel into the forum sections where it is necessary using the inSection function (see the *More Smarty tips and tricks* section below for an example of this).
4. **The foot asset** `{asset name="Foot"}` This should appear after the Content asset within the body `<body>` block of your html. Plugins and applications add content or scripts to this asset.
5. **The AfterBody event** `{event name="AfterBody"}` This should appear just before the closing body tag `</body>` of your html. Plugins and applications hook into this event to generate content.

##### Useful tags and practices

1. **Searchbox** `{searchbox}` Adds a handy little searchbox.
2. **Breadcrumbs** `{breadcrumbs}` Adds breadcrumbs, a crucial detail when navigating a forum.
3. **The Me module** `{module name="MeModule"}` Adds the Me module. This module contains dropdowns for notifications, bookmarks, conversations and settings. It helps a logged-in user access what's important to them.
4. **Opening body tag** `<body id="{$BodyID}" class="{$BodyClass}">` This is how we recommend opening your body element. It adds programmatically generated CSS classes and ids to the body block, which are very useful for targeting sections when styling your forum.

The most up-to-date set of Smarty functions and modifiers can be tracked down in /library/vendors/SmartyPlugins.

##### More Smarty tips and tricks

1. **Signed in users** You can add content to your forum depending on whether a user is signed in or not. For example: `{if $User.SignedIn}Welcome back!{/if}` This  snippet adds a welcome message for any signed in user.
2. **Forum sections** You can add content to your forum depending on what section you're in. For example: `{if inSection(array('Profile', 'Conversation'))}{asset name="Panel"}{/if}` This snippet adds the panel asset to the Profile and Conversation sections of the forum. You can find the section name of any page in the forum by using your browser's web tools to inspect the body element. One of the CSS classes on the body element will be Section-\*, where \* is the section name. (Assuming you have adhered to the opening body tag tip above.)

##### Smarty variables and setting page data (Advanced)

If you've read this far, you may have noticed we've used some variables above to determine the logged-in state of the user (`$User`) and to add body classes to and ids to the body tag (`$BodyID` and `$BodyClass`). You'll probably not be surprised to learn that there are even more variables you can access and use!

**For use in testing environments only**, to view all the variables you have access to, you can include a special tag anywhere in your default master view: `{debug}` After adding this tag, refresh your forum page in a browser. A popup will show all the data variables available for use on the given page (you gotta make sure your browser's allowing popups here).

To go even further, you can use [themehooks](/theming/hooks) to assign data to variables that you can then use in your view.

#### Smarty default master view example

To see how it all fits together, here's a default master view using Smarty:

```html
<!DOCTYPE html>
<html lang="{$CurrentLocale.Lang}">
<head>
    {asset name="Head"}
</head>
<body id="{$BodyID}" class="{$BodyClass}">
<div id="Frame">
    <div class="Head" id="Head">
        <div class="Row">
            <div class="SiteTitle">
                <a href="{link path="/"}">{logo}</a>
            </div>
            <div class="SiteSearch">{searchbox}</div>
            <ul class="SiteMenu">
                {dashboard_link}
                {discussions_link}
                {activity_link}
                {inbox_link}
                {custom_menu}
                {profile_link}
                {signinout_link}
            </ul>
        </div>
    </div>
    <div id="Body">
        <div class="Row">
            <div class="BreadcrumbsWrapper">{breadcrumbs}</div>
            <div class="Column PanelColumn" id="Panel">
                {module name="MeModule"}
                {asset name="Panel"}
            </div>
            <div class="Column ContentColumn" id="Content">{asset name="Content"}</div>
        </div>
    </div>
    <div id="Foot">
        <div class="Row">
            <a href="{vanillaurl}" class="PoweredByVanilla" title="Community Software by Vanilla Forums">
                Forum Software Powered by Vanilla
            </a>
            {asset name="Foot"}
        </div>
    </div>
</div>
{event name="AfterBody"}
</body>
</html>
```

### Overriding other views

Now that you know how to override and configure the master view, you may want to configure the content of the assets and modules. Before we get there though, a warning: overriding a view can be a rather severe addition to a theme. Once a view is overridden, it diverges from core Vanilla. As such, your new view may not always be supported in future versions of Vanilla, which may cause problems down the road. If it's possible to accomplish what you're trying to do using good ol' CSS, or [themehooks](/theming/themehooks), or by being clever with the configuration of your master view, those are probably better ways to go.

With that warning out of the way, here's how you can override a view in Vanilla. Some plugins and every application contains a views folder. To override any file in this folder:

1. Copy the view file from the source view folder
2. Place it in the view folder in your theme folder *following the same file path* (i.e., copy the view from /applications/vanilla/views**/discussions/index.php** to /themes/your_theme_name/views**/discussions/index.php**)

#### Overriding helper functions

Many views use helper functions to generate their markup. This helper file can be overridden, as well. However, most of the time you'll only need to override one or two functions from this file. Rather than overriding the entire file, it's better to override just the functions that you need to override. To do this:

1. Create a new file in your theme's view folder following the same path as the source helper functions file
2. Copy the functions you want to override into this new file
3. Add a include statement to the source helper functions file, for example:
    ```php
    include_once PATH_APPLICATIONS.'/vanilla/views/discussions/helper_functions.php';
    ```
    or
    ```php
    include_once PATH_PLUGINS.'/Reactions/views/reaction_functions.php';
    ```

Here's an example of a file that changes the heading of the discussion column in a discussion table from 'Discussion' to the name of the parent category. It overrides the applications/vanilla/views/discussions/helper_functions.php view:

```php
<?php
if (!function_exists('DiscussionHeading')):
    function DiscussionHeading() {
        return htmlspecialchars(Gdn::Controller()->data('Category.Name', T('Discussion')));
    }
endif;

include_once PATH_APPLICATIONS.'/vanilla/views/discussions/helper_functions.php';
```
