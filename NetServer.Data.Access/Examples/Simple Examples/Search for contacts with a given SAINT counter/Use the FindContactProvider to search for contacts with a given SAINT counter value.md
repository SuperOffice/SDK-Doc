<properties date="2016-05-11"
SortOrder="7"
/>

 

With the use of FindContactProvider you can search for contacts with a given SAINT counter value. The following example demonstrates how it is done.

```
using SuperOffice;
using SuperOffice.CRM.ArchiveLists;
using SuperOffice.CRM.Rows;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
 
    // Create an instance of the FindContactProvider
    FindContactProvider myProvider = new FindContactProvider();
 
    // Select the return fields
    myProvider.SetDesiredColumns("contactId");
    // Set restrictions
    myProvider.SetRestriction(new
ArchiveRestrictionInfo("saintSaleStatus", "=", "2"));
 
    //Display the retrieved data on the console
    int rowNo = 1;
    foreach (ArchiveRow row in myProvider.GetRows())
    {
        if (rowNo == 1)
        {
            Console.Write("RowNo\t");
            foreach (KeyValuePair<string, ArchiveColumnData>
column in row.ColumnData)
                Console.Write(column.Key + "\t");
            Console.WriteLine();
        }
 
        Console.Write(rowNo.ToString() + ": " + row.EntityName +
"/" + row.PrimaryKey.ToString() + 
                      "s:" + row.StyleHint + " l:" + row.LinkHint +
"\t");
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
    myProvider.Close();
 
}
```

 

 <img src="../Search%20for%20contacts%20with%20a%20given%20SAINT%20counter_files/image001.jpg" width="577" height="145" /> 

 

Initially we have created an instance of the FindContactProvider class. You can set the return fields of the contact provider via the SetDesiredColumns() method. The FindContactProvider contains fields that belong to other tables than contact like person, countervalue and etc. Hence you can add a restriction to a field in the table.  Thus we want to retrieve the ids of all the contacts with saintsalestatus value equal to 2. They are displayed in the console window and the latter part of the code is used to display the results.

 
