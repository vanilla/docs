---
title: Inform Messages
layout: docs
categories: ["Developers","Framework"]
---

# Inform Messages

Inform Messages allow you to let users know of some action that your plugin or application has taken. Inform messages allow you to quickly and easily relay information to users, and handle actions based on interaction with those messages. Use them freely to notify users of saved forms, punishments, rewards, etc.

You can send Inform Messages from within a controller or a plugin, or from a custom javascript function. 

By default, these messages are stackable, dismissable, and autodismissable. They can contain any plain-text string, or any unfiltered custom html string. 

They can be passed with JavaScript callbacks to fire on dismissal so some kind of further action can be taken. There are even CSS definitions that allow you access to over 100 readymade icon sprites you can use to denote meaning in your messaging.

## Using in core

An example native inform message in Vanilla: saving drafts. 

<img style="border: 1px solid #333; margin: 20px 0; display: block;" src="http://farm6.static.flickr.com/5091/5503092803_d4be13195b_o.png" alt="" /> 

When a comment draft is saved, you can see an inform message appear on the bottom-left of the screen. This message shows a close button on the top-right when you hover your mouse overtop, and it automatically disappears after a few seconds. The code used to make this message appear is located on line 448 of /applications/vanilla/class.postcontroller.php:

<pre lang="php">$this-&gt;InformMessage(sprintf(T('Draft saved at %s'), Gdn_Format::Date()));</pre>
<p>If we didn't want to include the time that the draft was saved, we could simplify it further to:</p>
<pre lang="php">$this-&gt;InformMessage(T('Draft saved successfully'));</pre>

The `t()` function is Vanilla's native "Translate" function so that the string can be converted to other languages. 

## Using in a plugin

Adding a message to the screen with a plugin. 

<img style="border: 1px solid #333; margin: 20px 0; display: block;" src="http://farm6.static.flickr.com/5019/5503917718_4f22ccd6e0_o.png" alt="" /> 

The code to achieve this is pretty easy:

<pre lang="php">public function Base_Render_Before($Sender) {<br />   $Sender-&gt;InformMessage('This is a test!');<br />}</pre>
<p>With this code, the message will appear on every page load for every user (signed in or not) and it will disappear after a few moments. Not exactly a useful message, but let's see what else we can do with it:</p>
<pre lang="php">public function Base_Render_Before($Sender) {<br />   // Only show the message if the user is signed in<br />   if (Gdn::Session()-&gt;IsValid())<br />      $Sender-&gt;InformMessage('This is a test!', 'Dismissable');<br />}</pre>

Now the message only shows if the user has a valid session, and it doesn't auto-dismiss. The second parameter in the InformMessage method is either a string of CSS classes to be applied to the message container, or an array of options. 

If you don't provide the second parameter at all, it defaults to "Dismissable AutoDismiss", which obviously makes it so the message automatically disappears after a few moments, or can be immediately dismissed by clicking the "close" button. If you decide to use the second parameter, here are the options available to you:

* <strong>CssClass:</strong> An optional set of css classes to pass along to the message's container.
* <strong>DismissCallback:</strong> An optional javascript callback that gets called when the "close" button is clicked on a message.
* <strong>DismissCallbackUrl:</strong> An optional javascript callback url that gets requested when the "close" button is clicked on a message. If a dismissCallback is specified, this option will be ignored.

## Static messages

Let's say you want to deliver a message to a particular user, and have that message stay on the screen on every page load until that user dismisses the message. You can achieve it like this:

<pre lang="php">public function Base_Render_Before($Sender) {<br />   $Session = Gdn::Session();<br />   if ($Session-&gt;IsValid() &amp;&amp; $Session-&gt;User-&gt;UserID == 1 &amp;&amp; $Session-&gt;GetPreference('UserDismissedCustomMessage', false) == false) {<br />      $Sender-&gt;InformMessage(<br />         'This message will stay here until you dismiss it!',<br />         array(<br />            'CssClass' =&gt; 'Dismissable',<br />            'DismissCallbackUrl' =&gt; '/plugin/dismissmessage/'<br />         )<br />      );<br />   }<br />}<br /><br />// Handle the callback<br />public function PluginController_DismissMessage_Create($Sender) {<br />   $Session = Gdn::Session();<br />   $Session-&gt;SetPreference('UserDismissedCustomMessage', TRUE);<br />}</pre>

<img style="border: 1px solid #333; margin: 20px 0; display: block;" src="http://farm6.static.flickr.com/5254/5503327977_f14304669c_o.png" alt="" /> 

This message appears for me because my UserID is 1, and it keeps showing up on every page until I dismiss it. At that point the callback url is requested via ajax, and the dismissal preference is saved so the message will no longer appear for me.

## Styling a message

Let's look at how we can change the appearance of these messages. 

<img style="border: 1px solid #333; margin: 20px 0; display: block;" src="http://farm6.static.flickr.com/5014/5503328011_3d92a293b7_o.png" alt="" /> 

There are over 100 icons available for you to use. You can check them out by looking at the icon sprite file located in /applications/dashboard/design/images/inform-sprites.png, and you can see how to reference them by searching for the css definitions in /applications/dashboard/design/style.css (hint: search for "span.InformSprite."). 

Here's the code to achieve this message:

<pre lang="php">$Sender-&gt;InformMessage('&lt;span class="InformSprite Skull"&gt;&lt;/span&gt; This is a test!', 'Dismissable HasSprite');</pre>

Note the span at the front of the message. This will contain the "Skull" image you see above. It's also necessary for the CSS definition in the second argument to contain "HasSprite" so that the spacing &amp; alignment of the icon all works properly.

## Message origin

You can also style the inform messages to appear "From" a specific user. <img style="border: 1px solid #333; margin: 20px 0; display: block;" src="http://farm6.static.flickr.com/5098/5503917812_cfa84f0c24_o.png" alt="" /> 

You'll need to load a user record for the icon you wish to display, and then write the message to the screen like this:

<pre lang="php">$User = Gdn::UserModel-&gt;Get(1); // Load the user who's icon you want to show<br />$String = UserPhoto($User, 'Icon'); // IMPORTANT: Give the icon a css class of "Icon" <br />$String .= 'This is a test!'; // Append some message<br />$Sender-&gt;InformMessage($String, 'Dismissable HasIcon'); // Send to the screen</pre>

## Inform via JavaScript

At some point you may need to write a message to the screen from JavaScript instead of from the server side. This can be achieved with a similar, JavaScript-based method:</p>
<pre lang="javascript">gdn.informMessage('This is a test!');</pre>
<p>And all of the same properties exist, so you can be as elaborate as you like:</p>
<pre lang="javascript">gdn.informMessage('This is a test!', {'CssClass' : 'Dismissable', 'DismissCallback' : 'some_function', 'DismissCallbackUrl' : '/relative/path/to/callback/url'});</pre>

## Duplication and stacking

You can add as many messages to as many pages as you like. If a message is already present on the screen, it will not be added a second time, and new messages will simply stack one-on-top-of-the-next. <img style="border: 1px solid #333; margin: 20px 0; display: block;" src="http://farm6.static.flickr.com/5300/5503917872_92042ca343_o.png" alt="" />

