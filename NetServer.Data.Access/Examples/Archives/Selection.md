<properties date="2016-05-11"
/>

This example uses a selection-members provider.

```
    using System;
    using System.Collections.Generic;
    using SuperOffice.CRM.ArchiveLists;

        SoSession _session = SoSession.Authenticate( "SAL0",
string.Empty );

        ArchiveRestrictionInfo selId = new ArchiveRestrictionInfo(
"selectionId", "=", "39" );  // some have persons, some do not

    ArchiveRestrictionInfo[] restrictions = new
ArchiveRestrictionInfo[] { selId };

    string providerName = SelectionAddMembersProvider.ProviderName;
    string orderBy = "name";
    string[] columns = new strings[] { "who" };
    
        IArchiveProvider provider = ArchiveProviderFactory.Create(
providerName );
        provider.SetOrderBy( new ArchiveOrderByInfo( orderby ) );
        provider.SetRestriction( restrictions );
        provider.SetPagingInfo( 200, 0 );
        provider.SetDesiredColumns( columns );

        int rowNo = 0;
        foreach( ArchiveRow row in provider.GetRows() )
        {
            // output column headers
                if( rowNo == 0 )
                {
                        foreach( string columnName in
row.ColumnData.Keys )
                                Console.Write( columnName + "\t" );
                        Console.WriteLine();
                }

        // output rows to console
                Console.Write( row.EntityName + ":" +
row.PrimaryKey.ToString() + "\t" );
                foreach( ArchiveColumnData data in
row.ColumnData.Values )
                        Console.Write( data != null &&
data.DisplayValue != null ? data.DisplayValue + "\t" : "-" );
                Console.WriteLine();

                rowNo++;
        }
        provider.Close();

        _session.Close();
        _session = null;
```

Another example, thistime using the static-selection member list archive provider:

```
    using System;
    using System.Collections.Generic;
    using SuperOffice.CRM.ArchiveLists;

        SoSession _session = SoSession.Authenticate( "SAL0",
string.Empty );

        IArchiveProvider selectionArchive =
ArchiveProviderFactory.Create( "ContactStaticSelection" );

        string[] allColumns = { "who", "phone",
"email/emailAddress" };
        selectionArchive.SetOrderBy( new ArchiveOrderByInfo( "who"
) );
        selectionArchive.SetDesiredColumns( allColumns );

        selectionArchive.SetRestriction( new
ArchiveRestrictionInfo( "selectionId", "=", "39" ) );

        int rowNo = 0;
        foreach( ArchiveRow row in selectionArchive.GetRows() )
        {
            // output column headers
                if( rowNo == 0 )
                {
                        foreach( string columnName in
row.ColumnData.Keys )
                                Console.Write( columnName + "\t" );
                        Console.WriteLine();
                }

        // output rows to console
                Console.Write( row.EntityName + ":" +
row.PrimaryKey.ToString() + "\t" );
                foreach( ArchiveColumnData data in
row.ColumnData.Values )
                        Console.Write( data != null &&
data.DisplayValue != null ? data.DisplayValue + "\t" : "-" );
                Console.WriteLine();

                rowNo++;
        }
        selectionArchive.Close();

        _session.Close();
        _session = null;
```

See Also:

ArchiveProviderFactory SelectionAddMembersProvider ArchiveRestrictionInfo ArchiveRow
