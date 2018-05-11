---
title: Setting up Custom SSL (https)
tags:
- Features
- SSL
category: help
menu:
  help:
    parent: cloud
    identifier: cloud-ssl
aliases:
- /cloud/ssl
---

{{% cloudfeature %}}

{{% info %}}All Vanilla Cloud communities are automatically protected by SSL from the moment they are created, but things get a little more complicated when a [Custom Domain](/help/getting-started/custom-domain) is used.{{% /info %}}

## Setting up Custom SSL (https) with Vanilla Cloud

We have partnered with Cloudflare to offer simple SSL certificate issuing services to our all of our customers. This means that we're able to issue SSL certificates for your community on your behalf. 

### How to obtain your SSL certificate

Simply email your Customer Success Manager or, if you don't have one, Vanilla Support. We're able to handle the entire process on your behalf. The only prerequisite is that you're using a [Custom Domain](/help/getting-started/custom-domain) and it is pointed at your Vanilla URL according to the instructions on the [Custom Domain](/help/getting-started/custom-domain) setup page in your forum's dashboard.

### HTTPS-only sites

If you have a strict security policy that requires that your site only be served through https, we can configure your site to always use ssl. We don't recommend forcing SSL during the set up process in order to help us troubleshoot any issues with the configuration process.

### Gotchas

* When your site is being served through SSL you may encounter problems if you are externally linking to non-SSL resources such as javascript, css, or images. Keep this in mind if you are custom theming your site or have other customizations enabled.
* If you are using jsConnect, make sure your authentication url is available over SSL or else jsConnect will fail.