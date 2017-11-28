

##SUMMARY

Search and retrieve contacts by their name. Name is stripped to a Soundex version, and then searched for


##EXAMPLE

**ContactsLike**


This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.
 
The source code below logs on to the database, retrieves a SOFind object, and then uses it to search and retrieve all contacts with a name that sounds like "Super"


![](../../Examples/vbs/SOFind.ContactsLike.vbs.txt)




##RETURNS

SoContacts – collection of contacts (SOContact) matching the soundex.





##PARAM: Name

Soundex-expression



