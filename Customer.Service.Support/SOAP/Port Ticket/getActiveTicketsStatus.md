<properties date="2016-06-24"
SortOrder="153"
/>

*Description*:

Returns all active tickets for the user and their read/unread status.

 

*In Parameters*:

* sessionKey                        - A valid session key

*Out Parameters*:

* errorCode  - See appendix for error codes

* ticketStatusResult - An array containing the active tickets:

* ticketId – the ticket id

* readStatus – {1=green (read), 2=yellow(new info), 3=red(unread)}

 

*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);


if (errorCode.Equals(“0”)
{

  ticket.ActiveTicketsStruct[] tickets;

  getActiveTicketsStatus(sessionKey, out tickets);

  foreach(ticket.ActiveTicketsStruct i in tickets)
  {
    cout &lt;&lt; “ticket ID:” &lt;&lt; i.ticketId &lt;&lt; endl;
    cout &lt;&lt; “read status:” &lt;&lt; i.readStatus &lt;&lt; endl;
  }

}
```
