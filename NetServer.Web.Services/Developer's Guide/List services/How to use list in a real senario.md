<properties date="2016-06-24"
SortOrder="13"
/>

Now that we have discussed the two most important APIs that provide the lists, let’s look at an example that uses the lists in a real scenario using an example. The below example will demonstrate how to get the category list and how to set the category of a contact using this list.

```
using SuperOffice.CRM.Services;
using SuperOffice;
 
private void button3_Click(object sender, EventArgs e)
{
    using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
    {
        //get the MDO agent
        using(MDOAgent mdoAgent = new MDOAgent())
        {
            SelectableMDOListItem[] catagoryList =
             mdoAgent.GetSelectableList("category", false  , "", false);
            //set the datasource of the control
            cmbCategory.DataSource = catagoryList;
            //set the display member
            cmbCategory.DisplayMember = "Name";
            //set the value member
            cmbCategory.ValueMember = "Id";
        }
    }
}
 
 
private void button4_Click(object sender, EventArgs e)
{
    using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
    {
        //retrive a contact agent
        using(ContactAgent contactAgent = new ContactAgent())
        {
            //retrive the contact entity you want through the contact agent
            ContactEntity myContact = contactAgent.GetContactEntity(4);
            //set the category id of the contact using selected value of
            // the combo box control
            myContact.Category.Id =
            System.Convert.ToInt32(cmbCategory.SelectedValue);
            //finally save contact entity
            contactAgent.SaveContactEntity(myContact);
        }
    }
}
```

Here we have used two events to get the job done. We have used one event to populate the control with categories from the list that we have retrieved and the second one for setting the category of the contact and saving the entity. Below is a screen shot from the application that we have developed.

<img src="../List%20services_files/image001.jpg" width="276" height="215" />
