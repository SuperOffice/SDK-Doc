<properties date="2016-05-11"
SortOrder="6"
/>

 

Sales are grouped into different statuses, like open, sold, lost or unknown. In the countervalue table this is represented under the field sale\_status. Sales are even grouped under different amount classes like small, medium, large and extra large. We might need to retrieve a list of companies with more than two successful sales. In this situation we do not want to restrict the amount-class, so we may specify the amountclassid =0. In the following example we will explain how this is done. 

```
using SuperOffice.CRM.Rows;
using SuperOffice.CRM.Data;
using SuperOffice.Data;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
 
   //Create an instance of the CustomSearch class   
   ContactRows.CustomSearch myRows = new
ContactRows.CustomSearch();
 
   //Get instances of ContactTableInfo and CounterValueTableInfo
   ContactTableInfo nweConTbl = TablesInfo.GetContactTableInfo();
   CounterValueTableInfo cvTable =
TablesInfo.GetCounterValueTableInfo();
 
   //Join the contact table with with countervalue table
  
myRows.JoinRestriction.InnerJoin(nweConTbl.ContactId.Equal(cvTable.ContactId));
  
   //Set Restrictions so that sale_status = 2 and amountClassId = 0
and totalReg > 2
   myRows.Restriction =
cvTable.SaleStatus.Equal(S.Parameter(2)).And(cvTable.AmountClassId.Equal(S.Parameter(0))).And(cvTable.TotalReg.GreaterThan(S.Parameter((uint)2)));
  
   //Set IsDistinct property True to remove duplicates    
   myRows.IsDistinct = true;
   ContactRows newRows = ContactRows.GetFromCustomSearch(myRows);
 
   //Display the returned rows
   foreach (ContactRow myRow in newRows)
   {
     listBox1.Items.Add(myRow.Name);
   }
 
}
```

 

In this example we have created an instance of the CustomSearch class. You can join the contact table with the countervalue table as done above. The exact SQL statement we run above is

```
SELECT DISTINCT CRM5.contact.contact_id
FROM CRM5.contact
INNER JOIN CRM5.countervalue ON CRM5.countervalue.sale_status = 2
AND CRM5.countervalue.amountClassId = 0 AND
CRM5.countervalue.totalReg > 2
```

An Important Point to Remember!

It is not necessary to set the IsDistinct property to True. But the join statement returns a large number of rows with same contact\_id, and therefore it would be better to set the IsDistinct property to True.
