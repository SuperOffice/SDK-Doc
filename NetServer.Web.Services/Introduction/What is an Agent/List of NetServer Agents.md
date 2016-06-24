<properties date="2016-06-24"
SortOrder="6"
/>

An Agent An Agent exposes many different service calls. Each service will operate on one type of carrier. Below is a list of all the Agents exposed in the NetServer API.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Agent</p></td>
<td><p>Description</p></td>
</tr>
<tr class="even">
<td><p> AgentBase&lt;T&gt;</p></td>
<td><p>This is the ultimate base class of all service agents</p></td>
</tr>
<tr class="odd">
<td><p>AppointmentAgent </p></td>
<td><p>AppointmentAgent is a collection of services that helps to manipulate appointment data.</p></td>
</tr>
<tr class="even">
<td><p>ArchiveAgent </p></td>
<td><p>ArchiveAgent returns results as an archive list or a page of data with chosen columns from the archive, based on a specified restriction.</p></td>
</tr>
<tr class="odd">
<td><p> AssociateAgent </p></td>
<td><p>AssociateAgent returns an array of Strings or Associate objects that belongs to a person who is an Associate.</p></td>
</tr>
<tr class="even">
<td><p>BLOBAgent</p></td>
<td><p>BLOBAgent provides a collection of operations that work on BLOB entities.</p></td>
</tr>
<tr class="odd">
<td><p>ConfigurationAgent</p></td>
<td><p>ConfigurationAgent retrieves configuration details for a specific webpage or the whole application.</p></td>
</tr>
<tr class="even">
<td><p>ContactAgent</p></td>
<td><p>ContactAgent provides a collection of services that work with company contact data.</p></td>
</tr>
<tr class="odd">
<td><p>DiagnosticsAgent</p></td>
<td><p>The agent flushes all NetServer caches.</p></td>
</tr>
<tr class="even">
<td><p>DocumentAgent</p></td>
<td><p>This agent contains a collection of services that works with document data which are handled by the BLOB service methods.</p></td>
</tr>
<tr class="odd">
<td><p>EMailAgent</p></td>
<td><p>The EMailAgent provides a collection of services that work with emails.</p></td>
</tr>
<tr class="even">
<td><p>FindAgent</p></td>
<td><p>The agent is capable of saving restriction, which could be later used as search criteria, and then retrieving information from a set of saved criteria while executing a find operation, which returns a page of results.</p></td>
</tr>
<tr class="odd">
<td><p>ForeignSystemAgent</p></td>
<td><p>ForeignSystemAgent is collection of services that work with foreign key data.</p></td>
</tr>
<tr class="even">
<td>LicenseAgent</td>
<td>LicenseAgent provides a collection of services that work with license information.</td>
</tr>
<tr class="odd">
<td><p>ListAgent</p></td>
<td><p>This is a collection of services that work with different lists such as Dropdown lists, Check box lists, etc.</p></td>
</tr>
<tr class="even">
<td><p>MDOAgent</p></td>
<td><p>MDOAgent contains a service that retrieves a flat or selectable MDO list with its own history and restrictions.</p></td>
</tr>
<tr class="odd">
<td><p>NavigatorAgent</p></td>
<td><p>The agent is capable of returning either a NavigatorCompany object or an array of NavigatorCompany objects.</p></td>
</tr>
<tr class="even">
<td><p>PersonAgent</p></td>
<td><p>PersonAgent is a collection of services that helps to manipulate person’s data.</p></td>
</tr>
<tr class="odd">
<td><p>PhoneListAgent</p></td>
<td><p>The agent contains a collection of services that are used when searching for an employee or company phone number.</p></td>
</tr>
<tr class="even">
<td>PreferenceAgent</td>
<td>PreferenceAgent provides a collection of services that work with preferences.</td>
</tr>
<tr class="odd">
<td><p>ProjectAgent</p></td>
<td><p>ProjectAgent is a collection of services that works with project data.</p></td>
</tr>
<tr class="even">
<td>RelationAgent</td>
<td>RelationAgent provides a collection of services that work with company relation information.</td>
</tr>
<tr class="odd">
<td>ReplicationAgent </td>
<td>ReplicationAgent provides a collection of services that work with replication functions.</td>
</tr>
<tr class="even">
<td><p>SaleAgent</p></td>
<td><p>SaleAgent is a collection of services that work with sale data.</p></td>
</tr>
<tr class="odd">
<td><p>SelectionAgent</p></td>
<td><p>SelectionAgent contains a collection of data that work with SelectionEntities.</p></td>
</tr>
<tr class="even">
<td>SentryAgent</td>
<td> </td>
</tr>
<tr class="odd">
<td><p>TooltipsAgent</p></td>
<td><p>This contains a collection of services that work with tool tips.</p></td>
</tr>
<tr class="even">
<td>UserAgent</td>
<td>UserAgent provides a collection of services that work with associate user information.</td>
</tr>
<tr class="odd">
<td>UserDefinedFieldInfoAgent</td>
<td>UserDefinedFieldInfoAgent provides a collection of services that work with user-defined field data.</td>
</tr>
<tr class="even">
<td><p>ViewStateAgent</p></td>
<td><p>ViewStateAgent contains a collection of services that work with data related to the current logged in user.</p></td>
</tr>
</tbody>
</table>

All Agent implementations live in the SuperOffice.CRM.Services.Implementation namespace and DLL.
