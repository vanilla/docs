---
title: Routes
layout: docs
categories: ["Developers"]
---

## Routes

Route management allows you to create custom urls to specific pages within your Vanilla 2 installation. It also comes with some pre-defined default values.

#### Pre-defined Routes

There are four pre-defined routes that have special meaning. They are:
* **DefaultController** - This is the main page to load when the root url of your Vanilla installation is viewed.
* **Default404** - The page to view when the requested url could not be found.
* **DefaultPermission** - The page to view when the user attempted to perform an action they didn't have permission for.
* **UpdateMode** - The page to view when Vanilla has been taken offline for maintenance.

**DefaultController** is the one you will most likely be working with the most, and by default it is set to "discussions" with an "internal" route type, which means that it will essentially be the same as sending the user to www.yourdomain.com/path/to/vanilla/root/discussions.

#### Custom Routes

Custom routes allow you to create more "user-friendly" urls for commonly requested pages in your installation. For example, if you had a popular discussion at the following url:

http://yourdomain.com/community/discussion/1250/hampsters-gonna-hampst

You could create a route to this discussion by adding a new custom route with the following values:

* **Route Expression:** hamsters
* **Target:** discussion/12500/hampsters-gonna-hamst
* **Type:** internal

With this route in place, users will be able to get at your hamster discussion by going to: http://yourdomain.com/community/hamsters. Your old URL will continue to work as well, and this will not affect search engine ranking as we tell the search engines what the canonical url is for every page (Google will treat duplicate routes to the same content as one page).

#### Route Types

There are several different route types. They are:

* **Internal** - Sends no additional headers with the request.
* **Temporary** - Sends a 302 header with the request, telling search engines that the move is temporary, and they should not update their indexes.
* **Permanent** - Sends a 301 header with the request, telling search engines that the new page is now permanently at the new location and that they should update their indexes.
* **Not Found** - Sends a 404 header with the request, telling search engines that the file was not found, and to update their indexes accordingly.

Most of the time, Internal will be the route type of choice. Non-internal routes can take a full url (including http://) as the target, while internal routes can ONLY forward the user to a location within the application.
