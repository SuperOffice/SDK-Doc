
##SUMMARY

Perform a "poor mans" SQL query to find list of field values using another field as the key.


##RETURNS

Array – array of variants


##EXAMPLE

**AllMatches**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information. 

Search the contact table for all records that has an OrgNr that starts with 979. 

Returns a message box with the Contact name for each, and the result count in a message box


![](..\..\Examples\vbs\SOFind.AllMatches.vbs.txt)


##REMARKS

Example: Find.Field("contact","contact_id","number1", "SUPER") will return an array with the contact ids with CODE = 'SUPER'

If you set the KeyValue to 101% it performs a LIKE search.


##PARAM: Table

for example Contact


##PARAM: ResultField

for example Contact_id


##PARAM: SearchField

for example Number1


##PARAM: KeyValue

for example SUPER

