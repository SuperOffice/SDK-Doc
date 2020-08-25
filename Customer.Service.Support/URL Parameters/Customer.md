<properties date="2016-06-24"
/>

The most used actions and parameters

Customer
--------

| Action      | Parameters                                                               |
|-------------|--------------------------------------------------------------------------|
|             | Parameters global for all actions<br>custSessionKey<br>noCookies<br>withFrame=1 / 0<br> templateFolder<br>|
| register    |                                                                          |
| newTicket   |                                                                          |
| listTicket  | ticketId                                                                 |
| listTickets | pageSize - The number of tickets per page                                |
| addMessage  | ticketId                                                                 |
| changeCust  |                                                                          |
| safeParse   | includeId - the id string of the script<br>key - The authentication key. This must be the same as set in the script |
| specialForm | template - the name of the template to use.                              |

Example
-------

`http://server/custsvc/customer.exe?action=listTickets&pageSize=69`

will execute the script with id 123.
