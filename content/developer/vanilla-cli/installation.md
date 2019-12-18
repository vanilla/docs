---
title: Installation
tags:
- Developers
- CLI
- Build
- Javascript
- Import
- Bundle
- Webpack
- ES Module
category: developer
menu:
  developer:
    parent: cli
---

## Prerequisites
The CLI requires PHP `7.0` or greater installed to run. It also requires [composer](https://getcomposer.org/).

Some commands, currently `build` and `lint`, require a minimum Node.js version of `8.3.0` and the package manager `yarn` to be installed.

### Installing Node

#### For OS X
```bash
brew install node
npm install -g yarn
```

#### For Debian/Ubuntu Linux
```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install nodejs yarn
```

## Setup

### Installation with Composer

1. Run `composer global require 'vanilla/vanilla-cli'`.
2. If your composer bin directory is on your path, you can now run the tool with `vanilla`. If you are having difficulty locating your composer bin directory it is likely located at `~/.composer/vendor/bin`

### Manual Installation

1. Clone this repo to the installation directory 
```bash
cd INSTALLATION_FOLDER
git clone git@github.com:vanilla/vanilla-cli.git
```
2. Install the PHP dependancies in the directory where you clone this project.
```bash
cd vanilla-cli
composer install
```
3. Run the tool `./bin/vanilla --help`
4. (Optional) Symlink the tool somewhere on your path. `ln -s ./bin/vanilla SOME_BIN_DIRECTORY`
