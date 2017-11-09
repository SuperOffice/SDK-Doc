The Agents API contains everything in the normal service API, but does not attempt to model entities. All operations are accessed using HTTP POST.

`POST /api/v1/Agents/Contact/GetContact?contactId=123`
returns a JSON object representing Contact 123.

`POST /api/v1/Agents/List/SaveListItemEntity`

adds a new list item to the Category list (assuming the list item entity parameter has been properly initialized).



1. autolist



------

See Also: WebAPI [REST API](../REST/REST.md) 