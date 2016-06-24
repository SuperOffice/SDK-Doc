<properties date="2016-06-24"
/>

Wrap up

Wrap up
-------

There are of course more functionality which can be added to this example, such as:

* More information/fields for the technicians, such as a skill matrix (list of what they can do).
* A screen for finding the first available technician with certain skills.
* Email notification to technicians with todays/this weeks agenda.
* Some simple external web page where technicians can view jobs, add comments, and perhaps "sign of" on job completion.

However, I believe the functionality described in this article should cover most of the bases needed for using SuperOffice eJournal to keep track of and schedule a group of technicians. The elements in this article (except for the selection) is included in a configuration package, [which you can download here.](http://devnet.superoffice.com/Pagefiles/1919/Technician_management.xml) To install this package, simply upload it to your own eJournal installation (System Design -&gt; Packages), and click it and select the elements to install.

NOTE: be careful with installing the "Main menu script", as it will overwrite an existing script. Also, when installing the package, our dependency check system will (incorrectly) conclude that the table y\_technician does not exist when trying to create the field ticket.y\_technician. Consequently, you will have to install the package in a double-pass, leaving out the field ticket.x\_technician the first time. Sorry about this small bug in our package system.

 

Sverre Hjelm 6/25/2010 4:48:33 PM
