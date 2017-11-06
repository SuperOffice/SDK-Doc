---
uid: WholeTableCaching
title: Whole Table Caching
---

Certain tables are cached on disk by the windows client - this is to avoid lots of unnecessary database traffic during the SOCRM windows client startup.

This means that changes in the table in the database may not be visible on the client, even though the database has changed.

In order to make the change in the database visible, the cache on the disk needs to be invalidated, and the new data read from the database.

 

The cachetab table contains the tables that this caching applies to, and what the current valid checksum for the cached table is.

To invalidate the cache, just reset the checksum field to 0.

The next time that a client logs in, the client cache checksum and the cache table checksum in the database won't match, and the disk file will be discarded and a new cache created.

 

The table caches are stored in SOCACHE folder. This folder is located in one of two places:

-   C:\\WINDOWS\\SOCACHE
    Old style - used if the folder exists and is writeable.
-   C:\\Documents and Settings\\username\\Local Settings\\Application Data\\SuperOffice\\SOCache
    New style - used if C:\\WINDOWS\\SOCACHE does not already exist.

 

Note that whole table caching is an issue for the windows client and COM based clients when you are updating the database using a raw database connection.

If you use COM objects or the SuperOffice OLE-DB provider, then the cachetables checksums are automatically updated.

Early versions of NetServer (i.e. prior to NetServer 3.0) do not update the cachetables checksums.

 

 

Example
-------

For example, when adding a CATEGORY row using native SQL, you need to do the following:

-   Add a row to the category table.
-   Add a row to the travel transaction log
-   Add a row to the categorygrouplink table for each usergroup that is active.
-   Update the sequence counters for the category, categorygrouplink and transaction log tables.
-   Reset the cachetable checksum to invalidate the disk cache (because the category table (table id 64) is listed in the cachetables table)
-   Reset the cachetable checksum to invalidate the disk cache (because the categorygrouplink table (table id 65) is listed in the cachetables table)