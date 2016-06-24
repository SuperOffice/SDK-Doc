<properties date="2016-06-24"
SortOrder="99"
/>

An Entity Carrier is an entity object. Unlike in read-only carriers an Entity Carrier exposes its properties as objects that are populated with more detailed data. The properties will expose their own properties since the properties in entity objects are objects themselves. The example below displays how to load a Contact Entity Object using a Contact Agent.

 

 

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>using SuperOffice.CRM.Services;</p>
<p> </p>
<p>ContactAgent contactAgent = new ContactAgent();</p>
<p>ContactEntity myContact = contactAgent.GetContactEntity(4);</p>
<p>string myContactName = myContact.Name;</p>
<p>string myContactCategory = myContact.Category.Value;</p>
<p>string myContactWebUrl = myContact.Urls.Length &gt; 0 ? myContact.Urls[0].Value : &quot;&quot;;</p>
<p> </p></td>
</tr>
<tr class="even">
<td><p><a href=""></a><a href="">Figure 3.             Example to Create a Contact Entity Object Item Using a Contact Agent</a></p></td>
</tr>
</tbody>
</table>

 

The above example displays how to retrieve a Contact Entity through the GetContactEntity method of the Contact Agent.

 

 

 

 

 

 

 

 

 
