---
title: Technical Overview
tags:
- Features
- Single Sign-On
- VanillaConnect
category: help
menu:
  help:
    parent: sso-vanillaconnect
    identifier: vanillaconnect-technical
    weight: 100
aliases:
- /features/sso/vanillaconnect/technical
---

## VanillaConnect technical documentation

To integrate VanillaConnect to your website you will need the [Library](https://github.com/vanilla/vanilla-connect-php).
The in-depth details required to successfully implement VanillaConnect are located on the library repository.

### Configuration of the addon

The configuration interface is pretty neat and self explanatory but here are a few things you might want to know:

- If you put `{target}` in an URL that will be replaced by the page from where the user tried to Sign In.
So for example if the user clicks "Sign In" from a discussion he will be redirect to that discussion after being Signed In. 
- If you set your connection as "trusted" it will also enable the auto-connect feature even if it is not enable globally.

### Workflow

#### Site-Wide SSO

![VanillaConnect workflow](/img/help/features/sso/vanillaconnect-workflow.svg)

1. Vanilla -> Provider: Redirect With Authentication Request JWT. 

    This step occur when a user click the Sign In button.
    (Or when someone go on https://yourforum.example.com/sso if the connection is set as the default connection)
   
    - A. Provider -> Provider: Sign In User.
    
        This step is only necessary if the user is not already Signed In on your website.
        When that's the case you need to 
        - Preserve the JSON Web Token (JWT) that was sent during step 1
        - Allow the user to Sign In on your website
        - Process the JWT token
        - Continue with step 2.
   
2. Provider -> Vanilla: Redirect With Authentication Request JWT

    In this step you have constructed, with the user information, the redirect URL that contains the
    Authentication Response JWT. All you need to do is to do a redirect to that URL.

#### Embed SSO

![VanillaConnect embed workflow](/img/help/features/sso/vanillaconnect-embed-workflow.svg)

1. Provider -> Vanilla: Push SSO JWT.

    Using the [Library](https://github.com/vanilla/vanilla-connect-php) to create a PushSSOJWT you then pass it
    in the embed parameters like so: `vc_sso={JWT}`
    
2. Vanilla will check the validity of the JWT and process it. It will then redirect on itself with the user 
signed in if everything went right.
