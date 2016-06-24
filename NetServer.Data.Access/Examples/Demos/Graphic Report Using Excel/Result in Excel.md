<properties date="2016-05-11"
SortOrder="13"
/>

What we have done first in the above code is to convert the required strings, i.e. Amount and EarningPercentage columns into there relevant numeric type. This has been done by using a looping through each of the rows of the converted data table. The modified values would then be added to another able which can be used to display the data on the Data Grid as well to pass the data in to the Xml writer. The Xml file that is used by Excel to is stored at C:\\\\SaleData.xml location.

Following is a Screen view when the SaleData.Xml is opened in Microsoft Office Excel.

<img src="Graphic%20report%20using%20Excel_files/image001.jpg" width="491" height="435" />

In order to run the sample code the &lt;Database&gt;&lt;/Database&gt; tags of the web.config file should be modified to reflect the SuperOffice Database of machine that the site is been run on. Final step before running the site is to add the following references.

1. SOCore.dll

2. SODataBase.dll

3. SuperOffice.CRMWeb.dll

4. SuperOffice.Services.dll

5. SuperOffice.Services.Impl.dll
