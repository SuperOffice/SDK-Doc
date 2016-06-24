<properties date="2016-06-24"
/>

Find a project, returning the name
----------------------------------

This example saves the criteria under a particular user, and then executes the find using the saved restriction.

```
    using SuperOffice;
    using SuperOffice.CRM.Services;
    using SuperOffice.CRM.ArchiveLists;

    using(SoSession.Authenticate( "SAL1", "" ))
    {
        using(FindAgent agent = new FindAgent())
        {
            ArchiveRestrictionInfo[] restrictions = new ArchiveRestrictionInfo[1];
            restrictions[0] = new ArchiveRestrictionInfo( "name", "begins", "b" );

            agent.SaveRestrictionsAndGetCriteriaInformation( "Criteria", "findproject", "associate=1234", restrictions, new string[1] { "name" } );

            ArchiveRestrictionInfo[] indirect = new ArchiveRestrictionInfo[1];
            indirect[0] = new ArchiveRestrictionInfo( "criteriaAssociate", "=", "1234" );
            FindResults result = agent.FindFromRestrictions( indirect, "findproject", 50, 0 );

            DumpResult( result.ArchiveColumns, result.ArchiveRows );
        }
    }


    private void DumpResult( ArchiveColumnInfo[] columns, ArchiveListItem[] rows )
    {
        Array.ForEach( columns, delegate( ArchiveColumnInfo column ) { Console.Write( column.ToString() ); } );
        Console.WriteLine();

        Array.ForEach( rows, delegate( ArchiveListItem row )
        {
            foreach(KeyValuePair data in row.ColumnData)
            {
                Console.Write( ( data.Value != null ? data.Value.DisplayValue : "-" ) + "\t" );
            }
            Console.WriteLine();
        } );
        Console.WriteLine();
    }
```

Find a contact, using a udef field
----------------------------------

This example creates the criteria directly on the client and saves and executes the find in one call.

```
    using SuperOffice;
    using SuperOffice.CRM.Services;
    using SuperOffice.CRM.ArchiveLists;

    using(SoSession.Authenticate( "SAL1", "" ))
    {
        using(FindAgent agent = new FindAgent())
        {
            string[] fields = new string[1] { "contactUdef/SuperOffice:1" };
            ArchiveRestrictionInfo[] restrictions = agent.GetSpecifiedCriteriaInformationWithDefaults( "Criteria", "findcontact", "associate=12345",
                    fields, null ).Restrictions;
            restrictions[0].Values = new string[1] { "s" };
            restrictions[0].IsActive = true;

            FindResults find = agent.FindFromRestrictions( restrictions, "findcontact", 50, 0 );
            DumpResult( find.ArchiveColumns, find.ArchiveRows );
        }
    }
```

See Also: FindAgent
