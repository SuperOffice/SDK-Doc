---
uid: examUtilDateMgrobject
title: examUtilDateMgr object
---

The date manager parses and converts between various date formats:

 

<span class="hs-onlineonly"><span class="copyCode" onclick="copyCode(this)" tabindex="0" onkeypress="CopyCode_CheckKey(this)" onmouseover="changeCopyCodeIcon(this,true)" onfocusin="changeCopyCodeIcon(this,true)" onmouseout="changeCopyCodeIcon(this,false)" onfocusout="changeCopyCodeIcon(this,false)"><img src="images/copycode.gif" class="copyCodeImage" />Copy Code</span></span>
    set datemgr = wscript.createobject("SuperOffice.DateMgr")
    d = datemgr.DMYToDate(25,2,2001)
    l = datemgr.DateToLong(d)
    d2= datemgr.LongToDate(l)

    msg = "Dates:" & chr(10)
    msg = msg & "D1:" & d & chr(10)
    msg = msg & "L:" & l & chr(10)
    msg = msg & "D2:" & d2 & chr(10)

    d8m = 8 * 60
    d14h= 14 * 60 * 60
    l = l + d8m + d14h + 25

    set resmgr = CreateObject("SuperOffice.ResMgr")
    resmgr.Initialize "C:\Program files\SuperOffice"
    lcid = resmgr.GetLCIDForLanguageCode( "IT" )

    msg = msg & "Weekday:" & datemgr.GetWeekdayName( lcid, d, 2 ) & chr(10)
    msg = msg & "Weekday:" & datemgr.GetWeekdayName( lcid, l, 2 ) & chr(10)
    msg = msg & "WeekNum:" & datemgr.GetWeeknum( lcid, l ) & chr(10)
    msg = msg & "WeekNum:" & datemgr.GetWeeknum( lcid, d ) & chr(10)
    msg = msg & "Month:" & datemgr.GetMonthName( lcid, d2, 2 ) & chr(10)
    msg = msg & "Month:" & datemgr.GetMonthName( lcid, "02-27-2001", 2 ) & chr(10)
    msg = msg & "Date:" & datemgr.FormatAsDateString( lcid, d, 2 ) & chr(10)
    msg = msg & "Date:" & datemgr.FormatAsDateString( lcid, l, 1 ) & chr(10)
    msg = msg & "Date:" & datemgr.FormatAsDateString( lcid, l, 0 ) & chr(10)
    msg = msg & "Time:" & datemgr.FormatAsTimeString( lcid, l, 2 ) & chr(10)
    msg = msg & "Time:" & datemgr.FormatAsTimeString( lcid, l, 1 ) & chr(10)
    msg = msg & "Time:" & datemgr.FormatAsTimeString( lcid, l, 0 ) & chr(10)
    msg = msg & "ss:" & datemgr.GetSec( l ) & chr(10)
    msg = msg & "mm:" & datemgr.GetMin( l ) & chr(10)
    msg = msg & "hh:" & datemgr.GetHour( l ) & chr(10)
    msg = msg & "day:" & datemgr.GetWeekDay( d ) & chr(10)
    msg = msg & "day:" & datemgr.GetWeekDay( l ) & chr(10)
    msg = msg & "date:" & datemgr.GetDate( d ) & chr(10)
    msg = msg & "date:" & datemgr.GetDate( l ) & chr(10)
    msg = msg & "mon:" & datemgr.GetMonth( d ) & chr(10)
    msg = msg & "mon:" & datemgr.GetMonth( l ) & chr(10)
    msg = msg & "year:" & datemgr.GetYear( d ) & chr(10)
    msg = msg & "year:" & datemgr.GetYear( l ) & chr(10)
    msg = msg & "FormatAsString(dddd MMM yyyy): " & datemgr.FormatAsString( lcid, d, "dddd MMM yyyy") & chr(10)
    msgbox msg

 

![](../images/DateMgr.png)

This example shows how the date manager accepts dates in seconds-since-1970 and in COM DATE format.