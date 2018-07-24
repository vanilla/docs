---
title: Writing Secure Code
tags:
- Developers
- Contributing
- Security
- XSS
- CSRF
- templating
category: developer
menu:
  developer:
    parent: contributing
---

## Overview

While Vanilla has a [bug bounty program](https://hackerone.com/vanilla), which has been incredibly helpful in finding and patching numerous security issues, it is important to write code that is secure from the start. This is a working document that represents best practices for writing secure code in Vanilla.

## XSS (General)

One of the most common vulnerabilities reported is XSS (Cross Site Scripting). XSS is the injection of a malicious script into a trusted or benign site. This generally occurs when user inputs are not properly sanitized. 

User content may only be placed in the following positions and requires normal escaping for both:

```html
<div someAttribute='$HERE'>$OR_HERE</div>
```

There are a few exceptions to this.

- User content __MUST NEVER__ be inserted into the contents of a `<script>` tag.
- User content __MUST NEVER__ be inserted into the contents a javascript event handler attribute. This includes but is not limited to
    - `onclick`
    - `ontouch`
    - `onkeydown`
- User content __MUST NEVER__ be inserted into the contents of a `<style>` tag.
- User content __MUST NEVER__ be inserted into the contents of a `style` attribute.
- User content that is inserted into an `href` attribute requires additional escaping. See [Escaping links in JS](#escaping-links-in-js) and [Escaping links in PHP](#escaping-links-in-php) for more details.

## XSS (Javascript)

For Javascript normal escaping __SHOULD__ be provided by [React](https://reactjs.org/) which escapes all attributes and contents by default. Even small javascript components __SHOULD__ be written as a React component and mounted using `ReactDOM.render()` from the `react-dom` library. The overhead of mounting multiple components is negligable.

If React cannot be used for a particular view (and it likely can), the `escapeHTML()` function from `@dashboard/dom` should be used for escaping.

### Escaping links in JS

`href` attributes containing user input __MUST__ be escaped using the `sanitizeUrl()` method in `@dashboard/utility` __in addition__ to normal escaping.

### Additional rules

- The React property `dangerouslySetInnerHTML` __MUST NOT__ be used.
- If dealing directly with DOM `Element`'s `innerHTML` and `outerHTML` __MUST NOT__ be used.

## XSS (PHP)

Regular escaping of user content __SHOULD__ be done using the [htmlspecialchars() function](http://php.net/manual/en/function.htmlspecialchars.php).

### Escaping links in PHP

`href` attributes containg user input __MUST__ be escaped using `Vanilla\Formatting\FormatUtility::sanitizeUrl()` __in addition__ to normal escaping.

### Additional rules

- All HTML attributes __MUST__ have surrounding quotes.
- User content __MUST__ be escaped before being inserted into HTML content. This __SHOULD__ be done inside of the view and __NOT__ in the data layer. 
