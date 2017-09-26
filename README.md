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
3. From the root of the folder, use `yarn` to install the project: `$ yarn install`

That should be it, you now have a working copy of the docs.

#### Live Editing 

The docs can be viewed live while you edit them, which makes writing new content really easy. 

Simply enable editing mode: `$ yarn run edit`
You should now have a locally accessible webserver providing the docs site at `http://127.0.0.1:8081`. This site should be livereload-enabled, so changes you make locally should trigger a page reload on the site. Now create some docs!

#### Submitting your changes

When you're done writing docs or making edits, just create a pull-request against `master` and wait for your content to be merged and published!

#### Publishing (for maintainers)

Publishing is easy. Just build the site statically using `$ grunt build` and then push it to the `gh-pages` branch using `$ grunt push`. 

Note: **Having built the site using the live editor is NOT SUFFICIENT for a push**, and will likely break the deployment. Always deploy a freshly built site using `grunt build`.

#### Troubleshooting

"-bash: grunt: command not found" error? Try `npm install -g grunt-cli`.

"Warning: Error: not found: hugo Use --force to continue." error? Try `brew install hugo`.

"Warning: Task "sass" not found. Use --force to continue." error? Try `npm install node-sass`. Still a problem or already had that? Maybe try `npm rebuild node-sass`.

