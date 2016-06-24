<properties date="2016-06-24"
SortOrder="9"
/>

This is the common interface for the Archive agent. The agent exposes methods such as GetArchiveList(), SetChosenColumns(), SetChosenEntities(), GetArchiveListByColumns() and many more. [Archive Services](../Archive%20Services/Archive%20Services.md)

The example below shows how we may use Criteria to restrict the number of rows returned by the Agent.

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
      string[] archiveColumns = new string[] { "fullName", "firstName", 
                  "personNumber", "position", "academic", "personId", "contactId" };
 
      //Parameter - sortOrder - Sort order for the archive
      ArchiveOrderByInfo[] archiveSrtOrd = new ArchiveOrderByInfo[1];
      archiveSrtOrd[0] = new ArchiveOrderByInfo(
                              "personNumber", 
                              SuperOffice.Util.OrderBySortType.DESC );
 
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
 
          //Get a page of results for an archive list, explicitly specifying 
          //the restrictions, orderby and chosen columns
          ArchiveListItem[] arcLstItm = newArcAgt.GetArchiveListByColumns(
                archiveProviderName, archiveColumns, archiveSrtOrd, archiveRest, 
                desiredEntities, page, pageSize);
         
          int rowNo = 1;
     
          foreach (ArchiveListItem archiveRow in arcLstItm)
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

 

Here we display Person information such as fullName, firstName, personNumber etc of those who have a ContactId, equal to 2.

The above condition has being set with the execution of the following code segment.

```
      ArchiveRestrictionInfo[] archiveRest = new ArchiveRestrictionInfo[1];
      archiveRest[0] = new ArchiveRestrictionInfo("contactid", "=", "2");
```

 

Since the ArchiveAgent method requires an array of ArchiveRestrictionInfo we would have to create an array of the specific type as above and we may include as many restrictions to array as we want.

For example if we want to retrieve a list of persons whose ContactId is equal to 2 and whose fullName begins with “U” the above statement can be modified as below.

```
      ArchiveRestrictionInfo[] archiveRest = new ArchiveRestrictionInfo[2];
      archiveRest[0] = new ArchiveRestrictionInfo("contactid", "=", "2");
      archiveRest[1] = new ArchiveRestrictionInfo("fullName", "begins", "U");
```

In this case, the output will be rows that match both the above restrictions. It is possible to add any number of restrictions on which the archive result should be based on.

The output once the code has being executed is something similar to the one shown below.

```
personId        firstName contactId           personNumber  academic  position  fullName    
[I:210]         Chandana  [I:124]             10214                           Chandana Dushamali
[I:211]         Manoj     [I:124]             10215                           Manoj Udayanage
[I:212]         Chrishani [I:124]             10216                           Chrishani Bannahakke
[I:213]         Asanga    [I:124]             10217                           Asanga Buthpitiya
[I:214]         Thusitha  [I:124]             10218                           Thusitha Asiri
[I:215]         Ravindra  [I:124]             10219                           Ravindra Perera      
[I:216]         Chamini   [I:124]             10220                           Chamini Rangedara
```
