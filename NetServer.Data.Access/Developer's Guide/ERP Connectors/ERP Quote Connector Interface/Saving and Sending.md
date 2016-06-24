<properties date="2016-05-11"
SortOrder="7"
/>

[Saving the Quote]()
----------------------------------------------

<img src="Quote%20Connector%20interface_files/image018.jpg" id="Picture 31" width="600" height="385" />

The sale is updated with the preferred alternative’s total amount when the quote dialog is closed.

After the sale and quote have been written to the database, the OnAfterSaveQuote is called for each alternative in turn.  The OnAfterSaveQuote cannot edit the quote – it is intended for the connector to update the ERP with any interesting changes – i.e. for keeping the ERP system up to date with respect to the SuperOffice quote.

 

[Sending Quotes]()
--------------------------------------------

<img src="Quote%20Connector%20interface_files/image019.png" id="Picture 206" width="570" height="510" />

When a user sends a quote to the customer, the quote version is frozen, and the quote version cannot be edited further.

This happens outside the Quote Connector. SuperOffice will generate a PDF document containing the overview document and the order details, and generate an e-mail to the customer if asked.

The connector is not involved in this process.

The QuoteConnector is called after all this is done, so that the connector can sync information about the published quote to the ERP system.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>QuoteSentResponseInfo <strong>OnAfterSentQuoteVersion</strong>( QuoteContextInfo context )</p></td>
<td><p>Called after a quote version is sent to the customer. Can return a URL or SO Protocol, or a status message to indicate success/failure.  Cannot prevent the version becoming archived.</p></td>
</tr>
</tbody>
</table>

 

<img src="Quote%20Connector%20interface_files/image020.jpg" id="Picture 7187" width="605" height="501" />

 
