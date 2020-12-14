---
uid: webhooks_crmscript
SortOrder: 1
---
# CrmScript Webhooks

Webhooks can also target CrmScripts, not just URLs on the internet. The webhook will call your CrmScript directly, passing the id and changed values to the script as parameters.

First you need to create a CrmScript to handle the event:

```crmscript
#setLanguageLevel 3;
String param1 = getVariable("PrimaryKey");
String param2 = getVariable("Event");
String param3 = getVariable("Changes.name");
print("Params: " + param1 + " " + param2);
print("Name = " + param3 );
```

Save the script with a unique id `ScriptHook1`.

We then need to create a hook that will call this script:

``` json
POST /api/v1/Webhook
Content-Type: application/json

{
  "Name": "CrmScript Handler",
  "Events": [
        "contact.created",
        "contact.changed"
    ],
  "Type": "crmscript",
  "TargetUrl": "ScriptHook1",
  "State": "Active"
}
```

This adds a hook that will call our script whenever a new contact is created or changed. The script is identified using the unique id as the `TargetUrl` value.
We must set the type to `crmscript` and the rest is as for a webhook - we need to give it a name and a list of events to listen for.

Unlike webhooks, a script hook gets the values of the changed fields, not just the names of the changed fields as parameters.

Parameters passed to the CrmScript:

* ChangedByAssociateId
* Changes.(fieldname)
* ContextIdentifier
* Entity
* Event
* EventId
* PrimaryKey
* Timestamp
* any properties defined on the webhook

CrmScript hooks are run in the background, without access to the user interface. They do not block the users action, so they are low-impact from the end-users perspective. They may run some time after the triggering event, since webhooks are dispatched on a background thread.


## Get all webhooks with CrmScript

Note that applications in Online can only see the webhooks they themselves create. Therefore, when you call GetAllWebhooks in CrmScript, you will only see the webhooks created by CrmScript in Service. 
 
```crmscript
#setLanguageLevel 3;

NSWebhookAgent webhookAgent;
NSWebhook[] webhooks = webhookAgent.GetAllWebhooks("","",0);

for(Integer i = 0; i < webhooks.length(); i++) {
  Integer state = webhooks[i].GetState();
  printLine("Name: " + webhooks[i].GetName());
  printLine("ID: " + webhooks[i].GetWebhookId().toString());
  printLine("State: " + state.toString());
  printLine("Secret: " + webhooks[i].GetSecret());
  printLine("TargetUrl: " + webhooks[i].GetTargetUrl());
  printLine("Registered By: " + webhooks[i].GetRegisteredAssociate().GetName());
  printLine("Registered Date: " + webhooks[i].GetRegistered().toString());
  printLine("Updated By: " + webhooks[i].GetUpdatedAssociate().GetName());
  printLine("Updated Date: " + webhooks[i].GetUpdated().toString());
  printLine("Type: " + webhooks[i].GetType());
  printLine("Events:");
  String[] events = webhooks[i].GetEvents();
  for(Integer i = 0; i < events.length(); i++) {
  	printLine("-  " + events[i]);
  }
  
  // delete when not needed
  //webhookAgent.DeleteWebhook(webhooks[i].GetWebhookId());
  printLine("****************************************************************");
}
```

## Create a webhook from CrmScript

This will create a CrmScript hook from CrmScript.

```crmscript
#setLanguageLevel 3;

/*
 * Create a new webhook to subscribe to person events.
 */

String targetUrl = "YOUR_CRMSCRIPT_INCLUDE_NAME";

NSWebhookAgent webhookAgent;
NSWebhook webhook = webhookAgent.CreateDefaultWebhook();

String[] events = String("person.created,person.changed,person.deleted").split(",");
webhook.SetEvents(events);
webhook.SetName("Person Webhook from CRMScript");
webhook.SetType("crmscript");
webhook.SetTargetUrl(targetUrl);

webhook = webhookAgent.SaveWebhook(webhook);
 
printLine("Webhook succeeded with ID: " + webhook.GetWebhookId().toString());
``` 
