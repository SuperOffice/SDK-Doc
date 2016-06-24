<properties date="2016-05-11"
SortOrder="5"
/>

[Creating a Quote]()
----------------------------------------------

<img src="Quote%20Connector%20interface_files/image007.jpg" id="Picture 13" width="585" height="325" />

When the user creates a quote by clicking the CREATE A NEW QUOTE link, the following happens.

<img src="Quote%20Connector%20interface_files/image008.jpg" id="Picture 17" width="605" height="448" />

If there are more than one connection with pricelists in the right currency, then the user must select the connection to use:

<img src="Quote%20Connector%20interface_files/image009.png" id="Picture 20" width="556" height="411" />

 

 

### [Capability Names]()

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>iproductprovider_provide_cost</p></td>
<td><p><a href="" id="OLE_LINK55">Can the Product Provider fill in the Cost price value?</a></p>
<p>Determines if the Cost field is shown in the GUI.</p></td>
</tr>
<tr class="even">
<td><p>iproductprovider_provide_minimumprice</p></td>
<td><p><a href="" id="OLE_LINK69"></a> <a href="" id="OLE_LINK68">Can the Product Provider fill in the Minimum price value? Determines if the Minimum Price field is shown in the GUI.</a></p></td>
</tr>
<tr class="odd">
<td><p><a href="">iproductprovider_provide_stockdata</a></p></td>
<td><p><a href="" id="OLE_LINK78"></a> <a href="" id="OLE_LINK77">Can the product provider supply Stock data?<br />
Determines whether the Stock values are shown in the GUI or not.</a></p></td>
</tr>
<tr class="even">
<td><p>iproductprovider_provide_extradata</p></td>
<td><p><a href="" id="OLE_LINK80"></a> <a href="" id="OLE_LINK79">Does the Product Provider fill in any ExtraData. Determines if the extra data fields are shown in the GUI.</a></p></td>
</tr>
<tr class="odd">
<td><p>iproductprovider_provide_thumbnails</p></td>
<td><p><a href="" id="OLE_LINK71"></a> <a href="" id="OLE_LINK70">Can the Product Provider supply thumbnails of products?</a></p></td>
</tr>
<tr class="even">
<td><p>iproductprovider_provide_picture</p></td>
<td><p><a href="" id="OLE_LINK73"></a> <a href="" id="OLE_LINK72">Can the Product Provider supply any pictures? Determines if the picture field is shown in the dialog.</a></p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>ipriceprovider_compute_price</p></td>
<td><p>Can the connector calculate a price value for a quote? If the ERP system is not available (e.g. on travel) then the connector might fall back on the list price.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>iorderconsumer_place_order</p></td>
<td><p><a href="" id="OLE_LINK67"></a> <a href="" id="OLE_LINK66">Can the connector place orders?<br />
If not then the PlaceOrder method is not called.<br />
The ACCEPT button and the PlaceOrder dialog is still shown, but the connector is not called.</a></p></td>
</tr>
<tr class="odd">
<td><p>iorderconsumer_provide_orderstate</p></td>
<td><p><a href="" id="OLE_LINK82"></a> <a href="" id="OLE_LINK81">Can the connector check order status in the ERP system. If the capability is FALSE, then no GET STATUS button appears after an order has been accepted.</a></p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>ilistprovider_provide_productcategorylist</p>
<p> </p></td>
<td><p><a href="" id="OLE_LINK84"></a> <a href="" id="OLE_LINK83">Can the connector provide the Product category list?</a></p></td>
</tr>
<tr class="even">
<td><p>ilistprovider_provide_productfamilylist</p></td>
<td><p><a href="" id="OLE_LINK86"></a> <a href="" id="OLE_LINK85">Can the connector provide the Product family list?</a></p></td>
</tr>
<tr class="odd">
<td><p>ilistprovider_provide_producttypelist</p></td>
<td><p><a href="" id="OLE_LINK88"></a> <a href="" id="OLE_LINK87">Can the connector provide the Product type list?</a></p></td>
</tr>
<tr class="even">
<td><p>ilistprovider_provide_paymenttermslist</p></td>
<td><p><a href="" id="OLE_LINK92"></a> <a href="" id="OLE_LINK91">Can the connector provide the Payment terms list?</a></p></td>
</tr>
<tr class="odd">
<td><p>ilistprovider_provide_paymenttypelist</p></td>
<td><p><a href="" id="OLE_LINK90"></a> <a href="" id="OLE_LINK89">Can the connector provide the Payment type list?</a></p></td>
</tr>
<tr class="even">
<td><p>ilistprovider_provide_deliverytermslist</p></td>
<td><p><a href="" id="OLE_LINK94"></a> <a href="" id="OLE_LINK93">Can the connector provide the Delivery terms list?</a></p></td>
</tr>
<tr class="odd">
<td><p>ilistprovider_provide_deliverytypelist</p></td>
<td><p><a href="" id="OLE_LINK95">Can the connector provide the Delivery type list?</a></p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>iconnector_perform_complexsearch</p></td>
<td><p><a href="" id="OLE_LINK97"></a> <a href="" id="OLE_LINK96">Can the connector perform a complex search? Will make the UI show the advanced find button.</a></p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>iaddressprovider_provide_addresses</p></td>
<td><p><a href="" id="OLE_LINK99"></a> <a href="" id="OLE_LINK98">Can the connector provide addresses at all?</a></p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

 

[Product and Pricelist Information]()
---------------------------------------------------------------

This part of the connector interface searches the ERP system’s product and price list information.

