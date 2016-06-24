<properties date="2016-05-11"
SortOrder="5"
/>

The NetServer will instead of pre-calculating them use a”tooltip hint” which looks like this: - person\_id = 123. When such a tooltip needs to be called the NetServer calls the tooltip service with the tooltip hint as the parameter. ToolTip providers or plugins do the translation of the hint to the actual hint. The tooltipProviderFactory will call in sequence all the plugins that declare that they support the given hint. When you create your own provider, it will be added to the resulting tooltip and will be reflected in all instances of the tooltips in the application.

<img src="../Adding%20a%20Custom%20Archive%20Plugin_files/image001.jpg" width="243" height="134" /> On the right is the image of the tooltip hint for the person\_Id = 123. The code below is intended to add additional information regarding sales to the displayed tooltip.

 

 

 

```
using SuperOffice.CRM.Tooltips;
using SuperOffice.CRM.Rows;
 
//Tooltip hint for PersonId
[TooltipPlugin( "TotalSales:Person",
PersonTooltipPlugin.PersonKey)]
 
//Class Inherits from the Base Class
public class DemoTotalPersonSaleTooltipPlugin : TooltipPluginBase
{
      protected override string InnerGetTooltip()
      {
            int personId;
            //Gets the value part of the tooltip
            if( base.TryGetIntHint(PersonTooltipPlugin.PersonKey,
out personId ) )
            {
                  SaleRows sales = SaleRows.GetFromIdxPersonId(
personId );
                  if( sales.Count > 0 )
                  {
                        double totalSales = 0.0;
                        //Fetches all Sales per Person
                        foreach( SaleRow sale in sales )
                             totalSales += sale.Amount;
 
                        return string.Format( "Total sales:
{0}<br/> Average sale: {1}<br/> Number of sales: {2}",
totalSales, totalSales / sales.Count, sales.Count );
                  }
                  else
                        return "This person has no sales";
            }
            else
                  return string.Empty;
      }
}
```

<img src="../Adding%20a%20Custom%20Archive%20Plugin_files/image002.jpg" width="156" height="152" />

This example shows how a tooltip provider plugin is used to calculate total sales for a person. The tooltip hint for person is ”person\_id”, but you don’t really have to know that since the PersonTooltipProvider declares a string constant, PersonKey, for this purpose. We simply refer to it in our attribute, thereby saying,”Whatever the key for person tooltips is, I represent the same thing”.

 

```
      [TooltipPlugin( "TotalSales:Person",
PersonTooltipPlugin.PersonKey)]
```

 

The class inherits from TooltipPluginBase, which is mostly concerned with parsing incoming keys. The TryGetIntHint method will return, as an int, the value part of a tooltip hint for the given key. This is a simple way to get the person id as an int as shown below.

```
      base.TryGetIntHint(PersonTooltipPlugin.PersonKey, out
personId )
```

 

Then we fetch all sales made by this person. However, if a custom query were used to fetch fewer fields it would be better in terms of performance, but this one-line method works and is extremely simple. Note the use of the GetFromIdx... method, which corresponds to an index in the database, this is will ensure avoidance of potentially expensive table scans for large tables.

If the number of sales is greater than zero, we calculate the total amount (ignoring things like currency), and return a formatted string. If not, we simply return a string saying”no sales”.  These strings will be appended to the tooltip under construction by the tooltip system, and returned to the Browser for display.

```
if( sales.Count > 0 )
{
      double totalSales = 0.0;
      foreach( SaleRow sale in sales )
            totalSales += sale.Amount;
      return string.Format( "Total sales: {0}<br/> Average
sale: {1}<br/> Number of sales: {2}", totalSales, totalSales
/ sales.Count, sales.Count );
}
else
      return "This person has no sales";
```

 

All that remains is to tell NetServer about our DLL:

```
<Factory>
  <DynamicLoad>
    <add key="MyPlugin" value="C:\\NetServer\\Server\\Feature
SIX\\bin\\Debug\\MyPlugin.dll" />
  </DynamicLoad>
</Factory>
```

 

NetServer will load the assembly; the TooltipProviderFactory will scan it for compatible plugins, and pick it up. Whenever a tooltip request comes in with the key that our plugin has declared, it will be called and is then running in-process, authenticated, with all of NetServers available.

 

See Also:

[Plugin ArchiveProvider](../../../Developer's%20Guide/Plugin%20ArchiveProviders/Plugin%20ArchiveProviders.md)
