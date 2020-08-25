---
title: Write back documents
path: /EJScript/NetServer examples/Write back documents
sortOrder: 9546
---


    // here we will load in a file (typically a word document) and save it in CRM as a document
    
    String fileName = "c:\\path-to-file\\filename.doc";
    
    File file;
    if (file.open(fileName, "rb") == true)
    {
      NSDocumentAgent docAgent;
      NSDocumentEntity doc = docAgent.CreateDefaultDocumentEntity();
    
      NSStream stream;
      stream.SetStream(file.readBinary());
    
      doc.SetName(fileName);
      doc.SetHeader(fileName);
      doc.SetDate(getCurrentDateTime());
      doc.SetDescription("document uploaded from ejScript");
    
      NSAssociateAgent assocAgent;
      doc.SetAssociate(assocAgent.GetAssociate(1));
    
      doc = docAgent.SaveDocumentEntity(doc);
    
      doc = docAgent.SetDocumentStream(doc, stream, true);
    }
    else
    {
      print("Couldn't open file " + fileName);
    }


