---
title: Accessibility
---

Accessibility (aka **a11y**) is about making a website usable for as many people as possible. For the purpose of this document, we're focusing on web accessibility.  

## Who's it for?

This includes, but is not exclusive to people with:

- Vision Impairments (from partial to full blindness, color blindness, etc)
- Physical disabilities (lack of physical control, tremors, spasms, etc)
- Cognitive and Sensory disabilities (Note that this is the hardest group to help, since it's difficult to find objective standards)
- Perception disabilities (visual: differences between shapes, or auditory: different sounds)
- Memory and Attention
- Sequencing (Difficulty following steps)
- Dyslexia

### Screen Readers

A screen reader is a computer program that assists with reading text. However, modern screen readers also offer additional features for navigation, controlling the cursor, information about what actions can be taken on an element, etc. Screen readers are not only used by blind users. 

You might also see the term "Assertive Technology" or "AT". That is a broader umbrella term for any equipment, software or product used to increase, maintain or improve functional capabilities of a person with disabilities. 

#### Desktop

[JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS) is by far the most popular screen reader. It is, however, quite expensive and there is a popular free alternative: [NVDA](https://www.nvaccess.org/). [VoiceOver](https://www.apple.com/ca/accessibility/mac/vision/) comes packaged with Mac computers, but isn't as well maintained. Any other screen reader for desktop has very small market share. [Screen Reader User Survey Data.](https://webaim.org/projects/screenreadersurvey7/)

#### Mobile

Despite the fact that [VoiceOver](https://www.apple.com/ca/accessibility/mac/vision/) isn't very good on desktop, they really pioneered accessibility on mobile phones. The vast majority of screen reader users on mobile have iPhones [Screen Reader User Survey Data.](https://webaim.org/projects/screenreadersurvey7/)

## Navigation

How does a user using a screen reader use a website? Many screen reader users do not use a mouse. Part of making your site accessible is to allow keyboard access for everything on the site. However, tabbing through everything on a page is quite long, so there are some alternate ways to navigate content.

Users can call up a dialog that will give them a list of different types of element on the page. Once they've selected the item they want in these lists, they'll jump to that section and either read and/or listen to that section. The easiest example to grasp is think of taking all the heading of the page in one list. You'll essentially have a table of contents. You'd read the titles, find the section you want to read and jump to that section in the page. 

Here's a non exhaustive lists, seeing as these will vary from one screen reader to the next:

- Headings
- Links
- Landmarks (HTML5 tags for labelling sections: header, main, aside, footer, search, navigation)
- Tables
- Lists
- Buttons
- Forms
- Text Fields
- Images

[Official WCAG documentation](https://www.w3.org/TR/WCAG21).
