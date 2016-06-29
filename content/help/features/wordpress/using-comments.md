---
title: Using Comments
layout: docs
---

## Transition to Vanilla Comments

Vanilla doesn't have access to your WordPress comments, so simply turning off WP's comments and turning on Vanilla's would hide all your existing comments.
There's 3 ways to go about remedying this.

The first is to import all your WordPress comments to Vanilla. You will need need the XML export from your WordPress Dashboard to do this. VanillaForums.com clients may request this as an additional service via support or their sales representative.

The second is to edit your WordPress template manually to show WordPress comments on posts published before the date of your switchover, and Vanilla comments after the date of your switchover. This would require some elementary PHP.

The third option is to disable all *new* WordPress commenting, and manually add Vanilla Comments embed code in the template after WordPress. You'd also want to remove WordPress's "empty state" message for when there are no comments. This would have the effect of showing all old WordPress comments, followed by any new Vanilla comments, and then the Vanilla commenting box. Obviously this option is a little more complex, so I'd only do it if your comfort level with WordPress template editing is fairly high.
