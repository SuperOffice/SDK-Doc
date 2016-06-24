<properties date="2016-06-24"
SortOrder="10"
/>

The main purpose of using web-parts is to develop a website which can be customized during runtime. It provides us with the option to drag and drop objects on a page, change titles, border style, and properties of objects at runtime. Web-parts are available in SharePoint portal server as well as in ASP.net 2.0. In this section we are using the web-parts available in ASP.net 2.0.

There are two basic concepts in web-parts. Which are: -

* Web-part manager – Acts as the manager of all the web-parts behind the scenes. The Web-part manager can behave in five different modes such as:

1. Browse Display Mode – This is the default mode. In this we can only minimize or close the web parts. If we close a web-part which is in browse mode then it’ll be permanently removed from the web page. To restore it we need to be in the catalog mode. 

2. Design Display Mode – In this mode we can drag and drop web-parts between different zones. 

3. Catalog Display Mode – This mode allows us to add/remove web-parts on runtime.

4. Edit Display Mode – This allows us to edit web parts on run time. We can edit the appearance, behavior, property and layout.

5. Connect Display Mode - This mode allows web-parts to communicate with each other.

* Web-part zones – Areas of the page that can contain the content. We have four different types of web-part zones. They are:   

1. Web-part Zone

2. Editor Zone

3. Catalog Zone

4. Connection Zone

Each of these zones make the web-part manager behaves in one of its five different modes. In our example we will set the web-part manager to the catalog display mode. It includes web-part zone and catalog zone in our example. Zones are displayed as below.

<img src="../A%20simple%20web-part%20that%20uses%20service%20api_files/image001.jpg" width="604" height="390" />

We can add web-part manager and any of the web-part zones to your application simply by dragging them from the WebParts section in your Toolbox.

An important Point to Remember!

You need to have Internet Explore 5 or later version to observe all the above features of web-parts
