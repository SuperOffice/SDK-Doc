<properties date="2016-06-24"
SortOrder="3"
/>

To create a new appointment in CRM.web the user may either click File – New - Appointment or use the appointment button. The user can directly open it on the same browser by using the following SoProtocol.

(Note that http://localhost/SuperOfficeWeb/ is just an example – your local CRM.web installation may be in a different location)

 

[http://localhost/SuperOfficeWeb/default.aspx?appointment\[mode=edit&new=true\]?appointment\_id=0](http://localhost/SuperOfficeWeb/default.aspx?appointment%5bmode=edit&new=true%5d?appointment_id=0)

<img src="Create%20an%20appointment_files/image001.jpg" width="605" height="440" />

 

We can select the start, end times and the description regarding an appointment. We can also enter the details if needed and there is a special feature to invite others to the same appointment.

Here is a more complete SO Protocol string for creating an appointment:

```
appointment[dialogwinname=appointment]?appointment_id=0 
&appointment_type=1&doby=2009.08.14&length=undefined 
&enddate=2009.08.14&calendarassociate_id=316&usedefaulttime=true
```

 

For opening an existing appointment, we don’t have to specify so much in the URL:

```
appointment[dialogwinname=appointment]?appointment_id=2659419
```

 

Just the appointment id – which tells us where to get the rest of the information in the database.

------------------------------------------------------------------------

**See Also:** AppointmentEntity
