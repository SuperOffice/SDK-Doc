<properties date="2016-05-11"
/>

```
    using System;
    using System.Collections.Generic;
    using SuperOffice.CRM.ArchiveLists;
    using SuperOffice.CRM.Lists;
        IArchiveProvider activities =
ArchiveProviderFactory.Create( "ContactActivity" );
        ArchiveRestrictionInfo contact = new
ArchiveRestrictionInfo( "contactId", "=", "2" );
        activities.SetRestriction( contact );
        activities.SetDesiredColumns( "date", "type", "text" );
        activities.SetPagingInfo( 100, 0 );
        DumpResult( activities );


        private void DumpResult( IArchiveProvider provider )
        {
                int rowNo = 1;
                provider.SetPagingInfo( 50, 0 );
                foreach( ArchiveRow row in provider.GetRows() )
                {
                        if( rowNo == 1 )
                        {
                                Console.Write( "RowNo\t" );
                                foreach( KeyValuePair<string,
ArchiveColumnData> column in row.ColumnData )
                                        Console.Write( column.Key +
"\t" );
                                Console.WriteLine();
                        }
                        Console.Write( rowNo.ToString() + ": " +
row.EntityName + "/" + row.PrimaryKey.ToString() + "s:" +
row.StyleHint + " l:" + row.LinkHint + "\t" );
                        foreach( KeyValuePair<string,
ArchiveColumnData> column in row.ColumnData )
                        {
                                string displayValue = column.Value
!= null ? column.Value.ToString() : "-";
                                Console.Write( displayValue + "\t"
);
                        }
                        Console.WriteLine();
                        ++rowNo;
                }
                provider.Close();
        }
```

See Also:

ArchiveProviderFactory
