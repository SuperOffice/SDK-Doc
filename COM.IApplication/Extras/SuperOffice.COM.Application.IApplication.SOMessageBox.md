
##REMARKS


The type of the messagebox corresponds closely with the MessageBox function in VB:


 

<TABLE cellSpacing=0 cellPadding=0 width="90%">
<TBODY>
<TR>
<TD class=dtTABLE vAlign=top align=left>


<TABLE style="WIDTH: 100%" cellSpacing=1 cellPadding=0 align=left border=1>
<TBODY>
<TR>
<TD><U>i_type</U></TD>
<TD>SoMessageBox Style</TD>
<TD>SoMessageBox Buttons</TD>
<TD>ReturnedByButtons</TD></TR>
<TR>
<TD>

0
</TD>
<TD>Information</TD>
<TD>OK</TD>
<TD>OK=0</TD></TR>
<TR>
<TD>

1
</TD>
<TD>Question</TD>
<TD>OK,Cancel</TD>
<TD>OK=1,Cancel=0</TD></TR>
<TR>
<TD>

2
</TD>
<TD>Information</TD>
<TD>OK</TD>
<TD>OK=0</TD></TR>
<TR>
<TD>

3
</TD>
<TD>Question</TD>
<TD>Yes,No,Cancel</TD>
<TD>Yes=2,NO=3,Cancel=0</TD></TR>
<TR>
<TD>

4
</TD>
<TD>Question</TD>
<TD>Yes,No</TD>
<TD>Yes=2,No=3</TD></TR>
<TR>
<TD>

5
</TD>
<TD>Question</TD>
<TD>Retry,Cancel</TD>
<TD>Retry=4,Cancel=0</TD></TR></TBODY></TABLE>



</TD></TR></TBODY></TABLE>

 


The buttons shown in the dialog is determined by the type flag. These constants are built into VBScript and VB



<TABLE class=dtTABLE cellSpacing=1 border=1>
<TBODY>
<TR vAlign=top>
<TH width="33%">

Constant
</TH>
<TH width="11%">

Value
</TH>
<TH width="56%">

Description
</TH></TR>
<TR vAlign=top>
<TD width="33%">vbOKOnly</TD>
<TD width="11%">0</TD>
<TD width="56%">Display <B>OK</B> button only.</TD></TR>
<TR vAlign=top>
<TD width="33%">vbOKCancel</TD>
<TD width="11%">1</TD>
<TD width="56%">Display <B>OK</B> and <B>Cancel</B> buttons.</TD></TR>
<TR vAlign=top>
<TD width="33%">vbYesNoCancel</TD>
<TD width="11%">3</TD>
<TD width="56%">Display <B>Yes</B>, <B>No</B>, and <B>Cancel</B> buttons.</TD></TR>
<TR vAlign=top>
<TD width="33%">vbYesNo</TD>
<TD width="11%">4</TD>
<TD width="56%">Display <B>Yes</B> and <B>No</B> buttons.</TD></TR>
<TR vAlign=top>
<TD width="33%">vbRetryCancel</TD>
<TD width="11%">5</TD>
<TD width="56%">Display <B>Retry</B> and <B>Cancel</B> buttons.</TD></TR>
<TR vAlign=top>
<TD width="33%">vbCritical</TD>
<TD width="11%">16</TD>
<TD width="56%">Display Critical Message icon.</TD></TR>
<TR vAlign=top>
<TD width="33%">vbQuestion</TD>
<TD width="11%">32</TD>
<TD width="56%">Display <B>Warning Query</B> icon.</TD></TR>
<TR vAlign=top>
<TD width="33%">vbExclamation</TD>
<TD width="11%">48</TD>
<TD width="56%">Display Warning Message icon.</TD></TR>
<TR vAlign=top>
<TD width="33%">vbInformation</TD>
<TD width="11%">64</TD>
<TD width="56%">Display Information Message icon.</TD></TR></TBODY></TABLE>


 


 


 
</TD></TR><TR><TD valign="bottom" width="100%" align="left"></TD></TR>


##RETURNS

A number indicating which button was clicked.


##EXAMPLE

**Description**



![](..\..\Examples\vbs\Application.SOMessageBox.vbs.txt)


##SUMMARY

Display a SuperOffice style messagebox.


##PARAM: i_msg

A prompt


##PARAM: i_title

The title of the dialog box


##PARAM: i_type

A bitflag that determines which buttons to display

