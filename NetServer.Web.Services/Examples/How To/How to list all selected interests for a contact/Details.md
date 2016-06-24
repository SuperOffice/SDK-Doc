<properties date="2016-06-24"
SortOrder="5"
/>

By using the IContactAgent we first retrieve a ContactEntity. Next is to retrieve the available interests of a Contact. We use the Interests property of the ContactEntity and retrieve the interest list into a SelectableMDOListItem array.

By iterating on the array we could retrieve details of each interest available. Since we a interested in only the selected interest of a Contact we make use of an “if” condition to filter out any item that is not selected.

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
            //Retrieve only the selected Interest of the Contact
            if(newSelMdoLstItm.Selected)
                  Console.WriteLine(newSelMdoLstItm.Name);
      }
 
Console.ReadLine();
}
```
