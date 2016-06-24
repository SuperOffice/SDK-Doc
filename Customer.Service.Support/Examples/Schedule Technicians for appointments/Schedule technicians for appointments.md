<properties date="2016-06-24"
/>

Using SuperOffice eJournal to schedule technicians for service appointments
========================================================================================

One usage of a Service Management system is to schedule technicians for service appointments. This article shows you how to quickly modify an eJournal installation to support this kind of functionality.

Out of the box, SuperOffice eJournal does not have any functionality for scheduling service appointments. Our core functionality is mostly focused on ticketing - solving incoming tasks which are organized in queues and dispatched to agents. However, using the Designer Studio module, it is quite easy to add functionalty to the system, allowing it to be used to organize a team of technicians who are scheduled for appointments with customers. An example of this usage could be organizing a team of cable repair guys, who need to visit customers and solve problems on site.

Most of the functional requirements for this scenario are present in a regular eJournal, with the following modifications:

1. The technicians should not be required to be user agents in eJournal, since they possibly will never log in, but rather "live on the road", visiting customers. This will vary depending on the actual usage scenario, but at least this solution does not require a user license for each technician. Consequently, we will create a new technician-table for keeping track of our "cable guys".
2. Requests are great for registering appointments, but lack fields for being scheduled as an appointment. We need to add those fields.
3. Default request listing is not convenient to get a good overview over who is scheduled to do what. We need to create some new screens/reports which shows our schedule load in a more informative manner.

 

The technician table
--------------------

The technicians are being kept track of in a new table, "Technician" ("y\_technician"). I have simple created it with 3 text fields: "Name", "Email" and "Phone". This structure could easily be expanded to keep track of other information about the technicians, such as skills.

 
-

The request table
-----------------

In order to schedule a request as an appointment for a technician, we need to add three fields: "Start" and "Stop" which are date-time fields specifying when the appointment starts and stops. An appoinment may span multiple days, even though this will look slightly incorrect in some views (you might want to specify work cut-of hours in the planner, such as 08:00 to 17:00, unless your cable guys are working 24x7). Furthermore, a request needs a relational field pointing to the technican-table. This field will be used to keep track of which technician has been assigned this appointment. Our table structure looks like this:

 ![](files/tables.png)
