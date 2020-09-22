---
title: Select insert text
uid: blogic_select_insert_text
sortOrder: 19
---

This element is used to select a predefined text to insert into a message.
Text can be selected from FAQ entries, reply templates, and previous messages.

## Configuration

| Value              | Description                        |
|:-------------------|:-----------------------------------|
| htmlEditorName     | The name of an HTML editor element this element will be connected to |
| customerId         | ID of customer to load into parser |
| onlyLeafNodes      | Only leaf nodes can be selected    |

## Functions

### toString()

Returns the ID of the selected entry, prefixed with either "doc.", "faq.", or "msg." depending on the type of the selected entry.

### getFieldValue(string)

Return the text of the selected entry

* selectedInsertText
* attachmentIds"

### setFieldValue(string, values)

| Action   | Map keys               | Description                         |
|:---------|:-----------------------|:------------------------------------|
| selectInsertTextValues | ticketId<br/>faqAccess<br/>customerId<br/>userId<br/>attachmentIds | Sets different values. |

These keys are used to determine which entries that can be selected. The screen must include a CGI variable named `actionType`, with the values 0, 1 or 2 for the this to automatically include messages, faqs, customer, and user parser variables.

**faqAccess:**

* 1 KB_ACCESS_PRIVATE
* 2 KB_ACCESS_INTERNAL
* 3 KB_ACCESS_PUBLIC_AUTHENTICATED (default)
* 4 KB_ACCESS_PUBLIC
