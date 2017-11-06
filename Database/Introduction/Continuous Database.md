---
uid: ContinuousDatabase
title: Continuous Database
---

How to Create Tables in the SuperOffice Database for Version 8.1 and Higher

 

Introduction
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Long gone are the days when software is built using a fixed Waterfall approach of establishing product requirements, designing software architecture, coding an implementation, verifying results and finally entering the maintenance mode.

Nearly all software projects these days have adopted agile methodologies that take an iterative approach; where there are no permanent requirements and instead the incremental evolutionary product lifecycle is the standard.

Unlike most software applications upgrade paths, which simply replace existing application files, deploying database structural changes is hard, because the data in the tables cannot be thrown away when a new structure is deployed. Harder still are changes requiring both structural and data changes. Another problem is maintaining the change logs of specific software versions and associated database versions. There is no easy way of documenting which software versions depend on which database schema version.

Therefore, based on principles set forth by *evolutionary database design*, Continuous Database is the latest SuperOffice process for instrumenting incremental changes toward the SuperOffice database that enables changes in a continuous way. This new process is a way both SuperOffice and third-parties can continuously update a database schema that reflect ever-changing business requirements without ever having to depend on a hardcoded fixed-system again.

Getting Started
---------------

Before diving into details, let’s first establish a point of reference. You are going to start off by interacting with a SuperOffice database that is either pre-version 8.1, version 8.1 or post-version 8.1, and one that either does or does not have third-party tables. Under those assumptions, you are most likely to encounter one or more of the following scenarios:

1.  Pre-SuperOffice 8.1 database with third-party tables
2.  Pre-SuperOffice 8.1 database without third-party tables.
3.  SuperOffice 8.1 or higher with third-party tables.
4.  SuperOffice 8.1 or higher without third-party tables.

With respect to both \#1 and \#2, we recommend using ServerSetup to upgrade customer installations. This will upgrade both the customers’ installation and database to the latest continuous database process.

If customers do not upgrade to SuperOffice 8.1, the only available option for third-party tables is continued use of the legacy Dictionary SDK to create new or modified existing third-party tables.

With respect to \#3 and \#4, all third-parties must come to accept, understand and adopt the continuous database processes – as the remainder of this article presents.

Fundamentals
------------

So how does SuperOffice isolate itself from unpredictable database changes? From version 8.1, SuperOffice creates an in-memory model of the database from the a record stored in the DatabaseModel table. The model is a direct representation of what tables physically exists in the database. The database model also contains a list of all schema changes that have been applied to the database as a list of historical dictionary steps.

For each table, field, index and relation definition in the database model, there is a reference to the dictionary step responsible for its creation, as well as the last step update. This is useful for tracing artifact changes and origin.

### DictionaryStep Overview

A dictionary step is responsible for defining a list of schema changes and optionally importing priming data. Schema changes are actions, such as a new table, new fields in an existing table, new indexes and many more.

<img src="https://community.superoffice.com/globalassets/developer-club/articles/continuousdatabase/image003.png" title="Database Model" alt="Database Model" class="image_responsive" width="175" height="169" />

Each dictionary step is uniquely identified by its **name** and **step number** combination. While the name is generally associated with a product name or feature, the step number is usually equal to an iteration. The step number is used to indicate in which order each dictionary step is applied to the database model to ensure includes all necessary changes a present and accounted for.

The dictionary step **description** should represent a general description of what changes are performed by the dictionary step.

Let’s look at an example. Suppose a vendor called Uno creates a dictionary step that adds a string field to the contact table that is to be 25 characters in length. As seen in the figure below, the initial dictionary step number to perform that action is defined as having a StepNumber set to 1. Next, suppose Uno decides to change the string field property to support 255 characters in length. The third-party must then define a new dictionary step that sets the StepNumber to 2.

<img src="https://community.superoffice.com/contentassets/181b0b6feee340aeaa034cb06c275b9c/dictstep1.png" width="640" height="167" />

A second example is when there are two third-party integrations that make database schema changes. In addition to the previously mentioned Uno, third-party Duo comes along and adds a field to the contact table. Duo’s dictionary step must be uniquely named and the step number is then 1.

<img src="https://community.superoffice.com/contentassets/181b0b6feee340aeaa034cb06c275b9c/dictstep2.png" width="640" height="190" />

The dictionary step state property is used to indicate whether this dictionary step is an “InDevelopment” or “Released” state.

Note that third-parties must respect each other and only change tables and fields they themselves have created. Third parties should also do their best to prevent field naming collisions and use a suitable prefix for their tables and fields.

The process of making changes to the database is called “Application of dictionary steps”. Since dictionary steps contain actions such as “Add field” or “Add table”, applying them means making that change – simultaneously – to the database model and the physical database. The steps themselves are not stored in the database (only their names and numbers, for tracking purposes).

A dictionary step can only be applied once; steps with the same name are applied strictly consecutively (no gaps); each chain of steps that share a name has to start with step 1.

The result of applying steps is a changed database schema, and a corresponding DatabaseModel that describes that schema, so the code can know what the database now looks like.

### Dictionary Step Implementation

So far, the explanation of a dictionary step has only included the concept of what it is and how it contributes towards smooth evolutionary database design. So how are they defined? On one hand, there is the definition of the dictionary step and on the other there is the implementation.

