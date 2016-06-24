<properties date="2016-05-11"
SortOrder="52"
/>

The following method demonstates how to use the SOFind.ContactsByName() method. This method is used to retrieve an SOContact collection, SOContacts, and is filtered by Name. The returned collection is meant to be iterated over to retrieve a specific SOContact object.

    using SuperOffice.COM.SuperOfficeDB;
     
    Database newDb = 
    new 
    Database();
    bool isOK = newDb.Login(
    "sam", 
    "sam");
     
    if (isOK)
    {
        
    //Create a New Contact instance using
    SOFind
        
    SOContacts newContacts =
    newDb.Find.ContactsByName(
    "Valantine");
     
        
    //Retrieve values stored in eacg Contact
        
    foreach (
    SOContact newContact 
    in newContacts)
        {
            
    string conName = newContact.Name;
        }
    }       
    else
        
    Console.WriteLine(
    "Incorrect Username or Password");
