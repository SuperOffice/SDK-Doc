---
title: DateTime data type
---

**DateTime** is a complex data type representing a timestamp with both date and time elements on ISO format.The default value is now.

Format: YYYY-MM-DD

```crmscript!
DateTime dt;
print(dt.toString());
```

This will print today's date and the current time.

## Timestamps as strings

### Formatting options

**Week numbers and year:**

| Code   | Includes             | Number of digits    |
|--------|----------------------|---------------------|
| ISOW1  | week number          | 1 or 2              |
| ISOW2  | week number          | 2                   |
| ISOWY2 | week number and year | week 1 or 2, year 2 |
| ISOWY4 | week number and year | week 1 or 2, year 4 |
| YY2    | year                 | 2                   |
| YY4    | year                 | 4                   |

**Month and day:**

| Code | Includes | Number of digits |
|------|----------|------------------|
| MM1  | month    | 1 or 2           |
| MM2  | month    | 2                |
| DD1  | day      | 1 or 2           |
| DD2  | day      | 2                |

| Code     | Includes                  |
|----------|---------------------------|
| WEEKDAY  | weekday, with Monday as 1 |
| MONTH    | name of month             |
| WDAY     | name of weekday           |

> [!CAUTION]
> WEEKDAY differs from the `getWeekDay()` method of the Date object where Monday has index 0! WDAY and MONTH do start at index 0, thus construct your lists so that the indexes line up.

**Time:**

| Code | Includes            | Number of digits |
|------|---------------------|------------------|
| H24  | hours, 24-hour mode | 1 or 2           |
| HH24 | hours, 24-hour mode | 2                |
| H12  | hours, 12-hour mode | 1 or 2           |
| HH12 | hours, 12-hour mode | 2                |
| MI2  | minutes             | 2                |
| SS2  | seconds             | 2                |

**AMPM** returns either am or pm.

### String toString()

`toString()` is one of the most frequently used methods, typically when you are going to output something. It returns a string representation of a DateTime object using standard formatting.

```crmscript!
DateTime dt;
printLine(dt.toString());
```

This is the equivalent of:

```crmscript!
Time t;
Date d;
printLine(d.toString() + " " + t.toString());
```

### String toString(String format)

A variant of `toString()` taking a string with formatting codes. You can also include white-space and punctuation marks.

```crmscript!
DateTime dt;
printLine(dt.toString("HH12:MI2 AMPM"));
```

This will print the current time as hh:mm in 12-hour mode and indicating whether it is am or pm.

### String toString(String format, String months, String weekDays)

A variant of `toString()` taking a string with formatting codes plus comma-separated lists of month and weekday names in your preferred language.

```crmscript!
DateTime dt;
String days=",mandag,tirsdag,onsdag,torsdag,fredag,lørdag,søndag";
printLine(dt.toString("WDAY uke ISOW1","",days));
```

If you don't include codes MONTH, WDAY, or both - use `toString(String format)` instead. If you include only 1 of them, send an empty string for the one you don't use.

## Setting and updating date and time

Date and time values are set relative to when the DateTime object was created.

* A positive increment indicates sometime in the future.
* A negative value indicates sometime in teh past.

The amount must be provided as an Integer input parameter.

### DateTime addDay(Integer num)

`addDay()` will adjust the currently set date with the given number of days.
The parameter granularity is *days*.

```crmscript!
DateTime dt;
dt.addDay(3);
printLine("Three days from now: "  + dt.toString());
```

### DateTime addMonth(Integer num)

`addMonth()` will adjust the currently set date with the given number of months.
The parameter granularity is *months*.

```crmscript!
DateTime dt;
dt.addMonth(3);
printLine("Three months from now: "  + dt.toString());
```

### DateTime addYear(Integer num)

`addYear()` will adjust the currently set date with the given number of years.
The parameter granularity is *years*.

```crmscript!
DateTime dt;
dt.addYear(1);
printLine("A year from now: "  + dt.toString());
```

