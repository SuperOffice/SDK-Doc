<properties date="2016-06-24"
SortOrder="7"
/>

We can use the SoProtocol from inside a JavaScript as well. This is also fairly simple we can use a method like window.location.href to transfer to the 6.Web application. All we have to do is add the following code to HTML page.

```
<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
        <ul>
        <li><a href="javascript: navigate()">Click Here to Invoke SuperOffice</a></li>
        </ul>
    </form>
</body>
 
<script type= "text/javascript">
function navigate()
{
   window.location.href="http://www.example.com/Six/default.aspx?contact.main.activityarchive?contact_id=3";
}
</script>
</html>
```

 

Here also we can see that we are trying to navigate to the contact page that contains the contact id 3. We can notice that we have executed the JavaScript on a link that says “Click Here to Invoke SuperOffice”. Once we click on the link it will show us the login screen of the CRM.web application. After we have logged in the application will take us to the contact page that consists of information of the contact id 3 in this case. Below are the screen shots of before we click on the link, the login page and finally the contact page.

<img src="../SO%20Protocol%20-%20open%20a%20new%20dialog_files/image004.jpg" width="604" height="438" />

<img src="../SO%20Protocol%20-%20open%20a%20new%20dialog_files/image005.jpg" width="604" height="438" />

<img src="../SO%20Protocol%20-%20open%20a%20new%20dialog_files/image006.jpg" width="604" height="438" />

After we have logged in we are taken straight to the contact page that contains information on contact id 3.
