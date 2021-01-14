---
title: Select Time
uid: blogic_select_time
sortOrder: 19
---

This element is used to get [Time](../../crmscript/datatypes/time-type.md). as input.

## Configuration

| Setting | Description                                                                                                 |
|:--------|:------------------------------------------------------------------------------------------------------------|
| minInc  | Sets the gap in minutes between each allowable entry<br/>Fewer options per hour makes the drop-down smaller |

## Example

```crmscript
minInc = 15
```

This setting gives you 15-minute increments - 4 options per hour.

## Functions

### setValue(String time)

Sets the selected `Time`. The value must be formatted as **HH:MI:SS**.

### toString()

Returns the time as a string formatted as **HH:MI:SS**.
