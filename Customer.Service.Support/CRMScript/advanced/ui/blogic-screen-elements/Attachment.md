---
title: Attachment
uid: blogic_attachment
sortOrder: 1
---

This element adds the attachment field to your screen.

## Configuration values

| Value             | Description                             |
|:------------------|:----------------------------------------|
| multiple          | allows uploading of several attachments |
| noHardDelete      | will not delete the actual attachment from the database, only from the attachment component |

## Example

```crmscript
multiple = true
```

## Functions

### setValue(String ids)

The string should contain a comma-separated list of attachment IDs

### setFieldValue("addAttachment", Map values)

The map should contain a key named **attachmentId** and the value of the attachment ID.

> [!TIP]
> To add multiple attachments, use `setFieldValue` once for each attachment.

### toInteger()

Returns the ID of a field.

### toString()

Returns a comma-separated list with IDs of all attachments.
