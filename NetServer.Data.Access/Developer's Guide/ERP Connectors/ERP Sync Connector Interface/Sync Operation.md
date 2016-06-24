<properties date="2016-05-11"
SortOrder="7"
/>

[Erp Sync engine operation]()
==========================================

The main engine of Erp Sync has no user interface and is asynchronous in nature, so it will not be triggered by user interaction directly. In its most common form, it will most likely run as a SuperOffice Travel Gateway task, running at regular intervals on the Travel Gateway server. It will rely on polling the different connections (including SuperOffice) at given intervals, querying the system about any changes that have occurred since the last polling operation.

The polling operations run on a timer with a configurable interval. In other words, ERP Sync can be set to run as often as every minute (probably not recommended) or as infrequently as once every day, week, year, etc. It’s impossible to set an ideal interval, as it will depend on anything from the frequency of actor updates to how quickly the connector web service is able to react and deliver its results. Obviously, transferring large amounts of data to and from a slow web service will take time.

 

<img src="Erp%20Sync%20Connector%20Interface_files/image010.png" id="Bilde 7" width="514" height="652" />

Sequence diagram describing the ERP Sync asynchronous service in its simplest form



 

[Errors and exceptions]()
======================================

Although both the connector host and Erp Sync has exception handling, we ask that your connectors ensure to never throw exceptions if at all avoidable. Catching your own exceptions will allow you to generate better and more readable response objects than a generic catch-all inside Erp Sync can.

There are also certain errors and situations that require specific handling, such as if a connector cannot find the configuration data belonging to a given connection ID. In these cases the connector will need to send back a specific error code so that Erp Sync can take steps to set things right. In the case of missing configuration data, Erp Sync can resend the latest copy of the data and then try to call the failed method once more.

 



 

 
