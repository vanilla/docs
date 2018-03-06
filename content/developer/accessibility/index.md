---
title: Accessibility - Implementation
---

<aside class="note">Theming can potentially break accessibility features build into Vanilla. Modify at your own risk.</aside>

This is an implementation guide for accessibility. For details on what it is and who's it for, see our [intro](/help/accessibility).

Note that much of the documentation you'll find online is for WCAG 2.0, but 2.1 is about to become an official recommendation in June 2018. Nothing was removed from 2.0, only some additional details were added in 2.1.

## Principles

Here's an overview of the WCAG 2.1 spec. For details and success criteria, refer to the [official documentation](https://www.w3.org/TR/WCAG21).

1. Perceivable - Information and user interface components must be presentable to users in ways they can perceive.

    - 1.1 Text Alternatives - Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language
    - 1.2 Time Based Media (example: video or audio) - Provide alternatives for time-based media
    - 1.3 Adaptable - Create content that can be presented in different ways (for example simpler layout) without losing information or structure. Responsiveness is a good example
    - 1.4 Distinguishable - Make it easier for users to see and hear content including separating foreground from background
    
2. Operable - User interface components and navigation must be operable
    - 2.1 Keyboard Accessible - Everything needs to be doable by keyboard
    - 2.2 Enough Time - Provide users enough time to read and use content (only applies when time limits are concerned. Example: you've got a limited time to finish a task. This also applies to animated controls such as carousels)
    - 2.3 Seizures - Do not design content in a way that is known to cause seizures
    - 2.4 Navigable - Provide ways to help users navigate, find content, and determine where they are
   
3. Understandable - Information and the operation of user interface must be understandable
    - 3.1 Readable - Make text content readable and understandable (keep language simple)
    - 3.2 Predictable - Make Web pages appear and operate in predictable ways (Good UX is good accessibility)
    - 3.3 Input Assistance - Help users avoid and correct mistakes
    
4. Robust
    - 4.1 Compatible - Content must be robust enough that it can be interpreted by a wide variety of user agents, including assertive technologies
    
Note that there are multiple levels of conformance. Most likely you'll be aiming for AA. A is really basic and AAA is very difficult to achieve. Even the W3C admits it's probably not realistic

## Levels

When reading through the requirements for WCAG tests, you might see up to 3 different levels of conformance:  

| level | Meaning |
|---|---|
| A | Low level |
| AA | Medium level (Passes A and AA tests) |
| AAA | High Level (Passes A, AA and AAA tests. Rarely if ever achieved, very high standards.) |


## Accessible Rich Internet Applications (Aria)

Set of attributes that make web applications more accessible. We often use visual styles to convey meaning. For example a "pressed" button with a "pressed" class to the button has no semantic meaning. The screen reader does not analyze the names of the classes used. Using aria, we can add `aria-pressed="true"` or `aria-pressed="false"` to tell the screen reader the current state is.  

For more on aria:

- [Using Aria](https://www.w3.org/TR/using-aria/) - Official Documentation on Aria
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) - Practical Guide to Aria with examples

Many of aria attributes start with "aria", but there are also "roles" to consider. Roles will tell the browser what role HTML elements have. Note that a large portion of roles are redundant if you use the proper HTML5 element. You could, for example add `role="navigation"` on your menu, but you could alternatively simply wrap it in a `<nav/>` element. Adding a role on an element will **overwrite** any default roles the element has. This can be useful if you've got legacy HTML and you cannot change the elements. Adding roles will not visually change the element, but give the screen reader the information it needs to function. However, if you give `role="button"` to a link, to the screen readers eyes it **is** a button.

If you're using an HTML element for purely visual purposes, consider adding `role="presentation"` on it. Most people don't use tables for layout anymore, but that's a good example of an element not used for it's original purpose. 

For more on roles:

- [The Roles Model](https://www.w3.org/WAI/PF/aria-1.1/roles) - Documentation on available roles
- [The Roles Model Schematic](https://www.w3.org/WAI/PF/aria-1.1/rdf_model.svg) - Schematic of available roles


## Labelling

Make sure everything's labelled. Often times in modern web design, we tend to use icons without any text. We also need to think of a screen reader user is listening to one thing at a time and does not easily have context for things around. If they're having the items in a menu read to them, they can't just glance over to get the whole picture. They're hearing those items one by one. Proper labels will help things stay clear, even if they're out of context.

## Images

For images, use `alt` attribute. For SVGs, use the `<title>` tag. For any UI without a clear label, you can use `aria-label` to write the label, or use `aria-labelledby` with the ID of another element that contains the label.

  
## Text

There are different color contrast requirements for "large" or "normal" text. 

- "Large text" is defined as either: >=18px bold or >=24px regular.
- "Normal text" is simply not large

Non-serif fonts are generally more accessible.

## Colors

The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

- Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

- Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.

- Logotypes: Text that is part of a logo or brand name has no contrast requirement.

For color contrast tools, see our [tools section](#tools)


## Tab flow

You need to able to use the whole site only using your keyboard. That means you should be able to tab through everything (shift + tab to tab up). Avoid breaking the natural flow of the tab index. You can add any elements that are not naturally tabbable (like links in certain browsers) by adding `tabindex="0"` without breaking the flow. It's almost always a bad idea to use a tabindex > 0. `tabindex="-1"` is useful when you want to give focus to an area that might not have a control, such as the title of a modal. After tabbing off it, it won't be in the tab flow. You can target a -1 tabindex with an anchor or with Javascript. See [Skip Links](#skip-links) below.

Do not put `tabindex="0"` on links in a regular paragraph. It is important, however, in side UI like menus.


## Landmarks

These are sections of a standard webpage. You may either use the default HTML5 element, or you may set a role on an element:


| HTML5 Element | Equivalent Landmark Role |
|---|---|
| aside | complementary |
| header | banner (if and only if in body tag) |
| main | main |
| nav | navigation |
| section | region (but it also needs either a title, an `aria-labelledby` or `aria-label` attribute) |
| form | form (but it also needs either a title, an `aria-labelledby` or `aria-label` attribute) |
| footer | contentinfo (if and only if in body tag) |
| *no default* | search |

Note that currently `<article/>` and `<section/>` are not used by screen readers. It's still good practice to use them where appropriate. 

## Practical Guide

It's not always easy to find good examples online of accessible widgets. Here's a non exhaustive list of features we need to make widgets accessible.

### HTML

Good, semantic HTML is good for accessibility. The new tags that were added in HTML5 convey meaning to screen readers. Having a good hierarchy of headings will also help the user find the information quickly. 

#### Button or link?

If clicking on this element does something on the page, it's a button. If it goes somewhere, it's a link. 


#### Lang

Besides using `lang="en"` on your `<html/>` tag, you should also use it on links to other languages, or any other foreign language elements. Example, if you've got a multilingual site: add it to the links that switch languages.

### Error messages

- `aria-errormessage` contains ID of element with Error message
- If the message is added after the user has clicked submit or on blur, use `aria-live="assertive"`

Don't overuse `aria-live="assertive"` as it will stop reading anything being read and start reading the new message immediately, but in the case of an important error, it's appropriate.

### Hiding things from the screen reader user

If any information is really irrelevant to a non sighted user, such as an icon that is next to a label that clearly defines that section, you may want to hide it. You can do so by using `aira-hidden="true"`.

### Hiding things from a sighted user

If you want to add additional details to a screen reader user and it's not possible to do so with `aria-label` or `aria-labelledby`, there's a hack that's become a convention that you can use. The traditional name for this class is `sr-only` (screen reader only). 

Here's the class:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
```

Modern screen readers are good at emulating what CSS does. In other words, if you `display: none;` something, it will also be hidden to the screen reader. The above CSS make the element invisible, but it does so by cropping it in a 1px x 1px container. This is a hack, but it's become a convention. Maybe one day we'll have a proper CSS property for this behavior, but we currently don't.

Examples:
 
- Add a paragraph of instructions for screen readers before a complex component or widget. Favor `aria-label` and `aria-labelledby` when applicable.
- Inside a link that says "Read More" add some context with a `<span class="sr-only"/>"` inside so the screen reader will read: "Read More About Article X"

### Focus states

All elements that can have focus need to have a visual indication they are. Default browser styles already have this, but it's pretty frequent for designers to ask the outline be removed. If you are to remove the default style, just keep in mind that you will need to add it to **EVERY** focussable element. That's a lot more work than keeping the default.

If you put focus on an element it needs to come into view. That means if you've got a carousel and the user tabs away from the visible slides, the slides need to come over. Alternatively, you could set a `tabindex="-1"` on non visible slides to avoid this problem.

### Good Mobile Menu (aka. Hamburger Menu)

- Use a real button for the hamburger menu
- For "drawer" or "accordion" style submenus (a.k.a. expand and collapse), use a button!
- Use `aria-expanded`
- Use `aria-haspopup`
- You can tab into it after clicking the menu button
- Close menu on "blur" and on "esc"
- Maintain normal flow, i.e. you can tab from the menu button into the contents of the menu

### Responsive design

Responsive design is now a requirement for accessibility. 

#### Click targets

Don't forget fingers are much fatter than cursors. Make sure click targets are big enough, especially on tablet or mobile. The minimum size of buttons will vary depending on your source, but a good rule of thumb is to keep them around 44px minimum. [Source](https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/)

### Links

Note that by default, not every browser allows tabbing to a link. If a link is part of normal text, that's not an issue, but if it's a part of navigation, or important UI, make sure to put a `tabindex="0"` on it. 

Links should make sense out of context. Screen readers can pull up in a list all links in the page. If you've got 40 links on your page that say: "Read More", it's difficult for the user to know what the link is about. See out section on the [`.sr-only`](#hiding-things-from-a-sighted-user) class for a solution around this problem.

#### Skip Links

Skip links allow users to "skip" over sections and get to the content. The most common type of skip link is to jump over the header. If you're navigating a website using a keyboard,  you probably don't want to be tabbing through the whole header and menu every page load. A common practice is to add what's called a "skip link", which is just an anchor that jumps to the main content of the page.

Example:
The very first element of your menu can be an absolutely positioned link that is hidden with [`.sr-only`](#hiding-things-from-a-sighted-user). On focus, you display it (remove styles from `sr-only`) that says something like: "Skip to content" that links to the `<main/>` section with a `tabindex="-1"` on it.

This technique is not limited to menus. You could add one before a WYSIWYG's toolbar to skip to the `textarea`. 

### Tables

- Use `th` for headers 
- add `scope="col"` or `scope="row"` to define "direction" of heading
- Add `<caption/>` inside `<table/>` to give an overview, ideally of summary of the contents. A screen reader user can't glace over the table to get an overview.

### Popups/Modals

- `aria-modal="true"`
- `role="dialogue"`
- with either `aria-label` or `aria-labelledby`
- Escape closes popup
- Set `aria-hidden="true"` on the rest of the page while in the popup
- tabbing up and down the popup needs to loop you back into the popup. In other words, you shouldn't be able to tab your way out of the popup.
- When the modal loads, it's got focus on the title (`tabindex="-1"`)
- When exiting the modal, the focus goes back to what it was before the modal was open
- If it's a confirmation dialogue, always put focus on least destructive option by default

### Pagination

- `aria-label` or `aria-labelledby` on container, identifying the contents as pagination
- `aria-label` or `aria-labelledby` on "next" and "prev"
- `aria-current="page"` on selected page
- use links for the "buttons"
- wrap in `<nav/>` or `role="navigation"`

### Infinite Scrolling

This type of feature is difficult to find information on, since there isn't a consensus on how to handle it yet. However, here are some points to consider:

- Add a description of how it works beforehand. This can be hidden from the sighted user using the [`.sr-only`](#hiding-things-from-a-sighted-user) class.
- Should have a way to turn off the infinite scroll.
- Notify user if new data loads in (politely with a short message using `aria-live="polite"`).
- Be sure to check swipe gestures with iOS VoiceOver
- Good examples of accessible infinite scroll is Twitter.

Note that the footer needs to be accessible. With an infinite scroll and a footer, it may be difficult or impossible to reach. Many companies with infinite scrolling (like Facebook/Twitter/Linkedin) do not have footers.

## Tools

[Colour contrast analyser](https://www.paciellogroup.com/resources/contrastanalyser/) - Useful for calculating contrast ratio of colors

[aXe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) - Automated tool for analyzing the accessibility of your page

[Wave plugin](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) - Automated tool for analyzing the accessibility of your page

[High Contrast](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph) - Change the color of websites to make it easier to read

## Contributing

Contributing is quite easy. The W3C is very open and they're on GitHub!

- [WCAG 2.1](https://github.com/w3c/wcag21)
- [Aria](https://github.com/w3c/aria)

## Other Resouces:

- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.1 Spec](https://www.w3.org/TR/WCAG21/) - Official Source
- [WebAIM](https://webaim.org/) - Good resource for accessibility
- [Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/) - Code examples, limited but good information 
- [The International Association of Accessibility Professionals (IAAP)](www.accessibilityassociation.org) - Official organization, they offer training and certification

