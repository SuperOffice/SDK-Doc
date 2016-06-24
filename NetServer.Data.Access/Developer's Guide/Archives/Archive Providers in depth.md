<properties date="2016-05-11"
/>

Archive Providers - theory and overview
=================================================================

The purpose of the Archive Provider system is to fulfill the following requirements:

* Translate from a highly normalized database to a flat data model, suitable for multi-column lists and reports

* Contain significant business logic that affects what rows are fetched and how certain columns are calculated

* Allow columns that are more or less complexly derived from the underlying data

* Offer searchability (i.e., the ability to use columns to restrict the rows fetched) on as many columns as possible, including some of those that have a complex relationship to the database

* Generate minimal queries to avoid fetching unnecessary data

* Build up complex data streams from reusable building blocks

* Be extensible, both internally and for partners, in both the row and column dimensions

This is a fairly demanding set of requirements, and it reflects the fact that a lot of the functionality in SuperOffice is expressed through the two-dimensional lists, called "archives", that you find throughout the application.

The present architecture, framework and concrete implementation of the archive providers represents somewhat less than one man-year of design and programming, and contain about xxx lines of code. Of that, a large percentage is in base classes that contain common code, and another large chunk is in elementary building blocks that can be combined to form concrete providers.

When a new archive provider is required, it will in many (most?) cases be possible to reuse significant code from the existing system, either through base classes, helper objects or pieces of existing providers.

This document was written to explain how and why the system has been put together. There is extensive documentation in the code, that explains the usage of the particular classes, properties and methods; but documentation at that level generally does not explain the why's and how's - which is what you should find here.

Interfaces
====================================

Terminology
-------------------------------------

An archive provider is a mechanism that delivers data in a form suitable for display or processing as a two-dimensional sheet, much like a spreadsheet. There are several terms that are used throughout the code that need to be precisely defined:

* A **row** is one row of data, typically displayed as one line. Data is delivered one row at a time to the client.

* Each row consists of one or more **columns**, where each column has a (predictable) name, and several kinds of content (display value, raw value, tooltip, ...)

* Each row also has a name, called an **entity**. The entity name is a string and can be thought of as defining a row type. A provider will always define at least one entity.

* The combination of entity and **primary key** (a 32-bit integer) uniquely identifies a row in the result from a provider

More details on how rows, columns and entities are defined can be found elsewhere in this document.

Interface definition and composition
--------------------------------------------------------------

The high-level interfaces for the archive provider system are shown in the following figure:

<img src="Archive%20Providers%20in%20depth_files/image001.jpg" width="1135" height="1140" />
There are several points to make about this diagram (which, incidentally, is sometimes used to test prospective new developers):
* The IArchiveProvider interface is the one that the outside world relates to; and as the names suggest, it defines an archive provider as something that has rows, columns and entities.

* Internally, the interface is composed out of fragments or aspects, that each define a smaller piece of functionality. The reason for this way of defining interfaces is that different aspects are useful in different contexts; for instance, it is meaningful to talk about columns without talking about rows in some cases.

* In the diagram, the leftmost column consists of the basic aspects which do not inherit from anything else. Each interface defines one independent kind of functionality that various components of the provider system implement.

* The centre-right column defines interfaces that are actually implemented by concrete classes. Note that in addition to inheriting various left-side aspects, these interfaces also add some properties and methods of their own. This is because the centre-right interfaces are meant to represent something it is useful to actually implement, while the left-side interfaces are more abstract and are meant to be independent of implementation - they hide that which the client does not need to know, while the centre-right interface add stuff that any reasonable implementation actually requires.

* It is quite possible to write a class that implement IArchiveProvider directly, with or without the use of various helper classes. Such implementations exist, both internally and externally. However, most concrete archive providers use NetServer to access the SuperOffice database through queries - and for those, the IArchiveQueryProvider and IArchiveMultyQueryProvider interfaces are more useful as an implementation basis.

* IArchiveExtend captures the extensibility dimension of the archive provider system. An archive provider can **extend another** provider, by implementing the IArchiveProviderDoesExtent interface. This works if the "parent" provider itself implements IArchiveProviderExtensible, which makes available the hooks needed to modify the parents' query.

* A component that implements IArchiveExtender is itself extensible, extends some parent provider, and (through IArchiveHasColumns) adds columns to the final data set of the complete provider. This interface is the basis for the vast majority of the current code.

* Finally, everything except for the left-hand column inherits the IPlugin interface, signaling that these are NetServer plugins. The essence here is that the SuperOffice-written code is not privileged relative to partner extensions, and the whole system is from the ground up designed to be extensible, internally and externally.

