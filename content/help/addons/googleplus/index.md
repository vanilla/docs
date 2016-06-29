---
title: Google Plus
layout: docs
categories: ["Features", "Addons", "Integrations"]
---

## Google Plus

The Google Plus Sign-In adds the ability to sign to your community with Google Plus. You will need to configure your site in [Google API Console](https://code.google.com/apis/console). This [Google+ Video Tutorial](http://youtu.be/OHEb22VrZy4) also shows you how to set this up.

### Setting up social login in Google Plus

1. Once you have enabled the Google+ Plugin in your Vanilla Dashboard, go to your API Console at Google.
2. You will  need to create a project.
2. Once you have a project, click on the project name. You will be presented with a side menu. Select “Credentials”. 
3. Create New ClientID and fill in the form.
4. Select Web Application as Type.
5. For authorized Javascript Origins URL will be your Vanilla Forums URL
6. For authorized redirect URL, add "/entry/googleplus" to your Vanilla Forums URL.
7. Copy over Client ID and Secret into appropriate fields in Vanilla Dashboard.
8. If you have never used Google APIs before you will also need to fill in Consent Screen.

![Settings in Google Plus](/addons/googleplus/images/Google_Developers_Console_Settings.png)
