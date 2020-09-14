---
title: Select Time Span
uid: blogic_select_timespan
sortOrder: 19
---

This element adds a text input encoding the time-span in a string and a popup that lets you select time-spans with drop-down menus for hours, minutes, and so on.

The time-spans that can be selected are set to true in the config.

| Value           | Description |
|:----------------|:------------|
| days            |             |
| hours           |             |
| minutes         |             |
| seconds         |             |
| empty           |             |
| negatives       |             |
| enableStartStop | If true, the element can be started and stopped and will count seconds if started |
| returnMinutes   | If true, `toInteger()` will return the time-span in minutes instead of seconds
| maxNum          |             |
| minJumps        |             |

## Example

This will create a TimeSpan where hours and minutes can be selected. 24 hours are selectable in the drop-down menu for hours, while every 15 minutes can be selected. These can also be set negative.

```crmscript
days = false
hours = true
minutes = true
seconds = false

negatives = true

maxNum = 24
minJumps = 15
```
