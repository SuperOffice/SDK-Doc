<properties date="2016-05-11"
SortOrder="3"
/>

Sync Service
------------

![](SDK%20Diagrams.png)
SuperOffice clients will all talk to the ERP system via an **ERP Sync Connector** over SOAP. There can be many Superoffice clients, spread over many different companies, all talking to the same SOAP endpoint.

The SOAP endpoint must keep track of which client is connected to which ERP system. Each connection is identified by a globally unique id (GUID), which is generated when the connection is created. The GUID is created by NetServer - the web service has no say in what it is.

In the SuperOffice database, the connection is numbered normally using integer keys. The GUID is only used when talking to the Sync Service. If we used the internal integer keys with the web service we would have conflicts.

For example: Client 1 would have Sync connection id 2 configured to map to ERP System A, while Client 2 would have its sync connection id 2 mapped to ERP System B. The ERP Sync connector would not be able to tell one "connection id 2" from the other.
