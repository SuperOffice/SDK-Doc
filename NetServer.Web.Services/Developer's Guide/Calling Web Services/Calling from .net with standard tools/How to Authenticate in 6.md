<properties date="2016-06-24"
SortOrder="8"
/>

SuperOffice 6 Authentication
============================

The authentication details of a web service are passed in the SOAP header. The SOAP header element contains the application specific information. The following example demonstrates how to authenticate a web-service call.

We used [http://localhost/SuperOffice/Contact.asmx](http://localhost/SuperOffice/Contact.asmx) as a name of the web service and ContactRef we used as a web reference name.

```
using ServicesTest1.ContactRef;
 
public Contact Authenticate()
{
    //Instantiate a Contact proxy object
    ContactRef.Contact myContact = new ContactRef.Contact();
 
    //Set the SoCredentials proxy property to a new SoCredentialsHeader
      instance
    myContact.SoCredentials = new SoCredentialsHeader();
    //Set the properties of the SOAP header.
    myContact.SoCredentials.AuthenticationType = SoAuthenticationType.CRM5;
    myContact.SoCredentials.UserId = "SAL0";
    //Generate the secret using the CalculateCredentialsSecret() method
    myContact.SoCredentials.Secret = CalculateCredentialsSecret(SoAuthenticationType.CRM5, GetDays(), "SAL0", "");
 
    return myContact;
}
 
public static string CalculateCredentialsSecret(SoAuthenticationType authenticationType, int days, params string[] arguments)
{
     string secret = null;
     MemoryStream ms = new MemoryStream();
     StreamWriter sw = new StreamWriter(ms, System.Text.Encoding.UTF8);
 
     // The Authentication type enum as string, e.g. "CRM5"
     sw.Write(authenticationType.ToString());
 
     foreach (string argument in arguments)
         sw.Write(argument);
 
     sw.Write(days.ToString());
     //Clears all buffers for the current writer
     sw.Flush();
     int length = (int)ms.Position;
     sw.Close();
     MD5 md5 = MD5.Create();
     byte[] hash = md5.ComputeHash(ms.GetBuffer(), 0, length);
     secret = Convert.ToBase64String(hash);
     //Closes the stream for reading and writing
     ms.Close();
     return secret;
}
 
public static int GetDays()
{
    return (int)((TimeSpan)(DateTime.UtcNow - new DateTime(2000, 1, 1))).TotalDays;
}
 
```

 

Before the above code is executed we have to create a website and add a web reference to the Contact web service. We have named the web reference folder as ContactRef.

An Important Point to Remember!

Make sure that the correct values to the elements of the database property in the web.config file. This determines the database from which we want to retrieve the data. 

Here we retrieve an instance of the ContactEntity class using the GetContactEntity() method of the Contact proxy object. This method will call the web services, we can retrieve, create, update and delete a contact in this manner.  

```
{
 
    //Obtain an instance of the Contact using the Authenticate() method
    ContactRef.Contact myContact = Authenticate();
 
    //Retrieve a ContactEntity
    ContactRef.ContactEntity myContactEntity = myContact.GetContactEntity(15);
    //Obtain the properties of the Contact
    string name = myContactEntity.Name;
    //Change the department property of Contact
    myContactEntity.Department = "Sales";
    //Stop the Contact
    myContactEntity.Xstop = true;
    //Save the Contact
    myContact.SaveContactEntity(ref myContactEntity);
 
 }
```
