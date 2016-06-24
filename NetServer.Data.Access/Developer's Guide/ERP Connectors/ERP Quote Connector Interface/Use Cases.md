<properties date="2016-05-11"
SortOrder="12"
/>

[Use Cases]()
=======================================

### [Use Case – Adding a Product]()

The user will click the ADD button to open the QUOTE LINE DIALOG.

The user enters a search value: “Glops”

<img src="Quote%20Connector%20interface_files/image040.jpg" id="Picture 9" width="385" height="187" />

Figure 10 : Please notice that this dialog has been revised severly. It will look very different in the final version.

The client calls the ERP connector **IQuoteConnector.FindProduct**(“Glops”).
The ERP connector searches the ERP database and gets back a list of matching products.

The user selects a product from the result list. This gives us the ERP Product key of the product.

The client calls the **IQuoteConnector.GetQuoteLineFromProduct**( quoteContext, erpKey ) to get the full information for the product.

The client updates the dialog with values from the new QuoteLine.

<img src="Quote%20Connector%20interface_files/image041.jpg" id="Picture 1" width="324" height="186" />

Figure 11 : Please notice that this dialog has been revised severely. It will look very different in the final version.

*The user changes the QUANTITY from 1 to 10 and hits TAB*

The system calls ERP Connector: **IQuoteConnector.OnQuoteLineChanged**( quoteline, quotecontext ) with the quoteline amount = 10 rather than 1.  The ERP connector receives a new discount from the ERP system: Assume now that the ERP system thinks 10% would be a good discount for this quote.
So the QuoteLine.ERPDiscountPercent = 10.

The system calculates the other value: ERPDiscountAmount = 10% \* UnitListPrice \* Quantity.

Since the UserValueOverride = None, this means that the ERP connector shall copy the ERPDiscountAmount into the DiscountAmount field and the ERPDiscountPercent in the DiscountPercent field.

Then the connector calculates the TotalPrice, the Earning percent and the Earning amount.

The system updates the GUI with the new values from the quote line.

*The user changes the UnitListprice from 13.00 to 14.00*

Again the system calls ERP Connector: **IQuoteConnector.OnQuoteLineChanged**

Assume now that the ERP connector returns with ERPDiscountPercent field updated to 12.

The system calculates the ERPDiscountAmount.

The system sees that the UserValueOverride is still none, so both ERP values are copied to the user discount fields.

Then the connector calculates the TotalPrice, the Earning percent and the Earning amount.

The system updates the GUI with the new values from the quote line.

*The user changes the DISCOUNT PERCENT from 12% back to 10%*

The system sets the Quoteline. UserValueOverride = DiscountPercent

Again the system calls ERP Connector: **IQuoteConnector.OnQuoteLineChanged**

The system calculates the ERPDiscountAmount from the ERPDiscountPercent, but this time does not copy the ERP values to the user discount fields, since the user has entered a discount value (the UserValueOverride is not NONE).

The system calculates the QuoteLine.DiscountAmount from the DiscountPercent value since the UserValueOverride field is PercentField. And then the TotalPrice, the Earning percent and the Earning amount.

The user clicks the SAVE button.

The system calls the ERP Connector: **IQuoteConnector.RecalculateAlternative**() to update all the quote alternative total.

### [Use case – Dealing with customer specific product codes]()

Some, typically large, customers demand that you send quotes to them using the customers product codes. How should you go about solving this with SuperOffice?

There must be an alias database somewhere who knows how to translate the product codes into customer codes. We call this the “Alias database”.

When a user uses the fast search (that’s the “google” search in the QuoteLine dialog) he enters the proprietary customer alias “BOEING\_111”.

1. Your connector sends a search to the Alias database to see if the customer + search word (-s) have a match.

2. That search returns a match on the “BOEING\_111” which is “Pcx\_222”

3. You then add the word “Pcx\_222” to the user input

4. Pass the changed user input to the SuperOffice connector.

5. The SuperOffice connector then returns a match on “Pcx\_222”.

6. You then change the product code “Pcx\_222” in the result to the correct customer code “BOEING\_111”.

7. The user sees that he found the “BOEING\_111” product and accepts it.

 

Performance gains:

* We assume that only a few of the customers have this issue. Perhaps you should therefor consider to mark a quote with if it is such a customer and only search the alias database if the customer has actual aliases.

* You could easily create what we call a partner table in SuperOffice and fill it with the alias data. Such a table would contain the following columns: id, customerid, customer alias and your product code. It would automatically be transported onto travel, if you configure it to do so. All you have to do is, like with the product register, to synchronize it regularly.

 

When it comes to the complex search, where the user can specify which fields he want to search in, you can make your own search-provider. This provider could make it possible for you to allow the user to enter text into a search criteria you can call “Customer Code”. It would then be easy to perform the correct search against the alias data store (whether internally to SuperOffice or externally) and present the user with a result that shows the customer code or whatever you need.

 

 
