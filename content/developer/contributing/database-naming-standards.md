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

The original database naming standard in Vanilla was `PascalCase`. This was inline with coding standards implemented at the beginning of the project. However, Vanilla has moved on. Following the events of The Casening, where the project's codebase was universally updated to `camelCase`, the same rules will now be applied to __*new*__ database tables. Existing tables will remain in `PascalCase`, as will all columns, new or existing, therein.

Vanilla's API request and response standards require `camelCase`. Having database tables that are at odds with this requirement means additional transformations of every request and response. Moving forward, these types of transformations will be unnecessary and not used for new resources, since they will adhere to the same naming standard.

## 1. Overview

- Database tables MUST be named in `camelCase`.

- Database columns MUST be named in `camelCase`.
