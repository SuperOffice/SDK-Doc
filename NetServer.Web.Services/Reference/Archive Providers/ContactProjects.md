<properties date="2016-06-24"
/>

"ContactProjects"
-----------------

This provider name is implemented by the class SuperOffice.CRM.ArchiveLists.ContactProjectsProvider inside NetServer's SODatabase assembly.

### Supported Entities

|         |          |
|---------|----------|
| project | Projects |

### Supported Columns

|                                         |                                                                                                                    |
|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| getAllRows                              | \[GetAll\] (bool)                                                                                                  
                                           \[Get all rows of archive - use with care, you may be fetching the whole database\] *(Not OrderBy-able)*            |
| completed                               | -Is completed (bool)                                                                                               
                                           \[\[SR\_PROJECTARCHIVE\_COMPLETED\_TOOLTIP\]\]                                                                      |
| projectId                               | DB ID (int)                                                                                                        
                                           Displays the database ID for a project row                                                                          |
| name                                    | Project name (string)                                                                                              
                                           Displays the Project's name                                                                                         |
| number                                  | Number (string)                                                                                                    
                                           Displays the project's number                                                                                       |
| type                                    | Type (listAny)                                                                                                     
                                           Displays the project's type                                                                                         |
| status                                  | Status (listAny)                                                                                                   
                                           Displays the project's status                                                                                       |
| associateId                             | ID (associate)                                                                                                     
                                           Displays login ID of the associate who created the project                                                          |
| hasInfoText                             | -Description (bool)                                                                                                
                                           Displays an icon indicating if the project has a description text. The text itself will be displayed in a tooltip.  |
| text                                    | \[\[SR\_ARCHIVE\_DESCRIPTION\]\] (string)                                                                          
                                           \[\[SR\_ARCHIVE\_DESCRIPTION\]\]                                                                                    |
| updatedBy                               | Updated by (associate)                                                                                             
                                           The user who last updated the data *(Not OrderBy-able)*                                                             |
| updatedDate                             | Updated (date)                                                                                                     
                                           The date/time the data was last updated *(Not OrderBy-able)*                                                        |
| contactId                               | Company ID (int)                                                                                                   
                                           Database ID of company record                                                                                       |
| projectPublish/isPublished              | -Published (bool)                                                                                                  
                                           Displays an icon indicating if the project has been published                                                       |
| projectPublish/publishedFrom            | From date (date)                                                                                                   
                                           Start date of published status, data will not be externally visible prior to this date                              |
| projectPublish/publishedTo              | To date (date)                                                                                                     
                                           End date of published status, data will not be externally visible after this date                                   |
| projectPublish/publishedBy              | Published by *(No RestrictionType)*                                                                                
                                           Published by *(Not OrderBy-able)*                                                                                   |
| projectEvent/isExternalEvent            | \[\[SR\_EXTERNAL\_EVENT\]\] (bool)                                                                                 
                                           \[\[SR\_EXTERNAL\_EVENT\_TOOLTIP\]\]                                                                                |
| projectEvent/eventDate                  | Event date (date)                                                                                                  
                                           Actual event date                                                                                                   |
| projectEvent/hasSignOn                  | \[\[SR\_EVENT\_HASSIGNON\]\] (bool)                                                                                
                                           \[\[SR\_EVENT\_HASSIGNON\_TOOLTIP\]\]                                                                               |
| projectEvent/hasSignOff                 | \[\[SR\_EVENT\_HASSIGNOFF\]\] (bool)                                                                               
                                           \[\[SR\_EVENT\_HASSIGNOFF\_TOOLTIP\]\]                                                                              |
| projectUrl/URLAddress                   | URL (string)                                                                                                       |
| projectUrl/URLDescription               | \[\[SR\_ARCHIVE\_DESCRIPTION\]\] (string)                                                                          |
| projectAssociate/firstName              | First Name (string)                                                                                                
                                           Displays the contact's first name *(Not OrderBy-able)*                                                              |
| projectAssociate/lastName               | Last name (string)                                                                                                 
                                           Displays the contact's last name *(Not OrderBy-able)*                                                               |
| projectAssociate/middleName             | Middle Name (string)                                                                                               
                                           Displays the contact's middle name. *(Not OrderBy-able)*                                                            |
| projectAssociate/fullName               | \[\[SR\_ARCHIVE\_ASSOC\_FULLNAME\]\] (string)                                                                      
                                           \[\[SR\_ARCHIVE\_ASSOC\_FULLNAME\_TOOLTIP\]\] *(Not OrderBy-able)*                                                  |
