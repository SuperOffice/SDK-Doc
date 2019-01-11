---
SortOrder: 1
---

# Entites Examples

The examples below are given using javascripty pseudo-code.

## Create a new Company

Get a blank company, modify it, and post it back to create a new company.

```javascript
    company = Get("api/v1/Contact/default")
    company.Name = "New company"
    company.Category.Id = 2
    company = Post("api/v1/Contact", company)
```

## Add a category list item

```javascript
    var item = {}
    item.Name = "Created by unit test";
    item.Tooltip = "Unit Tests FTW";
    item = Post("api/v1/List/Category/items", item)
```

The list item will be added - we can get the whole list here:

```javascript
    item = Get("api/v1/List/Category/items", item)
```

## Add a document template

```javascript
    var item = {}
    item.Name = "Created by unit test";
    item.Filename = "footemplate.txt";
    item.Tooltip = "Unit Tests FTW";
    item.SaveInDb = 1;
    item.LoadTemplateFromPlugin = 0;
    item = Post("api/v1/List/DocumentTemplate", item)
```
At this point the document template record has been created, but there
is no content for the document template. We need to upload some
document content to the new record:

```javascript
    var id = item.DocumentTemplateId;
    content = "Hello {name}.";
    Put("api/v1/List/DocumentTemplate/" + id + "/content", content)
```

## Generate a document

```javascript
    var doc = {}
    doc.Header = "Testing test";
    doc.Name = "foo.doc";
    doc.OurRef = "foo/1";
    doc.YourRef = "bar/99";
    doc.Description = "BAZ FTW";
    doc.DocumentTemplate = { DocumentTemplateId = 2 };
    doc.Contact = { ContactId = 25 };
    doc.Person = { PersonId = 63, ContactId = 25, }; 
    doc = Post("api/v1/Document", doc);
```

At this point the document record has been created, but the content
is not generated yet. We can either upload some content directly:

```javascript
    id = res.DocumentId;
    content = "This is some document content.";
    Put("api/v1/Document/" + id + "/content", content)
```

Or we can use the document template to generate a fresh document for us:

```javascript
    id = res.DocumentId;
    Post("api/v1/Document/" + id + "/content")
    content = Get("api/v1/Document/" + id + "/content")
```

This will generate a new document based on the template and return the
generated content to us.

## Display a person's picture

```html
  <p>Person: 
     <img src="/api/v1/Person/{{id}}/Image?ifBlank=SrNoPhoto">
  </p>
```

This gets the person's image (if defined, or if blank, returns a placeholder image).

## Update the person's picture

```javascript
    id = 123;
    content = ReadAllBytes("BillGates.jpg")
    Put("api/v1/Person/" + id + "/image", content)
```

This will create or replace the person's image.
