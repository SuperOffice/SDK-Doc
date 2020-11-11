# ChatSessionChangedStatus (401)

Called when session changes status.
Equivalent to webhook 'chatsession.changed'

Input values:

* `chatSession.id` = the session id
* `chatSession.status` = new status

Status values:

* StatusInvalid = 0,
* StatusPreChatForm = 1,
* StatusFaq = 2,
* StatusOfflineForm = 3,
* StatusInQueue = 4,
* StatusCustomerLast = 5,
* StatusUserLast = 6,
* StatusFinished = 7,
* StatusDeleted = 8,
* StatusClosed = 9,
* StatusRequestPosted = 10,
* StatusClosedFromQueue = 11

## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("chatSession.id");
```
