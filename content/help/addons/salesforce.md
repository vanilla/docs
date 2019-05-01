---
title: Salesforce
tags:
- Addons
category: help
menu:
  help:
    parent: addons
    identifier: addon-salesforce
aliases:
- /addons/salesforce
---

## Requirements

You must have SSL enabled on your domain. (Your forum must be served over HTTPS.)

## Features

This addon allows users that have the `Staff.Allow` permission to do the following:

- Link your Salesforce account to your Vanilla user profile.
- Create Salesforce cases and leads from Vanilla discussions (per discussion, not per comment).
- Salesforce cases and leads appear as "attachments" on your Vanilla discussion for authorized users.
- View Salesforce leads from Vanilla user profiles.
- Sync Vanilla users with Salesforce contacts when a user edits their profile or registers.

The Vanilla administrator may alternatively setup a global Salesforce connection rather than using individual connections.

We also offer single sign-on from Salesforce.

## Setup

### Salesforce: Create & Configure Application

1. Log into your Salesforce Account
1. Create new Connected App in Salesforce.
  1. Build → Create → Apps → Connected Apps → New
  1. Fill the required fields: **Connected App Name**, **API Name**, **Contact Email**.
  1. Enable OAuth Settings.
  1. Set a Callback URL by appending `/profile/salesforceconnect` to the end of your forum's URL.
     - If your forum is at `https://forum.example.com/`, your Callback URL would be `https://forum.example.com/profile/salesforceconnect`.
     - If your forum is at `https://forum.example.com/en/`, your Callback URL would be `https://forum.example.com/en/profile/salesforceconnect`.
     - Callback URL must be HTTPS.
  1. Add to Selected OAuth Scopes:
     - **Full access (full)**
     - **Perform requests on your behalf at any time (refresh_token, offline_access)**
  1. Save. ![](/img/help/addons/salesforce/app_create.png)

### Vanilla: Enable & Configure Addon

1. Log into your Vanilla forum.
1. Dashboard → Addons, and click the Salesforce addon's settings icon.
1. Fill out the requested information.
    - Where to find your ApplicationID and Secret in Salesforce?

    In the app creation section mentioned in [Configure Application in Salesforce](#configure-application-in-salesforce) under API you will see Consumer Key (which is the ApplicationID) and Consumer Secret (which is the Secret)

    ![](/img/help/addons/salesforce/key_secret.png)

### Vanilla: Link your account

1. Login to Vanilla.
1. Go to your profile page.
1. Edit your profile.
1. Click on the Social section. *(/profile/connections)*
1. Click "Connect" on Salesforce.
1. Follow the instructions from there.

### Vanilla: Send Profile Extender Fields to Salesforce

To send custom fields over to SalesForce, make sure the `SalesForceID` field on Vanilla's "Profile Fields" settings is set and matches Salesforce's "Field Name" exactly.

## Troubleshooting

### I can't link my account.

If you get stuck on a page that says "error=redirect_uri_mismatch&error_description=redirect_uri%20must%20match%20configuration",

make sure that the URL you are on when you are in the social section of your profile matches the Callback URL that you set in the configuration.

Example: If the URL when you are on in your profile's social section is `https://forum.example.com/somedirectory/profile/connections`,
you should have `https://forum.example.com/somedirectory/profile/salesforceconnect` in your configuration.
