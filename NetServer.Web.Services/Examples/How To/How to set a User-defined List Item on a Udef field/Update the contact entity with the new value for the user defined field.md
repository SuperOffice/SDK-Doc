<properties date="2016-06-24"
SortOrder="7"
/>

This section explains how value selected on the list box is set as the user-defined field value.

```
// Create a Contact Agent
IContactAgent agent = new ContactAgent();
 
// Get a Contact Entity through the Contact Agent   
ContactEntity contactEntity = agent.GetContactEntity(int.Parse(txtContactId.Text.Trim()));
if (contactEntity != null)
{                                      
    // Create a IUserDefinedFieldInfoAgent
    IUserDefinedFieldInfoAgent udefFieldInfoAgent = new UserDefinedFieldInfoAgent();
 
    // Get the UserDefinedFieldInfo of 'Udlist one' through the IUserDefinedFieldInfoAgent
    UserDefinedFieldInfo udefFieldInfo = udefFieldInfoAgent.GetUserDefinedFieldFromFieldLabel("Udlist one", 7);
   
    // Get the ProgId of the udefField
    string progId = udefFieldInfo.ProgId;
 
    // Get the UserDefinedFields collection for the current contact
    StringDictionary dictionary = contactEntity.UserDefinedFields;
 
    // Set the selected value on the listbox to the udefField value 
    dictionary[progId] = this.lstFieldList.SelectedValue.ToString();
 
    // Save the contact details
    agent.SaveContactEntity(contactEntity);
    MessageBox.Show("Contact details saved sucessfully.");
    this.clearContents();
}
```

 

We have retrieved the UserDefinedFields collection for the contact of interest. This is a dictionary which holds the user defined field data as a key value pair where the key string is the ProgId of the UdefField. Thus the selected value is filled against the ProgId of the UdefField ’Udlist one’ as shown below.

```
// Get the UserDefinedFields collection for the current contact
StringDictionary dictionary = contactEntity.UserDefinedFields;
 
// Set the selected value on the listbox to the udefField value 
dictionary[progId] = this.lstFieldList.SelectedValue.ToString();
```

 

Finally, SaveContactEntity method is called to update the contact entity.
