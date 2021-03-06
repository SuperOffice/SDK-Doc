<properties date="2016-05-11"
SortOrder="99"
/>

NetServer 3.0
=============

Released Nov 2007

Quite a few breaking changes in this release - this release included all the improvements needed to support 6.web.

Static construction functions
-----------------------------

Entities have gained static constructors to hide the inner classes. The old style used nested classes that you had to create and cast either implicitly or explicitly to get an entity.

```
    Contact c = new Contact.IdxContactId( 123 );
```

The new style uses a static function to give a similar but easier API. The inner class is hidden from view:
```
    Contact c = Contact.GetFromIdxContactId( 123 );
```

Reading properties is safe
--------------------------

The sentry will not throw a security exception when you attempt to read a hidden property. Instead the sentry will return a blank value instead of the actual value. Note that attempting change a read-only value will trigger a sentry exception. Use the Sentries property to find out the fieldrights for the property you are interested in tweaking.
Userdefined fields
------------------

The rows objects no longer have Udef helpers - these have moved up into the Entities layer.
Assembly changes
----------------

The number of assemblies used got reduced drastically:
* SuperOffice.Factory.dll
* SuperOffice.Exceptions.dll
* SuperOffice.Customization.dll
* SuperOffice.Configuration.dll

are combined into **SoCore.dll**.
SOCORE does not require database connection, and can be deployed on clients using web-services.

* SuperOffice.HDB.dll
* SuperOffice.RDB.dll
* SuperOffice.Data.dll
* SuperOffice.Security.dll

are combined into **SoDatabase.dll**. This DLL requires a connection to the database set up in the app config file.
If you are not using the database directly, you need to look at the web services documentation.

Namespace changes
-----------------

Quite a few namespaces got renamed and combined.
SuperOffice client specific things go into the SUPEROFFICE.CRM namespace. All CRM specific code should be in this namespace. This includes information stored in the SuperOffice CRM database and information currently held in these namespaces.

| NetServer 2.x                          | NetServer 3.x                              | Description                                                                                                                                         |
|----------------------------------------|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| SuperOffice.Data.Administration        | SuperOffice.CRM.Administration             | User interface independent (user-) administration functions                                                                                         |
| SuperOffice.Data.Documents             | SuperOffice.CRM.Documents                  | Document handling (Template variables are held in objects under SuperOffice.CRM.Globalization)                                                      |
| SuperOffice.Data.Meta                  | SuperOffice.CRM.Data                       | Information about tables and fields in the CRM database                                                                                             |
| SuperOffice.Data.Sentry                | SuperOffice.CRM.Security                   | Calculates who can access what data                                                                                                                 |
| SuperOffice.Globalization              | SuperOffice.CRM.Globalization              | Language and resource dependent stuff like phone, name and address formatting. Template variables and tags.                                         |
| SuperOffice.HDB                        | SuperOffice.CRM.Rows                       | Rows is easier to understand.                                                                                                                       |
| SuperOffice.HDB.Sentry                 | -                                          | Removed - not needed                                                                                                                                |
| SuperOffice.HDB.MDO                    | SuperOffice.CRM.Lists                      |                                                                                                                                                     |
| SuperOffice.RDB                        | SuperOffice.CRM.Entities                   | Entity aggregates row objects into business objects.                                                                                                |
| SuperOffice.RDB                        | SuperOffice.CRM.Archives                   | Archives are multi-column lists. These are hard-coded lists. They are superceded by the new ArchiveList namespaces, which are dynamic and flexible. |
| SuperOffice.Services                   | SuperOffice.CRM.Services                   |                                                                                                                                                     |
| SuperOffice.Services.Carriers          | SuperOffice.CRM.Services                   |                                                                                                                                                     |
| SuperOffice.Services.Factories         | SuperOffice.CRM.Services                   |                                                                                                                                                     |
| SuperOffice.Services.Reflecteion       | SuperOffice.CRM.Services.Reflection        |                                                                                                                                                     |
| SuperOffice.Services.Sentry            | SuperOffice.CRM.Services.Security          |                                                                                                                                                     |
| SuperOffice.Services.Switches          | SuperOffice.CRM.Services.Switches          |                                                                                                                                                     |
| SuperOffice.Services.SOAP              | SuperOffice.CRM.Services.SOAP              |                                                                                                                                                     |
| SuperOffice.Services.Util              | SuperOffice.CRM.Services.Util              |                                                                                                                                                     |
| SuperOffice.Services.Implementation.\* | SuperOffice.CRM.Services.Implementation.\* |                                                                                                                                                     |
| SuperOffice.Services.Proxy.\*          | SuperOffice.CRM.Services.Proxy.\*          |                                                                                                                                                     |
| SuperOffice.Services.Stub.\*           | SuperOffice.CRM.Web.Services.\*            |                                                                                                                                                     |
|                                        | SuperOffice.CRM.Data.Util                  | **new** - helper classes for the database classes.                                                                                                  |
|                                        | SuperOffice.Util                           | **new** - helper classes and enums for everyone. Converters, template base classes, etc.                                                            |

Note that some of the old namespaces, like SuperOffice.Data, will not disappear completely, in spite of the renaming sketched above.

SuperOffice.Data will contain the general query classes, the dialect base classes and so on.
