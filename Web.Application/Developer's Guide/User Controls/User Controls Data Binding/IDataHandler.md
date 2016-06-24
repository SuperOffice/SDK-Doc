<properties date="2016-06-24"
SortOrder="15"
/>

IDataHandler interface is responsible for loading, saving, deleting, clearing and creating new namespaces to the corresponding datasource. A new IDataHandler instance will be created from the configuration values in the XML base file by the PluggableHandler, and necessary information will also be passed to it during the instantiation, so that it knows which datasource to connect to.

All implementations of this interface must provide a constructor taking an IDictionary argument which contains pairs of string type key-value pair to provide necessary information about the datasource. In theory a single data handler could expose multiple objects, but in practice each data handler tends to expose a single object via a single carrier name.

CRM.web uses the IDataHandler interface which is located in the SuperOffice.CRM.Web.Data namespace. IdataHandler interface includes methods like Load( string carrierId ), Save(),New(),New(string carrierId),Delete() and Clear().

We can take any DataHandler class from the CRM.web which is located in the SuperOffice.CRM.Web.Data namespace. With those classes we can inherit from the DataHandlerBase class. Mainly we are not going to override the methods which are in base class we override the Initialize() method by calling the base class’s initialize() method and then  adding a data carrier to it.

See Also:

[Data Handlers](IDataHandler.md)
