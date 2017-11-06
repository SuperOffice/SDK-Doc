---
uid: Tablechangesfrom7.1to7.5
title: Table changes from 7.1 to 7.5
---

**Renamed tables**

Table no 25: obsolete\_1 is renamed to [SORPublishGroupLink](../Tables/SORPublishGroupLink.md)
Table no 26: obsolete\_2 is renamed to [QuoteConnection](../Tables/QuoteConnection.md)
Table no 27: obsolete\_3 is renamed to [QuoteConnectionAccess](../Tables/QuoteConnectionAccess.md)
Table no 34: obsolete\_4 is renamed to [Quote](../Tables/Quote.md)
Table no 39: obsolete\_9 s renamed to [QuoteVersion](../Tables/QuoteVersion.md)
Table no 47: obsolete\_5 is renamed to [QuoteAlternative](../Tables/QuoteAlternative.md)
Table no 127: obsolete\_6 is renamed to [QuoteLine](../Tables/QuoteLine.md)
Table no 128: obsolete\_7 is renamed to [PriceList](../Tables/PriceList.md)
Table no 129: obsolete\_8 is renamed to [Product](../Tables/Product.md)

 

**New tables**

408: [ProductCategory](../Tables/ProductCategory.md)
409: [ProductCategoryGroupLink](../Tables/ProductCategoryGroupLink.md)
410: [ProductCategoryHeadingLink](../Tables/ProductCategoryHeadingLink.md)
411: [ProductFamily](../Tables/ProductFamily.md)
412: [ProductFamilyGroupLink](../Tables/ProductFamilyGroupLink.md)
413: [ProductFamilyHeadingLink](../Tables/ProductFamilyHeadingLink.md)
414: [ProductType](../Tables/ProductType.md)
415: [ProductTypeGroupLink](../Tables/ProductTypeGroupLink.md)
416: [ProductTypeHeadingLink](../Tables/ProductTypeHeadingLink.md)
417: [ErpConnector](../Tables/ErpConnector.md)
418: [ErpConnection](../Tables/ErpConnection.md)
419: [ErpConnectionActorType](../Tables/ErpConnectionActorType.md)
420: [ErpConnectionAccess](../Tables/ErpConnectionAccess.md)
421: [ConnectionConfigField](../Tables/ConnectionConfigField.md)
422: [ErpInternalKey](../Tables/ErpInternalKey.md)
423: [ErpExternalKey](../Tables/ErpExternalKey.md)
424: [ErpListItemMapping](../Tables/ErpListItemMapping.md)
425: [ErpField](../Tables/ErpField.md)
426: [ErpSyncLog](../Tables/ErpSyncLog.md)
427: [PaymentTerms](../Tables/PaymentTerms.md)
428: [PaymentTermsGroupLink](../Tables/PaymentTermsGroupLink.md)
429: [PaymentTermsHeadingLink](../Tables/PaymentTermsHeadingLink.md)
430: [PaymentType](../Tables/PaymentType.md)
431: [PaymentTypeGroupLink](../Tables/PaymentTypeGroupLink.md)
432: [PaymentTypeHeadingLink](../Tables/PaymentTypeHeadingLink.md)
433: [DeliveryTerms](../Tables/DeliveryTerms.md)
434: [DeliveryTermsGroupLink](../Tables/DeliveryTermsGroupLink.md)
435: [DeliveryTermsHeadingLink](../Tables/DeliveryTermsHeadingLink.md)
436: [DeliveryType](../Tables/DeliveryType.md)
437: [DeliveryTypeGroupLink](../Tables/DeliveryTypeGroupLink.md)
438: [DeliveryTypeHeadingLink](../Tables/DeliveryTypeHeadingLink.md)
439: [PriceUnit](../Tables/PriceUnit.md)
440: [PriceUnitGroupLink](../Tables/PriceUnitGroupLink.md)
441: [PriceUnitHeadingLink](../Tables/PriceUnitHeadingLink.md)
442: [SubscriptionUnit](../Tables/SubscriptionUnit.md)
443: [SubscriptionUnitGroupLink](../Tables/SubscriptionUnitGroupLink.md)
444: [SubscriptionUnitHeadingLink](../Tables/SubscriptionUnitHeadingLink.md)
445: [QuoteLineConfiguration](../Tables/QuoteLineConfiguration.md)
446: [SaleTypeQuoteAttachment](../Tables/SaleTypeQuoteAttachment.md)
447: [QuoteVersionAttachment](../Tables/QuoteVersionAttachment.md)
448: [ResourceOverride](../Tables/ResourceOverride.md)
449: [ErpConfiguration](../Tables/ErpConfiguration.md)
450: [EjCategoryGroupLink](../Tables/EjCategoryGroupLink.md)

 

