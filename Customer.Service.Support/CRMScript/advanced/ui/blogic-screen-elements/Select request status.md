---
title: Select request status
uid: blogic_select_request_status
sortOrder: 19
---

This element includes a drop-down with all statuses and a calendar field for the date and time if the status selected is postponed.

It is available in version 3.1.7.5

## Configuration

| Value             | Description                  |
|:------------------|:-----------------------------|
| default           | The ID of the status you want as default |
| ticketId          | If you set this value, the default status will be the status of the ticket. |
| valueId           | If you set this to true, the entryId will be used as ticketId |
| defaultAddMessage | If you set this to true and also set ticketId or valueId, the default status will be the same as for the standard add message screen. |
| category          | The category of the ticket. If you set this category, the default status will be the same as in the standard new ticket screen, when this category is the standard category. This will only  apply if ticketId, valueId and default is not set. |

## Functions

### getFieldValue(String field)

| Value             | Description                  |
|:------------------|:-----------------------------|
| activate          | Returns the date in the calendar field |
| status            | Returns the ID of the status |

### setFieldValue("set", Map values)

1. Set default status by inserting status and ID in the map.
2. Set the calendar field by inserting activate and a date + time in the map.

```crmscript
map.insert("status", "2");
map.insert("activate", "2006-11-24 14:59:26");
setFieldValue("set", map);
```

### toString()

Returns the ID of the status.
