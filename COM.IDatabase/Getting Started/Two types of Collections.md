---
uid: TwotypesofCollections
title: Two types of Collections
---


This is a conceptual difference more than a practical difference.

You can program without thinking about the difference - but knowing the difference can help you write more efficient code.

There are two sorts of collections:

### 
Collections via Properties

These are tightly-bound, short lists of small things.
phone numbers, e-mail addresses etc:

> [SOContact.Phones](SUPEROFFICEDBLib~SOContact~Phones.md)
> [SOPerson.Emails](SUPEROFFICEDBLib~SOPerson~Emails.md)

Accessing one of these properties will fetch all items in the list in one go, or will most likely operate on memory rather than the database.

 

### GetXXX Methods

These are used for getting the longer, more complex lists like the activity list, the person list.

The collection objects all use these functions: GetFirst and GetNext and EOF. They also support the enumeration API that Visual Basic and other scripting languages use.

> [SOContact.GetPersons](SUPEROFFICEDBLib~SOContact~GetPersons.md)
> [Database.GetChecklist](SUPEROFFICEDBLib~Database~GetChecklist.md)
> [SOContact.GetActivityList](SUPEROFFICEDBLib~SOContact~GetActivityList.md)

These collections will fetch one row at a time. If you just need the first 3 elements in the row, then we have just read three rows, not the entire checklist (which could be in the 100s)

### For Each

You can use for-each to iterate over both types of collections, so you don’t have to worry too much about the difference between the two sorts of collection from a programming point of view.

```
set cont = db.GetContact( 123 )
For each item in cont.Phones   
   Print item.Number
Next
```

```
set cont = db.GetContact( 123 )
For each item in cont.GetPersons  
   Print item.lastname
Next
```

Note that the second example is not particularly efficient way of getting the list of last-names.

Using Database.Find.AllMatches or an ADO query would have been more efficient.

```
set names = db.Find.AllMatches(
For each item in cont.GetPersons  
   Print item.lastname
Next
```

