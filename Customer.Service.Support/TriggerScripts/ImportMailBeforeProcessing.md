# ImportMailBeforeProcessing (303)

There are several variables available in this context. These can be obtained by
getVariable("xxx"). Some of them is also possible to modify. This can be done with setVariable("xxx", \<value>), where \<value> is a valid value for the field you are trying to set (see list below).

Input values:

* `subject` = message subject
* `body` = message body
* `bodyHtml` = message html body
* `author` = message sender
* `ticketId` = request id
* `ticketExists` = 1 if this is a mail on an existing request, else 0 (0/1)
* `sendAutoReply` = 1 if there will be sent an auto reply, else 0 (0/1)
* `whyNoAutoReply` = why? message
* `toTrashcan` = 1 if this mail will be sent to trashcan, else 0 (0/1)
* `toBeDeleted` = 1 if this mail will be deleted, else 0 (0/1)
* `fromEjournal` = 1 if the mail is from another AIM Server, else 0 (0/1)
* `isBounce` = 1 if this is a bounce, else 0 (0/1)
* `mailboxId` = The id of the mailbox that the mail came in to
* `smtpId` = smtp message id
* `mailBackup` = raw message text
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

If you load a ticket object with the given ticketId, it is not recommended to change the values of this ticket. Later the ticket will be saved, and the values you have saved on the ticket might be overwritten.
Thereby you should only modify the variables listed above.

## Sample code

The following is an example of a script which will generate a new request if the incoming email is originally supposed to be connected to an existing request. The script will tell the email engine to generate a new request only if the original request is closed.

```crmscript
#setLanguageLevel 3;
Ticket ticket;
ticket.load(getVariable("ticketId").toInteger());

if (ticket.getValue("status") == "2")
   setVariable("ticketExists", "0");  // Generate new request

```
