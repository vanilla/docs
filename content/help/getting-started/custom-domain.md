---
title: Custom Domain
category: help
menu:
  help:
    parent: getting-started
    weight: 11
aliases:
- /getting-started/custom-domain
---

## Custom Domain for your Community

Newly created Vanilla communities are given a public URL that looks something like **yourcompany.vanillacommunity.com**. At some point you might decide that you want to unify your branding and change that URL to something like **community.yourcompany.com**. 

### Setup

It’s a simple, two-step process that we recommend for all new forum owners. __Please note that you must already own (or purchase) your desired domain from a domain registrar before customizing your Vanilla Forums URL.__

* Log in to the domain name registrar where your domain is hosted (ex. Name.com, GoDaddy, Rackspace, etc.)
* In your Admin control panel, create a DNS record for your domain so that it points at our servers.
* Create a CNAME record for your domain that points from from your subdomain to your Vanilla address: community.yourcompany.com CNAME yourcompany.vanillacommunity.com 
* Back in your Vanilla Dashboard, you’ll notice a Custom Domain menu under the Appearance category. Enter your custom domain on that page. 

### SSL

If you'd like to use the HTTPS protocol and insert an SSL certificate, follow the [instructions here](/cloud/ssl/).