| projectAssociate/contactId              | Owner Company ID (int)                                                                                             
                                           Database ID of company that owns the employee *(Not OrderBy-able)*                                                  |
| projectAssociate/personId               | Contact ID (int)                                                                                                   
                                           Database id of the contact row (table person) *(Not OrderBy-able)*                                                  |
| projectAssociate/mrMrs                  | Mr/Ms (string)                                                                                                     
                                           Displays whether the contact is addressed as Mr or Ms *(Not OrderBy-able)*                                          |
| projectAssociate/title                  | Title (string)                                                                                                     
                                           Displays whether the contact is addressed as Mr or Ms *(Not OrderBy-able)*                                          |
| projectAssociate/associateDbId          | ID (associate)                                                                                                     |
| projectAssociate/contactName            | Owner Company (string)                                                                                             
                                           Name of company that owns the employee *(Not OrderBy-able)*                                                         |
| projectAssociate/contactDepartment      | Owner dept (string)                                                                                                
                                           Department name of company that owns the employee *(Not OrderBy-able)*                                              |
| projectAssociate/usergroup              | Primary group (listAny)                                                                                            
                                           \[\[SR\_ADMIN\_USERS\_LIST\_GROUP\_TOOLTIP\]\] *(Not OrderBy-able)*                                                 |
| projectAssociate/contactFullName        | Owner (string)                                                                                                     
                                           Name and department of the company that owns the employee *(Not OrderBy-able)*                                      |
| projectAssociate/contactCategory        | \[\[SR\_ARCHIVE\_CATEGORY\]\] (listAny)                                                                            
                                           \[\[SR\_ARCHIVE\_CATEGORY\]\]                                                                                       |
| projectAssociate/role                   | Role (listAny)                                                                                                     
                                           Role:                                                                                                               |
| projectAssociate/assocName              | User ID (listAny)                                                                                                  
                                           User ID:                                                                                                            |
| projectAssociate/assocTooltip           | Description (string)                                                                                               
                                           Description:                                                                                                        |
| projectAssociate/assocType              | \[\[SR\_ADMIN\_USERS\_LIST\_TYPE\]\] (listAny)                                                                     
                                           \[\[SR\_ADMIN\_USERS\_LIST\_TYPE\_TOOLTIP\]\]                                                                       |
| projectAssociate/ejUserId               | \[\[SR\_ADMIN\_EJUSERID\]\] (int)                                                                                  
                                           \[\[SR\_ADMIN\_EJUSERID\_TOOLTIP\]\]                                                                                |
| projectAssociate/simultaneousEjUser     | \[\[SR\_ADMIN\_SIMEJUSER\]\] (bool)                                                                                
                                           \[\[SR\_ADMIN\_SIMEJUSER\_TOOLTIP\]\]                                                                               |
| projectAssociate/ejDisplayName          | \[\[SR\_ADMIN\_EJDISPLAYNAME\]\] (string)                                                                          
                                           \[\[SR\_ADMIN\_EJDISPLAYNAME\_TOOLTIP\]\]                                                                           |
| projectAssociate/ejGroup                | \[\[SR\_ADMIN\_EJGROUP\]\] (string)                                                                                
                                           \[\[SR\_ADMIN\_EJGROUP\_TOOLTIP\]\] *(Not OrderBy-able)*                                                            |
| projectAssociate/ejStatus               | \[\[SR\_ADMIN\_EJSTATUS\]\] (int)                                                                                  
                                           \[\[SR\_ADMIN\_EJSTATUS\_TOOLTIP\]\]                                                                                |
