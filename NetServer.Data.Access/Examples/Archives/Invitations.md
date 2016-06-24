<properties date="2016-05-11"
/>

This is the list of assignments and invitations that the user has not yet accepted. Each user has a personal list of invitations and assignments to handle.

```
    using System;
    using System.Collections.Generic;
    using SuperOffice.CRM.ArchiveLists;
    using SuperOffice.CRM.Lists;

        IArchiveInvitationProvider provider =
ArchiveProviderFactory.CreateInvitationProvider();
        provider.SetAssociateId( 12 );

        DumpResult( provider );


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
