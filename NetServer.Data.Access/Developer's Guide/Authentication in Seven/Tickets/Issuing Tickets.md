<properties date="2016-05-11"
SortOrder="51"
/>

At any time that you are authenticated with NetServer, you can get a ticket:                 **SoContext.CurrentPrincipal.GetSafeCredentials()**

This is also the return value of the Authenticate WebService methods, and the &lt;usec&gt; template variable

Later on, you can pass in the ticket in a WebRequest header

You can also send it in, as the username

* This means that **anyplace** that takes username/password, ticket/blank will work

* This applies to Win and Web equally – main clients, OLE DB, URL authentication, etc etc

 

Multiple GetSafeCredentials() calls within the same process and validity period will return the same ticket. Remember that a ticket represents an identity, **NOT** a particular session (again, that is by design). It is quite OK for multiple sessions to share one ticket, they will just push the validity ahead of them.

Making a ticket string acceptable wherever a user name is requested is a way to minimize the impact on other software. Instead of having to write special calls to authenticate using tickets, you simply stuff it into the user name and go. Command-line parameter to SOCRM? Sure!
