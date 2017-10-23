---
title: Creating New Functionality
tags:
- Developers
- Addons
- Controllers
- Controller
- Virtual
category: addons
menu:
  developer:
    parent: addons
---
## Creating New Functionality

Addons can do more than just modify existing parts of Vanilla. It can create entirely new ones! Addons can create new Controllers, Models, and Modules in the same way that Vanilla itself does. This is recommended only for developers who are already comfortable with Vanilla's framework. [Read more about the Vanilla Framework](/developer/framework).

#### Modules

Looking to add a small reusable component? Create your own module. Add a new file `class.mymodule.module.php` in the root of your addon. Open it and create a new class extending `Gdn_Module`. Next creating a `views/modules` directory inside of your addon. Inside of this folder create a file named like your modules class name. For example, if your module were called `MyFancyWidgetModule` your would create a view file called `myfancywidget.php`. This file must be lowercased and have the `Module` removed from the classname.

[Ready more about modules](/developer/framework/modules).

#### Controllers

Is your addon a bit more complex? Add a `controllers` folder and add your own controller classes. They will automatically be detected and be dispatched like normal controllers. This functionality is available in Vanilla >= `2.2`.

As a reminder, controllers should extend `Gdn_Controller`. [Read more about controllers](/developer/framework/controllers).

#### Models

You will probably need a new Model to go along with your new Controller, so add a new one by creating a `models` directory in your addon and create your own model classes. They will be detected and called just like Vanilla's built in Models.

Models should extend `Gdn_Model`. [Read more about models](/developer/framework/models).
