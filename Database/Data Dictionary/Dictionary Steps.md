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
```
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
```
 

Only implement the methods that have actual content, i.e. do not create empty overrides as that leads to degraded performance during upgrades.

The DictionaryStep is conceptually a pipeline to:

-   Perform schema changes.
-   Add priming data.
-   Transform table data.

<img src="https://community.superoffice.com/globalassets/developer-club/articles/continuousdatabase/image007.png" width="680" height="396" />

 

While none of the methods are required, each routine presents an opportunity to make database changes. Whether physical schema changes, priming data-related, or simply data transformation in the database, actions done in the pipeline are a means to ensure an agile and evolutionary database design.

 

