---
title: Statistics
layout: docs
categories: ["Addons"]
---

## What Are Vanilla Statistics?

The Vanilla Statistics plugin allows forum administrators to review vital activity on their forums over a specific time periods.

![Example of dashboard page](/images/dashboard.png)


## How to use Vanilla Statistics

The Vanilla Statistics plugin is a display layer for the data that is sent to our analytics server.  We generate and present you with the statistics in a graphical format for the following:

* Number of page views
* Number of new users
* Number of new discussions
* Number of new comments

Using the tabs at the top, you can view daily or monthly stats. Also by clicking on the coloured boxes below, you can isolate the data to one specific data set, such as number of new discussions.

Vanilla Statistics will also create a rolling table of data on the following:

* Most Active Users
* Most popular discussions discussions

This too can be modified by changing the time period, you select to view.

## Information from Self-Hosted Installs 

In order to see this visualization on your forum's dashboard, you must have the Vanilla Statistics plugin (bundled with the core product as of Vanilla 2.0.17). Then go to Dashboard > Plugins and click "Enable" next to "Vanilla Statistics".

The only information that is sent to our analytics server is a numeric summary data of the activity in your forum, and data that identifies your installation. We gather the following data:
* Number of page views
* Number of new users
* Number of new discussions
* Number of new comments
* Your host name
* Installed PHP version
* Installed Vanilla version
* Webserver type (apache, iis, nginx, etc)

We generate a unique identifier for your forum which, along with your hostname, allows us to associate the statistics we gather with your specific forum, enabling us to display the statistics graph with correct data specific to you. Our goal with gathering information about your web server (type, version, php version, etc) is to allow us to cater to common server configurations and find bugs in house before they happen to you.

## Statistics & Config.php

In order to display useful analytics graphs on your dashboard, Vanilla Statistics needs to be able to link page views, discussions, and comments to your specific forum installation. It does this by registering your site anonymously on our central server, receiving a unique 'hash id' in return. This hash id is sent alongside every subsequent request your forum makes to us, allowing us to link stats to your forum. If your config file is not writable, we cannot record this hash id (so your forum cannot be linked to statistics information), nor can your forum properly regulate how often it sends statistics to us.

If you have received an error message telling you that your config file is not writable, statistics will have stopped working for you. Simply make your config.php file writable again, and stats will resume. If you wish to disable statistics all together, see the section below, entitled "Disabling Statistical Reporting".

## Disabling Statistical Reporting

It is vitally important to the life of this free, open-source software that we accurately measure the reach and effectiveness of Vanilla. We ask that you please do not disable the reporting of this data. If you must disable this data reporting for some business reason, you can do so by adding the following line to your installation's configuration file: $Configuration['Garden']['Analytics']['Enabled'] = FALSE; 

Please note that disabling data reporting will cause the Vanilla Statistics plugin to cease to function as we will not have any data to report.

## Using Vanilla Stats on localhost

By default statistics won't be sent if you are on a localhost installation. If you want to be able to checkout the stats on your localhost for development purposes then add the following line to your installation's configuration file:  $Configuration['Garden']['Analytics']['AllowLocal'] = TRUE;
