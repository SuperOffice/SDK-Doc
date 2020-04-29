---
title: Planner
path: /Blogic/Screen Elements/Planner
sortOrder: 50
---

This element will display a planner (day schedule style). It may contain one or more columns, which may represent several days (constructing e.g. a week schedule), several people, etc.



###The planner supports the following configuration items:###


 - "startHour": The hour the planner should scroll to initially (e.g. "8" for 08:00).
 - <b>"exactPosition"</b>: If true appointments will be drawn exactly for its minutes. If false it's rounded down to nearest half hour
 - <b>"roundUpAppointment"</b>: If true appointments are rounded up to nearest half hour instead of down (no effect if exactPosition is true)
 - <b>"overlappingAppointments"</b>: If true appointments that share time will be drawn overlapping. If false they will be drawn side to side.
 - <b>"hourSize"</b>: Height in pixels of hour. Default 40.
 - <b>"editEntryUrl"</b>: The base url to redirect to for editing an entry.
 - <b>"newEntryUrl"</b>: The base url to redirect to for creating a new entry (when dragging in the planner).




###Functions:###


 - setFieldValue(string, Map):
     - "addDay(id, header, highlightStart, highlightStop)": Adds a day to the calender.
        - <b>"id"</b>
        - <b>"header"</b>
        - <b>"highlightStart"</b> and "highlightStop". These fields are used for specifying the "light" area in the planner, normally indicating business hours (e.g. 09:00 to 17:00).
     - "addAppointment(start, stop, id, body)": Adds an appointment to the calender.
        - <b>"start"</b>: start time
        - <b>"stop"</b>: end time
        - <b>"id"</b>
        - <b>"body"</b>
     - <b>"roundUpAppointment"</b>: If true, rounds up appointments to nearest half hour
        - <b>"value"</b> == "true"
     - <b>"overlappingAppointments"</b>: If true, appointments will overlap if one ends after another appointment's start time
        - <b>"value"</b> == "true"
     - <b>"hourSize"</b>: Height in pixels per hour. Minimum height is 30.
     - "exactPosition()": If true, positions start and stop times exactly. If false, times are set to nearest half hour.
        - <b>"value"</b> == "true"


