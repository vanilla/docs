---
title: SSO with SAML
layout: docs
categories: ["Features","Single Sign-On","SAML"]
---

## SSO with SAML: Overview

Vanilla has implemented the parts of the SAML 2.0 spec required for SSO. This is done by enabling the SAMLSSO addon, and configuring it via its Settings page (Dashboard -> Addons -> SAMLSSO -> Settings button).

SAML accounts are mapped to existing forum accounts by **email address**, or a new account is created if no match is found.

Vanilla's SAML mapping is as follows (the right value is the SAML key):

```
UniqueID => id
Name => uid
Email => mail
Photo => photo
```
We also accept a `roles` field optionally. `Photo` is likewise optional. 

`UniqueID` is whatever you're using to absolutely uniquely identify the user on your side that will never change.

`Name` is the username. We recommend keeping it within the normal rules (alphanumerics and underscores only, 50-character limit, must be unique) but we do not validate its formatting on our side over SSO because we don't want to fail a login. It would just make @mentions impossible to use if it had spaces or special characters in it. However, in the case where there's a duplicate name or none provided, it will send the user to a "Connect" page to provide a valid, unique username which will then also be validated for formatting.

We don't validate emails on our side either. In general, we are assuming you've done the data validation on your side and adding more would gum up the works.

Roles consist of a comma-separated list of exact name matches to existing roles on your forum.
