---
title: Environment Setup
tags:
- Developers
category: developer
menu:
  developer:
    identifier: environment
aliases:
- /developers/tools/environment
---
## Environment Setup

After you've got your [tools](/developers/tools) ready, here's how to set some of them up to work together nicely. We assume you're using MacOS. This is all pretty useless if you're not.

### Automate dependency building

To automatically recompile Composer dependencies when you make commits, pull, or checkout a different release branch, add this:

```
#!/bin/sh
composer install
```

To these files in your git repository (creating them if they do not exist):

* `.git/tools/post-commit`
* `.git/tools/post-merge`
* `.git/tools/post-checkout`

Then make the files executable. On MacOS, you can use `chmod +x [filename]` to do this.

Note the `#!/bin/sh` line should only appear once per file, as the very first line.

### Using bootstrap.early on localhost

You can create a file named `conf/bootstrap.early.php` to apply special settings to your localhost environment. The settings are annotated inline so you can use the parts that are relevant to you.

```php
<?php if (!defined('APPLICATION')) exit();

// Make sure your localhost has updated to the correct db type.
saveToConfig('Database.ForceStorageEngine', 'innodb', false);

if (c('Garden.Installed')) {
   // Always keep debug mode on & enable logging.
   saveToConfig('DebugAssets', true);
   saveToConfig('Debug', true);
   saveToConfig('Garden.Errors.LogEnabled', true);
   saveToConfig('Garden.Errors.LogFile', '/Users/{YOUR USER}/vanilla.log');

	// Allow email to work via your own SMTP account.
   saveToConfig('Garden.Email.SupportAddress', 'YOUR EMAIL ADDRESS');
   saveToConfig('Garden.Email.UseSmtp', '1');
   saveToConfig('Garden.Email.SmtpHost', 'smtp.gmail.com');
   saveToConfig('Garden.Email.SmtpUser', 'YOUR EMAIL ADDRESS');
   saveToConfig('Garden.Email.SmtpPassword', 'PASSWORD TOKEN'); # Get this in Gmail etc.
   saveToConfig('Garden.Email.SmtpPort', '465');
   saveToConfig('Garden.Email.SmtpSecurity', 'ssl');
   
   // Auto-set your Captcha keys.
   saveToConfig('Garden.Registration.CaptchaPrivateKey', 'YOUR KEY');
   saveToConfig('Garden.Registration.CaptchaPublicKey', 'YOUR KEY');

   // Caching is important for thorough feature testing.
   saveToConfig('Cache.Enabled', false); # Just toggle this to true for testing with cache; usually it's a pain to leave on
   saveToConfig('Cache.Method', 'memcached');
   saveToConfig('Cache.Memcached.Store', array('localhost:11211'));
   if (class_exists('Memcached')) {
      saveToConfig('Cache.Memcached.Option.'.Memcached::OPT_COMPRESSION, true, false);
      saveToConfig('Cache.Memcached.Option.'.Memcached::OPT_DISTRIBUTION, Memcached::DISTRIBUTION_CONSISTENT, FALSE);
      saveToConfig('Cache.Memcached.Option.'.Memcached::OPT_LIBKETAMA_COMPATIBLE, true, false);
      saveToConfig('Cache.Memcached.Option.'.Memcached::OPT_NO_BLOCK, true, false);
      saveToConfig('Cache.Memcached.Option.'.Memcached::OPT_TCP_NODELAY, true, false);
      saveToConfig('Cache.Memcached.Option.'.Memcached::OPT_CONNECT_TIMEOUT, 1000, false);
      saveToConfig('Cache.Memcached.Option.'.Memcached::OPT_SERVER_FAILURE_LIMIT, 2, false);
   } else {
   	  // You'll be happy this is here when you upgrade PHP and forget.
      die('You compiled PHP without Memcached, idiot.');
   }
}
```

### Accessing error logs

In the above `bootstrap.early` example, we enable logging and set a location for those logs. Here's a cheeky shortcut to quickly access them from the command line. Create a file named `~/bin/wtf` with this content:

```
#!/bin/sh
tail -$1 /Users/{YOUR USER}/vanilla.log
```

Make sure to make it executable (`chmod +x ~/bin/wtf`). If you set a different log location, substitute it above.

At the command line you can now type `wtf` to see the most recent log entries. Or, `wtf 50` to specify seeing the 50 most recent lines on the log. It's a little cathartic and less irritating than trying to remember your log location.

Don't forget to also consult your server (Apache/nginx) and PHP logs. You can create similar shortcuts for them, if you like.

### Reloading localhost services

Reload a locahost service installed with brew. _Usage_: `reload php`

This is mainly useful so you don't need to remember all these file locations and command variations. Again, this would be in a file named `~/bin/reload`.

```
# Reload php, sql, or nginx

if [ $1 == 'php' ] 
  then
  launchctl unload -w /Users/linc/Library/LaunchAgents/org.php.php-fpm.plist
  launchctl load -w /Users/linc/Library/LaunchAgents/org.php.php-fpm.plist
  echo "PHP restarted";
fi

if [ $1 == 'sql' ] 
  then
  launchctl unload -w /Users/linc/Library/LaunchAgents/homebrew.mxcl.percona-server.plist
  launchctl load -w /Users/linc/Library/LaunchAgents/homebrew.mxcl.percona-server.plist
  echo "Percona restarted";
fi

if [ $1 = 'nginx' ] 
  then
  sudo nginx -s stop
  sudo nginx
  echo "Nginx restarted";
fi 
```

### Proper debugging setup

First, grab xdebug.

`brew install xdebug`

If you're using the normal nginx setup we pass around the office, your upstream backend is probably listening on port 9000, which is the default for xdebug, so there's a conflict. So, let's set xdebug to 9009.

In `/usr/local/etc/php/{version}/conf.d/ext-xdebug.ini` add this:

```
xdebug.remote_enable = 1
xdebug.remote_port = 9009
html_errors = off
```

Reload PHP.

Now in PHPStorm go to Preferences and search XDebug and set the debug port to 9009.

![](https://us.v-cdn.net/5022541/uploads/editor/bo/dqpgwnvkn6tx.png "")

In your PHPStorm debug bar, choose "Edit Configurations" from the dropdown.

![](https://us.v-cdn.net/5022541/uploads/editor/o4/e8r3pktz5vp9.png "")

Add a new PHP Web Application and give it the name & host of your localhost setup.

![](https://us.v-cdn.net/5022541/uploads/editor/cv/1nur7d6q57eb.png "")

Clicking "Play" should now open Vanilla in your browser. To prove XDebug is working, add a breakpoint to index.php at `$Dispatcher = Gdn::Dispatcher();` and click the "Bug" button. A page should open in your browser with an XDebug session attached to the URL. Back in PHPStorm, your debug console should be open with variable information.

Happy hunting.
