<properties date="2016-05-11"
SortOrder="13"
/>

SQL is the lowest-level API. This is a database-independent SQL that is compile-time checked (unlike SQL strings which are checked at run-time). Objectified SQL (OSQL) lets you build your own queries and SQL commands, without worrying about Oracle’s peculiarities.

Another advantage is that the OSQL layer automatically adds transaction logging, computed fields updating and security to your queries, so that you don’t have to worry about these tedious details.

Transactionlogging means that every time you update a field, you don’t have to manually add a new row to the traveltransactionlog table yourself.

Computed fields are fields like the soundex fields or the last-updated-date fields. The OSQL system handles these for you.

Security means that the OSQL system will not return hidden or private data to users who are not authorized to see it. It will also prevent updates to rows which are supposed to be locked for the user. This makes working with SuperOffice data much easier.

The security system works by rewriting your query behind the scenes – so a simple query across the document table will join in the appointment and visiblefor tables. The security system needs data from these tables to work out if you can see each record or not.

 

```
using SuperOffice.CRM.Data;
using SuperOffice.Data.SQL;
using SuperOffice.Data;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //retrive the table info
      ContactTableInfo c = TablesInfo.GetContactTableInfo();
 
      //Creating an Instance of the Update Class of the person
table
      Select contactQuery = S.NewSelect();
      contactQuery.ReturnFields.Add( c.ContactId, c.Name,
c.Department );
      contactQuery.Restriction = c.ContactId.Equal(
S.Parameter(1234) );
      using( QueryExecutionHelper qeh =
             new QueryExecutionHelper(contactQuery) ) {
          while( qeh.Reader.Read() ) {
              string name = qeh.Reader.GetString( c.Name );
          }
      }
}
```

 

The ContactTableInfo object represents an alias to a table in the database.

It exposes properties which represent the fields in the table, as well as dictionary information about the table (like its name, table-number in the dictionary). Each field also contains dictionary information (like the field type, size, name).

The fields support composition using SQL-like methods: c.ContactId.Equal( S.Parameter(1234) ) or c.Name.Like( S.Parameter( “SuperOffice%”) )
