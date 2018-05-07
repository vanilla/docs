---
title: Pull Requests
tags:
- Developers
- Contributing
category: developer
menu:
  developer:
    parent: contributing
aliases:
- /developers/contributing/pull-requests
---
## Using pull requests to contribute code

We love pull requests! They're the core of our workflow.

All code is added to Vanilla via pull requests (PRs). A pull request is simply a request to merge code from a particular branch into another (usually a `feature/significative-name` or `fix/significative-name` or `refactor/significative-name` branch into `master`). GitHub's pull request feature tracks discussion, labels, assignments, and changes over time to a pull request. 

### Creating a pull request

1. Branch from `master` and checkout that branch.
2. Make your change & commit it.
3. Use GitHub to open a pull request against master.

### Writing a great pull request

Pull request titles (and commit messages) should be in the present imperative tense. This means they should read like a command. Examples: 

* "Fix issue in the dispatcher where..."
* "Improve our handling of..."
* "Always check for a negative value in..."

A list of pull request titles should read like a changelog. Each is its own concise summary of what has changed.

In the description, include additional rationale for your change. Bullet point lists are a great way to summarize details about your changes.

Never try to address multiple, unrelated issues in a single pull request.

### Pull request checklist

* Have you signed the [contributors' agreement](https://open.vanillaforums.com/contributors)?
* Did you target the correct branch (usually `master`)?
* Is your title written like a concise release note?
* Does your description provide rationale for your change?
* Did you carefully follow our [coding standards](/developer/contributing/coding-standard)?

### Feedback on pull requests

It doesn't stop there! Here's what you can do for currently open pull requests you didn't write:

* Check their coding standards and comment on the line where mistakes were made. Is the code clean and well-crafted?
* Think about the broader context of the change. Is this a good idea?
* Test the change. Leave a comment on what scenarios you tested. This helps us get things merged faster.

Helping us keep the PR queue short means your PR can get in that much faster. We always appreciate extra sets of eyes on our code changes.
