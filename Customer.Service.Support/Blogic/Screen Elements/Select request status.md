---
title: Select request status
path: /Blogic/Screen Elements/Select request status
sortOrder: 74
---


This element include a dropdown with all status'es and a calendar field for the date and time if the status selected is postponed.


It is available in version 3.1.7.5



###These values can be set in config for the element:###
default: The id of the status you want as default
ticketId: If you set this value, the default status will be the status of the ticket.
valueId: If you set this to true, the entryId will be used as ticketId
defaultAddMessage: If you set this to true and also set ticketId or valueId, the default status will be the same as for the standard add message screen.
category: The category of the ticket. If you set this category, the default status will be the same as in the standard new ticket screen, when this category is the standard category. This will only apply if ticketId, valueId and default is not set.

For retrieving values in ejScript, use `getFieldValue()`
getFieldValue("activate") gives the date in the calendar field
getFieldValue("status") gives the id of the status
toString() gives the id of the status

For setting values in ejScript, use `setFieldValue()`
Set default status by inserting status and id in the map.

    map.insert("status", "2")

Set the calendar field by inserting activate and a date + time in the map

    map.insert("activate", "2006-11-24 14:59:26")
    setFieldValue("set", map)


