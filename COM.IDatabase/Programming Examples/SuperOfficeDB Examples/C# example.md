---
uid: exampleCSharp
title: C\# example
---

To work in C\# you just need to add a reference to the COM DLL SuperOfficeDB.

The .net framework will automatically generate wrapper classes for you. The namespace should be created automatically: SuperOffice.COM.SuperOfficeDB

 

The DatabaseClass represents the [Database](SUPEROFFICEDBLib~Database.md) object that you would normally create. You then use the COM API as you normally would.

 

using SuperOffice.COM.SuperOfficeDB;  
   Database db = new DatabaseClass();
   bool isOk = db.Login("username", "password");
   if( isOk )
   {
     SOContact cont = db.GetContact(2);
     Console.WriteLine(cont.Name);
     Console.WriteLine(cont.FormattedAddress);
   }
   else
     Console.WriteLine("Unable to log in to database");

 

<span lang="EN-US" lang="EN-US">Get a user-defined list (in C\#)</span>

using SuperOffice.COM.SuperOfficeDB;
namespace MyLittleSpace
{
  public class GetAUDefMdoList
  {
    public static void Main(string\[\] args)
    {
       db = new DatabaseClass();
       bool isOk = db.Login("USER", "PASS");
       if( isOk )
       {
          IListTextItem listdef = db.GetListItemByName( SOTableId.enTableUDListDef, "My Userdefined list name");
          IListTextItems udeflist = db.GetList(  SOTableId.enTableId\_UDEFOFFSET + listdef.Id );
          foreach(IListTextItem item in list)
          {
              // do something with Item.Text;
          }
          IListTextItem item5 = db.GetListItem( SOTableId.enTableId\_UDEFOFFSET  + listdef.Id, 5);
       }
    }
  }
}

This example is written using Visual Studio.net 2003