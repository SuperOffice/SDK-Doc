---
uid: exampleCreateAnAppointment
title: Create An Appointment
---

### Creating an appointment in the SuperOffice database

Here we log in to the database directly, so the SOCRM application does not need to be running for this to work.

If the login fails, then isOk will be false and an error message is displayed.

Create a new appointment two days from today

```
set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then 
    Set theContact = soDb.CreateContact
    Set theAppnt = soDb.CreateAppointment
    theAppnt.SetDefaults
    theAppnt.Contact = soDb.GetContact(2)
    theAppnt.DoBy = DateAdd("d", 2, Now())
    theAppnt.Description = "A new meeting added two days from today!"
    theAppnt.Save
else
   MsgBox "Login failed"
end if
```

SuperOfficeDB.dll needs to be used in a new project and by adding the reference to the SuperOfficeDB.dll, SuperOffice.COM.SuperOfficeDB namespace can be used in the coding.

```
using SuperOffice.COM.SuperOfficeDB;
Database db = new DatabaseClass();
bool isOk = db.Login("USERNAME", "PASSWORD");
if (isOk)
{ 
    //Get the contact details of the contact\_id 2
    SOContact cont = db.GetContact(2);
    //Create new Appointment
    SOAppointment soappointment = db.CreateAppointment();
    soappointment.SetDefaults();
    soappointment.Contact = cont;
    //Set the new appointment date
    soappointment.DoBy = DateTime.Now.AddDays(2);
    //Set the discription
    soappointment.Description = "This is a new Appointment";
    //Save the appointment
    soappointment.Save();
}
else
    Console.WriteLine("Unable to log in to database");
```

 

According to the above code it will create a new appointment and we used date as two days after the current date. User can give any date which user needs.
After executing the above code, once we open the SIX.Win and the appointment which we have newly added will be shown on the calendar retrieving from the database.