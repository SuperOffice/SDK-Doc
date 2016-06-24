<properties date="2016-06-24"
SortOrder="5"
/>

In the example given below we will retrieve all the contacts whose SAINT values are set to active. 

```
using SuperOffice.CRM.Services;
using SuperOffice.CRM.ArchiveLists;
using SuperOffice;
 
using(SoSession newSession = SoSession.Authenticate("SAL0", ""))
{
    // Retrieve an archive agent  
    using(ArchiveAgent agent = new ArchiveAgent())
    {
        // Set the desired columns    
        string[] columns = {"contactId","name", "department"};
        // Set the provider as FindContactProvider
        string provider = FindContactProvider.ProviderName;
        // Set the restriction
        ArchiveRestrictionInfo[] restrion = new ArchiveRestrictionInfo[1];
        restrion[0] = new ArchiveRestrictionInfo("saintstatus1", "set", "true");
        ArchiveListItem[] arcLstItm = agent.GetArchiveListByColumns(provider, columns, new ArchiveOrderByInfo[0], restrion, null, 0, 10);
     
        // extract and display the displayValue of each cell (you need to parse culturally sensitive values such as dates
        // to get the correct client display format)
     
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
     
            foreach (ArchiveColumnData archiveCell in archiveRow.ColumnData.Values)
            {
                if (archiveCell != null)
                {
                    Console.Write(archiveCell.DisplayValue + "\t");
                }
                else
                {
                    Console.Write(" " + "\t");
                }
            }
            Console.WriteLine();
            ++rowNo;
        }
    }
}
 
```

Here we are retrieving all Contacts with saintstatus1 set to true. Saintstatus1 refers to the first record in the StatusDef table. In the test database StatusDef with id 1 is called “Neglected Customer”. These names of the StatusDef can be found in the LocaleTest table, If we have used Saintstatus2 instead, then it will refer to the second record and so on. Here Istrue implies the issignalled field in the statusvalue table. Issignalled field says whether the saint value is active or not. Following is the output that is retrived based on the above code.

```
contactId   name                    department 
 
[I:3]       Amadeus AS              AAvdeling  
[I:4]       Name Changed 2          AAvdeling  
[I:5]       Bjørge AS               BAvdeling  
[I:6]       Bever Inc               BAvdeling  
[I:7]       Colina AS               CAvdeling  
[I:8]       Chevrolet Norge AS      CAvdeling  
[I:9]       Delta Produkter AS      DAvdeling  
[I:10]      xyz123                  DAvdeling  
[I:11]      xyz                     EAvdeling  
[I:12]      xyz                     EAvdeling


```
