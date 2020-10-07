---
title: Contact and recipient
path: /Blogic/Screen Elements/Contact and recipient
sortOrder: 21
---

This is a complex element which is used for representing customers connected to a request. It also handles mail recipients.



###The following configuration values are available:###


 - "ticketId"
 - <b>"noDefaultFields"</b>
 - <b>"controlVersion"</b> - 1 or 2




###Functions:###


 - setFieldValue(string, Map):
    - <b>"addId"</b>: Add a customer with the given id to the element
    - <b>"addRow"</b>: Same as for the multiple relations element
    - <b>"addCriteria"</b>: Same as for the multiple relations element
    - <b>"addColumn"</b>: Same as for the multiple relations element
    - <b>"defaultCopy"</b>: Will add the email address of all the customers as default addresses to the recipient list
    - <b>"addRecipient"</b>: Add an email/sms address to the recipient list.
        - <b>"type"</b>
            - <b>"to"</b>
            - <b>"cc"</b>
            - <b>"bcc"</b>
            - <b>"sms"</b>
         - <b>"adr"</b>: you supply the email address or the sms number



 - `getFieldValue(string)`
    - <b>"to"</b>: Returns a string of all email address with type to
    - <b>"cc"</b>: Returns a string of all email address with type cc
    - <b>"bcc"</b>:  Returns a string of all email address with type bcc
    - <b>"sms"</b>: Returns a string of all email address with type sms
    - <b>"contacts"</b>: Returns a string array with the ids of all customers. The first in the array is the primary customer
    - <b>"copyToFacebook"</b>:
    - <b>"json"</b>
    - <b>"recipientCount"</b>: Return the number of recipients
 - Control version 1 only
    - <b>"rows"</b>: Number of customers in the grid
    - <b>"columns"</b>: Number of rows in the grid
    - "row.x.y": Get the string at position x,y
    - <b>"primaryContact"</b>: Returns the id of the primary contact.
    - <b>"ownerType"</b>: Returns either to, cc, bcc or sms if the owner has been added to the contact (email) list.
    - <b>"defaultCopyToContacts"</b>: Returns a string array of all email addresses which was added to the recipient list because of the default copy to flag






###Customizing fields example:###
    
    addHtmlElement(getScreenElementId(screenElementIndex),
      getScreenElementName(screenElementIndex),
      getScreenElementType(screenElementIndex),
      "ticketId = " + getCgiVariable("ticketId") + "\nlabel = Recipients\nnoDefaultFields = true\n");
    



###In element config, the following in the loadscript:###


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


