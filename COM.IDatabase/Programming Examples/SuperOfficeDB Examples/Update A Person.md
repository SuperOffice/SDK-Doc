---
uid: UpdateAPerson
title: Update A Person
---


### Updating a person in the SuperOffice database

Here we log in to the database directly, so the SOCRM application does not need to be running for this to work.

If the login fails, then isOk will be false and an error message is displayed.

 

Updating the person with person\_id=2, here we add birth date, address/city and a picture to the person card.

set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then 
    Set thePerson = soDb.GetPerson(2)
    thePerson.DayOfBirth = "12"
    thePerson.MonthOfBirth = "12"
    thePerson.YearOfBirth = "1970"
    thePerson.Address.Address1 = "Home street 123"
    thePerson.Address.City = "Oslo"
    thePerson.Picture.ReadFromFile ("c:\\MyPicture.jpg")
    thePerson.Save
else
   MsgBox "Login failed"
end if