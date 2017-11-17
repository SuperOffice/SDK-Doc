---
uid: exampleCreateUsersFromDomain
title: Create Users From Domain
---

Here we are going to use Windows Management Instrumentation (WMI) to get a list of users.

We'll then create a Person object for each user under the db owner contact.

We'll then create a User for each Person

Finally we'll assign some default user level and password to the new user objects.

Feel free to look at it, but be careful about running it. You do not want this script galloping over your production database.

The script contains the NT domain name and the database admin username and password as hard-coded strings. You’ll need to edit them before running the script.

set db = CreateObject("SuperOfficeDB.Database")
isOk = db.Login("name","pass")
if not isOk then
   MsgBox "Unable to login"
   WScript.Exit
end if
strDomain = "YOUR\_DOMAIN"
Set objDomain = GetObject("WinNT://" & strDomain)
objDomain.Filter = Array("user")
For Each objUser In objDomain
  username = objUser.Name
  fullname = objUser.FullName
  isEmployee = false
  For each objGroup in objUser.Groups
  groupName = objGroup.Name
  empPos = instr(1, groupName,"employee",1)
  if empPos &gt; 0 then isEmployee = true
  Next
  if isEmployee then
  call addSOuser(db, username, fullname)
  nUsers = nUsers + 1
  end if
Next
' Clear Objects
Set objUser = Nothing
Set objDomain = Nothing
Set db = Nothing
MsgBox nUsers & " Users added", , "FINISHED"
sub addSOuser(db, username,fullname)
 names = split(fullname, " ", 2)
 
 if ubound( names ) &gt; 1 then
  set pers = db.CreatePerson
  pers.SetDefaults
  pers.Firstname = trim(names(0))
  pers.Lastname = trim(names(1))
  pers.Contact = db.GetContact(
      db.OwnerContactId )
  pers.Save
 
  set user = db.Admin.AddUser( pers )
  user.LoginName = username
  user.Password = ""
  if db.Admin.NumUsersLeft &gt; 0 then
   user.IsLoginEnabled = true
  end if
  if db.Admin.NumWinUsersLeft &gt; 0 then
   user.IsWinLoginEnabled = true
  end if
  user.Save
 end if
end sub

The script does not check to see if the person already exists under the contact – so you may end up with duplicate people. Domain users with only one word for their name are assumed to be non-people and are skipped.

The script will run for quite a while (easily a couple of minutes) if you have a lot of users in the domain. VBScript is not the fastest language in the world. ADSI is not the worlds fastest interface. (ADSI is the object we are accessing at the top with the GetObject call.)