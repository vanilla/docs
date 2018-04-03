# Vanilla Docs

[![Open Issues](http://img.shields.io/github/issues/vanilla/docs.svg?style=flat)](https://github.com/vanilla/docs/issues) [![Pull Requests](http://img.shields.io/github/issues-pr/vanilla/docs.svg?style=flat)](https://github.com/vanilla/docs/pulls)

## Contributing

If you find any problems in the docs or have a question, open an issue. Please submit edits & additions as __pull requests__ against `master`.

### Organization

All docs belong in the `content` folder, with further subdivisions based on the type of the document. *Picking the right location for your docs is important.*

The `content/help` folder is for all users of Vanilla Forums. Descriptions may include services and features specific to the vanillaforums.com cloud.

The `content/developer` folder is for all technical documentation. This is targetted at developers that are perhaps implementing their own code solutions. These docs may include descriptions of solutions that are not possible or disallowed on VanillaForums.com cloud. Clients of VanillaForums.com should consult support or their customer success manager for guidance.

The `content/api` folder is for API documentation and api-related information (such as Smart ID and how it works).

### Formatting

* Every doc file must end in `.md` and be formatted in Markdown.
* DO NOT put secondary filenames, such as <document>**.html**.md
* Use H2 (`##` in Markdown) for major sub-topics and H3 (`###`) for minor headings.
* Document H1 tags are automatically generated, so don't add your own.
* All images go within [`static/img`](static/img) and must be referenced absolutely (`/img/foo.png`).
* Images *may* be deeply nested for organizational purposes.
* Use descriptive image names that include their topic area and what they depict, and `hyphenate-the-names.png`.

### Writing

* Be brief but clear.
* Carefully consider organization.
* Cross-reference with links liberally.
* Break up long sentences and paragraphs.

### Porting docs

* If you're moving a doc from an old site to this one, use aliases. Aliases make Hugo redirect old content to the new location
* If the content is NEW, do not supply any aliases

### Structure

 * Consciously build menus using the front-matter


## Versioning

We've got a feature to add versioning to the docs. 

## Versioning the Page
In the "front matter" section, add the following:

~~~
versioning:
  added: 2.0
  deprecated: 2.1
  removed: 2.3
~~~

This will set the versioning info right under the page title. Only add the info you need. So for example, if a feature has been added and is not deprecated, you'd enter:

~~~
versioning:
  added: 2.0
~~~

## Versioning a section

If you do not wish to version the entire page, you can insert a shortcode anywhere in your markdown file to add versioning.

Here's an example:

~~~
{{% versioning added="2.0" deprecated="2.1" removed="2.3" %}}
~~~

Only add the info you need. So for example, if a feature has been added and is not deprecated, you'd enter:

~~~
{{% versioning added="2.0" %}}
~~~


## Technical Setup

These documents are built using the [Hugo](https://gohugo.io) static site generator. The content is formatted in Markdown and the templates use the [Go html/template](http://gohugo.io/templates/go-templates/) library. The generator supports both partials and shortcodes (partials that can be used in the content too).

__This repository uses Grunt to automate the build and editing processes__. Grunt and its various plugins and dependencies (including Hugo itself) are installed using [Yarn](https://yarnpkg.com/).

The docs themselves are published to GitHub Pages and live at [http://docs.vanillaforums.com](http://docs.vanillaforums.com).

### How to get started

#### Installing the project locally

1. Make sure you have `yarn` installed:
	* OS X: `$ brew install yarn`
	* Windows: ???
2. Fork or clone the repository (depending on whether you have commit access)
3. Install Hugo `v0.29`. The site does not currently function properly with newer versions of hugo.

The download can be found on hugo's release page. Unzip the archive for your platform copy it into a directory on your path. For Mac users the download should be `hugo_0.29_macOS-64bit.tar.gz` and a common folder on the path is `/usr/local/bin`.

https://github.com/gohugoio/hugo/releases?after=v0.30

4. From the root of the folder, use `yarn` to install the project dependancies: `$ yarn install`

That should be it, you now have a working copy of the docs.

#### Live Editing 

The docs can be viewed live while you edit them, which makes writing new content really easy. 

Simply enable editing mode: `$ yarn run edit`
You should now have a locally accessible webserver providing the docs site at `http://127.0.0.1:1313`. This site should be livereload-enabled, so changes you make locally should trigger a page reload on the site. Now create some docs!

#### Submitting your changes

When you're done writing docs or making edits, just create a pull-request against `master` and wait for your content to be merged and published!

#### Publishing (for maintainers)

Publishing is easy. Just commit your changes to master and wait for them to be automatically deployed to staging. Commit changes to deploy for them to be deployed to production. **DO NOT MANUALLY DEPLOY THIS REPOSITORY**. You'll break it.

#### Troubleshooting

"-bash: grunt: command not found" error? Try `npm install -g grunt-cli`.

"Warning: Error: not found: hugo Use --force to continue." error? Try `brew install hugo`.

"Warning: Task "sass" not found. Use --force to continue." error? Try `npm install -g node-sass`. Still a problem or already had that? Maybe try `npm rebuild node-sass`.


### Regression testing

Making larges refactors to the docs? When you're done run `yarn links:test` to test that every previously accessible link is still accessible. If you add new pages run `yarn links:generate` afterwards. This will update the JSON file called `current-links.json`. Links should **NEVER** be removed from this file and it should not be edited manually.

Missing `/tags/` links are a result of tags being removed.

#### Troubleshooting

In the event that the link-check scripts fails it may fail to shut down the docs development server. This will leave the server running and bound on port 1313. Attempting to run the docs server again will fail with an `EADDRESS` error. To kill this process you may run:

```bash
lsof -t -i tcp:1313 | xargs kill
```

This will kill all process running on the 1313 port.
