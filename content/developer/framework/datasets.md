---
title: Datasets
layout: docs
categories: ["Developers","Framework"]
---

## Datasets

The `Gdn_Dataset` object is a way to store data. Most of the time, this data is the result of a query to the database. When you use our [database object](/developers/framework/database) (as you always should) to execute a database select query, it will return a dataset.

Here are a few commonly used methods you'll want to know about:

* `count()` returns the number of records in the dataset.
* `firstRow()` returns the first record in the dataset.
* `resultArray()` returns an array of all the data in the dataset (often used directly in a `foreach` loop).

Just as the database object is chainable, so is the dataset object. The database's `get()` method returns the resulting dataset object, so the two chain together seamlessly.

This example gets the number of records in the database matching a query:

```
$howMany = Gdn::sql()
    ->select('*')
    ->from('GDN_SomeTable')
    ->get() // Now it's a dataset!
    ->count();
```

This example is a common construct for iterating thru records returned from a database:

```
$users = Gdn::sql()
    ->select('Name')
    ->from('User')
    ->where('CountComments', 1)
    ->get();

foreach ($result->resultArray() as $user) {
	// Do something to each user with 1 comment.
}
```

Another use case for datasets is joining datasets together after separate database queries, which can result in better performance. This is simply done by adding data to the array or object dataset manually. See the `joinUsers()` method in the `UserModel` for one such example.
