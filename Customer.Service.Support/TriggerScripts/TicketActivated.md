# TicketActivated (113)

Runs when ticket is saved and status changed from postponed to active.

Input values:

* `entryId` = request id
* `ticketId` = request id
* `personId` = customer (person) id
* `contactId` = company (contact) id
* `ticketStatus.old` = old value
* `ticketStatus.new` = new value

Ticket status

* Unknown = 0,
* Active = 1 - 	Request is currently active
* Closed = 2,  Request has been closed
* Postponed = 3, Request has been postponed
* Deleted = 4, Request has been deleted
* Merged = 5, Request has been merged with another request


## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("ticketId");
```
