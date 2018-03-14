---
title: Multisite Sync
tags:
- Cloud
- Multisite
- Sync
- Hub
category: help
slug: sync
menu:
  help:
    parent: multisite
aliases:
- /cloud/multisite/sync
---
{{% cloudfeature %}}

## Hub Sync

The hub has the ability to synchronize/push some configuration/data on the nodes. This allows an administrator to, 
for example, create a category on the hub and sync it to all the nodes. If the category is renamed or deleted at a later
time hub it would be synchronized to the nodes again.

## What can be synced?

- A predefined set of configuration. *This needs to be set up by a developer.*
   - It can be used to force an addon/theme to be enabled or disabled on all the nodes.
- AuthenticationProviders (SAML, OAuth2, ...)
- Categories
- Badges
- Roles
- Subcommunities
