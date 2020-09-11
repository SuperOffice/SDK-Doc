---
title: CK editor
uid: blogic_ck_editor
sortOrder: 3
---
This element allows you to create HTML formatted messages. You can insert images, tables, paragraphs, and so on.

Learn more:

* See the [CK editor user guide](http://docs.cksource.com/CKEditor_3.x/Users_Guide) for how to work with this editor.
* See the [CK editor API reference](http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html) for available config values.

|## Configuration

| Value             | Default | Description                             |
|:------------------|:--------|:----------------------------------------|
| CKConfig          |         | Passes config values to the CK editor   |
| actionType        |         | 0 = new request<br/>1 = add message<br/> 2 = edit request |
| valueId           |         | Whether ticket ID is set to entry ID (true=yes) |
| attachmentName    |         | The name of the attachment element.     |
| contactRecipientsName |     | The name of the contact recipients elements.<br/>This will ensure that parser variables in reply templates uses the correct customer (the one selected with the radio button). |
| showInsertText    | true    | Whether to show the control for inserting reply templates, FAQ entries, or previous messages below the editor |
| plainText         | false   | Whether to shows a simple textarea with no options |
| hasAttachments    | true    | Whether the editor may add attachments   |
| hasSlevel         | true    | Whether access level may be set for editor entry |
| hasTimeSpent      | true    | Whether to shows time spent on editor entry |
| noBorder          | true    | Whether to remove the border of the editor.<br />Useful to hide border if the editor is placed in an element table with other elements.  |

**A word about attachments:**
Naming the attachment element will ensure that if `showInsertText` is **true**, the attachments will be shown in an `Attachments` element.

> [!TIP]
> For the CK editor to fill out the screen vertically, the config variable **verticalSpace = rest** must be set. If it's inside a pane the `Panes` element must also have this config variable.

## Example

Hide the CK editor toolbar on start-up:

```crmscript
CKConfig.toolbarStartupExpanded = true
```

## Functions

### getFieldValue("plainText")

Returns **true** if the editor has been set up as a plain-text editor.

### setValue(String field)

Sets the content of the editor to value.

### setFieldValue("selectInsertTextValues", Map values)

Passes config values to the select insert text element

* startupFocus - populate map with
* focus (Bool)

### toString()

Returns the contents of the editor.

## Nesting

The `CK editor` element must be inside an `Element table`. Otherwise it will not fill out the width of the page. This is especially important when the editor is located inside a `Pane` element together with other elements.

**Correct nesting:**

All elements inside the pane are "wrapped" in the element table.

```html
<ElementTable>
  <Panes>
    <Pane>
      <ElementTable>
        <CKEditor>
        <ContactAndRecipient>
      <GroupEnd>
    <GroupEnd>
  <GroupEnd>
<GroupEnd>
```
