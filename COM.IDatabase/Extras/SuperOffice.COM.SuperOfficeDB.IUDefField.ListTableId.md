
##EXAMPLE

**ListTableId**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](..\..\Examples\vbs\SOUdefField.ListTableId.vbs.txt)


##SUMMARY

This return the value that may be used to get the list that is used if FieldType = 7. 

If ListTableID&gt;1000, then this is a userdefined list. If ListTableID&lt;1000 then this is one of SuperOffice core tables.


##VALUE

Integer – udList_id


##REMARKS

Tip: Use Database.GetListItem( "listTableID", "FieldID" ) to get the IListTextItem = The name field of a table. (e.g what is category_id=1 called).

