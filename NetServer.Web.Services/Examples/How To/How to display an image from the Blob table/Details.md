<properties date="2016-06-24"
SortOrder="5"
/>

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
//Method that displays the Image Name on the Listbox
private void DisplayImageList()
{
using (SoSession newSoSession = SoSession.Authenticate("sam", "sam"))
{
            //Select a list of Project Images using the IMDOAgent
            IMDOAgent newMDOAgt = new MDOAgent();
            SelectableMDOListItem[] newSelLstArr = newMDOAgt.GetSelectableList("ProjectImage", true, "", false);
            foreach (SelectableMDOListItem newSelLst in newSelLstArr)
      {                
                  //Display the image name in the Listbox
                  listBox1.Items.Add(newSelLst.Name);                       
            }  
}
}
```

 

The GetSelectableList() method requires four parameters to be passed into it. Namely, the image types which we require, i.e. Project images, Boolean value which determines whether to retrieve the list as a flat list or not, any additional information we need to send and another Boolean value which indicates whether to include only history values or not.

Once the list is displayed the user will be able to select a Name that he wants to view the Project Image of. The method below shows us how we can do this.

```
using System.IO;
using SuperOffice;
using SuperOffice.CRM.Services;
 
//Method that is ivoked when a item is selected from the Listbox
private void listBox1_SelectedValueChanged(object sender, EventArgs e)
{
using (SoSession newSoSession = SoSession.Authenticate("sam", "sam"))
{
            //Retreiving the details of the selected image from the ListBox
            IMDOAgent newMDOAgt = new MDOAgent();
            SelectableMDOListItem[] newSelLstArr = newMDOAgt.GetSelectableListWithRestriction("ProjectImage", "", listBox1.SelectedItem.ToString());
            //Using the BLOB agent retrieving the selected image
            IBLOBAgent newBLOBAgt = new BLOBAgent();
            Stream newStream = newBLOBAgt.GetBlobStream(newSelLstArr[0].Id);
            pictureBox1.Image = Image.FromStream(newStream);                   
}
}
```

 

We have made use of the GetSelectableListWithRestriction() method for which we would pass the image types and the any additional information along with the Id of the item that was selected from the ListBox. This will retrieve us a SelectableMDOListItem.

In order to get the image we would need to use the IBLOBAgent. By using the GetBlobStream() method of the IBLOBAgent we can get the image into the Stream which can be used to display the image inside the PictureBox. The Id of the item contained in the SelectableMDOListItem should be passed into the GetBlobStream() method.
