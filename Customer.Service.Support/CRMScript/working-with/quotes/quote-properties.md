---
title: One quote per sale
uid: crmscript_quote_properties
SortOrder: 10
---

Quotes are what connects products to a sale. You must [record a sale](../sales/leads.md) **before** you can add a quote. Also, [products](./products.md) must have been registered before you can add them to a quote.

Each quote belongs to a single sale. And there's only 1 quote per sale.

## Retrieve quote info

To view basic info, use `NSQuote`. To view (and possibly update) complex info, use `NSQuoteEntity`.

### NSQuote GetQuote(Integer quoteId)

```crmscript
NSQuoteAgent qa;
NSQuote quote = qa.GetQuote(1);
```

### NSQuote GetQuoteFromSaleId(Integer saleId)

```crmscript
NSQuoteAgent qa;
NSQuote quote = qa.GetQuoteFromSaleId(4);
```

### NSQuoteEntity GetQuoteEntity(Integer quoteId)

```crmscript
NSQuoteAgent qa;
NSQuoteEntity quoteEntity = qa.GetQuoteEntity(1);
```

### NSQuoteEntity GetQuoteEntityFromSaleId(Integer saleId)

Variant of `GetQuoteEntity()` that uses a sale ID to find the quote.

## Create quote

You can either create a quote from scratch or copy an existing quote from another sale.

### NSQuoteEntity CreateAndSaveQuote(Integer saleId, Integer connectionId, String firstAlternativeName)

```crmscript!
NSQuoteAgent qa;
NSQuoteEntity quote = qa.CreateAndSaveQuote(4,1,"basic gardening supplies");

printLine(quote.GetQuoteId().toString());
```

> [!TIP]
> If there's no external ERP connection, you're most likely using SuperOffice with ID 1.

### NSQuoteEntity CreateAndSaveQuoteFromSale(Integer copyFromSaleId, Integer copyToSaleId)

```crmscript!
NSQuoteAgent qa;
NSQuoteEntity quote = qa.CreateAndSaveQuoteFromSale(4,5);

printLine(quote.GetSaleId().toString());
```

## Delete quote

> [!CAUTION]
> Always check before deleting. There might be legal and/or financial reasons to keep a quote in the system.

```crmscript
Integer quoteId = 42;
NSQuoteAgent qa;
qa.DeleteQuote(quoteId);
```

## References

### Frequently used Quote fields

| Field                | Description                               |
|:---------------------|:------------------------------------------|
| quote_id             | ID                                        |
| SaleId               | the corresponding sale                    |
| QuoteConnectionId    | the ERP connection used for this quote    |
| ActiveQuoteVersionId | the latest version                        |
| AcceptedQuoteAlternativeId | the alternative accepted by the customer |
| UseValuesFromQuote   | whether to update the sale (Earning, Earning_Percent and Amount) |
| DocumentId           | the quote document                        |
| PoNumber             | the purchase order number                 |

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-Quote.htm).

### Frequently used QuoteAlternative fields

| Field                | Description                               |
|:---------------------|:------------------------------------------|
| quotealternative_id  | ID                                        |
| QuoteVersionId       | the version the alternative belongs to    |
| Name                 | label for UI                              |
| VAT                  | as calculated amount                      |
| EarningPercent       | in percent of total                       |
| EarningAmount        | as amount                                 |
| TotalPrice           | calculated                                |

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-QuoteAlternative.htm).

### Frequently used QuoteVersion fields

| Field                | Description                               |
|:---------------------|:------------------------------------------|
| quoteversion_id      | ID                                        |
| QuoteId              | parent quote                              |
| State                |                                           |
| LikelyQuoteAlternativeId | alt. most likely to be accepted<br />used to calculate probable income |
| SentDate             | when the version was sent to the customer |
| FollowupId           | the follow-up created when version was sent |
| ExpirationDate       | the last date on which the offer is valid |
| Rank                 | the version number                        |

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-QuoteVersion.htm).

### Frequently used QuoteLine fields

| Field                | Description                               |
|:---------------------|:------------------------------------------|
| quoteline_id         | ID                                        |
| QuoteAlternativeId   | the alternative this line belongs to      |
| Name                 | product name                              |
| Code                 | the product code or article number        |
| Rank                 | for sorting                               |

The line will also include **information duplicated from the product** (rather than referenced).

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-QuoteLine.htm).

### State

| State | Description                               |
|:-----:|:------------------------------------------|
| 0     | unknown                                   |
| 1     | OK: draft calculated and verified by ERP  |
| 2     | draft not calculated: prices and other attributes may not be valid |
| 3     | draft has problems requiring approval     |
| 4     | draft approved (with problems)            |
| 5     | draft not approved due to problems        |
| 6     | sent to customer and is now a legally binding document |
| 7     | archived                                  |
| 8     | rejected by customer (sale lost)          |
| 9     | accepted by customer (sold)               |

### Status

| Status | Description                               |
|:------:|:------------------------------------------|
| 0      | OK, all is good                           |
| 1      | All is good, however the user should be made aware of something |
| 2      | problem - notify user                     |
| 3      | problem - action required                 |
