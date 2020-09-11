---
title: Contact and recipient
uid: blogic_contact_and_recipient
sortOrder: 3
---

This is a complex element used to represent customers connected to a request. It also handles mail recipients.

|## Configuration

| Value           | Description |
|:----------------|:------------|
| ticketId        |             |
| noDefaultFields |             |
| controlVersion  | 1 or 2      |

## Example

**Creation script with element config:**

```crmscript
addHtmlElement(getScreenElementId(screenElementIndex),
  getScreenElementName(screenElementIndex),
  getScreenElementType(screenElementIndex),
  "ticketId = " + getCgiVariable("ticketId") + "\nlabel = Recipients\nnoDefaultFields = true\n");

Map colMap;

colMap.insert("displayField", "customer.firstname");
colMap.insert("searchField", "customer.firstname");
colMap.insert("operator", "OperatorBeginsWith");
colMap.insert("label", "Firstname");
recipients.setFieldValue("addColumn", colMap);

colMap.insert("displayField", "customer.lastname");
colMap.insert("searchField", "customer.lastname");
colMap.insert("operator", "OperatorBeginsWith");
colMap.insert("label", "Lastname");
recipients.setFieldValue("addColumn", colMap);

colMap.insert("displayField", "customer.display_email");
colMap.insert("searchField", "customer.display_email");
colMap.insert("operator", "OperatorBeginsWith");
colMap.insert("label", "Email");
recipients.setFieldValue("addColumn", colMap);

colMap.insert("displayField", "customer.phone");
colMap.insert("searchField", "customer.phone");
colMap.insert("operator", "OperatorBeginsWith");
colMap.insert("label", "Phone");
recipients.setFieldValue("addColumn", colMap);
```

## Functions

### getFieldValue(String field)

| Field          | Control ver. | Description |
|:---------------|:-------------|:------------|
| to             | 1 and 2      | A string of all email addresses with type = to |
| cc             | 1 and 2      | A string of all email address with type = cc |
| bcc            | 1 and 2      | A string of all email address with type = bcc |
| sms            | 1 and 2      | A string of all email address with type = sms |
| contacts       | 1 and 2      | A string array with the IDs of all customers.<br/> [0] is the primary customer |
| copyToFacebook | 1 and 2      |
| json |         | 1 and 2      |
| recipientCount | 1 and 2      | The number of recipients |
| rows           | 1            | The number of customers in the grid |
| columns        | 1            | The number of rows in the grid |
| row.x.y        | 1            | The string at position x,y |
| primaryContact | 1            | The ID of the primary contact |
| ownerType      | 1            | to, cc, bcc or sms if the owner has been added to the contact (email) list |
| defaultCopyToContacts | 1      | A string array of all email addresses that were added to the recipient list because of the default copy to flag |

### setFieldValue(String action, Map values)

| Action       | Map keys               | Description                                |
|:-------------|:-----------------------|:-------------------------------------------|
| addId        |                        | Adds a customer with the given ID to the element |
| addRow       |                        | Same as for the multiple relations element |
| addCriteria  |                        | Same as for the multiple relations element |
| addColumn    |                        | Same as for the multiple relations element |
| defaultCopy  |                        | Adds the email address of all the customers as default addresses to the recipient list |
| addRecipient | type                   | Adds an email or sms address to the recipient list |
