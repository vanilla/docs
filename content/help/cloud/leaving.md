---
title: Leaving cloud
layout: docs
categories: ["Cloud","Leaving"]
---

# Leaving the cloud

Hey, it happens. On rare occassion, we need to go our separate ways. We hate to see any customer leave, but it's important any cloud providers you use have a strong data ownership policy. Ours is pretty simple: **It's your data.**

## Getting your data

There are four custom components to any forum:

* Database
* Uploaded files (avatars, images, etc)
* Theme or plugin done as a _customer-specific_ customization
* Config

Of these, the only one we do not ever provide is the config. This is simply because it would not help you at all, and would  possibly undermine you. You still need to set up a new forum using the installer anyway.

We only provide custom themes or plugins that you created yourself, or that we created from scratch on your behalf under contract. If you customized one of our _propritary_ cloud themes via your Dashboard, we cannot assist with transitioning that theme.

We provide complete database backups and uploaded files. There is no charge for this, with the reasonable caveats explained below.

### Database

We require two business days notice to get a database backup (with exceptions). They are provided as a standard MySQL dump. No other format is provided, because this format lets you create any _other_ format you want; it's the master tape, if you will.

Here is the exception: if your site exceeds any of the following limits, we may need up to a week to shedule your backup. We might be able to do it quicker, we're just playing it safe here because it's a lot of data to move around.

* 1 million users
* 10 million discussions
* 100 million comments

Barring your objection, we may truncate your activity or log tables because they're not very helpful and can make the dump exponentially larger (and therefore more difficult for you).

We can coordinate final backups for a specific time of a weekday during the hours 10am-4pm Eastern time. Doing so outside of those hours may cost a fee to schedule staff to be available.

### Uploaded files

We typically need two working days' notice to provide your uploaded files. For sites with exceptional amounts of files (in excess of 10GB) we may require a week's notice.

We generally cannot coordinate a "final backup" of these files for a specific time (downloading from a CDN is very slow) unless it's very small.

## Open source

If you plan to continue using Vanilla on your own, there's both good news and bad. The good news is that we don't maintain a private fork of Vanilla. Therefore, your data will mostly work as-is without further data conversions. The bad news is it's a little more complicated than that.

First, you may need to build the [latest version](https://github.com/vanilla/vanilla) of the code from GitHub (`master` branch). Try the [latest stable release](https://vanillaforums.org/addon/vanilla-core) of Vanilla first, but if that doesn't work, you'll need to use Composer.

Second, not all cloud-based addons are open source. There are open source alternatives for some, but you may need to convert the data yourself. One example of this is Badges.

Thirdly, you may need to do some manual work to make existing file uploads appear correctly. You'll want to unzip what we send you into your `/uploads` folder if you're moving to open source. You may need to find and delete any instance of `cf:` or `~cf/` in file paths stored in the database (try `GDN_User.Photo` and `GDN_Media.Path`). These prefixes trigger a CDN lookup in our cloud environment. The open source default is the `/uploads` folder (which you should not need to prepend).

## Support

We do not provide support for leaving the cloud beyond this document and delivering your data as promised. It's a hard goodbye, but if you roll up your sleeves, we're confident you'll have the tools you need to build your own future.

That said, never forget: We offer free migrations from Vanilla open source to cloud if you ever want to return.
