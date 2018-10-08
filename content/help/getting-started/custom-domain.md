---
title: Custom Domains
category: help
menu:
  help:
    parent: getting-started
    weight: 11
aliases:
- /getting-started/custom-domain
---

## Your Community's Web Address

Customizing the web address (URL) of your community is an important step in setting up a new Vanilla forum. We recommend giving your community forum its own home on a subdomain of the primary domain you use in your web presence, and using a secured connection via HTTPS. For example, if you have your main website at `example.com`, you should use an address like `https://community.example.com` for your Vanilla forum.

###  Subdomains vs. Subfolders

Forums are a first-class web application and a primary driver of content in a healthy web presence. Even when a forum is not the main focus of your web presence, it should be maintained on its own subdomain.

In the past, forums were frequently set up as subfolders (e.g. `example.com/forum`) under the root domain of a web presence. The reality of many legacy server setups made this the simplest way to run a forum and it became fairly standard to see sites organized this way. And in the 90s and early 00s, search engines often did not combine rankings across subdomains, causing "splintered" SEO effects. In the age of web services, none of this is true anymore.

In the present, all first-class search engines catalog subdomains of a domain as an extension of the primary domain. Google Webmaster Tools in particular has settings to manually declare subdomains as official parts of your primary web presence, and notes that there is no penalty or side effects to this setup. Google itself offers subdomain-based web services based on this model, so there is no rationale for believing it would penalize it.

Even if your site has used subfolders for many years, it is safe to transition to a subdomain-based URL system using properly configured 301 redirects. Whenever implementing 301 redirects for any reason, it is normal to see a short-term decline in traffic while the pages are reindexed.

Implementing a proper web services architecture by using subdomains for independent applications gives you a more robust and secure web presence with no downsides.

#### Why We Don't Suggest or Offer Subfolders

**Reverse Proxy** is the only reliable way to serve an independent web application in a subfolder of a domain that is mapped elsewhere. In this setup, your main website `example.com` silently redirects requests for `example.com/forum` to the independent server where your forum is hosted.  In other words, your server is now a single point of failure for what should be an independent service, since all requests to the forum must pass thru it.

* Requests are slower, because they have to make an extra jump. This hurts search engine rankings (Google has stated response times are a factor in rankings).
* Uptime for the forum becomes dependent on the main website, adding a big asterisk to any SLA.
* The forum cannot effectively be protected from DDoS via Cloudflare or similar service.
* Security of the forum is now dependent on the security of the main website since all requests are intercepted.

These are serious compromises that come with no measurable benefit.

## Cloud Setup

{{% cloudfeature %}}

As you'd expect, using our cloud product dramatically simplifies the process of setting up a custom domain and secure connections. The following instructions are for cloud specifically.

### Using a Custom Domain on Cloud

Newly created Vanilla communities are given a public URL that looks something like **yourcompany.vanillacommunity.com**. At some point you might decide that you want to unify your branding and change that URL to something like **community.yourcompany.com**. 

It’s a simple, two-step process that we recommend for all new forum owners. __Please note that you must already own (or purchase) your desired domain from a domain registrar before customizing your Vanilla Forums URL.__

* Log in to the domain name registrar where your domain is hosted (ex. Name.com, GoDaddy, Rackspace, etc.)
* In your Admin control panel, create a DNS record for your domain so that it points at our servers.
* Create a CNAME record for your domain that points from from your subdomain to your Vanilla address: community.yourcompany.com CNAME yourcompany.vanillacommunity.com 
* Back in your Vanilla Dashboard, you’ll notice a Custom Domain menu under the Appearance category. Enter your custom domain on that page. 

### Using SSL on Cloud

If you'd like to use the HTTPS protocol and insert an SSL certificate on your cloud site, follow the [instructions here](/cloud/ssl/). Please note that you absolutely should use SSL on ALL installs of Vanilla, cloud or not, and our software is fully compatible with it.
