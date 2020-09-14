---
title: Anchor line
uid: blogic_anchor_line
sortOrder: 1
---

This element will display a horizontal line of clickable URLs.

## Configuration

| Value             | Description                  |
|:------------------|:-----------------------------|
| table             | set to get a default set of URLs (from v.4.0)<br/>ticket, customer, person, company, cust_company, contact             |
| items             | array of items to display    |
| items.length      | number of items              |
| items.n.label     | the label of item n          |
| items.n.url       | the URL of item n            |
| items.n.appendId  | whether to append the active ID to the URL (Bool) |
| items.n.iconUrl   | custom icon to use (v. 4.0)  |
| items.n.target    | target of the URL (optional) |
| items.n.alt       | alternative text (optional)  |
| items.n.special   | whether to check for special links (Bool) |

## Example

```crmscript
table = customer
items.length = 2
items.0.label = New ticket
items.0.url = /bin/ticket?action=newTicket
items.1.label = New customer
items.1.url = /bin/ticket?action=newCustomer
items.0.iconUrl = /doc/icons/clickme.gif
```

Will have Edit Customer, New Ticket, Send Password, List Invoices, and Connect Customer URLs.

## Functions

### getFieldValue(String field)

| Field             | Description                         |
|:------------------|:------------------------------------|
| numEntries        | the number of anchors in the line   |
| entry.x.icon      | the icon of entry x                 |
| entry.x.label     | the label of entry x                |
| entry.x.url       | the URL of entry x                  |
| entry.x.target    | the target of entry x               |
| entry.x.warningMessage | the warning message of entry x |
| entry.x.disabled  | whether the entry x is deactivated, 1=yes, 0=no |

### setFieldValue(String action, Map values)

| Action   | Map keys               | Description                         |
|:---------|:-----------------------|:------------------------------------|
| addEntry | label<br/>url<br/>target<br/>alt<br/>icon<br/>index<br/>warningMessage<br/>disabled<br/>onClick | Adds an entry |
| delEntry | index<br/>group | Deletes the entry or group |
