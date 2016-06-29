---
title: Universal Comments
layout: docs
categories: ["Features","Comments"]
---

# Vanilla Comments

Vanilla comments allow any website with a unique content id to add a commenting system that can seamlessly integrate with their Vanilla community. Comments made on content on their website will create discussions in their community. Also any comment made on the forum discussion will be reflected back under the content.

## What are Universal Comments?

We made Comment integration easy with WordPress ([learn more about that here](/features/wordpress/using-comments/).), but we also wanted to make it possible to add comments to any site where you can identify unique content. Universal Comments a way to do that.

## How to use Universal Comments.

To know if you can use Vanilla Universal Comments, you need to know if your content has a unique id. What does that mean? In your URL or code, is there a way to identify the difference between two pages? For example in Magento you have a productid, in Concrete5 there is the PageId, in MODX it’s the Resource ID, and so on.

This identifier is how you can assign a comment box from Vanilla to a specific document on any platform. Essentially, if you have a way to identify unique content, you can use Vanilla Comments.

Once you've determined you have the necessary identifier, to get started with Vanilla Comments, head to your Vanilla Forums dashboard, and look for “Blog Comments” under the “Forum” heading. You will see the following:

![Universal Comments](/features/comments/images/Blog_Comments-settings.png)

You want to make sure you have enabled embedding. The next step is to select the Universal Code setting tab:

![Universal Comments tab](/features/comments/images/Blog_Comments_-universal_code.png)

On this tab you will find code to paste into your platform you are using, wherever you want your comment box to appear. Usually this will be after the content your platform calls.

![Universal Comments tab](/features/comments/images/Blog_Comments_Universal-Code-Identifier.png)

Please note, before you paste the code in your platform’s template or theme, you will need to modify the elements highlighted in yellow.

The first element you need to review is that the correct full url/path to your Vanilla install is in the code.

The second element you will need to add, and that is the code that calls the unique id for the current page. Replace "your-content-identifier" with the appropriate code so Vanilla can connect the discussion created to the proper content.

Finally within the comments code, you can:

* You can modify Universal Comments code to allow all comments to appear in one discussion thread
* You can make the comments to appear in a certain category of your community. This can be helpful if you integrate Vanilla Comments into a ecommerce shop where you want all product reviews to be placed in the “Product Review” category.

There are some additional settings you may wish to also review :

* Configure Comment Counts code to show the number of comments you have.
* Decide how many comments you wish to appear per page
* Under advanced settings add your trusted domains.




If you are using WordPress, check out our [how to integrate comments with WordPress](/features/wordpress/using-comments/).
