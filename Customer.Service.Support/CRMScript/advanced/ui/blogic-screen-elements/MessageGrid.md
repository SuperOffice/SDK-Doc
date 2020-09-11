---
title: MessageGrid
uid: blogic_message_grid
sortOrder: 13
---

This element will display ticket messages in a grid including a checkbox.

> [!NOTE]
> If you don't set a ticket ID, the entryId is used.

## Configuration

| Value              | Description         |
|:-------------------|:--------------------|
| ticketId           | If set, the messages on this ticket is put into the grid |

This element can be useful in screens such as **forward ticket** where we want to select messages in a ticket.

Retrieve the selected message IDs in a comma-separated string with `toString()`.
