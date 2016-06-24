<properties date="2016-06-24"
SortOrder="3"
/>

 

The intention of this document is to demonstrate how to implement a web panel that detects if it is running inside 6.web. In this example we have created a simple aspx page, which displays the text ‘I am running inside 6.web’ if the page is referred to from 6.web iframe and ‘I’m NOT running inside 6.web’ if otherwise.

As elaborated below, the custom header ‘X-SuperOffice-ModuleVersion’ is used to determine whether being referred by 6.web. This value is set only when the web panel is called from 6.win and never by a normal browser.

```
 
// Reads the value for the custom header 'X-SuperOffice-ModuleVersion'       
string moduleVersion = HttpContext.Current.Request.Headers["X-SuperOffice-ModuleVersion"];
if (String.IsNullOrEmpty(moduleVersion))
  {
      this.lblStatus.Text = "I am running inside 6.web";
  }
  else
  {
      this.lblStatus.Text = "I am NOT running inside 6.web.";
  }  
 
```

 

How to add a web panel to SuperOffice 
--------------------------------------

This can be done using SOADMIN console as shown below.

1. Click List on the left. This opens the Lists tab which displays a list that consists of user defined lists.

2. Double click Web Panel which takes you on to the Items tab.

3. Click Add at the bottom and you are directed to the properties window of the new web panel.

The following figure shows the properties of the web panel. We have set the URL of the web page created above.

<img src="How%20to%20Check%20if%20Running%20inside%206web_files/image001.jpg" width="509" height="542" />

 

Following are the screenshots of the web panel running in 6.web and 6.win.

<img src="How%20to%20Check%20if%20Running%20inside%206web_files/image002.jpg" width="605" height="372" />

In 6.win it displays ‘I am NOT running inside 6.web’ as shown above whereas the message is ‘I am running inside 6.web’ in 6.web.

<img src="How%20to%20Check%20if%20Running%20inside%206web_files/image003.jpg" width="604" height="362" />

 

 

 
