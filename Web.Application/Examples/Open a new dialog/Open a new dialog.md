<properties date="2016-06-24"
SortOrder="5"
/>

In this section we will talk about how we can use the SoProtocol to open new pages in different ways. The SoProtocol defines the user-interface state that the user sees. For example: if you want see the contact page with the contact id 2 and the activity archive for that contact the SoProtocol will look like below.

[ http://www.example.com/SuperOffice/default.aspx?contact.main.activityarchive?contact\_id=2](#)

We can use this SoProtocol string to navigate to another page without clicking in the browser. For more information on SoProtocol please refer. (TODO: Link to SoProtocol doc)

If we type the following link on the browser it will lead us to the page shown on the screen shot below. [](../http://%0dwww.example.com/Six/Default.aspx?contact.main.minimonth.personarchive?contact_id=34&person_id=81)

[http://www.example.com/SuperOffice/Default.aspx?contact.main.minimonth.personarchive?contact\_id=34&person\_id=81](#)

<img src="../SO%20Protocol%20-%20open%20a%20new%20dialog_files/image001.jpg" width="604" height="438" />

This is the simplest way that we can use the SoProtocol string to open a dialog.

 

 

1. autolist
