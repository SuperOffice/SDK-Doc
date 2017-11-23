---
uid: startSimpleSearches
title: Simple Searches
---

We have made it easy to find Contacts, Persons and Projects using the <see cref="SuperOffice.COM.SuperOfficeDB.SOFind">Find</see> object. Basically the different functions wrap a simple
"select id where name like ’xxx%’"  SQL query.

Set list = db.Find.ContactsByName("SuperOffice")
For each cont in list
Print cont.name & "  " & cont.department
Next

Set persList = db.Find.PersonsByPhone("22 51 70 50")
For each pers in persList
 listbox.Append pers.lastname
next

### Find methods

|                                   |     |                    |
|-----------------------------------|-----|--------------------|
| ContactsByName(name)              |     | starts with search |
| ContactsLike(name)                |     | soundex search     |
| ContactsByPhone(phonenumber)      |     | starts with search |
| ContactsByEmail(email)            |     | exact match        |
| PersonsByName(firstname,lastname) |     | starts with search |
| ProjectsByName(name)              |     | starts with search |
| ProjectsLike(name)                |     | soundex search     |
| PersonsByPhone(number)            |     | starts with        |
| PersonsByEmail(mail)              |     | exact match        |

 

The starts with searches do not require a % added to the string:

```
Db.Find.ContactsByName("Super")
```

will find “Super”, “SuperOffice” and “Super Inc”, but not “123 Super”

 
```
Db.Find.ContactsLike("Super")
```

will match “Super”, “Suber”, “ZipperOffice Inc”, “123 Subberoffice” but not “Suger” or “Microsoft”.

 

### Example

```
Set db = CreateObject("SuperOfficeDB.Database")
isOK = db.Login( "name", "pass" )
name = InputBox("Enter name to search for",
                "find1", "Super")
Set list = db.Find.ContactsByName(name)
For each cont in list
   msg = msg & cont.Identity & " = "
   msg = msg & cont.name & "  " & cont.department
   msg = msg & vbCRLF
Next
MsgBox msg, 0, "Contacts ’" & name & "’"
```

Try searching for different names.

What happens if there are no matches? The list will be empty, and the for loop will jump straight to the line after the Next statement without going through the loop first.

Try using ContactsLike instead of ContactsByName.

### Soundex

The sounds-like algorithm we use is called Metaphone2. It works best on English, French and German names. It tries to work out the phonetic sound of the word, but it sometimes gets it wrong. 

The sounds-like system ignores numbers and non-alphabetic characters. “123ABC” and “ABC” are the same from the sounds-like point of view.
