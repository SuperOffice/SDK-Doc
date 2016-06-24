<properties date="2016-06-24"
/>

"FindSelection"
---------------

This provider name is implemented by the class SuperOffice.CRM.ArchiveLists.FindSelectionProvider inside NetServer's SODatabase assembly.

### Supported Entities

|           |           |
|-----------|-----------|
| selection | Selection |

### Supported Columns

|                                           |                                                                                                          |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------|
| getAllRows                                | \[GetAll\] (bool)                                                                                        
                                             \[Get all rows of archive - use with care, you may be fetching the whole database\] *(Not OrderBy-able)*  |
| selectionId                               | Selection ID (int)                                                                                       
                                             The database ID of the selection record                                                                   |
| name                                      | Selection name (string)                                                                                  
                                             The name of the selection                                                                                 |
| type                                      | Category (listAny)                                                                                       
                                             The type of selection                                                                                     |
| kind                                      | This selection is (listAny)                                                                              
                                             The kind of sleection (static, dynamic)                                                                   |
| targetTableNumber                         | \[\[SR\_ARCHIVE\_SELECTION\_TYPE\]\] (listAny)                                                           
                                             \[\[SR\_ARCHIVE\_SELECTION\_TYPE\_TOOLTIP\]\]                                                             |
| associateId                               | Associate (associate)                                                                                    
                                             The employee who owns the selection                                                                       |
| combinationType                           | \[\[SR\_ARCHIVE\_SELECTION\_COMBINATION\_TYPE\]\] (listAny)                                              
                                             \[\[SR\_ARCHIVE\_SELECTION\_COMBINATION\_TYPE\_TOOLTIP\]\]                                                |
| done                                      | \[\[SR\_ARCHIVE\_SELECTION\_COMPLETED\]\] (bool)                                                         
                                             \[\[SR\_ARCHIVE\_SELECTION\_COMPLETED\_TOOLTIP\]\]                                                        |
| updatedBy                                 | Updated by (associate)                                                                                   
                                             The user who last updated the data *(Not OrderBy-able)*                                                   |
| updatedDate                               | Updated (date)                                                                                           
                                             The date/time the data was last updated *(Not OrderBy-able)*                                              |
| visibleFor                                | \[\[SR\_ARCHIVE\_VISIBLE\_FOR\]\] (listAny)                                                              
                                             *(Not OrderBy-able)*                                                                                      |
| selectionAssociate/firstName              | First Name (string)                                                                                      
                                             Displays the contact's first name *(Not OrderBy-able)*                                                    |
| selectionAssociate/lastName               | Last name (string)                                                                                       
                                             Displays the contact's last name *(Not OrderBy-able)*                                                     |
| selectionAssociate/middleName             | Middle Name (string)                                                                                     
                                             Displays the contact's middle name. *(Not OrderBy-able)*                                                  |
| selectionAssociate/fullName               | \[\[SR\_ARCHIVE\_ASSOC\_FULLNAME\]\] (string)                                                            
                                             \[\[SR\_ARCHIVE\_ASSOC\_FULLNAME\_TOOLTIP\]\] *(Not OrderBy-able)*                                        |
| selectionAssociate/contactId              | Owner Company ID (int)                                                                                   
                                             Database ID of company that owns the employee *(Not OrderBy-able)*                                        |
| selectionAssociate/personId               | Contact ID (int)                                                                                         
                                             Database id of the contact row (table person) *(Not OrderBy-able)*                                        |
| selectionAssociate/mrMrs                  | Mr/Ms (string)                                                                                           
                                             Displays whether the contact is addressed as Mr or Ms *(Not OrderBy-able)*                                |
| selectionAssociate/title                  | Title (string)                                                                                           
                                             Displays whether the contact is addressed as Mr or Ms *(Not OrderBy-able)*                                |
| selectionAssociate/associateDbId          | ID (associate)                                                                                           |
| selectionAssociate/contactName            | Owner Company (string)                                                                                   
                                             Name of company that owns the employee *(Not OrderBy-able)*                                               |
| selectionAssociate/contactDepartment      | Owner dept (string)                                                                                      
                                             Department name of company that owns the employee *(Not OrderBy-able)*                                    |
| selectionAssociate/usergroup              | Primary group (listAny)                                                                                  
                                             \[\[SR\_ADMIN\_USERS\_LIST\_GROUP\_TOOLTIP\]\] *(Not OrderBy-able)*                                       |
| selectionAssociate/contactFullName        | Owner (string)                                                                                           
                                             Name and department of the company that owns the employee *(Not OrderBy-able)*                            |
| selectionAssociate/contactCategory        | \[\[SR\_ARCHIVE\_CATEGORY\]\] (listAny)                                                                  
                                             \[\[SR\_ARCHIVE\_CATEGORY\]\]                                                                             |
| selectionAssociate/role                   | Role (listAny)                                                                                           
                                             Role:                                                                                                     |
| selectionAssociate/assocName              | User ID (listAny)                                                                                        
                                             User ID:                                                                                                  |
| selectionAssociate/assocTooltip           | Description (string)                                                                                     
                                             Description:                                                                                              |
| selectionAssociate/assocType              | \[\[SR\_ADMIN\_USERS\_LIST\_TYPE\]\] (listAny)                                                           
                                             \[\[SR\_ADMIN\_USERS\_LIST\_TYPE\_TOOLTIP\]\]                                                             |
| selectionAssociate/ejUserId               | \[\[SR\_ADMIN\_EJUSERID\]\] (int)                                                                        
                                             \[\[SR\_ADMIN\_EJUSERID\_TOOLTIP\]\]                                                                      |
| selectionAssociate/simultaneousEjUser     | \[\[SR\_ADMIN\_SIMEJUSER\]\] (bool)                                                                      
                                             \[\[SR\_ADMIN\_SIMEJUSER\_TOOLTIP\]\]                                                                     |
| selectionAssociate/ejDisplayName          | \[\[SR\_ADMIN\_EJDISPLAYNAME\]\] (string)                                                                
                                             \[\[SR\_ADMIN\_EJDISPLAYNAME\_TOOLTIP\]\]                                                                 |
| selectionAssociate/ejGroup                | \[\[SR\_ADMIN\_EJGROUP\]\] (string)                                                                      
                                             \[\[SR\_ADMIN\_EJGROUP\_TOOLTIP\]\] *(Not OrderBy-able)*                                                  |
| selectionAssociate/ejStatus               | \[\[SR\_ADMIN\_EJSTATUS\]\] (int)                                                                        
                                             \[\[SR\_ADMIN\_EJSTATUS\_TOOLTIP\]\]                                                                      |
| selectionAssociate/credentialType         | \[\[SR\_ADMIN\_CREDTYPE\]\] *(No RestrictionType)*                                                       
                                             \[//Cred Type tooltip\] *(Not OrderBy-able)*                                                              |
| selectionAssociate/credentialDisplayValue | \[\[SR\_ADMIN\_CREDVALUE\]\] *(No RestrictionType)*                                                      
                                             \[//Cred value tooltip\] *(Not OrderBy-able)*                                                             |
| selectionAssociate/isActive               | Active (bool)                                                                                            
                                             \[//Is user active\]                                                                                      |

See also: IArchiveAgent.
