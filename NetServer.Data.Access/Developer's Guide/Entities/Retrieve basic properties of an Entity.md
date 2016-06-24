<properties date="2016-05-11"
SortOrder="61"
/>

Retrieving basic properties of a Contact Entity implies obtaining properties which are neither Entities nor Rows. The following example will demonstrate how to retrieve properties of basic data type of an Entity.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //Retrieving an Entity
    Contact newContact = Contact.GetFromIdxContactId(11);
 
    //Retrieving Basic properties of an Entity
    string aInterests = newContact.ActiveInterests.ToString();
    string depart = newContact.Department;
    string kName = newContact.Kananame;
    string cName = newContact.Name;
    string cNum1 = newContact.Number1;
    string cNum2 = newContact.Number2;
    string orgNum = newContact.OrgNr;
    string cRegDate = newContact.Registered.ToString();
}

 
```

Here the values of basic properties of Contact Entity such as Department, Kananame, Name, Number1, Number2, OrgNr and Registered are retrieved. Other than the Registered property which is of Datetime data type, all the other properties are of string data type.

 
