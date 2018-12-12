---
title: Database Naming Standards
tags:
- Developers
- Contributing
category: developer
menu:
  developer:
    parent: contributing
---
## Database Naming Standards

The original database naming standard in Vanilla was `PascalCase`. This was inline with coding standards implemented at the beginning of the project. However, Vanilla has moved on. Following the events of The Casening, where most of the project was updated to `camelCase`, __new__ database tables will share the same style used by most of Vanilla's codebase. Existing tables will remain in `PascalCase`, as will all their columns, new or existing.

Vanilla's API request and response standards require `camelCase`. Having database tables that are at odds with this requirement means additional transformations of every request and response. Moving forward, these types of transformations will be unnecessary and not used for new resources, since they will adhere to the same naming standard.

## 1. Overview

- Database tables MUST be named in `camelCase`.

- Database columns MUST be named in `camelCase`.
