<properties date="2016-06-24"
SortOrder="178"
/>

Upon successful login we show the frmAppointment form with the current days diary appointments of the logged in user. The form load event will call the PopulateData method which will populate the datagrid with the appointment details.

 

To get the appointment details we use the GetAssociateDiary method of the appointment agent. We have to pass the associate ID, start time of the appointments we want, end time of the appointments we want and the number of appointments we want that falls between the times that we have provided. In this example, we have specified the current logged in users associate ID through the associate ID property of SuperOffice provided current principal object. The start time has been specified through the today method of the DateTime system provided object. The end time is given again using today method of the DateTime object but by adding 24 hours to specify the end of day. We have given 10 as the input to the number of appointments we want. If there are more than 10 appointments that falls under the start and end times we have given, it will still return as 10 since we have asked for 10. After we have passed all these parameters to the GetAssociateDiary method it will return as an Array of Appointment object which can bind directly to the data grid.  

 

To change the status of the appointment we have to change the completed property of the appointment entity and to specify the completed date and time of the appointment we have to change the done property of the appointment entity. In the click event of the btnComplete button first we have to retrieve the appointment that has been selected in the datagrid. This is done using the GetAppointmentEntity method of the appointment agent. Before we change any property of the appointment entity we have to check whether the logged in user has the rights to change the data. Rights checking is performed using field property of the appointment entity. If the user has the necessary rights to change data, we change the data and save the appointment entity back to the database.

 

To postpone a selected appointment we have to change the Active Date, Do By and End date properties of the appointment entity. To retrieve the selected entity again we use the GetAppointmentEntity of the appointment agent. For the active date since we are postponing the appointment by one day we add one day to the current active date and assign it to the active date property. To advance the do by and end date by one day we do the same thing. After checking the rights of the logged in user using the same methodology as we did for complete, we save the entity back to the database.

 
