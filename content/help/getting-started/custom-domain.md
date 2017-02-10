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

## Custom Domain for Your Forum Community

Instead of having your community url look like this: mysite.vanillacommunity.com, it can look like this: mysite.com or community.mysite.com. It’s a simple, two-step process that we recommend for all new forum owners. __Please note that you must purchase or create your desired url from a domain registrar before customizing your Vanilla Forums domain.__

### Setup

* Log in to the domain name registrar where your domain is hosted (ex. GoDaddy, Rackspace, etc.)
* In your Admin control panel, create a DNS record for your domain so that it points at our servers. You have two choices here:
* If you want to use a subdomain (community.mysite.com) create a CName record for your domain that points to your Vanilla address: mysite.vanillacommunity.com 
* If you want to use a top level domain (mysite.com) create an A Record for your domain, using your forum’s IP address.
* Back in your Vanilla Dashboard, you’ll notice a Custom Domain menu under the Appearance category. Enter your custom domain on that page. 

### How to find your forum's IP address:

To look up your  IP address:

Visit http://network-tools.com/
Choose “Lookup” from the list of radio buttons
Enter your forum name (mysite.vanillacommunity.com) in the long box, select “Go”
Look further down the page, it will list your IP address

### SSL

If you'd like to use the HTTPS protocol and insert an SSL certificate, follow the [instructions here](/cloud-services/ssl/).