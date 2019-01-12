---
title: Date Filters
tags:
- API
- APIv2
- API v2
category: "apiv2"
menu:
  help:
    parent: apiv2
---

 There are a lot of endpoints that allow you to filter on a date such as the date that a record was inserted or updated. In these cases you can filter based on a range of values.

## Date Formats

 The most simple filter is just specifying a date and checking for equality. When you specify a date use the [RFC339](https://www.ietf.org/rfc/rfc3339.txt) format. Here are some examples:

```
2018-12-25
1985-04-12T23:20:50.52Z
1996-12-19T16:39:57-08:00
2018-12-25
```

 This is a flexible, unambiguous format that allows you to specify a date, date/time, and also specify timezones.

## Basic Date Operations

Usually, you don't want to filter on an exact date, but rather specify an operation. To do this put one of the `=,>,<,>=,<=` operations before the date.

```
>2013-01-24
<=2019-12-31T23:59:59Z
```

## Date Ranges

You can also filter based on date ranges. To do this you put two dates between brackets, seperated by a comma. You can use square brackets `[]` for inclusive ranges and round brackets `()` fore exclusive ranges. You can also mix and match brackets.

```
[2013-03-04,2013-03-04T23:20:50.52Z]
[2018-01-01,2019-01-01) // anything in 2019
```

## Date Filters Must Be Encoded

Most date filters are supplied in the query string which means they have to be encoded just like any other query string parameter. Most dates will work regardless of coding, but it is considered a best practice to always encode.