Data classes
--------------------------------------

There are several other classes not listed in the interface diagram that constitute essential parts of the system; these are the types that carry data into and out of providers.

### ArchiveColumnInfo

This is the class that describes one column - it is part of the metadata for a provider. Each column that a provider knows about has its own instance of this class, and a call to the GetAvailabaleColumns method will return a list of all the columns known to the particular provider. Each column has a name, which is code-friendly id (a string that does not change with language), as well as a display name and tooltip, which generally contain resource tags. There is also a display type, describing what kind of value this column contains, and a restriction type, which defines whether this column can be used as a search column (restriction), and if so of what type.

If a provider has been built up of a hierarchy of subproviders and extenders, the GetAvailableColumns method will return the union of all contributions.

The rationale is that the content of ArchiveColumnInfo should be enough to completely drive a "choose what columns you want to display" kind of GUI. Note that most providers will offer a large number of columns, and so it is often reasonable to filter the column list before presenting it to a user - but that is the applications' responsibility.

A client requests columns by using the SetDesiredColumns method.

### ArchiveEntityInfo

An entity is the same as a row type, and every provider must define at least one row type. The ArchiveEntityInfo class contains a programmatic name, a display name and tooltip, and whether the entity is optional. The idea is that optional entities can be shown as checkboxes in a flexible GUI - or they can be  ignored, again this is the responsibility of the client. The GetAvailableEntities method will return the complete set of entities offered by a provider.

By using the SetDesiredEntities method, clients can signal what entities they want in the result.

### ArchiveRestrictionInfo

To specify a search restriction, we need to (at least) define the column and operator; and usually also at least one value. Archive providers are - at the interface level - **not bound to the database**; indeed isolation from the database is part of their purpose. Search criteria, called **restrictions**, are therefore defined in terms of columns, and operators in terms of restriction types; none of these bear a necessary direct relationship to the database. Of course, in practice most archive providers do access the database and there are base and helper classes that handle all standard mappings. However, the isolation is the reason why the archive provider system defines its own column/operator/value system.

An ArchiveRestrictionInfo can contain an array of values, and it can contain subrestrictions. So far, subrestrictions are only used in the Saint system. There is a separate subsystem in NetServer that can be used to obtain complete metadata to drive a search GUI for any provider, as well as save and retrieve sets of restrictions on a per-user/per-provider basis. The **Find** and **Dynamic Selection** systems use this functionality, which is independent of the actual providers (and thus automatically adapts to any new provider as well).

### ArchiveRow

An ArchiveRow is what you ultimately want from an archive provider. It represents one single row of data, and contains some fixed items as well as a dictionary of ArchiveColumnData items. The fixed items include the entity name and primary key (which are unique across the set of results from one archive provider run), a link hint for navigation and security information for the row.

### ArchiveColumnData

One cell in a result set is represented by one ArchiveColumnData instance. This class contains a column name (which matches one of the GetAvailableColumns instances), a display text - formatted by the CultureDataFormatter to surmount cultural problems with converting data types to string and back, and tooltip and link (navigation) hints. If you are working directly with NetServer, then you can also get raw data (for instance, a real Int32 or System.DateTime).

### Common features

All of the above classes have lots of instance and static methods that help with their management - converting arrays into indexed dictionaries, finding one instance within a collection, and other common tasks. They also have ToString() methods that have been overridden to help with debugging.

Client usage scenarios
================================================

The IArchiveProvider interface defines a fairly simple yet very powerful interaction model between the client and the archive provider. Note that the term "client" here is used loosely - the client can be a real GUI, but it can just as well be some hard-coded internal process that just happens to use an archive provider to fetch a load of data it then uses for some other processing. Simply put, whoever calls an archive provider is a client in this context.

Basic rules
-------------------------------------

There are five phases in the interaction between a client and an archive provider, and one of them is optional. The basic sequence is:

1. Create a provider instance - ArchiveProviderFactory is the common creation point for all providers.

2. (Optional) Retrieve metadata from the provider about what it **can** do

3. Tell the provider what you **want** it to do - columns, entities, restrictions, orderby, paging; hard-coded or somehow configurable according to application needs

4. Fetch data, by iterating over the ArchiveRow enumerator you get from GetRows()

5. Close the provider to release all resources held by it

Note that an archive provider instance is a single use object, valid for one (1) of these cycles. A client cannot re-use an existing provider instance, and those who implement providers do not need to take re-use into account.

Simple scenario - known data
------------------------------------------------------

