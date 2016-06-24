<properties date="2016-05-11"
SortOrder="6"
/>

The intention of the section is to develop a document plugin and use it to create documents. Finally we will check whether we can use this plugin to manipulate documents from the SuperOffice applications.

In NetServer there is a built in document plugin called SoArc. This is default plugin that is used by NetServer. The following example is a document plugin that is developed based on the NetServer default document plugin.

This document storage plugin will store DOC and MSG files in separate folders per user.

```
using SuperOffice.Configuration;
using SuperOffice.Exceptions;
using SuperOffice.CRM;
using SuperOffice.CRM.Documents;
   
namespace DocPlugin
{
    [DocumentPlugin(12345678)]
    public class TestDocPlugin : DocumentPluginBase
    {
        string _filePath;
 
        internal TestDocPlugin()
        {
        }
 
  /// <summary>
        /// Initiate the document plugin.
        /// </summary>
        /// <param name="documentInfo">Information about the
document.
       This information has to be saved to the database before
calling
       this method.</param>
       public override void Init(IDocumentInfo documentInfo, bool
       isNewDocument)
       {
            base.Init(documentInfo, isNewDocument);
 
            _filePath = GetFullArchivePath(documentInfo);
       }
 
       /// <summary>
       /// We change this method to store the word docs and e-mails
in two
       /// seperate folders.
       /// </summary>
       /// <param name="documentInfo">Information about the
       document.</param>
       /// <returns></returns>
       private string GetFullArchivePath(IDocumentInfo
documentInfo)
       {
            string retval = base.ArchivePath;
            retval = Path.Combine(retval,
documentInfo.AssociateLoginName);
 
            string subFolder =
documentInfo.Registered.Year.ToString();
 
            if (documentInfo.Registered.Month <= 7)
                subFolder += ".1";
            else
                subFolder += ".2";
 
            string secLevelFolder = "";
 
            string delimiArray = ".";
 
            Char[] chrSepChracter = delimiArray.ToCharArray();
 
            string[] stringArray =
documentInfo.DocumentTemplateInfo.FileName.Split(chrSepChracter,
3);
           
            //create the third level folder and add it to the
            //file path.
            if (stringArray[1].ToString() == "DOC")
                secLevelFolder = "DOC";
            else if (stringArray[1].ToString() == "MSG")
                secLevelFolder = "MSG";
           
            retval = Path.Combine(retval, subFolder);
            retval = Path.Combine(retval, secLevelFolder);   
            retval = Path.Combine(retval, documentInfo.Name);
 
            // normalize the filename
            retval = new FileInfo(retval).FullName;
            return retval;
        }
 
        /// <summary>
        /// Open a stream to read the document
        /// </summary>
        /// <returns><see cref="Stream"/> to read the
document
        from.</returns>
        public override Stream Load()
        {
            try
            {
                return File.OpenRead(FilePath);
            }
            catch (Exception e)
            {
                throw new SoException("Failed to open document '" +
                FilePath + "'.", e);
            }
        }
 
        /// <summary>
        /// Save the document using the <see
cref="Stream"/>provided.
        /// </summary>
        /// <param name="document"><see cref="Stream"/>
to read the
  document from.</param>
        /// <remarks>
        /// If the document does not exist from before, create a
new
        instance of it.
            /// </remarks>
            public override void Save(Stream document)
            {
                  Stream archive = null;
                  try
                  {
                        FileInfo fi = new FileInfo(FilePath);
SuperOffice.CRM.Documents.Document.EnsureDirectoryExists(fi.Directory);
 
                  // if filename already exist, rename the document
                  int idx = 1;
                  string baseName =
                 
System.IO.Path.GetFileNameWithoutExtension(FilePath);
                  while (_isNewDocument && fi.Exists)
                  {
                        fi = new FileInfo(fi.Directory + "\\" +
baseName +
                        "(" + idx.ToString() + ")" + fi.Extension);
                        ++idx;
                  }
 
                  // the filename changed, update the document
record
                  if (fi.FullName != FilePath)
                  {
                        SuperOffice.CRM.Rows.DocumentRow row = new
SuperOffice.CRM.Rows.DocumentRow.IdxDocumentId(DocumentInfo.DocumentId);
                        row.Name = fi.Name;
                        row.Save();
                        _filePath = fi.FullName;
                  }
 
                        archive = fi.Open(FileMode.Create);
 
                        // start from the beginning
                        document.Position = 0;
                        byte[] buffer = new byte[BufferSize];
                        while (true)
                        {
                             int length = document.Read(buffer,0,
                              BufferSize);
                             archive.Write(buffer,0,length);
                             if (length < BufferSize)
                             break;
                        }
                  }
                  catch (Exception e)
                  {
                        throw new SoException("Failed to save file
                        ("+FilePath+")",e);
                  }
                  finally
                  {
                        document.Close();
                        if (archive!= null)
                        {
                             archive.Flush();
                             archive.Close();
                        }
                  }
            }
 
            /// <summary>
            /// Modify information about the document.
            /// </summary>
            /// <param name="oldDocumentInfo">Old information
about the
            document.  The new information is already saved to the
database
            when this method is called.</param>
            public override void Modify(IDocumentInfo
oldDocumentInfo)
            {
                  string oldPath =
GetFullArchivePath(oldDocumentInfo);
                  if (oldPath != FilePath)
                  {
                        if (System.IO.File.Exists(FilePath))
                        {
                             string msg = "Unable to rename file. A
file
                        with the same name already exist.\n" +
                        FilePath;
                             throw new SoException(msg, null, msg);
                        }
                  File.Move(oldPath, FilePath);
                  }
            }
 
            /// <summary>
            /// Remove the document from the document archive.
            /// </summary>
            public override void Delete()
            {
                  if (Exists)
                  File.Delete(FilePath);
            }
 
            /// <summary>
            /// Does the document exist in the document archive.
            /// </summary>
            public override bool Exists
            {
                  get
                  {
                        return File.Exists(FilePath);
                  }
            }
 
            /// <summary>
            /// Length (in bytes) of the document.
            /// </summary>
            public override long Length
            {
                  get
                  {
                        return new FileInfo(FilePath).Length;
                  }
            }
 
            /// <summary>
            /// Fully qualified path to file in so_arc.
            /// </summary>
            public string FilePath
            {
                  get {return _filePath;}
            }
      }
}
```

 

As we can see the above example is lengthy but fairly straight-forward.

In the above example we have changed the GetFullArchivePath method to save the word documents and emails in two separate folders called “DOC” and “MSG”. All the other methods will be common to any implementation that does this kind of operation.
