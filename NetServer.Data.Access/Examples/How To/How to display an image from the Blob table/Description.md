<properties date="2016-05-11"
SortOrder="5"
/>

Following is the code segment that relates to retrieve and displaying the image list in the ListBox.

```
using SuperOffice;
using SuperOffice.CRM.Rows;
 
//Method that displays the Image decription on the Listbox
private void DisplayImageList()
{           
      using (SoSession newSoSession = SoSession.Authenticate("sam",
"sam"))
      {
            //Retrieves a set of BinaryObjectRows whose MimeType =
"image/jpeg"
            BinaryObjectRows newBinObjRws =
BinaryObjectRows.GetFromIdxMimeType("image/jpeg");
 
            //Displays a list of Images Avalable
            foreach (BinaryObjectRow newBinObjRw in newBinObjRws)
            {                 
                  //Display the image description in the Listbox
                  listBox1.Items.Add(newBinObjRw.Description);     
                 
            }  
      }
}
```

 

We have retrieve image related information by using BinaryObjectRows class. Since we are retrieve images that are of “image/jpeg” we have used the GetFromIdxMimeType() method. By iterating on the retrieved row collection we have displayed the Description of each image row in the list box.

Once the user selects an item from the ListBox the following code segment will be executed. This is responsible for displaying the image.

```
using System.IO;
 
using SuperOffice;
using SuperOffice.CRM.Rows;
using SuperOffice.Data;
using SuperOffice.CRM.Data;
 
//Method that is ivoked when a item is selected from the Listbox
private void listBox1_SelectedValueChanged(object sender, EventArgs
e)
{
      using (SoSession newSoSession = SoSession.Authenticate("sam",
"sam"))
      {
            //Instantiate a BinaryRowObject CustomSearch
            BinaryObjectRow.CustomSearch newCusSearch = new
BinaryObjectRow.CustomSearch();
 
            //Instantiate BinaryObjectTableInfo class using the
created CustomSearch
            BinaryObjectTableInfo newBinObjTabInf =
newCusSearch.TableInfo;
 
            //Restricts the BinaryObjectTableInfo
            newCusSearch.Restriction =
newBinObjTabInf.Description.Equal(
                      
S.Parameter(listBox1.SelectedItem.ToString())).
                   
And(newBinObjTabInf.MimeType.Equal(S.Parameter("image/jpeg")));
 
            //Retrieves the BinaryObjectRow basedon the
CustomSearch
            BinaryObjectRow newBinObjRw =
BinaryObjectRow.GetFromCustomSearch(newCusSearch);
 
            //Gets the BinaryObjectRow's image into the stream and
display it
            Stream newStream = newBinObjRw.BinaryData;
            pictureBox1.Image = Image.FromStream(newStream);    
      }
}
```

 

Since we are retrieving BinaryObjectRow based on the image description, we need to create a CustomSearch first to select the user selected row. The search’s restriction should be applied to the MimeType and Description columns. This is done by using the following statement.

```
      newCusSearch.Restriction = newBinObjTabInf.Description.Equal(
S.Parameter(listBox1.SelectedItem.ToString())).
And(newBinObjTabInf.MimeType.Equal(S.Parameter("image/jpeg")));
```

 

Once we have defined the CustomSearch we can use it with the GetFromCustomSearch() method available in the BinaryObjectRow class. We use the BinaryData property of the BinaryObjectRow class to fill our image into the Stream and then displaying it using the following statement.

```
      pictureBox1.Image = Image.FromStream(newStream);    
```
