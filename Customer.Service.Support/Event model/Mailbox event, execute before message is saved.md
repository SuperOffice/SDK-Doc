---
title: Mailbox event, execute before message is saved
path: /EJScript event model/Mailbox event, execute before message is saved
sortOrder: 102
---

This is an ejScript you can add under the menu System design in the screen System Script.
Her you can add ejScript code that will be run for all mailboxes before the mail is taken by any mailfilter, and also before it is saved.

There are several variables available in this context. These can be obtained by
getVariable("xxx"). Some of them is also possible to modify. This can be done with setVariable("xxx", \<value>), where \<value> is a valid value for the field you are trying to set (see list below).

Here follows a list of all available variables that are possible to modify.

subject:  Subject of the mail
author:   Autjor of the mail
ticketExists:  1 if this is a mail on an existing request, else 0
sendAutoReply: 1 if there will be sent an auto reply, else 0
whyNoAutoReply: Description on why there will not be sent any autoreply
toTrashcan: 1 if this mail will be sent to traschcan, else 0
toBeDeleted: 1 if this mail will be deleted, else 0



###Read only variables:###
body: The plain text part of the mail
bodyHtml: The html part of the mail
ticketId: The ticketId, if this is a new ticket, then ticketId = -1
fromEjournal: 1 if the mail is from another AIM Server, else 0
isBounce: 1 if this is a bounce, else 0
mailboxId: The id of the mailbox that the mail came in to



###Remark:###
If you load a ticket object with the given ticketId, it is not recommended to change the values of this ticket. Later the ticket will be saved, and the values you have saved on the ticket might be overwritten.
Thereby you should only modify the variables listed above.




###Example:###

The following is an example of a script which will generate a new request if the incoming email is originally supposed to be connected to an existing request. The script will tell the email engine to generate a new request only if the original request is closed.


    Ticket ticket;
    ticket.load(getVariable("ticketId").toInteger());
    
    if (ticket.getValue("status") == "2")
      setVariable("ticketExists", "0");  // Generate new request


