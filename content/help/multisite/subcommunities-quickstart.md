---
title: Subcommunities Quickstart
tags:
- Cloud
- Multisite
- Subcommunities
- Quickstart
- Setup
category: help
menu:
  help:
    parent: multisite
---
{{% cloudfeature %}}

## Getting Started

Subcommunities allow you artificially split your forum into multiple sections. For more information about the benfits and details of subcommunities, see our [primary subcommmunity document](/help/multisite/subcommunities). This guide assumes a forum with no existing subcommunities. The setup process is relatively simple so let's get started.

## Availability

The Subcommunities plugin is only available on certain [plan levels](https://vanillaforums.com/plans). If you are a cloud client on a plan that includes subcommunities and are unable to access subcommunities in your dashboard, please [contact support](mailto:support@vanillaforums.com), your account representative, or your customer success manager if one has been assigned to you.

## Enable the Addon

Navigate the dashboard addons page `/dashboard/settings/addons`, scroll down to the Subcommunities addon, and click on the toggle to enable.

![](/img/help/subcommunities/enable-plugin.png)


## Create the Categories

Subcommunities are built on top of categories and requires a particular category structure to function optimally. If you are unfamiliar with categories, please see our [categories documentation](/help/forum-settings/categories/). Otherwise, proceed to the categories page of the dashboard `/vanilla/settings/categories` and proceed to create/re-arrange your categories as follows:

![](/img/help/subcommunities/category-list.png)

Each category that you wish to become a subcommunity, should be
    - At the top level
    - Have the [nested type](/help/forum-settings/categories/#choosing-how-categories-display).

With few exceptions every other category should be inside one of these categories. Categories found outside of these categories will likely not be accessible to your users. With Subcommunities and a [default subcommunity set](/help/multisite/subcommunities/#setting-a-default) _there will be no navigable way for users to reach top-level categories outside of their current subcommunity_. See our instructions for [navigating between subcommunities](/help/multisite/subcommunities/#navigate-between-subcommunities).

One exception to this rule is the `Social Groups` category created by the [Groups addon](/help/addons/groups/). That addon provides additional methods to navigate to and from groups inside of a subcommunity. Groups are [shared between subcommunities](/help/multisite/subcommunities/#shared-content) and are accessible from all subcommunities.

## Create the Subcommunities

Navigate the subcommunities dashboard page. A link to this page should now be provided in the left panel of the dashboard under the `Discussions` section. Alternatively this page can be access through the URL `/subcommunities`.

Next click on the add subcommunity button, which will open a dialogue box.

![](/img/help/subcommunities/create-subcommunity.png)

You will need to provide the following information

- __Name__ - The name of the community. This will appear in the [SubcommunityToggleModule](/help/multisite/subcommunities/#navigate-between-subcommunities).
- __Folder__ - The bit added to the URL to differentiate the subcommunities from each other.
- __Category__ - One of the `Nested` categories that you created/moved in the previous step.
- __Locale__ - The language that you wish to use for your subcommunity. Subcommunities are often used to separate a community into different sections based on language, but different languages are not a requirement for subcommunities.
- __Default__ - Whether or not this community will be the default community. There can only be 1 default community at a time. See [considerations when setting a default subcommunity](/help/multisite/subcommunities/#considerations-when-setting-a-default-subcommunity).

After filling in the information, click save on the bottom right. If you set a default you may notice your URL in the dashboard adjusting to reflect this change.

## Subcommunity List

After creating your subcommunities in the previous step, verify that your subcommunities align with your top level categories. The image below depicts a proper subcommunity setup to match the categories created [in a previous example](#create-the-categories)

![](/img/help/subcommunities/subcommunity-list.png)

