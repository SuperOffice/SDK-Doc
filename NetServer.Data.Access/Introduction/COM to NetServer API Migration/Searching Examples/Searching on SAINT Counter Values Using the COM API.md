<properties date="2016-05-11"
SortOrder="50"
/>

SAINT counters, which require a SAINT license, are used to keep track of certain actions in SuperOffice. SAINT counters are maintained in the Countervalue table. With SAINT enabled, rows are added to the countervalue table whenever a contact or project is created. There are also a rows that correlate to appointments, documents and sales. The respective counter rows in the countervalue table is updated whenever an appointment, document or sale is created.
The following example retrieves the names of all contacts with completed sales according to the â€œContactsWithLastCompletedSaleâ€ counter details.

```
using SuperOffice.COM.SuperOfficeDB;
 
Database newDb = new Database();
bool isOK = newDb.Login("sam", "sam");
 
if (isOK)
{
    SOFind newFind = db.Find;
    //get the sales completed contacts 
    SOContacts newContacts =
    newFind.ContactsWithLastCompletedSale(EnSaleStatus.enSaleOpen,
    db.GetListItem(SOTableId.enTableAmountClass, 2),
    EnFindOperator.enFindOpLessThan, DateTime.Now);
    if (newContacts.EOF == false)
    {
       Console.WriteLine("Contact Name");
 
      //print the each contact names
        foreach (SOContact newContact in newContacts)
          Console.WriteLine(newContact.Name);
    }
}       
else
    Console.WriteLine("Incorrect Username or Password");
```

The example above uses the Find.ContactsWithLastCompletedSale() method to retrieve the Contacts with the last completed sales. The method requires the Sales status, Amount class, Operator and the time to be passed as parameters.
