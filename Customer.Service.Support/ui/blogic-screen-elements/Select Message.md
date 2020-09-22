---
title: Select Message
uid: blogic_select_message
sortOrder: 19
---

This HTML element lets the user select a message from a ticket

## Configuration

| Value    | Description                                |
|:---------|:-------------------------------------------|
| ticketId | The ID of the ticket to list messages from |
| addNone  | If true, none is added as a select value   |

## Functions

### setFieldValue(String, Map)

| Action   | Map keys       | Description                              |
|:---------|:---------------|:-----------------------------------------|
| add      | name<br/>value |                                          |
| remove   | value          | Removes all options with the given value |
| clear    |                | Removes all options                      |

### toString()

Returns the selected value.

### toInteger()

Returns the selected value.
