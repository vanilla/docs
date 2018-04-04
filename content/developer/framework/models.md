---
title: Models, Forms, & Validation
tags:
- Developers
- Framework
category: developer
menu:
  developer:
    parent: framework
    weight: 10
aliases:
- /developers/framework/models
---
## Models

[Datasets](/framework/datasets)
[Controllers](/framework/controllers)
[Views](/framework/views)

The theory of a Model in MVC is that it is an object representation of the data being manipulated. In Garden, however, the actual object representation of the data comes from the DataSet class in the form of a php stdClass. So, as you may have guessed already, in Garden the model isn’t a representation of the data. In Garden, a model relates directly to a table, and (with the help of the database object) allows you to retrieve information from the table, enforce the schema of that table on the data being manipulated, and put data into the table. The real power of the Model class in Garden comes from it’s ability to examine the table from which it was created, and understand the data types and requirements for putting data into that table. When combined with Garden’s Validation and Form classes, it allows you to create forms with validation already built in. The Model class itself is quite simple, and can be used on any table in the database. Let’s take a look at a very basic example of how a model could be used to get some data from a database, validate data, and update data.

```php
// Create a validation object to handle validation issues that the model will encounter:
$validation = new Gdn_Validation();

// Create a new model based on a table in the database called "Blog":
$blogModel = new Gdn_Model('Blog', $validation);

// Retrieve a DataSet from the Blog table:
$blogData = $blogModel->getWhere(array('BlogID' => '12'));

// Grab the first row of the dataset as an associative array:
$blog = $blogData->firstRow('', DATASET_TYPE_ARRAY);

// $blog now contains every column of the "Blog" table where BlogID == 12. Let's change something:
$blog['Title'] = 'Some blog title';

// And save it:
$blogModel->save($blog); // Validates

// And let's try to insert something that we know shouldn't go into the database:
$blog['BlogID'] = 'Not an Integer!';

// And save it:
$blogModel->save($blog); // Doesn't validate
```

When the model’s “getWhere” method is called, it does a very simple `select * from Blog where BlogID = 12`query that returns all of the columns from that table into a dataset. At this point, the model still doesn’t know anything about the structure of the table. When the model’s “save” method is called, the first thing it does is uses the Database object to get information about the table so that it can define the table’s schema. It looks at each column’s data types, isnullable, default values, keys, etc. Then it uses the validation object to build up a set of rules for each column. Finally, it examines the \$blog that was passed as it’s first argument, matching up associative array keys with column names, and then checks each field against the rules automatically defined for that table. As it encounters problems, it builds up a set of validation results that can then be used however you wish (typically they are consumed by Garden’s form object and displayed on the screen). So, with just a few lines of code, I’ve grabbed data from the database, altered it, and saved it - making sure that no invalid data is inserted into the database, all exceptions are caught, and results can be delivered to the user:

```php
print_r($blogModel->Validation->results());
// Prints:
Array (
    [BlogID] => Array (
            [0] => ValidateInteger
        )
)
```

This means that the "BlogID" field has encountered a problem when attempting to validate that the BlogID value was an integer. If there had been other errors for that column, they would have also appeared, for example:

```php
// Empty value is also incorrect
$blog['BlogID'] = '';
$blogModel->save($blog);
print_r($blogModel->Validation->results());

// Prints:
Array (
    [BlogID] => Array (
            [0] => ValidateRequired,
            [1] => ValidateInteger
        )
)
```

The validation object will always collect as much information about what is wrong with the data as possible. It is then up to the developer what to do with that information. Luckily, 99% of the time the developer will just let the Form handle the validation results.

## Forms & Validation

In order for the database, models, validation, & datasets to shine, we need to get the information out and editable by the users. This is where the Form class comes into play. Let’s take a look at an actual example of how the controller, model, validator, and form work together. Let’s say we get the following request: `/bloggingtool/post/new` Which is the same as calling the following controller in an imaginary “bloggingtool” application: `$post->new();`My “New” method on the post controller would contain:

```php
public function New() {
   $validation = new Gdn_Validation();
   $blogModel = new Gdn_Model('Blog', $validation);

   // Set the BlogModel on the form.
   $this->Form->setModel($blogModel);

   // If the form has already been posted back...
   if ($this->Form->authenticatedPostBack()) {
      // Attempt to save the form values
      $blogID = $this->Form->save();

      // If it saved, redirect to the new entry:
      if ($blogID !== false)
         redirect('/bloggingtool/entries/'.$blogID);

   }
   // Render the form
   $this->render();
}
```

The form’s `save()` method calls the model’s `save()` and then takes any validation results that came out of it. If the save was successful, the model would have returned the id of the record inserted (or updated). If not, it could take all of the validation results and write them to the screen for the user to see. That’s really all there is to saving a bunch of data to the database. You might be wondering: **What fields were actually saved?**That all depends on what you put on the form. The Form class is a “user interface” class, which means that a large number of it’s methods actually return xhtml. The view for my “New” method above would look something like this:

```php
echo $this->Form->open();
echo $this->Form->errors();
echo $this->Form->textInput('Title');
echo $this->Form->textBox('Body');
echo $this->Form->close('Save');
```

In this example, you can see I’ve referenced two fields on the Model that is being manipulated: *Title* and *Body*. When the form’s “save” method is called above (and the Model’s “save” method is called therein), the model validates and attempts to save the data. If one of these two fields were required, it would return a validation result that would then be written to the screen by `$this->Form->errors()`. Furthermore, if there were a field on the “Blog” table that were required and not present on this form, it would have a validation result for that as well. What if we were editing a blog post instead of creating a new one?

```php
public function edit($blogID = '') {
   $validation = new Gdn_Validation();
   $blogModel = new Gdn_Model('Blog', $validation);

   // Load the blog being edited 
   $blog = $blogModel->getWhere(array('BlogID' => $blogID))->firstRow();

   // Set the BlogModel on the form.
   $this->Form->setModel($blogModel);

   // Make sure the form knows which item we are editing.
   $this->Form->addHidden('BlogID', $blogID);

   // If the form has NOT been posted back...
   if ($this->Form->authenticatedPostBack() === false) {
      // Set the blog on the form
      $this->Form->setData($blog);
   } else {
      // Attempt to save the form values
      $blogID = $this->Form->save();

      // If it saved, redirect to the new entry:
      if ($blogID !== false)
         redirect('/bloggingtool/entries/'.$blogID);

   }
   // Render the form
   $this->render();
}
```

I load the blog and set it’s data onto the form using `$this->Form->setData()`. At that point the form takes over and knows to either (a) render the existing data if the form has not been posted back, or (b) render the postback data otherwise. And since I added the BlogID to the form’s hidden field collection, the model will know that it should update a blog row instead of insert a new one.
