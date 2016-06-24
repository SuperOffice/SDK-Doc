<properties date="2016-05-11"
/>

This example returns the person id, first+middle+last names, and two person udef fields across several contacts.

The restriction is where one of the udef fields is set to 1, and the person\_id &gt; 50

```
    using System;
    using System.Collections.Generic;
    using SuperOffice.CRM.ArchiveLists;
    using SuperOffice.CRM.Lists;

        IArchiveProvider personArchive = new PersonProvider();

        List<ArchiveColumnInfo> availableColumns =
personArchive.GetAvailableColumns();
        List<ArchiveEntityInfo> availableEntities =
personArchive.GetAvailableEntities();

        personArchive.SetDesiredColumns( "personId", "fullName",
"personUdef:SuperOffice:6", "personUdef:SuperOffice:1" );
        personArchive.SetPagingInfo( 10, 0 );
        personArchive.SetOrderBy( new ArchiveOrderByInfo(
"contactId", SuperOffice.Util.OrderBySortType.DESC ),
                              new ArchiveOrderByInfo(
"personUdef:SuperOffice:6", SuperOffice.Util.OrderBySortType.ASC )
);
        personArchive.SetRestriction( new ArchiveRestrictionInfo(
"personId", ">", "50" ),
                                  new ArchiveRestrictionInfo(
"personUdef:SuperOffice:6", "=", "1" ) );

        int rowNo = 1;
        personArchive.SetPagingInfo( 50, 0 );
        foreach( ArchiveRow row in personArchive.GetRows() )
        {
                if( rowNo == 1 )
                {
                        Console.Write( "RowNo\t" );
                        foreach( KeyValuePair<string,
ArchiveColumnData> column in row.ColumnData )
                                Console.Write( column.Key + "\t" );
                        Console.WriteLine();
                }

                Console.Write( rowNo.ToString() + ": " +
row.EntityName + "/" + row.PrimaryKey.ToString() + "s:" +
row.StyleHint + " l:" + row.LinkHint + "\t" );
                foreach( KeyValuePair<string,
ArchiveColumnData> column in row.ColumnData )
                {
                        string displayValue = column.Value != null
? column.Value.ToString() : "-";
                        Console.Write( displayValue + "\t" );
                }
                Console.WriteLine();
                ++rowNo;
        }
        personArchive.Close();
```

A more typical contact-person archive:

```
    using System;
    using System.Collections.Generic;
    using SuperOffice.CRM.ArchiveLists;
    using SuperOffice.CRM.Lists;

        IArchiveProvider personArchive = new PersonProvider( true
);
        personArchive.SetDesiredColumns( "personId", "fullName",
"personUdef:SuperOffice:6", "personUdef:SuperOffice:1" );
        personArchive.SetPagingInfo( 190, 0 );
        personArchive.SetOrderBy( new ArchiveOrderByInfo(
"contactId", SuperOffice.Util.OrderBySortType.DESC ),
                new ArchiveOrderByInfo( "personUdef:SuperOffice:6",
SuperOffice.Util.OrderBySortType.ASC ) );
        personArchive.SetRestriction( new ArchiveRestrictionInfo(
"contactId", "=", "2" ) );
        personArchive.SetDesiredEntities( "person" );
        DumpResult( personArchive );
```

See Also:

PersonProvider ArchiveProviderFactory
