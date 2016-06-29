---
title: Theming Hooks
layout: docs
categories: ["Theming"]
---

## Theming Hooks
Themes can be imbued with the power of plugins via a special hooks php file. Using the hooks file, you can override existing functions in Vanilla, plug in to existing Vanilla events, and set data for your views.

To use hooks, create a file named class.themehooks.php in your theme's root directory (/themes/your_theme_name/class.themehooks.php) and edit it there. Hooks files implement Gdn_IPlugin, which requires the specification of a setup method, which is run whenever the theme is enabled. The setup method is a good place to set any config variables your theme may rely on.

To get a better understanding of what the theme hooks are capable of, familiarize yourself with [custom events & handlers](http://docs.vanillaforums.com/developers/plugins/#custom-events-handlers), [magic events](http://docs.vanillaforums.com/developers/plugins/#magic-events), [function overrides](http://docs.vanillaforums.com/developers/plugins/#function-overrides), and [magic methods](http://docs.vanillaforums.com/developers/plugins/#magic-methods).


Here's an example of a themehooks file that sets some config variables, adds locale data for the view, adds a respond button to the discussion page, and overrides a method to add an extra css class to a menu count span.

```php
<?php
/**
 * @author    My Name <name@email.com>
 * @copyright 2015 (c) My Organizations
 * @license   http://opensource.org/licenses/MIT MIT
 */

/**
 * Sets config variables on enabling MyThemeName, adds locale data to the view,
 * and adds a respond button to the discussion page.
 */
class MyThemeNameThemeHooks implements Gdn_IPlugin() {

    /**
     * Sets some config settings for a modern layout with top-level
     * categories displayed as headings.
     *
     * @return boolean Whether setup was successful.
     */
    public function setup() {
        // Set some config settings for a modern layout with top-level categories displayed as headings.
        saveToConfig(array(
            'Vanilla.Discussions.Layout'     => 'modern',
            'Vanilla.Categories.Layout'      => 'modern',
            'Vanilla.Categories.DoHeadings'  => true,
            ), null, true);
        return true;
    }

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