In this scenario, the client knows what it wants, and simply needs to get it with minimum fuss. For instance, suppose we want to get the **position,** **firstname** and **lastname** columns from the **Person** provider, skipping retired persons, where **lastName** contains the letters "vo". For the moment, never mind how we know all these names...

IArchiveProvider provider = ArchiveProviderFactory.Create( "Person" );

provider.SetDesiredColumns( "position", "lastName", "firstName" );

provider.SetDesiredEntities( "person" );

provider.SetPagingInfo( int.MaxValue, 0 );

 

ArchiveRestrictionInfo\[\] restrictions = new ArchiveRestrictionInfo\[1\];

restrictions\[0\] = new ArchiveRestrictionInfo( "lastName", "contains", "vo");

provider.SetRestrictions( restrictions );

 

foreach( ArchiveRow row in provider.GetRows() )

    {
       //process row data, for example like this:
       string positionText = row.ColumnData\["position"\].DisplayText;
       string lastNameText = row.ColumnData\["lastName"\].DisplayText;
       string firstNameText = row.ColumnData\["firstName"\].DisplayText;
    }

provider.Close();          // remember to close the provider to release resources

In the first line we call on the factory to create the proper provider. Given that the provider system is extensible and consists of an unknown number of plugins, a factory mechanism is the preferred way of instantiating objects; that way you are sure to pick up all available overrides and extensions. We then tell the provider what columns we want, the entity we want, and how many rows (in this case, all available as one continuous stream).

A restriction is always needed. Most standard providers offer a **getAll** "virtual column", which you can use as a restriction to say "I want everything" - if you give no restrictions, and empty result is entered. This is to guard against inadvertently trying to fetch the whole database...   Here we make a simple restriction, since we know that **contains** is a valid operator for restriction type **string**, which is the restriction type for the **lastName** column.

The GetRows() method returns an iterator, not a collection. This is an important feature, because it means that data streams from the database, through the provider (one row at a time), and to the client. The amount of storage consumed is thus more or less independent of the amount of data fetched, which is definitely a design requirement. One consequence is that all processing is done one row at a time, and thus business logic that depends on a global overview must be implemented separately - either outside the provider, or inside by using the InMemoryProvider base class. In that case storage requirements are linear with data fetched, and one should take potential result set sizes into account before using this strategy.

Metadata
==================================

Columns
---------------------------------

By saying

List&lt;ArchiveColumnInfo&gt; columns = provider.GetAvailableColumns();

a client can obtain a list of available columns from a provider. It can then populate a GUI based on the DisplayName, DisplayTooltip and IconHint properties of each column info object, and let the user choose whatever set of columns that should be displayed. For each such column it is the Name member that must be saved, since an array of these strings is the parameter to the necessary SetDesiredColumn call.

As mentioned above, the column list for some providers can be huge. Some columns are marked with Visible=false, which is a hint from the provider that the column should not be shown (for instance, ID columns usually have this marking). In any case, it is the applications' responsibility to have a filter list to exclude columns that should not be displayed to "normal" users; and this should be done by filtering columns, not by having a list of columns to be shown. A filter list will let through any new columns added by partner- or user-defined extensions, while an allowed-columns list would not, thus breaking extensibility.

<img src="Archive%20Providers%20in%20depth_files/image002.jpg" width="606" height="579" />
The list of columns in this dialog is driven by the result from GetAvailableColumns().  The application has performed some filtering, and also added the red style for a column it considers mandatory (the archive provider has no opinion on the matter). There is another system, accessed as an MDO list, that is available to store and retrieve what columns have actually been selected for display, but like the storage of restrictions this is an addition to the archive provider core system.
Available columns are a function of the provider and its subcomponents. Many columns are hardcoded in the sense that there is code that explicitly declares a column, and other code that explicitly (or through a base class) populates it with data. However, there is nothing in the architecture that prevents dynamic generation of column metadata, and in the case of Saint status monitors and user-defined fields that is very much the case. The only important contract is that once a column name appears in the return value from GetAvailableFields, the provider **must** handle references to the column in SetDesiredFields, SetRestrictions and SetOrderBy (subject to CanRestrictBy and CanOrderBy limits) without crashing. A provider is thus prohibited from changing its mind about a column - if choices made by the client make a column irrelevant then an empty or null value should result, but there should be no crashes.

Entities
----------------------------------

The entities marked as mandatory (Optional = false) are always returned by an archive provider. However, the provider may choose to mark one or more entities as optional, and clients then have to ask for them using the SetDesiredEntities method.

List&lt;ArchiveEntityInfo&gt; columns = provider.GetAvailableEntities();

