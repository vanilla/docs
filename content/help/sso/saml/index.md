---
title: SAML
tags:
- Features
- Single Sign-On
- SAML
category: help
menu:
  help:
    parent: sso
    identifier: sso-saml
    weight: 1
aliases:
- /features/sso/saml
- /features/sso/saml/connection-explained
- /help/sso/saml/connection-explained
---

## SSO with SAML: Overview

Vanilla has implemented the parts of the SAML 2.0 spec required for SSO. This is done by enabling the SAML SSO addon,
and configuring it via its Settings page (Dashboard → Addons → SAML SSO → Settings button).

SAML accounts are mapped to existing forum accounts by **email address**, or a new account is created if no match is found.

Vanilla's SAML mapping is as follows (the right value is the SAML key):

```
UniqueID => id
Name => uid
Email => mail
Photo => photo // Optional
Roles => roles // Optional
```

`UniqueID` is whatever you're using to absolutely uniquely identify the user on your side that will never change.

`Name` is the username. We recommend keeping it within the normal rules (alphanumerics and underscores only, 50-character limit, must be unique) but we do not validate its formatting on our side over SSO because we don't want to fail a login. It would just make @mentions impossible to use if it had spaces or special characters in it. However, in the case where there's a duplicate name or none provided, it will send the user to a "Connect" page to provide a valid, unique username which will then also be validated for formatting.

`Email` is not validated on our side either. In general, we are assuming you've done the data validation on your side and adding more would gum up the works.

`Photo` is the url/path to the user's photo and is optional.

`Roles` consist of a comma-separated list of exact name matches to existing roles on your forum and is optional. e.g. 'Member,MVP,Support'

## Creating a new SAML connection

When creating a new SAML connection you will need to fill the following fields:

`Connection ID` This field is the new of your connexion and is used to distinguish it from other potential SSO connexion.

`Entity ID` The name of your SAML entity. It can be anything but is often the URL of your site.

`Site Name` A short name for the site. This is displayed on the SSO Sign In button.

`Sign In URL` Sign In URL that users will be redirected to.

`Sign Out URL` Sign Out URL that users will be redirected to.

`Registration URL` URL that users will be redirected to create a new account.

`IDP Certificate` Certificate of your provider.

`Identifier Format` Found under the name: NameIDFormat. Looks like this "urn:oasis:names:tc:SAML:2.0:nameid-format:unspecified"

## Getting your metadata

Once the connection is created you will be able to get the Metadata for that particular connection.

Example:
```xml
<md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" validUntil="2021-10-24T14:39:12Z" entityID="{Entity ID}">
    <md:SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
        <md:NameIDFormat>
            {Identifier Format}
        </md:NameIDFormat>
        <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="http://example.com/entry/connect/saml?authKey={Connection ID}" index="1"/>
    </md:SPSSODescriptor>
</md:EntityDescriptor>
```
