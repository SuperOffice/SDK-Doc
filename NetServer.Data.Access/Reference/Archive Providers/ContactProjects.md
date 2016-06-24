<properties date="2016-05-11"
/>

"ContactProjects"
-----------------

This provider name is implemented by the class SuperOffice.CRM.ArchiveLists.ContactProjectsProvider inside NetServer's SODatabase assembly.

### Supported Entities

|                 |          |
|-----------------|----------|
| contactProjects | Projects |

### Supported Columns

|                                        |                                                                                                                    |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| getAllRows                             | GetAll (bool)                                                                                                      
                                          (Get all rows of archive - use with care, you may be fetching the whole database) *(Not OrderBy-able)*              |
| projectId                              | DB ID (int)                                                                                                        
                                          Displays the database ID for a project row                                                                          |
| name                                   | Project name (string)                                                                                              
                                          Displays the Project's name                                                                                         |
| number                                 | Number (string)                                                                                                    
                                          Displays the project's number                                                                                       |
| type                                   | Type (listAny)                                                                                                     
                                          Displays the project's type                                                                                         |
| status                                 | Status (listAny)                                                                                                   
                                          Displays the project's status                                                                                       |
| associateId                            | ID (associate)                                                                                                     
                                          Displays login ID of the associate who created the project                                                          |
| hasInfoText                            | Description (bool)                                                                                                 
                                          Displays an icon indicating if the project has a description text. The text itself will be displayed in a tooltip.  |
| contactId                              | Company ID (int)                                                                                                   
                                          Database ID of company                                                                                              |
| projectPublish/isPublished             | Published (bool)                                                                                                   
                                          Displays an icon indicating if the project has been published                                                       |
| projectPublish/publishedFrom           | From date (date)                                                                                                   
                                          Start date for publishing. The record will not be visible prior to this date                                        |
| projectPublish/publishedTo             | To date (date)                                                                                                     
                                          End date for publishing. The record will not be visible after this date                                             |
| projectPublish/eventDate               | Event date (date)                                                                                                  
                                          Event date                                                                                                          |
| projectPublish/publishedBy             | Published by *(No RestrictionType)*                                                                                
                                          Published by *(Not OrderBy-able)*                                                                                   |
| projectUrl/URLAddress                  | URL (string)                                                                                                       |
| projectUrl/URLDescription              | Description (string)                                                                                               |
| projectAssociate/firstName             | First Name *(No RestrictionType)*                                                                                  
                                          Displays the contact's first name *(Not OrderBy-able)*                                                              |
| projectAssociate/lastName              | Last name *(No RestrictionType)*                                                                                   
                                          Displays the contact's last name *(Not OrderBy-able)*                                                               |
| projectAssociate/middleName            | Middle Name *(No RestrictionType)*                                                                                 
                                          Displays the contact's middle name. *(Not OrderBy-able)*                                                            |
| projectAssociate/fullName              | Contact *(No RestrictionType)*                                                                                     
                                          Displays the contact an activity is linked to *(Not OrderBy-able)*                                                  |
| projectAssociate/contactId             | Company ID *(No RestrictionType)*                                                                                  
                                          Database ID of the company the user belongs to *(Not OrderBy-able)*                                                 |
| projectAssociate/mrMrs                 | Mr/Ms *(No RestrictionType)*                                                                                       
                                          Displays whether the contact is addressed as Mr or Ms *(Not OrderBy-able)*                                          |
| projectAssociate/title                 | Title *(No RestrictionType)*                                                                                       
                                          Displays whether the contact is addressed as Mr or Ms *(Not OrderBy-able)*                                          |
| projectAssociate/associateDbId         | ID (associate)                                                                                                     |
| projectAssociate/contactName           | Owning company *(No RestrictionType)*                                                                              
                                          Name of the company the user belongs to *(Not OrderBy-able)*                                                        |
