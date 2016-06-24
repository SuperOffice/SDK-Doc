<properties date="2016-06-24"
SortOrder="6"
/>

```
 
using SuperOffice;
using SuperOffice.CRM.Services;
 
using (SoSession newSession = SoSession.Authenticate("p", "p"))
{
    if (!(String.IsNullOrEmpty(txtContactId.Text.Trim())))
    {
        // Create a Contact Agent
        IContactAgent agent = new ContactAgent();
        // Get a Contact Entity through the Contact Agent   
        ContactEntity contactEntity = agent.GetContactEntity(int.Parse(txtContactId.Text.Trim()));
        if (contactEntity != null)
        {
            this.lblContactName.Text = contactEntity.Name;
            // Create a IUserDefinedFieldInfoAgent
            IUserDefinedFieldInfoAgent udefFieldInfoAgent = new UserDefinedFieldInfoAgent();
            // Get the UserDefinedFieldInfo of 'Udlist one' through the IUserDefinedFieldInfoAgent                      
            UserDefinedFieldInfo udefFieldInfo = udefFieldInfoAgent.GetUserDefinedFieldFromProgId("SuperOffice:12", 7);
            // Create MDOAgent
            IMDOAgent mdoAgent = new MDOAgent();
            // Get the MDOListItems array for the given udef field - Udlist one
            MDOListItem[] userDefinedListItems = mdoAgent.GetList("udlist", true, udefFieldInfo.UDListDefinitionId.ToString(), false);
        
            // Set the list items
            this.lstFieldList.DataSource = userDefinedListItems;
            this.lstFieldList.DisplayMember = "Name";
            this.lstFieldList.ValueMember = "Id";
        }
    }
    else
    {
        MessageBox.Show("Please enter the contact id.");
    }
}
```

The above code segment shows how the population of the list box is done using the GetList method of SuperOffice.CRM.Services.IMDOAgent. This method accepts a custom list id and returns the item array of the same as shown below.

```
MDOListItem[] userDefinedListItems = mdoAgent.GetList("udlist", true, udefFieldInfo.UDListDefinitionId.ToString(), false);
```

 

Next we have set the MDOListItem array as the data source for the list box.

```
this.lstFieldList.DataSource = userDefinedListItems;
this.lstFieldList.DisplayMember = "Name";
this.lstFieldList.ValueMember = "Id";
```
