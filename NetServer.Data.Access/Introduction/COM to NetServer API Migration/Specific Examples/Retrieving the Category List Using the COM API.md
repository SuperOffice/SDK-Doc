<properties date="2016-05-11"
SortOrder="45"
/>

The example below demonstrates how to retrieve the Category list using the Database.GetList() method in the SuperOffice.COM.SuperOfficeDB namespace.

```
using SuperOffice.COM.SuperOfficeDB;
 
Database newDb = new Database();
bool isOK = newDb.Login("sam", "sam");
 
if (isOK)
{
    int rowNo = 1;
    //Create a New Contact instance
    IListTextItems newCategorys =
newDb.GetList(SOTableId.enTableCategory);
    Console.Write("ID" + "\t\t\t" + "Category");
    Console.WriteLine();
 
    //Retreives the Category list
    foreach (IListTextItem newCategory in newCategorys)
    {
        //Display properties of each Category
        Console.Write(newCategory.Id + "\t\t\t");
        Console.Write(newCategory.Text);
        Console.WriteLine();
    }   
}       
else
    Console.WriteLine("Incorrect Username or Password");
```

As with all list types, the Category list is a collection of IListTextItem types, aptly named IListTextItems. The GetList() method retrieves an IListTextItems type by specifying the list type enumeration parameter. GetList() only returns items the current user is allowed to see, and does not return hidden or deleted items.
