---
uid: Getthecategorylist
title: Get the category list
---


We can retrieve the Category list using SuperOffice.COM.SuperOfficeDB namespace available in the SuperOfficeDB.dll.

using SuperOffice.COM.SuperOfficeDB;
Database newDb = new DatabaseClass();
bool isOK = newDb.Login("USER", "PASS");
if (isOK)
{
   int rowNo = 1;
   //create a new Contact instance
   IListTextItems newCategorys = newDb.GetList(SOTableId.enTableCategory);
   Console.Write("ID" + "\\t\\t\\t" + "Category");
   Console.WriteLine();
   //Retrieves the Category list
   foreach (IListTextItem newCategory in newCategorys)
   {
    //Display properties of each Category
    Console.Write(newCategory.Id + "\\t\\t\\t");
    Console.Write(newCategory.Text);
    Console.WriteLine();
   }   
}
else
   Console.WriteLine("Incorrect Username or Password");

What we have done above is to create an instance of the IListTextItems class using the created instance of the Database class. The GetList() method used to create the Category list instance requires the table\_id of the database table that contains the list to be passed in to it. GetList() method does not return hidden or deleted items. The method only returns the items that the current user is allowed to see. Once the instance is created we can loop through the list and receive the following output.
**ID**   **Category**
2     Customer
3     Prospect
4     Supplier
5     Business Partner
6     Lost customer
7     Competitor