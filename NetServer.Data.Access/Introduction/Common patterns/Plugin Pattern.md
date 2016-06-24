<properties date="2016-05-11"
SortOrder="8"
/>

These patterns interact with the main application in order to provide a certain, very specific function on-demand. The NetServer application provides services that can be used by the plugin. The plugins are dependent on the services provided by the NetServer and does not usually work by themselves. Many of the big functionality areas in NetServer such as Lists, Archives, Tooltips, GUI Configuration, Search Operators and many more are implemented using plugins.

The plugin concept of NetServer can be described as follows.

* A public interface of the class is defined with an attribute that in effect says, “I am a plugin of this type“.
* Write the required class with the necessary attributes.
* Write a Factory that locates any class that implements the given interface and are marked with its attributes.

The result of the above plugin concept is that you can add implementation without changing the NetServer code, which will be picked up automatically by the NetServer.

Another advantage is that the Factory scans assemblies on startup, so the overhead is concentrated there and the rest of the time there is minimal extra costs.

In order for you to understand the concept of plugins used by NetServer, we have constructed an example using the Tooltip provider plugin.

<img src="../Concept%20Plugin%20pattern,%20Factory%20pattern_files/image001.jpg" width="243" height="134" /> Tooltips are nice, especially when they show a lot of information. But such tools can be expensive and it is impossible to pre-calculate all of them in advance. Instead, we may use a tooltip hint.

The following image is a tooltip hint for the person\_id 123.

When the tooltip needs to be displayed, the tooltip service is called with the tooltip hint as the parameter. The tooltip providers – plugins, do the translation of the hint to the actual tooltip. The TooltipProviderFactory will call all the plugins that declare that they support the given hint in sequence.

If you create your own provider, it can do anything and add it to the tooltip. This will be reflected in all instances of the Person tooltips in the whole application.

```
using SuperOffice.CRM.Tooltips;
using SuperOffice.CRM.Rows;
 
//TooltipPlugin is the Attribute used to indicate that the class is
a //Tooltip Provider Plugin. The class need to implemnt the
//SuperOffice.CRM>Tooltips.ITooltipProviderPlugin interface.
[TooltipPlugin( "TotalSales:Person",
PersonTooltipPlugin.PersonKey)]
 
//All plugins should implement the IPlugin interface. In the case
of
//the example below TooltipPluginBase inherits from the IPlugin
interface
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

 

This example shows how a tooltip provider plugin is used to calculate total sales for a person. The tooltip hint for person is”person\_id”, but you do not really have to know that since the PersonTooltipProvider declares a string constant, PersonKey, for this purpose. We simply refer to it in our attribute, thereby saying,”Whatever the key for person tooltips is, I represent the same thing”.

The class inherits from TooltipPluginBase, which is mostly concerned with parsing incoming keys. The TryGetIntHint() method will return, as an int, the value part of a tooltip hint for the given key. This is a simple way to get the person id as an int.

Then we fetch all sales made by this person. However, if a custom query were used to fetch fewer fields it would be better in terms of performance, but this one-line method works and is extremely simple. Note the use of the GetFromIdx... method, which corresponds to an index in the database, this is will ensure avoidance of potentially expensive table scans for large tables.

If the number of sales is greater than zero, we calculate the total amount (ignoring things like currency), and return a formatted string. If not, we simply return a string saying”no sales”.  These strings will be appended to the tooltip under construction by the tooltip system, and returned to the Browser for display.

All that remains is to tell NetServer about our DLL using the config file:

```
<Factory>
  <DynamicLoad>
    <add key="MyPlugin" value="C:\NetServer\Server\Feature
SIX\bin\Debug\MyPlugin.dll" />
  </DynamicLoad>
</Factory>
```

 

NetServer will load the assembly; the TooltipProviderFactory will scan it for compatible plugins, and pick it up. Whenever a tooltip request comes in with the key that our plugin has declared, it will be called and is then running in process, authenticated, with all of NetServers available.
