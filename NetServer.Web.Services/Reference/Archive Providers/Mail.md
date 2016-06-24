<properties date="2016-06-24"
/>

"Mail"
------

This provider name is implemented by the class SuperOffice.CRM.ArchiveLists.MailItemSearchProvider inside NetServer's SODatabase assembly.

### Supported Entities

|            |                 |
|------------|-----------------|
| companies  | From Companies  |
| associates | From Associates |
| others     | From Others     |

### Supported Columns

|            |                                                                                    |
|------------|------------------------------------------------------------------------------------|
| id         | Email ID *(No RestrictionType)*                                                    
              Server ID of the e-mail *(Not OrderBy-able)*                                        |
| status     | Status *(No RestrictionType)*                                                      |
| attachment | Attachment *(No RestrictionType)*                                                  
              Indicates whether the e-mail has one or more attachments                            |
| from       | \[\[SR\_ARCHIVE\_EMAIL\_FROM\]\] *(No RestrictionType)*                            
              The sender of the e-mail                                                            |
| to         | \[\[SR\_ARCHIVE\_EMAIL\_TO\]\] *(No RestrictionType)*                              
              The recipient of the e-mail                                                         |
| subject    | Subject *(No RestrictionType)*                                                     
              The subject of the e-mail                                                           |
| size       | Size *(No RestrictionType)*                                                        
              The size of the e-mail                                                              |
| archived   | Archived *(No RestrictionType)*                                                    
              Indicates whether the e-mail has been archived in SuperOffice *(Not OrderBy-able)*  |
| priority   | Priority *(No RestrictionType)*                                                    
              The priority of the e-mail                                                          |
| sent       | Date *(No RestrictionType)*                                                        
              When was this e-mail received                                                       |
| company    | Company *(No RestrictionType)*                                                     
              Company *(Not OrderBy-able)*                                                        |
| person     | Contact *(No RestrictionType)*                                                     
              Contact *(Not OrderBy-able)*                                                        |

See also: IArchiveAgent.