In terms of API dependencies, third-parties must create a .NET assembly that references two SuperOffice assemblies for Continuous Database:

-   SuperOffice.CD.DSL.dll
-   SuperOffice.CD.DSL.Implementation.dll

Third-parties must create a class decorated with a DictionaryAttribute attribute, and the class must inherit from the base class DictionaryStep. Both the DictionaryAttribute and DictionaryStep base class are defined in SuperOffice.CD.DSL.dll.

A third-party is expected to override and implement at least one of three primary methods:

1.  Structure: tables are created, modified or dropped in the database and model.
2.  ImpFileNames: performs priming data import after Structure is complete.

CustomPriming: performs unique priming data actions or data transformations after ImpFileNames is complete, using direct SQL statements.

<img src="https://community.superoffice.com/globalassets/developer-club/articles/continuousdatabase/image006.png" width="685" height="333" />

 

Below is an example DictionaryStep that overrides the Structure and ImpFileNames.

 

CDD Example Step
<img src="images/copycode.gif" class="copyCodeImage" />Copy Code
    using SuperOffice.CD.DSL.V1.StepModel;
    using System.Collections.Generic;
    namespace SuperOffice.DevNetCddLib.DictionarySteps
    {
        [Dictionary("DevNetChat", 1, ReleaseState.Released)]
        public class ChatRoom1 : DictionaryStep    
        {
            public override void Structure()
            {
                CreateTable("DN_ChatRoom", "Contains chatroom settings")
                    .TableProperties.Replication(ReplicationFlags.Down | ReplicationFlags.Up | ReplicationFlags.Prototype)
                    .TableProperties.CodeGeneration(MDOFlags.None, HDBFlags.None, UdefFlags.None, SentryFlags.None)
                    .AddString("Name", "Name of the chatroom", 75, true)
                    .AddString("Topic", "Description of room content", 255, false)
                    .AddEnum<DNRoomStatus>("RoomStatus", "Determines if chat room is open or closed")
                    ;
            }

            /// <summary>
            /// Return the hard-coded list of standard IMP files for a new 8.1 installation;
            /// File is loaded from embedded resources in the DLL.
            /// </summary>
            /// <returns>I_ChatRoom.imp</returns>
            public override List<string> ImpFileNames()
            {
                // these are the .IMP files
                return new List<string>
                {
                    @"I_ChatRoom.imp",
                };
            }
        }

        [DbEnum("Value for field 'RoomStatus' in table 'DN_ChatRoom'.", Layer.Core)]
        public enum DNRoomStatus : short
        {
            [DbEnumMember("Set chat room status to closed.")]
            Closed = 0,
            [DbEnumMember("Set chat room status to open")]
            Open = 1,
        }
    }

 

Only implement the methods that have actual content, i.e. do not create empty overrides as that leads to degraded performance during upgrades.

The DictionaryStep is conceptually a pipeline to:

-   Perform schema changes.
-   Add priming data.
-   Transform table data.

<img src="https://community.superoffice.com/globalassets/developer-club/articles/continuousdatabase/image007.png" width="680" height="396" />

 

While none of the methods are required, each routine presents an opportunity to make database changes. Whether physical schema changes, priming data-related, or simply data transformation in the database, actions done in the pipeline are a means to ensure an agile and evolutionary database design.

 

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

Structure Example
<img src="images/copycode.gif" class="copyCodeImage" />Copy Code
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

 

Each fluent method expects a minimal set of required parameters while permitting several named parameters to override field defaults, such as *notNull: false*.

In addition to fluent methods for tables, there are fluent methods that make is easy to add and modify fields of all supported field types. There are also handy *macro-*methods to create common field patterns, such as *AddRegisteredUpdate()*. 
*AddRegisteredUpdated* adds five fields: registered, registered\_associate\_id, updated, updated\_associate\_id and updatedCount, all with standard settings.

 

ImpFileNames Method
-------------------

IMP files are a means to populate a table with priming data once the DictionaryStep has completed performing any schema changes defined the *Structure* method. The sole purpose of *ImpFileNames() *is to return a list of file names containing data that Continuous Database will discover and import.

 

CDD ImpFileNames
<img src="images/copycode.gif" class="copyCodeImage" />Copy Code
            public override List<string> ImpFileNames()
            {
                // these are the .IMP files
                return new List<string>
                {
                    @"I_ChatRoom.imp",
                };
            }

Dictionary steps can provide IMP files is one of two ways:

1.  As a physical file located in the same location as the executing assembly.
2.  As an embedded resource in the same assembly as the DictionaryStep.

 

CustomPriming Method
--------------------

*CustomPriming* is the third and final method executed during the DictionaryStep pipeline, and is used to make data transformations that are not otherwise supported. In order to support complex data transformation, the base class exposes two helper methods to perform SQL actions towards the database: *ExecuteSql* and *ExecuteSelect*.

### ExecuteSql Method

While you really should use Imp files for the bulk of priming data, *CustomPriming* is used for circumstances when you need to perform raw SQL towards existing tables. In those cases, *ExecuteSql* is there to help execute non-select SQL statements.

CDD CustomPriming
<img src="images/copycode.gif" class="copyCodeImage" />Copy Code
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
<img src="images/copycode.gif" class="copyCodeImage" />Copy Code
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

 

[Read the full article on DevNet](https://community.superoffice.com/en/content/content/database/continuous-database/) - it has more details than this overview.