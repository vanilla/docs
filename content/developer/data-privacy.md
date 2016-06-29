---
title: Data privacy
layout: docs
categories: ["Developers"]
---

# Data privacy

Vanilla makes distinctions about what user information is public vs. personal, and we deal with these types of information in different ways. This is a technical document to avoid privacy issues when configuring your forum or writing a plugin.

## Public user info

We consider usernames and user IDs (`User.Name` and `User.UserID`) to be public information. This data is used in URLs, embedded in page data, and generally available to any user with basic permission to view or access your forum. For this reason, we do not recommend using real names or other personally identifiable data for usernames.

## Personal user info

We consider emails (`User.Email`) and IP addresses (recorded in multiple contexts) to be personal info. Access to this data is governed by a special permission that, by default, is only granted to moderators, community managers, and administrators. You can customize this for your community.
