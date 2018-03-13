---
title: Subcommunities
tags:
- Cloud
- Multisite
- Subcommunities
category: help
menu:
  help:
    parent: multisite
---
{{% cloudfeature %}}

## What are Subcomunities?

A subcommunity is one method of dividing a forum into multiple different areas. Often by language or by product. Subcommunities are a great method of managing a forum in multiple languages on the same instance. They can be used on their own or in combination with [a Hub/Node setup](/help/multisite/#the-hub) and [Multisite Sync](/help/multisite/sync).

For information about setting up the Subcommunities plugin see our [Quickstart Guide](/help/multisite/subcommunities-quickstart).

## How subcommunities work

A subcommunity artificially divides a [Single Community](/help/multisite/#single-community) *or* a [Node](/help/multisite/#the-hub) into different areas by making each of the **top level categories** into a separate area of the forum.

## Separated Content

[Categories](/help/forum-settings/categories/) and their content are filtered between subcommunities.

- Discussions and all of [their types](/help/posting/#types-of-discussions)
    - Normal
    - Question
    - Poll
    - Idea
- Comments

This filtering will occur on the following pages.

- Recent Discussions `/community/discussions`
- Categories List `/community/categories`
- Home page pointing to either Categories list or Recent Discussions

## Shared Content

Not everything is separated between communities. Many parts of the forum are shared such as:

- Users and User related features
    - Profiles
    - Drafts
    - Private Messages / Conversations
    - Notifications
    - Points / Reputation
    - Leaderboards
    - Roles / Ranks / Role Tracker
- Moderation Features
    - Warnings & Notes
- The Activity page `/community/activity`
- The BestOf page `/community/bestof`
- [Groups](/help/addons/groups)

If your forum requires some of these features to split between sections of your sites, but still need certain configuration and users synchronized between them, a setup using [a Hub](/help/multisite/#the-hub), [Multisite Sync](/help/multisite/sync), and a [Single Sign On solution](/help/sso) may be required.

## Setting a Default

A subcommunity can be set as default by checking of the **Default** checkbox in the subcommunity menu. Setting a default subcommunity adds a rewrite rule to rewrite every single page of the site to be in the default subcommunity if one is not provided through a prefix in the URL.

For example. If the default subcommunity is set as English with the URL prefix of `en` set the following URLs would be re-written:

```
/ => /en
/categories => /en/categories
/profile => /en/profile
/discussions => /en/discussions
/groups => /en/groups
/dashboard => /en/dashboard

... And many more
```

### Considerations when setting a default subcommunity

These are 301 redirects which means they are ___permanent___ redirects. This means user's browsers (and your own) will keep the redirect cached. If you later decide to unset your default subcommunity (without setting a new one) or disable subcommunities, many users' browser will still attempt to redirect.

Properly undoing these redirects may require assistance.

### Forums with no default subcommunity
If no default subcommunity is set users visiting `forums.example.com` would see a category list as if the Subcommunities plugin was not enabled. If the user then clicked on top level category assosicated with a subcommunity they will be brought to the categories page of that subcommunity.

While this may sound like a good way of navigating between subcommunities, it doesn't work in practice. This is because Vanilla rewrites the breadcrumbs for users inside of a subcommunties in a way that makes it feel quite disorienting to navigate from a non-subcommunity portion of a site to a subcommunity portion of it. See [Navigation between subcommunities](#navigate-between-subcommunities) for alternative solutions.

## Navigate between Communities

When a default community is set, it can be difficult for a user to navigate between communities. To properly facilitate this the `SubcommunityToggleModule` is included with the Subcommunities plugin.

This module allows a user to switch between communities using a select box/dropdown. Pictured below is an enhanced `SubcommunityToggleModule` next to the MeBox. Other common locations for this Module are in the Panel and Footer of the site.

![](/img/help/subcommunities/subcommunity-picker.png)

To add the module using [CustomizeTheme](/help/appearance/custom-theme/) use the following snippet.

```tpl
{module name="SubcommunityToggleModule"}
```
