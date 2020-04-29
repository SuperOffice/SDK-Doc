---
title: Attachment
path: /Blogic/Screen Elements/Attachment
sortOrder: 13
---


This element adds the attachment field to your screen, similar to the one found under "new request" in Customer Service.
   
**The configuration will accept the following configuration values:**   



 - <b>"multiple"</b>: Will allow uploading of several attachments.
 - <b>"noHardDelete"</b>: Will not delete the actual attachment from the database, just from the attachment component.





###Example:###
    
    multiple = true
    



###Functions:###


 - "toInteger()" returns the id of one field
 - "toString()" returns a comma-separated list of all ids of all attachments.
 - "setValue(string)" - the string should contain a comma-separated list of attachment ids
 - "setFieldValue("addAttachment", map)" -  the map should contain the key "attachmentId" and the value of the attachment id. To add several attachments use setFieldValue several times.


