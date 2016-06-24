<properties date="2016-05-11"
SortOrder="1"
/>

 

[Background & Vision]()
=================================================

The SuperOffice Quote Management system is based on an architecture that allows connection to several ERP systems. This is facilitated through a set of “Quote Connectors”. A quote connector provides specific data- and business logic for the ERP system in question. A Quote Connector communicates with SuperOffice through a set of API’s which are specifically made available for connector purposes. SuperOffice relies on partners to develop all Connectors. SuperOffice will certify all available Connectors, but will not distribute them or offer them as part of our standard pricelist.

 

[Architecture]()
------------------------------------------

<img src="Quote%20Connector%20interface_files/image001.png" width="634" height="431" />

Figure 1 : ERP system in this case is BaaN

 

The &lt; **SpesificERP&gt;QuoteConnector.DLL** is loaded into the SuperOffice client when the SuperOffice client starts.

The information needed to connect to the ERP system is set up and stored in the SuperOffice database first.

[Files]()
-----------------------------------

**SoDatabase.dll** – Contains the business logic and the implementation of the core functionality. It changes with every major and minor release of SuperOffice.

**SuperOffice.Plugins.Dll** – Contains the interface definitions and data carriers used by the interface. It changes rarely, and then only additions. The goal is that ERP plugins only need to reference the plugins.dll, so that they are compatible across minor and major releases of SuperOffice.

**Erp.QuoteConnector.Baan.dll** – Contains the implementation of the IQuoteConnector interface defined in SuperOffice.Plugins.dll. This DLL should be compatible across minor releases of SuperOffice as long as it does not reference the SoDatabase.dll directly.

 

[The SuperOffice Quote Management API]()
==================================================================

The API will be implemented as an interface named IQuoteConnector, of which an ERPConnector can implement one or more functions. By overloading either BaseQuoteConnector or QuoteConnectorExtender you get to only overload the parts you want to change.

Functions that we expect to vary between ERP systems we will make queryable via capability checks. e.g.: Not all connectors will support the creation of orders, so SuperOffice will first check that the capability is available by calling CanProvideCapability(“iorderconsumer\_place\_order”)

[Some facts]()
========================================

* A SuperOffice installation can have, 0, 1 or many ERP connectors at the same time. Many large companies have more than one ERP system. (Typically divided over country borders.)

* The connector should be totally without user interface. It might be run at a server far, far away, far away from the user, by both Windows and Web clients.

* A connector must be installed and configured by the administrator.

* The system will allow the administrator to set up which salesmen shall have access to which ERP clients. If a salesman has access to more than one system, he will be asked which one he wants to use when he creates a quote.

* Since not all connectors will be able to support all functionality, and we don’t want to accept the least common denominator, the connector should be query-able; SuperOffice shall be able to query the connector about its capabilities.

* SuperOffice shall report to the connectors the language the user is running in, and will strongly request that the responses is translated as far as possible (especially the user error responses).

 

[Company Policy Preferences]()
--------------------------------------------------------

SuperOffice Quote system can be configured to enable the various features available:

* Alternatives – available or not.

* Versioning – used or not.

* Discounts on total order amount – or only on line items.

[Other company policy rules]()
========================================================

See QuoteConnectorExtender chapter for a simple way of adding a specific rule for an installation without having to recompile the whole erp connector.

[Parts]()
===================================

The system is implemented as one interface, but has some parts:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Quote Connector Setup</p></td>
<td><p>Configure the connection to the ERP system. Provides meta-data about connection properties.</p></td>
</tr>
<tr class="even">
<td><p>Basic Connector</p></td>
<td><p>Handles the connection to the ERP system and the work of keeping the ERP system informed about the Quote.</p></td>
</tr>
<tr class="odd">
<td><p>Product Provider</p></td>
<td><p>Search products and price lists.</p></td>
</tr>
<tr class="even">
<td><p>Price Provider</p></td>
<td><p>Calculates the discount on a single quoteline, and on a complete quote.</p></td>
</tr>
<tr class="odd">
<td><p>Order Consumer</p></td>
<td><p>Accepts a quote and creates an order in the ERP system.</p></td>
</tr>
<tr class="even">
<td><p>Address Provider</p></td>
<td><p>Some ERP systems will be able to supply the default addresses for a quote/order.</p></td>
</tr>
<tr class="odd">
<td><p>Product Search Provider</p></td>
<td><p>A set of functions to be able to do more complex search.</p></td>
</tr>
</tbody>
</table>

 
