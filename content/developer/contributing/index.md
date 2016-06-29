---
title: Contributing
layout: docs
categories: ["Developers","Contributing"]
---

# How to Contribute

### General

1. Welcome folks to the [community](http://vanillaforums.org/discussions) and be awesome!
1. Answer questions.
1. Report [issues](https://github.com/vanillaforums/vanilla) like a pro (see below).
1. [Triage](#triaging-issues) issues already reported!
1. Test [pre-releases](http://vanillaforums.org/categories/blog).
1. Contribute [docs](https://github.com/vanillaforums/VanillaDocs).
1. Help [translate Vanilla](/developers/locales).
1. Evaluate community addons & offer feedback.
1. Do accessibility testing! Unplug your mouse, turn on a screen reader, and see what it's like to use Vanilla.

### Developers

1. Contribute code via [pull requests](/developers/contributing/pull-requests) (requires [Contributor Agreement](http://vanillaforums.org/contributors))
1. Contribute addons & themes to the [Official Directory](http://vanillaforums.org/addons).
1. Audit code for security & disclose issues [responsibly](/developers).

Sections of our contribution guidelines are adapted or copied from [Swift](https://swift.org/contributing/) because they are awesome.

## Reporting issues like a pro

First, check for duplicates by searching on GitHub. All clear? Then make sure you cover three points:

*  A concise description of the problem. If the issue is a fatal error, include a debug trace. Otherwise, describe the behavior you were expecting to see, along with the behavior you actually observed.

* A reproducible test case. If you need to include a lot of code to do this, make a gist on GitHub and link it.

* Include the precise Vanilla version number and any relevant system information (ex: OS, PHP version & settings, MySQL settings).

## Triaging issues

There are a number of things you can do to help triage issues in the issue tracker.

* Reproduce it! For a bug to be actionable, it needs to be reproducible. If you can’t reproduce the bug, try to figure out why. Get in touch with the submitter if you need more information.

* Reduce bugs. Once a bug can be reproduced, reduce it to the smallest amount of code possible. Reasoning about a sample that reproduces a bug in just a few lines of Swift code is easier than reasoning about a longer sample.

* Eliminate duplicates. If two bug reports refer to the same underlying problem, mark the newer one as a duplicate of the older one. Doing so allows others to work more effectively.
