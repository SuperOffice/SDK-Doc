<properties date="2016-05-11"
SortOrder="6"
/>

```
using SuperOffice.CRM.Entities;
using SuperOffice;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Globalization;
 
 
using (SoSession newSession = SoSession.Authenticate("p", "p"))
{
    if (!(String.IsNullOrEmpty(txtContactId.Text.Trim())))
    {
        // Get the contact
        Contact contact =
Contact.GetFromIdxContactId(int.Parse(txtContactId.Text.Trim()));
        if (contact != null)
        {
            this.lblContactName.Text = contact.Name;
            // Get the progId of the user defined field
'companydropdownlistbox'
            string progId =
contact.UdefHelper.GetProgIdFromFieldLabel("companydropdownlistbox");
                    
            // Get the User-DefinedField
            UDefFieldRow udefField =
UDefFieldCache.GetFromProgId(progId,
SuperOffice.Data.UdefHelper.UDefType.Contact);              
 
            // Get the list name                       
            UDListDefinitionRow udRow
=UDListDefinitionRow.GetFromIdxUDListDefinitionId(udefField.UDListDefinitionId);
            MessageBox.Show(udRow.Name);
            // Get the list table id and identify the base table
            short listId = udefField.ListTableId;                  
     
            // Get the list from the base table
            TaskRows.CustomSearch newTaskCus = new
TaskRows.CustomSearch();                  
            TaskRows newTasks =
TaskRows.GetFromCustomSearch(newTaskCus);
 
            // Set the list items
            this.lstFieldList.DataSource = newTasks;
            this.lstFieldList.DisplayMember ="Name";
            this.lstFieldList.ValueMember = "TaskId";   
        }
    }
    else
    {
        MessageBox.Show("Please enter the contact id.");
    }
}
 
```

 

The above code segment shows how the population of the list box is done. In order to get the list items the base class for the list table should be identified. This is retrieved with the ListTableId property of the udef field of interest. Based on the listTableId, the Task table is identified as the base class for getting the list items. As shown below, the TaskRrows are retrieved for the given table id using GetFromCustomSearch method of TaskRow entity. Next we have set the TaskRow collection as the data source for the list box.

```
// Get the list from the base table
TaskRows.CustomSearch newTaskCus = new TaskRows.CustomSearch();    
             
TaskRows newTasks = TaskRows.GetFromCustomSearch(newTaskCus);
```
