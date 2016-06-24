<properties date="2016-05-11"
SortOrder="7"
/>

This section explains how the selected value is set as the user-defined field value. We have used the SetValue method of the UdefHelper of the contact to set the selected value. This method accepts the progId which is used to refer a particular field and the value to set as the updated value for the field. Next, the Save method of the Contact entity is used to update the contact entity.

```
Contact contact =
Contact.GetFromIdxContactId(int.Parse(txtContactId.Text.Trim()));
 
if (contact != null)
{
    // Get the prodId of the udefField of interest
    string progId=
contact.UdefHelper.GetProgIdFromFieldLabel("companydropdownlistbox");
 
    // Modify the value for the udef field for the current contact
to the selected value            
   
contact.UdefHelper.SetValue(progId,this.lstFieldList.SelectedValue);
                  
 
// Save the contact details
contact.Save();
MessageBox.Show("Contact details saved sucessfully.");             
         
}
```

 
