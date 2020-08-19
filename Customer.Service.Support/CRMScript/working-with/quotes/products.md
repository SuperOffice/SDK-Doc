---
title: Products
uid: crmscript_products
SortOrder: 20
---

Each product belongs to a single price list. A price list can either be cached from an ERP system or set up in SuperOffice CRM.

## Create price list

```crmscript!
DateTime now;
NSQuoteAgent qa;

NSPriceList priceList = qa.CreateDefaultPriceList();

priceList.SetName("gardening tools fall 2020");
priceList.SetValidFrom(now);
priceList.SetValidTo(now.moveToYearEnd());

priceList = qa.SavePriceList(priceList);

printLine(priceList.GetPriceListId().toString());
```

> [!TIP]
> By default, the new price list will be valid "forever", with the validity period set using the max and min value of the DateTime type.

## Create product

```crmscript!
NSQuoteAgent qa;
NSProduct product = qa.CreateDefaultProduct();

product.SetName("bulb planter");
product.SetERPPriceListKey("5");

product = qa.SaveProduct(product);

printLine(product.GetProductId().toString());
```

## Reference

### Frequently used product fields

| Field          | Description                               |
|:---------------|:------------------------------------------|
| product_id     | ID                                        |
| PriceListId    | the price list the product belongs to     |
| Name           | label for UI                              |
| Description    |                                           |
| Code           | the product code or article number in the product supplier system |
| PriceUnit      | what kind of amount the price pertains to |
| IsSubscription | whether it's a recurring offer            |
| Url            | link to product information web page      |
| VAT            | percentage                                |
| UnitListPrice  | the basic price from which the discount is computed from |
| InAssortment   | whether currently offered or out-of-stock/discontinued |

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-Product.htm).

### Frequently used price list fields

| Field          | Description                               |
|:---------------|:------------------------------------------|
| pricelist_id   | ID                                        |
| Name           | label for UI                              |
| Description    |                                           |
| CurrencyId     | the currency of the list                  |
| ValidFrom      | the date at which the list becomes valid  |
| ValidTo        | the last date the list is valid           |
| IsActive       | link to product information web page      |
| IsERPCopy      | whether it's a cache and can't be changed in CRM |

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-PriceList.htm).