In 6.Web, optional entities cause checkboxes to be shown in the archive toolbar:

<img src="Archive%20Providers%20in%20depth_files/image003.jpg" width="271" height="71" />
As with column names, the idea is that any extensions that add more optional entities will cause the GUI to automatically adapt. Entities that have Optional = false generally do not show up the GUI, since they cannot be turned off in any case.
Sort order
------------------------------------

One of the properties of ArchiveColumnInfo is CanOrderBy. If this is set to true, then the archive provider will accept the column name as an argument to the SetOrderBy method, and honour the request - that is, deliver the result set ordered by that column. Clients can request ordering by multiple columns in priority order, with individual ascending/descending sort. Note that the ordering is usually done in the database, since (as mentioned earlier) archive providers look at data **one row at a time** with little or none inter-row context. It is therefore the database sort order that applies, and this will vary with the cultural setup of the database.

As a rule, columns that have a simple, direct mapping to database fields will offer CanOrderBy, and there exists base class functionality to make this happen automatically. However, an archive provider is free to implement orderby algorithms for any columns; that is up to the designer of the individual provider. Of course, a column that contains the result of some complex calculation or concatenation of fields will be hard to "order by", but the architecture itself places no constraints.

Restrictions
--------------------------------------

A "restriction" is a column that has the CanRestrictBy property set to true, and a non-empty RestrictionType member in its ArchiveColumnInfo. When an archive provider defines a column in this way, it says to the world that the column can be used to restrict the rows in the result set. The column may or may not map to a database field; as with orderby, it is up to the provider to implement whatever functionality it deems proper. In the standard providers in SuperOffice most restriction columns do map to database fields, but sometimes there is more or less complicated functionality in between. This all comes back to the purpose of providers, to map between a database model and some "simpler", more flat model that the outside world needs to see.

Base class functionality exists to automatically implement restriction-to-sql mapping for simple columns of all the standard types. The RestrictionType of a column is important, as it defines what kinds of values and operators are valid for that column. As with other parts of the system, there is a set of classes that will provide helpful information, such as an operator list, or hints for values, given the restriction type. This system, since it works with restriction types and operators, will be available automatically to any column of any provider, as long as it stays within the known set of restriction types.

The restriction type does not have to be the same as the display type. For instance the display type might be an icon, while the restriction type is an integer or a string. In such cases the provider needs to implement the required mappings, which might be on the display, restriction or both.

A fundamental principle when setting restrictions is that each component of a provider examines the restrictions being set, and reacts to those it knows - indicating with a return value whether at least one restriction was recognized. Restrictions that are not recognized are just passed on, since the archive providers are built up from reusable blocks that do not know about each other.

Restrictions are sometimes used as a "back channel" to pass in data to archive providers, not just restrict what is fetched from a database or other source. This trick is used extensively in the Participants provider, where a lot of state (unsaved participant in an unsaved, new appointment) is in-memory but needs to be combined with database data (such as person names). In such cases, the component that recognizes such special restrictions can also choose to remove them from the restriction set.

Another variant is used in the SelectionMember providers, where an outer component recognizes one restriction (selection\_id), looks up the selection record and then, if it is a dynamic selection, replaces the selection\_id restriction with the actual, current criteria saved for the selection. This restriction set then gets passed on to the underlying member providers, which in this way do not really have to know that they are working with a dynamic selection (the same code handles Find and Add/Remove members as well).

Providers, Extenders and Joiners
==========================================================

So far, the discussion has been mostly at the level defined by the interfaces, and thus not bound to any particular implementation. NetServer contains a total of 58 providers, and the vast majority are implemented using a common set of base and helper classes. Most of the providers fetch data from the database, and most of the columns offered by these providers are trivially mapped to database fields. There are a total of about 300 source files with 27.000 lines of code.

To support this functionality, a modular architecture that builds up providers from reusable building blocks was designed and is available to use. This architecture has five major components:

1. Providers - the outer level

2. Extenders - one extender handles one table

3. Joiners - compose multiple extenders in a tree structure

4. Base classes for 1-3

5. Independent helper classes

Providers
-----------------------------------

A provider is a class that implements the IArchiveProvider interface and is tagged with an ArchiveProviderAttribute. Providers that get data from the database via NetServer can be made by implementing the IArchiveQueryProvider interface, which contains some additional properties. The "query" word in the interface name suggests that this is a provider whose execution results in **one single query** to the database, and one stream of data. Most of the standard NetServer providers implement this interface, for which there is a comprehensive base class. One of the core responsibilities of a QueryProvider is that it owns the **Select** object that constitutes the query, and indicates a primary table.

