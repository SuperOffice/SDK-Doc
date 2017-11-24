---
uid: guideEventsUsingEventServer
title: Using Event Server
---

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><h1 id="using-the-eventserver" style="MARGIN-LEFT: 0px">Using the EventServer</h1></td>
<td></td>
</tr>
</tbody>
</table>



Events are sent through an intermediate service SOEventServer.
Programs must register with the service to receive event notifications.

 

Events are sent through an event publisher, not through the standard visual basic event mechanism.
You need to:
1. Create an object that will receive event calls.
2. Hook up to the event publisher
3. Subscribe the object to a set of events
4. Unhook from the event publisher.

### Subscribing to events

Set objMyListener  = new MySaleEventHandler
Set objEventserver = New SOEVENTSERVERLib.Publisher
m\_SubscriptionId = objEventserver.AddSubscription("SuperOfficeEvents.SaleEvents", objMyListener)
Set objEventserver = Nothing



Whenever an event happens, the event server calls a method on the
registered object (objMyListener in this case) through IDispatch (late binding)

So when you click on a sale in the activity list, the following method is called:

objMyListener.CurrentSaleIdentityChanged



### Starting EventServer

In order to function, the SO Event Server must be registered before it can be started.

Starting SOCRM.EXE will start the event server if the event service
has been registered on the machine.

 SOEVENTSERVER.EXE /REGSERVER



On Win2000 and up you can run SOEVENTSERVER as a service so that it is always available:
 SOEVENTSERVER.EXE /REGSERVICE
 NET START SOEVENTSERVER

You can change the startup to automatic in the Services control panel.

This appears to cause trouble for some, so it is best to use /REGSERVER and to rely on SOCRM to start it for you.

These steps can be automated using SOLOADER.INI





### Simple example.

This application will display a list of events it receives.
     We'll listen for Contact, Sale and Application events.
Add a reference to SOEventServer
Double click the form.
Add three global variables and some onLoad code
Add Listening functions to log the events.
Save, Compile and Run.



Private m\_ContactEventsId As Long
Private m\_SaleEventsId As Long
Private m\_AppEventsId As Long
Private Sub Form\_Load()
    Dim objEventserver As SOEVENTSERVERLib.Publisher
    Set objEventserver = New SOEVENTSERVERLib.Publisher
    m\_ContactEventsId = objEventserver.AddSubscription("SuperOfficeEvents.ContactEvents", Me)
    m\_SaleEventsId = objEventserver.AddSubscription("SuperOfficeEvents.SaleEvents", Me)
    m\_AppEventsId = objEventserver.AddSubscription("SuperOfficeEvents.ApplicationEvents", Me)
    Set objEventserver = Nothing
End Sub ' IContactEvents members

Public Sub CurrentContactIdentityChanged()
   Trace "Current Contact.IdentityChanged"
End Sub

Public Sub CurrentContactSaved()
   Trace "Current Contact.Saved"
End Sub

Public Sub CurrentContactCanceled()
   Trace "Current Contact.Canceled"
End Sub

Public Sub CurrentContactFieldChanged(ByVal field\_id As Long)
   Trace "Current Contact.FieldChanged " & field\_id
End Sub



### Is EventServer for you?

**You can track a lot of Events**
   when current changes.
   when fields change value
   when user interface things happen (panel changes)

**You have to react to the appropiate action**
   Field changes or current changes?

**If your application is based on events, then make sure:**
   The Eventserver runs all the time
   Your application runs all the time
   Take care for Travel, Remote Travel, Satellites, PDA Synch...

**Lots of things can go wrong.**
   Event server may not be started automatically (must be registered as Service on Win NT/2000/XP and started)
   SuperOffice can be shut down by user at any time – the event listener will get shutdown event but can't stop CRM5 from going away.
   An event listener may lock up and therefore freeze the CRM5 client