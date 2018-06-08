---
title: Inform Messages
tags:
- Developers
- Framework
category: developer
menu:
  developer:
    parent: framework
    weight: 10
aliases:
- /developers/framework/inform
---
## Toaster Notifications

Inform Messages allow you to let users know of some action that your plugin or application has taken. Inform messages allow you to quickly and easily relay information to users, and handle actions based on interaction with those messages. Use them freely to notify users of saved forms, punishments, rewards, etc.

You can send Inform Messages from within a controller or a plugin, or from a custom javascript function. 

By default, these messages are stackable, dismissable, and autodismissable. They can contain any plain-text string, or any unfiltered custom html string. 

They can be passed with JavaScript callbacks to fire on dismissal so some kind of further action can be taken. There are even CSS definitions that allow you access to over 100 readymade icon sprites you can use to denote meaning in your messaging.

## Using in core

An example native inform message in Vanilla: saving drafts. 

![An example native inform message](http://farm6.static.flickr.com/5091/5503092803_d4be13195b_o.png "An example native inform message")

When a comment draft is saved, you can see an inform message appear on the bottom-left of the screen. This message shows a close button on the top-right when you hover your mouse overtop, and it automatically disappears after a few seconds. The code used to make this message appear is located on line 448 of /applications/vanilla/class.postcontroller.php:

```php
$this->informMessage(sprintf(t('Draft saved at %s'), Gdn_Format::date()));
```

If we didn't want to include the time that the draft was saved, we could simplify it further to:

```php
$this->informMessage(t('Draft saved successfully'));
```

The `t()` function is Vanilla's native "Translate" function so that the string can be converted to other languages. 

## Using in a plugin

Adding a message to the screen with a plugin. 

![A message added with a plugin](http://farm6.static.flickr.com/5019/5503917718_4f22ccd6e0_o.png "A message added with a plugin")

The code to achieve this is pretty easy:

```php
public function base_render_before($sender) {
    $sender->informMessage('This is a test!');
}
```
With this code, the message will appear on every page load for every user (signed in or not) and it will disappear after a few moments. Not exactly a useful message, but let's see what else we can do with it:

```php
public function base_render_before($sender) {
    // Only show the message if the user is signed in
    if (Gdn::session()->isValid())
        $sender->informMessage('This is a test!', 'Dismissable');
    }
```

Now the message only shows if the user has a valid session, and it doesn't auto-dismiss. The second parameter in the InformMessage method is either a string of CSS classes to be applied to the message container, or an array of options. 

If you don't provide the second parameter at all, it defaults to "Dismissable AutoDismiss", which obviously makes it so the message automatically disappears after a few moments, or can be immediately dismissed by clicking the "close" button. If you decide to use the second parameter, here are the options available to you:

 - **CssClass:** An optional set of css classes to pass along to the message's container.
 - **DismissCallback:** An optional javascript callback that gets called when the "close" button is clicked on a message.
 - **DismissCallbackUrl:** An optional javascript callback url that gets requested when the "close" button is clicked on a message. If a dismissCallback is specified, this option will be ignored.

## Static messages

Let's say you want to deliver a message to a particular user, and have that message stay on the screen on every page load until that user dismisses the message. You can achieve it like this:

```php
public function base_render_before($sender) {
    $session = Gdn::session();
        if ($session->isValid() &amp;&amp; $session->User->UserID == 1 &amp;&amp; $session->getPreference('UserDismissedCustomMessage', false) == false) {
            $sender->informMessage(
                'This message will stay here until you dismiss it!',
                array(
                    'CssClass' => 'Dismissable',
                    'DismissCallbackUrl' => '/plugin/dismissmessage/'
                )
            );
        }
}
                                                                        
// Handle the callback
public function pluginController_dismissMessage_create($sender) {
    $session = Gdn::session();
    $session->setPreference('UserDismissedCustomMessage', true);
}
```

![A message specific to a particular user](http://farm6.static.flickr.com/5254/5503327977_f14304669c_o.png "A message specific to a particular user")

This message appears for me because my UserID is 1, and it keeps showing up on every page until I dismiss it. At that point the callback url is requested via ajax, and the dismissal preference is saved so the message will no longer appear for me.

## Styling a message

Let's look at how we can change the appearance of these messages. 

![A test message with an icon](http://farm6.static.flickr.com/5014/5503328011_3d92a293b7_o.png "A test message with an icon")

There are over 100 icons available for you to use. You can check them out by looking at the icon sprite file located in /applications/dashboard/design/images/inform-sprites.png, and you can see how to reference them by searching for the css definitions in /applications/dashboard/design/style.css (hint: search for "span.InformSprite."). 

Here's the code to achieve this message:

```php
$sender->informMessage('<span class="InformSprite Skull"></span> This is a test!', 'Dismissable HasSprite');
```

Note the span at the front of the message. This will contain the "Skull" image you see above. It's also necessary for the CSS definition in the second argument to contain "HasSprite" so that the spacing &amp; alignment of the icon all works properly.

## Message origin

You can also style the inform messages to appear "From" a specific user.

![A message with an user as sender](http://farm6.static.flickr.com/5098/5503917812_cfa84f0c24_o.png "A message with an user as sender")

You'll need to load a user record for the icon you wish to display, and then write the message to the screen like this:

```php
$user = Gdn::userModel()->get(1); // Load the user who's icon you want to show
$string = userPhoto($user, 'Icon'); // IMPORTANT: Give the icon a css class of "Icon" 
$string .= 'This is a test!'; // Append some message
$sender->informMessage($string, 'Dismissable HasIcon'); // Send to the screen
```

## Inform via JavaScript

At some point you may need to write a message to the screen from JavaScript instead of from the server side. This can be achieved with a similar, JavaScript-based method:

```javascript
gdn.informMessage('This is a test!');
```

And all of the same properties exist, so you can be as elaborate as you like:

```javascript
gdn.informMessage('This is a test!', {'CssClass' : 'Dismissable', 'DismissCallback' : 'some_function', 'DismissCallbackUrl' : '/relative/path/to/callback/url'});
```

## Duplication and stacking

You can add as many messages to as many pages as you like. If a message is already present on the screen, it will not be added a second time, and new messages will simply stack one-on-top-of-the-next.

![Multiple messages](http://farm6.static.flickr.com/5300/5503917872_92042ca343_o.png "Multiple messages")

