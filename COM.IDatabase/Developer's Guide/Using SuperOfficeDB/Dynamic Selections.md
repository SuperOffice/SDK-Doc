---
uid: DynamicSelections
title: Dynamic Selections
---

###     Dynamic Selections

Dynamic selections are handled just like selections in CRM 5. The only difference is that Add/Remove is not used; instead you define a query using the criteria object. You can then call Refresh to re-populate the selection member list.

You can define and edit dynamic selection criteria via COM.

    <see cref="SOSelection.Type">Selection.Type</see>  enum: Static/Dynamic
    <see cref="SOSelection.Criteria">Selection.Criteria</see>   collection of ICriterion – (read-only)
    <see cref="SOCriteria.Add">Selection.Criteria.Add</see>
    <see cref="SOCriteria.Remove">Selection.Criteria.Remove</see>

 

<see cref="SuperOffice.COM.SuperOfficeDB.SOCriterion">SOCriterion</see> 

```
    Fieldname  string  (e,g “contact.name” )
    UdefField  string  (e.g. "My udef field")
    ExtraId   long
    Operator   enum  - equal = 19
    Values   collection of Variant - wrap around SearchCriterionValueInfos
    LinkType  enum  CriterionLinktype – And/Or. Currently we only support AND.
```
 

So we can say things like:

```
    Set defaultCat = db.GetListItem( enTableCategory, 7 )
    Set sel = db.CreateSelection
    sel.SetDefaults
    sel.Type = enSelTypeDynamicContact
    set crit = sel.Criteria.Add( “contact.category\_idx”, enOperEqual, defaultCat.Id )
    crit.operator = enOperIn
    crit.Values.Add 123
    crit.Values.Add 435
    crit.LinkType = enLinkTypeAnd
    sel.Save
    for each m in sel.SelectionMembers
        msg = msg & m.ContactName & m.PersonName & vbCrLf
    next
    msgbox msg
```