<properties date="2016-05-11"
SortOrder="6"
/>

[Setting up Sync]()
================================

Because every ERP system and every customer operate slightly (and sometimes very) differently, the field mapping must be configurable.

Each connection will have to be able to inform Erp Sync about which actor types it supports (e.g. customer and supplier, but not person and project). Once this information is retrieved, Erp Sync can ask the connection for a collection of what fields are available for each actor type (using the same FieldMetaDataInfo class as for the connection details). There are four operations available to the user for each field:

 

1. autolist

 
