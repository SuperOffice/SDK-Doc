---
title: Document templates
SortOrder: 30
uid: crmscript_doc_templates
---

A *document template* is a blueprint consisting of regular text and template variables.

For the end-user, these templates work similar to the service [reply templates](../../advanced/parser-and-templates/reply-templates.md). However, how you work with them in CRMScript is different.

The **DocTmpl** database table represents an MDO list. The corresponding CRMScript carrier classes are `NSDocumentTemplate`and `NSDocumentTemplateEntity`.

## Template types

| Type   | Description |
|:------:|:------------|
| 0      | unknown     |
| 2      | document    |
| 3      | email       |
| 4      | fax         |

Types 1,5, and 6 are not used for document templates.

## List all document templates with SearchEngine

```crmscript!
SearchEngine se;
se.addFields("DocTmpl", "DocTmpl_id,name,rank");
se.addCriteria("DocTmpl.record_type", "Equals", "2", "and", 0);
print(se.executeTextTable());
```

## Set template for document entity

```crmscript
NSDocumentAgent docAgent;
NSDocumentEntity doc = docAgent.CreateDefaultDocumentEntity();

NSDocumentTemplate tpl;
tpl.SetDocumentTemplateId(1);
doc.SetDocumentTemplate(tpl);

doc = agent.SaveDocumentEntity(doc);
```

## Use template as a filter when retrieving documents

Like many MDO lists, templates can be grouped by headings, which get their labels from the [Heading table](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-Heading.htm).

Thus the methods ending in `ByTemplateHeading()` target a group of templates whereas methods ending in `ByTemplateType()` targets a single template.

### NSDocument[] GetDocumentsByTemplateHeading(Integer templateHeadingId)

Filter by the document template **heading**.

```crmscript
Integer templateHeadingId = 4;
NSDocumentAgent docAgent;
NSDocument[] docList = docAgent.GetDocumentsByTemplateHeading(templateHeadingId);
```

### NSDocument[] GetContactDocumentsByTemplateHeading(Integer contactId, DateTime start, DateTime end, Integer count, Integer templateHeadingId)

Fetches a limited number of documents within a time range for the given contact - filtered by template heading.

```crmscript
NSDocumentAgent docAgent;
DateTime start;
DateTime end;

NSDocument[] docList = docAgent.GetContactDocumentsByTemplateHeading(4, start.addMonth(-6), end, 10, 4);
```

### NSDocument[] GetContactDocumentsByTemplateType(Integer contactId, DateTime startTime, DateTime endTime, Integer count, Integer documentTemplateId)

Fetches a limited number of documents within a time range for the given contact - filtered by template ID.

```crmscript
NSDocumentAgent docAgent;
DateTime start;
DateTime end;

NSDocument[] docList = docAgent.GetContactDocumentsByTemplateType(4, start.addMonth(-6), end, 10, 106);
```

> [! TIP]
> To retrieve for a person rather than a contact, use `GetPersonDocumentsByTemplateHeading()` or `GetPersonDocumentsByTemplateType()`.

## Template variables

A *template variable* is a named placeholder that you can put in a document- or email template. When the template is applied, the variable is substituted with the actual value. For example, {name} translates to a company's name while {atln} is the last name of an associate. This lets you automate the personalization of content.

[List of variables](https://community.superoffice.com/documentation/help/en/crm/8.5/userhelp/index.htm#t=StandardCRM%2Fchap02%2FTemplate_variables.htm&rhsearch=use%20currency)

> [!NOTE]
> The date and time in template variables are controlled by the PC's system clock.

## Reference

### Frequently used fields

| Field       | Description                             |
|:------------|:----------------------------------------|
| DocTmpl_id  | ID                                      |
| name        | as shown in lists                       |
| rank        | for sorting                             |
| record_type | type                                    |
| direction   | 0 = unknown, 1 = incoming, 2 = outgoing |

> [!NOTE]
> `name` refers to the label displayed in the GUI and not the physical filename of the template.

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-DocTmpl.htm).
