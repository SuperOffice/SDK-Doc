Implementation Overview
-----------------------

***Structure*** is where all database table, field and index changes must be made. There are several intuitive methods in the base class to make such actions easy, and are explored more thoroughly in the next section.

Once a table is created, and populating the table with priming data is desired, the class need only implement ***ImpFieldNames***. ImpFieldNames returns a list of IMP file names to the Continuous Database library which iterates over the list and begins to import data.

When more flexibility is required, such as calculated fields or transforming data from existing tables, the dictionary step should override the ***CustomPriming*** method.

Methods declared in the base class, ***ExecuteSelect*** and ***ExecuteSql***, can issue SQL statements to the database to performing queries or perform actions, respectively. However, these methods should be used sparingly. Issuing SQL statements using these methods is covered in a later section.

Finally, it’s important to understand that all schema changes should be done in a small, compact and isolated manner. Changes should be done in such a way that make it easy to understand and manage. Evolutionary database design benefits from small incremental changes.

Once a dictionary step is committed to the database, it is final. It cannot be undone. The only way to change the last dictionary step is to create a new dictionary step that makes yet another change to the database!

 

Structure Method
----------------

Changing the database schema is facilitated by three methods in the base class:

1.  CreateTable
2.  DropTable
3.  ModifyTable

Each method is a fluent interface, and therefore easy-to-read and easy-to-use. This simple example illustrates this point:

Structure Example:

```cs
public override void Structure()
{
    CreateTable("Movie", "Movie table for movie buffs")
        .AddString("Name", "English name of the movie", 255, notNull: true)
        .AddString("Description", "Description of the movie", 255, notNull: false)
        .AddBool("Rated", "Has this movie been rated?")
        .AddBlob("MoviePreviewImage", "Compressed image string", notNull: false);

    ModifyTable("Movie")
        .AddString("Genres", "The style or category of the movie ", 255)
        .AddInt("Rating", "The rating for this movie");

    ModifyTable("Movie")
        .ModifyField("Description", maxLength: 1024);

    DropTable("Movie");
}
```

Each fluent method expects a minimal set of required parameters while permitting several named parameters to override field defaults, such as *notNull: false*.

In addition to fluent methods for tables, there are fluent methods that make is easy to add and modify fields of all supported field types. There are also handy *macro-*methods to create common field patterns, such as *AddRegisteredUpdate()*. 
*AddRegisteredUpdated* adds five fields: registered, registered\_associate\_id, updated, updated\_associate\_id and updatedCount, all with standard settings.

 

ImpFileNames Method
-------------------

IMP files are a means to populate a table with priming data once the DictionaryStep has completed performing any schema changes defined the *Structure* method. The sole purpose of *ImpFileNames() *is to return a list of file names containing data that Continuous Database will discover and import.

 

CDD ImpFileNames

```cs
    public override List<string> ImpFileNames()
    {
        // these are the .IMP files
        return new List<string>
        {
            @"I_ChatRoom.imp",
        };
    }
```

Dictionary steps can provide IMP files is one of two ways:

1.  As a physical file located in the same location as the executing assembly.
2.  As an embedded resource in the same assembly as the DictionaryStep.

 

CustomPriming Method
--------------------

*CustomPriming* is the third and final method executed during the DictionaryStep pipeline, and is used to make data transformations that are not otherwise supported. In order to support complex data transformation, the base class exposes two helper methods to perform SQL actions towards the database: *ExecuteSql* and *ExecuteSelect*.

### ExecuteSql Method

While you really should use Imp files for the bulk of priming data, *CustomPriming* is used for circumstances when you need to perform raw SQL towards existing tables. In those cases, *ExecuteSql* is there to help execute non-select SQL statements.

CDD CustomPriming

```cs
    public override void CustomPriming()
    {
        var utcNow = DateTime.UtcNow;
        var never = DateTime.MinValue;
        ExecuteSql(@"INSERT INTO { abc} (
            { abc.abc_id},
            { abc.xyz},
            { abc.registered},
            { abc.registered_associate_id},
            { abc.updated},
            { abc.updated_associate_id},
            { abc.updatedCount}
            ) VALUES (
            { @abc_id},
            { @xyz},
            { @registered},
            { @registered_associate_id},
            { @updated},
            { @updated_associate_id},
            { @updatedCount}
            )",
            new
            {
                abc_id = 1,
                xyz = "A String",
                registered = utcNow,
                registered_associate_id = 0,
                updated = never,
                updated_associate_id = 0,
                updatedCount = 0
            });
    }
```

There are three representations of curly braces used to define the table, fields and values:

1.  {abc} means “table abc”;
2.  {abc.xyz} means “field xyz of table abc”,
3.  {@foobar} means “parameterized value foobar”, and named the same as the property in the anonymous parameter class.

Continuous Database will look up the table and field names, do quoting and case conversion and anything else that might be needed to make valid SQL, and then properly encode the parameters.

**Please always use parameterized values**. Doing so avoids two major hazards: formatting problems (particularly dates!) and the possibility of sql injection. As a rule a dictionary step should never depend on externally supplied values, but even an update from one field to another that does not use parameterization could still expose us to sql injection from values latent in the database. *There is no excuse for sql injection caused by lack of parameterization*.

 

### ExecuteSelect Method

When there is data in the database that needs to be obtained during the DictionaryStep pipeline, *ExecuteSelect* is there to execute a query and return the result in a DataTable. *ExecuteSelect* accepts two parameters: the SQL statement to execute, and optional parameters. It returns a standard DataTable object that is disconnected from the database.

A useful place for ExecuteSelect is in the ImpFileNames method, to first check if priming data exists, and potentially only set it by returning the name of the imp file if the tables doesn’t contain any data.

CDD ExecuteSelect

```cs
    public override List<string> ImpFileNames()
    {
        var abcData = ExecuteSelect(@"SELECT {abc.abc_id} FROM {abc}");
        if (abcData.Rows.Count == 0)
        {
            return new List<string>
            {
                @"abc.imp"
            };
        }
        else
            return new List<string>();
    }
```
 

[Read the full article on DevNet](https://community.superoffice.com/en/content/content/database/continuous-database/) - it has more details than this overview.