| projectAssociate/contactDepartment     | Owning department *(No RestrictionType)*                                                                           
                                          (\[SR\_ASSOCCONTACT\_DEPT\_TOOLTIP) *(Not OrderBy-able)*                                                            |
| projectAssociate/contactFullName       | Owner *(No RestrictionType)*                                                                                       
                                          Name and department of the company the user belongs to *(Not OrderBy-able)*                                         |
| projectUdef/SuperOffice:1              | projectshorttext (string)                                                                                          |
| projectUdef/SuperOffice:2              | projectlongtext (string)                                                                                           |
| projectUdef/SuperOffice:3              | projectnumber (int)                                                                                                |
| projectUdef/SuperOffice:4              | projectdate (datetime)                                                                                             |
| projectUdef/SuperOffice:5              | projectunlimiteddate (unlimitedDate)                                                                               |
| projectUdef/SuperOffice:6              | projectcheckbox (bool)                                                                                             |
| projectUdef/SuperOffice:7              | projectdropdownlistbox (listAny)                                                                                   |
| projectUdef/SuperOffice:8              | projectdecimal (decimal)                                                                                           |
| projectUdef/SuperOffice:9              | page1saleandmarketing (int)                                                                                        |
| projectUdef/SuperOffice:10             | page1saleandadmin (int)                                                                                            |
| NumberOfActivities                     | Number of activities (int)                                                                                         
                                          *(Not OrderBy-able)*                                                                                                |
| NumberOfActivitiesInPeriod             | Number of activities in period (int)                                                                               
                                          *(Not OrderBy-able)*                                                                                                |
| NumberOfNotCompletedActivities         | Number of not completed activities (int)                                                                           
                                          *(Not OrderBy-able)*                                                                                                |
| NumberOfNotCompletedActivitiesInPeriod | Number of not completed activities in period (int)                                                                 
                                          *(Not OrderBy-able)*                                                                                                |
| LastActivity                           | Last activity (date)                                                                                               
                                          *(Not OrderBy-able)*                                                                                                |
| LastCompletedActivity                  | Last completed activity (date)                                                                                     
                                          *(Not OrderBy-able)*                                                                                                |
| LastDoByActivity                       | Last future activity (date)                                                                                        
                                          *(Not OrderBy-able)*                                                                                                |
| NumberOfSales                          | Number of sales (int)                                                                                              
                                          *(Not OrderBy-able)*                                                                                                |
| NumberOfSalesInPeriod                  | Number of sales in period (int)                                                                                    
                                          *(Not OrderBy-able)*                                                                                                |
| NumberOfNotCompletedSales              | Number of not completed sales (int)                                                                                
                                          *(Not OrderBy-able)*                                                                                                |
| NumberOfNotCompletedSalesInPeriod      | Number of not completed sales in period (int)                                                                      
                                          *(Not OrderBy-able)*                                                                                                |
| LastSale                               | Last sale (date)                                                                                                   
                                          *(Not OrderBy-able)*                                                                                                |
| LastCompletedSale                      | Last completed sale (date)                                                                                         
                                          *(Not OrderBy-able)*                                                                                                |
| LastDoBySale                           | Last future sale (date)                                                                                            
                                          *(Not OrderBy-able)*                                                                                                |
| SaintStatus3                           | Not completed activites with intention sale (bool)                                                                 
                                          *(Not OrderBy-able)*                                                                                                |
| saintSaleStatus                        | With status (listAny)                                                                                              
                                          *(Not OrderBy-able)*                                                                                                |
| saintAmountClass                       | Amount class (listAny)                                                                                             
                                          *(Not OrderBy-able)*                                                                                                |
| saintActivityType                      | Type (listAny)                                                                                                     
                                          *(Not OrderBy-able)*                                                                                                |
| saintDirection                         | Direction (listAny)                                                                                                
                                          *(Not OrderBy-able)*                                                                                                |
| saintIntention                         | Intention (listAny)                                                                                                
                                          *(Not OrderBy-able)*                                                                                                |

See also: ArchiveProviderFactory.

[Restriction Types](-Restriction%20Types.md)
