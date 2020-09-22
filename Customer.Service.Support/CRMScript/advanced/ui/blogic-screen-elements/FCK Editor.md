---
title: FCK Editor
uid: blogic_fck_editor
sortOrder: 6
---

This element allows you to create HTML formatted messages. You can insert images, tables, paragraphs, and so on.

Learn more:

* See the [FCK editor user guide](http://docs.fckeditor.net/FCKeditor_2.x/Users_Guide) for how to work with this editor.
* See the [FCK editor API reference](http://docs.fckeditor.net/FCKeditor\_2.x/Developers\_Guide/Configuration/Configuration\_Options) for available config values.

## Configuration

| Setting           | Default | Description                                     |
|:------------------|:--------|:------------------------------------------------|
| FCKConfig         |         | Passes config values to the FCK editor          |
| valueId           |         | Whether ticket ID is set to entry ID (true=yes) |
| actionType        |         | 0 = new request<br/>1 = add message<br/> 2 = edit request |
| showInsertText    | true    | Whether to show the control for inserting reply templates, FAQ entries, or previous messages below the editor |
| plainText         | false   | Whether to shows a simple textarea with no options |
| width             | 100%    |                                                 |
| height            | 100%    |                                                 |
| contactRecipientsName |     | The name of the contact recipients elements.<br/>This will ensure that parser variables in reply templates uses the correct customer (the one selected with the radio button). |
| notEmpty          |         |                                                 |
| toolbar           |         |                                                 |

> [!NOTE] Browsers that don't support the FCKEditor (Opera) must have plaintext = true.

For the CK editor to fill out the screen vertically, the config variable **verticalSpace = rest** must be set. If it's inside a pane the `Panes` element must also have this config variable.

## Functions

### getFieldValue(String field)`

| Value         | Description                                  |
|:--------------|:---------------------------------------------|
| attachmentIds | IDs of attachments as a comma-separated list |
| plainText     | true if the editor is set to plaintext mode  |

### setValue(string)

Sets the content of the editor to value.

### setFieldValue(String, Map)

| Action                 | Map keys               | Description   |
|:-----------------------|:-----------------------|:--------------|
| config                 |                        | Semicolon-separated config values for the editor<br/>Will overwrite existing config. |
| selectInsertTextValues | ticketId<br/>faqAccess<br/>customerId<br/>userId<br/>attachmentIds | Passes config to element "Select Insert Text". |

**faqAccess:**

* 1 KB_ACCESS_PRIVATE
* 2 KB_ACCESS_INTERNAL
* 3 KB_ACCESS_PUBLIC_AUTHENTICATED (default)
* 4 KB_ACCESS_PUBLIC

### toString()

Returns the contents of the editor.

## Nesting

The `FCK editor` element must be inside an `Element table`. Otherwise it will not fill out the width of the page. This is especially important when the editor is located inside a `Pane` element together with other elements.

**Correct nesting:**

All elements inside the pane are "wrapped" in the element table.

```html
<ElementTable>
  <Panes>
    <Pane>
      <ElementTable>
        <FCKEditor>
        <ContactAndRecipient>
      <GroupEnd>
    <GroupEnd>
  <GroupEnd>
<GroupEnd>
```
