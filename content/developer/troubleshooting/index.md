---
title: Troubleshooting
tags:
- Features
- Troubleshooting
category: developer
menu:
  developer:
    identifier: troubleshooting
aliases:
- /developers/troubleshooting
---
## Troubleshooting Vanilla

These are some generic tips for addressing problems during an upgrade or installation.

* Set `$Configuration['Debug'] = true;` in your `conf/config.php` to reveal full error messages. Remember to remove it when you are done.
* Clear your browser cache and cookies, then restart your browser.
* Clear the entire contents of the `cache` folder.
* Vanilla cannot be reinstalled while the `$Configuration['Garden']['Installed'] = true;` line is in your config. To restart installation from scratch, you can delete the `conf/config.php` entirely and drop all tables from the database, then begin the installation process again.
* Revert to the default theme. You can do this manually in `conf/config.php` by setting the `$Configuration['Garden']['Theme']` value to `default`.
* Disable plugins. If you cannot get to your Dashboard, you can manually delete lines containing `EnabledPlugins` in `conf/config.php` but **do not remove HTMLawed's line**.
* Try running `/utility/update` again (see upgrade instructions).
* Verify your permissions and default role settings are correct for every role.
* Start a **new discussion** on [the open source community](https://open.vanillaforums.com/discussions) with your version number, the exact error message you got, and what you were doing when you got it.
