<properties date="2016-05-11"
SortOrder="13"
/>

A ContactRow refers to a row in the database‘s Contact Table. Therefore, the ContactRow consist of basic data type such as string, int, datetime etc, which are supported by the SQL. In order to create a ContactRow we make use of the SuperOffice.CRM.Rows namespace. The following example shows how we make create a Contact using the ContactRow class.

```
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("sam", "sam"))
{
      //Instantiate a ContactRow type
      ContactRow newContact = ContactRow.CreateNew();
                   
      //Assign values to the instantiated ContactRow
      newContact.SetDefaults();
      newContact.Name = "EuroCenter";
      newContact.OrgNr = "1234523";
      newContact.Number1 = "7412885";
                 
      //Saving the ContactRow
      newContact.Save();
}
```

 

In the example above the first step is to instantiate the ContactRow class which is located in the SuperOffice.CRM.Rows namespace. Then use the SetDefaults() method available in the ContactRow class to set the default values to the ContactRow.

```
      ContactRow newContact = ContactRow.CreateNew();
      newContact.SetDefaults();
```

 

To access individual properties exposed through the ContactRow class we make use of the statements as below.

```
      newContact.Name = "EuroCenter";
```

 

By using the statements as above we may accesss such properties of the ContactRow which are actually columns of the database’s Contact table ans insert the values as required.

With the use of the Save() method available in the ContactRow class the instantiated ContactRow will be saved in to the Contact table.

```
      newContact.Save();
```

 
