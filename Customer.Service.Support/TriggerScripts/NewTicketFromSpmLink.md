# NewTicketFromSpmLink (104)

Called when a mailing link was clicked and mailing specifies link tracking.

Input values:

* `custId` = customer person id
* `personId` =  customer person id
* `linkId` = link id
* `shipmentId` = mailing id
* `linkUrl` = url
* `linkHits` = number of hits
* `ticketTitle` = ticket title
* `ticketCategory` = ticket category id
* `ticketPriority` = ticket priority id
* `ticketOwnedBy` = owner of ticket
* `firstHit` = first click (0/1)



## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("entryId");
```
