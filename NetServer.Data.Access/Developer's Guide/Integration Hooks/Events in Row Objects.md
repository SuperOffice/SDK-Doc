<properties date="2016-05-11"
SortOrder="9"
/>

Unlike Entity objects, Row objects have many events. In this section we are using ContactRow to demonstrate how events are called back from Row Objects. ContactRow has about 30 events. For each change in the properties of ContactRow an event is triggered. Therefore there is an event for each field in the contact table.

```
using SuperOffice;
using SuperOffice.Data;
using SuperOffice.CRM.Rows;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
    //Retrieve a Contact Row
    ContactRow myContactRow = ContactRow.GetFromIdxContactId(122);
    //Generating the events
    myContactRow.OnElementSaved += new
OnSaved(myContactRow_OnElementSaved);
   
 
      //This is the name field change event
      myContactRow.OnNameChange += new
OnFieldChange<string>(myContactRow_OnNameChange);
   
    //Change the name field
    //Field change event is triggered here
    myContactRow.Name = "Aeron Christopher";
 
   if (myContactRow.IsDirty)
   {
       // Element save event is triggered here
       myContactRow.Save();
   }
 
}
```

 

The syntax of calling Events in Row objects is very similar to that in Entity objects. Thus just as in Entity objects we have retrieved a ContactRow with Id 122 and  changed its Name property. When the Name property is changed the OnNameChange event is fired. When these changes are saved the OnElementSaved event is fired. These two event handlers are given below.

```
voidmyContactRow_OnNameChange(TableRowBase fieldOwner, string
persistedValue, string currentValue, string newValue)
{
    MessageBox.Show("Name Field is changed");
}
```

 

```
voidmyContactRow_OnElementSaved(INestedPersist element, bool
didSucceed)
{
    if (didSucceed)
    {
        MessageBox.Show("Changes are saved");
    }
   
}

 

The content of this event handler is executed after the
elements are saved.The rest of the events in the ContactRow work in
the same manner.
```
