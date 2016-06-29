---
title: Roles & Permissions
layout: docs
categories: ["Features","Roles", "Permissions"]
---

# Roles & Permissions Overview
 Roles and Permissions are used in tandem to control what users can see and do in your community. Upon account creation, there are 6 default Roles in your Vanilla account. Each of the default Roles have permissions that you would expect from the Role name:

- **Guest**: This is a special role that represents inactive sessions in Vanilla. You can use this role to restrict what logged out users see when viewing your forum. As Vanilla does not allow anonymous posting, this role cannot be given other permissions.

- **Unconfirmed**: This Role is given to members who have registered but have not confirmed their email address yet.

- **Applicant**: Users who have applied for membership but have not yet been accepted. They have the same permissions as guests.

- **Member**: Members can participate in discussions and access all end user functionality.

- **Moderator**: Moderators have permission to edit content and use the moderation features.

- **Administrator**: Administrators have permission to do everything including configuring the account and creating new Roles.


## Making New Roles

It’s possible to edit the default Roles and to create new custom Roles. Here are the permissions that can be given to a Role:

### Garden
- **Delete Activity** – Delete an activity from the Activity Page. This permission should only be given to admins and mods.
- **View Activity** – This allows the user to view the activity on the Activity Page.
- **Advanced Notifications** – This permission should only be given to mods and admins in small communities. This allows a notification to be sent when a new discussion or comment is posted in a specific category. 
- **Community Manage** - Gives you access to banner, category and reaction settings in the Dashboard if the role has "View Settings" but not "Moderate Settings".
- **Manage Curation**  – Gives the ‘Promote’ Reaction. The Promote reactions gives 5 points to the promoted content and displays it on the Best of Page.
- **View Email** – Allows users to receive notifications via email. This _does not_ reveal email addresses of other users to the role. 
- **Manage Moderation** – Gives access to moderation functionality such as the moderation and SPAM queue.
- **Allow No Ads** - Hides Pockets labeled as ads. 
- **View Personal Info** – Allows viewing of personal info such as email and IP address on the profile page. 
- **Edit Profiles** – Allows editing of the users own profile. Does not grant the permissions to edit others. 
- **View Profiles** – Allows viewing other members’ profile page.
- **View Settings** – Permission to view account settings in the Dashboard. Required for "Community Manage" and for "Manage Moderation" to have access to dashboard functionality.
- **Manage Settings** – Grants full access to all functionality in the dashboard. This is an Admin only permission. 
- **Sign In** – The permission to log in. Can be used to temporarily prevent a group of users from logging in.
- **Staff** - For Certain integrations like Zendesk, this allows for staff to access to plugin functionality without gaining forum moderation tools 
- **Add Users** - Grants ability to manually create users on the user page of the dashboard.
- **Approve Users** Grants ability to accept users if using the approval registration method. 
- **Delete Users** Grants Ability to delete members from the User page in the dashboard.
- **Edit Users** Allows for the editing of other users profiles. 


### Vanilla

- **Require Approval** - if this permission is set, unverified members’ posts will have to be approved before they appear (also known as pre-moderation).
- **Me Comments** – Allows user to post a /me action. (Warning, me actions can break your custom theme.)

### Conversations

- **Add Conversations** - Allows for new private conversations to be added. Removing this from members will still allow them to receive messages from mods and admins. 
- **Manage Conversations** – Admins or mods can view and manage private messages between members. This permission also requires a config setting change that must be requested through support'


### Plugins

- **Allow Attachments Upload** – Permission to upload files when Advanced Editor or File Upload is in use. 
- **Manage Pockets** - Grants access to the Pockets plugin, if enabled
- **Polls** – Permission to create a poll type discussion when the Polls plugin is enabled.
- **Edit Signatures** – Permission to create and edit a signature when the Signatures plugin is enabled.
- **Tagging** – Permission to add tags to a discussion when Tags plugin is enabled.

### Reputation 
- **Give Badges** – Grants ability to manually award badges from a users profile page. 
- **Manage Badges** - Allows for the creation and management of badges in the dashboard. 
- **Request Badges** - Allows users to request a badge from a particular badges page. It will send a request to /reputation/badge/requests for admins to approve. 
- **View Badges** - Ability to see badges on profiles

### Groups

- **Add Group** - Grants the ability to make new groups
- **Moderate Group** -Grants the ability to moderate groups even if not a group member. 

### Email

- **Add Comments** - When using VanillaPop, grants ability to comment by email. 
- **Add Conversations** - When using VanillaPop, grants ability to add private messages by email.
- **Add Discussions** - When using VanillaPop, Grants Ability to add Discussions by email. 

### Reactions

- **Add Flag**  Allows use of the "Spam" or "Abuse" Reactions, which have the ability to accumulate to hide posts for review. 
- **Add Negative** Allows use of "Dislike", "Downvote", "Off Topic", and "WTF" Reactions. Negative Reactions are inactive by default. 
- **Add Positive** Allows use of positive Reactions


