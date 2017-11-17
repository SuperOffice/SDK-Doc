---
uid: Importdata
title: Import data
---


The import system in the Admin client lets the user read in and add/merge the contents of a text file with the existing information in a database. The clever thing about the SuperOffice import system is that it understands the relationship between different tables, so that one file can add records to several different tables once the mappings are correctly defined.

For example, the line:

> SuperOffice AS, +47 23354000, [www.superoffice.no](http://www.superoffice.no)

places one record in the contact table, one in the phone and one in the url table. The phone table entry needs the contact id and the type set correctly. The import engine handles all this stuff for you.

You can run an import without human intervention once you have defined the mapping in the admin client by saving the mapping and re-running the import using the mapping you saved. The function looks like this:

[Database.Import( "Filename.dsc" )](SUPEROFFICEDBLib~Database~Import.md)

It reads the name of the file to import and the mapping of columns to table fields from the descFilename. In other words, you update the file and re-run the import. Unfortunately you cannot specify the name of the file to import with this function. The filename is baked into the description file.

You create a description file by using the SAVE button at the top of  the Import screen in the Admin client.

![](../images/import-admin1.gif)

 

### Creating an Import Description

Start the Admin client and go to the IMPORT screen.

Click on the Import File button and find the EXPORTED-ROWS.TXT file

![](../images/import-admin2.gif)
 
It should have three columns: name, phone, city

The [EXPORTED-ROWS.TXT](Files/exported-rows.txt) file looks like this:

> Name            Phone num    City
> Gringotts Wizarding Bank     800-floo   London
> Hogwarts School 750-4201     Manchester
> Bag End         532 1239     The Shire
> Evil Inc        666-666      Barad-dûr
> Evil Associates 999-9999     Orthanc
> Daily Planet    555-2396     Metropolis

 

Map these columns to the right fields by selecting the field name and in the list and clicking on the MAP button. Or you can double-click on the field name. In the field mapping dialog, you need to find out which field in the database corresponds to which field in the file.

![](../images/import-map-field.gif)

Once you have defined the field mappings, you need to define the duplicate handling. Select each field in the duplicate handling list and click on the “Update” button to display the duplicate handling dialog:

![](../images/import-duplicates.gif) 

Once all the fields have a duplicate action defined, you are ready to run the import. If you do not define duplicate actions for all the fields, then the import will fail.

Do not run the import, but instead save the description to a file by clicking the SAVE button at the top of the panel.

Make a note of the description file name. Remember where the .DSC file was saved.

### Running the Import

Now we are going to run the import using the description file we created in the previous step.

Set db = CreateObject("SuperOfficeDB.Database")
loginOk = db.Login("name","pass")
if not loginOk then
   msgbox "Unable to log in"
   WScript.Quit
end if
isOk = db.Import( "c:\\import.dsc" )
MsgBox "isOk = " & isOk , 0, "File import status"

 

The import should return TRUE.

Check that the contacts in the import file have been created in your database