<properties date="2016-06-24"
SortOrder="176"
/>

In the .CS of the login form we do a very simple thing that is we login with valid user credentials to the SuperOffice database. Here we have use the Authenticate method of the SoSession class. The SoSession class lives in the SuperOffice namespace. You have to pass a valid UserID and a password to the Authentiacte method as inputparameters. If the authentication is sucessful the method will return a valid session. After a sucessful login we load the frmAppointment form to show the appointments for the day.

 

 
