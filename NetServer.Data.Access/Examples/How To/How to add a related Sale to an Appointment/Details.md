<properties date="2016-05-11"
SortOrder="5"
/>

```
using SuperOffice;
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Entities;
 
Console.Write("Please Enter the UserName :- ");
string userName = Console.ReadLine();
Console.Write("Please enter the password :- ");
string passWord = Console.ReadLine();
Console.WriteLine();
 
using (SoSession newSession = SoSession.Authenticate(userName,
passWord))
{
      //Create a Sale and Save it
      Sale newSale = Sale.CreateNew();
      newSale.SetDefaults();
      newSale.Amount = 20000.00;
      newSale.Contact = Contact.GetFromIdxContactId(124);
      newSale.SaleText = TextRow.GetFromIdxTextId(169);            
      
      newSale.Save();
      Console.WriteLine("A new Sale has been Created");
      //Creates a Appoitnment and link it a Sale
      Appointment newApp = Appointment.CreateNew();
      newApp.SetDefaults();
      newApp.Contact = Contact.GetFromIdxContactId(124);
      newApp.AppointmentText = TextRow.GetFromIdxTextId(169);
      //Adds the Link to the Sale
      SaleRow newSaleRw = SaleRow.GetFromIdxSaleId(newSale.SaleId);
  
      newApp.LinksHelper.AddSaleLink(newSaleRw);
      newApp.Save();                    
      Console.WriteLine("A new Appointment has been created");
      Console.ReadLine();
}
```

 

In the example above what we have done first is to create a new Sale and certain values to its properties. The SetDefault() method is used to assign default values to the properties in that respective class. The Save() method is used in the end to save the created Sale.

Next, we use the CreateNew() method available in the Appointment class to create a new Appointment and then assign values to its properties. At this stage we are ready to link are Sale and Appointment together. We retrieve our created sale as a SaleRow type by passing the SaleID of our created Sale into the GetFromIDxSaleId() method available in the SaleRow class. Then by using the following statement we can assign Sale relation to our Appointment.

```
      newApp.LinksHelper.AddSaleLink(newSaleRw);
```
