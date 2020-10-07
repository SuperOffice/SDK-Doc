---
title: Stakeholders
uid: crmscript_sale-stakeholders
SortOrder: 20
---

A sale has a main contact, but partners and subcontractors may also be involved in the sale. These are referred to as **stakeholders** and can be either individuals, organizations, or a mix.

## Organizations as stakeholders

The `contact_id` is the ID of the organization and the `person_id` is 0.

> [!NOTE]
> We're working with the **contact** database table here. Not to be confused with the **company** table!

### Look up a company based on its domain

```crmscript!
Company c;
c.findFromDomain("superoffice.com");
print(c.getValue("name"));
```

### View company info

```crmscript!
Integer stakeholderId = 1;
NSSaleAgent saleAgent;
NSSaleStakeholder stakeholder = saleAgent.GetSaleStakeholder(stakeholderId);

if (stakeholder.GetPersonId() != 0) {
  printLine("Name: " + stakeholder.GetContactName() + "\t Role: " + stakeholder.GetStakeholderRoleName());
}
```

Read more about [working with organizations](../persons-and-organizations/company.md).

## Individuals as stakeholders

The `contact_id` is the ID of the organization (as before) but the `person_id` is 0.

> [!NOTE]
> We're working with the **person** database table here. Not to be confused with the **contact** or **associate** tables!

### Look up a person based their email address

```crmscript!
Customer c;
printLine(c.findFromEmail("jean-luc@superoffice.com").toString());
```

### View person info

```crmscript!
Integer stakeholderId = 2;
NSSaleAgent saleAgent;
NSSaleStakeholder stakeholder = saleAgent.GetSaleStakeholder(stakeholderId);

if (stakeholder.GetPersonId() != 0) {
  printLine(stakeholder.GetFirstname() + " " + stakeholder.GetLastname());
}
```

Read more about [working with persons](../persons-and-organizations/customer.md).

## List all stakeholders of a sale

**Get from agent:**

```crmscript!
Integer saleId = 4;
NSSaleAgent saleAgent;
NSSaleStakeholder[] stakeholderList = saleAgent.GetSaleStakeholders(saleId);

for(Integer i = 0; i < stakeholderList.length(); i++) {
  print(stakeholderList[i].GetSaleStakeholderId().toString() + "\t");
  printLine("Contact: " + stakeholderList[i].GetContactId().toString() + "\t Person: " + stakeholderList[i].GetPersonId().toString());
}
```

**Get from current sale:**

```crmscript
NSSaleEntity sale;
NSSaleStakeholder[] stakeholderList = sale.GetSaleStakeholders();
```

## Create a stakeholder

```crmscript
NSSaleStakeholder stakeholder = saleAgent.CreateDefaultSaleStakeholder();
stakeholder.SetContactId(1);
stakeholder.SetSaleId(4);
stakeholder.SetStakeholderRoleId(1);
stakeholder = saleAgent.SaveSaleStakeholder(stakeholder);
```

### List available roles

```crmscript!
SearchEngine se;
se.addFields("StakeholderRole", "StakeholderRole_Id,name");
print(se.executeTextTable());
```

### Add new stakeholder to a sale

```crmscript
NSSaleAgent saleAgent;
NSSaleEntity sale = saleAgent.GetSaleEntity(4);

// Pull up the stakeholder we just created
NSSaleStakeholder newStakeholder = saleAgent.GetSaleStakeholder(1);

NSSaleStakeholder[] stakeholderList = sale.GetSaleStakeholders();
stakeholderList.pushBack(newStakeholder);

sale.SetSaleStakeholders(stakeholderList);

sale = saleAgent.SaveSaleEntity(sale);
```

## Reference

### NSSaleStakeholder

| Field              | Get method             | Description                     |
|:-------------------|:-----------------------|:--------------------------------|
| salestakeholder_id | GetSaleStakeholderId() | ID                              |
| stakeholderrole_id | GetStakeholderRoleId() | Role                            |
| sale_id            | GetSaleId()            | parent sale                     |
| contact_id         | GetContactId()         | contact (person or org)         |
| person_id          | GetPersonId()          | ID of person OR **0** if an org |

For a complete list of fields, see the [database reference](https://community.superoffice.com/documentation/SDK/SO.Database/html/Tables-SaleStakeholder.htm).
