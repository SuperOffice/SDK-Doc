<properties date="2016-05-11"
SortOrder="9"
/>

[Placing Orders into ERP]()
-----------------------------------------------------

<img src="Quote%20Connector%20interface_files/image021.jpg" id="Picture 114" width="347" height="169" />      <img src="Quote%20Connector%20interface_files/image022.jpg" id="Picture 26" width="236" height="166" />

The user clicks the PLACE ORDER button. The quote version is validated first.

If the validation was ok, then the Place Order dialog appears and the user selects the quote alternative to send to the ERP system and clicks OK in the dialog.

Some ERP systems will be able to turn quotes into orders.

If the connector has the iorderconsumer\_place\_order capability, then the connector’s PlaceOrder method is called.

If the connector doesn’t have the iorderconsumer\_place\_order capability, then the quote is just marked SOLD.

<img src="Quote%20Connector%20interface_files/image023.jpg" id="Picture 7188" width="605" height="508" />

After the Quote has been accepted/sold, then the user can check the delivery status with the ERP system.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>PlaceOrderResponseInfo <strong>PlaceOrder</strong> ( QuoteContextInfo context )</p></td>
<td><p>Place the order in the ERP system.</p>
<p>If the operation returns successfully, the Quote will be locked (completed) in the CRM system, and all updates will come from the ERP system thru the GetOrderState function.</p>
<p> </p>
<p>A summary of all the problems (if any) should be placed in the response object.<br />
Requires that the iorderconsumer_place_order capability is true.</p></td>
</tr>
<tr class="even">
<td><p>OrderResponseInfo <strong>GetOrderState</strong> ( int quoteAlternativeId )</p></td>
<td><p>After the order is created in the ERP system and the user wants to see what the current state of the order is.</p>
<p>Should return a new version with a new alternative and quotelines describing the current state.</p>
<p>This new version will be displayed in the GUI.</p>
<p>If nothing has changed it should return null.<br />
Requires that the Order-Status capability is true.</p></td>
</tr>
</tbody>
</table>

 
