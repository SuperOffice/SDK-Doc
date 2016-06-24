<properties date="2016-06-24"
SortOrder="5"
/>

We have first retrieved a ContactEntity using the IContactAgent. And then used its’ Interests property to retrieve the Contact’s interests into a SelectableMDOListItem array.

Next we iterate on the array and change its “Selected” property status. The Selected property is of Boolean data type. Therefore if the current value is true it would be set to false and if the current value is false it would be set to true. By using the SaveContactEntity() method available in the Contact agent we could save the modifications made to our Contact entity.

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
Console.Write("Please Enter the UserName :- ");
string userName = Console.ReadLine();
Console.Write("Please enter the password :- ");
string passWord = Console.ReadLine();
Console.WriteLine();
 
using (SoSession newSession = SoSession.Authenticate(userName, passWord))
{
//Retrieve a Contact Entity using the Contact Agent
IContactAgent newConAgt = new ContactAgent();
ContactEntity newConEnt = newConAgt.GetContactEntity(10);
 
//Retrieve all available Interests for a Contact
SelectableMDOListItem[] newSelMdoLstItms = newConEnt.Interests;
 
foreach(SelectableMDOListItem newSelMdoLstItm in newSelMdoLstItms)
{
      //Changing the Selected status and displaying only the selected items
            if (newSelMdoLstItm.Selected)
                  newSelMdoLstItm.Selected = false;
            else
            {
                  newSelMdoLstItm.Selected = true;
                  Console.WriteLine(newSelMdoLstItm.Name);
            }                               
      }
 
Console.ReadLine();
//Save the modified Contact Entity
newConAgt.SaveContactEntity(newConEnt);
}
```
