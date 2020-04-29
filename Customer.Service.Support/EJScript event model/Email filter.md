---
title: Email filter
path: /EJScript event model/Email filter
sortOrder: 100
---

When you create an email filter you have the possibility to add a script which should be executed.

The script will be executed with the following variables set (accessible with getVariable):
messageId
ticketId
customerId
customerEmail
mailBackup
isNewCustomer (from version 8.1 - R13)

You have also the possibility to add your own variables using the Find Regular Expressions tab in the filter.


