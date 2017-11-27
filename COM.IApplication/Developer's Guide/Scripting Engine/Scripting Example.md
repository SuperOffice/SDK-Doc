---
uid: guideScriptingEngineUseCase
title: Scripting Example
---

###     Script To Add Follow-up Appointment to Closed Sales

Event: **Sale closed**
Do: Create follow-up appointment ‘phone-out’ with text ‘Talk to the CTO’

We create a VBscript file in `SO_ARC\Scripts\` folder called `my-first-script.vbs`

```vb
Sub OnCurrentSaleStatusChanged(oldstatus, newstatus)
   If newstatus = 2 Then   ' 2 = sale closed
      kTaskTable = 67
      Set newAppnt = Database.CreateAppointment
      newAppnt.SetDefaults
      newAppnt.Contact = CurrentSale.Contact
      newAppnt.Person = CurrentSale.Person
      newAppnt.Project = CurrentSale.Project
      newAppnt.Task = GetListItem( kTaskTable, 236 )
      newAppnt.Description = "Talk to the CIO"
      newAppnt.Save
      Context. newAppnt
   End if
End Sub
```

### What happens

1. The windows client is started.
2.  The script engine loads all the scripts in the SO\_ARC\\SCRIPTS folder.
3. The user opens a sale.
4. The user changes the sale from open to closed.
5. The user clicks SAVE to store and close the sale dialog.
6. The sale model (current sale) compares the current and the original status value.
7. The value is different, so the model sends a special message that the COM  current change listener picks up.
8. The COM current change listener sends the event out to external listeners (Calls the “OnCurrentSaleStatusChanged” func).
9. The COM current change listener calls the “OnCurrentSaleStatusChanged” func in all the loaded scripts.
8. The sale model continues.



Elements to note:
* To activate a script file, copy it into SO\_ARC\\Scripts and enable it via SOAdmin Scripting Panel
* The script filename can be anything.
* The script code is all inside a sub-routine that is called by SOCRM.EXE when the sale status changes.
* The OnCurrentSaleStatusChanged is not a normal OnFieldChanged event – it is triggered during a sale save if the status has been modified since the sale was loaded.
* The Database, GetListItem and Context objects are all part of the SOApplication object – which we have added as an “intrinsic object” – so we don’t have to say “Application.Database” – we can just say “Database” and the scripting engine will figure it out for us.
