<properties date="2016-05-11"
SortOrder="1"
/>

Improvements in 7.5

* The [ERP Connector APIs](../Developer's%20Guide/ERP%20Connectors/ERP%20Connectors.md) added to support integration with ERP systems.
* IContactInfo and IProjectInfo etc can find udef field values by progid, not just absolute field name.
* IDocumentPlugin2 has changed. Parameters now include more complete information - not just id and extref. A complete DocumentInfo object is passed, so doc plugins should not need to link directly with SoDatabase.
