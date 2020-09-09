---
title: Recipients
path: /Blogic/Screen Elements/Recipients
sortOrder: 52
---



###This element is used to specify email recipients. It will accept the following boolean values, which specify which lines to show:###


- <b>"copyToAll"</b>
- <b>"copyToCreatedBy"</b>
- <b>"copyToCustomer"</b>
- <b>"copyToEab"</b>
- <b>"copyToOther"</b>
- <b>"copyToOwner"</b>
- <b>"copyToSelf"</b>
- <b>"ticketId"</b>: may be set to specify the related ticket. This will affect the values in "copyToOwner", etc.





###Example:###
    
    copyToAll = false
    copyToCreatedBy = false
    copyToCustomer = false
    copyToEab = true
    copyToOther = true
    copyToOwner = false
    copyToSelf = true
    



###Functions:###


 - `getFieldValue()`:
    - <b>"to"</b>: Will return a properly formated string of To-receipients.
    - <b>"cc"</b>: CC recipients.
    - <b>"bcc"</b>: Bcc recipients.
    - <b>"sms"</b>: Comma separated SMS recipients.
    - <b>"isCopyToAnyCustomerSet"</b>: "1" if a customer is among the recipients, otherwise "0".
 - setFieldValue(string, Map):
    - <b>"addCustomers"</b>: Adds customers with id's specified in the comma-separated list in the value "ids".
    - <b>"setDefaultToCustomer"</b>: Enables the checkbox in front of the customer line.


