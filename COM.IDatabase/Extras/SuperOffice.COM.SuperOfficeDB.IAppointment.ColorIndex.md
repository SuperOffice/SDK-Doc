
##SUMMARY

From CRM 5 Release 5.5 you may set different colour schema on the different types of appointments.


##EXAMPLE

**Show ColorIndex**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](..\..\Examples\vbs\SOAppointment.ColorIndex.vbs.txt)


##REMARKS

These are the color codes used when coloring appointments: 

This function returns the HTML colour code given a colour-index: 

Private Function getIndexedColor(nColorIndex As Integer) As String 

    Dim aryColorTable 

    aryColorTable = Array("#d6d8e4", "#5c81aa", "#9db5d1", "#d2deeb", _ 

                                      "#92999d", "#c4c5c6", "#e4e7e6", "#7ba596", _ 

                                      "#a4c3b4", "#d9e9df", "#ffba00", "#fae88f", _ 

                                      "#f7fab3", "#d99c63", "#e4bd95", "#fae3c9") 




    If nColorIndex &lt;= UBound(aryColorTable) Then 

        getIndexedcolor = aryColorTable(nColorIndex) 

    Else 

        getIndexedcolor = aryColorTable(0) 

    End If 

End Function 


These colours are the ones use in the admin client and the diary display of appointments.


In another format, the colours are defined like this: 

    RGB(214, 216, 228),   // this is original blue appointment colour 

    RGB(92, 129, 170), 

    RGB(157, 181, 209), 

    RGB(210, 222, 235), 

    RGB(146, 153, 157), 

    RGB(196, 197, 198), 

    RGB(228, 231, 230), 

    RGB(123, 165, 150), 

    RGB(164, 195, 180), 

    RGB(217, 233, 223), 

    RGB(255, 186, 0), 

    RGB(250, 232, 143), 

    RGB(247, 250, 179), 

    RGB(217, 156, 99), 

    RGB(228, 189, 149), 

    RGB(250, 227, 201) 



##VALUE

Integer – the colours numeric value

