---
title: Framework
layout: docs
categories: ["Developers","Framework"]
---

## Garden's place in Vanilla

Vanilla is built on an MVC framework named Garden. Its purpose is to provide an extensible, pluggable platform on which to build all the addons that make Vanilla awesome. The design of its database handling was influenced by CodeIgniter, but its plugin architecture is pretty unique.

Technically, Vanilla is a forum application (addon) built on top of the Garden framework. However, we typically refer to the entire stack as "Vanilla" for branding consistency and simplicity - including in these docs.

If we had it all to do over, we would just call the whole thing "Vanilla" and name the forum application "Forum". But now we're stuck with GDN prefixes all over the place; c'est la vie.

The framework is a secondary concern to the forum. In practice, this means if you request an enhancement or find a bug in a framework piece that isn't used anywhere in the forum, we'd love a pull request but it's unlikely we'll devote developer time to it. Time is precious, and we're building awesome forums not CodeIgniter 2 (or whatever the hip kids are using these days).

## Addons are everything

Addons are the most important feature of the framework. Our crown jewel, the Vanilla forum itself, is technically an addon. There are many ways for addons to hook into each other, and we're constantly refining their integration.

There are 4 types of addons:

* Themes
* Plugins
* Applications
* Locales

In the future, we plan to combine applications and plugins to simplify things. In the meantime, the primary difference between them is that applications can use native controllers more easily, making more complex software a little less messy to navigate. However, as of 2.3, plugins will be able to use native controllers.

Themes have the full power of plugins via their hooks file, but we suggest only using it for aesthetic changes.

## File structure

The core framework files are located in `/library/core`. The database layer is contained in `/library/database` and third-party libraries are in `/library/vendors`. All our junk is in `/trunk`.

Our framework's frontend is built on Javascript and jQuery. jQuery files and plugins are in `/js/library` while files in the root `js` folder are custom to our framework.

Common subfolders in addons will include `design` (CSS and images), `js`, `modules`, `views`, and `settings` (structure and config).

Non-view PHP files are named in the format `{type}.{name}.php`. "Type" is one of class, functions, or interface. We do not rename third-party files included in Vanilla. Classes in addons nearly always inherit from one or more framework classes.

## Default applications

Three applications come pre-installed & enabled by default: Dashboard, Vanilla, and Conversations. On a technical level, 'Vanilla' is simply a Garden addon that works in concert with others to create your forum experience. The Vanilla application is only responsible for discussions, comments, and categories.

The Dashboard application powers your Dashboard UI, users, roles, activity, and much of the core functionality used by a member-driven website. The Conversations application powers private messaging. To disable private messaging, simply disable the Conversations application.

If you just want to use the Garden framework, you could, theoretically, disable all the core Applications and roll your own from scratch. In reality, we recommend always at least using Dashboard. Even if you're not building a forum with Garden, it's definitely built with a user-centric website in mind.

## Let the code guide you

Because so much is possible with the framework, it can be intimidating to get started. Our best advice is: look at an existing plugin that does something *close* to what you're attempting to see how they do it. Code examples can guide you to new solutions you didn't know were possible.

The Skeleton application in `/applications/skeleton` is heavily documented inline to help you get started. Make a copy and get coding, but remember: forgetting to delete the extraneous docs is like leaving the price tag on your clothes. We'll judge you.

## Where to start

Not sure what doc to read next? We recommend reading the [plugin quickstart](/developers/plugins/quickstart), then try [Controller](/developers/framework/controllers) and [Models](/developers/framework/models). It's a self-guided tour from there! Don't forget to stop by the [community forum](http://vanillaforums.org/discussions) for guidance. When in doubt, dance.