| projectAssociate/credentialType         | \[\[SR\_ADMIN\_CREDTYPE\]\] *(No RestrictionType)*                                                                 
                                           \[//Cred Type tooltip\] *(Not OrderBy-able)*                                                                        |
| projectAssociate/credentialDisplayValue | \[\[SR\_ADMIN\_CREDVALUE\]\] *(No RestrictionType)*                                                                
                                           \[//Cred value tooltip\] *(Not OrderBy-able)*                                                                       |
| projectAssociate/isActive               | Active (bool)                                                                                                      
                                           \[//Is user active\]                                                                                                |
| projectUdef/SuperOffice:1               | \[projectshorttext\] (string)                                                                                      |
| projectUdef/SuperOffice:2               | \[projectlongtext\] (string)                                                                                       |
| projectUdef/SuperOffice:3               | \[projectnumber\] (int)                                                                                            |
| projectUdef/SuperOffice:4               | \[projectdate\] (date)                                                                                             |
| projectUdef/SuperOffice:5               | \[projectunlimiteddate\] (unlimitedDate)                                                                           |
| projectUdef/SuperOffice:6               | \[projectcheckbox\] (bool)                                                                                         |
| projectUdef/SuperOffice:7               | \[projectdropdownlistbox\] (listAny)                                                                               |
| projectUdef/SuperOffice:8               | \[projectdecimal\] (decimal)                                                                                       |
| projectUdef/SuperOffice:9               | \[page1saleandmarketing\] (int)                                                                                    |
| projectUdef/SuperOffice:10              | \[page1saleandadmin\] (int)                                                                                        |
| NumberOfActivities                      | Number of activities (int)                                                                                         
                                           *(Not OrderBy-able)*                                                                                                |
| NumberOfActivitiesInPeriod              | \[\[SR\_ROU\_NUMBER\_OF\_ACTIVITIES\_IN\_PERIOD\] 90 \[SR\_ROU\_DAYS\]\] (int)                                     
                                           *(Not OrderBy-able)*                                                                                                |
| NumberOfNotCompletedActivities          | Number of not completed activities (int)                                                                           
                                           *(Not OrderBy-able)*                                                                                                |
| NumberOfNotCompletedActivitiesInPeriod  | \[\[SR\_ROU\_NUMBER\_OF\_NOT\_COMPLETED\_ACTIVITIES\_IN\_PERIOD\] 90 \[SR\_ROU\_DAYS\]\] (int)                     
                                           *(Not OrderBy-able)*                                                                                                |
| LastActivity                            | Last activity (date)                                                                                               
                                           *(Not OrderBy-able)*                                                                                                |
| LastCompletedActivity                   | Last completed activity (date)                                                                                     
                                           *(Not OrderBy-able)*                                                                                                |
| LastDoByActivity                        | \[\[SR\_ROU\_LAST\_INCOMPLETE\_ACTIVITY\]\] (date)                                                                 
                                           *(Not OrderBy-able)*                                                                                                |
| NumberOfSales                           | Number of sales (int)                                                                                              
                                           *(Not OrderBy-able)*                                                                                                |
| NumberOfSalesInPeriod                   | \[\[SR\_ROU\_NUMBER\_OF\_SALES\_IN\_PERIOD\] 90 \[SR\_ROU\_DAYS\]\] (int)                                          
                                           *(Not OrderBy-able)*                                                                                                |
| NumberOfNotCompletedSales               | Number of not completed sales (int)                                                                                
                                           *(Not OrderBy-able)*                                                                                                |
| NumberOfNotCompletedSalesInPeriod       | \[\[SR\_ROU\_NUMBER\_OF\_NOT\_COMPLETED\_SALES\_IN\_PERIOD\] 90 \[SR\_ROU\_DAYS\]\] (int)                          
                                           *(Not OrderBy-able)*                                                                                                |
| LastSale                                | Last sale (date)                                                                                                   
                                           *(Not OrderBy-able)*                                                                                                |
| LastCompletedSale                       | Last completed sale (date)                                                                                         
                                           *(Not OrderBy-able)*                                                                                                |
| LastDoBySale                            | \[\[SR\_ROU\_LAST\_INCOMPLETE\_SALE\]\] (date)                                                                     
                                           *(Not OrderBy-able)*                                                                                                |
| SaintStatus3                            | \[Not completed activites with intention sale\] (bool)                                                             
                                           *(Not OrderBy-able)*                                                                                                |
| saintSaleStatus                         | With status (listAny)                                                                                              
                                           *(Not OrderBy-able)*                                                                                                |
| saintAmountClass                        | Amount class (listAny)                                                                                             
                                           *(Not OrderBy-able)*                                                                                                |
| saintActivityType                       | \[\[SR\_ARCHIVE\_SAINT\_TYPE\]\] (listAny)                                                                         
                                           *(Not OrderBy-able)*                                                                                                |
| saintDirection                          | \[\[SR\_ARCHIVE\_DIRECTION\]\] (listAny)                                                                           
                                           *(Not OrderBy-able)*                                                                                                |
| saintIntention                          | Intention (listAny)                                                                                                
                                           *(Not OrderBy-able)*                                                                                                |
| saintTicketStatus                       | \[\[SR\_ARHCIVE\_SAINT\_TICKET\_STATUS\]\] (listAny)                                                               
                                           *(Not OrderBy-able)*                                                                                                |
| saintTicketCategory                     | \[\[SR\_ARHCIVE\_SAINT\_TICKET\_CATEGORY\]\] (listAny)                                                             
                                           *(Not OrderBy-able)*                                                                                                |
| project/textId                          | \[Text ID\] (int)                                                                                                  |
| project/infoText                        | Information (string)                                                                                               
                                           Displays the text entered in the description field                                                                  |

See also: IArchiveAgent.
