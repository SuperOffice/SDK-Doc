---
title: Quotes
uid: crmscript_quotes
SortOrder: 50
---

In sales, a quote allows a prospective buyer to see the **costs of selected products and/or services**. It can contain multiple **alternatives** for the customer to choose between.

For you as a CRMScript developer, working with quotes means that:

* you won't have to worry about miscalculating
* the sales details can be automatically updated

## ERP

You might be working with a tenant that is integrated with an ERP system.
In that case, the ERP connection determines where the product information and prices are obtained from.

### Find available quote connections

```crmscript!
SearchEngine se;
se.addFields("QuoteConnection", "quoteconnection_id,DisplayName,Rank");
print(se.executeTextTable());
```

## Quote vs. other entities

When working with quotes, data will often intersect with the following entities:

* [documents](xref:crmscript_docs)
* [follow-ups](xref:crmscript_followups) (appointment table)
* [company](xref:crmscript-class-company) (contact table)
* [contact](xref:crmscript-class-customer) (person table)
* project
* [sale](xref:crmscript_sales)

## In this section

1. autolist
