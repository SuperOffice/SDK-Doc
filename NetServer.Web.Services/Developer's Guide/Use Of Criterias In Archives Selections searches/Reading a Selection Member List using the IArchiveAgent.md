<properties date="2016-06-24"
SortOrder="10"
/>

The code piece below shows us how we may read a Selection Member list with the use of the ArchiveProvider. The selection member list is a list of contact and person ids – the archive expands the contact and person information without the client needing to know how the expansion is happening.

```
using System.Collections;
 
using SuperOffice;
using SuperOffice.CRM.Services;
using SuperOffice.CRM.ArchiveLists;
 
using (SuperOffice.SoSession mySession = SuperOffice.SoSession.Authenticate("sam", "sam"))
{
      //Parameter - providerName - The name of the archive provider to use
      string archiveProviderName = "ContactSelection";
 
      //Parameter - columns - An array of the names of the columns wanted.
      string[] archiveColumns = new string[] { "nameDepartment", "fullName", "contactId" };
 
      //Parameter - sortOrder - Sort order for the archive
      ArchiveOrderByInfo[] archiveSrtOrd = new ArchiveOrderByInfo[1];
      archiveSrtOrd[0] = new ArchiveOrderByInfo(
                              "fullName", 
                              SuperOffice.Util.OrderBySortType.DESC );
 
      //Parameter - restriction - Archive restrictions
      ArchiveRestrictionInfo[] archiveRest = new ArchiveRestrictionInfo[1];
      archiveRest[0] = new ArchiveRestrictionInfo("selectionId", "=", 58);                   
 
      //Parameter - entities - Which entities to include
      string[] desiredEntities = { "staticContact", "staticPerson", "dynamicContact" };
                   
      //Parameter - page - Page number, page 0 is the first page
      int page = 1;
 
      //Parameter - pageSize - Page size
      int pageSize = 10;
 
 
      //Intializing an Archive Agent
      using(ArchiveAgent newArcAgt = new ArchiveAgent())
      {
 
          // Get a page of results for an archive list, explicitly specifying 
          // the restrictions, orderby and chosen columns
          ArchiveListItem[] newArcLstItm = 
                newArcAgt.GetArchiveListByColumns(archiveProviderName, archiveColumns, 
                            archiveSrtOrd, archiveRest, desiredEntities, page, pageSize);
     
          int rowNo = 1;
     
          foreach (ArchiveListItem archiveRow in newArcLstItm)
          {
                if (rowNo == 1)
                {
                      foreach (KeyValuePair<string, ArchiveColumnData> column 
                            in archiveRow.ColumnData)
                      {
                            Console.Write(column.Key + "\t");
                      }
                      Console.WriteLine();
                }
     
                // extract and display the displayValue of each cell 
                // (you need to parse culturally sensitive values such as dates
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

 

This is similar to the first example. However, there is a small difference in the restriction parameter.

```
      ArchiveRestrictionInfo[] archiveRest = new ArchiveRestrictionInfo[1];
      archiveRest[0] = new ArchiveRestrictionInfo("selectionId", "=", 58);                   
```

 

We an ArchiveRestricitonInfo to define which selections we want information for. The selection may be a dynamic selection which uses additional criteria to figure out which Contacts and/ or Persons are members of it.

    contactId   nameDepartment          fullName   
    [I:2]       StateZeroDatabase       Tje2 
    [I:2]       StateZeroDatabase       Tje1 
    [I:2]       StateZeroDatabase       Tje0 
    [I:2]       StateZeroDatabase       SuperBuilder SuperBuilder   
    [I:2]       StateZeroDatabase       SerNS03 NetServer
    [I:2]       StateZeroDatabase       Ser5 
    [I:2]       StateZeroDatabase       Ser4 
    [I:2]       StateZeroDatabase       Ser3 
    [I:2]       StateZeroDatabase       Ser2 
    [I:2]       StateZeroDatabase       Ser1 

 

In this case the ArchiveProvider used inside the agent will figure out how to read the selection member, depending on the selection type, i.e. Dynamic or Static.

------------------------------------------------------------------------

**See Also:** ArchiveAgent, ArchiveRestrictionInfo
