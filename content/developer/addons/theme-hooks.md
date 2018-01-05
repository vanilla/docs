---
title: Theme Hooks
tags:
- Theming
- Events
- Themehooks
- Addon
- Plugin
category: developer
menu:
  developer:
    parent: addons
aliases:
- /theming/hooks
- /developer/theming/hooks
---
## Theme Hooks

Themes can be imbued with the power of plugins via a special themehooks php file. Using the themehooks file, you can override existing functions in Vanilla, plug in to existing Vanilla events, and set data for your views.

## Naming

To use event hooks in a theme, the theme must have a plugin with a classname ending in `ThemeHooks` and must a filename containing `class.themehooks.php`. The prevailing convention results in a class `MySiteThemeHooks` and file `class.mysite.themehooks.php`. This file must be located in the root of your addon.

## Events

To get a better understanding of what the theme hooks are capable of, familiarize yourself with [custom events & handlers](/developer/addons/events-and-handlers), [magic events](/developer/addons/events-and-handlers/#magic-events), [example events](/developer/addons/events-and-handlers/#example-events), [function overrides](/developer/addons/function-overrides), and [magic methods](/developer/addons/events-and-handlers/#magic-methods).

Here's an example of a themehooks file that sets some config variables, adds locale data for the view, adds a respond button to the discussion page, and overrides a method to add an extra css class to a menu count span.

## Example Themehooks

```php
<?php
/**
 * @author    My Name <name@email.com>
 * @copyright 2015 (c) My Organizations
 * @license   http://opensource.org/licenses/MIT MIT
 */

/**
 * Adds locale data to the view, and adds a respond button to the discussion page.
 */
class MyThemeNameThemeHooks extends Gdn_Plugin {

    /**
     * Fetches the current locale and sets the data for the theme view.
     * Render the locale in a smarty template using {$locale}
     *
     * @param  Controller $sender The sending controller object.
     */
    public function base_render_before($sender) {
        // Bail out if we're in the dashboard
        if (inSection('Dashboard')) {
            return;
        }

        // Fetch the currently enabled locale (en by default)
        $locale = Gdn::locale()->current();
        $sender->setData('locale', $locale);
    }

    /**
     * Adds a 'respond' button on a discussion page below the discussion title
     * that links to the comment form.
     *
     * @param DiscussionController $sender The sending object.
     */
    public function discussionController_afterDiscussionTitle_handler($sender) {
        // Ensure the user is signed in.
        if (Gdn::session()) {
            echo '<div class="below-discussion-title">'.
                 '<a class="respond-button Button" href="#Form_Comment">Respond</a>'.
                 '</div>';
        }
    }
}

/**
 * Adds a new css class to counts in the side panel filter
 * menu in a discussion list. Overrides the method in the DiscussionFilterModule
 * (applications/vanilla/views/modules/discussionfilter.php)
 *
 * @param int|null $count The number to include in the count.
 * @param string $url The url to the popin rel for the count.
 */
if (!function_exists('filterCountString')) {
    function filterCountString($count, $url = '') {
        $count = countString($count, $url);
        return $count != '' ? '<span class="a-new-css-class aside">'.$count.'</span>' : '';
    }
}
```


## Common Hooks

There are a few common functions for a themehooks file.

### base_render_before()

This runs on every single page load before the render. This includes the Dashboard so be sure to exclude it! This is also a good place to use the `Gdn_Controller` method `setData()` to inject data into your Smarty templates. 

For information about using this injected data see [Accessing Controller Data with Smarty](/developer/smarty/#accessing-controller-data-with-smarty). If you're trying to verify that the data that is getting passed into the template, try out the [{debug} function](/developer/smarty/functions/#function-debug) in smarty.

### setup()

This runs when your theme is enabled. This is a good place for setting configuration values your theme may rely on, but is not required.

### structure()

This update function is called every time you reach the `/utility/update` endpoint. Many plugins use this as a place to update the database, but it can be a good place for configuration values as well, and can be used to manually create a category, discussion, Pocket, etc that your theme relies on.

This event is optional.

### Example

Here is an example of setup and structure methods being used together.
```php
public function setup() {
    $this->structure();
}

public function structure() {
    saveToConfig([
        'Routes.DefaultController' => array('categories', 'Internal'),
        'Vanilla.Categories.Layout' => 'table',
        'Vanilla.Discussions.Layout' => 'table',
        'Garden.Thumbnail.Size' => '200',
    ]);

    return true;
}
```

## Other Examples

For more examples see our [Example Events section](/developer/addons/events-and-handlers/#example-events).
