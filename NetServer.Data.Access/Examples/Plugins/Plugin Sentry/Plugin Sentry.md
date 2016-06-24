<properties date="2016-05-11"
SortOrder="6"
/>

Plugins are created using a Factory class. The Factory class creates the Plugin based on the IPlugin interface and a plugin attribute. When creating a Sentry Plugin use the ISentryPlugin interface, which is located in the SuperOffice.CRM.Security namespace.

A sentry plugin works out what information a particular user is allowed to see, and what the user can do with the information. A sentry plugin may rewrite the OSQL queries in order to get more information so it can make its decision.

 

1. autolist

 

A sentry plugin must look at the information available through the sentry’s lookup objects, and use these values to figure out whether the current user can see, edit or delete the data. In this way a sentry plugin should be stateless. The plugin may be called many times with different rows of information.

When is sentry plugin called?
-----------------------------

![Sentry plugin sequence diagram](sentry%20plugin.PNG)
This sequence diagram shows what happens when your client code causes a database access.

The database access causes a sentry and its plugins to created, and the Sentry plugin gets a chance to modify the select.

After the data reader is returned, each row that is read is passed through the sentry and each of its plugins to calculate the access rights.
