---
title: Modules
layout: docs
categories: ["Developers","Framework"]
---

<p>If controller methods represent the main content/purpose of a page, modules represent secondary information or functions. Modules are small groupings of functionality or information on a page. Some modules that are bundled with Garden include:</p>
<ul>
<li><strong>HeadModule</strong> - Allows addition of javascript, css &amp; meta information to be rendered in the page.</li>
<li><strong>MenuModule</strong> - Handles management and rendering of items in the main menu.</li>
<li><strong>PagerModule</strong> - Takes information about a dataset and renders a pagelist.</li>
<li><strong>GuestModule</strong> - Displays information for unauthenticated users in the sidebar on how to sign in or register.</li>
</ul>
<p>Modules are application-specific, and are located in the application's "modules" folder. To see all of the modules packaged with Garden, browse to <code>/applications/garden/modules</code>. If a module has an associated view, it can be found in the application's views/modules folder with the same name as the module file minus "class" and "module". For example, the view associated with the <code>/applications/garden/modules/class.guestmodule.php</code> is <code>/applications/garden/views/modules/guest.php</code>. Modules are extended from the Module class, which is like a very simple version of the controller class. They are typically used to display information in the Panel asset, but they can actually be used anywhere in the page. A module's default asset is defined with the AssetTarget method, which simply returns the name of the asset to add the module to by default.</p>
<h2>Examples</h2>
<p>The simplest modules will have just two methods: AssetTarget and ToString. Let's make a "Hello World" module. Create a file called class.helloworldmodule.php and place it in your test application's modules folder (if you don't have a test application, put it in Vanilla's modules folder). Open the file and enter the following:</p>
<pre lang="php">class HelloWorldModule extends Module {

   public function AssetTarget() {
      return 'Panel';
   }

   public function ToString() {
      return 'Hello World!';
   }
}</pre>
<p>Now let's go add it to a controller. Open up a controller in your test application and add the following (if you don't have a test application, use vanilla's controllers/discussions.php file and add it to the bottom of the index method) right above the call to $this-&gt;Render():</p>
<pre lang="php">$this-&gt;AddModule('HelloWorldModule');</pre>
<p>If you browse to this page, the text "Hello World!" will not appear in the panel. You can change where the "Hello World!" text appears either by changing the value returned by the AssetTarget method, or on the fly when the module is added by the controller. Let's change the AddModule call to send the module to the Content asset instead of the Panel:</p>
<pre lang="php">$this-&gt;AddModule('HelloWorldModule', 'Content');</pre>
<p>Go back and refresh the page to see that the text has moved over to the Content asset. The AddModule method will take a string as the first parameter, or an instantiated module object. So, we could have also added the module in the following manner:</p>
<pre lang="php">$HelloWorldModule = new HelloWorldModule();
$this-&gt;AddModule($HelloWorldModule);</pre>
<h2>Organizing Module Sort Order</h2>
<p>You can organize the order that modules appear in assets by manipulating the Modules collection of the Configuration array. Take a look at conf/config-defaults.php to see the default sort order of core-packaged modules:</p>
<pre lang="php">// Modules
$Configuration['Modules']['Vanilla']['Panel'] = array('NewDiscussionModule', 'GuestModule', 'Ads');
$Configuration['Modules']['Vanilla']['Content'] = array('Gdn_MessageModule', 'Notices', 'Content', 'Ads');
$Configuration['Modules']['Garden']['Content'] = array('Gdn_MessageModule', 'Notices', 'Content', 'Ads');
$Configuration['Modules']['Conversations']['Content'] = array('Gdn_MessageModule', 'Notices', 'Content', 'Ads');</pre>
<p>The collection names the application, followed by the asset to organize. The value is an array in order that modules should be organized. If a module is not added, it will simply be ignored. If a module is added that does not appear in the array, it will be added after the defined modules, and in the order that it was added to the code.</p>
<h2>Doing More</h2>
<p>While it's nice to be able to add messages to pages, it doesn't illustrate the true power of modules. Modules can be used to retrieve and display data, contain forms for submitting data, and much more. To see all that can be done with modules, take a look at the modules in Garden &amp; Vanilla. Listed below are a couple examples of modules that do more than just spit out text:</p>
<dl><dt>/applications/garden/modules/recentactivitymodule.php</dt><dd>Grabs recent activities for display in the panel.</dd><dt>/applications/conversations/modules/class.addpeoplemodule.php</dt><dd>Adds a form to the panel that allows users to add people to a conversation.</dd><dt></dt></dl>
