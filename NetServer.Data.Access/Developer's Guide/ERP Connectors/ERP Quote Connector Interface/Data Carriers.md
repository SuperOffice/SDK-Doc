<properties date="2016-05-11"
SortOrder="11"
/>

[Data carriers]()
===========================================

The information the system exchanges between SuperOffice and the connectors is packed in what we like to call “carriers”. These are data-transfer-objects (DTOs). They have no methods/behavior.

The database schema is very similar to these data carriers, but it is not identical. For instance, a pricelist in the database has a PricelistId field; this is not in the carrier, because the carrier shall carry data from other systems as well. So the PricelistId field is put into the ERPPricelistKey field as a string by the SuperOffice connector.

All these carriers are defined in the **SuperOffice.Plugins.DLL** – they will not change after release, unlike the implementation classes stored in **SoDatabase.DLL.**

To keep these classes apart from the internal SuperOffice classes we have suffixed the class names with “Info”, like “QuoteAlternativeInfo”.

 

[QuoteConnectionInfo]()
-------------------------------------------------

A Quote Connection is set up in the SuperOffice Admin client. It collects the parameters needed to talk to a single ERP client, and gives it a name and an id.

Quote connections will be stored in the table “QuoteConnection” in the CRM database.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>int CRMConnectionId</p></td>
<td><p>Primary key in the CRM database.</p>
<p>Definition of a connection to an external system, for the Quote system.</p></td>
</tr>
<tr class="even">
<td><p>string ERPName</p></td>
<td><p>Name of the ERP system (programmatic).</p></td>
</tr>
<tr class="odd">
<td><p>string ERPClientName</p></td>
<td><p>Name of the client (company) in the ERP system</p></td>
</tr>
<tr class="even">
<td><p>string ERPClientKey</p></td>
<td><p>The identifier for the client in the ERP system.</p></td>
</tr>
<tr class="odd">
<td><p>String DisplayName</p></td>
<td><p>Connection name shown to user; multi-language support.</p>
<p>The name of the connector to display in a list so that the users can choose between them.</p>
<p>Typically the name of the client, with maybe the ERP system in parenthesis.</p></td>
</tr>
<tr class="even">
<td><p>string DisplayDescription</p></td>
<td><p>Tooltip/description shown to user; multi-language support.</p>
<p>Any other info available that would make an uncertain user chose the right connector.</p>
<p>Typically, used for tooltip.</p></td>
</tr>
</tbody>
</table>

 

 

[ISaleInfo]()
---------------------------------------

<img src="Quote%20Connector%20interface_files/image025.png" alt="http://www.yuml.me/diagram/scruffy;/class/%5BSale%5D-%3E%5BQuote%5D,%20%5BQuote%5D-%3E%5BQuoteRevision%5D,%20%5BQuoteRevision%5D-%3E%5BQuoteAlternative%5D.png" id="Picture 50" width="691" height="54" />

Figure 5 : How Sale and Quote conceptually fit together

Read-only sale information.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>int SaleId  </p></td>
<td><p>Primary key of the sale record in CRM database</p></td>
</tr>
<tr class="even">
<td><p>string Associate</p></td>
<td><p>Owner of the sale</p></td>
</tr>
<tr class="odd">
<td><p>string Number</p></td>
<td><p>Sale number</p></td>
</tr>
<tr class="even">
<td><p>string Title</p></td>
<td><p>Title of the sale</p></td>
</tr>
<tr class="odd">
<td><p>double Amount</p></td>
<td><p>Total sale amount</p></td>
</tr>
<tr class="even">
<td><p>string Currency</p></td>
<td><p>Sale currency name</p></td>
</tr>
<tr class="odd">
<td><p>string PublishStartDate</p></td>
<td><p>Sale, start date for publishing</p></td>
</tr>
<tr class="even">
<td><p>string PublishEndDate</p></td>
<td><p>Sale, end date for publishing</p></td>
</tr>
<tr class="odd">
<td><p>string Type</p></td>
<td><p>Sale type - an MDO list item name</p></td>
</tr>
<tr class="even">
<td><p>string Stage</p></td>
<td><p>Sale stage - an MDO list item name</p></td>
</tr>
<tr class="odd">
<td><p>string Credited</p></td>
<td><p>Credited to - an MDO list item name</p></td>
</tr>
<tr class="even">
<td><p>string Competitor</p></td>
<td><p>Main Competitor for sale - an MDO list item name</p></td>
</tr>
<tr class="odd">
<td><p>short Probability</p></td>
<td><p>Probability percent - default derived from Stage list</p></td>
</tr>
<tr class="even">
<td><p>string NextDueDate</p></td>
<td><p>Date of the first uncompleted activity.</p></td>
</tr>
<tr class="odd">
<td><p>string Reason</p></td>
<td><p>Reason the sale is lost/sold etc.</p></td>
</tr>
<tr class="even">
<td><p>string SaleDate</p></td>
<td><p>Expected closing date</p></td>
</tr>
<tr class="odd">
<td><p>string Status</p></td>
<td><p>Open/Sold/Lost/Stalled</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>Decimal Cost</p></td>
<td><p>Total cost</p></td>
</tr>
<tr class="even">
<td><p>Decimal Profit</p></td>
<td><p>Total profit (Amount – Cost)</p></td>
</tr>
</tbody>
</table>

 

[QuoteInfo]()
---------------------------------------

A Sale can have a quote, and have then a 1-1 relationship with the QuoteInfo.

Read-write Quote information.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>int QuoteId</p></td>
<td><p>Primary key in CRM database.</p></td>
</tr>
<tr class="even">
<td><p>int SaleId</p></td>
<td><p>The foreign key to the corresponding sale.</p></td>
</tr>
<tr class="odd">
<td><p>int QuoteConnectionId</p></td>
<td><p>The connection in the CRM system to where this quote came from.</p>
<p>Identifies the ERP connection used for this quote. Each quote is bound to one and only one connection.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>string ERPQuoteKey</p></td>
<td><p>Foreign key of quote (if available).</p>
<p>The key in the ERP system that identifies this sale's Quote (as opposed to the later Order information)</p></td>
</tr>
<tr class="even">
<td><p>string ERPOrderKey</p></td>
<td><p>The key in the ERP system that identifies this sale's Order, as transferred and possibly later edited in the ERP system.</p>
<p>Only filled out if there exists a corresponding order representation of the quote in the ERP system.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>int ActiveQuoteVersionId</p></td>
<td><p>The primary key of the Quote Version that is currently active. (The active version will always be the latest version.)</p></td>
</tr>
<tr class="odd">
<td><p>int AcceptedQuoteAlternativeId</p></td>
<td><p>The primary key of the Quote Alternative which was finally accepted by the customer.</p>
<p>Set when the user is marking a quote as accepted.</p></td>
</tr>
<tr class="even">
<td><p>int DocumentId</p></td>
<td><p>The ID of the main Quote Document. <a href="" id="OLE_LINK29"></a> <a href="" id="OLE_LINK20">This is not the document containing the products, but the other one.</a></p></td>
</tr>
</tbody>
</table>

[QuoteVersionInfo]()
----------------------------------------------

Represent a version of a quote

A quote is divided into one or more versions (or revisions, if you like), so a quote have 1..n QuoteVersions.

A quote is divided into one or more versions (or revisions, if you like), so a quote have 1..n QuoteVersions.

I.e. a QuoteVersion always have a quote.

Even if versioning is disabled, a single version will exist.  When versioning is disabled, new versions are not created, but the only one is reused.

int QuoteVersionId

Primary key in CRM database.

 

string ERPQuoteVersionKey

Key in the ERP system that uniquely identifies this Version within the ERP system (if available, the field may be empty).

 

 

 

 

int QuoteId

Foreign key to CRM quote (the conceptual parent).

Owning Quote of this Quote Version

 

 

 

 

string Description

Description of Version.

Potentially longer text description, typically used in a tooltip.

Max 2K.

 

string Number

A quote number that the user (or ERP connector) can fill out.

 

QuoteVersionStateInfo State

Current state of this quote version.

The states will be like: CalculatedDraft, NotCalculatedDraft, Published, etc.

 

int LikelyQuoteAlternativeId

The alternative that is considered most likely to be accepted.

Used to calculate probable income.

 

 

 

 

DateTime SentDate

The date the version was sent to the customer.

 

int FollowupId

Link to a follow-up activity, created when this quote version was sent to the customer.

 

DateTime ExpirationDate

Last date the quote Version is valid, expiration is at midnight end of this day.

 

 

 

 

string DeliveryCountry

The quote has an address for delivery.  Should be stored as ISO code or something…

 

bool HasOwnDeliveryAddress

The delivery address is not the same as the contact's Street address

 

string InvoiceCountry

The quote has an address for Invoicing. Should be stored as ISO code or something…

 

bool HasOwnInvoiceAddress

The quote has an address for Invoicing. This will typically be copied from the company's addresses.

 

 

 

 

string ERPPaymentTermsKey

Either a List id to an id from a connector provided list, or, if the connection doesn’t support lists, a text.

For instance: ‘Standard 30 days’.

 

string ERPPaymentTypeKey

Either a List id to an id from a connector provided list, or, if the connection doesn’t support lists, a text.

For instance: ‘Invoice’.

 

string ERPDeliveryTermsKey

Either a List id to an id from a connector provided list, or, if the connection doesn’t support lists, a text.

For instance: ‘FOB’ (‘Free on board’).

 

string ERPDeliveryTypeKey

Either a List id to an id from a connector provided list, or, if the connection doesn’t support lists, a text.

For instance: ‘Air’.

 

 

 

 

