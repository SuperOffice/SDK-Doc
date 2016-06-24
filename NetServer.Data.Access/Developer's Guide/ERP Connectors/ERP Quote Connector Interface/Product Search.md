<properties date="2016-05-11"
SortOrder="6"
/>

[Product Search Provider]()
-----------------------------------------------------

There are two ways a product can be searched for – the simple, keyword driven search, where the user simply types one or more words; and a more structured search, where a “Find” dialog is shown. This dialog follows the usual convention where users can add one or more criteria, perform repeated searches, and finally choose one or more lines from the results to take back into the Quote system as Quote lines.

The simple search is part of the Product Provider part, specifically the FindProduct method. Implementation of this part and method are mandatory, though the connector is free to interpret the search keywords in whatever manner it sees fit.

The structured search is optional and can be implemented in one of two ways: Either through the optional Product Search Provider functions, or by implementing an IArchiveProvider with a name according to a naming convention. The first option is simpler and more structured, while the second option gives the ultimate flexibility.

A connector signals that it supports this kind of search by supporting the capability  iconnector\_perform\_complexsearch . If it contains an appropriately named archive provider, then this will be instantiated; otherwise it must implement the Product Search Provider functions.

The user clicks on the ADVANCED FIND button to trigger the search dialog.

<img src="Quote%20Connector%20interface_files/image012.jpg" id="Picture 28" width="605" height="565" />

#### Using Product Search Provider functions

The Product Search Provider part contains two methods that need to be implemented:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>FieldMetadataInfo []  <strong>GetSearchableFields</strong> ()</p>
<p> </p></td>
<td><p>Called before the search dialog is opened, to determine the set of searchable fields (possible criteria).</p>
<p>The connector can offer any fields it desires. If a “current pricelist” is implied by the GUI, then it will be included in the criteria, so connectors must always be prepared to handle erpPricelistKey=xxx .</p></td>
</tr>
<tr class="even">
<td><p>ProductInfo []  <strong>GetSearchResults</strong> ( SearchRestrictionInfo []  restrictions )</p>
<p> </p></td>
<td><p>The actual search: An array of criteria is passed in, and an array of ProductInfo results is returned. The ErpProductKey field of each returned ProductInfo <strong>must</strong> be populated; and as many as reasonable of the other fields <strong>should</strong> be populated. The user can choose which return fields to display.</p></td>
</tr>
</tbody>
</table>

 

The SearchRestrictionInfo structure consists of a criterion name, an operator, and an array of values. The criteria names will be those that the connector specified as available in a preceding GetSearchableFields call (the FieldKey). Operators for all data types are: =, !=, &lt;, &gt;, &lt;=, &gt;=, **between**, **in**. Additionally, strings can use the **begins** and **contains** operators, where % is the 0-or-more wildcard character in the string value.

Values are encoded using the CultureDataFormatter mechanism. The **between** operator uses two values, the **in** operator uses 1..N values, and all other operators just use one value. There are no “magic values”; if the user has chosen “this week” in the GUI for a date field, then the connector will see the **between** operator and the two correct datetime values denoting the start and end of the week.

If there is more than one restriction, then there is an implicit **AND** between them. There is no way to specify **OR** or precedence (parentheses).

#### Using an archive provider

If a connector wants to **return more fields** than exist in the ProductInfo structure, or have custom grouping/icons or richer data types in the criteria, then it can implement an archive provider instead of implementing Product Search Provider functions.

Such a provider must have the name FindErpProduct;&lt;name of connector&gt;, where name in both cases refers to the name in the attribute, not the name of the actual implementing class. Whenever such a provider is detected, then it will be called, following the usual protocol.

This means that it is instantiated twice – once so that GetAvailableColumns and GetAvailableEntities can be called; and once so that SetRestrictions, SetDesiredColumns, SetDesiredEntities, SetPagingInfo and GetRows can be called to perform the actual search.

The provider **must** declare the erpProductKey column and return a valid value. It must also set a LinkHint on the row, of the form “nav=erpProduct&erpProduct\_id=&lt;actual key&gt;” on each row.

Apart from this, it **should** support a reasonable set of columns, which can be a superset of the ProductInfo items.

[Quote Dropdown List Provider]()
----------------------------------------------------------

<img src="Quote%20Connector%20interface_files/image013.jpg" id="Picture 12" width="585" height="173" /> 

There are a few lists in the ERP system that we would like to show to the users: payment terms and types, delivery terms and types, and product classifications (product category, product family and product type).

These lists can be supplied by the ERP connector using this function.  SuperOffice will take these values and convert the simple flat list of values into a SuperOffice list that appears in the GUI.

<img src="Quote%20Connector%20interface_files/image014.jpg" id="Picture 27" width="605" height="279" />

If the ERP connector wants to supply a more complex nested list, then the ERP connector can implement a full MDO Provider.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>QuoteListItem[] <strong>GetQuoteList</strong>( string quoteListType )</p></td>
<td><p>Gets a named list from the connector</p>
<p> </p>
<p>The quoteListType parameter is case insensitive.</p>
<p> </p>
<p>Return array of QuoteListItems.<br />
Return NULL if the given list is not supported.</p></td>
</tr>
</tbody>
</table>

 

### [Quote List Names]()

There are some lists in the system we would like the ERP system to provide data for, if it can:

* ProductCategory

* ProductFamily

* ProductType

* PaymentTerms

* PaymentType

* DeliveryTerms

* DeliveryType

If a quote list is NULL, then the GUI will fall back to a text input field, where the user can enter text. This text is passed to the ERP plugin unchanged.

The Quote configuration API may also refer to custom list names which will be filled in by asking here. I.e. you will be asked for more lists than just the ones mentioned here, if you have added custom lists to the configuration dialog.

 
