<properties date="2016-06-24"
/>

The most used actions and parameters

Ticket
------

Action
Parameters
listTicket
ticketId - The ticket you want to open
listTickets
newTicket
custId - The customer you want to connect the ticket to
editTicket
ticketId - The ticket you want to edit
listTicketLog2
ticketId
doScreenDefinition
id - The id to the screen
idString - the id string to the screen. Either id or idString must be supplied
viewTableEntry
table
extraTable
id
editTableEntry
searchTable
table - the table
selectionIncludeId - the idString of a selection selection - the id of a selection
mainMenu
 
editCompany
id
editCustomer
id
splitTicket
ticketId
splitMessage
messageId
Example
-------

`http://server/custsvc/Ticket.exe?action=editCompany&id=123`

will display the edit screen for company with id 123.
