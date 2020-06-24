---
title: Mailbox event, execute after message is saved
path: /EJScript event model/Mailbox event, execute after message is saved
sortOrder: 101
---

This is an ejScript you can add under the menu System design in the screen
System Script.
Her you can add ejScript code that will be executed for all mailboxes after the
mail has been processed by any email filters (except scripts to be executed for the filter) and saved to the system. The script will be execute before any notifications and email filters scripts are run. The call sequence can be described like this:

1) Get email from mail server
2) Analyze email
3) Run "Mailbox event, executed before message is saved" script
4) Run mailbox filter code (except attached script)
5) Store message to the system
6) Run this script
7) Run mailbox filter attached scripts
8) Send notifications

There are several variables available in this context. These can be obtained by

    getVariable("xxx").
    



###Read only variables:###
messageId: The id of the newly created message
ticketId: The id of the ticket
customerId: The id of the primary customer connected to this ticket
customerEmail: Email address of the primary customer connected to this ticket
mailBackup: Raw version of the email
isNewCustomer: set to 1 if this email created a new customer/person (from version 8.1 - R13)
In addition any variables set by the email filter is also available with the name specified in the email filter.


