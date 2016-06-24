<properties date="2016-05-11"
SortOrder="13"
/>

[QuoteConnectorBase implementation]()
===============================================================

The QuoteConnectorBase implements most of the IQuoteConnector API, and adds some useful default behavior to the basic API contract. For example – recalculate alternative is handled for you.

In addition to the IQuoteConnector interface, the base class adds a few public methods of its own.

ValidateQuoteVersion calls the **ValidateVersion** implementation method, which calls down the hierarchy in order.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>QuoteVersionResponseInfo <strong>ValidateVersion</strong>(QuoteVersionContextInfo context, bool clearOldValues = false)</p></td>
<td><p>Validates the version, looks for problems. Will typically change the Status and Reason fields.</p>
<p>Should for instance validates the alternatives and then concatenates the problems into the Status and reason fields.</p></td>
</tr>
<tr class="even">
<td><p>QuoteAlternativeWithLinesInfo <strong>ValidateAlternative</strong>(QuoteAlternativeWithLinesInfo quoteAlternativeWithLines, bool clearOldValues = false)</p></td>
<td><p>Check rules for the quote alternative and fill out the status and reason fields if there is one or more problems.</p></td>
</tr>
<tr class="odd">
<td><p>QuoteLineInfo <strong>ValidateQuoteLine</strong>(QuoteLineInfo ql, bool clearOldValues = false);</p></td>
<td><p>Check rules for the quoteline and fill out the status and reason fields if there is a problem.</p></td>
</tr>
</tbody>
</table>

 

These functions are not part of the public API, but are part of the connector base class’s implementation.

You need to supply your own:

* InitializeConnection
* CanProvideCapability
* OnAfterSaveQuote
* OnBeforeDeleteQuote
* FindProduct
* GetProduct
* GetProducts
* GetQuoteLinersFromProduct

The SuperOffice connector is built on top of the QuoteConnectorBase, but it is tightly coupled to the SoDatabase and SoCore assemblies. This means that if you sub-class the SuperOffice connector, you will break whenever a new version is released.

 

<img src="Quote%20Connector%20interface_files/image042.png" width="448" height="246" />

[QuoteConnectorExtender implementation]()
===================================================================

The QuoteConnectorExtender implements the IQuoteConnector API by wrapping another connector, and delegating all calls to the wrapped connector.

To use the extender, you sub-class the QuoteConnectorExtender, and pass the name of the connector you would like to extend as part of the constructor call.

You then override any API calls you want to change, and leave the rest to the base implementation – which just forwards the calls to the wrapped connector.

 

<img src="Quote%20Connector%20interface_files/image043.png" width="690" height="268" />

Here we extend the SuperOffice quote connector, but we override the default implementation of OnQuoteLineChanged with our own custom logic.

MyQuoteConnector tells the extender to wrap the SuperOffice quote connector by passing the name to the base constructor.

Because the QuoteConnectorExtender class lives in the Plugins DLL, the MyQuoteConnector avoids taking direct dependency on the SoCore and SoDatabase DLLs, so it won’t be affected when a version change updates the SoCore assembly.

 

[How to create a SuperOffice Quote Connector]()
=========================================================================

[Prerequisites]()
-------------------------------------------

* Install Visual Studio

* Install SuperOffice Sales & Marketing Windows version on the computer. (The example assumes that you have installed the windows client on “C:\\Program Files (x86)\\SuperOffice\\SuperOffice 7 Windows\\”.)

[Basics]()
------------------------------------

1. Open Visual Studio, but **Run as Administrator**. You will need this to be able to set the build output to a subfolder of Program files.

2. Select “Create new project” from the menu

a.        Select “Visual C\#”

b.       Select “Class library” and give it a name, like “MyQuoteConnector” (or “SAP Connector”)

c.        Select OK

3. Right click on **References** in the Solution explorer and select “Add references…”

a.        Select “Browse”, and “Browse” again.

b.       Navigate to where you installed SuperOffice, typically “C:\\Program Files (x86)\\SuperOffice\\SuperOffice 7 Windows” and select:

                                                                i.       SOCore.dll
                                                              ii.       SuperOffice.Plugins.dll

4. Right-Click on the project in solution explorer and select “ **Properties**”.

a.        Select “Build” tab

b.       Set “Output path” = C:\\Program Files (x86)\\SuperOffice\\SuperOffice 7 Windows\\

c.        Save & Close properties window.

5. Open “Class1.cs”

6. Insert “using SuperOffice.CRM;”

7. (If you are using the version that was made around Christmas 2012) Insert “using SuperOffice.Plugins.CRM.Sale;”

8. Insert “\[QuoteConnector( Name )\]” over the class def. This attribute is used to identify the class by SuperOffice as an ERPQuoteConnector.

9. Insert “ **public const string Name = "MyQuoteConnector";**” inside the class. This name is used (via the attribute over) to identify the class by SuperOffice when it is dynamically loaded from the SuperOffice.config file. You shall have to insert this name and the name of the .DLL into the SuperOffice.config file’s DynamicLoad section later.

 

[If you just want to replace or extend part of an ERP connector]()
--------------------------------------------------------------------------------------------

10. Right click on **References** in the Solution explorer and select “Add references…”

a.        Select “Browse”, and “Browse” again.

                                                                i.       Navigate to where you installed SuperOffice, typically “C:\\Program Files (x86)\\SuperOffice\\SuperOffice 7 Windows” and select the connector you want to extend, for instance: SuperOffice.QuoteConnector.dll

11. Inherit “SuperOffice.CRM. **QuoteConnectorExtender**” in Class1

12. Create a constructor where you reference the ERP connector you want to extend, something like this:

public Class1()

         : base( new SuperOffice.QuoteConnector. SuperOfficeQuoteConnector()) { }

13. Override the function(-s) you want to override. (for instance “OnQuoteLineChanged”)

14. Goto “When Done” J

[If you don’t want to extend an existing ERP connector]()
-----------------------------------------------------------------------------------

 

9. Inherit “SuperOffice.CRM. **QuoteConnectorBase**” in Class1. This class has a lot of what you want to do implemented already; it implements IQuoteConnector and IPlugin.

a.        Implement the abstract class SuperOffice.CRM.QuoteConnectorBase.

**10.   ** Implement **Quote Connector Setup functions**

**11.   ** Implement **Product Provider functions**

12. If you want to handle Orders, implement the Order Consumer functions

13. Goto “When Done” J

 

[When Done]()
---------------------------------------

15. Build your connector DLL

**16.   ** **DynamicLoad
** Either use the SOLOADER panel in Windows Admin client
or change the config file as shown below.

 a.    Open “ C:\\Program Files (x86)\\SuperOffice\\SuperOffice 7 Windows\\SuperOffice.config”

b.       Insert under:

 &lt;  configuration  &gt;

   &lt;  SuperOffice  &gt;
     &lt;  Factory  &gt;
       &lt;  DynamicLoad  &gt;

 The folloing line to load your connector:

  &lt; add key = " MyQuoteConnector " value = " MyQuoteConnector.dll " /&gt;

17. Run admin

18. Click on the “Quote” element in the navigator on the left side.

19. Observe that you can see the Connector in the connector list

20. Add a connection to you connector.

21. Start SuperOffice win client

22. Create a new sale.

23. Create a quote with the new connector.

 
