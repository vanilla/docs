---
title: Code Repository
tags:
- Cloud
- Repository
category: help
menu:
  help:
    parent: cloud
    identifier: cloud-repository
aliases:
- /cloud/repository
---

{{% cloudfeature %}}

## Shared Private Repository

Our [VIP plans](https://vanillaforums.com/plans) come with the option to open a private code repository that you share with the Vanilla Forums team on GitHub. This allows your developers to view and contribute to your custom features and theme.

### Setup

Your customer success manager will provide you with this repository. Please allow the Vanilla team to organize its structure appropriately and name files.

We use `master` branch for production deploys. Anything on that branch should be ready for immediate release. The `stage` branch can be periodically deployed to your staging site for testing. Prior to deployments, we merge `stage` into `master`. New features can go on their own `feature/x` branches or on a `develop` branch for integration testing prior to staging.

### Accounts

You will need a GitHub account for each developer that requires access. We strongly suggest limiting the number of developers on your team with direct access to the repository for workflow and communication clarity.

### Local testing

If you'd like to use a local install of Vanilla for testing, please use the `master` branch from our [main repository](https://github.com/vanilla/vanilla). Please follow the installation instruction in the README.

Unfortunately, we are not able to provide cloud-exclusive addons for local installation. However, some additional addons may be found in the [addons repository](https://github.com/vanilla/addons).
