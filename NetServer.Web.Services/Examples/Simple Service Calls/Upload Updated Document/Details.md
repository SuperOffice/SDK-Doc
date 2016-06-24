<properties date="2016-06-24"
SortOrder="6"
/>

```
 
using SuperOffice.CRM;
using SuperOffice.CRM.Services;
using SuperOffice;
 
 
/// <summary>
///This method is used to download an existing document , modify it and upload it to document archive
/// </summary>
/// <param name="documentId"> The id of the document to be updated</param>
 
private void UpdateDocument(int documentId)
{
    // Create an IDocumentAgent object and retrieve a document
    using(DocumentAgent agent = new DocumentAgent())
    {
        DocumentEntity documentEntityExisting = agent.GetDocumentEntity(documentId);
        // Check if the document exists
        if (documentEntityExisting != null)
        {
            // Generate the file name for the downloaded document
            string extentionOfOriginalDocument = Path.GetExtension(documentEntityExisting.Name);
            string fileName = "tempFile" + extentionOfOriginalDocument;
     
            // Download the document to the temporary folder
            Stream originalDocumentStream = agent.GetDocumentStream(documentId);
            agent.CreateTempFile(fileName, originalDocumentStream);
     
            // Close and dispose the stream
            originalDocumentStream.Close();
            originalDocumentStream.Dispose();
           
            // Now the file is ready to be modified....
     
            // Read the path for the temporary folder from the config file
            string tempFilePath = Path.Combine(Path.GetTempPath(), 
                SoContext.CurrentPrincipal != null ? 
                    SoContext.CurrentPrincipal.Associate : "ALL");            
     
            // Full path for the downloaded document
            string fullPath = Path.Combine(tempFilePath.Replace("\\\\", "\\"), fileName);
           
            // Check if the temporary document exists              
            if (File.Exists(fullPath))
            {    
                // Assuming the user has modified the temporary file...
     
                // Get the file stream for the temporary local file
                Stream tempStream = new FileStream(fullPath, FileMode.Open, FileAccess.Read);                   
                agent.SetDocumentStream(documentEntityExisting, tempStream, true);
            }
        }
    }
}
   
 
```

In order to modify a document we will first have to download the document to a temporary folder so that it is available locally for the user to make modifications. Once modified, the temporary file is uploaded to the document archive folder.

The first step in the above example is to retrieve the document using DocumentAgent. The DocumentAgent.GetDocumentEntity method is invoked to get the DocumentEntity, which is then used to be download the document.

When downloading a document a name has to be provided for the downloaded copy of the document. We have to make sure the extensions of both the original and the downloaded document are the same. The original file extension is extracted and concatenated with the temporary file name. Once that’s done, we are ready to download the document. DocumentAgent.CreateTempFile is invoked and the temporary file name and the document stream for the original document are passed as parameters to the method. A stream is used to download the document contents from the server. The temp filename is used to for storing the contents locally.Once the file is created, we have to explicitly close and dispose the steam to eliminate concurrent access issues. Now, the document is ready to be modified. Assuming the modifications are done, the next step is to upload the modified document to the document archive folder. This is achieved by setting the file stream of the temporary modified file as the document stream for the original document entity.Full path for the local file for which the stream created, the file open mode and the file access details are passed as parameters in initializing the file stream. Then the DocumentAgent.SetDocumentStream method is invoked to store a document from the created stream. The method requires three parameters namely, the original document entity, the stream for the temporary local file and the Boolean value specifying whether the stream will overwrite existing data stored for this record in the document archive. The above method is called as follows.

```
 
private void btnUploadDocument_Click(object sender, EventArgs e)
{
    try
    {
        using (SoSession newSession = SoSession.Authenticate("p", "p"))
        {
            this.UpdateDocument(187);
        }
    }
    catch (Exception ss)
    {
        MessageBox.Show(ss.Message);
    }
}
 
```
