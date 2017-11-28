
##ISNEW

25.09.2009


##SUMMARY

New in 6.3 - Get the current SOProtocol, similar to right click and copy shortcut in the CRM client.


##EXAMPLE



```vb
Dim objSO
Set objSO = CreateObject("SuperOffice.Application")
    Msgbox "The current SOProtocol is: " & objSO.CurrentSOProtocol, vbInformation + vbOkOnly, "SuperCOM"
set objSO = Nothing

```


