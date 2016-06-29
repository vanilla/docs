---
title: Forum Merge
layout: docs
categories: ["Addons"]
---

## When to Use Forum Merge

The ForumMerge plug-in should be used when you want to take one existing Vanilla forum instance and merge it into another existing Vanilla forum.  Core Vanilla data, in addition to some plug-in and addon data, will be carried over from the source into the destination forum and reconciled with existing records to avoid conflicts.

## What Data is Merged

The following Vanilla data will be considered during the merge process:

* Attachments
* Bookmarks
* Categories
* Comments
* Conversations
* Discussions
* Roles
* Users

In addition, the following plug-ins have their data merged, if present:

* Polls
* Tagging

## The Process of Merging Forums

1. Ensure your source forum database is on the same server and accessible by the same database user configured for your destination forum.
2. Install and enable the ForumMerge plug-in on the destination forum.  Enabling the plug-in may take several seconds to complete if the destination forum is large.  This is due to the addition of an OldID column across several tables.  It is also possible the plug-in cannot be enabled due to the size of some tables.  If this step fails, you should be presented with SQL commands you will need to run manually against the database before the plug-in can be successfully enabled.
3. Visit the Merge page, listed under Import in the dashboard sidebar.
4. Enter your source forum's database name and table prefix.  If you will be merging multiple forums, you can specify a "Legacy Slug" that will identify the records coming from the source separately from any subsequent merges with a different legacy slug.
5. Click begin.  Cross your fingers.
6. If the merge is successful, the page should appear to refresh, but there is currently no status message to confirm.
7. If you'll be merging in another forum, you can visit /utility/mergereset to reset all existing OldID fields.

## Notes

1. Do not enable the Forum Merge plug-in on the source forum.  If it has been enabled in the past, you'll need to remove all OldID and OldCategoryID columns from the relevant tables prior to running the merge.  Failure to do so will cause a fatal SQL error during the merge, because the merge-specific columns (OldID, OldCategoryID) are being selected twice.
2. If dumping the destination forum data into an existing forum install with ForumMerge enabled, you'll need to disable, then re-enable the ForumMerge plug-in or visit /utility/update to apply the necessary database table updates.  Failure to do so will cause a fatal SQL error, because the required columns (OldID, OldCategoryID) aren't present.
