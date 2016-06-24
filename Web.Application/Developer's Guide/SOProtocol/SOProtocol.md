<properties date="2016-06-24"
SortOrder="6"
/>

SOProtocol allows us to control the user interface without using scripting. The protocol makes it possible for us to send a hyperlink to another user that will open. I.e. a specific Appointment or Company Card.

1. autolist

The URL is built up as follows:

[http://server/application\_name/default.aspx?page.panel.archive?what=id&what=id](#)

 

For example in order to change to the Contact with contact\_id = 2, you use the following URL:

[www.example.com/default.aspx?page.panel.archive?contact\_id=2](#)

<img src="../SO%20Protocol_files/image001.jpg" width="605" height="424" />

The above will work only for the following:

* Main Panels: Contact, Project, Selection, Diary, Mail

* Main Dialogs: Person, Sale, Appointment, Document, Invitations

* Contact Sub-Modes: Main, Udef, Interests, www, Info PersonArchive, RelationArchive, ProjectArchive, ActivityArchive 

* Project Sub-Modes: Main, Udef, www, InfoMemberArchive, ActivityArchive

* Selection Sub-Modes: Main, Task

* Diary Sub-Modes: Day, Week, Month, View

* Person Sub-Modes: Main, Udef, Interests, Info

* The window name from SOAdmin – Lists – Application may be used in an URL to open a web panel.

The following primary keys may be used in order to specify what to open through the Url.

* contact\_id

* person\_id

* project\_id

* selection\_id

* appointment\_id

* document\_id

* sale\_id

This means if you want to retrieve an Appointment based on an appointment\_id = the following url could be used.

[www.example.com/Default.aspx?appointment\[dialog=stop\]?appointment\_id=124](#)

<img src="../SO%20Protocol_files/image002.jpg" width="605" height="424" />

In order to get the SOProtocol link that reflects the current state of the application use the view page info option available and copy the address.

An important point to remember!

When running the CRM.web application on a FireFox browser we can use the “Copy Shortcut” option on the task button to get the address.

<img src="../SO%20Protocol_files/image003.jpg" width="604" height="416" />
