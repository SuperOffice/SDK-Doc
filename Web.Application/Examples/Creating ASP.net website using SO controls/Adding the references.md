<properties date="2016-08-04"
SortOrder="9"
/>

Since we are planning to make use of SO controls we need to add the SuperOffice.Web.UI.Controls.dll provided with the DCF SDK. Visual Studios will also add dependent DLLs such as SOCore.dll, SuperOffice.Services.dll.

Once the GUI state of the site is complete we need to have certain DLLs that enable use to retrieve data from the SuperOffice database. Since we plan to make use of the Services layer exposed by the NetServer we need to add: - SuperOffice.Services.dll and the SuperOffice.Services.Impl.dll DLLs.

Following is an image showing the basic references that are need to create an ASP.Net website using SO controls.

<img src="../Creating%20ASPNET%20website%20using%20SO%20controls%20_files/image001.jpg" width="277" height="355" />
