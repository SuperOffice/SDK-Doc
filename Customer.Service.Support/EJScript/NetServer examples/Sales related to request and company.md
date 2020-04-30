---
title: Sales related to request and company
path: /EJScript/NetServer examples/Sales related to request and company
sortOrder: 9543
---

```crmscript!
    // This function will return true if the company connected to the ticket has open sales
    // if there is no company connected to the ticket, it returns false
    Bool hasOpenSales(Integer ticketId)
    {
      // find company id from ticket id
      SearchEngine se;
      se.addField("ticket.cust_id.contact_id");
      se.addCriteria("ticket.id", "Equals", ticketId.toString(), "and", 0);
    
      se.execute();
    
      if (!se.eof())
      {
        Integer contactId = se.getField(0).toInteger();
    
        NSSaleAgent saleAgent;
    
        DateTime from = getCurrentDateTime();
        DateTime to = getCurrentDateTime();
    
        from.addDay(-30);
    
        NSSaleSummary saleSummary = saleAgent.GetSummaryByContact(contactId, from, to);
    
        return saleSummary.GetOpen() > 0;
      }
      else
        return false;
    }

```
