<properties date="2016-05-11"
SortOrder="13"
/>

In this section the focus will be on how to generate a table in the database using the Dictionary SDK. To use the SODictionary SDK, SODictionarySDK.dll needs to be registered using regsvr32. The dll can be found in the SuperOffice installation directory. It is important to make sure the correct values are set in the Admin client replication screen because these values are used by the SODictionary whenever the manipulations are done in the database.

```
using System;
using System.Collections.Generic;
using System.Text;
using SuperOffice.COM.DictionarySDK;
 
namespace CustomTableWithSentry
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                // Create a new dictionary
                Dictionary dictionary = new Dictionary();
                // set the database
                dictionary.SetDatabase("ODBC:SuperOffice", "TJE0",
"tje0", "CRM5");          
 
                // Create the table
                Table table;
                table =
dictionary.CreateTable("SuperOfficeTrainingTable");
                table.Description = "Detailed information about the
new table";
                table.NetServerName = "SuperOfficeTrainingTable";
                table.ReplicateDown = false;
                table.ReplicateToPrototype = false;
                table.ReplicateUp = false;
             
                // Create foreign keys
 
                Field fkField = table.CreateForeignKey("Associate",
ERelationCardinality.enOneToMany);
                fkField.Description = "This is the key of the
Associate table.";
                fkField.AddImportName(1034,
"ImportNameOfASSForeignKey");
                fkField.NetServerName = "Associate";
              
                // Create foreign keys
 
                Field fkField2 = table.CreateForeignKey("Business",
ERelationCardinality.enOneToMany);
                fkField2.Description = "This is the key of the
Business table.";
                fkField2.AddImportName(1033,
"ImportNameOfBusinessForeignKey");
                fkField2.NetServerName = "Business";               
            
               
                dictionary.CommitChanges();
                Console.WriteLine("Done.");
            }
            catch (Exception exp) { Console.WriteLine(exp.Message);
}
        }
    }
}
```

In the above code segment we have created a Dictionary object, with the use of which a table is created in the database. Further, two foreign keys namely the Associate-id and the Business-id are created and the table names and the relationship multiplicity are specified.

To read more information about how to use the DictionarySDK class library to create custom tables in the SuperOffice database, see <http://devnet.superoffice.com/Library/Articles/Database/User-Defined-Tables-Part-I/> on SuperOffice DevNet.