int Rank

Rank/Version number, starts at 1.

 

 

 

 

QuoteStatus Status

If there was a problem with for instance calculation, this field is set to warning or error.

 

string Reason

If there was a problem, this field contains a localized explanation of the problem and possible steps to fix it that the user can be shown.

 

 

 

string ExtraField1

Optional information added by Quote Connector; usable in the quote document merge process.

string ExtraField2

Optional information added by Quote Connector; usable in the quote document merge process.

string ExtraField3

Optional information added by Quote Connector; usable in the quote document merge process.

string ExtraField4

Optional information added by Quote Connector; usable in the quote document merge process.

string ExtraField5

Optional information added by Quote Connector; usable in the quote document merge process.

 

 

 

int ApprovedBy

Not yet implemented:

Id of associate who approved (or rejected approval) for this version.

 

string ApprovedText

Not yet implemented:

Text with comments on why approval was granted (or rejected)

 

int ApprovedRegisteredBy

Not yet implemented:

Id of associate who actually entered the approval; might be different from ApprovedBy (i.e. due to telephone consultation/approval)

 

DateTime ApprovedRegisteredDate

When was approval granted or rejected

 

DateTime LastRecalculated

<a href="" id="OLE_LINK40"></a> <a href="" id="OLE_LINK39">When this version was last subjected to a total recalculation</a> . This field must be set by the <a href="" id="OLE_LINK48"></a> <a href="" id="OLE_LINK41">connector</a>, since the connector may choose to ignore a RecalculateVersion call based on policies and possibly the current value of this field. SuperOffice will set this field to 1.1.1760 whenever any change occurs to the quote, to indicate that a recalculation is needed.

 

 

### [QuoteVersionStateInfo]()

The various states a QuoteVersion can be in.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Unknown</p></td>
<td><p>State unknown</p></td>
</tr>
<tr class="even">
<td><p>DraftNotCalculated</p></td>
<td><p>This is a draft that has not been calculated</p></td>
</tr>
<tr class="odd">
<td><p>DraftCalculated</p></td>
<td><p>Draft that has been calculated, and ERP has verified it as OK</p></td>
</tr>
<tr class="even">
<td><p>DraftNeedsApproval</p></td>
<td><p>Draft has been checked, and there was a problem that needs approval</p></td>
</tr>
<tr class="odd">
<td><p>DraftApproved</p></td>
<td><p>Draft with potential problems has been human-approved</p></td>
</tr>
<tr class="even">
<td><p>Sent</p></td>
<td><p>Sent to customer, and is presumably a legally binding document</p></td>
</tr>
<tr class="odd">
<td><p>SentExpired</p></td>
<td><p>Sent to customer, but has expired and is no longer binding</p></td>
</tr>
<tr class="even">
<td><p>Archived</p></td>
<td><p>Archived without being sent</p></td>
</tr>
<tr class="odd">
<td><p>Ordered</p></td>
<td><p>Accepted and ordered by customer</p></td>
</tr>
<tr class="even">
<td><p>Rejected</p></td>
<td><p>Version was rejected be the customer</p></td>
</tr>
<tr class="odd">
<td><p>Sold</p></td>
<td><p>Quote was accepted and the sale was carried through all steps</p></td>
</tr>
</tbody>
</table>

                              
               

 <img src="Quote%20Connector%20interface_files/image026.png" width="127" height="29" />  [QuoteAlternativeInfo]()
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<img src="Quote%20Connector%20interface_files/image027.jpg" id="Picture 56" width="604" height="240" />

Quote Version is made up of one or more Alternatives. One of 1..n possible alternatives in a Quote Version.

The reason we have alternatives is that a quote can say to a customer, “we can solve you problem in two (or more) different ways, with different technology and side effects (and price)”.

