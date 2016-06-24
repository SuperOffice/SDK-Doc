<properties date="2016-06-24"
SortOrder="13"
/>

 

By changing the URL we can load different panels and cards in to CRM.web

For one page there can be lot of views but the soprotocol tag of each view should be unique within a page. By calling the soprotocol which is in a particular view, we can directly open the page with activating the tab(view) which we need to be activated.

<http://localhost/SuperOfficeWeb/default.aspx?project.udef>

This link opens the project page displaying the More (udef) tab.

In the above link “project” is the soprotocol value set in the panel and “udef” is the soprotocol value set in the view.

Generated output is shown below.

<img src="SO%20Protocol-switch%20to%20different%20panel%20or%20card_files/image001.jpg" width="605" height="440" />

 

<http://localhost/SuperOfficeWeb/default.aspx?project.event.projectmemberarchive>

This link opens the project page displaying the event tab and Project Member tab which is shown in below.

 

 

<img src="SO%20Protocol-switch%20to%20different%20panel%20or%20card_files/image002.jpg" width="605" height="454" />

 

In the same config file if we use duplicate soprotocol values for views, it will give us a conflict error message. In a config file we can create any number of views, but the soprotocol value of each view should be unique.