Several of the important archives in SuperOffice show multiple data types. A classic example is the Activity Archive, which shows appointments, documents and sales. These have different but overlapping sources, and offer different but overlapping columns. For instance, the **date**, **text** and **icon** columns are common to all, while the source of data for each column is different for each row type.

This is solved using the concept defined by IArchiveMultiQueryProvider. The idea is simple: aggregate two or more independent sub-providers into one data stream. The set of available columns from the multi provider is the union of available columns from all subproviders, with duplicates removed. Entities are combined in the same way. When the client calls SetDesiredColumns, the call is passed to each subprovider, which reacts to the columns it recognizes and ignores the others; entities and restrictions are handled in the same way.

During execution, subproviders that return a **false** result from SetRestrictions (indicating they did not understand any of the restrictions) are eliminated, and the rest are asked to provide one row each. The desired OrderBy is then used to pick one of these rows as the first to be returned; that provider is asked to fetch another, and the cycle repeats until all providers are exhausted or the correct number of rows (see SetPagingInfo) has been returned.

Any provider can be used as a subprovider in a MultiQueryProvider, so one can compose providers in arbitrary deep trees. This is an extremely powerful paradigm, as it allows us to break apart complex, heterogenous systems into (mostly) independent parts.

Extenders
-----------------------------------

If a provider has a more or less fixed query, and fetches data from a table that no-one else is interested in, then it would make sense for it to declare columns, set up the query, and perform all the processing directly. However, this is a fairly rare situation for providers made by SuperOffice, since we usually work against general tables like contact, person or appointment. Partners making single-use solutions are more likely to be in this situation.

In any case, if there is reason to believe that the formatting, restriction and query logic related to one table will be used in more than one provider, then it is important to write it in a reusable way. This is where the concept of **Extender** comes in, defined by the IArchiveExtender interface. An archive extender is a class that

1. Has columns, implementing GetAvailableColumns, SetDesiredColumns, SetOrderBy and SetRestriction

2. Is itself extensible, through AddExtensionProvider and some helper properties

3. Extends something else (that is extensible)

4. Supports name prefixing for column names

Note that an extender generally does **not** have any relationship to **entities**, since extenders operate on fragments of rows (the columns from one table only), and are meant to be reusable between different providers. For instance, the person extender is used for persons in appointments, project members, selection members... and all of these are different entities, but still the person logic is the same.

As with providers, there is a base class that contains most of the functionality needed to implement all these methods and properties; the individual extender only needs to declare its columns and (at the least) override one method to map the columns to the correct fields in its table. Thus individual extenders can be down to a few dozen lines long for trivial cases. Of course, if there is a lot of logic associate with columns, then the extender grows, because that is where you write the code that populates columns with values, and processes any non-standard restrictions and orderby's.

In many cases, small subtrees (bushes?) of extenders form a logical unit. For example, **person** takes along **phone**, **address** and **text** to make a combination that reflects the wider person entity, corresponding to what the user sees in the person dialog. There are several ways this *could* have been done, but the current design is that the Person extender itself creates and connects those sub-extenders it wants. This has proved to work reasonably well and means that top-level providers do not have to know about the details of the person substructure - if you want to include person functionality in you provider, you add the person extender and the rest comes automatically.

The drawback of this approach is that there may be cases where you do **not** want to include subtrees. As long as the client does not select any columns from an extender, the base class mechanics will ensure that the extender is excluded from the query and none of its code is run; however there are cases where you also do not want columns from a subtree to be added to the available columns of the provider. To handle that, some extenders have flag enums that can be used (through the constructor) to select what functionality should be activated.

The classes that implement extenders come in two variants, bases and joiners. Joiners are described in the next section. An extender **base** is a class the contains the declaration of columns, population, restrictions and orderby - but **not** any code that will actually create a TableInfo object nor join it to any other part of the provider's root query. ExtenderBase classes are abstract and atomic, and very reusable. In NetServer there is exactly one ExtenderBase class per table involved in any provider (so there is one PersonExtenderBase, and no other extenders deal with the person table directly).

A very simple extenderbase can look like this:

    /// &lt;summary&gt;
    /// Base class for fetching data from the Address table - no special processing at all
    /// &lt;/summary&gt;
    /// &lt;remarks&gt;
    /// One possible feature would be to format Zip codes according to address format guidelines. Another
    /// one would be to provide a 'formattedAddress' column, equivalent to a multi-line label...
    /// &lt;/remarks&gt;

