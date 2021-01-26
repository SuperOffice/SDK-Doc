<properties date="2016-06-24"
SortOrder="165"
/>

*Description*:

Gets all reply template folders in the system.

 

*In Parameters*:

* sessionKey            - A valid session key

 

*Out Parameters*:

* errorCode                          - See appendix for error codes

* replyTemplateFolders       - An array of *ReplyTemplateFolderStruct*. Elements are:

  * id                     - Id of the reply template folder.

  * description      - Description of the reply template folder

  * name                - Name of the reply template folder

  * parent              - Id of the parent folder.

                       

*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);


if (errorCode.Equals("0")
{

       ticket.ReplyTemplateFolderStruct[] replyTemplateFolders;
       ticketService.getReplyTemplateFolders(sessionKey);

       TreeView tree;

       // assume addNode takes a node id, a node description and a

       // parent node id

       tree.addNode(-1, “Reply template root node”, -1);

       foreach(ticket.ReplyTemplateFolderStruct folder in replyTemplateFolders)
       {
          tree.addNode(folder.id, folder.name, folder.parent);
       }

}
```
 

 
