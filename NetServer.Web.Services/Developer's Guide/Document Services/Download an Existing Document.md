<properties date="2016-06-24"
SortOrder="5"
/>

In order to modify a document we will first have to download the document to a temporary folder so that it is available locally for the user to make modifications. Once modified, the temporary file is uploaded to the document archive folder.

The first step retrieves the document using an Agent instance, DocumenyAgent. The DocumentAgent.GetDocumentEntity method is invoked to get a DocumentEntity instance, which contains all properties of the document you are going to download - such as Header, Description, etc.

When downloading a document, you must specify a name that will be used to name a copy of the original document. Make sure the extensions of both the original and the downloaded document are the same. In the example below, the original file extension is extracted and then appended to the end of the temporary file name. Now you are are ready to download the document.

```
using SuperOffice;
using SuperOffice.CRM.Services;
using System.IO;
 
/// 
/// This method is used to download an existing document , modify it and upload it to document archive
/// 
///  The id of the document to be updated
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
            string tempFilePath = Path.Combine(SuperOffice.Configuration.ConfigFile.Documents.TemporaryPath,
                SoContext.CurrentPrincipal != null ? SoContext.CurrentPrincipal.Associate : "ALL");

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

When calling the DocumentAgent.CreateTempFile method, the temporary file name and the document stream for the original document are passed into the method.

DocumentAgent.GetDocumentStream is used to download the document contents from the server. The temp filename is used to for storing the contents locally and, once the file is created, you have to explicitly close and dispose the steam to eliminate concurrent access issues. At this point you are able to modified the document.

Assuming the modifications are done, the next step is to upload the modified document to the document archive folder. This is achieved by setting the file stream of the temporary modified file as the document stream for the original document entity. Using a FileStream instance, and passing in the full path to the local file, the file open mode, and the file access details, you prepare the document for upload.

The DocumentAgent.SetDocumentStream method is used to do perform the actual upload. SetDocumentStream requires three parameters: the original document entity, the stream for the temporary local file, and the Boolean value specifying whether the stream will overwrite an existing file with the same name stored in the document archive.
