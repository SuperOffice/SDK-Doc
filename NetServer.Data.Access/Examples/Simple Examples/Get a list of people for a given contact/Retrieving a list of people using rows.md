<properties date="2016-05-11"
SortOrder="8"
/>

In the below example let’s explore the ways of retrieving a list of persons using rows.

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;   
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
//get the person rows of the persons we want using the contact
      //id that they belong to
      PersonRows myPersonRows = PersonRows.GetFromIdxContactId(21);
      //iterate through the row collection and access its
properties
      if (myPersonRows.Count > 0)
      {
            foreach (PersonRow myPersonRow in myPersonRows)
            {
                  cmbPersonName.Items.Add(myPersonRow.Firstname + "
" + myPersonRow.Lastname);     
            }
     }
}
```

 

In the above example also we have done the same thing as in the [retrieving a list of persons using entities example](Retrieve%20a%20list%20of%20people%20using%20entities.md) the only difference is we have use rows to do the operation for us. In the above example we retrieve the list of persons as a person rows collection to a PersonRows object using the contact id of the contact that the people we want belongs to. Once we have the person row collection it is matter of iterating through the collection to access the individual properties of a PersonRow like we have done above in the example.

 
