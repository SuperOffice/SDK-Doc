<properties date="2016-05-11"
/>

You can use methods on the providers to find out more about what is available on any given archive provider.

```
    using System;
    using System.Collections.Generic;
    using SuperOffice.CRM.ArchiveLists;
    using SuperOffice.CRM.Lists;

        IArchiveProvider personArchive = new PersonProvider( true
);

        List<ArchiveColumnInfo> availableColumns =
personArchive.GetAvailableColumns();
        List<ArchiveEntityInfo> availableEntities =
personArchive.GetAvailableEntities();
        DumpFields( availableColumns );
        DumpEntities( availableEntities );
        
        private void DumpFields( List<ArchiveColumnInfo>
fields )
        {
                Console.WriteLine( "Available fields" );
                int colNo = 1, visible = 0;
                foreach( ArchiveColumnInfo info in fields )
                {
                        Console.WriteLine( ( colNo++ ).ToString() +
": " + info.ToString() );
                        if( info.IsVisible )
                                ++visible;
                }
                Console.WriteLine( visible.ToString() + " visible
fields" );
        }

        private void DumpEntities( List<ArchiveEntityInfo>
entities )
        {
                Console.WriteLine( "Available entities" );
                foreach( ArchiveEntityInfo info in entities )
                        Console.WriteLine( info.ToString() );
        }
```

See Also:

PersonProvider
