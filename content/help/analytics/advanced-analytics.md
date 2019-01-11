---
title: Advanced Analytics
tags: 
- analytics
category: help
menu:
  help:
    parent: analytics
    weight: 81
aliases:
- /analytics/advanced-analytics
---

## Advanced Analytics Overview

Available on certain plans as an add-on, Advanced Analytics give you further insights into your community. 

![Advanced Analytics](/img/help/analytics/analytics-advanced.png)

* __Metrics:__
    Metrics a single number that quantify something for the selected time range.
* __Leaderboards:__
    Leaderboards are tables showing the ranking of specific items for the selected time range.
    The "previous" rankings are calculated using the rankings of the previous time range.
* __Graphs:__
    Graphs can come in multiple forms!
    Line, Area, Pie chart and Bar graphs use the selected time range to group the fetched information.
    Pie charts represent multiple values for the whole selected time range.

## Analytics Sections

### Engagement

#### Metrics
  * __Posts Positivity Rate:__ Number of posts having a positive reaction divided by the number of posts having a negative reaction.
  * __Average Time to First Comment:__ Average amount of time it took for discussions to have their first comment.

#### Leaderboards
  * __Members by Accumulated Reputation:__ Members ordered by the highest sum of reputation point accumulated.
  * __Discussions with Most Comments:__  Discussions ordered by highest number of comments made in it.
  * __Discussions with Most Positive Reactions:__  Discussions ordered by highest sum of positive reactions given to them.
  * __Discussions with Most Negative Reactions:__  Discussions ordered by highest sum of negative reactions given to them. 
  *This leaderboard will only be displayed if negative reactions are in use.*
  
#### Graphs
  * __Participation Rate:__ Number of distinct members that viewed a page on the forum vs the number of visits by distinct users.
  * __Sentiment Ratio:__ Number of posts having a positive reaction vs the number of posts having a bad reaction.
  * __Visits per Active User:__ Number of visits divided by the number of [active users](#active-user). 
  * __Average Posts per Active User:__ Average number of created posts grouped by [active users](#active-user).
  * __Average Comments per Discussion:__ Average number of created comments grouped by discussions.
  * __Average Posts per Active Users:__ Number of posts divided by the number of [active users](#active-user). 

### Traffic 

#### Metrics
  * __Page views:__ Number of pages viewed.
  * __Active Users:__ Number of [active users](#active-user). 
  * __Visits:__ Number of visits. *Including guests.*

#### Leaderboards
  * __Discussions with Most Views:__ Discussions ordered by the highest number of accumulated views.

#### Graphs
  * __Active Users:__ Number of users that logged in to the community, including the number of users who were already logged in during the set timeframe.
  * __Visits:__ Number of visits. *Including guests.*
  * __Unique Visits by Role Type:__ Number of visits, from registered users, grouped by [role types](#role-type).
  * __Page Views:__ Number of total page views.
  * __New Users:__ Number of all new registrants to the community.

### Posting 

#### Metrics
  * __Discussions:__ Number of discussions created.
  * __Comments:__ Number of comments created.
  * __Contributors:__ Number of distinct members who created a post.

#### Leaderboards
  * __Users with Most Posts:__ Members ordered by the highest number of post created.
  * __Users with Most Discussions:__ Members ordered by the highest number of discussions created.

#### Graphs
  * __Discussions__: Number of discussions created.
  * __Comments__: Number of comments created.
  * __Posts__: Number of posts created.
  * __Posts by Type__: Number of created posts grouped by [posts type](#post-type).
  * __Posts by Category__: Number of created posts grouped by categories.
  * __Posts by Role Type__: Number of created posts grouped by [role types](#role-type).
  * __Contributors__: Number of distinct members having created a post.
  * __Contributors by Category__: Number of distinct members, having created a post, grouped by categories.
  * __Contributors by Role Type__: Number of distinct members, having created a post, grouped by [role types](#role-type). 

### Q&A

*When multiple lines are displayed, the series are stacked, i.e. the values on the Y axis are a cumulative total for each point.*

#### Metrics
  * __Questions Asked:__ Number of questions asked.
  * __Questions Answered:__ Number of questions answered. *Questions created outside of the time range are counted.*
  * __Answers Accepted:__ Number of answers accepted. *An answer can be accepted by either the creator of the question or a moderator/administrator.*
  * __Average Time to Answer:__ Average amount of time it took for questions to have their first answer. *Questions that have no answers are not counted.*
  * __Average Time to Accept:__ Average amount of time it took for questions to have an accepted answer. *Questions without an accepted answer are not counted.*

#### Leaderboards
  * __Questions with Most Views:__ Questions ordered by the highest number of accumulated views.
  * __Users with Most Answers:__ Members ordered by the highest number of answers created.
  * __Users with Most Accepted Answers:__ Members ordered by the highest number of answers created and then accepted as the best answer.

#### Graphs
  * __Questions Asked:__ Number of questions created.
  * __Questions Answered:__ Number of questions having at least one answer.
  * __Accepted Answers__: Number of answers accepted. 

## Analytics Lexicon

* __<a id="active-user">Active User</a>:__ User that are logged in.
* __<a id="post-type">Post Type</a>:__ The post types are discussion and comments.
* __<a id="post-type">Role Type</a>:__ There are 4 existing [role types](#role-type) and they match the highest permission level that a user has.
  * __admin:__ Administrator -> Garden.Settings.Manage
  * __cm:__ Community Manager -> Garden.Community.Manage
  * __mod:__ Moderator -> Garden.Moderation.Manage
  * __member:__ Everything else
