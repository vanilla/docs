---
title: Redirector
layout: docs
categories: ["Addons"]
---

## When to Use Redirector

Redirector is a plug-in that translates URLs from many popular forum platforms into Vanilla-friendly URLs.  If you're moving from one of the supported platforms, installing and enabling this plug-in will magically handle maintaining the previous platform's links, which can be of tremendous SEO value.

## Supported Platforms

1. IPB
2. Jive
3. phpBB
4. punBB
5. smf
6. vBulletin
7. xenforo

## Usage
1. Install and enable the plug-in.
2. Visit a URL from your previous platform against your Vanilla installation.  For instance, if you were coming from vBulletin 4, you might visit http://site.vanillaforums.com/showthread.php?t=10001.  If all goes well, you should be directed to http://site.vanillaforums.com/discussion/10001/discussion-title/p1.

## Legacy Redirects
The Redirector plug-in supports the ability to target specific forum resources that were imported with the Forum Merge plug-in.  If you used the Forum Merge plug-in to import data from a new forum and provided a "Legacy Slug" during the merge, you can reference the original forum resource with its original ID.

When two forums are merged together with Forum Merge, the record IDs from the source forum are updated to resolve conflicts with the destination forum's records.  However, if you provided a "Legacy Slug", the old IDs are combined with this slug and retained.  This allows you to reference a record from the source forum by its original ID, so long as you provide the same legacy slug as a parameter to Redirector.

As an example, say you provided "vb" as the "Legacy Slug" during your merge.  One of the discussions from your source forum had the ID of 1337.  However, during the merge, that ID was reset to 10001.  You can still access that discussion with the original ID by using the following URL: http://site.vanillaforums.com/showthread.php?t=1337&legacy=vb.  If all goes well, you should be redirected to http://site.vanillaforums.com/discussion/10001/discussion-title/p1.  Without the legacy parameter set to your source forum's "Legacy Slug", you'd be taken to the forum's current discussion with an ID of 1337, which would be an entirely different discussion.

## Notes
* If you're coming from vBulletin or phpBB and experiencing issues, you may need to remove showpost.php, showthread.php and viewtopic.php from the root of your Vanilla installation directory.
