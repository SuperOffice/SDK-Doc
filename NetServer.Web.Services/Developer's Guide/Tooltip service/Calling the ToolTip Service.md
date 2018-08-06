<properties date="2016-06-24"
SortOrder="6"
/>

The examples below show how we can retrieve the tooltips for different business objects in SuperOffice.

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //create a tooltip agent
    using(TooltipsAgent toolTipAgent = new TooltipsAgent())
    {
        //using the GetTooltip  method the tooltip agent retrive the
        //tooltip for contact id 5
        string ContactToolTip = toolTipAgent.GetTooltip("{contact_id=5}");
        //show the output
        Console.WriteLine(ContactToolTip);
    }
}
 
Output
{contact_id=5}
Bjørge AS, BAvdeling
B-gaten 45
04
Kunde
Admin Adminson
```

 

Here we can see that we have used the GetToolTip method of the tooltip agent to retrieve the tooltip we want; in the above case it is the tooltip of a contact. The few examples given below also use the same method to retrieve the tooltip. And also they will show what should be the parameter for the GetToolTip method.

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //create a tooltip agent
    using(TooltipsAgent toolTipAgent = new TooltipsAgent())
    {
        //using the GetTooltip  method the tooltip agent retrive the
        //tooltip for contact id 5
        string personToolTip = toolTipAgent.GetTooltip("{person_id=9}");
        //show the output
        Console.WriteLine(personToolTip);
    }
}
 
Output
{person_id=9}
Admin Adminson
(ADMIN - Administrasjon)
StateZeroDatabase
Norway
qa.testbruker@superoffice.com
```

 

An Important point to remember!

The tooltip service returns language-independent strings. The SuperOffice.CRM.Web.UI.ToolTipHelper class turns the tooltip string into HTML.

 

```
using SuperOffice;
using SuperOffice.CRM.Services;
 
using (SoSession mySession = SoSession.Authenticate("SAL0", ""))
{
    //create a tooltip agent
    using(TooltipsAgent toolTipAgent = new TooltipsAgent())
    {
        //using the GetTooltip  method the tooltip agent retrive the
        //tooltip for contact id 5
        string appointmentTooltip =
        toolTipAgent.GetTooltip("{appointment_id=59}");
        //show the output
        Console.WriteLine(appointmentTooltip);
    }
}
```

 

Output

```
{appointment_id=59}
Yngve Yssen (Yngve'S Fisk & Vilt, YAvdeling)
Prösjöökt
Telefon ut
[SR_DONE]: [DT:08/07/2002 14:39:56.0000000]
BTelefon utBBB
([DT:03/31/2002 18:00:00.0000000] - [DT:03/31/2002 18:15:00.0000000])
Brede Bredesen  [DT:08/07/2002 12:39:47.0000000], Brede Bredesen [DT:08/07/2002 12:39:56.0000000]
```

 

 

 

 

 

An important point to remember!

The parameter of the GetTooltip must be specified using the following syntax (“{person_id=10}”). The key part of the parameter should be the primary key of the database table concerning the SuperOffice business object. The key is used to find the appropriate tooltip plugins on the server to provide the actual tooltip result. If you want to provide your own tooltips on your own tables, then you need to use your own tooltip key and id. You will also need to create your own tooltip provider Plugin. For example for Contact it should be the primary key of the contact table in the SuperOffice database.