**New fields on existing tables**

[Contact](../Tables/Contact.md)

|                    |      |                                                                                                                     |
|--------------------|------|---------------------------------------------------------------------------------------------------------------------|
| **ActiveErpLinks** | long | The number of Erp Sync connections this record is synced with; count of the ErpExternalKey+ErpInternalKey relations |

 

[Person](../Tables/Person.md)

|                    |      |                                                                                                                     |
|--------------------|------|---------------------------------------------------------------------------------------------------------------------|
| **ActiveErpLinks** | long | The number of Erp Sync connections this record is synced with; count of the ErpExternalKey+ErpInternalKey relations |

 

[Project](../Tables/Project.md)

|                    |      |                                                                                                                     |
|--------------------|------|---------------------------------------------------------------------------------------------------------------------|
| **ActiveErpLinks** | long | The number of Erp Sync connections this record is synced with; count of the ErpExternalKey+ErpInternalKey relations |

 

[Sale](../Tables/Sale.md)

|                    |      |                                                                                                                     |
|--------------------|------|---------------------------------------------------------------------------------------------------------------------|
| **ActiveErpLinks** | long | The number of Erp Sync connections this record is synced with; count of the ErpExternalKey+ErpInternalKey relations |

 

[Currency](../Tables/Currency.md)

|             |          |                                                        |
|-------------|----------|--------------------------------------------------------|
| **isoCode** | VarWChar | ISO currency code, see <http://www.xe.com/iso4217.php> |

 

[DocTmpl](../Tables/DOCTMPL.md)

|        |                        |                                                                                                                                               |
|--------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| long   | loadTemplateFromPlugin | If nonzero, then this is the ID of the document plugin that should supply the template document file, instead of the default so\_arc/template |
| ushort | quoteDocType           | The role this document plays in the Quote system, if any                                                                                      |

 

[SaleType](../Tables/SALETYPE.md)
|          |                              |                                                                                                                                                            |     |
|----------|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|
| ushort   | allowQuoteAlternatives       | Can quotes linked to sales of this type, have multiple Alternatives                                                                                        |     |
| long     | defaultQuoteValidity         | Default valid days for quotes linked to sales of this type (valid from quote transmission)                                                                 |     |
| longid   | quoteLinesTemplate           | The template that this sale type should use when producing the product lines offer document the template must have DocTmplQuoteType=QuoteLines             |     |
| ushort   | maxDiscountPercentSet        | Is there a limit, in percent, to the total discount on quotes linked to sales of this type                                                                 |     |
| ushort   | minEarningPercentSet         | Is there a limit, in earning as percent of total, on quotes linked to sales of this type                                                                   |     |
| long     | maxDiscountPercent           | The maximum discount in percent of total, if set, on quotes linked to sales of this type                                                                   |     |
| long     | minEarningPercent            | The minimum earning in percent of total, if set, on quotes linked to sales of this type                                                                    |     |
| longid   | confirmationLinesTemplate    | The template that this sale type should use when producing the order confirmation lines document the template must have DocTmplQuoteType=ConfirmationLines |     |
| wchar\_t | documentGroupingFields\[60\] | Comma-separated names of grouping fields for quote lines, when generating the documents                                                                    |     |
| wchar\_t | archiveGroupingFields\[60\]  | Comma-separated names of grouping fields for quote lines, in the quote lines archive                                                                       |     |

 

[Role](../Tables/Role.md)

|        |                 |                                                         |
|--------|-----------------|---------------------------------------------------------|
| ushort | use\_categories | Override user categories with role categories (CS role) |

 

[ej\_category](../Tables/ej_category.md)

