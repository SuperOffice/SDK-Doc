<properties date="2016-09-2"
SortOrder="79"
/>

# What's New in 8.0

Methods defined in the Services80 package:

## Archive agent

More meta data, and support for strings instead of objects for query restrictions. 
i.e. you can use "contactId=123" instead of creating an ArchiveRestriction object to hold "contactId", "=", and { 123 }.

* GetAvailableColumns
* GetAvailableEntities
* GetArchiveListByColumns2 
* GetArchiveListByColumnsWithContext2
* GetArchiveList2
* GetArchiveListWithContext2
* GetArchiveListByColumnsWithHeader2
* GetArchiveListByColumnsWithHeaderWithContext2

## BLOB Agent

* Get/Set App data

## List Agent

Typed access to quote lists and web panels and external apps.

* DeliveryTerm, DeliveryType, PaymentTerm, PaymentType list entities
* ProductCategory, ProductFamily, ProductType list entities
* Web panel entity
* GetAppWebPanels
* GetWebPanelByProgId


## Find Agent

Supports string restrictions instead of ArchiveRestriction objects.

* SaveRestrictions2
* SaveRestrictionsWithContext2
* SaveRestrictionsAndGetCriteriaInformation2
* FindFromRestrictions2
* FindFromRestrictionsColumns2
* FindFromRestrictionsColumnsOrderBy2
* GetDefaultDesiredColumnsFromRestrictions2
* FindOrderBy2
* FindWithExtraRestrictions2

## Configuration Agent

Expose URLs for various parts of the system.

* GetCSAuthUrl
* GetHelpDispatcherUrl
* GetCRMUrl

## Preference Agent

* GetPreferenceByName
* GetNetServicesStatusUrl
* UpdateNetServicesStatus

## MDO Agent

* GetListIdByListName

