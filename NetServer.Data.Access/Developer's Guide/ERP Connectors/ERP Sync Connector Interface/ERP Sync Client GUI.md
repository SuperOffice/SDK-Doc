<properties date="2016-05-11"
SortOrder="7"
/>

[ERP Sync Client GUI]()
====================================

Erp Sync will also require a GUI in the SuperOffice client, to allow the user to link/create SuperOffice entities to ERP actors, and to take advantage of the “Show In ERP Tab” functionality where an ERP field may be retrieved on demand and shown in its corresponding SO entity. GUI operations are beyond the scope of this document, but for understanding’s sake we have included a few figures here.

 

<img src="Erp%20Sync%20Connector%20Interface_files/image011.png" id="Picture 11" width="627" height="441" />

11 : All Erp Sync functionality will be located on a separate tab on its appropriate entity (contact, person, project, etc).

 

<img src="Erp%20Sync%20Connector%20Interface_files/image012.png" id="Picture 3" width="627" height="437" />

12 : The ERP tab on a contact entity after pressing the Edit button. We see three separate ERP connections, and the user has the choice to connect the contact in any one of them.

 

<img src="Erp%20Sync%20Connector%20Interface_files/image013.png" id="Picture 6" width="506" height="380" />

13 : When connecting a Crm entity to an ERP actor, the user gets an opportunity to select what data to keep and what to throw away (for fields that don’t have matching values on both sides). Below that, we can also see the “Default Value” functionality, where the user can set values on an ERP Actor without needing the fields to be mapped and synced.

 

<img src="Erp%20Sync%20Connector%20Interface_files/image014.png" id="Picture 13" width="627" height="441" />

14 : Once an actor is connected to an actor at a Sync Connection, the user can see real-time values fetched directly from the connection. These are the fields that are set up as “Show on ERP tab” through the mapping screen.



 
