# Project Events

These events are fired when project rows are changed:

* `project.created`
* `project.changed`
* `project.deleted`

# Webhook Callback Examples

```json
Content-Type: application/json; charset=utf-8
User-Agent: NetServer-Webhook/8.8.6684.1719
X-Superoffice-Event: project.created
X-Superoffice-Eventid: e87ac619-c864-4881-89eb-07ca5521ee2c
X-Superoffice-Signature: X1FmmRIXuzH8o0MDanva1lnuNZXoix6M0US1S64s+e8=

{
  "EventId": "e87ac619-c864-4881-89eb-07ca5521ee2c",
  "Timestamp": "2018-04-24T08:18:42.089895Z",
  "Changes": [
    "project_id",
    "text_id",
    "tzLocationId",
    "postitText_id",
    "activeErpLinks",
    "userdef2_id",
    "status_idx",
    "nmdAppointment_id",
    "registered",
    "endDate",
    "type_idx",
    "source",
    "activeLinks",
    "associate_id",
    "group_id",
    "done",
    "soundEx",
    "updated",
    "userdef_id",
    "updated_associate_id",
    "project_number",
    "nextMilestoneDate",
    "updatedCount",
    "registered_associate_id",
    "name"
  ],
  "Event": "project.created",
  "PrimaryKey": 178105,
  "Entity": "project",
  "ContextIdentifier": "Default",
  "ChangedByAssociateId": 316,
  "WebhookName": "Name you provided"
}
```

```json
{
  "EventId": "e87ac619-c864-4881-89eb-07ca5521ee2c",
  "Timestamp": "2018-04-24T08:18:42.089895Z",
  "Changes": [
    "project_id",
    "endDate",
    "type_idx",
    "associate_id",
    "group_id",
    "updated",
    "updated_associate_id",
    "updatedCount"
  ],
  "Event": "project.changed",
  "PrimaryKey": 178105,
  "Entity": "project",
  "ContextIdentifier": "Default",
  "ChangedByAssociateId": 316,
  "WebhookName": "Name you provided"
}
```

```json
{
  "EventId": "e87ac619-c864-4881-89eb-07ca5521ee2c",
  "Timestamp": "2018-04-24T08:18:42.089895Z",
  "Changes": [],
  "Event": "project.deleted",
  "PrimaryKey": 178105,
  "Entity": "project",
  "ContextIdentifier": "Default",
  "ChangedByAssociateId": 316,
  "WebhookName": "Name you provided"
}
```
