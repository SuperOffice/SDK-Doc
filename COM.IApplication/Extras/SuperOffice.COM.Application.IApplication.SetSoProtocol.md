
##ISNEW

25.09.2009


##SUMMARY

Manipulate the CRM client by setting the SOProtocol. Example: superoffice:contact.personarchive?db_id=1010000006&amp;person_id=3


##EXAMPLE



```vb
Dim objSO
Set objSO = CreateObject("SuperOffice.Application")
    objSO.SetSoProtocol "superoffice:contact.personarchive?person_id=3"
    MsgBox "Change to company person archive and made person with person_id = 3 active"
    
set objSO = Nothing
```



##PARAM: i_SoProtocol

The SOProtocol

