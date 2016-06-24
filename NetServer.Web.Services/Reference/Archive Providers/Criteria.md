<properties date="2016-06-24"
/>

"Criteria"
----------

This provider name is implemented by the class SuperOffice.CRM.ArchiveLists.CriteriaProvider inside NetServer's SODatabase assembly.

### Supported Entities

|          |              |
|----------|--------------|
| criteria | \[criteria\] |

### Supported Columns

|           |                                                                                                                                               |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| key       | Key *(No RestrictionType)*                                                                                                                    
             Unique key, based on criterion column and any subcriteria                                                                                      |
| active    | Active *(No RestrictionType)*                                                                                                                 
             Is this criterion active (if not, it will be ignored during searching)                                                                         |
| icon      | Icon *(No RestrictionType)*                                                                                                                   
             Criterion icon, based on icon of underlying archive column                                                                                     |
| criterion | Name *(No RestrictionType)*                                                                                                                   
             The name of the search criterion                                                                                                               |
| operator  | Operator *(No RestrictionType)*                                                                                                               
             The operator (comparison) applied by the search crtierion                                                                                      |
| value     | Value *(No RestrictionType)*                                                                                                                  
             The value (or values) used by the search criterion. Values can be relative, such as 'last week'; actual values are computed during the search  |

See also: IArchiveAgent.