public abstract class AddressExtenderBase : TableExtenderBase&lt;AddressTableInfo&gt;

    {
       \#region Columns to be picked up by reflection
       protected ArchiveColumnInfo \_colAddressId = new ArchiveColumnInfo( "addressId", RC.SR\_ADDRESS\_ID, RC.SR\_ADDRESS\_ID\_TOOLTIP, Constants.DisplayTypes.Int,
             AllowOrderBy, Invisible, ColumnHelper.DefaultNumberWidth, Constants.RestrictionTypes.Int );
       protected ArchiveColumnInfo \_colLine1 = new ArchiveColumnInfo( "line1", RC.SR\_AL\_ADDRESS1, RC.SR\_ADDRESS\_LINE1\_TOOLTIP, Constants.DisplayTypes.String,
             AllowOrderBy, Visible, ColumnHelper.DefaultStringWidth, Constants.RestrictionTypes.String );
       protected ArchiveColumnInfo \_colLine2 = new ArchiveColumnInfo( "line2", RC.SR\_AL\_ADDRESS2, RC.SR\_ADDRESS\_LINE2\_TOOLTIP, Constants.DisplayTypes.String,
              AllowOrderBy, Visible, ColumnHelper.DefaultStringWidth, Constants.RestrictionTypes.String );
       protected ArchiveColumnInfo \_colLine3 = new ArchiveColumnInfo( "line3", RC.SR\_AL\_ADDRESS3, RC.SR\_ADDRESS\_LINE3\_TOOLTIP, Constants.DisplayTypes.String,
             AllowOrderBy, Visible, ColumnHelper.DefaultStringWidth, Constants.RestrictionTypes.String );
       protected ArchiveColumnInfo \_colCounty = new ArchiveColumnInfo( "county", RC.SR\_SEARCH\_COUNTY, RC.SR\_SEARCH\_CRITERION\_CONTACT\_COUNTY\_TOOLTIP, Constants.DisplayTypes.String,
             AllowOrderBy, Visible, ColumnHelper.DefaultStringWidth, Constants.RestrictionTypes.String );
       protected ArchiveColumnInfo \_colCity = new ArchiveColumnInfo( "city", RC.SR\_SEARCH\_CITY, RC.SR\_SEARCH\_CRITERION\_CONTACT\_CITY\_TOOLTIP, Constants.DisplayTypes.String,
             AllowOrderBy, Visible, ColumnHelper.DefaultStringWidth, Constants.RestrictionTypes.String );
       protected ArchiveColumnInfo \_colZip = new ArchiveColumnInfo( "zip", RC.SR\_SEARCH\_ZIP, RC.SR\_SEARCH\_CRITERION\_CONTACT\_ZIP\_TOOLTIP, Constants.DisplayTypes.String,
             AllowOrderBy, Visible, ColumnHelper.DefaultStringWidth, Constants.RestrictionTypes.String );
       protected ArchiveColumnInfo \_colState = new ArchiveColumnInfo( "state", RC.SR\_SEARCH\_STATE, RC.SR\_SEARCH\_CRITERION\_CONTACT\_STATE\_TOOLTIP, Constants.DisplayTypes.String,
             AllowOrderBy, Visible, ColumnHelper.DefaultStringWidth, Constants.RestrictionTypes.String );
       \#endregion

 

       protected override void InnerModifyQuery()
       {
             MapIdField( \_ourTable.AddressId );
             MapSimpleReturnField( \_ourTable.AddressId, \_colAddressId );
             MapSimpleReturnField( \_ourTable.Address1, \_colLine1 );
             MapSimpleReturnField( \_ourTable.Address2, \_colLine2 );
             MapSimpleReturnField( \_ourTable.Address3, \_colLine3 );
             MapSimpleReturnField( \_ourTable.County, \_colCounty );
             MapSimpleReturnField( \_ourTable.City, \_colCity );
             MapSimpleReturnField( \_ourTable.Zipcode, \_colZip );
             MapSimpleReturnField( \_ourTable.State, \_colState );
       }

 

       protected override void InnerPopulateRowFromReader( SoDataReader reader, ArchiveRow row )
       {
       }
    }

Joiners
---------------------------------

If one draws a graph that represents a query as a hierarchy, where tables (either as return fields or restrictions) are nodes and joins are edges, then an ExtenderBase class will represent a node, and a Joiner class will be an edge. Since joiners inherit from extenderbases, an instance of a joiner is equivalent to a node plus its (single) upward-pointing edge. For instance, suppose we wish to fetch information about sales plus connected contacts and persons - the SQL query might look like

