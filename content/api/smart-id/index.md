---
title: Smart ID
tags: ["API"]
category: "api"
menu:
  api:
    identifier: smart-id
    weight: 10
---

Many API methods take a `UserID` as one of their required parameters, for example the `/badge/give` method. Often, especially in a SSO context, the calling system will not know the native Vanilla `UserID`, but will instead know some other identifying characteristic of the user, such as their `Email`, `Username`, or SSO `ForeignID`.

Fields that accept Smart IDs allow these tokens to be supplied instead of a native `UserID`. Internally, the `Email`, `Username` or SSO `ForeignID` will be converted into a Vanilla `UserID` by the API layer and passed along to the core method.

## Notation

Passing a Smart ID is easy once you understand Vanilla's naming conventions, and we'll explain these from the perspective of the User table: `GDN_User`.

### Table Names

All tables in a Vanilla database are named for their content and use the singular form. In the case of Users, the table is called `GDN_User` and we refer to it as "the User table". The Discussion table is called `GDN_Discussion`, and the Comment table is called `GDN_Comment`, and so on.

### Field Names

The primary key in a given table will always be the table's name with `ID` on the end, so in our case, `UserID`. Even when referring to the User table from another table, we'll always be careful to make sure that fields containing `UserID`'s are named `______UserID`. For example, the Comment table has a field called `InsertUserID`.

The User table contains other fields, like `Name` and `Email`, and we follow the same referential naming convention for those fields. If there was a field in some table that contained a user's email address, it would end in `UserEmail`.

### Passing a Smart ID

In our example case where we are trying to pass a `UserID`, but only have the user's email, we can instead use a dotted notation to express the table and field we're passing, and have the API resolve the primary key ID.

UserIDsmart id
Required. User.
can be passed as

User.Emailstring
User's Email address.

### Multi Smart ID

Some API methods require lists of item IDs. The `Role` parameter of `/users/edit` is a good example of this. You may want to assign multiple roles to a certain user. Multi Smart ID allows the caller to specify arrays with simple notation.

A normal Smart ID containing a valid `RoleID` would be passed as `Role.ID=56`. In order to pass 2 roles, simply pluralize the table name and use commas to separate the values, like this: `Roles.ID=56,87`. This notation works for other suffixes as well, so to refer to two users by their email addresses the caller might specify: `Users.Email=test@test.com,other@test.com`.

## SSO `ForeignID`

The SSO `ForeignID` type is a special case. It is passed with the parameter name `User.ForeignID` and its value contains the SSO `ClientID` (specified in your Vanilla Dashboard) concatenated with the `ForeignID` (usually the user's internal ID in your own system, or whatever system is providing SSO), with a colon (`:`) as the field separator. A simple example is referring to a user by their Facebook email address:

User.ForeignID = Facebook:testuser@someemail.com
User's Facebook email address.

In situations where your system is providing SSO services, you would substitute `Facebook` with your own SSO `ClientID`. Again, this SSO `ClientID` can be found in your Vanilla Dashboard under the heading __jsConnect__ (`/settings/jsconnect`).

### Supported Tables

Currently, we support Smart ID for the following tables:

{{% scrollableTables %}}

Name            | Table             | Description
---             | ---               | ---
__`Badge`__     | `GDN_Badge`       | Stores Vanilla badges by `BadgeID`
__`Category`__  | `GDN_Category`    | Stores Vanilla categories by `CategoryID`
__`Rank`__      | `GDN_Rank`        | Stores Vanilla ranks by `RankID`
__`Role`__      | `GDN_Role`        | Stores Vanilla roles by `RoleID`
__`User`__      | `GDN_User`        | Stores Vanilla users by `UserID`

{{% /scrollableTables %}}

### Caveats

Some fields are not unique, so passing them as a Smart ID can be risky and may result in multiple results, and therefore an error. A good example of this is the `Name`. Vanilla has the option to allow multiple users with the same name, so if at all possible, use `Email` or SSO `ForeignID` instead of `Name`.
