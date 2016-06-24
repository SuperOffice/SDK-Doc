<properties date="2016-05-11"
SortOrder="6"
/>

[Price Calculations and Field Changes]()
------------------------------------------------------------------

<img src="Quote%20Connector%20interface_files/image015.jpg" id="Picture 7170" width="444" height="316" />

Some installations will be able to compute a price by various means (customer frame agreements chief among these). These calculations are presumably handled by the ERP system. SuperOffice asks the connector to handle changes to the QuoteLine. The ERP connector requests calculations from the ERP system and updates the Quote information in the CRM system.

<img src="Quote%20Connector%20interface_files/image016.jpg" id="Picture 30" width="605" height="550" />

The ERP Connector is responsible for performing the calculations when the user changes values in the quote, like quantity in a quoteline, or Earning on the quote alternative.

 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>QuoteLineInfo <strong>OnQuoteLineChanged</strong>( QuoteContextInfo context, QuoteLineInfo ql, string[] changedFields )</p></td>
<td><p>Called when the user has changed a field in the Quote Line.<br />
The QuoteContextInfo is readonly; QuoteLine may be changed in the return value.<br />
Response time must be fast since this method is called often (every time a field is changed).</p></td>
</tr>
<tr class="even">
<td><p>QuoteAlternativeWithLinesInfo <strong>RecalculateQuoteAlternative</strong>(</p>
<p>QuoteAlternativeContextInfo context )</p></td>
<td><p>The user is finished with entering the quotelines, and wants to calculate the order discount (alternative discount) on this alternative.<br />
This method is called whenever the quote lines are changed, or when the user clicks the RECALCULATE button.</p>
<p>QuoteLines and Alternative fields can be changed in the return value.</p>
<p>QuoteVersion, Quote, Sale, Associate and Contact are read-only.</p>
<p>The connector may signal problems with the quote by setting the Quote Alternative Status.</p></td>
</tr>
<tr class="odd">
<td><p>QuoteVersionResponseInfo <strong>ValidateQuoteVersion</strong> (</p>
<p>QuoteVersionContextInfo context,</p>
<p>QuoteAction action )</p></td>
<td><p>The user is finished with entering the QuoteLines, and wants to send or publish the quote.</p>
<p>This method is called whenever the user clicks the Send button or the Place Order.</p>
<p>Quote Lines, Alternatives, Version and Quote fields can be changed in the return value.</p>
<p>Sale, Associate and Contact are still read-only.</p>
<p><br />
A draft quote version will have state = DraftNotCalculated when called. The connector should set the version state to DraftCalculated if the calculations were successful. Leave the state as DraftNotCalculated if the ERP system was not available or some other factor that made the calculation <a href="" id="OLE_LINK38"></a> <a href="" id="OLE_LINK30">unsuccessful</a>.</p>
<p> </p>
<p>The system will try to hint about why it is asking with the action parameter, it will tell you if the user has pressed send quote or place order.</p>
<p> </p>
<p>The connector can trigger the approval workflow by setting the state to DraftNeedsApproval. When a user with the approval permission has approved or rejected the quote, the quote version state will be DraftApproved or DraftApprovalRejected.</p>
<p>Note that recalculate may also be called when the quote is Approved, or Archived.  In these cases, please leave the quote version state alone.</p>
<p> </p>
<p>The connector may signal problems with the quote by setting the Quote Version, Quote Alternative or a quote line’s Status to Error, Warning or OkWithInfo, and fill in the Reason field with an explanation.</p></td>
</tr>
<tr class="even">
<td><p>QuoteVersionResponseInfo <strong>UpdateQuoteVersionPrices</strong> (</p>
<p>QuoteVersionContextInfo context )</p></td>
<td><p>The user knows that the prices have changed in the price list, and would like to update the quote with the latest product information from the pricelist.</p>
<p>This method is called whenever the user clicks the the UPDATE PRICES button in the Quote dialog.</p>
<p>Quote Lines, Alternatives, Version and Quote fields can be changed in the return value.</p>
<p>Sale, Associate and Contact are still read-only.</p>
<p> </p>
<p>The connector should look up the product in the pricelist and update each pricelist with new prices and other relevant details.</p>
<p> </p>
<p>The connector may signal problems with the quote by setting the Quote Version, Quote Alternative or a quote line’s Status to Error, Warning or OkWithInfo, and fill in the Reason field with an explanation.</p></td>
</tr>
</tbody>
</table>

 

 

<img src="Quote%20Connector%20interface_files/image017.jpg" id="Picture 7184" width="605" height="496" />

A default implementation of price calculations are found in the plugin’s  QuoteCalculation class.

 
