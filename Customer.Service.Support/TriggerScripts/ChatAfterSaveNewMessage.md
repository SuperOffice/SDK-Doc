# ChatAfterSaveNewMessage (403)

Input values:

* `chatSession.topicId` = the topic this chat session belongs to
* `chatSession.userId` = ejUser id
* `chatSession.customerId` = person id
* `chatSession.customerName` = person name
* `chatSession.customerEmail` = person e-mail
* `chatSession.companyName` = company Name;
* `chatSession.customerPhone` = person Phone;
* `chatMessage.sessionId` = session
* `chatMessage.id` = message id
* `chatMessage.message` = message text
* `chatMessage.type` = type of message
* `chatMessage.specialType` = Special Type of message
* `chatMessage.specialParam` = depends on type
* `chatMessage.author` = author name

enum Type

* TypeToCustomer = 1,
* TypeToUser = 2,
* TypeSpecial = 3

enum SpecialType

* SpecialTypeNone = 0,
* SpecialTypeWelcome = 1,
* SpecialTypeUrl = 2,
* SpecialTypeBlock = 3,
* SpecialTypeNewSession = 5,
* SpecialTypeTransferedSession = 6,
* SpecialTypeError = 7,
* SpecialTypeSessionDeleted = 8,
* SpecialTypeFaqSuccessQuestion = 9,
* SpecialTypeClosedByUser = 10,
* SpecialTypeClosedByCustomer = 11,
* SpecialTypeClosedByIdle = 12,
* SpecialTypeTransferRejected = 13,
* SpecialTypeReopenedByCustomer = 14,
* SpecialTypeClickedOption = 15,
* SpecialTypeBotMessage = 16,
* SpecialTypeOptions = 17
  Message has a list of clickable options. Options are as JSON array in specialParam

## Sample code

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("chatSession.userId");
String param2 = getVariable("chatMessage.id");
String param3 = getVariable("chatMessage.message");
print("Params: " + param1 + " " + param2);
```