|          |                             |                                                                                                             |
|----------|-----------------------------|-------------------------------------------------------------------------------------------------------------|
| wchar\_t | notification\_email\[2048\] | Comma separated list of addresses to notify when requests are redelegated to (unassigned) in this category. |

 

[ej\_message](../Tables/ej_message.md)

|        |       |                                                                                                   |
|--------|-------|---------------------------------------------------------------------------------------------------|
| longid | inbox | The id of the inbox entry which created this message. Note: inbox entries are regularily deleted. |

 

[ticket](../Tables/ticket.md)

|            |                               |                                                                                                                                                          |
|------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| ushort     | origin                        | What is the origin of this ticket                                                                                                                        |
| long       | time\_spent\_internally       | The total time (seconds) within the priority's office hours the ticket has been in an open status (configurable), not including current state            |
| long       | time\_spent\_externally       | The total time (seconds) within the priority's office hours the ticket has been in a external waiting status (configurable), not including current state |
| long       | time\_spent\_queue            | The total time (seconds) within the priority's office hours the ticket has been in a queue status, not including current state                           |
| long       | real\_time\_spent\_internally | The total time (seconds) within 24x7 the ticket has been in an open status (configurable), not including current state                                   |
| long       | real\_time\_spent\_externally | The total time (seconds) within 24x7 the ticket has been in a external waiting status (configurable), not including current state                        |
| long       | real\_time\_spent\_queue      | The total time (seconds) within 24x7 hours the ticket has been in a queue status, not including current state                                            |
| DbDateTime | time\_spent\_calculated       | When the time\_spent value was last calculated.                                                                                                          |
| long       | num\_replies                  | The number of replies (messages) to the customer for this request.                                                                                       |
| long       | num\_messages                 | The total number of messages for this request.                                                                                                           |

 

[ticket\_status](../Tables/ticket_status.md)

|        |                   |                                                                          |
|--------|-------------------|--------------------------------------------------------------------------|
| ushort | time\_counter     | Which field in ticket we count time spent on (queue, internal, external) |
| ushort | deleted           | Whether the status is deleted (unavailable) or not                       |
| ushort | no\_email\_reopen | Whether inbound emails can reopen requests with this status or not       |

 

[mail\_in\_filter](../Tables/mail_in_filter.md)

|        |                       |                                                              |
|--------|-----------------------|--------------------------------------------------------------|
| ushort | autofaq               | Whether to suggest FAQ entries for this email account or not |
| longid | autofaq\_kb\_category | The root folder for the auto faq search.                     |

 

[extra\_fields](../Tables/extra_fields.md)

|          |                     |                                                      |
|----------|---------------------|------------------------------------------------------|
| wchar\_t | description\[2048\] | Optional description of what this field is used for. |

 

[extra\_tables](../Tables/extra_tables.md)

|          |                     |                                                     |
|----------|---------------------|-----------------------------------------------------|
| wchar\_t | description\[2048\] | Optional description of what this table is used for |

 

[extra\_menus](../Tables/extra_menus.md)

|          |                    |                                                                                    |
|----------|--------------------|------------------------------------------------------------------------------------|
| wchar\_t | extra\_info\[256\] | Field used for various extra information depending on menu type                    |
| ushort   | base\_program      | Base program used in url (ticket, rms, ...)                                        |
| longid   | extra\_table       | ExtraTable that the menu is connected to                                           |
| longid   | group\_id          | Link to extra\_menus table if this menu item is to be shown in a custom menu group |

 

[role\_category](../Tables/role_category.md)

|        |           |              |
|--------|-----------|--------------|
| longid | crm\_role | Link to Role |

 

[role\_element](../Tables/role_element.md)

|        |           |              |
|--------|-----------|--------------|
| longid | crm\_role | Link to Role |

 

[role\_workflow](../Tables/role_workflow.md)

|        |           |              |
|--------|-----------|--------------|
| longid | crm\_role | Link to Role |

 

[s\_shipment](../Tables/s_shipment.md)

|          |                       |                                                                 |
|----------|-----------------------|-----------------------------------------------------------------|
| wchar\_t | envelope\_from\[256\] | Email address for the MTA envelope (where bounces are returned) |

 

[s\_link](../Tables/s_link.md)

