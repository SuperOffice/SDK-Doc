<properties date="2016-06-24"
SortOrder="5"
/>

```
 
using SuperOffice.CRM.Services;
using SuperOffice;
 
try
{              
    using (SoSession newSession = SoSession.Authenticate("sal0", ""))
    {
        Console.Write("Please enter the contact id : ");
        // Read the contact id
        String contactId = Console.ReadLine();
        Console.WriteLine("");
        // Check if a contact id entered
        if (!(String.IsNullOrEmpty(contactId.Trim())))
        {
            // Create a Contact Agent
            IContactAgent agent = new ContactAgent();
            // Get a Contact Entity through the Contact Agent   
            ContactEntity contactEntity = agent.GetContactEntity(int.Parse(contactId.Trim()));
            // Create a IUserDefinedFieldInfoAgent
            IUserDefinedFieldInfoAgent udefFieldInfoAgent = new UserDefinedFieldInfoAgent();
            // Get the User defined field list on 'Contact'
            UserDefinedFieldInfo[] udefFieldInfo= udefFieldInfoAgent.GetUserDefinedFieldList(7);
            // Print the contact member details
            Console.WriteLine("User defined field list for the contact " + contactEntity.Name);
            Console.WriteLine("");
            foreach (UserDefinedFieldInfo field in udefFieldInfo)
            {
                string labelName = field.FieldLabel;
                string fieldValue = contactEntity.UserDefinedFields[field.ProgId];                         
                Console.WriteLine("Field Name = " + labelName + "    Value = " + fieldValue);
            }
            Console.ReadKey();
        }
        else
        {
            Console.WriteLine("Please enter the contact id.");
            Console.ReadKey();
        }
    }
}
catch (Exception ss)
{
    Console.WriteLine(ss.Message);
    Console.ReadKey();
}
 
```

 

In the above example, we have used GetUserDefinedFieldList method of SuperOffice.CRM.Services.IUserDefinedFieldInfoAgent to get the user defined field list. This method returns information about all the user defined fields on a particular owner type i.e., project, contact, person, etc. We have specified Contact as the type, as shown below.

```
UserDefinedFieldInfo[] udefFieldInfo= udefFieldInfoAgent.GetUserDefinedFieldList(7);
```

 

Then we loop through the UserDefinedFieldInfo collection to get the field label and the corresponding value for each user defined field.  The contact entity has a string dictionary of user defined data. As shown in the code below, the ProgId of the user-defined field is passed to udef field data dictionary to get the corresponding field value.

```
foreach (UserDefinedFieldInfo field in udefFieldInfo)
{
     string labelName = field.FieldLabel;
     string fieldValue = contactEntity.UserDefinedFields[field.ProgId];
                        
     Console.WriteLine("Field Name = " + labelName + "    Value = " +  fieldValue);
}
```

 

The following screenshot shows how the user defined field list along with the matching values is printed to the output window.

<img src="../How%20toGet%20All%20UserDefined%20Fields%20on%20a%20Contact%20using%20services_files/image002.jpg" width="605" height="250" />

 
