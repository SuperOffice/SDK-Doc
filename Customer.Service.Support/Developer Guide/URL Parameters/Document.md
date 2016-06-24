<properties date="2016-06-24"
/>

This article lists the most used actions and corresponding url parameters

Document
--------

| Action         | Parameters |
|----------------|------------|
| find           |            |
| listFolders    | focus      
                  expandId    |
| editDocument   | documentId 
                  folderId    |
| editKbCategory | parentId   
                  id          |
| editKbEntry    | categoryId 
                  id          |
| viewKbEntry    | id         |

Example
-------

`http://server/custsvc/Document.exe?action=viewKbEntry&id=123`

will display the knowledge base entry with id 123.
