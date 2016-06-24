<properties date="2016-06-24"
SortOrder="5"
/>

In the example we have used the Appointment Agent to retrive an AppointmentEntity and made use of its Links property to relate the Appointment to a Sale.

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
      //Gets the Appointment Agent
      IAppointmentAgent newAppAgt = new AppointmentAgent();
 
      //Retreives and Appointment Entity using the Agent
      AppointmentEntity newAppEnt = newAppAgt.GetAppointmentEntity(162);
 
 
      Link[] newArr = new Link[newAppEnt.Links.Length + 1];
      newAppEnt.Links.CopyTo(newArr, 0);
      Link newLink = new Link();
      newLink.Description = "Appointment Sale Link";
      newLink.EntityName = "sale";
      newLink.Id = 68; // The Sale Id to which the link refers to
      newArr[newArr.Length - 1] = newLink;
      newAppEnt.Links = newArr;
 
      newAppAgt.SaveAppointmentEntity(newAppEnt);
}
```

 

There is no tool available through the services layer to just add a link to the Links property. What we have done first is to create an array of Link type and copy the data that is held in the Appointment’s links property using the “CopyTo” command. Then we create a new Link type and asssign values to its properties and assign the link to the last element of our created Link array. Since our array is longer by one than the Appointment’s Links property we would no be modifying any existing data items stored.

By using the Appointment agent’s SaveAppointmentEntity() method we caould save the Appointment which would save our established link between the Appointment and the Sale as well.
