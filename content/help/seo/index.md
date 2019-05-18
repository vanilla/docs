---
title: SEO
tags:
- SEO
category: help
menu:
  help:
    identifier: seo
    weight: 16
aliases:
- /seo
---

## Search Engine Optimizations

Vanilla subscribes to common sense, vetted principles for improving the findability of your site and its content. We employ no "tricks" because we believe they ultimately hurt your traffic and reputation.

### Curation

Having a team dedicated to the curation of your forum is critical to its success. Concisely edited discussion titles, clearly-expressed first posts, and moving discussions to their most-appropriate category are highly effective search engine optimization techniques. If it's good for your readers and users, it's good for SEO! Vanilla has first-class curation features to accomplish this.

_Nothing else on this list is as important or as powerful as curating your forum!_

### Domains

We recommend putting your community on a subdomain of your primary site. If you use Google Webmaster Tools, you can explicitly opt-in the subdomain to identify it as part of the main site, but this is completely optional.

There is no demonstrable additional SEO value from using a subfolder / path approach instead of a subdomain (e.g. putting your forum at `example.com/community` instead of `community.example.com`). Modern web architecture is dependent on sites combining many services in many physical locations. Subdomains are the correct and best-recognized way of accomplishing this.

### Links

The primary content engine of your forum is the discussion, and every discussion has a unique identifier (number) in the URL in addition to a "slug" that represents the title. Our parsing system only cares about the number, so changing the title of your discussions will not effect links working. It will, however, update the URL to improve the visibility of your content and its keyword density.

Category pages only use the "slug" (URL-encoded name) in their URLs, so choose their names carefully and avoid changing them. Categories we view as keyword-centric landing pages moreso than specific content due to the fact that they change constantly as discussions are added.

We employ canonical links for both discussions and categories.

We do **not** put the category slug into discussion URLs. See "Antipatterns" below.


### Markup

We use modern, semantic HTML5 markup in all our products. This makes it easy not only for large search engines to parse the content, but also myriad other web services you may wish to expose your content to.

We support Open Graph and Twitter card tags natively.


### Migrations

Maintaining your existing user-generated content is the most important thing you can do when moving to Vanilla. Our cloud platform has a highly trained, professional migration team to make sure you keep your existing content and that it is properly redirected. Your team plays an important part in making this process successful.

It's natural to experience a dip in search engine traffic in the months after a migration, but in our wide experience this traffic not only always recovers, but exceeds previous levels thanks to Vanilla's superior system.

https://www.earnmoneyonlinemaster.com/10-best-credit-cards-in-india/## Opt-in features

#### Sitemaps & robots.txt

We provide an optional open source addon named "Sitemaps" to all cloud customers. It adds two classic SEO features: an XML site map, and a robots.txt file:

```
Sitemap: http://example.com/sitemapindex.xml
User-agent: *
Disallow: /entry/
Disallow: /messages/
Disallow: /profile/comments/
Disallow: /profile/discussions/
Disallow: /search/
```

While we are happy to provide these features to those who desire them, we do not believe they provide any discernible benefit. As a popular forum software platform used by tens of thousands of sites, Vanilla is easily recognizable to search engines and they need no coaching to properly index your site. This is why we do not provide these two features as part of our core product.

Our sitemaps provide links to pages that list discussions by category and month started. This gives search engines a complete directory of every discussion on your site without overloading server resources. Although not part of the normal site navigation, these pages are human-usable (and useful) and have semantic URLs. Listing all discussions in a single list (no matter how it is broken down) would introduce serious scaling problems due to the ever-changing nature of a sorted discussions list and the possibility of millions of discussions on one site. By breaking them down by category and month, we create moderately sized lists that do not change over time, enabling reliable performance. We have carefully followed all published sitemaps guidelines in building this system and do not provide customizations to it.



#### Tagging

User content tagging is available in Vanilla via the open source "Tagging" addon. Its primary benefit is making it easier to find content by particular topics across categories. It may have minor search engine benefits, but it is also a double-edged sword: it can be a high-maintenance to make sure users are properly tagging content and not abusing the system. That's why we provide this as an opt-in feature.

## Antipatterns

Not all SEO requests are benign. Let's talk about things that can actively damage the findability, usability, and reputation of your site.

### Custom meta tags

Adding special meta tags to "juice" your SEO ranking is a dangerous game. Search engines will severely penalize sites for attempting to mislead them, and there is no evidence they help in the first place. We do not and will not support this.

### Taxonomy in the URL

Including your tagging or category structure in URLs makes them highly susceptible to breaking. Moderators should be free to curate your content, including its taxonomy. If doing so shifts the URL, this is very detrimental to the findability of your content.

### High load times

Themeing your site to be graphics-heavy or include complex elements like rotating sliders and cumbersome animations is bad for your SEO. Users want every page to load in a second or less. Search engines know this and penalize slow sites.

We recommend testing your site's load time with caching disabled on bandwidth-constrained devices.

### Embedding your site

Embedding your forum in another page necessarily doubles your page load: the parent page + the forum page. This increases load times and frequently creates a worse user experience. It can also make it more difficult for users to bookmark pages and makes those links more likely to break in the future.

Vanilla provides embedding for ease of application to sites with limited resources. We do not recommend it for large-scale community endeavors.
