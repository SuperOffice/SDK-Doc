<properties date="2016-06-24"
SortOrder="164"
/>

*Description*:

Gets the id and name of all reply templates under a given folder. Useful for getting a list of reply templates in the system, which can be retrieved in full with the getReplyTemplate method.

 

*In Parameters*:

* sessionKey            - A valid session key

* folderId                 - The id of the folder to retrieve reply templates from. -1 means retrieving all reply templates

 

*Out Parameters*:

* errorCode              - See appendix for error codes

* replyTemplates      - An array of *ReplyTemplateStruct*. Elements are:

  * id                     - Id of the reply template.

  * description      - Description of the reply template

  * folder              - Folder id the reply template is in.

* description                        - The description of the given folder

* name                      - The name of the given folder

                       

*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

 
if (errorCode.Equals("0")
{
   ticket.ReplyTemplateStruct[] replyTemplates;
   ticketService.getReplyTemplates(sessionKey, -1);

   // assume this has been populated, see example for
   // getReplyTemplateFolders
   TreeView tree;

   foreach(ticket.ReplyTemplateStruct rt in replyTemplates)
   {
      tree.addNode(rt.id, rt.description, rt.folder);
   }

}
```