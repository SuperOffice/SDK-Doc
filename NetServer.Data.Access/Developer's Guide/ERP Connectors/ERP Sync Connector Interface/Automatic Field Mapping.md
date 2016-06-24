<properties date="2016-05-11"
SortOrder="7"
/>

[Erp Sync engine automatic field mapping]()
========================================================

The Erp Sync engine will try to map ERP fields to CRM fields automatically if the CRM field naming is matched by the connector. Below is a list of CRM fields the engine will recognize and try to map automatically. When fields are mapped, sync direction is not set, so no actual sync will occur before this is explicitly enabled. The field name matching is case insensitive. The actual mapping will occur when a connection is created or updated. If you rename fields in an existing connector to match the CRM field names, the old names that are missing will cause these field mappings to be marked as no longer available in ERP, and you will need to set sync direction again to reenable syncing of these fields.

Contact
-------

|              |                              |
|--------------|------------------------------|
| NAME         | Name                         |
| NUMBER1      | Code                         |
| NUMBER2      | Number                       |
| DEPARTMENT   | Department                   |
| PHONE        | Telephone                    |
| FAX          | Fax                          |
| EMAIL        | E-mail                       |
| URL          | Web site                     |
| POSTALAD1    | Postal addr., address line 1 |
| POSTALAD2    | Postal addr., address line 2 |
| POSTALAD3    | Postal addr., address line 3 |
| POSTALZIP    | Postal addr., zip code       |
| POSTALCITY   | Postal addr., city           |
| POSTALCOUNTY | Postal addr., county         |
| POSTALSTATE  | Postal addr., state          |
| STREETAD1    | Street addr., address line 1 |
| STREETAD2    | Street addr., address line 2 |
| STREETAD3    | Street addr., address line 3 |
| STREETZIP    | Street addr., zip code       |
| STREETCITY   | Street addr., city           |
| STREETCOUNTY | Street addr., county         |
| STREETSTATE  | Street addr., state          |
| COUNTRY      | Country                      |
| VATNO        | VAT No                       |

Person
------

|                |                              |
|----------------|------------------------------|
| FIRSTNAME      | First name                   |
| MIDDLENAME     | Middle name                  |
| LASTNAME       | Last name                    |
| TITLE          | Title                        |
| NUMBER         | Number                       |
| PHONE\_DIRECT  | Direct phone                 |
| PHONE\_PRIVATE | Private phone                |
| PHONE\_MOBILE  | Mobile phone                 |
| PHONE\_OTHER   | Other phone                  |
| EMAIL          | E-mail                       |
| POSITION       | Position                     |
| BIRTHDATE      | Birthdate                    |
| URL            | Web site                     |
| POSTALAD1      | Postal addr., address line 1 |
| POSTALAD2      | Postal addr., address line 2 |
| POSTALAD3      | Postal addr., address line 3 |
| POSTALZIP      | Postal addr., zip code       |
| POSTALCITY     | Postal addr., city           |
| POSTALSTATE    | Postal addr., state          |
| POSTALCOUNTY   | Postal addr., county         |
| POSTALCOUNTRY  | Country                      |

Project
-------

|         |              |
|---------|--------------|
| NAME    | Project name |
| TEXT    | Description  |
| NUMBER  | Number       |
| URL     | Web site     |
| ENDDATE | End date     |
