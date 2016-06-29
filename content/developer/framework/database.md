---
title: Database access
layout: docs
categories: ["Developers","Framework"]
---

## Database layer

Vanilla only supports MySQL. It has a generic SQL driver implementation built on top of PDO to potentially allow for other databases (which you can see in `/library/databases`). However, at this time, the Vanilla team has no plans to support additional databases.

The best way to access the database is via existing [models](/developers/framework/models). For instance, to get a list of discussions, use the `Get` method in the `DiscussionModel`. You can rely on model-based access to already be optimized for performance and utilize caching if it's available.

### Building queries

The `SQL` object supports chaining. You can call it with `Gdn::sql()`.

Here's a simple example that gets a single discussion by its ID. We write its pieces in the order of a SQL statement, but they can be called in any order up to the `get()`. The `get()` is the call that fires the built query.

```
Gdn::sql()->
   ->select('*')
   ->from('Discussion')
   ->where('DiscussionID', $DiscussionID)
   ->get();
```

Note that this is an impractical query to use in your addon, because this functionality already exists in a model: 

```
$DiscussionModel = new DiscussionModel();
$DiscussionModel->getID($DiscussionID);
```

Always use pre-existing calls in models when they are available for better performance and forward-compatibility.

Here's an example of a complex select that pulls out all the stops:

```
Gdn::sql()
   ->select('cm.*')
   ->select('iu.Name', '', 'InsertName')
   ->from('ConversationMessage cm')
   ->join('Conversation c', 'cm.ConversationID = c.ConversationID')
   ->join('UserConversation uc', 'c.ConversationID = uc.ConversationID and uc.UserID = '.$ViewingUserID, 'left')
   ->join('User iu', 'cm.InsertUserID = iu.UserID', 'left')
   ->beginWhereGroup()
   ->where('uc.DateCleared is null')
   ->orWhere('uc.DateCleared <', 'cm.DateInserted', TRUE, FALSE)
   ->endWhereGroup()
   ->where('cm.ConversationID', $ConversationID)
   ->orderBy('cm.DateInserted', 'asc')
   ->limit($Limit, $Offset)
   ->get();
```

Notice the use of limit, offset, where groups, where conditions including less than & null, aliasing, and multiple joins.

### Updates and inserts

An insert is a single step that takes the table name and an array of values to insert as parameters:

```
Gdn::sql()->insert('UserConversation', array(
   'ConversationID' => $ConversationID,
   'UserID' => $TargetUserID
));
```

An update requires setting the table in `Update`, ends with a `Put` (much like the select's ending `Get`):

```
Gdn::sql()->update('Conversation')
   ->set('LastMessageID', $MessageID)
   ->where('ConversationID', $ConversationID)
   ->put();
```

### Direct queries

The `query()` method allows for sending unfiltered SQL queries to the database. This is strongly discouraged because it can easily cause security flaws, performance problems, and compatibility problems.

```
Gdn::sql()->query("select * from GDN_Comments");
```

### Structure

Vanilla allows you to define database structures in code. Use the `Gdn::structure()` method to use this object. Here we'll look at part of the definition of the User table as an example:


```
Gdn::structure()
   ->primaryKey('UserID')
   ->column('Name', 'varchar(50)', FALSE, 'key')
   ->column('Password', 'varbinary(100)') 
   ->column('ShowEmail', 'tinyint(1)', '0')
   ->column('Gender', array('u', 'm', 'f'), 'u')
   ->column('Preferences', 'text', TRUE)
   ->column('DateOfBirth', 'datetime', TRUE)
   ->column('Score', 'float', NULL)
   ->set();
```

`column()` takes 4 parameters: name, type, nulldefault (`true` to allow nulls, `false` to not - any other value becomes the default with disallowed nulls), and keytype ('primary', 'key', 'index', 'unique', or 'fulltext' - defaults to false). 

`primaryKey()` creates an auto-incrementing column. The Gender column uses an array to create an `enum` type; the rest are self-explanatory. 

The `set()` method takes 2 parameters which should nearly _always_ be false, which is their default. The first is `$Explicit` which is whether to force the structure of the table to match _exactly_ the definition above. The second is `$Drop` which is whether to drop and recreate the table. 
