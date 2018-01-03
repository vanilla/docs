---
title: Ideation
category: help
menu:
  help:
    parent: addons
    identifier: ideation
aliases:
- /ideation
- /help/ideation
---
{{% cloudfeature %}}

Ideation gives forum users the ability to upvote and optionally downvote discussions.

### Ideas Overview

An idea is a discussion that can be voted on by forum users. It has a status that lets moderators easily communicate decisions made on the idea, and determines whether it's open or closed for voting. You can modify, add or delete available statuses from the dashboard. Ideas can only be created in idea-specific categories an idea-specific categories can only contain ideas.

### Enabling Ideation

To enable Ideation you'll need to:

1. Enable the Ideation addon from the Addons page in the dashboard.
2. Make a new category and check the 'Idea Category' box on the category settings page. You can choose to enable downvotes here as well.

Users can add ideas to be voted on in this new category.

Note that once an idea category is created, it can never be converted to a regular category and regular categories can never be converted to idea categories.

### Idea Statuses

Idea statuses communicate to users what state the idea is in, and whether the idea is open to voting or not. The Ideation plugin ships with these default statuses: Active, Already Offered, Declined, Completed, In Progress, and In Review. The available statuses are completely configurable and can be changed to suit your community's needs.

#### Adding and Editing Available Idea Statuses

To edit the available idea statuses, navigate to the 'Idea Statuses' page from the link in the dashboard panel. From there, you can add, remove and edit statuses. You can also configure the default status for new ideas that are created and specify whether a status is open or closed for voting. Users need to have the Garden.Settings.Manage permission in order to configure the available statuses.

### Changing An Idea's Status

You can change the status of an idea by navigating to the idea in the forum and clicking on its options dropdown menu. You'll find an 'Idea Status' option there. From there, you can select a new status for the idea. You can also add notes to explain the status change. For example, if an idea is marked as a duplicate of another, you may want to link to the idea it is a duplicate of. Users need to have the Vanilla.Moderation.Manage permission in order to change the status on an idea.

Changing an idea's status will send out notifications to the idea author and the idea's voters if they have enabled these notifications for their accounts.


Additional Resources:

 * [Video: How to Use Ideation](https://www.youtube.com/watch?v=o5YW4pTafoM)
