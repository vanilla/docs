---
title: Troubleshooting
layout: docs
categories: ["Features", "Troubleshooting"]
---

## Troubleshooting Vanilla

These are some generic tips for addressing problems during an upgrade.

* Set `$Configuration['Debug'] = TRUE;` in your `conf/config.php` to reveal full error messages. Remember to remove it when you are done.
* Clear your browser cache and cookies, then restart your browser.
* Clear *.ini files from the `cache` folder.
* Revert to the default theme. You can do this manually in `conf/config.php` by setting the `$Configuration['Garden']['Theme']` value to `default`.
* Disable plugins. If you cannot get to your Dashboard, you can manually delete lines containing `EnabledPlugins` in `conf/config.php` but **do not remove HTMLawed's line**.
* Try running `/utility/update` again (see upgrade instructions).
* Verify your permissions and default role settings are correct for every role.
* Start a **new discussion** on this site with your version number (likely 2.2 if you're reading this), the exact error message you got, and what you were doing when you got it.
