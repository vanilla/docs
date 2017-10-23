---
title: Addon Quickstart
tags:
- Developers
- Addons
- Addon
- Plugin
- Quickstart
category: addons
menu:
  developer:
    parent: addons
aliases:
- /developers/plugins/quickstart
- /developer/plugins/quickstart
---
## Quickstart Links

* Read about our event and handler system: [Vanilla Events & Handlers](/developer/addons/events-and-handlers)
* See details about the [Addon Information Format](/developer/addons/addon-info)
* Download the official [Example addon](https://open.vanillaforums.com/addon/example-plugin)
* Download other addons from the [Addon Directory](https://open.vanillaforums.com/addons) and borrow their code.
* Get help in the [developer community](https://open.vanillaforums.com/categories/developers)

## Quickstart Guide

Vanilla is built on an object-oriented, MVC framework. If you're coming at this from a mostly function-based world like WordPress or Drupal, this might read like moonspeak. That's OK! Soak it up and ask questions on the forum after you follow this guide and play with the examples.

Ready to code? Grab the [Example addon](https://open.vanillaforums.com/addon/example-plugin) and use it below for an even quicker start. Hang onto your butts, here we go:

1. [Name your addon](#1-name-your-addon).
1. [Define your addon](#2-define-your-addon).
1. [Find your events](#3-find-your-events).
1. [Write a plugin in your addon](#4-write-a-plugin-in-your-addon).
1. [Add CSS or Javascript](#5-add-css-or-javascript).

### 1. Name your Addon

Conventionally, Vanilla uses, well, pretty vanilla addon names. We often favor descriptive names over clever ones or mini-brands.

Your addon needs a user-facing name, and a 'slug' name without spaces or special characters. If your addon is named "Lincoln's Fancy Addon" a good slug name would be `lincolns-fancy-addon` or even just `fancyaddon`.

### 2. Define your Addon

First, create a folder in the `plugins` directory, using the slug name you selected (e.g. `fancyaddon`). Next let's create a file called `addon.json`. This file will define basic information about our addon. See an exhuastive list of [all of the options](/developer/addons/addon-info). Next open the file add the addon information. You can use this as a starting point:

```json
{
    "type": "addon",
    "key": "fancyaddon",
    "name": "Lincoln&rsquo;s Fancy Addon ",
    "description": "This is a fancy addon!",
    "version": "1.0.0",
    "mobileFriendly": true,
    "authors": [
        {
            "name": "Your Name",
            "email": "you@yourdomain.com",
            "homepage": "http://yourdomain.com"
        }
    ]
}
```

The `key` value (`fancyaddon` above) ***must exactly match*** the folder name, including capitalization. Some systems are case-insensitive and will ignore differences in capitalization, but others are not, so make sure they match!

#### Define basic info

The `name` parameter is optional; it will default to the slug if omitted. To include special characters here or in the description, use their [HTML entity code](https://www.w3schools.com/html/html_entities.asp).

Provide a great `description` that briefly explains what your addon does from the users' perspective. For `version`, familiarize yourself with [semantic versioning](http://semver.org/).

The `authors` parameters are at your discretion. We recommend using a support address for both the email and URL. `authors` takes an array so be sure to include anyone who's name you want on the addon.

The `mobileFriendly` parameter allows the addon to be automatically disabled when accessing the site via a mobile device. We recommend defining it as `true`. If omitted, it defaults to `false`.

All further optional parameters described below default to `false` if not defined.

#### Define a settings page

To create a "Settings" button that will appear on the addon after it is enabled, add these to your definition:

```json
"settingsUrl": "/settings/somepagehere",
"settingsPermission": "Garden.Settings.Manage",
```

#### Define requirements

You can require a certain version of Vanilla before your addon can be enabled. Require a certain version of Vanilla by adding this:

```json
"require": {
    "vanilla": ">=2.4"
},
```

You can require other addons to be enabled be using this instead:

```json
"require": {
    "vanilla": ">=2.4",
    "Akismet": ">=1.0.1",
    "StopForumSpam": ">=1.0"
},
```

These checks only apply to addon's being enabled/disabled in the dashboard. If a user manually enables your addon or disables a dependancy in the configuration these checks may not apply. Therefore, it is very important to **use defensive programming techniques to guard against missing prerequisites**, rather than simply assuming they will always be there just because you put it in the requirements.

#### Visibility

If you've got [Vanilla Cloud](http://vanillaforums.com), make sure to also [set your addon's visibility](/developer/adddons/addon-visibility).

#### Define new permissions

Adding new permissions via addon is easy. Any defined here will be added as soon as the addon is enabled. It's important to know more about [using permissions in Vanilla](/developers/framework/permissions/) before doing this.

You can provide an array of permission names using dot syntax. You can optionally use key/value pairs to set a default (`1` will give all roles the permission; `0` is the default and leaves it off for all roles to start).

```json
"registerPermissions": {
    "FancyAddon.DoStuff.Add" => 1
},
```

Or set the default to whether or not the role currently has an existing permission:

```json
"registerPermissions": {
    "Plugins.FancyAddon.PermissionName": "Garden.Settings.Manage"
},
```

This allows you to set good defaults while allowing them to be changed independently in the future.

#### Whew!

That whole definitions section probably didn't *seem* very quick, but you just did a huge amount of work in just a few lines of code.

### 3. Find your events

Read the [events and handlers guide](/developer/addons/events-and-handlers) for more information on how to override & extend Vanilla.

Open the [core repo](http://github.com/vanilla/vanilla) in an IDE and use the project search functionality to locate instances of `fireEvent()`. Many doc blocks show what events are fired within their methods.

Alternatively, search for `_handler` in the [addons repo](http://github.com/vanilla/addons) to see examples and common uses.

Lastly, [find an addon](https://open.vanillaforums.com/addons) that does something similar to what you're trying to do, and check out its code. Maybe between 3 or 4 addons you can find a good portion of what you're trying to accomplish.

### 4. Write a plugin in your addon

After creating your `addon.json` file, you will want to make your a file. Not all addons need to define a plugin. Themes generally don't. Inside your addon's folder, create a file that includes the slug name (e.g. `class.fancyplugin.php`). Next open the file and create a class extending `Gdn_Plugin`, and name the class using the slug name of your plugin followed by the word 'Plugin' to avoid namespace conflicts.

```
class FancyPlugin extends Gdn_Plugin {

}
```

Inside the class, write some event handlers. Most handlers are written like this:

```php
public function someController_someEvent_handler($sender, $args) {
   // Do something.
}
```

Use the `$sender` variable to call methods from the controller or model that triggered your code. 

Use the `$args` variable to change parameters or detect certain situations. This is where you'll want to start digging into the finer points of [extending Vanilla with Event Handlers documentation](/developer/addons/events-and-handlers).

You can also use normal methods to reuse code. For instance, maybe you need 2 different hooks to do the same thing:

```php
public function discussionsController_someEvent_handler($sender, $args) {
   $this->commonMethod($sender, $args);
}

public function categoriesController_someOtherEvent_handler($sender, $args) {
   $this->commonMethod($sender, $args);
}

public function commonMethod($sender, $args) {
   // Do something for both the events above so we keep things DRY.
}
```

Need a simple settings page? See the [ConfigurationModule](https://github.com/vanilla/vanilla/blob/master/applications/dashboard/modules/class.configurationmodule.php) and how it is used in other plugins for a quick & easy way of making one.

If you need to, you can [override functions from core](/developer/addons/function-overrides). Do this conservatively and carefully.

### 5. Add CSS or javascript

By convention, place CSS files in a folder named `design`, Javascript files in a folder named `js`, views or templates in a folder named `views`.

To include a CSS file in all non-Dashboard pages:

```php
public function assetModel_styleCss_handler($sender) {
   $sender->addCssFile('fancy.css', 'plugins/fancyaddon');
}
```

Note the second parameter is the folder.

To include a CSS file in a specific page (e.g. the Discussions list):

```php
public function discussionsController_render_before($Sender) {
   $sender->addCssFile('fancy.css', 'plugins/fancyaddon');
}
```

To include a JS file: `$sender->addJsFile('fancy.js', 'plugins/fancyaddon');`.

To output the view `fancy.php` in your `views` folder: `$sender->render('fancy', '', 'plugins/fancyaddon');`

Again, for a simple settings page, don't create your own views. Use the `ConfigurationModule`.

## Quickstart Epilogue

That should put you well on your way to your first Vanilla addon! Dream big, but pick something small for your first attempt. You'll learn a ton, and be better positioned to go big after that.

Final tips:

* Use the [troubleshooting guide](/developer/troubleshooting).
* Use `decho()` to output variables & `trace()` to leave breadcrumbs.
* **Wrap all URLs** with `url()` to account for subfolder'd forums.
* **Never hard-code paths**. Use constants like `PATH_UPLOADS`.
* **Use models** to access the database rather than writing your own queries. E.g.: Need discussions? Look at `DiscussionModel`.
* Adding your own data to the database? Read about the [database query builder](/developer/framework/database).

And, as always, ask the talented & helpful folks on our [community forum](https://open.vanillaforums.com) when you get stuck.
