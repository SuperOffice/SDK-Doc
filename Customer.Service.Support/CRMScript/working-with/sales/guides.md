---
title: Guides
uid: crmscript_sale-guide
SortOrder: 40
---

Some sale types have an associated sales guide. For those types, it si important to understand stages and working with suggested activities.

## Check if sale is connected to a guide

```crmscript!
NSListAgent listAgent;
NSSaleAgent saleAgent;

NSSaleEntity sale = saleAgent.GetSaleEntity(4);

Integer saleTypeId = sale.GetSaleType().GetId();
NSSaleTypeEntity type = listAgent.GetSaleTypeEntity(saleTypeId);

if (type.GetHasGuide()) {
  printLine("This sale has a guide!");
}
else {
  printLine("This sale does not have a guide.");
}
```

## Stages

Each stage has a set of suggested activities. There is also a setting controlling whether the sale will automatically advance to the next stage when the last guided activity in a stage is completed.

The sequence of the stages is determined by the **rank** of each stage.

**Example process:**

1. Lead
2. First meeting
3. Proposal
4. Second meeting
5. Short-list
6. Verbal acceptance

### NSSelectableMDOListItem[] GetStages()

```crmscript!
NSListAgent listAgent;
NSSaleTypeEntity type = listAgent.GetSaleTypeEntity(1);
NSSelectableMDOListItem[] stages = type.GetStages();

for(Integer i = 0; i < stages.length(); i++) {
  printLine(stages[i].GetId().toString() + " | " + stages[i].GetName() + "\t Rank " + stages[i].GetRank().toString());
}
```

> [!NOTE]
> The ID and rank of a stage are not necessarily identical!

### Bool GetIsAutoAdvance()

```crmscript!
NSListAgent listAgent;
NSSaleTypeEntity type = listAgent.GetSaleTypeEntity(1);

printLine("This sale will auto advance: " + type.GetIsAutoAdvance().toString());
```
