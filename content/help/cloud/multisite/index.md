---
title: Multisite Features
layout: docs
categories: ["Cloud","Multisite"]
---

# Multisite Features

Vanilla's cloud solution offers a number of configurations for enterprise-grade deployments.

## Configurations

### Single Community

This is a classic forum setup. It is the equivalent of 1 installation of forum software. It can have any number of **categories** (what other products call “topic areas” or “forums/subforums”) arranged in a hierarchy. Each **Single Community** needs a domain or subdomain assigned.

### The Hub

A Hub is a community mothership. Setup one community as a template, then create Nodes that are copies of this setup. Each **Node** is a **Single Community** with the added ability of being [synched](/cloud/multisite/sync) with changes made on the Hub. Each Node is otherwise independent from each other - **separate** user lists, private message exchanges, and activity streams.

Each Node is accessible via either a subdomain *or* a subfolder off a domain shared by the whole Hub. This is called the **Hub URL Format**. For example, the “muffins” Node in the “bakery” Hub might be accessible at the URLs “muffins.bakery.company.com”, or “bakery.company.com/muffins”, depending on the configuration. Only one type of Hub URL Format is supported per Hub.

### Subcommunities

This artificially divides a **Single Community** *or* a **Node** into different areas by making each of the **top tier of categories** into subcommunities. While in any particular subcommunity, all other content outside the subcommunity is completely hidden. A common use case for subcommunities is localization.

All subcommunities are still part of a single “instance” - the user list (and therefore moderators / admins), private messages, and activity stream are **shared** across all subcommunities.

Each subcommunity has its own URL path prefix. For instance, visiting the “Recent Discussions” page of the English subcommunity for “forum.company.com” would take the user to “forum.company.com/en/discussions”. The user would see only discussions that are in the subcategories under the “English” top tier category.

A common way of combining this feature with the **Hub** is to create a **Node** per product, and use subcommunities for each locale within that product.

## Architectural considerations

### Cluster management

Our physical server assets are arranged into clusters. Each cluster can hold many Single Communities, or a single Hub + its Nodes. They cannot be mixed.

### Scaling capabilities

Because each Node is a separate entity, there are significant scaling advantages to choosing a hub setup over a single community + subcommunities setup.

### Suggested setups

For small-to-medium sites, use a single community. Add subcommunities for multi-locale support or to combine several micro-forums into a single instance.

For very large or franchise sites, use a dedicated Hub with a Node per locale. This provides maximum scaling potential.

### Embedding (iframes)

While we do support robust embedding (iframe) solutions, we strongly recommend avoiding it whenever possible. It drastically increases project complexity and negatively impacts user experience with longer page load time.

### SSL certificates

We will need SSL certificates that cover all potential custom domain names. For Hub setups, this generally means a wildcard certificate. See our documentation on [providing SSL certificates](/cloud/ssl).
