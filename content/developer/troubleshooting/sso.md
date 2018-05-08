---
title: SSO Debugging
tags:
- Features
- Troubleshooting
- Developers
category: developer
menu:
  developer:
    identifier: sso
    parent: troubleshooting
aliases:
- /developers/troubleshooting/sso
---

## How to troubleshoot 3rd party SSO from your localhost setup.

1. Get the 3rd party SSO configuration from `GDN_UserAuthenticationProvider`.
1. Insert these information in your `GDN_UserAuthenticationProvider` table.
1. Enable the proper SSO plugin.
1. Edit your `/etc/hosts` and add the domain name of the 3rd party like so: `127.0.0.1 forum.3rdpartydomain.com`
    1. Make sure that your web server is configured to handle that domain name. Either have a "default" configuration
    or add that domain name to the config. (This would be under `server_name` for nginx)
1. Go to `forum.3rdpartydomain.com`. (It should show your own local forum)

You can now login from your localhost setup which means that you can put breakpoints where needed!

