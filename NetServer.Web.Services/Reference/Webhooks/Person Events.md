# Person Webhook Events

These webhook events are fired when person rows are changed:

* `person.created`
* `person.changed`
* `person.deleted`

# Webhook Callback Examples

```json
Content-Type: application/json; charset=utf-8
User-Agent: NetServer-Webhook/8.8.6684.1719
X-Superoffice-Event: person.created
X-Superoffice-Eventid: 576086e3-5261-426b-a84b-26ca7f5b65e8
X-Superoffice-Signature: X1FmmRIXuzH8o0MDanva1lnuNZXoix6M0US1S64s+e8=

{
  "EventId": "576086e3-5261-426b-a84b-26ca7f5b65e8",
  "Timestamp": "2018-04-24T08:01:15.8506935Z",
  "Changes": [
    "person_id",
    "usepersonaddress",
    "dbi_last_modified",
    "group_id",
    "post2",
    "department",
    "activeInterests",
    "dbi_agent_id",
    "gender",
    "country_id",
    "contact_id",
    "activeErpLinks",
    "year_of_birth",
    "userdef2_id",
    "phone_present",
    "initials",
    "userdef_id",
    "rank",
    "retired",
    "updatedCount",
    "dbi_last_syncronized",
    "sentInfo",
    "post1",
    "registered_associate_id",
    "person_number",
    "dbi_key",
    "middleName",
    "text_id",
    "updated",
    "ticketPriorityId",
    "kanalname",
    "month_of_birth",
    "lastname",
    "position_idx",
    "business_idx",
    "kanafname",
    "registered",
    "title",
    "supportLanguageId",
    "tzLocationId",
    "post3",
    "nomailing",
    "blockEmarketing",
    "firstname",
    "updated_associate_id",
    "supportAssociateId",
    "day_of_birth",
    "showContactTickets",
    "associate_id",
    "source",
    "mrmrs",
    "category_idx",
    "DeletedDate",
    "salutation"
  ],
  "Event": "person.created",
  "PrimaryKey": 1467783,
  "Entity": "person",
  "ContextIdentifier": "Cust1234",
  "ChangedByAssociateId": 316,
  "WebhookName":"Name you provided"
}
```


```json
{
  "EventId": "576086e3-5261-426b-a84b-26ca7f5b65e8",
  "Timestamp": "2018-04-24T08:01:15.8506935Z",
  "Changes": [
    "person_id",
    "year_of_birth",
    "person_number",
    "position_idx",
    "title",
    "updated",
    "updated_associate_id",
    "updatedCount"
  ],
  "Event": "person.changed",
  "PrimaryKey": 1467783,
  "Entity": "person",
  "ContextIdentifier": "Cust1234",
  "ChangedByAssociateId": 316,
  "WebhookName":"Name you provided"
}
```


```json
{
    "EventId":"88f91933-edce-4c1a-8ded-ade8e2f72434",
    "Timestamp":"2018-04-05T08:28:01.5732501Z",
    "Changes":[],
    "Event":"person.deleted",
    "PrimaryKey":18,
    "Entity":"person",
    "ContextIdentifier":"Cust54321",
    "ChangedByAssociateId":5,
    "WebhookName":"Name you provided"
}
```