An Alternative may have discounts on the total amount. The Alternative tracks whether the user on the order level entered the Discount %, the Discount amount, the Earning%, Earning amount or the TotalPrice fields so that the discount and earning and total can be re-calculated correctly when Quote Lines are added or changed.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>int QuoteAlternativeId</p></td>
<td><p>Primary key to the Alternative in the CRM system.</p></td>
</tr>
<tr class="even">
<td><p>string ERPQuoteAlternativeKey</p></td>
<td><p>Key that identifies this alternative in the ERP system, if it exists there.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>int QuoteVersionId</p></td>
<td><p>The version that owns this alternative (the chain is Sale 1-&gt;1 Quote 1-&gt;+ QuoteVersion 1-&gt;+ QuoteAlternative.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>string Name</p></td>
<td><p>Name of Alternative. Shown in tab in user interface.</p></td>
</tr>
<tr class="odd">
<td><p>string Description</p></td>
<td><p>The tool-tip to use in the user interface (on the tab, for instance).</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>QuoteStatus Status</p></td>
<td><p>If there was a problem with for instance calculation, this field is set to warning or error.</p></td>
</tr>
<tr class="even">
<td><p>string Reason</p></td>
<td><p>If there was a problem, this field contains a localized explanation of the problem and possible steps to fix it that the user can be shown.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p><a href="">double</a> <a href="" id="OLE_LINK6"></a> <a href="" id="OLE_LINK5">ERPDiscountPercent</a></p></td>
<td><p>The discount the system calculates based on customer /amount / whatever. Can be overridden by the salesman in the field ‘DiscountPercent’ or ‘DiscountAmount’.</p>
<p>Both the two ‘ERPDiscountPercent’ and ‘ERPDiscountAmount’ shall be filled out.</p>
<p> </p>
<p>If UserValueOverride is 'None', then the ERPDiscountAmount shall be copied into DiscountAmount and ERPDiscountPercent into DiscountPercent.</p>
<p><a href="" id="OLE_LINK34"></a> <a href="" id="OLE_LINK33"></a> <a href="" id="OLE_LINK32"></a> <a href="" id="OLE_LINK31">The Percentage is given in percent form, i.e. ‘12%’ is represented as ‘12’.</a></p></td>
</tr>
<tr class="odd">
<td><p>double <a href="" id="OLE_LINK15"></a> <a href="" id="OLE_LINK14">ERPDiscountAmount</a></p></td>
<td><p>The discount the system calculates based on customer /amount / whatever. Can be overridden by the user in the field ‘DiscountPercent’ or ‘DiscountAmount’.</p>
<p>Both the two ‘ERPDiscountPercent’ and ‘ERPDiscountAmount’ shall be filled out.</p>
<p> </p>
<p>If UserValueOverride is 'None', then the ERPDiscountAmount shall be copied into DiscountAmount and ERPDiscountPercent into DiscountPercent.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>double DiscountPercent</p></td>
<td><p>The discount the salesman specifies, in percent.</p>
<p>Both the two ‘DiscountPercent’ and ‘DiscountAmount’ shall be filled out, but the UserValueOverride field must be set to the field the user actually changed.</p>
<p>If this field is filled out by the user, it overrides the discount suggested by the connector.</p>
<p>If the user has not filled any values, the system will copy the ERP discount % value into this field.</p>
<p>The Percentage is given in percent form, i.e. ‘12%’ is represented as ‘12’.</p></td>
</tr>
<tr class="even">
<td><p>double DiscountAmount</p></td>
<td><p>The discount the salesman specifies, in whatever currency the sale is in.</p>
<p>Both the two ‘DiscountPercent’ and ‘DiscountAmount’ shall be filled out, but the UserValueOverride field must be set to the field the user actually changed.</p>
<p>If this field is filled out by the user, it overrides the discount suggested by the connector.</p>
<p>If the user has not filled any values, the system will copy the ERP discount amount value into this field.</p></td>
</tr>
<tr class="odd">
<td><p>ValueOverrideInfo UserValueOverride</p></td>
<td><p>Has the pre-calculated (from ERP) price information been overridden, and how.</p>
<p> </p>
<p>If the user has filled out the discountpercentage field, then the UserValueOverride field is set to OverridePercent.</p>
<p>(The DiscountAmount, EarningPercent, EarningAmount and TotalPrice fields are calculated based on the discountPercent.)</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>string VATInfo</p></td>
<td><p>Extra info about VAT that the connector might insert.</p>
<p>This is just to help out the layout of the quote in a document.</p>
<p>In this field we store VAT info that needs to be printed out on the quote, like “Inc VAT” or “12% VAT”.</p>
<p>May or may not be filled out.</p></td>
</tr>
<tr class="even">
<td><p>double VAT</p></td>
<td><p>Tax/VAT if available from ERP system; not used in any business logic.</p>
<p>This is just to help out the layout of the quote in a document, but SuperOffice will not try to calculate this value.</p>
<p>May or may not be filled out.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>double EarningAmount</p></td>
<td><p>Earning on this alternative, as an absolute amount (in money).</p></td>
</tr>
<tr class="odd">
<td><p>double EarningPercent</p></td>
<td><p>The earning on this alternative, in percent of total.</p>
<p>The Percentage is given in percent form, i.e. ‘12%’ is represented as ‘12’.</p></td>
</tr>
<tr class="even">
<td><p>double SubTotal</p></td>
<td><p>The sum of the quotelines totalPrice (and not the sum of their subtotal!!).</p>
<p> </p>
<p>Think of it as sum before discount.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>double TotalPrice</p></td>
<td><p>Sum of the QuoteLines.TotalPrice - AlternativeDiscount</p>
<p>or QuoteLines.TotalCost + Earning</p>
<p>based on what, if anything, the user has entered last.</p>
<p>Shall be calculated by the connector.</p></td>
</tr>
<tr class="odd">
<td><p>string ExtraField1</p></td>
<td><p>Optional information added by Quote Connector; usable in the quote document merge process.</p></td>
</tr>
<tr class="even">
<td><p>string ExtraField2</p></td>
<td><p>Optional information added by Quote Connector; usable in the quote document merge process.</p></td>
</tr>
<tr class="odd">
<td><p>string ExtraField3</p></td>
<td><p>Optional information added by Quote Connector; usable in the quote document merge process.</p></td>
</tr>
<tr class="even">
<td><p>string ExtraField4</p></td>
<td><p>Optional information added by Quote Connector; usable in the quote document merge process.</p></td>
</tr>
<tr class="odd">
<td><p>string ExtraField5</p></td>
<td><p>Optional information added by Quote Connector; usable in the quote document merge process.</p></td>
</tr>
</tbody>
</table>

 

### [Quote Alternative Discounts/Earning]()

Each quote line can have a discount applied. A quote alternative (a set of quote lines) can have a separate discount applied - depending on a company policy preference.

<img src="Quote%20Connector%20interface_files/image028.jpg" width="605" height="149" />

 

The discount on the whole quote alternative works much like the discounts on the quote.
The ERP system can suggest a discount (either Percent or a fixed amount) and the user can override the suggestion.

### [Cost + Earning = SubTotal – Discount = TotalPrice]()

Another way to set the discount is to set the earning! Since Cost + Earning = TotalPrice and Discount = SubTotal – TotalPrice.

This means that if you set any of the fields:

* DiscountAmount

* DiscountPercent

* EarningAmount

* EarningPercent

* TotalPrice

Then the other 4 values will be adjusted accordingly.

The QuoteCalculation helper class in the plug-in DLL can help you handle the different methods of calculating totals and discounts.

 

[QuoteLineInfo]()
-------------------------------------------

<img src="Quote%20Connector%20interface_files/image029.jpg" id="Picture 21" width="633" height="149" />

Figure 6 : Quote Line archive – list of quote lines in an alternative.

<img src="Quote%20Connector%20interface_files/image030.jpg" id="Picture 7172" width="637" height="446" />

Figure 7: Quote Line dialog – details of one quote line in an alternative.

QuoteLines are mainly information copied from the Products provider. Products information is sometimes edited by the user before being included in the quote, so most information is duplicated from Product rather than referenced directly.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>int QuoteLineId</p></td>
<td><p>Primary key in CRM database.</p></td>
</tr>
<tr class="even">
<td><p>string ERPQuoteLineKey</p></td>
<td><p>The foreign key to the quoteline in ERP system (if it has such a representation).</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>int QuoteAlternativeId</p></td>
<td><p>The alternative this line is part of, the conceptual Parent in CRM database.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>s tring ERPProductKey</p></td>
<td><p>Foreign key of product this line is based on.</p>
<p>Can be blank since the QuoteLine doesn’t have to be connected to a product.</p></td>
</tr>
<tr class="odd">
<td><p>string ERPPriceListKey</p>
<p> </p></td>
<td><p>Foreign key to the price list that this quoteline is a part of.</p>
<p>Can be blank since the QuoteLine doesn’t have to be connected to a product.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>QuoteStatus Status</p></td>
<td><p>If there was a problem with for instance calculation, this field is set to warning or error.</p>
<p>Typically shown as an icon. QuoteStatus is an enum with statuses: OK, OKWithInfo, Warning, Error.</p></td>
</tr>
<tr class="even">
<td><p>string Reason</p></td>
<td><p>If QuoteStatus is not OK, then this field contains a localized explanation that the user can be shown.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>double Quantity</p></td>
<td><p>How many units; this is a decimal field since you might want to offer fractional units (2.5kg, or 0.5PC).</p></td>
</tr>
<tr class="odd">
<td><p>double DeliveredQuantity</p></td>
<td><p>How many units have been delivered - updated by the ERP system.</p></td>
</tr>
<tr class="even">
<td><p>int Rank</p></td>
<td><p>QuoteLines can be re-ordered, so we must track the ordering.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>string Name</p></td>
<td><p>The name of the product.</p>
<p>Is stored here if the user changes the value from the product in the pricelist, or just enters a QuoteLine without a product link.</p></td>
</tr>
<tr class="odd">
<td><p>string Description</p></td>
<td><p>A longer description for the product.</p>
<p>Is stored here if the user changes the value from the product in the pricelist, or just enters a QuoteLine without a product link.</p></td>
</tr>
<tr class="even">
<td><p>string Code</p></td>
<td><p>A value the salesmen use to quickly find the correct product.</p>
<p>Is stored here if the user changes the value from the product in the pricelist, or just enters a QuoteLine without a product link.</p></td>
</tr>
<tr class="odd">
<td><p>string QuantityUnit</p></td>
<td><p>What is the unit (meter, ton, bushel, microsecond, gradus, τρυβλίον, 五合枡 , دونم or whatever); Connector handles conversion relative to PriceUnit if they are different.</p></td>
</tr>
<tr class="even">
<td><p>string PriceUnit</p></td>
<td><p>What is the unit (meter, ton, bushel, microsecond, gradus, τρυβλίον, 五合枡 , دونم or whatever); read-only for lines that originate in defined products.</p></td>
</tr>
<tr class="odd">
<td><p>string ItemNumber</p></td>
<td><p>No: «Postnummer». Specific numbers from some hierarchy, for instance “1.4.3.2”.</p>
<p>Is stored here if the user changes the value from the product in the pricelist, or just enters a QuoteLine without a product link.</p></td>
</tr>
<tr class="even">
<td><p>string Url</p></td>
<td><p>A url to the product info. Can be empty.</p>
<p>Is stored here if the user changes the value from the product in the pricelist, or just enters a QuoteLine without a product link.</p></td>
</tr>
<tr class="odd">
<td><p>   </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>string  ProductCategoryKey </p></td>
<td><p>Either a List id to an id from a connector provided list, or</p>
<p>, if the connection doesn't support lists, a text.</p>
<p>Is stored here if the user changes the value from the product in the pricelist, or just enters a QuoteLine without a product link.</p></td>
</tr>
<tr class="odd">
<td><p>string  ProductFamilyKey </p></td>
<td><p>Either a List id to an id from a connector provided list, or</p>
<p>, if the connection doesn't support lists, a text.</p>
<p>Is stored here if the user changes the value from the product in the pricelist, or just enters a QuoteLine without a product link.</p></td>
</tr>
<tr class="even">
<td><p>string  ProductTypeKey </p></td>
<td><p>Either a List id to an id from a connector provided list, or</p>
<p>, if the connection doesn't support lists, a text.</p>
<p>Is stored here if the user changes the value from the product in the pricelist, or just enters a QuoteLine without a product link.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>string SupplierCode</p></td>
<td><p>The suppliers' code or part number for this product.</p>
<p>Is stored here if the user changes the value from the product in the pricelist, or just enters a QuoteLine without a product link.</p></td>
</tr>
<tr class="odd">
<td><p>string Supplier</p></td>
<td><p>The name of the supplier.</p>
<p>Is stored here if the user changes the value from the product in the pricelist, or just enters a QuoteLine without a product link.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>string Thumbnail</p></td>
<td><p>The thumbnail of the product, if it exists.</p>
<p>Base64 encoded string, or a valid URI that resolves to an image.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>string VatInfo</p></td>
<td><p>Tax/VAT information.</p>
<p>Extra info about VAT that the connector might insert, and the users might want to specify on the quote.</p>
<p>This is just to help out the layout of the quote in a document.</p></td>
</tr>
<tr class="even">
<td><p>double VAT</p></td>
<td><p>Tax/VAT if available from ERP system; this field is not used in any business logic in SuperOffice.</p>
<p>This is just to help out the layout of the quote in a document, but SuperOffice will not try to calculate this value.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>double UnitCost</p></td>
<td><p>The cost price per unit for this product. May be filled in by connector if it has the Provide-Cost capability.</p></td>
</tr>
<tr class="odd">
<td><p>double <a href="" id="OLE_LINK36"></a> <a href="" id="OLE_LINK35">UnitMinimumPrice</a></p></td>
<td><p><a href="" id="OLE_LINK37">The minimum price this line can be sold for (to limit discounting). Will come from the connector. List price per unit must exceed the minimum price per unit.</a></p></td>
</tr>
<tr class="even">
<td><p>double UnitListPrice</p></td>
<td><p>The standard list price; as given by ERP Connector, OR overridden by user</p></td>
</tr>
<tr class="odd">
<td><p>ProductExtraDataFieldInfo[] ExtraInfo</p></td>
<td><p>Extra data (fields with labels). Shall be shown in the quoteline dialog.</p>
<p>Additional info that the ERP system would like to store and show in the user interface.</p>
<p> </p>
<p>Information placed here is shown in the GUI if the “provide-extra-data” capability is true.</p>
<p>Different products can have different fields.</p>
<p>It will not be possible to directly put info here into the quote document.</p>
<p> </p>
<p>BTW, this will be stored in the SuperOffice database as an xml field, like this:</p>
<p>&lt;Fields&gt;</p>
<p>  &lt;Field Name=&quot;Weight&quot; Type=&quot;String&quot;&gt;&lt;![CDATA[[F:16.6] tons]]&gt;&lt;/Field&gt;</p>
<p>  &lt;Field Name=&quot;Height&quot; Type=&quot;String&quot;&gt;&lt;![CDATA[ [F:44.0]cm]]&gt;&lt;/Field&gt;</p>
<p>  &lt;Field Name=&quot;Arms&quot; Type=&quot;String&quot;&gt;&lt;![CDATA[ [I:2]]]&gt;&lt;/Field&gt;</p>
<p>  &lt;Field Name=&quot;Certification&quot; Type=&quot;String&quot;&gt;&lt;![CDATA[AB-ICE]]&gt;&lt;/Field&gt;</p>
<p>  &lt;Field Name=&quot;Weight&quot; Type=&quot;String&quot;&gt;&lt;![CDATA40°C]]&gt;&lt;/Field&gt;</p>
<p>  &lt;Field Name=&quot;Security info&quot; Type=&quot;Url&quot; &gt;&lt;![CDATA[http://www.armystudyguide.com/content/army_board_study_guide_topics/hand_grenades/throwing-of-hand-grenades.shtml]]&gt;&lt;/Field&gt;</p>
<p>   &lt;Field Name=&quot;Security image &gt;&lt;![CDATA[http://upload.wikimedia.org/wikipedia/commons/thumb/8/80/MK2_grenade_DoD.jpg/220px-MK2_grenade_DoD.jpg&lt;/Field]]&gt;</p>
<p>&lt;/Fields&gt;</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>string Rights</p></td>
<td><p>Field1=right&amp;Field2=right, etc. of any fields that have non-standard field access rights.</p>
<p>Rights can be one of: N (=None or Hidden), R (=Read-only), W (=Writeable), M (=Mandatory).</p>
<p>The fields will mostly be from the Quoteline table, but some added fields that are conceptually part of the quoteline, like Image will also be possibly to set rights on.</p>
<p>See Rights field for more information</p>
<p>Will be used by SuperOffice to control the user interface when showing the record.</p></td>
</tr>
<tr class="even">
<td><p>string Rule</p></td>
<td><p>The names of one or more calculation rules that are in effect for this line, comma-separated case-insensitive.</p>
<p>Will NOT be used by SuperOffice.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>string ExtraField1</p></td>
<td><p>This a simple field for adding information that the Connector can provide, and that the qoute document need to display.</p></td>
</tr>
<tr class="odd">
<td><p>string ExtraField2</p></td>
<td><p>This a simple field for adding information that the Connector can provide, and that the qoute document need to display.</p></td>
</tr>
<tr class="even">
<td><p>string ExtraField3</p></td>
<td><p>This a simple field for adding information that the Connector can provide, and that the qoute document need to display.</p></td>
</tr>
<tr class="odd">
<td><p>string ExtraField4</p></td>
<td><p>This a simple field for adding information that the Connector can provide, and that the qoute document need to display.</p></td>
</tr>
<tr class="even">
<td><p>string ExtraField5</p></td>
<td><p>This a simple field for adding information that the Connector can provide, and that the qoute document need to display.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>double ERPDiscountAmount</p></td>
<td><p>The discount the system calculates based on customer / quantity / whatever.</p>
<p>Can be overridden by the salesman in the field 'DiscountPercent' or 'DiscountAmount'.</p>
<p>If UserValueOverride is set to ‘None’ then the value is copied to DiscountAmount.</p>
<p>Both fields ERPDiscountPercent and ERPDiscountAmount will be filled out.</p></td>
</tr>
<tr class="odd">
<td><p>double ERPDiscountPercent</p></td>
<td><p>The discount the system calculates based on customer / quantity / whatever.</p>
<p>Can be overridden by the salesman in the field 'DiscountPercent' or 'DiscountAmount'.</p>
<p>Both fields ERPDiscountPercent and ERPDiscountAmount will be filled out.</p>
<p>If UserValueOverride is set to ‘None’ then the value is copied to DiscountPercent.</p>
<p>The Percentage is given in percent form, i.e. ‘12%’ is represented as ‘12’.</p></td>
</tr>
<tr class="even">
<td><p>double DiscountAmount</p></td>
<td><p>The discount for the line, in whatever currency the sale is in.</p>
<p>Both ‘DiscountPercent’ and ‘DiscountAmount’ shall be filled out, but the UserValueOverride field must be set to the field the user actually changed last.</p>
<p>If this field is filled out by the user, it overrides any discount suggested by the connector.</p>
<p>If the user has not filled this in, the system will copy the ERP discount amount to this field.</p></td>
</tr>
<tr class="odd">
<td><p>double DiscountPercent</p></td>
<td><p>The discount for the line, in percent.</p>
<p>Both ‘DiscountPercent’ and ‘DiscountAmount’ shall be filled out, but the UserValueOverride field must be set to the field the user actually changed last.</p>
<p>If this field is filled out by the user, it overrides any discount suggested by the connector.</p>
<p>If the user has not filled this in, the system will copy the ERP discount amount to this field.</p>
<p>The Percentage is given in percent form, i.e. ‘12%’ is represented as ‘12’.</p></td>
</tr>
<tr class="even">
<td><p>ValueOverrideInfo UserValueOverride</p></td>
<td><p>Has the pre-calculated (from ERP) price information been overridden, and how.</p>
<p> </p>
<p>If the user has filled out the discountpercentage field, then the UserValueOverride field is set to OverridePercent.</p>
<p>(The DiscountAmount, EarningPercent, EarningAmount and TotalPrice fields are calculated based on the DiscountPercent.)</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>double EarningAmount</p></td>
<td><p>The earning, in whatever currency the sale is in.</p>
<p>Both ‘EarningAmount and ‘EarningPercent shall be filled out, but the UserValueOverride field must be set to the field the user actually changed last.</p></td>
</tr>
<tr class="odd">
<td><p>double EarningPercent</p></td>
<td><p>The earning, in percent.</p>
<p>Both ‘EarningAmount and ‘EarningPercent shall be filled out, but the UserValueOverride field must be set to the field the user actually changed last.</p>
<p>The Percentage is given in percent form, i.e. ‘12%’ is represented as ‘12’.</p></td>
</tr>
<tr class="even">
<td><p>double SubTotal</p></td>
<td><p>(UnitListPrice * Quantity)</p>
<p>Calculated by the ERPconnector</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>double TotalPrice</p></td>
<td><p>TotalPrice  = SubTotal - DiscountAmount</p>
<p>or</p>
<p>TotalPrice = (UnitCost * Quantity) + EarningAmount</p>
<p>, according to what the user changed last.</p></td>
</tr>
<tr class="odd">
<td><p>b ool IsIncluded</p></td>
<td><p>Not yet implemented:</p>
<p> “IsNotAnOption”</p>
<p>If true, will be added to the total price.<br />
Shown as a checkbox on the quote line.</p>
<p> </p>
<p>Not in V1</p></td>
</tr>
<tr class="even">
<td><p>bool IsGroupHeading</p></td>
<td><p>Not yet implemented:</p>
<p>Indicates that the line is a Group Heading.</p>
<p>The name will be used as Label.</p>
<p>Totalprice will reflect the sum of all totalprices in the quotelines connected to the group.</p>
<p>The rank shall be ascending thru the whole QuoteAlternative, disregarding any groups</p>
<p> </p>
<p>Not in V1</p></td>
</tr>
<tr class="odd">
<td><p>int ParentQuoteLine</p></td>
<td><p>Not yet implemented:</p>
<p>If this quoteLine is a part of a group heading or a Package, this field will have that quoteline’s id.</p>
<p> </p>
<p>Not in V1</p></td>
</tr>
</tbody>
</table>

 

### [Enum ValueOverrideInfo]()

Which field the user changed last. This helps the calculation to calculate the other fields correctly.

None = 0,

OverrideTotal = 1,

OverrideDiscountPercent = 2,

OverrideDiscountAmount = 3,

OverrideEarningPercent = 4,

OverrideEarningAmount = 5

 

### []() []() [Rights field]()

Specification: “Field1=Right,Reason&Field2=Right,Reason”

***Right:***

* N = None or Hidden
* R = Read-only (Implies Visual)
* W = Writable (& Visual)
* M = Mandatory (& Writable & Visual)

The rights are mutually exclusive; a field can only have one of these rights.

***Field:***

The fields will mostly be from the Quoteline table, but some added fields that are conceptually part of the quoteline, like Image will also be possibly to set rights on.

***Reason:***

The reason is a description that will be used on the field (and label) as a tooltip to explain to the user why this field on this product is different. You don’t have to insert anything here, but a SuperOffice user will expect this.

You cannot use the sign ‘&’ in the description.

The reason will only work when the right is R (Read-only).

***Example:***

“QuoteLine.Image=N&QuoteLine.UnitCost=R,This product has a fixed cost.&QuoteLine.Description=W&QuoteLine.VAT=M”

 

### [QuoteListItemInfo]()

One line in a list, consisting of a key, a name, a tooltip and an icon. Lists are “flat” with no headings.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>String ERPQuoteListItemKey</p></td>
<td><p>Primary key for the item</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>String DisplayValue</p></td>
<td><p>List item text to display.</p></td>
</tr>
<tr class="even">
<td><p>String DisplayDescription</p></td>
<td><p>Typically used in a tooltip.</p></td>
</tr>
<tr class="odd">
<td><p>String Icon</p></td>
<td><p>Icons can be the names of existing icon files in the system, URL’s pointing to PNG/JPG images, or base64-encoded PNG/JPG images.</p></td>
</tr>
</tbody>
</table>

 

 

### [QuoteVersionResponseInfo]()

Is returned when a version with all alternatives and lines can be changed by the connector.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>QuoteInfo CRMQuote</p></td>
<td><p>Quote information</p></td>
</tr>
<tr class="even">
<td><p>QuoteVersionInfo CRMQuoteVersion</p></td>
<td><p>Version information.</p></td>
</tr>
<tr class="odd">
<td><p>QuoteAlternativeWithLinesInfo[] CRMAlternativesWithLines</p></td>
<td><p>Alternative information.</p></td>
</tr>
</tbody>
</table>

### [QuoteSentResponseInfo]()

Return value on Quote Sent.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>QuoteVersionResponseInfo QuoteData</p></td>
<td><p>Quote information</p></td>
</tr>
<tr class="even">
<td><p>string Url</p></td>
<td><p>Url to navigate to, if non-blank</p></td>
</tr>
</tbody>
</table>

 

### [OrderResponseInfo]()

Specialized version of PluginResponseInfo for GetOrderState.

Inherits PluginResponseInfo.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>QuoteInfo CRMQuote</p></td>
<td><p>Quote information</p></td>
</tr>
<tr class="even">
<td><p>QuoteVersionInfo CRMQuoteVersion</p></td>
<td><p>Version information.</p></td>
</tr>
<tr class="odd">
<td><p>QuoteAlternativeWithLinesInfo CRMAlternativeWithLines</p></td>
<td><p>Alternative information.</p></td>
</tr>
</tbody>
</table>

 

### [PlaceOrderResponseInfo]()

Specialized version of PluginResponseInfo for PlaceOrder.

Inherits OrderResponseInfo.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Url</p></td>
<td><p>An optional URL; if non-blank then the GUI will navigate to this soprotocol: or http(s): as the final operation of the PlaceOrder.</p></td>
</tr>
</tbody>
</table>

 

### [FieldMetadataInfo]()

<a href="" id="OLE_LINK27"></a> <a href="" id="OLE_LINK9">This carrier describes a custom field to be added to the config dialog at runtime. It is used to populate the Admin configuration dialog for a connection. Note that this is just a description of the field - it is not the field itself.</a>

The GUI will use this info to build the user interface controls. The call to the ERP Connector’s GetConfigurationFields method returns a list of fields and field types. The Admin client builds a dialog with these fields.

<img src="Quote%20Connector%20interface_files/image031.jpg" id="Picture 3" width="605" height="467" />

Figure 3 : Admin Quote Connection Dialog.

 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>string FieldKey</p></td>
<td><p><a href="" id="OLE_LINK28">Internal name of the field. Used as the key in the dictionary of values.</a></p></td>
</tr>
<tr class="even">
<td><p>int Rank</p></td>
<td><p>A way to set the order of the fields. Lowest value will be displayed first/over the fields with other values.</p></td>
</tr>
<tr class="odd">
<td><p>string DisplayName</p></td>
<td><p>Localized field name – shown in the GUI as the label for the control.</p></td>
</tr>
<tr class="even">
<td><p>string DisplayDescription</p></td>
<td><p>Tooltip for the field.</p></td>
</tr>
<tr class="odd">
<td><p>FieldMetadataTypeInfo <a href="" id="OLE_LINK43"></a> <a href="" id="OLE_LINK42">FieldType</a></p></td>
<td><p><a href="" id="OLE_LINK45"></a> <a href="" id="OLE_LINK44">String, int, decimal, etc.</a></p>
<p>Kind of field widget to use: textbox, number field, password field, dropdown list or checkbox?</p></td>
</tr>
<tr class="even">
<td><p>string <a href="" id="OLE_LINK47"></a> <a href="" id="OLE_LINK46">ListName</a></p></td>
<td><p>Used for getting the list items from the list provider. The source of the items must ultimately be exposed as an IQuoteListProvider, through various naming conventions and adapters. The actual Quote and ERP Connectors solve this in slightly different ways.</p></td>
</tr>
<tr class="odd">
<td><p>string <a href="" id="OLE_LINK49">DefaultValue</a></p></td>
<td><p><a href="" id="OLE_LINK51"></a> <a href="" id="OLE_LINK50">A default value for the field.</a> The value in the widget when the configure dialog is opened in Add Connection mode.</p>
<p>This will vary a bit depending on the type, of course.</p>
<p>Obviously, if the field is a label, text or password, then the text is used.</p>
<p>If the field is an int or double, we shall try to convert the string into a number. (If the conversion fails, we shall use zero or 0.00 as the default value.)</p>
<p>If the field is a list, we shall try to find a list item where the fields default value matches the listsitem’s ERPQuoteListItemKey.</p></td>
</tr>
<tr class="even">
<td><p>int MaxLength</p></td>
<td><p><a href="" id="OLE_LINK19"></a> <a href="" id="OLE_LINK18">Maximum length for strings, if set.</a></p>
<p>0 means no restriction. (Though sooner or later <strong>something</strong> will no doubt overflow if you pile on the gigabytes.)</p></td>
</tr>
<tr class="odd">
<td><p>FieldAccessInfo Access</p></td>
<td><p>Access restrictions on the field</p></td>
</tr>
</tbody>
</table>

 

### [Enum ConfigFieldType]()

<a href="" id="OLE_LINK52">Describes the different types of controls that can appear in the Configure connection dialog</a> :

* Checkbox           – checkbox control.  Returns 0 or 1

* Text                      – edit field

* Password           - edit field with \*\*\* masking

* Integer                – edit field – digits only, accepts integers

* Double                - edit field – digits only, accepts decimal numbers formatted with CultureInfo.InvariantCulture (for instance: “-1000.01”)

* List                        – dropdown list

* Label                    – static text (no value entered or saved)

 

### [Enum FieldAccessInfo]()

Access restrictions and mandatory status, if any.

* Normal                - Normal field, no particular restrictions

* Mandatory        - This field is mandatory

* ReadOnly           - This field is read-only

 

### [Config va]()  l  ues

Configuration fields can be declared to be one of a number of different types, using the FieldMetadataInfo. However, they are always transmitted as strings; and to do the conversion between strongly typed value and string we use the SuperOffice.Globalization.CultureDataFormatter class. Use the ParseXXX methods from the same class to get back to the correct type (int, datetime, etc).

### []() [PluginResponseInfo]()

PluginResponseInfo exists to be able to respond with more than just a true/false, but also an explanation. Such an explanation can be displayed on for instance a disabled “Place Order” button.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Bool IsOk</p></td>
<td><p>Answer to the question / An indication if the operation went well.</p></td>
</tr>
<tr class="even">
<td><p>String UserExplanation</p></td>
<td><p>A localized explanation to the answer.</p>
<p>Example: US:&quot;Text in English\&quot;;NO:\&quot;Text in Norwegian\&quot;;GE:\&quot;Text in German\&quot;FR:\&quot;Text in French\&quot;; and so on</p></td>
</tr>
<tr class="odd">
<td><p>String TechExplanation</p></td>
<td><p>Always in English</p></td>
</tr>
<tr class="even">
<td><p>String ErrorCode</p></td>
<td><p>An error code, if available.</p></td>
</tr>
</tbody>
</table>

 

### []() [Enum QuoteStatus]()

QuoteStatus shall be used to give indications in the user interface that there is more info or problems available.

* Ok,                // OK, all is good

* OkWithInfo,// All is good, but there is some additional information that the user should be made aware of.

* Warning,     // There is a problem that the user must be made aware of.

* Error,            // There is a problem that the system will not be able to get around. The user needs to do something. **SuperOffice will deny the user to send the quote or place the order.** If the error is not so bad thet it have to stop the user? Then it is not an error, it is a warning.

Example: The user has registered a quoteline that is discontinued and the amount the user has registered is not in stock.

### [Error system]()

When something is wrong and the connector needs to make the user aware of the problem, there are a few ways to do this, based on what fails.

If the connector throws an exception, SuperOffice will catch it and present the Message to the user. This should be avoided, it could leave the system in a bad state.

The QuoteVersion, QuoteAlternative and QuoteLine objects all have the same structure: a Status and a Reason field. The Status field is of type QuoteStatus, and can thus be “OK, OKWithInfo, Warning or Error”. (See Enum QuoteStatus for details). When setting the fields you should set the state for the level you are in (version, alternative or line), and SuperOffice will concatenate and present the problems to the user in the user interface. [  \[1\]  ](#_ftn1)

If, when calculating a quoteline, you find a problem with the quoteline (typically the product is discontinued and the stock is empty), you should set the Status field and put a user friendly explanation in the Reason field.

If, when calculating the version, you have a problem connecting to some back-office system (perhaps the user is offline) that you must have access to to be able to calculate, then you should set the QuoteVersion.Status to error and explain the problem in the QuoteVersion.Reason field.

And so on.

##### Reason fields.

 

The reason fields will be shown to the user, and should thus be translated to the language of the user.

If you deliver the text in the following format, SuperOffice will select the right language for you:

"US:\\" A problem occured\\";NO:\\" Et problem oppstod\\";SW:\\”Ett problem uppstod\\”;GE:\\" Ein Problem ist aufgetreten\\";FR:\\" Un problème est survenu\\""

And my apologies for the translations, I used translate.google.com.

A text is multi-language if it follows the layout:

LL:"text";...

LL is a language code of two letters, same as the one used for loading the language resource DLL

The colon is literal.

The text is the text for this language, inside double quotes (no quotes inside the text please).

The semicolon is literal.

Please note that the format is quite strict; if the text does not follow these conventions, it is not parsed at all, so do test the errors too.

Some of the functions also returns a PluginResponseInfo. See PluginResponseInfo for more info.

 

### [ERP Discounts and User Discounts]()

  <img src="Quote%20Connector%20interface_files/image032.png" width="43" height="1" />     <img src="Quote%20Connector%20interface_files/image033.png" alt="ERP suggested discounts (in percent and total amount)" width="185" height="1" />     <img src="Quote%20Connector%20interface_files/image034.png" width="152" height="1" />     <img src="Quote%20Connector%20interface_files/image035.png" width="152" height="1" />   <img src="Quote%20Connector%20interface_files/image036.jpg" width="304" height="175" />

Figure 8 : Please notice that this dialog has been revised severely. It will look very different in the final version.

Each quote line has two discounts: one suggested by the ERP system, and one entered by the user.

If the user does not enter anything, we default to the ERP system suggestions.

If the user enters a discount, the ERP connector gets a chance to change them.

 

### [Value Fields and Amounts and Percent’s]()

<img src="Quote%20Connector%20interface_files/image036.jpg" width="304" height="175" />

Figure 9 : Please notice that this dialog has been revised severely. It will look very different in the final version.

The Quote Line dialog has five ways of setting the discount; using any of the following fields: DISCOUNT PERCENT and DISCOUNT AMOUNT, EARNING PERCENT and EARNING AMOUNT, and TOTAL PRICE.

These are linked. Change the discount percent, and the discount amount, the total price, the earning percent and earning amount will be recalculated. 

We track which field was most recently modified by the user, and we use that as the master field. When UnitCostPrice, Quantity or UnitListPrice changes, the discounts can be adjusted accordingly to maintain the master field’s value.

e.g. Assume a quoteline where:

* UnitCost is 10.00

* UnitListPrice = 13.00

The user has entered

* Quantity = 10

* Discount 10%

The UserValueOverride is DiscountPercent since that is what the user modified last.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>The connector calculates the <strong>SubTotal</strong> from the Quantity and UnitListPrice:</p></td>
<td><p>10*13.00 = 130.00</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the <strong>Discount</strong> <strong>Amount</strong> from the Discount Percent and SubTotal:</p></td>
<td><p>130.00 * 10% = 13.00</p></td>
</tr>
<tr class="odd">
<td><p>The connector calculates the <strong>Total Price</strong> from the SubTotal and Discount Amount: </p></td>
<td><p>130.00 – 13.00 = 117.00</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the <strong>Total Cost</strong> from the Quantity and UnitCost: </p></td>
<td><p>10*10.00 = 100.00</p></td>
</tr>
<tr class="odd">
<td><p>The connector calculates the <strong>Earning Amount</strong> from the TotalPrice and cost: </p></td>
<td><p>117.00– 100.00 = 17.00</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the <strong>Earning Percent</strong> from the Earning Amount and TotalPrice: </p></td>
<td><p>17.00 / 117.00 = 14.53%</p></td>
</tr>
</tbody>
</table>

 

The user changes **Quantity**:                       Quantity = **100**

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>The connector calculates the <strong>SubTotal</strong> from the Quantity and UnitListPrice:</p></td>
<td><p>100*13.00 = 1300.00</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the <strong>Discount</strong> <strong>Amount</strong> from the Discount Percent and SubTotal:</p></td>
<td><p>1300.00 * 10% = 130.00</p></td>
</tr>
<tr class="odd">
<td><p>The connector calculates the <strong>Total Price</strong> from the SubTotal and Discount Amount: </p></td>
<td><p>1300.00 – 130.00 = 1170.00</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the <strong>Total Cost</strong> from the Quantity and UnitCost: </p></td>
<td><p>100*10.00 = 1000.00</p></td>
</tr>
<tr class="odd">
<td><p>The connector calculates the <strong>Earning Amount</strong> from the TotalPrice and cost: </p></td>
<td><p>1170.00– 1000.00 = 170.00</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the <strong>Earning Percent</strong> from the Earning Amount and TotalPrice: </p></td>
<td><p>170.00 / 1170.00 = 14.53%</p></td>
</tr>
</tbody>
</table>

 

The user changes **Discount Amount** to 100 – this changes the UserValueOverride to DiscountAmount.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>The connector calculates the SubTotal from the Quantity and UnitListPrice:</p></td>
<td><p>100*13.00 = 1300.00</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the <strong>Discount</strong> <strong>Percent</strong> from the Discount Amount and SubTotal:</p></td>
<td><p>100 / 1300.00 = 7.70%</p></td>
</tr>
<tr class="odd">
<td><p>The connector calculates the Total Price from the SubTotal and Discount Amount: </p></td>
<td><p>1300.00 – 100.00 = 1200.00</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the Total Cost from the Quantity and UnitCost: </p></td>
<td><p>100*10.00 = 1000.00</p></td>
</tr>
<tr class="odd">
<td><p>The connector calculates the Earning Amount from the TotalPrice and cost: </p></td>
<td><p>1200.00– 1000.00 = 200.00</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the Earning Percent from the Earning Amount and TotalPrice: </p></td>
<td><p>200.00 / 1200.00 = 16.67%</p></td>
</tr>
</tbody>
</table>

 

The user changes **Total Price** to 1100 – this changes the UserValueOverride to TotalPrice.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>The connector calculates the SubTotal from the Quantity and UnitListPrice:</p></td>
<td><p>100*13.00 = 1300.00</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the Discount Amount from the TotalPrice and SubTotal:</p></td>
<td><p>1100 - 1300.00 = 200.00</p></td>
</tr>
<tr class="odd">
<td><p>The connector calculates the Discount Percent from the Discount Amount and SubTotal:</p></td>
<td><p>200 / 1300.00 = 15.40%</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the Total Cost from the Quantity and UnitCost: </p></td>
<td><p>100*10.00 = 1000.00</p></td>
</tr>
<tr class="odd">
<td><p>The connector calculates the Earning Amount from the TotalPrice and cost: </p></td>
<td><p>1200.00– 1100.00 = 100.00</p></td>
</tr>
<tr class="even">
<td><p>The connector calculates the Earning Percent from the Earning Amount and TotalPrice: </p></td>
<td><p>100.00 / 1100.00 = 9.10%</p></td>
</tr>
</tbody>
</table>

 
---------------------------

 
---------------------------

[QuoteAlternativeWithLinesInfo]()
-----------------------------------------------------------

Combines an alternative with the corresponding quote lines.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>QuoteAlternativeInfo CRMAlternative</p></td>
<td><p>Read + Write alternative information.</p></td>
</tr>
<tr class="even">
<td><p>QuoteLineInfo[] CRMQuoteLines</p></td>
<td><p>The quotelines that the alternative consists of.</p></td>
</tr>
</tbody>
</table>

 

[QuoteAlternativeContextInfo]()
---------------------------------------------------------

 

 <img src="Quote%20Connector%20interface_files/image037.png" width="605" height="126" /> 

 

Exists to be able to give the connector the relevant information for QuoteAlternative specific operations, for instance to be able to compute the correct price/discount on all levels.

 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>string ERPClientKey</p></td>
<td><p>Foreign key – always present.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>UserInfo CRMAssociate</p></td>
<td><p>Read-only. The logged in user (the salesman)<br />
Note: not necessarily the the owner of the sale – that is exposed via the SaleInfo object</p></td>
</tr>
<tr class="even">
<td><p>IContactInfo CRMCompany</p></td>
<td><p>Read-only. The sale’s customer info – more detailed information than is provided by the ISaleInfo object.</p></td>
</tr>
<tr class="odd">
<td><p>IPersonInfo CRMPerson</p></td>
<td><p>Read-only. The sales related person info (if any).</p></td>
</tr>
<tr class="even">
<td><p>IProjectInfo CRMProject</p></td>
<td><p>Read-only. The sales related project info (if any).</p></td>
</tr>
<tr class="odd">
<td><p>ISaleInfo CRMSale</p></td>
<td><p>Read-only information about the sale the quote is attached to.<br />
The CRM client will update the amount + cost fields on the sale based on the quote values.</p></td>
</tr>
<tr class="even">
<td><p>ForeignKeyInfo[] ForeignKeys</p></td>
<td><p>The foreign keys that is related to this quote.</p>
<p>Contact keys, project keys, sales keys and quotekeys.</p></td>
</tr>
<tr class="odd">
<td><p>QuoteInfo CRMQuote</p></td>
<td><p>Read + Write quote information</p></td>
</tr>
<tr class="even">
<td><p>QuoteVersionInfo CRMQuoteVersion</p></td>
<td><p>Read + Write version information.</p>
<p> </p>
<p>This is the active version</p></td>
</tr>
<tr class="odd">
<td><p>int EISConnectionId</p></td>
<td><p>The id of the EIS Connection in the CRM system.</p></td>
</tr>
<tr class="even">
<td><p>string EISConnectionGuid</p></td>
<td><p>A conversation identifier</p></td>
</tr>
<tr class="odd">
<td><p>string ERPCompanyKey</p></td>
<td><p>A key to the equivalent id in the ERP system, from the EIS System.</p>
<p>May be empty.</p></td>
</tr>
<tr class="even">
<td><p>string ERPPersonKey</p></td>
<td><p>A key to the equivalent id in the ERP system, from the EIS System.</p>
<p>May be empty.</p></td>
</tr>
<tr class="odd">
<td><p>string ERPProjectKey</p></td>
<td><p>A key to the equivalent id in the ERP system, from the EIS System.</p>
<p>May be empty.</p></td>
</tr>
<tr class="even">
<td><p>string ERPSaleKey</p></td>
<td><p>A key to the equivalent id in the ERP system, from the EIS System.</p>
<p>May be empty.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>String UserLanguageCode</p></td>
<td><p>The language the users uses in the CRM client. The connector should preferably respond using this language.<br />
.net culture code: “nb-NO”, “en-US” etc.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>QuoteAlternativeWithLinesInfo CRMAlternativeWithLines</p></td>
<td><p>Read + Write alternative information.</p>
<p> </p>
<p>This is the active alternative</p></td>
</tr>
</tbody>
</table>

 
---------------------------

[QuoteAction]()
-----------------------------------------

An enumeration hinting about what the user has asked for.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Unknown</p></td>
<td><p>The system was unable to tell what action have triggered the call.</p></td>
</tr>
<tr class="even">
<td><p>Validate</p></td>
<td><p>The system just wants to validate.</p></td>
</tr>
<tr class="odd">
<td><p>SendQuote</p></td>
<td><p>The user has pressed the Send Quote button.</p></td>
</tr>
<tr class="even">
<td><p>PlaceOrder</p></td>
<td><p>The user has pressed the Place Order button.</p></td>
</tr>
<tr class="odd">
<td><p>UpdatePrices</p></td>
<td><p>The user has pressed the update prices button.</p></td>
</tr>
</tbody>
</table>

 

QuoteVersionContextInfo
-------------------------------------------------

 

 <img src="Quote%20Connector%20interface_files/image038.png" width="605" height="202" /> 

 

Exists to be able to give the connector relevant information for QuoteVersion specific operations, like SendQuoteVersion.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>string ERPClientKey</p></td>
<td><p>Foreign key – always present.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>UserInfo CRMAssociate</p></td>
<td><p>Read-only. The logged in user (the salesman)<br />
Note: not necessarily the the owner of the sale – that is exposed via the SaleInfo object</p></td>
</tr>
<tr class="even">
<td><p>ISaleInfo CRMSale</p></td>
<td><p>Read-only information about the sale the quote is attached to.<br />
The CRM client will update the amount + cost fields on the sale based on the quote values.</p></td>
</tr>
<tr class="odd">
<td><p>IContactInfo CRMCompany</p></td>
<td><p>Read-only. The sale’s customer info – more detailed information than is provided by the ISaleInfo object.</p></td>
</tr>
<tr class="even">
<td><p>IProjectInfo CRMProject</p></td>
<td><p>Read-only. The sales related project info (if any).</p></td>
</tr>
<tr class="odd">
<td><p>ForeignKeyInfo[] ForeignKeys</p></td>
<td><p>The foreign keys that is related to this quote.</p>
<p>Contact keys, project keys, sales keys and quotekeys.</p></td>
</tr>
<tr class="even">
<td><pre style="background:white"><code>int 
EISConnectionId</code></pre></td>
<td><p>The id of the EIS Connection in the CRM system.</p></td>
</tr>
<tr class="odd">
<td><p>string EISConnectionGuid</p></td>
<td><p>A conversation identifier</p></td>
</tr>
<tr class="even">
<td><p>string ERPCompanyKey</p></td>
<td><p>A key to the equivalent id in the ERP system, from the EIS System.</p>
<p>May be empty.</p></td>
</tr>
<tr class="odd">
<td><p>string ERPPersonKey</p></td>
<td><p>A key to the equivalent id in the ERP system, from the EIS System.</p>
<p>May be empty.</p></td>
</tr>
<tr class="even">
<td><p>string ERPProjectKey</p></td>
<td><p>A key to the equivalent id in the ERP system, from the EIS System.</p>
<p>May be empty.</p></td>
</tr>
<tr class="odd">
<td><p>string ERPSaleKey</p></td>
<td><p>A key to the equivalent id in the ERP system, from the EIS System.</p>
<p>May be empty.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>QuoteInfo CRMQuote</p></td>
<td><p>Read + Write quote information</p></td>
</tr>
<tr class="even">
<td><p>QuoteVersionInfo CRMQuoteVersion</p></td>
<td><p>Read + Write version information.</p>
<p> </p>
<p>This is the active version</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>String UserLanguageCode</p></td>
<td><p>The language the users uses in the CRM client. The connector should preferably respond using this language.<br />
.net culture code: “nb-NO”, “en-US” etc.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>QuoteAlternativeWithLinesInfo CRMQuoteAlternativeWithLines</p></td>
<td><p>Read + Write alternative information.</p>
<p> </p>
<p>This is the active alternative</p></td>
</tr>
</tbody>
</table>

 
---------------------------

 
---------------------------

[PriceListInfo]()
-------------------------------------------

 

<img src="Quote%20Connector%20interface_files/image039.png" id="Picture 4" width="403" height="134" />

A pricelist is basically a collection of products. It can be valid in a time period, and outright deactivated. All prices in the product list is in a specific currency.

We have decided not to separate prices and products, which means that we get a simpler data model, but some redundancy.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>string ERPPricelistKey</p></td>
<td><p>Reference to the pricelist in the product supplier system.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>int QuoteConnectionId</p></td>
<td><p>The connection in SuperOffice this pricelist comes from.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>string Name</p></td>
<td><p>Name of this pricelist to use in the user interface.</p></td>
</tr>
<tr class="even">
<td><p>string Description</p></td>
<td><p>Description of this pricelist , will be used as tool-tip in the user interface.</p></td>
</tr>
<tr class="odd">
<td><p>string Currency</p></td>
<td><p>The ISO currency code, like 'USD' or 'NOK'.</p></td>
</tr>
<tr class="even">
<td><p>string CurrencyName</p></td>
<td><p>The name to use in the user interface, like perhaps 'US dollar' or '$'</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>DateTime ValidFrom</p></td>
<td><p>The date (inclusive) the pricelist start to be valid. This can be DateTime.MinValue to signal that it doesn't have a specific start date.</p></td>
</tr>
<tr class="odd">
<td><p>DateTime ValidTo</p></td>
<td><p>The date (inclusive) the pricelist ends to be valid. This can be DateTime.MaxValue to signal that it doesn't have a specific end date.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>Bool IsActive</p></td>
<td><p>Is the list active (as opposed to being worked on, suddenly canceled, etc.</p></td>
</tr>
</tbody>
</table>

 

 

[ProductInfo (Article)]()
---------------------------------------------------

A product is some thing or service that can be sold or leased to a customer.

The fields that will be copied to the QuoteLines are marked in grey.

The ERPProductKey should be *uniquely identifiable*. So, if you have an ERP system with products that have many prices, you might want to concatenate the product id and the price id into the Product’s ERPKey to uniquely identify the entity. This way you can decompose the key and look up the information when you need.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>string ERPProductKey</p></td>
<td><p>Reference/foreign key to the product in the product supplier system, if it exists there.</p></td>
</tr>
<tr class="even">
<td><p>string ERPPricelistKey</p></td>
<td><p>Foreign key to the price list that this product is a part of.</p></td>
</tr>
<tr class="odd">
<td><p>b ool InAssortement</p></td>
<td><p>True for products that should currently be offered, false when the product is discontinued and should not ordinarily be offered.</p>
<p> </p>
<p>When false the product no longer appears in search results.</p></td>
</tr>
<tr class="even">
<td><p>d ecimal InStock</p></td>
<td><p>Negative numbers will be interpreted as how many are ordered. Might not be available.<br />
Requires the “Provide-Stock-data” capability, and that the ERP system is available.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>string Name</p></td>
<td><p>The name to use in the user interface</p></td>
</tr>
<tr class="odd">
<td><p>string Description</p></td>
<td><p>The description to use, with potentially several lines.</p>
<p>Will be used as tool-tip to use in the list user interface too.</p></td>
</tr>
<tr class="even">
<td><p>string Code</p></td>
<td><p>The product code / article number in the product supplier system.</p></td>
</tr>
<tr class="odd">
<td><p>string QuantityUnit</p></td>
<td><p>What is the unit (meter, ton, bushel, microsecond, gradus, τρυβλίον, 五合枡 , دونم or whatever); Connector handles conversion relative to PriceUnit if they are different.</p></td>
</tr>
<tr class="even">
<td><p>string PriceUnit</p></td>
<td><p>What is the unit (meter, ton, bushel, microsecond, gradus, τρυβλίον, 五合枡 , دونم or whatever); read-only for lines that originate in defined products.</p></td>
</tr>
<tr class="odd">
<td><p>string ItemNumber</p></td>
<td><p>Line item number, NOR: «Postnummer». Specific numbers from some hierarchy, for instance “1.4.3.2P”. Typically used to sort the items in the quote by some standard way.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>string Url</p></td>
<td><p>URL to product information web page</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>string ERPProductCategoryKey</p></td>
<td><p>Either a List id to an id from a connector provided list, or, if the connection doesn’t support lists, a text with the actual product category.</p></td>
</tr>
<tr class="even">
<td><p>string ERPProductFamilyKey</p></td>
<td><p>Either a List id to an id from a connector provided list, or, if the connection doesn't support lists, a text with the actual product family.</p></td>
</tr>
<tr class="odd">
<td><p>string ERPProductTypeKey</p></td>
<td><p>Either a List id to an id from a connector provided list, or, if the connection doesn’t support lists, a text with the actual product type.</p></td>
</tr>
<tr class="even">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="odd">
<td><p>string Supplier</p></td>
<td><p>Name of the supplier of the product</p></td>
</tr>
<tr class="even">
<td><p>string SupplierCode</p></td>
<td><p>Suppliers part code/number or other key-like field</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>string Thumbnail</p></td>
<td><p>The thumbnail of the product, if it exists. Base64 encoded string, or a valid URI that resolves to an image.</p>
<p><br />
Requires the “Provide-Thumbnail” capability.</p></td>
</tr>
<tr class="odd">
<td><p>string VATInfo</p></td>
<td><p>A field for putting VATInfo you need to show in the final quote document, like the VAT type that is used.</p>
<p>Not used in any business logic in SuperOffice; available to document templates.</p></td>
</tr>
<tr class="even">
<td><p>string VAT</p></td>
<td><p>Tax/VAT if available from ERP system.</p>
<p>Could be either the percentage or the actual value.</p>
<p>This is just to help out the layout of the quote in a document, but SuperOffice will not try to calculate this value.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>Decimal UnitCost</p></td>
<td><p>The cost price.</p>
<p>Might not be given, use Decimal.MinValue to signal this.</p></td>
</tr>
<tr class="odd">
<td><p>Decimal UnitMinimumPrice</p></td>
<td><p>The minimum price this salesman can offer to his customer. This might be cost price if there is no policy.</p>
<p>Might not be given, use Decimal.MinValue to signal this.</p></td>
</tr>
<tr class="even">
<td><p>decimal UnitListPrice</p></td>
<td><p>(Basic Price, normal price, standard price.)</p>
<p>This is the basic price from which the discount is computed from.</p>
<p>The ListPrice will stay the same even when a larger amount is ordered.</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>ProductExtraDataFieldInfo[] ExtraData</p></td>
<td><p><a href="" id="OLE_LINK57">Extra data (fields with labels). Shall be shown in the quoteline dialog.</a></p>
<p>Additional info that the ERP system would like to store and show in the user interface.</p>
<p> </p>
<p>Information placed here is shown in the GUI if the “provide-extra-data” capability is true.</p>
<p>Different products can have different fields.</p>
<p>It will not be possible to directly put info here into the quote document.</p>
<p> </p>
<p>BTW, this will be stored in the SuperOffice database as an xml field, like this:</p>
<p>&lt;Fields&gt;</p>
<p>  &lt;Field Name=&quot;Weight&quot; Type=&quot;String&quot;&gt;&lt;![CDATA[[F:16.6] tons]]&gt;&lt;/Field&gt;</p>
<p>  &lt;Field Name=&quot;Height&quot; Type=&quot;String&quot;&gt;&lt;![CDATA[ [F:44.0]cm]]&gt;&lt;/Field&gt;</p>
<p>  &lt;Field Name=&quot;Arms&quot; Type=&quot;String&quot;&gt;&lt;![CDATA[ [I:2]]]&gt;&lt;/Field&gt;</p>
<p>  &lt;Field Name=&quot;Certification&quot; Type=&quot;String&quot;&gt;&lt;![CDATA[AB-ICE]]&gt;&lt;/Field&gt;</p>
<p>  &lt;Field Name=&quot;Weight&quot; Type=&quot;String&quot;&gt;&lt;![CDATA40°C]]&gt;&lt;/Field&gt;</p>
<p>  &lt;Field Name=&quot;Security info&quot; Type=&quot;Url&quot; &gt;&lt;![CDATA[http://www.armystudyguide.com/content/army_board_study_guide_topics/hand_grenades/throwing-of-hand-grenades.shtml]]&gt;&lt;/Field&gt;</p>
<p>   &lt;Field Name=&quot;Security image &gt;&lt;![CDATA[http://upload.wikimedia.org/wikipedia/commons/thumb/8/80/MK2_grenade_DoD.jpg/220px-MK2_grenade_DoD.jpg&lt;/Field]]&gt;</p>
<p>&lt;/Fields&gt;</p></td>
</tr>
<tr class="odd">
<td><p> </p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>string Rights</p></td>
<td><p>Field1=right&amp;Field2=right, etc. of any fields that have non-standard field access rights.</p>
<p>Rights can be one of: N (=None or Hidden), R (=Read-only), W (=Writeable), M (=Mandatory).</p>
<p>The fields will mostly be from the Quoteline table, but some added fields that are conceptually part of the quoteline, like Image will also be possibly to set rights on.</p>
<p>See Rights field for more information</p>
<p>Will be used by SuperOffice to control the user interface when showing the record.</p></td>
</tr>
<tr class="odd">
<td><p>string Rule</p></td>
<td><p>The names of one or more calculation rules that are in effect for this line, comma-separated case-insensitive.</p>
<p>Will NOT be used by SuperOffice.</p></td>
</tr>
<tr class="even">
<td><p>string ExtraField1</p></td>
<td><p>This a simple field for adding information that the Connector can provide, and that the quote document need to display.</p></td>
</tr>
<tr class="odd">
<td><p>string ExtraField2</p></td>
<td><p>This a simple field for adding information that the Connector can provide, and that the quote document need to display.</p></td>
</tr>
<tr class="even">
<td><p>string ExtraField3</p></td>
<td><p>This a simple field for adding information that the Connector can provide, and that the quote document need to display.</p></td>
</tr>
<tr class="odd">
<td><p>string ExtraField4</p></td>
<td><p>This a simple field for adding information that the Connector can provide, and that the quote document need to display.</p></td>
</tr>
<tr class="even">
<td><p>string ExtraField5</p></td>
<td><p>This a simple field for adding information that the Connector can provide, and that the quote document need to display.</p></td>
</tr>
</tbody>
</table>

 

[]() <a href="" id="OLE_LINK56">ProductExtraDataField</a> Info
------------------------------------------------------------------------------------------------------------------

A way to show some simple extra data on a product, typically to help the user to identify the correct product. Basically a bucket of additional info that the ERP system would like to store and show in the user interface. Information placed here is shown in the GUI if the “provide-extra-data” capability is true.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>string FieldName</p></td>
<td><p><a href="" id="OLE_LINK63"></a> <a href="" id="OLE_LINK58">Label for the field</a></p></td>
</tr>
<tr class="even">
<td><p>string FieldValue</p></td>
<td><p>Value for the field</p></td>
</tr>
<tr class="odd">
<td><p><a href="">ExtraDataFieldType Type</a></p></td>
<td><p>String, image, url.<br />
How the value should be interpreted.</p></td>
</tr>
</tbody>
</table>

 

To ensure that values in the value field is correctly displayed according to the user’s culture setup, we have a little system for making this work correctly. You just wrap the values in \[\] brackets with a format specifier, like this:

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Valuetype</strong></p></td>
<td><p><strong>Symbol</strong></p></td>
<td><p><strong>Comment</strong></p></td>
<td><p><strong>Example</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>Date</strong></p></td>
<td><p>D</p></td>
<td><p>Use [D:mm/dd/yyyy]</p></td>
<td><p>[D:01/01/2009]</p></td>
</tr>
<tr class="odd">
<td><p><strong>DateTime</strong></p></td>
<td><p>DT</p></td>
<td><p>Use [DT:MM/DD/YYYY 00:00:00.0000000]</p></td>
<td><p>[DT:</p></td>
</tr>
<tr class="even">
<td><p><strong>double</strong></p></td>
<td><p>F</p></td>
<td><p>Use ‘.’ (period) as decimal separator.</p></td>
<td><p>[F:123.45]</p></td>
</tr>
<tr class="odd">
<td><p><strong>Integer</strong></p></td>
<td><p>I</p></td>
<td><p> </p></td>
<td><p>[I:123]</p></td>
</tr>
<tr class="even">
<td><p><strong>Money</strong></p></td>
<td><p>M</p></td>
<td><p>Use ‘.’ (period) as decimal separator.</p></td>
<td><p>[M:123.98]</p></td>
</tr>
</tbody>
</table>

 

Which means that you can show several values in a field, like this: “ *Between \[D:12/01/2012\] and \[D:12/25/2012\] it is a \[F:99.5\]% chance of meeting a Santa Clause.*” Which will translate into “ *Between 01.12.2012 and 25.12.2012 it is a 99,5% chance of meeting a Santa Clause.*” with a Norwegian PC setup, for instance.

Or “Should be used in temperatures between \[F:-30.0\]°C  and \[F:50.0\] °C.” -&gt; “Should be used in temperatures between 30,0°C  and 50,0 °C.”

 

[ExtraDataFieldTypeInfo]()
----------------------------------------------------

How should the ProductExtraDataFieldInfo value be interpreted?

* String

* Url

* Image (URL to image or Base64 encoded string)

 

[]() [QuoteConnectorExtender]()
---------------------------------------------------------

This class is made to make it easier to make some installation specific changes to a connector without changing the connector itself.

Just inherit QuoteConnectorExtender, override the function (-s) you need to change (or extend the functionality) and make SuperOffice connect to the new extender connector instead of the ERP connector (dynamicload section in the SuperOffcie.config file).

Fundamentally, this new connector puts itself between the ERPConnector and SuperOffice

[AddressInfo]()
-----------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>string AddressField1</p></td>
<td><p>Address line</p></td>
</tr>
<tr class="even">
<td><p>string AddressField2</p></td>
<td><p>Address line</p></td>
</tr>
<tr class="odd">
<td><p>string AddressField3</p></td>
<td><p>Address line</p></td>
</tr>
<tr class="even">
<td><p>string AddressCity</p></td>
<td><p>The address city</p></td>
</tr>
<tr class="odd">
<td><p>string AddressZip</p></td>
<td><p>The address zipcode, typically a number.</p></td>
</tr>
<tr class="even">
<td><p>string AddressZipGerman</p></td>
<td><p>Postcode for street address (for German addresses)</p></td>
</tr>
<tr class="odd">
<td><p>string CountryCode</p></td>
<td><p>The ISO country code, like, “NO” or “US”. See <a href="http://www.iso.org/iso/home/standards/country_codes/iso-3166-1_decoding_table.md#AA" class="uri">http://www.iso.org/iso/home/standards/country_codes/iso-3166-1_decoding_table.md#AA</a> for details.</p></td>
</tr>
<tr class="even">
<td><p>string Country</p></td>
<td><p>The country name, as written on an envelope (“Norway”, “Sweden”, etc).</p></td>
</tr>
</tbody>
</table>

 
