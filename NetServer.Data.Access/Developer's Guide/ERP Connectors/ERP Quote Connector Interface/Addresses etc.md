<properties date="2016-05-11"
SortOrder="10"
/>

[Address Provider]()
----------------------------------------------

The ERP systems often has addresses, and when creating a quote, the CRM system calls these to functions to get the default addresses (the user can change the addresses later, if they should happen to be wrong).

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>AddressInfo[] GetAddresses (</p>
<p>QuoteAlternativeContextInfo c ontext )</p></td>
<td><p>Gets both the invoice and the delivery addresses.</p>
<p>This is normally based on the contact, but can also be based on the project.</p>
<p>[0] = the invoice address</p>
<p>[1] = the delivery address.</p>
<p>Always return an array, but the cell will be null if no address was found on one (or both).</p></td>
</tr>
</tbody>
</table>

 

If the connector returns NULL or does not support addresses, then SuperOffice will use the contact’s street and postal addresses as defaults.

 

[IArchiveProvider]()
----------------------------------------------

<img src="Quote%20Connector%20interface_files/image024.jpg" width="359" height="259" />

The archive provider and its associated interfaces are used to implement multi-column lists all over the SuperOffice GUI.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>GetAvailableColumns</p></td>
<td><p>Get the list of columns handled by this provider</p></td>
</tr>
<tr class="even">
<td><p>GetAvailableEntities</p></td>
<td><p>Get the list of entities supported by this provider</p></td>
</tr>
<tr class="odd">
<td><p>GetReader( string )</p></td>
<td><p>Start the reader and return an IDataReader (which, as we remember, also inherits IDataRecord for access to individual data fields). This provides an alternative, more generic and more standards-based interface to data. Use <strong>either</strong> GetRows <strong>or</strong> GetReader on any particular archive provider instance.</p></td>
</tr>
<tr class="even">
<td><p>GetResultInformation( )</p></td>
<td><p>Get additional information about the result, such as row count or other optional items. This method should be called some time after GetRows, but before Close.</p></td>
</tr>
<tr class="odd">
<td><p>GetRows( string )</p></td>
<td><p>Start the query and return an iterator. The .Current property will be a valid ArchiveRow containing one row, as long as a previous call to .MoveNext returned true. This is the standard semantics for an iterator.</p></td>
</tr>
<tr class="even">
<td><p>SetDesiredColumns( string[] )</p></td>
<td><p>Set which columns should actually be returned, must be a subset of the GetAvailableColumns result</p></td>
</tr>
<tr class="odd">
<td><p>SetDesiredEntities( string[] )</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>SetOrderBy( ArchiveOrderByInfo[] )</p></td>
<td><p>Set the sort order. Which columns should rows be ordered by.</p></td>
</tr>
<tr class="odd">
<td><p>SetPagingInfo( int, int )</p></td>
<td><p>Set the paging properties of the provider. The default is to fetch page zero, of one thousand (1000) rows. A more reasonable page size is probably around 100. Note that the query processing strategy may change for very large pages (more than 1000) and give significantly longer response times.</p></td>
</tr>
<tr class="even">
<td><p>SetRestriction( ArchiveRestrictionInfo[] )</p></td>
<td><p>Set restrictions on which rows should be returned.</p></td>
</tr>
<tr class="odd">
<td><p>Close()</p></td>
<td><p>Call this method after the last desired row has been read; this gives the provider the chance to close and free any underlying queries</p></td>
</tr>
</tbody>
</table>

 

[IProductRegisterCache]()
---------------------------------------------------

This part is not in use yet.

SuperOffice has its own simple Product table. This table can be used by the ERP connectors as a cache for ERP data.

This interface will be implemented by SuperOffice. The implementation is passed to all connectors as an initialization parameter.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>int <strong>CreatePriceList</strong>( PriceListInfo pricelist )</p></td>
<td><p>Creates a pricelist in the SuperOffice database.</p>
<p>Returns the id to the pricelist.</p></td>
</tr>
<tr class="even">
<td><p>ProductInfo[] <strong>InsertProducts</strong>(int pricelistId, ProductInfo[] products )</p></td>
<td><p>Insert a set of products into the SuperOffice database.</p>
<p>Returns the products updated with their new ids.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><strong>UpdateProduct</strong> ( ProductInfo newProd )</p></td>
<td><p>Update a product in the cache with new information</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>IProductProvider <strong>GetSuperOfficeProductProvider</strong>( int quoteConnectionId )</p></td>
<td><p>Here you can get the data you have inserted into the SuperOffice tables.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>void <strong>RemovePriceList</strong>( int pricelistId, bool alsoRemoveRelatedProducts )</p></td>
<td><p>Remove a pricelist and any associated products.</p></td>
</tr>
<tr class="odd">
<td><p>void <strong>RemoveProduct</strong>( int productId )</p></td>
<td><p>Will remove a product if it is in a pricelist related to the connection, and the pricelist is an ERP copy.</p></td>
</tr>
<tr class="even">
<td><p>int <strong>InsertImage</strong>(int productId, Image img, int rank );</p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>void <strong>RemoveImage</strong>( int imageId );</p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

 

 
===========================



  
