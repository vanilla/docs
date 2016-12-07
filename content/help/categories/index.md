---
title: Categories
tags:
- Features
- Categories
category: help
menu:
  help:
    identifier: categories
    weight: 100
aliases:
- /features/categories
---

## What Are Categories


Categories are how Vanilla organizes discussions within a community. Categories can be added, edited, deleted, sorted, and tiered via the Dashboard. Every discussion is placed in one (and only one) category.
You can find Categories under the Settings tab Dashboard, listed under “Forum Settings”. You can access it directly by going to `/vanilla/settings/categories`.


## Choosing Your Category Layout


Before modifying your individual categories, you can choose how they will appear on your homepage. In the Dashboard, under the “Homepage" panel there is a "Category Layout" section.  In this area, there are options for how to display the Categories page for your users.

**The Modern Layout** removes the extra columns for discussion and comment totals, making for a clean look.

**The Table Layout** shows discussion and comment totals as columns, along with user avatar and the thread title of the most recent post in the section.

**The Mixed Layout** option shows up to five of the most recently updated discussions under each category, providing quick navigation to new content.


## Choosing How Categories Display


Categories are easily arranged. Just click on the left side of a specific category to drag and drop it into your desired position. Changes to organization will be reflected immediately on the main forum index.

![Click and drag the small "hamburger menu" icon on the left side of each created category to rearrange them.](https://raw.githubusercontent.com/vanilla/docs/New-categories-doc-/static/img/help/features/categories/drag_and_drop.png)

There are some other options that affect how categories are viewed on the forum. Opening the right drop down will reveal the “Display As” menu. These settings critically change the way a category behaves.

![The "Display As" options.](https://images.v-cdn.net/docs/display_as_menu.png)

**Discussions** - The default category, where users can post discussions.

**Heading** - Unclickable Headings that help with forum organization. On the homepage, they will display differently according to your theme. Generally they are bold, and will split your categories into sections:

![The main page of your forum may be set to recent discussions, best of, or categories. This is an example of a categories page in the "Bootstrap 3" theme, with headings differentiating the sections. ](https://raw.githubusercontent.com/vanilla/docs/New-categories-doc-/static/img/help/features/categories/categories_index.png)

**Flat** - This is a paginated directory structure that can handle thousands of categories. They are sorted alphabetically by default, and cannot be manually arranged.

Flat categories have a module that can be inserted into your theme. This will blend right in with your index and list a small number of the categories that the section contains. It has a quick search module, allowing for users to shift through hundreds of categories with ease. This is great for sites that have a large number of products.

![The flat categories module, shown here blending in with the theme.](https://images.v-cdn.net/docs/display_as_flat.png)

To add this to your theme, use this module:
`{module name="FlatCategoryModule" categoryID=00}`

You can find the numerical categoryID in the URL when you are editing a category.
![You can find the ID appended to the URL when editing in the dashboard, or in by adding .json to a category URL when navigating the community. This shows an example URL.](https://raw.githubusercontent.com/vanilla/docs/New-categories-doc-/static/img/help/features/categories/category_ID.png)

**Nested** - Creates a clickable heading that only contains more categories. Unlike Flat categories, this is generally for creating small sections within your forum, and can be manually organized.


## Other Settings


**Category URL**- You can change the slug for a category to simplify the URL. It will automatically populate with the title of the category. Proper syntax for URLs is required here, so spaces are not allowed.

**Descriptions**- You can add a description to you category. This will appear on the homepage or under the title on the categories page, depending on your theme.   

**Photo**- You can add a picture or icon to your category, which will appear on the main index in some themes.

**CSS class** - The specified text will be added as a class for the category's HTML wrapper. This makes it so that you can target it specifically when building a theme.

**Hide from the recent discussions**- This prevents threads in the category from appearing on `/discussions`.

**Archived**- This removes the category from the main index and prevents threads in the category from coming up in the site-based search. Archived Categories are still indexed by search engines and can prevent broken links.

**Permissions**- Enabling “This category has custom permissions” will reveal some new options.

![Custom permission options add another layer of control over a category. This image shows the list of options that appear.  ](https://raw.githubusercontent.com/vanilla/docs/New-categories-doc-/static/img/help/features/categories/other_options.png)

If you have a plugin like Q&A enabled, you can use these options to choose where your users can create those threads. You can also disable polls and file uploads, if they don't suit the category.

Under that will be a list of all of your roles. You can restrict who can view, post in, or perform moderation actions in particular categories.

**Maximum Category Display Depth** - This setting is located in the Advanced section of the dashboard, `vanilla/settings/advanced`. The default setting is "No Limit", but you can choose to set a level at which nested categories will be placed in a comma-delimited list. The subcategories will appear as hyperlinks under their root category when viewing the forum index.

![The comma-delimited list, displayed as "child categories" under the root. ](https://images.v-cdn.net/docs/category_depth.png)


## Deleting a Category
You can delete a category from the dashboard, the option is in the right-hand menu of each category:

![The delete option is the very the bottom of the menu.](https://images.v-cdn.net/docs/delete_menu.png)

Upon deleting a category, you will be prompted to select a replacement category from a drop-down menu. If you elect not to choose a replacement category, all threads and posts will be deleted.

![The red warning that appears on this page is all that stands between you and deleting your content. Heed the warning and be sure to transfer the threads to a new location before confirming the action.](https://images.v-cdn.net/docs/delete_warning.png)

**It is not possible to recover a deleted category.**  It is important to make sure that you have selected a new destination if you’d like to retain the contained threads. Alternatively, you can archive categories by removing viewing and posting permissions for users, rather than deleting content. This is recommended, as it avoids the accidental loss of threads.    
