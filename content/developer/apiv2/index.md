---
title: Writing APIs
tags:
- Developers
- Framework
- API
category: developer
menu:
  developer:
    identifier: framework-apiv2
aliases:
- /developers/framework/apiv2
---
## The Vanilla APIv2

Vanilla's APIv2 offers a powerful, yet simple way of creating RESTful API endpoints in your application. With version 2 of the API we consider Vanilla to be an "API first" framework where you write your API first and then think about the resulting HTML. This offers several benefits:

1. An API is easier to test, lending well to automated testing.
2. You can connect to an API from different clients and not just browser. This lends to the possibility of mobile clients or command-line automation.
3. An API often offers more application coverage beyond what just the user interface sees. For example, your user interface may not allow certain records to be deleted, but an API will have that endpoint if you eventually want it.

## Features

The API offers the following features for developers.

- Resource URL routing to API controllers. If you are familiar with RESTful APIs you'll be right at home with Vanilla's routing.
- You can specify separate methods for the different HTTP methods (GET, POST, DELETE, etc.) allowing you to concentrate on the task at hand.
- Controllers are dependency injected by the dispatcher. This allows controllers to be relatively simple where each specific controller declares only the dependencies it requires. In fact, the dispatcher doesn't depend on a specific controller base class, but we provide one with common utility functionality.
- Controller endpoints concern themselves with retrieving data and returning it like a PHP function. The dispatcher handles rendering. In this way an endpoint can be rendered to different formats without you having to worry about the details for every endpoint.
- Exceptions thrown from your methods are rendered correctly from the dispatcher. Some exceptions (such as not found or method not allowed) are intelligently determined by the dispatcher.
- Whitelists request data coming in using the **Schema** class. In this way you can be sure that a malicious user can't post extra information to attack your endpoint.
- The **Schema** object also supports automatic documentation of your endpoints (TODO).

## About This Guide

This section walks you through creating API controllers and writing endpoints. It doesn't go into great detail on individual method parameters though. There are a lot of options so we suggest looking at the classes mentioned in this guide to learn more information.