If an ERP system does not provide products the product searches can be delegated to the built-in SuperOffice product registry by using the QuoteConnectorExtender class as a base.

<a href="" id="OLE_LINK4"></a> <a href="" id="OLE_LINK3">Currencies are specified in ISO three letter codes: USD, NOK, SEK, EUR, GBP, etc.<br />
See</a> [http://www.currency-iso.org/dl\_iso\_table\_a1.xls](http://www.currency-iso.org/dl_iso_table_a1.xls) for details.

The Price lists are accessed from the sales & marketing client.

<img src="Quote%20Connector%20interface_files/image010.png" id="Picture 7169" width="634" height="404" /> 
*Client uses FindProduct to do simple searches. You can set filters on the available pricelists.* 

 

<img src="Quote%20Connector%20interface_files/image011.jpg" id="Picture 25" width="605" height="338" />

 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>int <strong>GetNumberOfActivePriceLists</strong>(string isoCurrencyCode )</p></td>
<td><p>Is used to warn the user if there is no active pricelists in a given currency.</p>
<p>Iso currency code like: USD or NOK. Case insensitive.</p>
<p>Will return no of all active pricelists if isoCurrencyCode is empty.</p></td>
</tr>
<tr class="even">
<td><p>PriceListInfo[] <strong>GetActivePriceLists</strong>( string isoCurrencyCode )</p></td>
<td><p>Used by SuperOffice to provide filters.<br />
Gets the available active PriceLists in a specific currency.</p>
<p> </p>
<p>Iso currency code like: USD or NOK. Case insensitive.</p>
<p>Will return all pricelists if isoCurrencyCode is empty.</p>
<p>Return an empty array if there is no PriceList with the stated currency available.</p></td>
</tr>
<tr class="odd">
<td><p>PriceListInfo[] <strong>GetAllPriceLists</strong>( string isoCurrencyCode )</p></td>
<td><p>Currently not used.<br />
Gets the all PriceLists in the given currency, including those inactive.</p>
<p> </p>
<p>Iso currency like: USD or NOK. Case insensitive. See <a href="http://www.currency-iso.org/dl_iso_table_a1.xls" class="uri">http://www.currency-iso.org/dl_iso_table_a1.xls</a> for details.</p>
<p>Will return all pricelists if isoCurrencyCode is empty. Will return empty array if there is no PriceList available.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="">ProductInfo[] <strong>FindProduct</strong>( QuoteContextInfo context, string isoCurrencyCode, string userinput, string priceListKey )</a></p></td>
<td><p>The connector should treat this as a free text search; the user might want to search for name, description, product code, extra fields, etc.</p>
<p> </p>
<p>Since the return list is a potentially large return value, the connector or the ERP system should limit the number of matches returned to a few hundred.</p>
<p> </p>
<p>The dropdown fast searcher calls this function.</p>
<p> </p>
<p>Iso currency like: USD or NOK. Case insensitive. See <a href="http://www.currency-iso.org/dl_iso_table_a1.xls">http://www.currency-iso.org/dl_iso_table_a1.xls</a> for details.</p>
<p> </p>
<p>If the priceListKey is empty, the function will search in all active pricelists.</p>
<p> </p>
<p>An empty search (“”) should return null, but a search on “%” should return all products.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>ProductInfo <strong>GetProduct</strong>( string erpProductKey )</p></td>
<td><p><a href="" id="OLE_LINK2"></a> <a href="" id="OLE_LINK1">Gets a product based on erpProductKey.</a></p>
<p> </p>
<p>(If the product is not found, the function will throw an ArgumentException.)</p>
<p>(If the argument is null or empty, the function will throw an ArgumentException.)</p>
<p> </p>
<p>Returns the product with the specified key.</p></td>
</tr>
<tr class="even">
<td><p>ProductInfo[] <strong>GetProducts</strong>( string[] erpKeys )</p></td>
<td><p>Return products based on an array of unique ERP keys; handy when you’ve found products through archiveproviders or other mechanisms that leave you holding multiple  ERPKey values.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>QuoteLineInfo <a href="" id="OLE_LINK11"></a> <a href="" id="OLE_LINK10"><strong>GetQuoteLineFromProduct</strong></a>( QuoteContextInfo context, string erpProductKey )</p></td>
<td><p><a href="" id="OLE_LINK13"></a> <a href="" id="OLE_LINK12">Given a product ERP Key, return a quote line with some default values filled in.</a></p>
<p>The quoteLineId will be provided by SuperOffice later.</p>
<p><a href="" id="OLE_LINK17"></a> <a href="" id="OLE_LINK16">Return the QuoteLine with the product info filled in.</a></p>
<p>If the product isn’t found, the function will throw an exception.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>int <strong>GetNumberOfProductImages</strong>( string erpProductKey )</p></td>
<td><p>Currently not used.</p>
<p>Gets the number of images available for this product.</p>
<p> </p></td>
</tr>
<tr class="odd">
<td><p><a href="" id="OLE_LINK22"></a> <a href="" id="OLE_LINK21">string  </a> <a href="" id="OLE_LINK24"></a> <a href="" id="OLE_LINK23"><strong>GetProductImage</strong></a> ( string erpProductKey, int rank )</p></td>
<td><p><a href="" id="OLE_LINK26"></a> <a href="" id="OLE_LINK25">Gets the full size picture of the given product.<br />
<br />
</a></p>
<p>Rank: Which of the images to return, will in the first version only ask for the first.</p>
<p> </p>
<p>Returns the full size picture of the given product.<br />
Return NULL if no picture available.</p></td>
</tr>
</tbody>
</table>

 
