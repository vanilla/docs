---
title: Analytics API
tags:
- Developers
category: developer
menu:
  developer:
    identifier: analyticsapi
aliases:
- /developers/analyticsapi
---
## Collections

All events captured by Vanilla are grouped into one of the following categories.  The collection is specified by passing the `event_collection` parameter to the analytics query.

### page

Page views are captured in the "page" collection.  Any time a guest or registered user loads up a page, it is captured and filed into this collection.

#### Types

* discussion_view
* page_view

#### Commonly Used Properties

* **user.userID** - The ID of the user, if available.  If there is no current user, either because they aren't signed in or are a guest, this value will be "0".

### point

Events involving actions affecting a user's points are stored in the "point" collection.  Both giving and removing points are recorded.

#### Types

* user_point_add
* user_point_remove

#### Commonly Used Properties

 * **point.given.points** - The total number of points granted or revoked in this event.

### post

When a discussion or comment is made, it is tracked in the "post" collection.  All posts are contained in this collection: comments, discussions, questions, ideas.  There are no restrictions on the type of post.

#### Types

 * **discussion_add**
 * **comment_add**

#### Commonly Used Properties
 * **discussionType** - The type of discussion related to this post.
 * **commentMetric.time** - If the event was triggered by a comment, this property will be populated with the time, in seconds, between when the discussion and comment were added.
 * **commentMetric.firstComment** - Will be true if this event was triggered by a comment and it was the first comment on the discussion.

### post_modify

If a post is modified, the action is captured in the "post_modify" collection.  Similar to "post", the type does not matter.  Two primary types of modification events are captured: edits and deletes.

#### Types

 * **discussion_edit**
 * **discussion_delete**
 * **comment_add**
 * **comment_delete**

### qna

The "qna" collection contains events specifically related to the Q&A plug-in, such as answering a question.  Adding, editing or deleting a question would be recorded in the "post" collection.

#### Types

 * **answer_accepted**

### reaction

When a user submits a reaction to a post, it is captured in "reaction".  This includes adding and removing reactions.

#### Types

 * **reaction_add**
 * **reaction_delete**

#### Commonly Used Properties

 * **reaction.reactionClass** - The class of the reaction.  This is typically "Positive" or "Negative".
 * **reaction.recordType** - The type of post this reaction was performed on.  This is typically "discussion" or "comment".

### registration

Successful sign-ups on the forum are recorded in the "registration" collection.

#### Types

 * **registration_success**

### session

Session events are captured in the "session" collection.  These events typically include when a user initiates sign-in, starting their session, and when they sign-out, ending their session.

#### Types

 * **session_start**
 * **session_end**

## Filters

Data queried from analytics can be filtered by collection and event properties.  The most common type of filtering would be based on the `type` property.  For example, if you wanted to see new discussions, you'd query the "post" collection and set a filter on the `type` property being equal to "discussion_add".  The available types for the various collections are documented in their individual sections.  In addition to `type`, some additional commonly-used filtering properties are included in those sections, if available.

There are several comparison operators to choose from:

 * **eq** - Equal
 * **ne** - Not equal
 * **gt** - Greater than
 * **gte** - Greater than or equal to
 * **lt** - Less than
 * **lte** - Less than or equal to
 * **in** - Verify a property's value is in an array

Filters are specified as an array under the `filters` parameter.  Each element of the array should be an object with three properties: `property_name`, `operator` and `property_value`.  `property_name` is an event property (e.g. `type`).  `operator` is a valid comparison operator (e.g. "eq").  `property_value` is a value used for comparison against the specified event property ("discussion_add").

```json
"filters": [
    {
        "property_name": "type",
        "operator": "eq",
        "property_value": "discussion_add"
    }
]
```

## Analysis Types

Analytics queries require an analysis type.  This type will dictate how the data is compiled in the response.

 * **count** - Count the total records.
 * **sum** - Add up all values for a property.
 * **maximum** - Get the maximum value for a property.
 * **count_unique** - Count the total number of unique property values.
 * **median** - Calculate the median value for a property.

Most analysis types are performed on a specific event property, so they require the `target_property` parameter to be specified. **count** does not require a `target_property` parameter.

## Timeframe

The timeframe parameter must be specified as an object with two properties: start and end.  Each of these values must be formatted as an ISO 8601 datetime string.  This parameter will filter events that have been inserted in a collection between the two values.

```json
"timeframe": {
    "start": "2016-12-01T00:00:00.000Z",
    "end": "2017-01-01T00:00:00.000Z"
}
```

## Interval

An optional `interval` parameter may be specified in an analytics query.  If a valid `interval` is specified, the results are broken down into the specified increments over the timeframe.

#### Intervals

 * hourly
 * daily
 * weekly
 * monthly

## Output

Depending on whether or not an `interval` parameter was specified, the result may be in two different formats.

Without an `interval` parameter, a single value is returned: `result`.

```json
{"result": 3350631}
```

If an `interval` value was provided, the `result` value will be an array.  Each interval will be returned as an object in that array.  The interval's subset of the overall timeframe will be specified as the `timeframe` property.  A `value` property will indicate the query result for the specified subset.

```json
{
    "result": [
        {
            "value": 458,
            "timeframe": {
                "start": "2016-12-01T00:00:00.000Z",
                "end": "2016-12-02T00:00:00.000Z"
            }
        },
        {
            "value": 431,
            "timeframe": {
                "start": "2016-12-02T00:00:00.000Z",
                "end": "2016-12-03T00:00:00.000Z"
            }
        },
        {
            "value": 481,
            "timeframe": {
                "start": "2016-12-03T00:00:00.000Z",
                "end": "2016-12-04T00:00:00.000Z"
            }
        }
    ]
}
```
