
##SUMMARY

Perform a "poor mans" SQL query to find list of field values using another field as the key.


##RETURNS

Array – array of variant


##EXAMPLE

**FirstMatch**


This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](..\..\Examples\vbs\SOFind.FirstMatch.vbs.txt)


##REMARKS

Example: Find.Field("contact","contact_id","number1", "SUPER") will return an array with the contact ids with CODE = 'SUPER' 

Returns the first match the database finds, no particular order


##PARAM: Table

for example Contact


##PARAM: ResultField

for example Contact_id


##PARAM: SearchField

for example Number1


##PARAM: KeyValue

for example SUPER

