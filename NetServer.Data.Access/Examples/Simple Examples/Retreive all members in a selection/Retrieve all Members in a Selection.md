<properties date="2016-05-11"
SortOrder="3"
/>

 

This section shows how we may retrieve members of a specific selection. There can be two ways of retrieving such: -

* With the use of the Selection Entity

* With the use of the SelectionProvider

The first example shows how we may retrieve a Members Collection with the use of an instance of the Selection Class.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
 
using(SuperOffice.SoSession mySession =
SuperOffice.SoSession.Authenticate("sam", "sam"))
{
      //Create an Instance of the Selection Entity
      Selection newSelection = Selection.GetFromIdxSelectionId(58);
 
      // Looping throught the Selection Member property in order to
retreive the Selected members          
      foreach (SelectionMemberRow selMem in
newSelection.SelectionMembers)
      {
            //retrieve the Contact information for a given
Contact_id
            ContactRow newConRow =
ContactRow.GetFromIdxContactId(selMem.ContactId);
 
            int selMemSelId = selMem.SelectionId;
            int selMemConId = selMem.ContactId;
            string selMemName = newConRow.Name;
            string selMemNameDept = newConRow.NameDepartment;
 
            //Creating the output
            Console.Write("SelectionId" + "\t" + "ContactId" + "\t"
+ "Name" + "\t" + "NameDepartment");
            Console.WriteLine();
                       
            Console.Write(selMemSelId + "\t");
            Console.Write(selMemConId + "\t");
            Console.Write(selMemName + "\t");
            Console.Write(selMemNameDept + "\t");
            Console.WriteLine();
      }
}
```

 

An instance of the Selection class is created from selection\_id 58. The Selection instance is an entity object for the selection table in the database and the objects represent full entities with both the base table objects and all related objects. With the use of the GetFromIdxSelectionId() it creates a new instance of the Selection object by querying the database table via the index ‘IDXSelId’. The intention of the above method is to make it easy to use efficient queries that match the database index.

Once we have created the instance we may access the SelectionMembers property of the Selection Entity, which is of Rows data type, and manipulate its content. The output produced by the above code is as follows.

```
SelectionId ContactId   Name                    NameDepartment
58 2           StateZeroDatabase       StateZeroDatabase
58 43          Uniformeffekter AS      Uniformeffekter AS,
UAvdeling
58 123         Japanese Company        Japanese Company,
Tokyo
```

 

The next method of retrieving all member of a Selection is with the use of the SelectionProvider that is shown in the example below.

```
using SuperOffice.CRM.ArchiveLists;
using SuperOffice.CRM.Archives;
 
using(SuperOffice.SoSession mySession =
SuperOffice.SoSession.Authenticate("sam", "sam"))
{
      //Instantiating a Selection Provider
      IArchiveProvider selPro = new SelectionProvider();
 
      //Setting the order of the Returned rows
      selPro.SetOrderBy(new ArchiveOrderByInfo("contactId",
SuperOffice.Util.OrderBySortType.DESC));
 
      //Selecting the Columns that should be displayed
      selPro.SetDesiredColumns("selectionId", "contactId", "name",
"nameDepartment");
 
      //Setting the pagin properties of the window
      selPro.SetPagingInfo(100, 0);
                   
      //Setting the query restrictions
      selPro.SetRestriction(new
ArchiveRestrictionInfo("selectionId", "=", "58"));
 
      //Retrieving the Rows returned by the Provider
      int rowNo = 1;
      foreach (ArchiveRow row in selPro.GetRows())
      {
            if (rowNo == 1)
            {
                  Console.Write("RowNo\t");
                  foreach (KeyValuePair<string,
ArchiveColumnData> column in row.ColumnData)
                  {
                        Console.Write(column.Key + "\t");
                  }
                  Console.WriteLine();
            }
            Console.Write(rowNo.ToString() + ": " + row.EntityName
+ "/" + row.PrimaryKey.ToString() + "s:" + row.StyleHint + " l:" +
row.LinkHint + "\t");
            foreach (KeyValuePair<string, ArchiveColumnData>
column in row.ColumnData)
            {
                  string displayValue = column.Value != null ?
column.Value.ToString() : "-";
                  Console.Write(displayValue + "\t");
            }
            Console.WriteLine();
            ++rowNo;
      }
      selPro.Close();
}
```

 

The aim of the example is to retrieve all members in a Selection with the use of the SelectionProvider.

```
IArchiveProvider selPro = new SelectionProvider();
```

 

We have used the IArchiveProvider interface to create an instance of the SelectionProvider class since IArchiveProvider is the external standard interface that aggregates the extensible and provider properties of all Archive provider class.

Once the provider is instantiated, the next is to manipulate the behavior of the provider with the use of Set methods.

It should be noted that all Set methods work in a similar manner, the only difference is the number and type of parameters that should be pass into it. Here we look at the SetRestriction() method as it is quite related to the current section of the document.

```
selPro.SetRestriction(new ArchiveRestrictionInfo("selectionId",
"=", "58"));
```

 

Here with the SetRestriction() method, we have restricted the number of rows selected by giving a SelectionId such that the related members would all belong the given Id.

Once the Rows have been selected with the use of the GetRows() method exposed in the Provider class, we may retrieve the rows that have been selected. Below is the output returned by the code segment above.

```
selectionId contactId   name                    nameDepartment
[I:58]      [I:127]    Ghost Rider,            entity dept
[I:58]      [I:126]    Frank Hardy        
[I:58]      [I:123]    Japanese Company,      Tokyo
[I:58]      [I:43]     Uniformeffekter AS,     UAvdeling
```

 

 
