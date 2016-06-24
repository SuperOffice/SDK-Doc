<properties date="2016-06-24"
SortOrder="5"
/>

Find the contacts for a given counter example
=============================================

We can do a search based on both Contact or Project counters and finds Contacts or Projects that match these counters. This section will focus on how we can find the contacts for a given counter. 

```
using SuperOffice;
using SuperOffice.CRM.Services;
using SuperOffice.CRM.ArchiveLists;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //create a find agent
    using(FindAgent findAgent = new FindAgent())
    {
        //create a ArchiveRestrictionInfo array
        ArchiveRestrictionInfo[] restrictions = new ArchiveRestrictionInfo[1];
                           
        //set the properties here the name is the restriction that we are
        //going to filter the contacts
        restrictions[0] = new ArchiveRestrictionInfo("NumberOfActivities", "equals", "2");            
        ArchiveRestrictionInfo activityType = 
            new ArchiveRestrictionInfo("SaintActivityType", "=", "-1");
        ArchiveRestrictionInfo activityDir = 
            new ArchiveRestrictionInfo("SaintDirection", "=", "-1");
        ArchiveRestrictionInfo activityIntent = 
            new ArchiveRestrictionInfo("SaintIntention", "=", "-1");
        restrictions[0].AddSubRestriction(activityType);
        restrictions[0].AddSubRestriction(activityDir);
        restrictions[0].AddSubRestriction(activityIntent);
         
        //using FindFromRestrictions method of the find agent retrive the
        //contacts that match our restriction
        FindResults findResults = 
            findAgent.FindFromRestrictions(
                 restrictions, FindContactProvider.ProviderName, 200, 0);
         
        //now that we have got the results lets show it in the console
        ArchiveListItem[] resultRows = findResults.ArchiveRows;
        int rowNo = 1;
        foreach (ArchiveListItem listData in resultRows)
        {
            if (rowNo == 1)
            {
                foreach (KeyValuePair<string, ArchiveColumnData> column in listData.ColumnData)
                {
                    if (rowNo == 1)
                    {
                        Console.Write(column.Key + "\t");
                    }
                    Console.WriteLine();
                }
         
                foreach (ArchiveColumnData data in listData.ColumnData.Values)
                {
                    Console.Write(data != null && data.DisplayValue != null ? data.DisplayValue + "\t" : "-");
                }                       
                Console.WriteLine();
                ++rowNo;
            }
        }
    }
}
```

 

Below are the results of this example.

```
contactPhone/formattedNumber address/city address/zip  nameDepartment       NumberOfActivities
00 47 04                 OSLO          0123       Bjørge AS, BAvdeling   2
```

 

In the example we have used the FindFromRestrictions() method available through the FindAgent to retrieve the information. We are required to pass,

* restriction – an array of restrictions specifying the search. Each restriction must match a column of the given archive provider, and that column must have its canRestrictBy property set to “true”.

restrictions\[0\] = new ArchiveRestrictionInfo("NumberOfActivities", "equals", "2");            

ArchiveRestrictionInfo activityType = new ArchiveRestrictionInfo("SaintActivityType", "=", "-1");

ArchiveRestrictionInfo activityDir = new ArchiveRestrictionInfo("SaintDirection", "=", "-1");

ArchiveRestrictionInfo activityIntent = new ArchiveRestrictionInfo("SaintIntention", "=", "-1");

restrictions\[0\].AddSubRestriction(activityType);

restrictions\[0\].AddSubRestriction(activityDir);

restrictions\[0\].AddSubRestriction(activityIntent);

 

Here we have restricted the rows based on the NumberOfActivities. Since this is a restriction on SAINTs it is necessary to add certain sub restrictions as shown in the example.

* SaintActivityType – this is for indicating whether it is a phone call, meeting, to-do, and document – simple classification. For example when you create a phone call appointment it updates two counters, i.e. one counter for all activities and another for phone activities.

* Direction – Indicates the direction of the Appointment, i.e. in, out or none. In this case also two counters will be update. One counter for All direction and another for In or Out directions.

* Saint Intention – This is a list that can be edited using the SOADMIN.

* providerName – Name of the archive provider that is to execute the search and resultant columns and rows.

* pageNumber – Result set page to return, is the first page. When a call returns no rows, no further pages will be available.

Once the rows have been fetched using the agent by looping through the result set we may retrieve the data as shown above.
