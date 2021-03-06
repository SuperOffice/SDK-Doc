<properties date="2016-06-24"
SortOrder="7"
/>

SOAP calls can be made by .Net or Java clients. It is essential to create a web site in the web server before implementing any client application. And also, we have to make sure that all the following dlls are included in to the Bin directory of the web site.

* SOCore.dll
* SoDateBase.dll
* SoMail.dll
* SuperOffice.Legacy.dll
* SuperOffice.Services.dll
* SuperOffice.Services.Implementation.dll
* SuperOffice.Services.Proxy.dll
* SuperOffice.Utilities.Verifiers.dll
* SuperOffice.Web.Services.dll

Then in the client application we need to add a web reference to the services provided by this website. The client application can be designed using these web services. The following example is one such client application written in .Net.

```
{
    //Create an instance of the class Contact
    ContactRef.Contact myContact = new ContactRef.Contact();
    
    //Set the SOAP header
    myContact.SoCredentials = new SoCredentialsHeader();
    myContact.SoCredentials.AuthenticationType = SoAuthenticationType.CRM5;
    myContact.SoCredentials.UserId = "SAL0";
 
    //Generate the secret for CRM5 associate SAL0 with a blank password
    //The secret contains :  
    //“CRM5”+[AssociateName]+[AssociatePassword]+[Days]
    myContact.SoCredentials.Secret = 
          CalculateCredentialsSecret(SoAuthenticationType.CRM5,GetDays(),"SAL0","");
   
    //Retrieve a ContactEntity
    ContactRef.ContactEntity myContactEntity = myContact.GetContactEntity(12);
    string name = myContactEntity.Name;
 
}
```

 

Here we have first created an instance of the proxy object (Contact). Then we have set the SOCredentials property. SOCredentials is an object representation SoCredentialsHeader element, which is an element in the SOAP message header. It contains application specific information about the SOAP message. The SoCredentials.Secret property is comprised of the AuthenticationType, number of days since January 1, 2000, UserId and password. They are all mandatory in order to authenticate against the web service. The following method shows how the secret is generated.

```
public static string CalculateCredentialsSecret(
        SoAuthenticationType authenticationType, int days, params string[] arguments)
{
    string secret = null;
    MemoryStream ms = new MemoryStream();
    StreamWriter sw = new StreamWriter(ms, System.Text.Encoding.UTF8);
 
    //The Authentication type enum as string, e.g. "CRM5"
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
