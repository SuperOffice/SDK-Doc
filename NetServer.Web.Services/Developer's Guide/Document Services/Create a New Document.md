<properties date="2016-06-24"
SortOrder="3"
/>

This document focuses on how to create a new document in SO\_ARC based on a specific template. It also demonstrates how to download it the new document to a local folder and open it.

To create a new document, first create a document entity and set the document properties. In this example we have used a specific document template on which the document is based. The owner of the document is set, followed by the associated person and project with which the document is connected.

```
public int CreateDocument()
{
    // create a document entity
    DocumentEntity documentEntity = new DocumentEntity();
 
    // set properties of document entity
    documentEntity.Attention = "Thomas O S";
    documentEntity.Header = "Test document";
    documentEntity.Name = "Test.doc";
    documentEntity.OurRef = "Our Reference";
    documentEntity.YourRef = "Your Reference";
    documentEntity.Description = "This is a new document entity created using IDocument Agent";
    documentEntity.Date = DateTime.Today;
    documentEntity.ExternalRef = "External Reference";
 
    // set the document template for the document
    DocumentTemplate docTmpl = new DocumentTemplate();
    docTmpl.DocumentTemplateId = 1;
    documentEntity.DocumentTemplate = docTmpl;
 
    // set the owner of the document
    Associate owner = new Associate();
    owner.AssociateId = 110;
    documentEntity.Associate = owner;
 
 
    // set the person to whom the document is connected : optional
    Person person = new Person();
    person.PersonId = 12;
    documentEntity.Person = person;
 
    // set the contact associated with the document: can also be null
    Contact contact = new Contact();
    contact.ContactId = 4;
    documentEntity.Contact = contact;
 
    // set the project to which the document is connected  : optional
    Project project = new Project();
    project.ProjectId = 15;
    documentEntity.Project = project;
 
    //create new instance
    using(DocumentAgent agent = new DocumentAgent())
    {
        DocumentEntity createdDocumentEntity = agent.SaveDocumentEntity(documentEntity);
 
        // create a new physical document and store it in the document archive
        agent.CreateNewPhysicalDocumentFromTemplate(
             createdDocumentEntity.Contact.ContactId, 
             createdDocumentEntity.Person.PersonId, 
             0, 
             createdDocumentEntity.DocumentId, 
             0, 
             0, 
             createdDocumentEntity.Project.ProjectId);
 
        return createdDocumentEntity.DocumentId;
    }
}
```

Once the property values are set, the document is persisted to the database using the DocumentAgent.SaveDocumentEntity method. This call creates a new Document record in the database, and returns a DocumentEntity instance that now contains a document id.
With a document record in the database, you create the physical document and save it in the document archive. Do this using the DocumentAgent.CreateNewPhysicalDocumentFromTemplate method. CreateNewPhysicalDocumentFromTemplate requires the contact, cerson, appointment, sale, selection, and project Id's, along with the document id.

The following code example demonstates how to download the created document to a local directory and open it.

```
private void DownloadDocument(int documentId)
{
    // create an IDocumentAgent object and retrieve a document
    using(DocumentAgent agent = new DocumentAgent())
    {
        DocumentEntity documentEntityExisting = agent.GetDocumentEntity(documentId);
 
        // check if the document exists
        if (documentEntityExisting != null)
        { 
            // generate the file name for the downloaded document
            string extentionOfOriginalDocument = Path.GetExtension(documentEntityExisting.Name);
            string fileName = "tempFile" + extentionOfOriginalDocument;
 
            // download the document to the temporary folder
            agent.CreateTempFile(fileName, agent.GetDocumentStream(documentEntityExisting));
 
            // read the path for the temporary folder from the config file
            string tempFilePath = Path.Combine(SuperOffice.Configuration.ConfigFile.Documents.TemporaryPath, SoContext.CurrentPrincipal != null ? SoContext.CurrentPrincipal.Associate : "ALL");

            // full path for the downloaded document
            string fullPath = Path.Combine(tempFilePath.Replace("\\\\", "\\"), fileName);
 
            // open the document using the open shell command
            if (File.Exists(fullPath))
            {
                // create a process
                System.Diagnostics.Process myProcess = new System.Diagnostics.Process();
                // pass the file name with extension to open the file           
 
                myProcess.StartInfo.FileName = fullPath;
                myProcess.StartInfo.WindowStyle =
                          System.Diagnostics.ProcessWindowStyle.Normal;
                myProcess.Start();
            }
            else
            {
                MessageBox.Show("The document has not been downloaded properly.");
            }
        }
        else
        {
            MessageBox.Show("The document you are trying to open does not exist in the server.");
        }
    }
}
```

In example above, first retrieve the document using DocumenyAgent.GetDocumentEntity. This is used by the DocumentAgent.GetDocumentStream method to get the actual file from the document archive. You must also provide a name for the file. This name becomes the temporary file name where the file is downloaded, built-up, and opened from. You must be sure the extensions of both the original and the downloaded document are the same. Now you are ready to download the document. Use the DocumentAgent.CreateTempFile method to execute the download.
The example here uses the System.Diagnostics.Process class to open the file. This ensures that the default application assigned to open this file type is launched to view the document.
