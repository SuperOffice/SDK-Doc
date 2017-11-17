---
uid: guidetMoreSimpleSearches
title: More Simple Searches
---

The functions [Find.AllMatches](SUPEROFFICEDBLib~SOFind~AllMatches.md) and [Find.FirstMatch](SUPEROFFICEDBLib~SOFind~FirstMatch.md) allow more general searches to be done, in the style of:

SELECT contact\_id FROM url
WHERE url\_address LIKE’%superoffice%’

Both these functions do exact matches, unless the value parameter is a string and the value ends in a “%”. If the value ends in a “%” then the function does a LIKE query instead.

### AllMatches(table, returnfield, searchfield, value)

The Find.AllMatches function has some strong restrictions – it is not intended to replace the ADO interface. This is not an SQL replacement. It searches only a single table – you can’t do joins using this API.

The function returns an array of variants.

This example returns an array of all the selection\_id’s of selections whose names begin with “John”.

list = db.Find.AllMatches( "Selection", "selection\_id", "selection\_name", "John%")
For i = 0 to ubound(list)
   id = list(i)
   set sel = db.getSelection(id)
   Print id & " = " & sel.name
Next

 

### FirstMatch(table, returnfield, searchfield, value)

The FirstMatch function will search for the first match of the value, and return the corresponding return field. If there was no match, it returns an empty variant, which VB will convert to an empty string or a zero at the first opportunity.

Set thing = db.Find.FirstMatch("selection", "selection\_id", "selection\_name", "John%")
Print “Selection id = " & thing
Print "name = " & db.GetSelection(thing).name

 

### Example

Set db = CreateObject("SuperOfficeDB.Database")
loginOk = db.Login("name","pass")
if not loginOk then
   msgbox "Unable to log in"
   WScript.Quit
end if

' select person\_id from person where title like 'CE%'
arr = db.Find.AllMatches("person","person\_id","title","CE%")
For i = 0 to ubound(arr)
     id = arr(i)
   set pers = db.getPerson(id)
   msg = msg & id & " = "
     msg = msg & pers.firstname & "  " & pers.lastname
   msg = msg & " - " & pers.title
     msg = msg & vbCRLF
Next
MsgBox msg, 0, "CEOs"