---
title: Ticket Status
uid: blogic_ticket_status
sortOrder: 89
---

This element shows the ticket status field.

**Statuses:**

* active
* closed
* postponed

A calendar element is also shown next to status *postponed*.

## Configuration

| Value      | Description                            |
|:-----------|:---------------------------------------|
| deleted    | Whether to include status deleted (Bool|

## Functions

### getFieldValue(String field)

| Value      | Description         |
|:-----------|:--------------------|
| activate   | The activation date |
| status     | The status          |

### setValue()

### setFieldValue("set", Map)

| Value      | Description                                          |
|:-----------|:-----------------------------------------------------|
| status     | Choose status                                        |
| activate   | If status "postponed" is chosen an activation date can be set through this value |
