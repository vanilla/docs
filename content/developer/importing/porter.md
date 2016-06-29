---
title: Vanilla Porter
layout: docs
categories: ["Developers","Importing"]
---

## Migrating a forum to Vanilla

Vanilla Porter is the [export tool](http://vanillaforums.org/addon/porter-core)  for converting your legacy forum to Vanilla. The process is four steps:

1. Export your old forum data to a special "Porter file".
2. Create a new Vanilla forum.
3. Import the Porter file in Vanilla's Dashboard.
4. Verify & finalize your new forum.

Vanilla Porter **requires** a MySQL database and PHP 5.3+ with zlib support enabled.


### Before migrating

We recommend these best practices:

1. **Inform your community** well in advance about the coming transition. Introduce them to Vanilla and communicate why you are migrating and when.

1. If possible, **allow moderators time to use Vanilla** and ask questions before migrating.

1. Do one or more **test runs** to work out any issues and familiarize yourself with the process.

1. **Prepare & test redirects** from your old forum's content to its new location. This is important for search engine traffic, preserving links between discussions, and browser bookmarks. More information about this is below under **Special Steps & Notes**.

Doing these things will help your members, moderators, and yourself have a better migration experience and set good expectations for everyone.

All set? OK, let's jump in.


### 1. Export old forum data

Vanlla Porter exports from a database to a special "Porter file" format that Vanilla can import. We currently support [these platforms](/developers/importing/support).

If you have a very large forum (millions of posts), see the **Special Steps & Notes** below before beginning.

To use it:

1. **Grab** the [export tool](http://vanillaforums.org/addon/porter-core) and unzip it. It will be a single file named `vanilla2export.php`.

2. **Upload** the file to *writable* web directory on the server with your legacy database. Most forums have a `files` or `uploads` directory which is an easy place to put it.

3. **Browse** to vanilla2export.php in your web browser. You should see a "Vanilla Porter" web page.

1. *If this is the final export, now is the time to put your legacy forum into read-only mode to prevent posts from being lost during the migration.*

4. **Enter** information about your forum database into the form and click **Begin Export**. If you can’t remember, try looking at your forum’s configuration file.

5. **Download** the Porter file it generates

Got problems? See the **Troubleshooting** section below.


### 2. Create a new Vanilla forum

In order to import your data, you will need a fresh installation of [Vanilla](http://vanillaforums.org/addon/vanilla-core). When you do the import, all data in your fresh installation will be overwritten, so make sure you don’t have any discussions you want to keep there. See the README file for help.


### 3. Import your data

1. Place your Porter file (that the export created) in Vanilla's `uploads` folder.

1. In Vanilla, click **Import** in the Dashboard.

1. Select the file you uploaded. Enter the email of the user from your legacy forum you want to be the superadmin of the new forum. Check "Use my current password". Leave the password box empty.

1. Click **Start Import**.

1. The import runs a while depending on how much data you have. If it's more than a million posts, you can make a cup of tea and check Twitter.

1. Click **Finish** to cleanup and finalize the import.

Welcome to Vanilla! Notice you are now logged in as the username you entered. The password is the one you created your Vanilla forum with. Below are some more things you should do to get your new forum ready.


### 4. Verifying & finalizing the import

These are things to do after your Vanilla import. This includes manually visiting a few "hidden" Dashboard pages just for this process.

1. **Database Update:** Visit the URL `/utility/update` to make any database changes needed. An import can overwrite changes your addons made, so they will be re-applied by this.

1. **Counters Update:** Visit the URL `/dba/counts` to run "counter" updates of things like the number of discussions per category.

1. **Users:** View your Users page in the Dashboard to verify users were imported correctly and are all assigned to a role.

1. **Roles & Permissions:** Many imports reset permissions. It is very import you edit each role in turn to review and correct them.

1. **Default Roles:** Visit the URL `/role/defaultroles` to make sure your visitor, default, and applicant roles are assigned correctly.

1. **Better BBCode:** If you're coming from a forum that uses BBCode, we recommend grabbing the NBBC plugin from the [Addons repository](https://github.com/vanilla/addons) for improved support.

1. **Verify Content:** Go thru your discussions and categories to make sure your content is complete, ungarbled, and organized correctly.

1. **Enable & Verify Redirects:** Turn on your 301 redirects to Vanilla. Test old discussion, category, and user profile URLs to make sure you have set up your redirects correctly. See the **Redirects** section below for more info.



## Special Steps & Notes

This part contains nauseating levels of detail about aspects of migrating that hopefully you don't need to deal with. You'll get referred here from elsewhere in the docs if you need it.


#### Large forums

Forums with over 1 million posts may take a long time to migrate on low-budget hosting plans and cause intense resource usage or downtime while it runs. Forums with over 10 million posts make take a very long time & cause strain on *any* hosting plan.

For advanced users in these circumstances, copy your database to a localhost installation and run the Porter via the command line. See the [Vanilla Porter repository and README](https://github.com/vanilla/porter) for more information. We likewise recommend importing to a localhost copy of Vanilla and running your verification & finalization steps locally, and repeating the **Default Roles** step after copying the database to production.


#### Attachments

File attachments and avatars may be stored in the file system or as binary blobs in the database depending on your platform and configuration. If they are stored in the file system (most common), copy the entire folder directly into Vanilla's `uploads` folder.

The Porter can export binary blobs for vBulletin. When navigating to the `vanilla2export.php` file, add `?avatars=1&files=1` to the URL. This will create folders for `attachments` and `customavatars` that should each be directly copied to Vanilla's `uploads` folder.

To rename vBulletin's attachments to have correct extensions, use `filepath=/path/to/attachments` in the URL to process them. Renaming phpBB's attachments requires the special `utilities/phpbb.extensions.php` file in the repository. These are currently advanced user tools and may require consulting the inline documentation in the appropriate package file. If you get stuck, ask on the [community forum](http://vanillaforums.org/discussions).


#### Non-MySQL data

Data in non-MySQL formats (MSSQL, PostgreSQL, XML, CSV, JSON) should first be converted to a MySQL database before using Vanilla Porter or attempting to create a Porter package. For flat file data, we recommend a table per file. Preserving existing column names is preferred whenever possible.


#### Passwords

Vanilla natively supports many legacy password schemes for other forums. This means users do not need to reset their password if you're coming from a platform we support (see the vanilla2export.php file for availability).

If you run into problems, your platform isn't supported, or want to reset them anyway, you can run this SQL query (via a tool like phpMyAdmin) to reset all passwords: `update GDN_User set HashMethod = 'Reset' where Admin < 1;` (the `where` clause there prevents resetting your superadmin password). This does not trigger any notification emails; users will be alerted they must reset their password on their next login attempt.


#### Redirects

Many legacy platform redirects can be handled by the **Redirector** plugin in the [Addons repository](https://github.com/vanilla/addons). Simply enable the plugin. Check the description for what it supports currently.

You can create custom redirects as needed using the [Routes](/developers/routes) feature in the Dashboard. Use regular expressions to match incoming URL patterns and 301 redirects to their new place. Some imports will automatically create Routes for you, so check to see.

If you run the import on localhost and then copy the database to production, be sure to manually transfer those special Routes as well.

Once you have correct redirects set in Vanilla, you must set up a global redirect from your old forum address to Vanilla. See the `forum-redirector` folder in the [Addons repository](https://github.com/vanilla/addons) for help setting this up. This is *not* the same as the Redirector plugin above (which is at `plugins/Redirector`).

Users hitting your old forum should then be 1) globally 301 redirected to Vanilla which will then 2) 301 redirect to the correct content based on the URL requested. Yes, 2 redirects are used in this technique.


## Troubleshooting


#### Common problems using Porter

1. Not placing the file `vanilla2export.php` in a web-enabled folder accessible from the Internet.
1. Not placing the file `vanilla2export.php` in a folder that the web server has permission to *write* to.
2. Attempting to export from an MSSQL database. You must first convert to MySQL. Try the [dbdump tool](https://github.com/tburry/dbdump).
3. Attempting to export from a non-PHP server. Try setting up a tool like MAMP or WAMP on your computer and copying your database there instead.

Still having trouble? Ask on the [community forum](http://vanillaforums.org/discussions).


#### Common problems while importing

1. Entering a user email address that does not exist in the legacy forum.
2. Unzipping the generated porter file. Leave it zipped and *do not rename it*.
3. Not having `zlib` installed AND enabled in your PHP install. Confirm this with your host if the file cannot be read.
2. Not placing the generated porter file directly in the `uploads` folder.
3. Attempting to 'Browse' for the file rather than selecting it with the multiple choice selector above that.

Still having trouble? Ask on the [community forum](http://vanillaforums.org/discussions).


#### Data missing

Review the support table included in the vanilla2export.php file (by browsing to it in a web browser and clicking the link) and verify that data is included in that platform.

**Is it supported?** If so, ask on the [community forum](http://vanillaforums.org/discussions). If you can find the technical reason it didn't work, please file an [issue on the GitHub repository](https://github.com/vanilla/porter/issues).

**Not supported?** You can request support be added on the GitHub repository. If you do this, *please be prepared to supply a copy of your forum database* as a sample. For password support, first create a new user with a password you can share for testing purposes.

We do accept pull requests for new package support if you create it. Please see the **Contributing** section of the [Vanilla Porter README](https://github.com/vanilla/porter).


#### Users cannot login

See the **Passwords** section under **Special Steps & Notes** above. Use the query there to reset all passwords if necessary.


#### Porter file seems too small

A great deal of data in legacy forums is unneeded, and porter files are compressed significantly. Be sure to do a test import and verify its content before assuming it's not there. The Vanilla Porter export log will give details on what data has been exported (and how much of each type of data).


#### My legacy forum isn't supported

Weirdo. Just kidding! You can request support (see **Data Missing - Not Supported?** above) or roll your own porter package (see the [repository](https://github.com/vanilla/porter)).
