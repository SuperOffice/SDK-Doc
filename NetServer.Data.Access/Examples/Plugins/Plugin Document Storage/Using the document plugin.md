<properties date="2016-05-11"
SortOrder="7"
/>

The tricky part comes when we try to use the Plugin we developed and do some kind of operation for a document.

Each document has the archive provider id stamped on its document record. The archive provider id is normally copied from the template used to create the document. In other words, the template determines where the document should be stored.

The below example demonstrate how we can use the Plugin without setting up a template.

```
using SuperOffice;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Documents;
using SuperOffice.Data;
using SuperOffice.CRM.Globalization;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
//create a appointment row
      AppointmentRow appRow = AppointmentRow.CreateNew();
      //create document row
      DocumentRow docRow = DocumentRow.CreateNew();
 
      //set the values of the appointment row
      appRow.SetDefaults();
      appRow.ContactId = 2;
      appRow.PersonId = 9;
      appRow.TaskIdx = 5;
      appRow.Type = AppointmentType.Document;
      appRow.Status = AppointmentStatus.Completed;
      appRow.ProjectId = 66;
      appRow.ActiveDate = DateTime.Now;
      appRow.EndDate = appRow.ActiveDate;
      appRow.Done = appRow.ActiveDate;
      appRow.DoBy = appRow.ActiveDate;
 
      //set the values of the document row
      docRow.AppointmentId = appRow.AppointmentId;
      //Note: here we give the ArchiveProvider id as 12345678.
since it is
      //id that we have given to our document plugin.
      docRow.ArchiveProvider = 12345678;
      docRow.Name = "Document Plugin.doc";
      docRow.Header = "Header for: " + "Document Plugin Test";
      docRow.OurRef = "Our ref.";
      docRow.Attention = "Donald Duck";
      //save the document row
      docRow.Save();
      //assign the document id
      appRow.DocumentId = docRow.DocumentId;
      //save the appointment row
      appRow.Save();
      //set the visible for value
      RowVisibleForHelper.SetVisibleFor(appRow);
 
      try
      {
            //we create a TemplateVariable and set the variables
that we
      // want to appear in the doc. Note that we have given the
same
      // parameters that we have given when creating the document
row
      //and the appointment row
            TemplateVariables tags = new TemplateVariables(2, 9,
66, docRow.DocumentId, 0, 0, 0);
            //create a new document. Here our plugin will be used
to create
            // the new document
            Document doc = Document.CreateNew(docRow.DocumentId,
tags);
}
      catch (Exception ex)
      {
            string msg = ex.Message;
      }
```

 

From the above example we can see that we have ArchiveProvider ID of the document row as 12345678. We have done this since we had this attribute at the very top of our plugin example:

```
[DocumentPlugin(12345678)]
```

 

Since we have set the ArchiveProvider ID of the document row our plugin will be used to create the document that we asked to create in the above example. Now our document will be stored in the “DOC” folder of our storage. The below screen shot demonstrate how the document is stored in the storage.

<img src="../Plugin%20Document_files/image001.jpg" width="604" height="114" />

For all this to work we have to specify our plugin dll in the config file of our application. The below section illustrate the change that we have do in the config file.

```
<Factory>
      <DynamicLoad>
        <add key="DocPlugin"
value="C:\\TestApps\\DocPlugin\\DocPlugin\\bin\\Debug\\DocPlugin.dll"
/>
      </DynamicLoad>
</Factory>
```

 

From the above example we have created a document that is attached to an appointment. Now say we want to open the attached document from the Six.Web application, in order to do this we have to add our dll to web.config file of the Six.Web application. The reason behind this is Six.Web application needs our plugin to know the way we have implemented our plugin.

In our example we have set the ArchiveProvider ID as 12345678 so now the Six.Web application will search for a plugin that have the ID as 12345678. In order to provide this we have to change the below section of the web.config file.

 

 

```
<Factory>
      <DynamicLoad>
        <add key="DocPlugin"
value="C:\\TestApps\\DocPlugin\\DocPlugin\\bin\\Debug\\DocPlugin.dll"
/>
      </DynamicLoad>
</Factory>
```

 

This is the same change that we did in the app.config of our application.
