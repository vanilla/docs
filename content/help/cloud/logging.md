---
title: Logging
layout: docs
categories: ["Cloud"]
---

# Advanced logging

Additional logging is available on our highest-tier plans for an additional fee to cover the additional load & performance hit incurred by more verbose logs.

The logs are available via a Dashboard page under "Event Log". They can be filtered by date range, event name, and severity. Sorting is chronological or reverse-chronological.

## Events

We are currently able to log the following additional events for auditing purposes.

### Authentication & Permissions:

* signin_failure
* password_reset_request
* password_reset_failure
* password_reset
* password_change
* password_change_failure
* session_start
* session_end
* security_denied (any permission error)
* csrf_failure (request may have been spoofed)

### Privileged actions:

* theme_changed
* addon_enabled
* addon_disabled
* role_add (user permissions modified)
* role_remove
* security_access (admin/moderator-only actions)

### Outgoing requests:

* http_request
* http_response
* http_response_error
