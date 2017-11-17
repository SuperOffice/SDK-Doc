---
uid: exampleAcceptAnInvitation
title: Accept An Invitation
---

### Accepting an invitation in the SuperOffice database

Here we log in to the database directly, so the SOCRM application does not need to be running for this to work.

If the login fails, then isOk will be false and an error message is displayed.

 

Accept an invitation with appointment\_id=11

set soDb = CreateObject("SuperOfficeDB.Database")
isOk = soDb.Login("user", "pass")
if isOk Then 
    Set theInvitation = soDb.GetAppointment(11)
    theInvitation.AcceptInvitation (enResponseAccept)
    theInvitation.Save
else
   MsgBox "Login failed"
end if