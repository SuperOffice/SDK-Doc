---
title: Select Message
uid: blogic_select_message
sortOrder: 19
---

This element lets the user select a message from a ticket.

## Configuration

| Setting  | Description                                 |
|:---------|:--------------------------------------------|
| ticketId | The ID of the ticket to list messages from  |
| addNone  | Whether to add none as a selectable value   |

## Functions

### setFieldValue(String, Map)

| Action   | Map keys       | Description                              |
|:---------|:---------------|:-----------------------------------------|
| add      | name<br/>value |                                          |
| remove   | value          | Removes all options with the given value |
| clear    |                | Removes all options                      |

### toString()

Returns the selected value as a string.

### toInteger()

Returns the selected value as a number.
