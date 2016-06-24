<properties date="2016-06-24"
SortOrder="1"
/>

Creating a custom Data Exchange agent
==================================================

The SuperOffice Expander Data Exchange (EDE, formerly DBI) module is essentially an asynchronous service for updating/copying data to/from SuperOffice Customer Service and some other source. Thanks to the columns dbi\_key and dbi\_agent\_id on several central tables in CS, we can keep track of an entry's primary key in another system, which allows us to synchronize entities (i.e. keep track of which local entities correspond to the ones in the other system).

The EDE is built up in a modular architecture, where the communication with the other system is managed using a plug-in system. These plug-ins are referred to as "agents". The EDE-engine is communicating with an agent either using a File-pipe, or HTTP. In either case, the agent will receive input formatted as XML, perform some tasks, and then return output as XML. An agent may have any number of tasks, which will be executed according to various schedules (ranging from every minute to once a week). Normally, a single task will execute something resembling a single SQL query, transfering data one way (into CS or out from CS). A typical task is "Get all companies from external source which has been updated lately". Inside Customer Service, a task is interacting with an ejScript to handle data mapping, transformations, etc.

Out of the box, we offer three agents:

* ODBCAgent. This agent allows you to connect to an ODBC DSN and perform standard SQL queries.
* SuperOfficeAgent. This agent uses the COM interface of the Sales & Marketing Windows client and supports methods for inserting/updating central SuperOffice CRM entities, such as person, contact, project, etc.
* LDAPAgent. This agent uses LDAP to connect to a directory (such as Microsoft Active Directory) to read data. It is normally used to retrieve users from AD to integrate them as persons (customers) or users in SuperOffice CS.

**This article will demonstrate how to create your own custom agent.**

1. autolist
