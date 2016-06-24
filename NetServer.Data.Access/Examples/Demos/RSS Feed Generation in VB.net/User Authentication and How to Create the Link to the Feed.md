<properties date="2016-05-11"
SortOrder="11"
/>

 

The generated feed link uses the user credentials along with the user preference for the number of items displayed in Feed contents are read and appended to the feed URL. Then the logged on user information are validated with the use of Authenticate method of SOSession. The user password has to be encrypted since it’s sent along with the URL in plain text format. The support method Rot13 is used for this data conversion as shown in the following code segment.

 

 

 

 

```
    ''' <summary>
    ''' generates the link for the RSS feed
    ''' </summary>
    ''' <param name="sender"></param>
    ''' <param name="e"></param>
    '''
    Protected Sub btnGenerateLink_Click(ByVal sender As Object,
ByVal e As EventArgs)
        Try
            ' read user crdentials
            Dim user As String = Server.UrlEncode(Me.txtUName.Text)
            Dim pass As String =
Server.UrlEncode(Rot13(Me.txtPwd.Text))
 
            ' read maximum number of items to be diaplayed for the
feed contents
            Dim num As String = Me.ddlMaxValue.SelectedValue
 
            ' generate the feed URL
            Dim path As String = "http://" + "localhost:50804" + ""
+ Request.ApplicationPath
 
            Dim url As String =
String.Format("{0}/Feed.aspx?user={1}&pass={2}&size={3}",
path, user, pass, num)
 
            ' authenticate the user with the credentials provided
            Dim session As SoSession = SoSession.Authenticate(user,
Me.txtPwd.Text)
 
            If session Is Nothing Then
                Me.lnkURL.NavigateUrl = ""
                Me.lnkURL.Text = "Login failed - please try again"
            Else
                ' set the link
                Me.lnkURL.NavigateUrl = url
                Me.lnkURL.Text = url
                _url = url
 
                ' kill the session
                session.Close()
                session.Dispose()
            End If
        Catch exception As Exception
 
            Me.lblMessage.Text = exception.Message
        End Try
 
    End Sub
 
 
 
 
    ''' <summary>
    ''' Modify the character code of the character
    ''' </summary>
    ''' <param name="text"></param>
    ''' <returns>the modified text</returns>
    Public Shared Function Rot13(ByVal text As String) As String
        Dim res As String = ""
        Dim chars As Char() = text.ToCharArray()
        For i As Integer = 0 To chars.Length - 1
            Dim curChar As Integer =
Microsoft.VisualBasic.AscW(chars(i))
            'Modify the character code of the character, - this
            'so that "a" becomes "n", "z" becomes "m", "N" becomes
"Y" and so on
            If curChar >= 97 AndAlso curChar <= 109 Then
                curChar = curChar + 13
            ElseIf curChar >= 110 AndAlso curChar <= 122 Then
                curChar = curChar - 13
            ElseIf curChar >= 65 AndAlso curChar <= 77 Then
                curChar = curChar + 13
            ElseIf curChar >= 78 AndAlso curChar <= 90 Then
                curChar = curChar - 13
            End If
 
            'Add the current character to the string to be returned
            res += Microsoft.VisualBasic.ChrW(curChar)
        Next
        Return res
    End Function
```

 

 

 
