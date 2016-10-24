---
title: SAML Connection explained
layout: docs
categories: ["Features","Single Sign-On","SAML"]
---

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
