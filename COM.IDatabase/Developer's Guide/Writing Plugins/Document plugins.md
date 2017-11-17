---
uid: refDocumentplugins
title: Document plugins
---

When a user double-clicks on a document in an archive list, the document record tells SuperOffice which archive provider was used to store the actual document.

SuperOffice then finds the corresponding archive provider plugin in NetServer, and calls 

1.  Determine the prefered open method for this document
2.  Ignore the answer and always get the URL for this document
3.  Launch the URL to open the document.