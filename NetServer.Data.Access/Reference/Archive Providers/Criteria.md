<properties date="2016-05-11"
/>

"Criteria"
----------

This provider name is implemented by the class SuperOffice.CRM.ArchiveLists.CriteriaProvider inside NetServer's SODatabase assembly.

### Supported Entities

|          |            |
|----------|------------|
| criteria | (criteria) |

### Supported Columns

|           |                                                         |
|-----------|---------------------------------------------------------|
| key       | Key *(No RestrictionType)*                              
             Unique key, based on criterion name and any subcriteria  |
| icon      | Icon *(No RestrictionType)*                             
             Criterion icon, based on icon of current column          |
| active    | Enabled *(No RestrictionType)*                          
             Specifies whether the criterion is enabled               |
| criterion | Name *(No RestrictionType)*                             
             The name of the search criterion                         |
| operator  | Operator *(No RestrictionType)*                         
             The operator used by this search criterion               |
| value     | Value *(No RestrictionType)*                            
             The value used by the search criterion.                  |

See also: ArchiveProviderFactory.

[Restriction Types](-Restriction%20Types.md)
