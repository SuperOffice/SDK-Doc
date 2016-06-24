<properties date="2016-06-24"
SortOrder="15"
/>

In the CRM.web, default.aspx there is a PageBuilder tag as shown below.

 

```
<so2:PageBuilder ID="PageContent" runat="server">
 
</so2:PageBuilder>
```

 

Default.aspx is the main page that used by CRM.web. Every time the default.aspx page is loaded, the PageBuilder Framework supplies the information.

The diagram below is of the PageBuilder class, it is included lot of methods ex: InitializeCard, InitializeControl, InitializePanels, InitializeView, InitializeDataHandler and many more.

 
