---
title: Staging Site
layout: docs
categories: ["Cloud","Staging"]
---

## Staging Site Overview

For higher [plan levels](http://vanillaforums.com/plans), we provide a separate staging forum. You can use this account for testing addons, features, and theme changes before they reach your production site. Your customer success manager will provide this account for you upon request.

### Test data

We will typically use your staging forum as the destination for your [test migration](/cloud/migration). For very large sites, we will need to prune back this data to a smaller size after your launch. The infrastructure resources dedicated to staging are understandably limited, so we don't support huge staging datasets in the longer-term.

### Access precautions

Your staging site access cannot be restricted by IP range (unless you have a private cluster). However, we do provide an addon for blocking your staging site from search engine results and spidering.

If you are doing a test import to the staging site, we typically disable all email sending to prevent notifications from being dispatched from it. Confirm this with your success manager. We can alternatively wipe email addresses from all but select user accounts to allow notification testing & review.

### Early access

If you have a moderator or executive team you'd like to onboard with Vanilla before your launch, we recommend giving them access to your staging site.

### Syncing

We never sync neither data nor settings from staging to production. Your customer success manager can assist you in manually copying your settings, and we can assist in auditing your settings before launch. We **cannot** offer incremental content or data migrations / merges between sites.
