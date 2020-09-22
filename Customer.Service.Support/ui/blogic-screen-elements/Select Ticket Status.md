---
title: Select Ticket Status
uid: blogic_select_ticket_status
sortOrder: 19
---

This element displays statuses (active, closed, postponed)  in a combobox, and thus differs from HtmlTicketStatus.

## Configuration

| Value             | Description                  |
|:------------------|:-----------------------------|
| defaultAddMessage | If true, the default status for adding messages for this user is set |
| addDeleted        | Add deleted status |
| default           | Default status to be selected |
| valueId           | If true then entry IF is used as ticket ID |
| ticketId          | Ticket ID to get status from |
| category          | Sets default status to the one for new ticket for this user for the given category |
| filterIds         | |

## Functions

### getFieldValue(String field)

| Value    | Description         |
|:---------|:--------------------|
| activate | The activation date |
| status   | The status          |

### setValue(String)

### setFieldValue("set", Map values)

| Value             | Description                  |
|:------------------|:-----------------------------|
| status            | Choose status |
| activate          | If postpone" is chosen an activation date can be set through this value |

### toString()`

### toInteger()`

### toDate()`
