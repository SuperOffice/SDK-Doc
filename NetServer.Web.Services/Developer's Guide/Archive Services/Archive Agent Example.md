<properties date="2016-06-24"
SortOrder="7"
/>

The example below shows us how we may make use of the IArchiveAgent interface and its methods.

```
using System.Collections;
 
using SuperOffice;
using SuperOffice.CRM.Services;
using SuperOffice.CRM.ArchiveLists;
 
using (SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
      //Setting the Parameters that needs to be passed to Agent method  
      //Parameter - providerName - The name of the archive provider to use
      string archiveProviderName = "person";
 
      //Parameter - columns - An array of the names of the columns wanted.
      string[] archiveColumns = new string[] { "fullName", "firstName", "personNumber", "position", "academic", "personId", "contactId" };
 
      //Parameter - sortOrder - Sort order for the archive
      ArchiveOrderByInfo[] archiveSrtOrd = new ArchiveOrderByInfo[1];
      archiveSrtOrd[0] = new ArchiveOrderByInfo("personNumber", SuperOffice.Util.OrderBySortType.DESC);
 
      //Parameter - restriction - Archive restrictions
      ArchiveRestrictionInfo[] archiveRest = new ArchiveRestrictionInfo[1];
      archiveRest[0] = new ArchiveRestrictionInfo("contactid", "=", "2");
                                       
      //Parameter - entities - Which entities to include
      string[] desiredEntities = { "person", "retiredPerson" };
                   
      //Parameter - page - Page number, page 0 is the first page
      int page = 1;
                   
      //Parameter - pageSize - Page size
      int pageSize = 10;
 
      //Intializing an Archive Agent
      using(ArchiveAgent newArcAgt = new ArchiveAgent())
      {
 
            //Get a page of results for an archive list, explicitly specifying the restrictions, orderby and chosen columns
            ArchiveListItem[] arcLstItm = newArcAgt.GetArchiveListByColumns(archiveProviderName, archiveColumns, archiveSrtOrd, archiveRest, desiredEntities, page, pageSize);
     
            int rowNo = 1;
 
            foreach (ArchiveListItem archiveRow in arcLstItm)
            {
                  if (rowNo == 1)
                  {
                        foreach (KeyValuePair<string, ArchiveColumnData> column in archiveRow.ColumnData)
                        {
                              Console.Write(column.Key + "\t");
                        }
                        Console.WriteLine();
                  }
 
                  // extract and display the displayValue of each cell (you need to parse culturally sensitive values such as dates
                  // to get the correct client display format)
                  foreach (ArchiveColumnData archiveCell in archiveRow.ColumnData.Values)
                  {
                        Console.Write(archiveCell.DisplayValue + "\t");
                  }
                  Console.WriteLine();
                  ++rowNo;
            }
      }
}
```

 

As you can see in the above example our main intention is to make use of the GetArchiveListByColumns() method exposed in the IArchiveAgent. The method call itself is a simple statement (a shown below). The difficult part is to create the parameters that should be passed in to it.

```
      ArchiveListItem[] arcLstItm = newArcAgt.GetArchiveListByColumns(archiveProviderName, archiveColumns, archiveSrtOrd, archiveRest, desiredEntities, page, pageSize);
```

 

GetArchiveListByColumns() method requires seven parameters to be passed in to it.

The first parameter that is required is the provider name. This is the name of the provider that will be used to retrieve the required information. In the example, the “person” provider has being used. The provider will be created with the use of the ArchiveProviderFactory from a plugin.

```
      string archiveProviderName = "person";
```

 

Next parameter is the list of columns that needs to be returned by the method. The list is an array of string which can be declared as follows.

```
      string[] archiveColumns = new string[] { "fullName", "firstName", "personNumber", "position", "academic", "personId", "contactId" };
```

 

An important point to remember!

The names of the columns differ from the names that have been given in the database. It is advisable to use the IArchiveProver to retrieve the columns that are available under a particular column.

         IArchiveProviderpersonArchive = new PersonProvider( true );        List&lt;ArchiveColumnInfo&gt; availableColumns = personArchive.GetAvailableColumns();     
      List&lt;ArchiveEntityInfo&gt; availableEntities = personArchive.GetAvailableEntities();

Next parameter that is required by the method is the sort order in which the returned data should be sorted. The sort order can be null which ‘indicates no particular order’.

```
      ArchiveOrderByInfo[] archiveSrtOrd = new ArchiveOrderByInfo[1];
      archiveSrtOrd[0] = new ArchiveOrderByInfo("personNumber", SuperOffice.Util.OrderBySortType.DESC);
```

 

GetArchiveListByColumns() method requires the sort order which is an array of type ArchiveOrderByInfo. Therefore, SuperOffice.CRM.ArchiveLists names space should be imported.

The forth parameter that the method requires is an array of ArchiveRestrictionInfo which contains the restriction on which the retrieved archive list is based on.

```
      ArchiveRestrictionInfo[] archiveRest = new ArchiveRestrictionInfo[1];
      archiveRest[0] = new ArchiveRestrictionInfo("contactid", "=", "2");
```

 

The archives will generally throw an exception if no restrictions are set. If you do not want any restriction, pass in an empty array, but remember that you may end up fetching the first page of millions of rows.

The fifth parameter tells the method to include only the details of all the entities that has being given in the array.

```
      string[] desiredEntities = { "person", "retiredPerson" };
```

 

This parameter can also be null which indicates that all entities will be included.

The last two parameters that should be passed in to the method includes page number where page 0 is the first page and page size which is the number of rows that should be contained in a page.

```
      int page = 1;
      int pageSize = 10;
```

 

Once all parameters have been created we may use them with the GetArchiveListByColumns() method which returns an array of ArchiveListItem.

```
      ArchiveListItem[] arcLstItm = newArcAgt.GetArchiveListByColumns(archiveProviderName, archiveColumns, archiveSrtOrd, archiveRest, desiredEntities, page, pageSize);
```

 

Once the above code is executed, the output that would be returned is as follows.

```
personId  firstName contactId    personNumber  academic  position  fullName    
[I:192]         User             [I:2]        10195                           User Local
[I:191]         Useradm   [I:2]        10194                           Useradm Useradm
[I:190]         Listadm   [I:2]        10193                           Listadm Listadm
[I:188]   SuperBuilder     [I:2]         10191                         SuperBuilder SuperBuilder
[I:187]         RevNS03   [I:2]        10188                           RevNS03 NetServer    
[I:186]         SalNS05   [I:2]        10187                           SalNS05 NetServer    
[I:185]         TjeNS04   [I:2]        10186                           TjeNS04 NetServer    
[I:184]         SerNS03   [I:2]        10185                           SerNS03 NetServer    
[I:183]         AdmNS02   [I:2]        10184                                 AdmNS02 NetServer    
[I:182]         MarNS01   [I:2]        10183                           MarNS01 NetServer    
```

 

 
