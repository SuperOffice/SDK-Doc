<properties date="2016-06-24"
SortOrder="190"
/>

The methods can return various error codes. Here is a list of all with a description (the same description as you would get with **getErrorMessage()**:

 

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Value</p></td>
<td><p>Name</p></td>
<td><p>Description</p></td>
</tr>
<tr class="even">
<td><p>0</p></td>
<td><p>SoapErrorNoError</p></td>
<td><p>No Error</p></td>
</tr>
<tr class="odd">
<td><p>1</p></td>
<td><p>SoapErrorIncorrectLoginCustomer</p></td>
<td><p>Customer could not be logged in: User name or password was incorrect.</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>SoapErrorIncorrectLoginUser</p></td>
<td><p>User could not be logged in: User name or password was incorrect.</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>SoapErrorUnknownCustomer</p></td>
<td><p>Customer could not be identified by the customers user name.</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>SoapErrorInsufficientRights</p></td>
<td><p>The user does not have sufficient rights to perform this operation.</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>SoapErrorInvalidSessionKey</p></td>
<td><p>The session key provided has either expired or is corrupted.</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>SoapErrorOperationIllegal</p></td>
<td><p>The operation is not permitted on this system.</p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>SoapErrorCustomError</p></td>
<td><p>Custom error, no error message available.</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>SoapErrorInvalidCategory</p></td>
<td><p>The specified category is invalid.</p></td>
</tr>
<tr class="odd">
<td><p>9</p></td>
<td><p>SoapErrorInvalidPriority</p></td>
<td><p>The specified priority is invalid.</p></td>
</tr>
<tr class="even">
<td><p>10</p></td>
<td><p>SoapErrorInvalidSLevel</p></td>
<td><p>The specified security level is invalid.</p></td>
</tr>
<tr class="odd">
<td><p>11</p></td>
<td><p>SoapErrorInvalidDomain</p></td>
<td><p>The domain should be either 'company', 'customer' or 'ticket'</p></td>
</tr>
<tr class="even">
<td><p>12</p></td>
<td><p>SoapErrorInvalidExtraField</p></td>
<td><p>The extra field specified is invalid or does not exist.</p></td>
</tr>
<tr class="odd">
<td><p>13</p></td>
<td><p>SoapErrorUnknownTicket</p></td>
<td><p>The ticket could not be found, or you do not have access to it.</p></td>
</tr>
<tr class="even">
<td><p>14</p></td>
<td><p>SoapErrorUserNameExists</p></td>
<td><p>You can not create this user because the user name is already in use</p></td>
</tr>
<tr class="odd">
<td><p>15</p></td>
<td><p>SoapErrorEmptyPassword</p></td>
<td><p>The password you supplied was empty</p></td>
</tr>
<tr class="even">
<td><p>16</p></td>
<td><p>SoapErrorUnknownAttachment</p></td>
<td><p>The attachment specified is invalid or does not exist.</p></td>
</tr>
<tr class="odd">
<td><p>17</p></td>
<td><p>SoapErrorInvalidField</p></td>
<td><p>The field you specified is illegal, or unknown.</p></td>
</tr>
<tr class="even">
<td><p>18</p></td>
<td><p>SoapErrorUnknownMessage</p></td>
<td><p>The message you requested is not accessible or non existing</p></td>
</tr>
<tr class="odd">
<td><p>19</p></td>
<td><p>SoapErrorNoLicense</p></td>
<td><p>The system is licensed for the requested functionality/module</p></td>
</tr>
<tr class="even">
<td><p>20</p></td>
<td><p>SoapErrorInvalidFaqCategory</p></td>
<td><p>The category you requested is inaccessible or unknown.</p></td>
</tr>
<tr class="odd">
<td><p>21</p></td>
<td><p>SoapErrorInvalidFaqEntry</p></td>
<td><p>The FAQ entry you requested is inaccessible or unknown.</p></td>
</tr>
<tr class="even">
<td><p>22</p></td>
<td><p>SoapErrorFaqScoreOutOfRange</p></td>
<td><p>The score must have a value ranging from 0 to 10.</p></td>
</tr>
<tr class="odd">
<td><p>23</p></td>
<td><p>SoapErrorUnknownLanguage</p></td>
<td><p>The language specified does not exist.</p></td>
</tr>
<tr class="even">
<td><p>24</p></td>
<td><p>SoapErrorAttachmentInUse</p></td>
<td><p>The attachment you tried to remove was in use.</p></td>
</tr>
<tr class="odd">
<td><p>25</p></td>
<td><p>SoapErrorInvalidFaqGroup</p></td>
<td><p>The FAQ group specified does not exist.</p></td>
</tr>
<tr class="even">
<td><p>26</p></td>
<td><p>SoapErrorNotificationViolation</p></td>
<td><p>The notifications for this user is being read by someone else. Another Agent?</p></td>
</tr>
<tr class="odd">
<td><p>27</p></td>
<td><p>SoapErrorFileNotFound</p></td>
<td><p>The file was not found on the server</p></td>
</tr>
<tr class="even">
<td><p>28</p></td>
<td><p>SoapErrorIllegalCriterias</p></td>
<td><p>The criterias you specified is illegal.</p></td>
</tr>
<tr class="odd">
<td><p>29</p></td>
<td><p>SoapErrorInvalidOwner</p></td>
<td><p>The owner you specified is invalid or non existing</p></td>
</tr>
<tr class="even">
<td><p>30</p></td>
<td><p>SoapErrorUnknownCompany</p></td>
<td><p>The company you specified was not found</p></td>
</tr>
<tr class="odd">
<td><p>31</p></td>
<td><p>SoapErrorUnknownCustomerId</p></td>
<td><p>The customer you specified was not found</p></td>
</tr>
<tr class="even">
<td><p>32</p></td>
<td><p>SoapErrorUnknownTicketStatus</p></td>
<td><p>The specified ticket status is illegal.</p></td>
</tr>
<tr class="odd">
<td><p>33</p></td>
<td><p>SoapErrorUnknownExtraTable</p></td>
<td><p>The specified extra table does not exist</p></td>
</tr>
<tr class="even">
<td><p>34</p></td>
<td><p>SoapErrorUnknownUserId</p></td>
<td><p>The specified user does not exist</p></td>
</tr>
<tr class="odd">
<td><p>35</p></td>
<td><p>SoapErrorUserNotFound</p></td>
<td><p>The user was not found</p></td>
</tr>
</tbody>
</table>
