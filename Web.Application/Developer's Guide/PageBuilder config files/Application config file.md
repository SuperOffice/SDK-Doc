<properties date="2016-06-24"
SortOrder="18"
/>

Application config file
=======================

 

In this section we will discuss the configuration of the application. The application configuration file lists all the pages used in the system. It stores data like the preference section for a given page in the UserPreference table, what is the key of the preference. It holds the current information of a given page in the current section of the file. Given below is a part of the actual SoApplicationConfiguration file that exists in the CRM.web application.

```
<?xml version="1.0" encoding="utf-8" ?>
<applicationsettings defaultprefsection="SuperMode">
  <pages prefsection="SuperMode" prefkey="MainPanel">
    <page id="contact" type="mainpage"  function-right="hide-company" />
    <page id="project" type="mainpage"  function-right="hide-project" />
    <page id="selection" type="mainpage" function-right="hide-selection" />
    <page id="diary" type="mainpage" />
    <page id="mail" type="mainpage"  function-right="hide-mail" />
    <page id="maillogin" type="mainpage"  function-right="hide-mail" />
    <page id="browser" type="mainpage" />
    <page id="sale" type="dialog" height="500px" width="650px" />
  </pages>
 
  <currents>
<current id="appointment" type="history" providername="SoProtocolProvider" />
      <current id="day" type="preference" providername="SoProtocolProvider" />
      <current id="week" type="preference" providername="SoProtocolProvider" />
      <current id="month" type="preference" providername="SoProtocolProvider" />
      <current id="associate" type="history" providername="SoProtocolProvider" />
      <current id="contact" type="history" providername="SoProtocolProvider" />
      <current id="person" type="history" providername="SoProtocolProvider" />
    <current id="previewcontact" type="none" providername="SoProtocolProvider" />
    <current id="previewperson" type="none" providername="SoProtocolProvider" />
    <current id="project" type="history" providername="SoProtocolProvider" />
            <current id="sale" type="history" providername="SoProtocolProvider" />
  </currents>
</applicationsettings>
```

 

In the above file we can see that the pages are listed under the pages tag. Here under the pages tag we can see that the user preference data for all the pages will be stored under the SuperMode section and the key will be main panel. When we go into the individual pages it gives the page id, the type of the page and if it is a main page the functional rights it has. If the page is not a main page we can see that the size information of the page has been detailed out since it is not appearing as a page but a dialog.

In the currents section it gives details about where the application have stored the current data for a given page. For example the below line says

```
<current id="appointment" type="history" providername="SoProtocolProvider" />
```

 

The current appointment is stored in the history table and the provider that will retrieve the data for us is the SoProtocolProvider. Likewise it will list for all the current values of the application.

 
