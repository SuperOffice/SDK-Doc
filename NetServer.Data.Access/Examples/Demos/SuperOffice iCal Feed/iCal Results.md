<properties date="2016-05-11"
SortOrder="14"
/>

The iCal page does the same login check as the Result page, but it actually reads the user’s appointments and outputs the iCal.

The search limits the number of appointments to a about two months worth of appointments, weighted towards future/planned appointments.

```
DateTime fromDate = DateTime.Now.AddDays(-10);
DateTime toDate = DateTime.Now.AddDays(39);
 
AppointmentCollection.CustomSearch q = new
AppointmentCollection.CustomSearch();
q.Restriction = q.TableInfo.AssociateId.Equal( S.Parameter(associd)
)
          .And( q.TableInfo.Type.In(
                  S.Parameter(1), S.Parameter(2), S.Parameter(6)))
          .And( q.TableInfo.DoBy.Between( 
                  S.Parameter(fromDate), S.Parameter(toDate) ));
 
AppointmentCollection appoints =
AppointmentCollection.GetFromCustomSearch(q);
```

 

In order to output the appointments, we need to set a few things in the header:

```
Response.ContentType = "text/calendar";
Response.Charset = "";
Response.Cache.SetNoServerCaching();
Response.Cache.SetExpires(DateTime.Now);
Response.Cache.SetNoStore();
Response.ContentEncoding = Encoding.UTF8;
```

 

The response itself has a header and then a list of appointment details.

First the content header:

```
Response.Write("BEGIN:VCALENDAR\r\n");
Response.Write("PRODID:-//SuperOffice AS//SuperOffice Calendar
7//EN\r\n");
Response.Write("VERSION:2.0\r\n");
Response.Write("CALSCALE:GREGORIAN\r\n");
Response.Write("METHOD:PUBLISH\r\n");
Response.Write("X-WR-CALNAME:SO " + name + "\r\n");
Response.Write("X-WR-CALDESC:" + name + " SuperOffice
calendar\r\n");
Response.Write("X-WR-TIMEZONE;VALUE=TEXT:Europe/Oslo\r\n");
```

 

The per-appointment output looks like this:

```
private string MakeLocalDate(DateTime dt)
{
    return dt.ToString("yyyyMMdd\\THHmmss");
}
 
private string MakeDate(DateTime dt)
{
    return dt.ToUniversalTime().ToString("yyyyMMdd\\THHmmss\\Z");
}
 
foreach (Appointment a in appoints)
{
    string start = MakeLocalDate(a.DoBy);
    string end = MakeLocalDate(a.EndDate);
    string id = "appointmentid-" + a.AppointmentId.ToString() + "@"
+ Request.ServerVariables["SERVER_NAME"];
    string type = a.Task == null ? "" : a.Task.Name;
    string registered = MakeDate(a.Registered);
    string updated = a.Updated.Year < 1900 ?
                       registered : MakeDate(a.Updated);
    string desc = a.AppointmentText == null ? "" : 
                  a.AppointmentText.Text.Replace("\r\n", "\\n"). 
                  Replace("\n", "\\n").
                  Replace("\r", "\\r");
    string cont = a.Contact == null ? "" : a.Contact.Name;
 
    string summary = type + ": " + desc;
    if (summary.Length > 60)
        summary = summary.Substring(0, 60) + "...";
 
    Response.Write("BEGIN:VEVENT\r\n");
    Response.Write("DTSTART;TZID=Europe/Oslo:" + start + "\r\n");
    Response.Write("DTEND;TZID=Europe/Oslo:" + end + "\r\n");
    Response.Write("DTSTAMP:" + updated + "\r\n");
    Response.Write("UID:" + id + "\r\n");
    Response.Write("CLASS:PUBLIC\r\n");
    Response.Write("CREATED:" + registered + "\r\n");
    Response.Write("LAST-MODIFIED:" + updated + "\r\n");
    Response.Write("SUMMARY:" + summary + "\r\n");
    Response.Write("CATEGORIES:" + type + "\r\n");
    Response.Write("DESCRIPTION:" + type + " / " + cont + " / " +
desc + "\r\n");
    Response.Write("SEQUENCE:0\r\n");
 
    if( a.Type == AppointmentType.BookingForChecklist || a.Type ==
AppointmentType.BookingForDiary )
        Response.Write("STATUS:TENTATIVE\r\n");
    else
        Response.Write("STATUS:CONFIRMED\r\n");
   
    if( a.FreeBusy == 0 )
        Response.Write("TRANSP:OPAQUE\r\n");
    else
        Response.Write("TRANSP:TRANSPARENT\r\n");
 
    Response.Write("END:VEVENT\r\n");
}
```

 

Google is picky about the time-zone id on the DTSTART/DTEND – it must be present.

This page results in output like this:

```
BEGIN:VCALENDAR
PRODID:-//SuperOffice AS//SuperOffice Calendar 6//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:SO Christian
X-WR-CALDESC:Christian SuperOffice calendar
X-WR-TIMEZONE;VALUE=TEXT:Europe/Oslo
BEGIN:VEVENT
DTSTART;TZID=Europe/Oslo:20110209T123000
DTEND;TZID=Europe/Oslo:20110209T133000
DTSTAMP:20110209T083551Z
UID:appointmentid-3146920@localhost
CLASS:PUBLIC
CREATED:20110125T141334Z
LAST-MODIFIED:20110209T083551Z
SUMMARY:Meeting - IN: Discuss Expander Online Extensibility\n\n-
Web...
CATEGORIES:Meeting - IN
DESCRIPTION:Meeting - IN / SuperOffice AS / Discuss Expander Online
 Extensibility\n\n- Web Services (currently limited
availability)\n-
NetServer Services Scripting\n- .merge/.config file modifications
SEQUENCE:0
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART;TZID=Europe/Oslo:20110211T130000
DTEND;TZID=Europe/Oslo:20110211T140000
DTSTAMP:20110207T101132Z
UID:appointmentid-3154868@localhost
CLASS:PUBLIC
CREATED:20110203T110804Z
LAST-MODIFIED:20110207T101132Z
SUMMARY:Meeting - IN: (Almost) MAF-meeting – Configuration
...
END:VEVENT
END:VCALENDAR
```

 

This non-XML format is what Outlook, Google and Apple’s calendar can use to integrate external calendar events.

------------------------------------------------------------------------

**See Also:** [Outlook](../SuperOffice%20iCal%20Feed/Outlook.md), [Google Calendar](../SuperOffice%20iCal%20Feed/Google%20Calendar.md), [Desktop Gadget](../SuperOffice%20iCal%20Feed/Desktop%20Gadget.md)
