---
title: "Analytics"
tags: 
- API
- APIv2
- API v2
category: "apiv2"
aliases:
- /apiv2/analytics/
menu:
  help:
    parent: apiv2
    weight: 15
---

## /analytics/leaderboard

```http
GET /api/v2/analytics/leaderboard HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Retrieve data for a site leaderboard.

[__Authentication__](authentication): required

### Parameters

Parameter | Type | Description
--- | ---        | ---
__`board`__ | `string` | [Type of leaderboard](#leaderboards).
__`start`__ | `string` | Start of the time range (ISO 8601).
__`end`__ | `string` | End of the time range (ISO 8601).
`limit` | `integer` | Maximum number of rows to return. Default: 10.

### Leaderboards

Leaderboards are specified by the `board` parameter.  The following are valid values for that parameter: 

 * **top-posters**: Users with most posts.
 * **top-discussion-starters**: Users with most discussions.
 * **top-question-answerers**: Users with most answers.
 * **top-best-answerers**: Users with most accepted answers.
 * **top-member-by-total-reputation**: Users by total reputation.
 * **top-positive-users**: Users with the most positive reactions.
 * **top-member-by-accumulated-reputation**: Users by accumulated reputation.
 * **top-viewed-discussions**: Discussions with most views.
 * **top-commented-discussions**: Discussions with most comments.
 * **top-positive-discussions**: Discussions with most positive reactions.
 * **top-negative-discussions**: Discussions with most negative reactions.
 * **top-viewed-qna-discussions**: Questions with most views.

### Output

The following is output from an example request for a user leaderboard.  It assumes a `limit` of three.  The record property contains user row data, because this was a user leaderboard.  If it had been a discussion leaderboard request, the property would contain details about a discussion.

The record property has been pruned for this example.

```json
[
    {
        "id": 53738,
        "position": 1,
        "positionChange": "Rise",
        "previous": 2,
        "url": "http://yoursite.vanillaforums.com/profile?UserID=1234",
        "title": null,
        "count": 921
    },
    {
        "id": 62929,
        "position": 2,
        "positionChange": "Fall",
        "previous": 1,
        "url": "http://yoursite.vanillaforums.com/profile?UserID=5678",
        "title": null,
        "count": 816
    }
]
```

## /analytics/query

```http
POST /api/v2/analytics/query HTTP/1.1
Host: https://yoursite.vanillaforums.com
```

Perform a query against collected analytics data.

[__Authentication__](authentication): required

The body of the request must be a JSON-encoded object.  Each property of the object should be a supported parameter.

### Parameters

Parameter | Type | Description
--- | --- | ---
__`type`__ | `string` | [Type of analysis to perform](#analysis-types)
__`collection`__ | `string` | [Collection of events](#event-collections)
__`start`__ | `string` | Start of the time range (ISO 8601).
__`end`__ | `string` | End of the time range (ISO 8601).
`property` | `string` | An event property to perform the analysis on
`filters` | `array` | [Event property filters](#filters)
`interval` | `string` | [Result interval](#interval)
`group` | `string` | An event property to group results by.

### Analysis Types

Analytics queries require an analysis type.  This type will dictate how the data is compiled in the response.

 * **count**: Count the total records.
 * **sum**: Add up all values for a property.
 * **maximum**: Get the maximum value for a property.
 * **count_unique**: Count the total number of unique property values.
 * **median**: Calculate the median value for a property.

Most analysis types are performed on a specific event property, so they require the `property` parameter to be specified. **count** does not require a `property` parameter.

### Event Collections

All events captured by Vanilla are grouped into one of the following categories.  The collection is specified by passing the `collection` parameter to the analytics query.

#### page

Page views are captured in the `page` collection.  Any time a guest or registered user loads up a page, it is captured and filed into this collection.

Valid types for the page collection are:

* **discussion_view**
* **page_view**

#### Note on properties

If you are unsure about which property to use, contact your CSM, as we have around 300 different
property to choose from.

Commonly used properties for the page collection are:

* **user.userID**: The ID of the user, if available.  If there is no current user, either because they aren't signed in or are a guest, this value will be `0`.
user.rank.rankID

#### point

Events involving actions affecting a user's points are stored in the `point` collection.  Both giving and removing points are recorded.

Valid types for the point collection are:

* **user_point_add**
* **user_point_remove**

Commonly used properties for the point collection are:

 * **point.given.points**: The total number of points granted or revoked in this event.

#### post

When a discussion or comment is made, it is tracked in the `post` collection.  All posts are contained in this collection: comments, discussions, questions, ideas.  There are no restrictions on the type of post.

Valid types for the post collection are:

 * **discussion_add**
 * **comment_add**

Commonly used properties for the post collection are:

 * **discussionType**: The type of discussion related to this post.
 * **commentMetric.time**: If the event was triggered by a comment, this property will be populated with the time, in seconds, between when the discussion and comment were added.
 * **commentMetric.firstComment**: Will be true if this event was triggered by a comment and it was the first comment on the discussion.

#### post_modify

If a post is modified, the action is captured in the `post_modify` collection.  Similar to "post", the type does not matter.  Two primary types of modification events are captured: edits and deletes.

Valid types for the post_modify collection are:

 * **discussion_edit**
 * **discussion_delete**
 * **comment_add**
 * **comment_delete**

#### qna

The `qna` collection contains events specifically related to the Q&A plug-in, such as answering a question.  Adding, editing or deleting a question would be recorded in the "post" collection.

Valid types for the qna collection are:

 * **answer_accepted**

#### reaction

When a user submits a reaction to a post, it is captured in `reaction`.  This includes adding and removing reactions.

Valid types for the reaction collection are:

 * **reaction_add**
 * **reaction_delete**

Commonly used properties for the reaction collection are:

 * **reaction.reactionClass**: The class of the reaction.  This is typically "Positive" or "Negative".
 * **reaction.reactionType**: The specific type of the reaction. (Ex. Like, Up, Down, Agree, etc)
 * **reaction.recordType**: The type of post this reaction was performed on.  This is typically "discussion" or "comment".

#### registration

Successful sign-ups on the forum are recorded in the `registration` collection.

Valid types for the registration collection are:

 * **registration_success**

#### session

Session events are captured in the `session` collection.  These events typically include when a user initiates sign-in, starting their session, and when they sign-out, ending their session.

Valid types for the session collection are:

 * **session_start**
 * **session_end**

### Filters

Data queried from analytics can be filtered by collection and event properties.  The most common type of filtering would be based on the `type` property.  For example, if you wanted to see new discussions, you'd query the `post` collection and set a filter on the `type` property being equal to "discussion_add".  The available types for the various collections are documented in their individual sections.  In addition to `type`, some additional commonly-used filtering properties are included in those sections, if available.

Each element in the `Filters` array should be an object with two properties: `prop` and `val`.  An optional property, `op`, can be specified.  There are several comparison operators to choose from:

 * **eq**: Equal
 * **ne**: Not equal
 * **gt**: Greater than
 * **gte**: Greater than or equal to
 * **lt**: Less than
 * **lte**: Less than or equal to
 * **in**: Verify a property's value is in an array

For example, when querying the post collection, you could apply a set of filters that only queried the first answers to a question with the following:

```json
{
    "filters": [
        {
            "prop": "type",
            "op": "eq",
            "val": "comment_add"
        },
        {
            "prop": "discussionType",
            "op": "eq",
            "val": "Question"
        },
        {
            "prop": "commentMetric.firstComment",
            "op": "eq",
            "val": true
        }
    ]
}
```

### Interval

An optional `interval` parameter may be specified in an analytics query.  If a valid `interval` is specified, the results are broken down into the specified increments over the timeframe.

The valid values for interval are:

 * **hourly**
 * **daily**
 * **weekly**
 * **monthly**

### Output

Depending on whether or not an `interval` parameter was specified, the result may be in two different formats.

Without an `interval` parameter, a single value is returned: `result`.

```json
{"result": 1370}
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
