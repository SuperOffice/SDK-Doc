<properties date="2016-05-11"
SortOrder="2"
/>

Setting up Mappings
-------------------

![](../Erp%20Sync%20Connector%20Interface_files/image007.png)

The user clicks the MAPPINGS button to map ERP fields to SuperOffice fields. The `GetSupportedActorTypes` method was called when the connection is saved. The list of supported actor types determines which tabs show up in the field configuration dialog.

For each supported actor type, SuperOffice Admin.web will call `GetSupportedActorTypeFields` and `GetSearchableFields`:

```
  FieldMetadataInfoArrayPluginResponse 
GetSupportedActorTypeFields(Guid connectionId, string
actorType)

     connectionId = {3aef3af6-8642-4fc1-8dc9-4e08bd76a6bf}
     actorType: "Supplier"

  returns:
      IsOk = true
      FieldMetaDataObjects
        [0] = { Rank = 1,
                FieldKey = "NAME", FieldType = Text,
                DisplayName = "Supplier Name",
                DisplayDescription = "This is the tooltip" }

        [1] = { Rank = 2,
                FieldKey = "NUMBER1", FieldType = Integer,
                DisplayName = "Supplier Code" }

        [2] = { Rank = 3,
                FieldKey = "SUPPLIERLIMIT", FieldType = Text,
                DisplayName = "Credit Limit" }

        [3] = { Rank = 5,
                FieldKey = "STDTERMS", FieldType = List,
                ListName = "TermList",
                DisplayName = "Standard Terms" }
```

The configuration describes the ERP fields. The admin client will attempt to do [some automatic mapping of fields based on the FieldKey names](../Automatic%20Field%20Mapping.md).

ERP fields can be typed as text, integers, checkboxes, numbers etc. The admin client will restrict the SuperOffice fields that can be mapped to the ERP field based on these types, so if you have a checkbox field, you cannot have a bi-directional sync to a text field, since information would be lost in one direction.

### Searchable fields

Some of the ERP fields may be searchable - these are specified here. This lets SuperOffice know that it can use these fields in the **Advanced Search** dialog.
```
  StringArrayPluginResponse 
GetSearchableFields(Guid connectionId, string actorType)

     connectionId = {3aef3af6-8642-4fc1-8dc9-4e08bd76a6bf}
     actorType: "Supplier"

  returns:
      IsOk = true
      Items
        [0] = "NAME"
        [1] = "NUMBER1"
        [2] = "SUPPLIERLIMIT"
```

This tells the admin client that field searches can be done on NAME, NUMBER1 and SUPPLIERLIMIT fields in the ERP system. This will happen through the `SearchActorsAdvanced` method.
