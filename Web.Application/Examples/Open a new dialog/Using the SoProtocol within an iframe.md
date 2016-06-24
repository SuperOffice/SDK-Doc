<properties date="2016-06-24"
SortOrder="6"
/>

Since the SoProtocol string acts as a URL we can use it inside an iframe. This is very simple all you have to do is give the SoProtocol string as the src value of the iframe. Below is the code that you have to add as the HTML code of your web page.

```
<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>testPage</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <iframe id="SuperOfficeFrame" src="http://www.example.com/Six/default.aspx?contact.main.activityarchive?contact_id=3" width="1200" height="800" marginwidth="0" marginheight="0" frameborder="1"></iframe>
    </div>
    </form>
</body>
</html>
```

 

Notice that in the above code we have asked for the contact id 3. So when the iframe gets executed it will first take us to the login page of 6.Web since we have not logged into the system. After we have logged in the SoProtocol string will take us to the contact that we wanted. Below is a screen shot of the login page and then the contact page.

<img src="../SO%20Protocol%20-%20open%20a%20new%20dialog_files/image002.jpg" width="604" height="438" />

<img src="../SO%20Protocol%20-%20open%20a%20new%20dialog_files/image003.jpg" width="604" height="438" />

After the login the SoProtocol has taken us to the correct contact.

An important point to remember!

The standard way to login to the CRM.web is through the login page. However it is possible to login to CRM.Web via a url if the username and password is passed as part of the url.

[http:www.example.com/SuperOffice/Security/Login.aspx?UserId=sam&Password=sam&Culture=en-us&TrayApp=no](#)

In the url above,

UserId and Password refers to the SuperOffice login name and Password

Culture refers to the culture string which determines the user interaction language

TrayApp which could be either “yes” or “no” indicates whether the TrayApp is installed or not.
