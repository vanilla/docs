---
title: Feature Flags
tags:
- Developers
- Framework
category: developer
menu:
  developer:
    parent: framework
---

Feature flags are a way to forcibly wall off functionality behind a configuration setting in Vanilla. This is especially helpful for features that can be fully enabled or disabled or for walling off parts of an addon that are maybe not yet ready for prime time.

## The Configuration Setting

Feature flags are ultimately determined by configuration values. By default, all feature flags are off. If you wish to enable a feature flag, you'll need to use a specially-formatted config key to do so. The format is as follows:

```
Feature.{FeatureName}.Enabled
```

For example, to enable a feature using the "ExampleFeature" slug, you'd need to add the following to your site's configuration file:

```php
$Configuration["Feature"]["ExampleFeature"]["Enabled"] = true;
```

The slugs used by feature flags are arbitrary and up to the developer. There is currently no collection of know feature flags. They are a developer feature and require developer knowledge to manage.

## The Helper Class

Vanilla has a `Vanilla\FeatureFlagHelper` class to handle almost all of the work associated with feature flags. It does this with two public static methods:

1. `featureEnabled` will return a boolean value, based on the configuration value associated with a feature flag. If it's enabled, this method will return a boolean true. Otherwise, this method will return a boolean false. This is useful when subtly avoiding referencing a disabled feature, such as building a navigation menu.
1. `ensureFeature` is similar to `featureEnabled`, but will throw a `Vanilla\Exception\FeatureNotEnabledException` exception if the feature is not enabled. This is best used when you want to wholesale block access to any part of a disabled feature. Invoking this method for a disabled feature will likely terminate subsequent processing of the request. It's best used in feature-specific controllers.
