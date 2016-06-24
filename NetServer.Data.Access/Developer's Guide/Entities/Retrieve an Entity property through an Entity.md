<properties date="2016-05-11"
SortOrder="62"
/>

The Sale Entity contains a property which in itself is an Entity, examples of such include Contact and Person properties. These properties consist of different properties which could be of different data types such as String, Double, Integer, Row, DateTime and many more.

 

```
using SuperOffice.CRM.Entities;
using SuperOffice.CRM.Rows;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
      //Retrieving an Entity
      Sale newSale = Sale.GetFromIdxSaleId(2);
 
      //Retrieving Properties of an Entity through an Entity
      //Basic Properties
      string salePerName = newSale.Person.Firstname + " " +        
          newSale.Person.Lastname;
      string salePerDOB = newSale.Person.DayOfBirth.ToString();
      string salePerDept = newSale.Person.Department;
      //Row properties
      string salePerAdd = newSale.Person.Address.Address1;
      string salePerAddCoun = newSale.Person.Address.County;
      string saleCounEng =    newSale.Person.Country.EnglishName;
      string saleCounName = newSale.Person.Country.Name;
 
      //Entity properties
      string salePerConName = newSale.Person.Contact.Name;
      string salePerConCoun =newSale.Person.Contact.Country.Name;
 
      //Rows property
      if (newSale.Person.Emails.Count != 0)
      {
            string[] saleEMAddress = new
string[newSale.Person.Emails.Count];
            string[] saleEMDesc = new    
string[newSale.Person.Emails.Count];
            int i = 0;
            foreach (EmailRow email in newSale.Person.Emails)
            {
                  saleEMAddress[i] = email.EmailAddress;
                  saleEMDesc[i] = email.Description;
                  i = i + 1;                          
            }
      }
 
      //Entity Collection properties
      if (newSale.Person.Sales.Count != 0)
      {
            string[] salPerSalAmt = new  
string[newSale.Person.Sales.Count];
            string[] salPerSalConNm = new      
string[newSale.Person.Sales.Count];
            int i = 0;
            foreach (Sale sale in newSale.Person.Sales)
            {
                  salPerSalAmt[i] = sale.Amount.ToString();
                  salPerSalConNm[i] = sale.Contact.Name;
                  i = i + 1;                           
            }
      }
}

 
```

[]() []() Here a Sale Entity has been retrieved through the use of the IdxSaleId class and some basic properties of the Contact Entity are retrieved through the Sale Entity. The Address property which is within the Contact of the Sale Entity is of Row type which means that it represents a row in the Address table. In this example an Address row has been retrieved.

The Sale Entity’s Person has a property called Emails which consists of multiple Email Rows of type EmailRow. The example shows us how to retrieve each EmailRow of the Emails property of the Person through Sale Entity.

The Person property contains properties of SaleCollection type. In the next part of this example the Person Entity’s Sales property is retrieved through the Sales Entity.
