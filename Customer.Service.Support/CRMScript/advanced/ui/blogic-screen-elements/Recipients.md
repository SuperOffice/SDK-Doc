---
title: Recipients
uid: blogic_recipients
sortOrder: 18
---

This element is used to specify email recipients.

## Configuration

The following boolean values specify which lines to show:

* copyToAll
* copyToCreatedBy
* copyToCustomer
* copyToEab
* copyToOther
* copyToOwner
* copyToSelf

In addition, `ticketId` may be set to specify the related ticket. This will affect the values in `copyToOwner`, and similar.

## Example

```crmscript
copyToAll = false
copyToCreatedBy = false
copyToCustomer = false
copyToEab = true
copyToOther = true
copyToOwner = false
copyToSelf = true
```

## Functions

### getFieldValue()

| Value                  | Description                                          |
|:-----------------------|:-----------------------------------------------------|
| to                     | Returns a properly formatted string of To-recipients |
| cc                     | CC recipients                                        |
| bcc                    | Bcc recipients                                       |
| sms                    | Comma-separated SMS recipients                       |
| isCopyToAnyCustomerSet | Whether a customer is among the recipients<br />1=yes, 0=no |

### setFieldValue(String, Map)

| Value                | Description                                        |
|:---------------------|:---------------------------------------------------|
| addCustomers         | Adds customers with IDs specified in the comma-separated list in the value `ids` |
| setDefaultToCustomer | Enables the checkbox in front of the customer line |