SELECT s.heading, s.probability, c.name, c.department, p.firstname, p.lastname, pt.text
FROM sale s
LEFT OUTER JOIN contact c on s.contact\_id = c.contact\_id
LEFT OUTER JOIN person p on s.person\_id = p.person\_id
LEFT OUTER JOIN text pt on p.text\_id = pt.text\_id

The corresponding query graph is

<img src="Archive%20Providers%20in%20depth_files/image004.gif" width="436" height="338" />

 

 

 

 

 

 

 

 

 

The structure of the extenders involved corresponds exactly to this graph. The code handling each node is an ExtenderBase, while the code that provides the edges (the joins) is in Joiners. An instance of a Joiner inherits from the extenderbase and thus corresponds to the node and the edge going up to the parent node. As a result, joiners are typically very small classes with a standardized structure, that simply take a query and a parent table reference as input. They create a new TableInfo representing "this" and join it to the parent in the proper way (INNER, LEFT OUTER); they then return the newly created TableInfo instance up to the base class. Since the base class is an ExtenderBase it now has a concrete table to work against and can run its logic (that requests ReturnFields, sets up restrictions and picks values from the result set).

Joiners are usually strongly typed objects, so there is one for each combination of tables that occurs. In the graph above, there would be one for SaleContact, one for SalePerson, and one for PersonText. Similarly we would find an AppointmentContact joiner for the case where we have an appointment row and want to add contact information. Both SaleContact and AppointmentContact inherit from ContactExtenderBase, and just add the correct join logic by implementing the abstract method SetJoin(), like this:

    /// &lt;summary&gt;
    /// Create a Contact tableinfo and join it to the parent Sale
    /// &lt;/summary&gt;
    /// &lt;returns&gt;ContactTableInfo of the newly created info instance&lt;/returns&gt;

protected override ContactTableInfo SetJoin()

    {
       ContactTableInfo ourContactTable = TablesInfo.GetContactTableInfo();
       SaleTableInfo parentSaleTable = (SaleTableInfo)Parent.TableToExtend;
       SetLeftOuterOrInnerJoin( parentSaleTable.ContactId.Equal( ourContactTable.ContactId ) );
       return ourContactTable;
    }

 

There are about 30 extenderbase classes, that each cover one particular table. There are about 60 joiners, each representing one combination of two extenderbases; together they cover all combinations currently needed for the archive providers for 6.Web.

Base and helper classes
-------------------------------------------------

While it is quite possible to implement the IArchiveProvider interface *ab initio*, this is seldom optimal. There exists a lot of code that is applicable to almost any kind of provider or extender, either as a publicly available base class or as a helper. Functionality that is applicable in may contexts, such as the collection and management of column definitions (feeding GetAvailableColumns, and keeping track of what was requested in SetDesiredColumns) is available as a helper class. Functionality that is more strictly tied to particular subjects, such as extenders (where we know we are dealing with netserver access to a database) is designed as a base class.

<img src="Archive%20Providers%20in%20depth_files/image005.jpg" width="908" height="1141" />
This figure shows the main relationships.  Concrete archive providers usually inherit from either MultiQueryProviderBase or QueryProviderBase depending on whether they are aggregate or single-query providers. Extenders inherit from TableExtenderBase. The base classes contain references to helper classes that handle columns, entities and extensions, and also provide facades that map the helper class methods and properties on to the interfaces. The final result is that derived classes are provided with an environment where "boilerplate" code, i.e., code that can be more or less mindlessly copied, is absent.
To illustrate actual usage, the bottom of the diagram shows examples of concrete classes that derive from the base classes: RelationProvider is a many-channel provider that feeds the relation archive on the company card; and PersonProvider is a single query provider that is used in the Person archive on the company card; The TextExtenderBase class is an Extender that handles records from the text table. ContactInfoTextExtender is a joiner that adds the text info field to a contact extender, by doing two things - it generates the proper join, and restricts the type member of the text record to exclude other kinds of text than the Info (paperclip note).

