---
title: Screens with user input
uid: crmscript_blogic_forms
SortOrder: 14
---

**Form elements** create user interaction through input fields. These elements may **not** contain children.

## Simple controls

* [Checkbox](@blogic_checkbox): adds a checkbox to the screen
* [Folder explorer](@blogic_tree_explorer)
* [Language menu](@blogic_language_menu): spell-checker for input fields
* [Radio button](@blogic_radiobuttons): adds a radio button to the screen
* [Text](@blogic_text): adds a single-line text input field
* [Text area](@blogic_textarea): adds an input field that can span several lines

### Buttons

When the user clicks a button in an interactive screen, something should happen. You have to create a CRMScript to describe that something.

* [Button](@blogic_button): adds a clickable button to the screen
* [Button row](@blogic_button_row)

This example shows what happens when someone clicks **Cancel** in the **Edit ticket** screen.

```crmscript
String ticketId = getVariable("entryId");
User u;
u.load(getVariable("activeUser").toInteger());

Integer actionType = getCgiVariable("actionType").toInteger();
Bool newWindow;
FHBitSet flags;
flags.set(u.getValue("flags").toInteger());

newWindow = flags.getBitNo(11);


if (ticketId.toInteger() > 0) {
  if (newWindow && (actionType == 1 || actionType == 2))
    setVariable("url", "?action=doScreenDefinition&idString=ej_closeTicket&ticketId=" + ticketId);
  else
    setVariable("url", getProgram(1) + "?action=listTicketMessages&ticketId=" + ticketId);
}
else if (getCgiVariable("custId").toInteger() > 0)
  setVariable("url", getProgram(1) + "?action=viewCustomer&id=" + getCgiVariable("custId"));
else
  setVariable("url", getProgram(1) + "?action=mainMenu");
```

## Drop-downs

* [List-box](@blogic_listbox): adds a custom drop-down list
* [MDO list](@blogic_mdolist): adds an MDO list, must specify which list you want to use
* [Related drop-downs](@blogic_related_dropdowns)

## Editors

* [CK editor](@blogic_ck_editor)
* [FCK editor](@blogic_fck_editor)
* HTML editor: **deprecated**

## Context-specific elements

These form elements are specific to some SuperOffice entities.

* [Address book](@blogic_address_book): organizes addresses in a tree view
* [Attachment](@blogic_attachment): adds an attachment field to the screen
* [Category membership](@blogic_category_membership): used to visualize (and change) which category a user belongs to
* [Contact and recipient](@blogic_contact_and_recipient): represent customers connected to a request
* [Edit entity menu](@blogic_edit_entity_menu)
* [Invoice rows](@blogic_invoice)
* [Message grid](@blogic_message_grid)
* [Recipients](@blogic_recipients)

## Select entity fields

There's a wide range of elements that add an input field to select an entity of a specific type. For example, [Select company](@blogic_select_company) and [Select sale](@blogic_select_sale).
