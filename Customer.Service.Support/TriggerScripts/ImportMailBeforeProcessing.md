# ImportMailBeforeProcessing (303)

Input values:

* `subject` = message subject
* `body` = message body
* `bodyHtml` = message html body
* `author` = message sender
* `ticketId` = request id
* `ticketExists` = request found? (0/1)
* `sendAutoReply` = should send reply? (0/1)
* `whyNoAutoReply` = why? message
* `toTrashcan` = 0/1
* `toBeDeleted` = 0/1
* `fromEjournal` = 0/1
* `isBounce` = 0/1
* `mailboxId` = filter id
* `smtpId` = smtp message id
* `mailBackup` = backup
* `filterId` = id
* `to` = message to header
* `from` = message from header

Output

* `subject` = message subject
* `author` = message sender
* `ticketExists` = request found? (0/1)
* `sendAutoReply` = should send reply? (0/1)
* `whyNoAutoReply` = why? message
* `toTrashcan` = 0/1
* `toBeDeleted` = 0/1

## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("subject");
```