### DateTime addHour(Integer num)

`addHour()` will adjust the currently set time with the given number of hours.
The parameter granularity is *hours*.

```crmscript!
DateTime dt;
dt.addHour(3);
printLine("Three hours from now: "  + dt.toString());
```

### DateTime addMin(Integer num)

`addMin()` will adjust the currently set time with the given number of minutes.
The parameter granularity is *minutes*.

```crmscript!
DateTime dt;
dt.addMin(30);
printLine("Half an hour from now: "  + dt.toString());
```

### DateTime addSec(Integer num)

`addSec()` will adjust the currently set time with the given number of seconds.
The parameter granularity is *days*.

```crmscript!
DateTime dt;
dt.addSec(90);
printLine("90 seconds from now: "  + dt.toString());
```

### Void setTime(Time theTime)

`setTime()` sets the time-part of a DateTime by passing a Time object.

```crmscript!
Time t;
t.setHour(13);
t.setMin(0);
t.setSec(0);
DateTime dt;
dt.setTime(t);
printLine(dt.toString());
```

This will output the current date and time fixed to 13 o'clock.

## Retrieving date and time details

### Integer getMDay()

`getMDay()` returns the day of the month as an Integer \[1-31\].

```crmscript!
DateTime dt;
print(dt.getMDay().toString());
```

### Integer getMonth()

`getMonth()` returns the month as an Integer \[1-12\].

```crmscript!
DateTime dt;
print(dt.getMonth().toString());
```

### Integer getWeek()

`getWeek()` returns the number of the week as an Integer \[1-53\].

```crmscript!
DateTime dt;
print(dt.getWeek().toString());
```

### Integer getWeekDay()

`getWeekDay()` returns the day of the week as an Integer \[0-6\].

```crmscript!
DateTime dt;
print(dt.getWeekDay().toString());
```

> [!CAUTION]
> The 1st day of the week is Monday and has index 0!

### Integer getYear()

`getYear()` returns the year as an Integer.

```crmscript!
DateTime dt;
print(dt.getYear().toString());
```

### Time getTime()

`getTime()` returns the time-portion as a Time object.

```crmscript!
DateTime dt;
Time t = dt.getTime();
print(t.toString());
```

## Comparing timestamps

### Integer diff(DateTime otherDateTime)

`diff()` returns the difference in number of seconds between 2 timestamps. The method subtracts the passed timestamp from the DateTime object you invoke `diff()` on.

```crmscript!
DateTime dt1;
DateTime dt2;
dt2.addHour(1);
print(dt1.diff(dt2).toString());
```

This will print *-3600* because dt2 is 1 hour (60x60 seconds) ahead of dt1.

**Understanding return values:**

| String       | Relation     | Parameter    | dt1.diff(dt2) returns |
|--------------|--------------|--------------|-----------------------|
| DateTime dt1 | less than    | DateTime dt2 | negative Integer      |
| DateTime dt1 | equal        | DateTime dt2 | zero                  |
| DateTime dt1 | greater than | DateTime dt2 | positive Integer      |

dt1 < dt2 means that dt1 comes before dt2 in chronological time.

## UNIX time

For when you need to convert between SuperOffice and integrated systems running on UNIX time.

### DateTime setUnix(Integer number)

`setUnix()` sets the date and time to the number of the seconds since 01.01.1970 00:00:00.

### Integer getUnix()

`getUnix()` returns the number of seconds since 01.01.1970 00:00:00.

## No value

Before a DateTime is initialized, it has no value. This is commonly written as NULL, NUL, or NIL in other programming languages.

CRMScript automatically initializes DateTime objects when declared to the current timestamp. Thus this situation is uncommon. However, it is a good habit to always test that you have a value before using it.

### Bool isNull()

`isNull()` will return **true** if it has no value and **false** if it does.

```crmscript!
DateTime dt;
print(dt.isNull().toString());
```
