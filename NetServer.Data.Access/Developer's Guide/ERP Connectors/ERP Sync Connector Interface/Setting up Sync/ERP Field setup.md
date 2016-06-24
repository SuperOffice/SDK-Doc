<properties date="2016-05-11"
SortOrder="8"
/>

[ERP field setup]()
--------------------------------

Click the **Mapping** button to set up the mapping between SuperOffice entity fields and the corresponding ERP actor fields.
![](../Erp%20Sync%20Connector%20Interface_files/image007.png)

The list of "Company fields" on the left side of the dialog come from the connector's `GetAvailableActorFields` method.

The actor types supported have to be a subset of a predefined list of types (Customer/Supplier, Person, Project), meaning the Sync Connector cannot define its own actor types.

The connector will not be asked to store information about the field configuration done in SO Admin; it will only be required to supply a list of fields, and to recognise its own field keys when actors are requested or received for retrieval and saving.

 

<img src="../Erp%20Sync%20Connector%20Interface_files/image005.png" id="Bilde 9" width="510" height="546" />

Sequence diagram detailing the process of retrieving available actor types, available fields for a given actor type and then configuring each ERP field

[** **]()

 

 
