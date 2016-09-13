<properties date="2016-06-24"
SortOrder="99"
/>

NetServer 3.0
=============

Released Nov 2007

Quite a few breaking changes in this release - this release included all the improvements needed to support 6.web.

Agents
------

Several new agents have been introduced, adding more sophisticated services to the NetServer services API. Searching, Archive lists, MDO Lists are now available.

Carriers
--------

The entity carriers have been expanded with several new fields. The table and field rights are carried, as well as foreign-key and extra info, as well as the basic entity data. This makes it possible for a client to check the sentry security on an entity without having direct access to the database.

SOAP
----

These changes do not affect you if you are using the SuperOffice WebService DLLs - they automatically include the new namespace and serialization. However, you cannot mix different versions of the DLLs: you cannot use a version 3 DLL to call a version 2 web service.

SOAP Namespace
--------------

The namespace for the SOAP elements has changed. You will need to regenerate any web-reference proxies. The XML namespace changed 24.april.2007. NetServer Beta 1 and CTP clients are not compatible with the latest version.

SOAP Serialization
------------------

The serialization format for the SOAP messages has changed, so you will need to regenerate any web-reference proxies you have. The XML inside the SOAP messages is quite different as of 24.april.2007.

Assembly changes
----------------

The number of assemblies used got reduced drastically:
* SuperOffice.Factory.dll
* SuperOffice.Exceptions.dll
* SuperOffice.Customization.dll
* SuperOffice.Configuration.dll

are combined into **SoCore.dll**.
SOCORE does not require database connection, and can be deployed on clients using web-services.

Namespace changes
-----------------

Quite a few namespaces got renamed and combined.
SuperOffice client specific things go into the SUPEROFFICE.CRM namespace. All CRM specific code should be in this namespace. This includes information stored in the SuperOffice CRM database and information currently held in these namespaces.

NetServer 2.x
NetServer 3.x
Description
SuperOffice.Services
SuperOffice.CRM.Services
SuperOffice.Services.Carriers
SuperOffice.CRM.Services
SuperOffice.Services.Factories
SuperOffice.CRM.Services
SuperOffice.Services.Reflection
SuperOffice.CRM.Services.Reflection
SuperOffice.Services.Sentry
SuperOffice.CRM.Services.Security
SuperOffice.Services.Switches
SuperOffice.CRM.Services.Switches
SuperOffice.Services.SOAP
SuperOffice.CRM.Services.SOAP
SuperOffice.Services.Util
SuperOffice.CRM.Services.Util
SuperOffice.Services.Implementation.\*
SuperOffice.CRM.Services.Implementation.\*
SuperOffice.Services.Proxy.\*
SuperOffice.CRM.Services.Proxy.\*
SuperOffice.Services.Stub.\*
SuperOffice.CRM.Web.Services.\*
SuperOffice.Util
**new** - helper classes and enums for everyone. Converters, template base classes, etc.
Note that some of the old namespaces, like SuperOffice.Data, will not disappear completely, in spite of the renaming sketched above.
