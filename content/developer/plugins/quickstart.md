---
title: Plugin Quickstart
layout: docs
categories: ["Developers","Addons"]
---

## Quickstart Links

* Read about our hooks system: [Extending Vanilla with plugins](/developers/plugins)
* Download the official [Example plugin](http://vanillaforums.org/addon/example-plugin)
* Download other plugins from the [Addon Directory](http://vanillaforums.org/addons) and borrow their code.
* Get help in the [developer community](http://vanillaforums.org/categories/developers)

## Quickstart Guide

Vanilla is built on an object-oriented, MVC framework. If you're coming at this from a mostly function-based world like WordPress or Drupal, this might read like moonspeak. That's OK! Soak it up and ask questions on the forum after you follow this guide and play with the examples.

Ready to code? Grab the [Example plugin](http://vanillaforums.org/addon/example-plugin) and use it below for an even quicker start. Hang onto your butts, here we go:

1. Name your plugin.
1. Define your plugin.
1. Find your hooks.
1. Write your code.
1. Add helper files.


### 1. Name your plugin

Conventionally, Vanilla uses, well, pretty vanilla plugin names. We often favor descriptive names over clever ones or mini-brands.

Your plugin needs a user-facing name, and a 'slug' name without spaces or special characters. If your plugin is named "Lincoln's Fancy Plugin" a good slug name would be `LincolnsFancyPlugin` or even just `FancyPlugin`.

### 2. Define your plugin

First, create a folder in the `plugin` directory, using the slug name you selected (e.g. `FancyPlugin`). Inside the folder, create a file that includes the slug name (e.g. `class.fancyplugin.php`). Next, open the file and add the plugin definition at the top, like this:

```
<?php
// Define the plugin:
$PluginInfo['FancyPlugin'] = array(
   'Name' => 'Lincoln&rsquo;s Fancy Plugin',
   'Description' => 'This is a sample plugin.',
   'Version' => '1.0',
   'Author' => "Your Name",
   'AuthorEmail' => 'you@yourdomain.com',
   'AuthorUrl' => 'http://yourdomain.com',
   'MobileFriendly' => TRUE,
);
```

The array key (`FancyPlugin` above) ***must exactly match*** the folder name, including capitalization.


#### Define basic info

The `Name` parameter is optional; it will default to the slug if omitted. To include special characters here or in the description, use their HTML code.

Provide a great `Description` that briefly explains what your plugin does from the users' perspective. For `Version`, familiarize yourself with [semantic versioning](http://semver.org/).

The `Author` parameters are at your discretion. We recommend using a support address for both the email and URL.

The `MobileFriendly` parameter allows the plugin to be automatically disabled when accessing the site via a mobile device. We recommend defining it as `TRUE`. If omitted, it defaults to `FALSE`.

All further optional parameters described below default to `FALSE` if not defined.


#### Define a settings page

To create a "Settings" button that will appear on the plugin after it is enabled, add these to your definition:

```
   'SettingsUrl' => '/settings/somepagehere',
   'SettingsPermission' => 'Garden.Settings.Manage',
```


#### Define requirements

You can require a certain version of Vanilla or that other plugins be enabled before yours can be enabled. Require a certain version of Vanilla by adding this:

```
   'RequiredApplications' => array('Vanilla' => '2.0.18'),
```

Require some other plugins to be enabled first in much the same way:

```
   'RequiredPlugins' => array('Akismet' => '1.0.1', 'StopForumSpam' => '1.0'),
```

Note that this only requires them at the time of enabling. A user could later disable the plugin(s). Therefore, it is very important to **use defensive programming techniques to guard against missing prerequisites**, rather than simply assuming they will always be there just because you put it in the requirements.


#### Define new permissions

Adding new permissions via plugin is easy. Any defined here will be added as soon as the plugin is enabled. It's important to know more about [using permissions in Vanilla](http://docs.vanillaforums.com/developers/framework/permissions/) before doing this.

You can provide an array of permission names using dot syntax. You can optionally use key/value pairs to set a default (`1` will give all roles the permission; `0` is the default and leaves it off for all roles to start).

```
'RegisterPermissions' => array('FancyPlugin.DoStuff.Add' => 1),
```

Or set the default to whether or not the role currently has an existing permission:

```
'RegisterPermissions' => array('FancyPlugin.DoStuff.Add' => 'Garden.Settings.Manage`),
```

This allows you to set good defaults while allowing them to be changed independently in the future.


#### Whew!

That whole definitions section probably didn't *seem* very quick, but you just did a huge amount of work in just a few lines of code.


### 3. Find your hooks

Try the [Eventi plugin](http://vanillaforums.org/addon/eventi-plugin) to visualize where events are fired in Vanilla. Use the hooks in the [Example plugin](http://vanillaforums.org/addon/example-plugin) to see what they do.

Read the [plugin hooks tutorial](/developers/plugins) for more on how to override & extend Vanilla.

Use an IDE and use the project search functionality to locate instances of `FireEvent` in the [core repo](http://github.com/vanilla/vanilla). Many doc blocks show what events are fired within their methods. Or, search for `_Handler` in the [addons repo](http://github.com/vanilla/addons) to see examples and common uses.

Lastly, [find a plugin](http://vanillaforums.org/addon) that does something similar to what you're trying to do, and check out its code. Maybe between 3 or 4 plugins you can find a good portion of what you're trying to accomplish.

### 4. Write your code

After your `$PluginInfo` array, you'll need a class. Always extend `Gdn_Plugin`, and name the class using the slug name of your plugin followed by the word 'Plugin' to avoid namespace conflicts.

```
class FancyPlugin extends Gdn_Plugin() {

}
```

Inside the class, give methods special names to invoke hooks. Most hooks in a plugin are written like this:

```
public function SomeController_SomeEvent_Handler($Sender, $Args) {
   // Do something.
}
```

Use the `$Sender` variable to call methods from the controller or model that triggered your code. Use the `$Args` variable to change parameters or detect certain situations. This is where you'll want to start digging into the finer points of [extending Vanilla with plugins](/developers/plugins).

You can also use normal methods to reuse code. For instance, maybe you need 2 different hooks to do the same thing:

```
public function DiscussionsController_SomeEvent_Handler($Sender, $Args) {
   $this->CommonMethod($Sender, $Args);
}

public function CategoriesController_SomeOtherEvent_Handler($Sender, $Args) {
   $this->CommonMethod($Sender, $Args);
}

public function CommonMethod($Sender, $Args) {
   // Do something for both the events above so we keep things DRY.
}
```

Need a simple settings page? See the `ConfigurationModule` and how it is used in other plugins for a quick & easy way of making one.

After your class, you can define any functions from core that you wish to override. Do this very conservatively and carefully.


### 5. Add helper files

By convention, place CSS files in a folder named `design`, Javascript files in a folder named `js`, views (templates) in a folder named `views`.

To include a CSS file in all non-Dashboard pages:

```
public function AssetModel_StyleCss_Handler($Sender) {
   $Sender->AddCssFile('fancy.css', 'plugins/FancyPlugin');
}
```

Note the second parameter is the folder.

To include a CSS file in a specific page (e.g. the Discussions list):

```
public function DiscussionsController_Render_Before($Sender) {
   $Sender->AddCssFile('fancy.css', 'plugins/FancyPlugin');
}
```

To include a JS file: `$Sender->AddJsFile('fancy.js', 'plugins/FancyPlugin');`.

To output the view `fancy.php` in your `views` folder: `$Sender->Render('fancy', '', 'plugins/FancyPlugin');`

Again, for a simple settings page, don't create your own views. Use the `ConfigurationModule`.


## Quickstart Epilogue

That should put you well on your way to your first Vanilla plugin! Dream big, but pick something small for your first attempt. You'll learn a ton, and be better positioned to go big after that.

Final tips:

* Use the [troubleshooting guide](/developers/troubleshooting).
* Use `decho()` to output variables & `Trace()` to leave breadcrumbs.
* **Wrap all URLs** with `Url()` to account for subfolder'd forums.
* **Never hard-code paths**. Use constants like `PATH_UPLOADS`.
* **Use models** to access the database rather than writing your own queries. E.g.: Need discussions? Look at `DiscussionModel`.
* Adding your own data to the database? Read about the [database query builder](/developers/framework/database).

And, as always, ask the talented & helpful folks on our [community forum](http://vanillaforums.org/discussions) when you get stuck.
