# Examples of Agent calls

The examples below are given using javascripty pseudo-code.

## Create a new Company

Get a blank company, modify it, and post it back to create a new company.

```javascript
    company = Post("api/v1/Agents/Contact/CreateDefaultContactEntity")
    company.Name = "New company"
    company.Category.Id = 2
    company.Business.Id = 3
    company.NoMailing = true
    company = Post("api/v1/Agents/Contact/SaveContactEntity", company)
```

## Add a category list item

```javascript
    var item = {}
    item.Id = 0;
    item.Name = "Created by unit test";
    item.Tooltip = "Unit Tests FTW";
    item.UdListDefinitionId = -64    // Category list id
    item = Post("api/v1/Agents/List/SaveListItemEntity", item)
```

The list item will be added - we can get the whole list here:

```javascript
    req = { UdListDefinitionName: "category", IncludeDeleted: true }
    items = Post("api/v1/Agents/List/GetAllFromListName", req)
```

## Add a document template

We could call **SaveDocumentTemplateEntity** and **SaveDocumentTemplateStream** separately, like the REST API 
does, or we can use the agent call that does both in a single call:

```javascript
    content = "Hello {name}.";

    var item = {}
    item.Name = "Created by unit test";
    item.Filename = "footemplate.txt";
    item.Tooltip = "Unit Tests FTW";
    item.SaveInDb = 1;
    item.LoadTemplateFromPlugin = 0;

    var req = { DocumentTemplateEntity: item, Stream: content }
    item = Post("api/v1/Agents/List/SetDocumentTemplateStream", req)
```

At this point the document template record has been created, and the content
has been written to the archive.

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
    doc.Person = { PersonId = 63, ContactId = 25 }; 
    doc = Post("api/v1/Agents/Document/SaveDocumentEntity", doc);
```

At this point the document record has been created, but the content
is not generated yet. We can either upload some content directly:

```javascript
    id = doc.DocumentId;
    content = "This is some document content.";
    var req = { DocumentId: id, Stream: content }
    doc = Post("api/v1/Agents/Document/SetDocumentStreamFromId", req);
```

Or we can use the document template to generate a fresh document for us:

```javascript
    id = doc.DocumentId;
    var req = { DocumentId: id }
    doc = Post("api/v1/Agents/Document/CreateNewPhysicalDocumentFromTemplate", req);
```

This will generate a new document based on the template and return the
updated document object to us.