|            |                               |                                                                                                                                                      |
|------------|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| ushort     | action\_flags                 | Bitmask defining what action should be taken                                                                                                         |
| longid     | add\_contact\_interest        | Contact interest to add to recipient person                                                                                                          |
| longid     | remove\_contact\_interest     | Person interest to remove from recipient person                                                                                                      |
| longid     | add\_person\_interest         | Person interest to add to recipient person                                                                                                           |
| longid     | remove\_person\_interest      | Person interest to remove from recipient person                                                                                                      |
| longid     | add\_contact\_selection       | Static contact selection to add person to                                                                                                            |
| longid     | remove\_contact\_selection    | Static contact selection to remove person from                                                                                                       |
| longid     | add\_project                  | Project to add person to, as member                                                                                                                  |
| longid     | remove\_project               | Project to remove person from, as member                                                                                                             |
| wchar\_t   | task\_text\[2048\]            | Text of task to be created                                                                                                                           |
| longid     | task\_idx                     | Task type of new task                                                                                                                                |
| ushort     | task\_flags                   | Flags that control how the task is created                                                                                                           |
| longid     | task\_associate\_id           | Associate whose diary should receive the task or assignment (unless AssignToOurContact is specified)                                                 |
| longid     | task\_creating\_associate\_id | Associate who should stand as creator of task also works as fallback if an assigned task is rejected. Usually the associate who ordered the shipment |
| longid     | task\_project                 | Project to connect task to, can be 0                                                                                                                 |
| DbDateTime | task\_start                   | Start time of task, unless UseNextAvailableTime is specified                                                                                         |
| long       | task\_duration                | Task duration in minutes                                                                                                                             |

 

[s\_link\_customer](../Tables/s_link_customer.md)

|          |                          |                                                                   |
|----------|--------------------------|-------------------------------------------------------------------|
| wchar\_t | http\_user\_agent\[256\] | The HTTP\_USER\_AGENT reported when the customer opened this link |

 

[s\_link\_customer\_statical](../Tables/s_link_customer_statical.md)

|          |                          |                                                                   |
|----------|--------------------------|-------------------------------------------------------------------|
| wchar\_t | http\_user\_agent\[256\] | The HTTP\_USER\_AGENT reported when the customer opened this link |

 

[s\_shipment\_addr](../Tables/s_shipment_addr.md)

|            |               |                                                   |
|------------|---------------|---------------------------------------------------|
| ushort     | status        | Status for sending to this particular recipient   |
| longid     | contact\_id   | Id of contact bound to shipment address           |
| DbDateTime | sending\_time | Estimated or actual sent time (depends on status) |

 

[s\_list\_shipment](../Tables/s_list_shipment.md)

|        |        |                         |
|--------|--------|-------------------------|
| ushort | status | Status of shipment list |

 

[screen\_definition](../Tables/screen_definition.md)

|          |                     |                                                      |
|----------|---------------------|------------------------------------------------------|
| wchar\_t | description\[2048\] | Optional description of what this screen is used for |

 

[scheduled\_task](../Tables/scheduled_task.md)

wchar\_t
description\[2048\]
Optional description of what this task is used for.

 

[ejscript](../Tables/ejscript.md)

|          |                           |                                                       |
|----------|---------------------------|-------------------------------------------------------|
| wchar\_t | long\_description\[2048\] | Optional description of what this script is used for. |

 [sms](../Tables/sms.md)

|        |                       |                                                                                            |
|--------|-----------------------|--------------------------------------------------------------------------------------------|
| longid | outgoing\_message\_id | Reference to the outgoing message entry created by netserver for sending and status update |

 

[external\_document](../Tables/External_document.md)

|        |            |                                                                     |
|--------|------------|---------------------------------------------------------------------|
| longid | s\_message | Relation to s\_message if this document is an image in a newsletter |

 

[outgoing\_message](../Tables/OUTGOING_MESSAGE.md)

|            |                           |                      |
|------------|---------------------------|----------------------|
| DbDateTime | registered                | Registered when      |
| longid     | registered\_associate\_id | Registered by whom   |
| DbDateTime | updated                   | Last updated when    |
| longid     | updated\_associate\_id    | Last updated by whom |