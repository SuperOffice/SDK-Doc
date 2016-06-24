<properties date="2016-05-11"
/>

"Mail"
------

This provider name is implemented by the class SuperOffice.CRM.ArchiveLists.EMailFolderProvider inside NetServer's SODatabase assembly.

### Supported Entities

|            |                 |
|------------|-----------------|
| companies  | From Companies  |
| associates | From Associates |
| others     | From Others     |

### Supported Columns

|            |                                                                                        |
|------------|----------------------------------------------------------------------------------------|
| id         | ID *(No RestrictionType)*                                                              
              ID of the e-mail *(Not OrderBy-able)*                                                   |
| status     | Status *(No RestrictionType)*                                                          |
| attachment | Attachment *(No RestrictionType)*                                                      
              Indicates whether the e-mail has one or more attachments                                |
| from       | From *(No RestrictionType)*                                                            
              The sender of the e-mail                                                                |
| to         | To *(No RestrictionType)*                                                              
              The recipient of the e-mail                                                             |
| subject    | Subject *(No RestrictionType)*                                                         
              The subject of the e-mail                                                               |
| size       | Size *(No RestrictionType)*                                                            
              The size of the e-mail                                                                  |
| archived   | Archived *(No RestrictionType)*                                                        
              Indicates whether the e-mail has been archived in SuperOffice SIX *(Not OrderBy-able)*  |
| priority   | Priority *(No RestrictionType)*                                                        
              The e-mail's priority                                                                   |
| sent       | Date *(No RestrictionType)*                                                            
              The time this e-mail was sent at                                                        |
| company    | Company *(No RestrictionType)*                                                         
              Company *(Not OrderBy-able)*                                                            |
| person     | Contact *(No RestrictionType)*                                                         
              Contact *(Not OrderBy-able)*                                                            |

See also: ArchiveProviderFactory.

[Restriction Types](-Restriction%20Types.md)
