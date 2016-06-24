<properties date="2016-06-24"
/>

Tying it together
-----------------

To make all of this a bit more accessible, we can create a new menu group in our menu, so we can easily access our various screens: 

![](Schedule%20technicians%20for%20appointments_files/menu.png)

 
-

Viewing appointments in CRM
---------------------------

Creating a simple view for these appointments in CRM is quite simple. I have created a screen which only contains a grid showing requests which are scheduled appointments for a given company, with relevant columns. Then we can add this screen as a webpanel in CRM, with a URL something like this:

` http://support.company.com/blogic.exe?_sf="0&action=doScreenDefinition&idString=techAppointmentListForCrm&entryId=<cuid>&_hideFramework=1`

You will have to modify the hostname to match your installation. Furthermore, in the screen, make sure your dbi\_agent\_id is correct. Inside CRM you should get something like this:

![](files/in-crm.png)
