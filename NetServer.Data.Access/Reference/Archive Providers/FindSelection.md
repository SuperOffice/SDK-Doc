<properties date="2016-05-11"
/>

"FindSelection"
---------------

This provider name is implemented by the class SuperOffice.CRM.ArchiveLists.FindSelectionProvider inside NetServer's SODatabase assembly.

### Supported Entities

|           |           |
|-----------|-----------|
| selection | Selection |

### Supported Columns

|             |                                                                                                        |
|-------------|--------------------------------------------------------------------------------------------------------|
| getAllRows  | GetAll (bool)                                                                                          
               (Get all rows of archive - use with care, you may be fetching the whole database) *(Not OrderBy-able)*  |
| selectionId | Selection ID (int)                                                                                     
               The database ID of the selection                                                                        |
| name        | Selection name (string)                                                                                
               The name of the selection                                                                               |
| type        | Category (listAny)                                                                                     
               The type of selection                                                                                   |
| kind        | This selection is (listAny)                                                                            
               The kind of selection (static, dynamic)                                                                 |
| associateId | Associate (associate)                                                                                  
               The employee who owns the selection                                                                     |
| visibleFor  | Visible for (listAny)                                                                                  
               *(Not OrderBy-able)*                                                                                    |

See also: ArchiveProviderFactory.

[Restriction Types](-Restriction%20Types.md)
