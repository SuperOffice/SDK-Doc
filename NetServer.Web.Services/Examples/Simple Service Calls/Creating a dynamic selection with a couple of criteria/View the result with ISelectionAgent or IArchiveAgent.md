<properties date="2016-06-24"
SortOrder="7"
/>

View the result with ISelectionAgent or IArchiveAgent
=====================================================

We may also be able to view the results of the restriction with the use of either the ISelectionAgent or the IArchiveAgent.

The following code shows how we can use the ISelectionAgent to retrieve information about the particular selection.

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using(SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
    using(SelectionAgent newSelAgt = new SelectionAgent())
    {
        SelectionEntity newSelEnt = newSelAgt.GetSelectionEntity(56);
         
        string entName = newSelEnt.Name;
        uint entMemCnt = newSelEnt.MemberCount;
    }
}
```

 

See Also:

[Get a Contact entity](../Get%20a%20contact%20entity.md)

If we wish to retrieve the details of the members in the selection we need to make use of the IArchiveAgent as shown below.

```
using SuperOffice;
using SuperOffice.CRM.Services;
using SuperOffice.CRM.ArchiveLists;
using SuperOffice.CRM.Archives;
 
using(SuperOffice.SoSession mySession = SuperOffice.SoSession.Authenticate("sam", "sam"))
{
    //Setting the Parameters that needs to be passed to Agent method  
    //Parameter - providerName - The name of the archive provider to use
    string archiveProviderName = SelectionProvider.ProviderName;
     
    //Parameter - columns - An array of the names of the columns wanted.
    string[] archiveColumns = new string[] { "contactId", "name", "selectionId" };
     
    //Parameter - sortOrder - Sort order for the archive
    ArchiveOrderByInfo[] archiveSrtOrd = new ArchiveOrderByInfo[1];
    archiveSrtOrd[0] = new ArchiveOrderByInfo("contactId", SuperOffice.Util.OrderBySortType.DESC);
     
    //Parameter - restriction - Archive restrictions
    ArchiveRestrictionInfo[] archiveRest = new ArchiveRestrictionInfo[1];
    archiveRest[0] = new ArchiveRestrictionInfo("selectionId", "=", "61");
     
    //Parameter - entities - Which entities to include
    string[] desiredEntities = { "staticContact", "staticPerson", "dynamicContact" };
     
    //Parameter - page - Page number, page 0 is the first page
    int page = 1;
                     
    //Parameter - pageSize - Page size
    int pageSize = 10;
     
    //Intializing an Archive Agent
    using(ArchiveAgent newArcAgt = new ArchiveAgent())
    {
        //Get a page of results for an archive list, explicitly specifying the restrictions,
        //orderby and chosen columns.
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

 

With the use of the GetArchiveListByColumns() method available in the ArchiveAgent we pass the “selection\_id” we want into the method and get the required members information retrieved.

```
contactId   name        selectionId
125 Tester 1        61
126 Tester 2        61
127 Tester 3        61
128 Tester 4        61
129 Tester 5        61
```

 

See Also:

[Archive Services](../../../Developer's%20Guide/Archive%20Services/Archive%20Services.md)
