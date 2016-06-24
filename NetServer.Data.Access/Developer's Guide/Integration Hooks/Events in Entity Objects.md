<properties date="2016-05-11"
SortOrder="8"
/>

Entities trigger two types of events. One event is triggered when an Entity is saved to the database. The other event is raised when related objects are being collected for saving. The following example demonstrates how to callback these events through our own code.

```
using SuperOffice;
using SuperOffice.CRM.Entities;
using SuperOffice.Data;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
    //Retrieve a Contact Entity
    Contact myContact = Contact.GetFromIdxContactId(12);
    //Adding Events
    myContact.OnElementSaved += new
OnSaved(myContact_OnElementSaved);
    myContact.OnGetRelatedObjects += new
GetRelatedObjects(myContact_OnGetRelatedObjects);
 
    myContact.Name = "Elan Hop";
 
    if (myContact.IsDirty)
    {
      //Events are triggered by this call
      myContact.Save();
    }
   
}
```

 

 

After selecting the required event you can press Tab to have intellisense generate the event handler. The following code shows the handler of the OnElementSaved event.

 

```
voidmyContact_OnElementSaved(INestedPersist element, bool
didSucceed)
{
      if (didSucceed)
      {
            MessageBox.Show("New changes are saved");
      }
}
```

 

If the save completed successfully, then the didSucceed parameter is true. If some part of the transaction is failed, the transaction is rolled back, and the parameter is false.

 

The handler of OnGetRelatedObjects Event.

```
voidmyContact_OnGetRelatedObjects(List<INestedPersist>
relatedObjects)
{
    int count = relatedObjects.Count;
    int j;
    for (j = 0; j <count ; j++)
    {
        MessageBox.Show(relatedObjects[j].ToString());
    }
}
```

 

In the above example we have first retrieved a Contact Entity and then made some changes. When this Entity is saved first the OnGetRelatedObjects event is fired. When the Contact Entity is saved there are several other objects related to this entity. All those objects are collected and when all related objects have been collected, this event is fired. From this example it is clear how certain actions are done in response to certain events. You can use the related objects event to examine the data that is about to be saved in the related objects.  
