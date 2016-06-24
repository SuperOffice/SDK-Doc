<properties date="2016-05-11"
SortOrder="3"
/>

Setting up Defaults
-------------------

![](../Erp%20Sync%20Connector%20Interface_files/image006.png)

The user clicks the DEFAULTS button to set up what values the user needs to fill in when creating new actors in the ERP system. The `GetSupportedActorTypes` method was called when the connection is saved. The list of fields for the actor types is cached in the SuperOffice database - so this part of the admin does not trigger any further calls to the connector.

The list of ERP fields is from the result of the `GetSupportedActorTypeFields` made when the connection was saved.

List Items
----------

If you select a list field, then the connector's `GetList` method will be made to fill the dropdown with list items.
When you save the default for the list field, this will trigger one additional call: `GetListTems`

The admin client wants to know the display value for the list item, so it asks the connector directly for the text of list item 3.
