<properties date="2016-06-24"
SortOrder="6"
/>

Single Function
---------------

The simplest form of scripting is the single function script. This is accomplished by adding a text file that contains a single method declaration with the correct extension (.cs or .vb) into the scripting folder. Listing Three demonstrates this technique. The example demonstrates manipulating the name and department of the contact after it is retrieved from the database, but before it is returned to the client.

Listing Three: Example AfterGetContactEntity single function script.

    public static void AfterGetContactEntity(int contactId, ContactEntity contact, ref object state)
    {
        contact.Name += "(added by script)";
        contact.Department += "(ScriptDemo)";
        return contact;
    }

 

Full Class
----------

Another option is to write a full class and deploy it as a file. This allows you to structure your code better, as well as the option to refer to other assemblies.

When writing a full class file, you must add the keyword $FullClass at the top of the file. You can also add references to other assemblies that contain types used by this class by adding the $ReferencedAssembly keyword; followed by the full path to the referenced assembly. You must also have a static void Main method. This is a framework requirement.

Figure Four: A full class example that demonstrates changing the name and department of a contact.

    //$FullClass
    //$ReferencedAssembly: C:\MyAssemblies\SuperOffice.Services.dll
    using System;
    using System.Text;
    using System.Windows.Forms;
    using SuperOffice.CRM.Services;
    namespace MyScriptClass
    {
        public static class CSharpScript
        {
            static void Main() { }
     
            public static void BeforeGetContactEntity(int contactId, ref object state)
            {
                //Do  Magic Here
            }
     
            public static void AfterGetContactEntity(int contactId, ContactEntity contact, ref object state)
            {
                contact.Name += "(Magic)";
                contact.Department += "(Scripted)";
                return contact;
            }
        }
    }

 

Assembly
--------

Neither single function files, nor class files, are easy to debug. To be able to debug your scripts you must precompile them into a standalone assembly. As long as the versions referred to in your assembly comply with the running 6.web version all you need to do is drop the dll into the script folder. By adding the pdb file as well, debugging should be a piece of cake.

Permissions
-----------

Just as a reminder, you will need to ensure that the IIS process has read permissions on the scripting folder. That is generally the ASP.NET and Network Service accounts.