The base classes generally follow the **Template Method** pattern ( [Wikipedia](http://en.wikipedia.org/wiki/Template_method_pattern), [C\# definition](http://www.dofactory.com/Patterns/PatternTemplate.aspx)). This means that the base class implements the methods of the interface, while derived classes "fill in the blanks" by implementing specific abstract methods defined by the base class to handle specific tasks. As an example, the ExtenderBase class defines the abstract methods InnerModifyQuery, InnerPopulateRowFromReader, and SetJoin. A class such as AddressExtenderBase above will implement InnerModifyQuery to map its columns to actual table fields, and possibly do other query processing (add some extra fields it needs). It may also put logic into InnerPopulateRowFromReader to handle column population that is not handled by the base class. However, it does not implement SetJoin(), since that is the province of a joiner; and for that reason, AddressExtenderBase is still an abstract class.

A derived Joiner will implement SetJoin and complete the derivation, leading to a concrete class that can be instantiated. During execution, the base class code will first call SetJoin to obtain a TableInfo object; then call the InnerModifyQuery so that the query can be prepared; and then run code that looks at mappings and does any query modification. This will be done for all extenders in the query graph. When that is finished, the provider base class (which controls the process) will execute the query (all extenders have now had a chance to add their bits to it), and then for each row the base class will populate the fields it has knowledge about (through the MapSimpleField calls). Having done that, the extender base class will call InnerPopulateRowFromReader to allow custom population logic to run. Again, this process is repeated for each node of the query graph. Finally, the result row (where all extenders have contributed columns according to SetDesiredColumns) is returned to the client and the cycle repeats.

Important base classes are:

* TableExtenderBase - base class for extenders that handle one table, and indirectly their derived joiners

* QueryProviderBase - base class for providers that implement IArchiveQueryProvider

* MultiQueryProviderBase - base class for providers that implement IArchiveMultiQueryProvider, and aggregate multiple subproviders

* ExtensibleColumnsBase - common base of ExtenderBase and QueryProviderBase

There are also two specialized provider bases called InMemoryProviderBase and BufferedQueryProviderBase, for those cases where the logic is so complex that it needs to have all rows available, i.e., buffered; or where the row source is such that it is easier to get everything and then just filter, sort and choose columns in memory. The details of the base class hierarchy are slightly more complex and are summarized in the following figure:

<img src="Archive%20Providers%20in%20depth_files/image006.jpg" width="1167" height="536" />
For most purposes, inheriting from QueryProviderBase or TypedQueryProviderBase for providers and TableExtenderBase for extenders will cover all standard functionality, leaving only field mappings and truly custom logic for the derived classes. The rest of the base classes are useful in more specialized scenarios, where it is better to look at actual examples in the code.
Archive Row Types
-------------------------------------------

The basic return type from an archive provider is an ArchiveRow, and this is a fully generic object. That means that it can represent any kind of row with any number of columns. However, there are cases where it would be more convenient to have a more typed version of the row - one that guarantees the presence of certain columns, and has properties that will access these columns. The theory is that this is easier to understand for developers who are not experts on the system who don't know the exact name and meaning of all the columns offered by the different providers.

The service layer interfaces in NetServer only exist in the generic, untyped version. If you are working directly with NetServer and programming directly against the provider interfaces, then it is possible to create and/or use the typed interfaces, where they exist. This possibility is the reason for the &lt;RowType&gt; template parameter that is present in several of the base classes. To use the standard, generic row type simply refer to ArchiveRow.

When creating a typed provider, there are several items that must be considered.

* What columns should be present in the typed interface? The generic interface will still be there.

* What does it cost to fetch these columns (because they will have to be fetched always)?

* How to ensure that the provider knows it must populate the columns

By using the right combination of base classes and derivation, such a typed variant can be created fairly easily. As an example we can look at the FindProject provider, which can be used in a typed version to return an ArchiveProjectRow. The first part is the definition of ArchiveProjectRow, which inherits from ArchiveRow, defines a set of public string constants that map the desired always-present columns to the actual column names of the underlying provider, and also defines properties that get the corresponding values from the generic row data.

The string constants have to follow the naming convention that they start with "Column", and that the rest of their name corresponds to a value property of the row class. The reason is the use of reflection elsewhere in the system.

Second, a method is added to the ArchiveProviderFactory to return the specific provider type, instead of the generic IArchiveProvider. This method calls the generic, standard Create method, but uses templating and casting to give back a typed result.

Next, derive the concrete provider class from TypedQueryProviderBase instead of QueryProviderBase. This will bring in logic that binds to a helper class and reflects over the row class, to determine the names of must-have columns. This also brings in a new interface, IArchiveTypedProvider, which has the additional method **SetAdditionalColumns**.

SetAdditionalColumns is how one orders desired columns from a typed provider, instead of SetDesiredColumns. SetAdditionalColumns will automatically add the standard columns declared as string constants in the row type class to the provider's desired column list.

Only a few of the existing providers have typed interfaces, and it is by no means certain that the additional cost and complexity are justified. As long as the Service layer interfaces only expose the generic interface, usage of the typed interfaces is probably quite small.

 

 
