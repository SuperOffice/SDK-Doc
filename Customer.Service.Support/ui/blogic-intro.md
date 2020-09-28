---
title: Introduction to custom screens
uid: crmscript_blogic_intro
SortOrder: 10
---

**Blogic** is a system for designing screens and displaying content in SuperOffice Service.

**Custom screens** are based on a set of [screen elements](@blogic_elements) (controls) such as text, date, grid, and CRMScript. There are 3 types of screen elements:

* View elements: [displays info](@crmscript_blogic_view) (read-only)
* Form elements: creates [user interaction](@crmscript_blogic_forms) with input fields
* Group elements: creates a hierarchy of elements and determines the [layout of the screen](@crmscript_blogic_layout)

With scripts, you can:

* process the form data of a screen - for example, to create a request or send an email

* construct and modify a screen that requires a more dynamic layout - for example, add an element only if the customer is of a specific category

## Screen properties

**Screen properties** are a combination of settings and CRMScripts.

> [!TIP]
> You can set **hidden variables** to be saved when the screen is submitted so the next screen has access to them.

### Settings

| Setting            | Description                                    |
|:-------------------|:-----------------------------------------------|
| Folder             | Optional for organizing screens                |
| Name               | A descriptive name (UI label): mandatory<br/>Keep in mind that it becomes the heading on your screen |
| ID string          | A unique ID for the screen, referenced in URLs<br/>It's considered best practice to set it |
| Authentication key | Required when running a custom screen without being logged in as a user        |
| Warn on navigate   | Whether to give a warning when the user leaves a page with unsaved data (Bool) |
| Use auto-save      | Whether to turn on automatic save (Bool)       |

### Loading scripts

You can use scripts to precalculate variables from for example a form entry or CGI variables that the screen obtains via a URL.

| Script                    | Description                                                       |
|:--------------------------|:------------------------------------------------------------------|
| before setFromCgi         | A script run before the screen elements are assigned their values |
| after setFromCgi          | A script run after the screen elements are assigned their values  |
| run after everything else | A script run at the end, after code and scripts for any buttons have been run|

Read more about [screen events](@crmscript_screen_events_and_hook_scripts).

## Element properties

**Element properties** are a combination of settings (simple values) and CRMScripts.

### Simple values

Most elements have configuration options. These are specific to the different types of elements (for example, title and name).

> [!TIP]
> You can look up available settings for a specific element under the *Configuration* heading in the [element reference](@blogic_elements).

Each option is written as a **key-value** pair in the **Simple values** tab of the element.

```crmscript
key = value
key2 = value2
key3 = value3
```

Each line is interpreted independent of the other lines. Note that there's **no semicolon or comma at the end** of lines. You can use our [line-based query syntax](@crmscript_blogic_query_syntax) to specify values.

Keys are automatically sorted alphabetically when you save an element.

### Body

Many elements have a **body**, which can be quite long. Settings for the element body are set in the **Body** tab, not the **Simple values** tab.

The body is a CRMScript. It can:

* print any HTML to the screen using `print()`
* retrieve any configuration variable using `getVariable()` (v. 4.11)

### Creation scripts

A **creation script** builds the element and populates it with data. It consists of 2 parts:

* An initial call to `addHtmlElement()` - default
* Your extension, which tailors the element and pulls in data

You'll see the default code when you open the **Creation Script** tab of an element.

```crmscript
addHtmlElement(getScreenElementId(screenElementIndex),
  getScreenElementName(screenElementIndex),
  getScreenElementType(screenElementIndex),
  getScreenElementConfig(screenElementIndex));
```

To extend the default code, you'll be using database queries and the functions supported by that element. It might look something like this:

1. Get a reference to the element by declaring a variable of type `HtmlElement` and assigning the object returned by `addHtmlElement()`

2. Create a `SearchEngine` object and [specify your query](@search_engine_select).

3. [Run the query](@search_engine_run).

4. [Loop over the result](@search_engine_results). For each row:
    * Create a [Map](@crmscript_datatypes_map).
    * Add key-value pairs to the map.
    * Add the map to the element using one of the elements functions.

> [!TIP]
> You can look up available functions for a specific element under the *Functions* heading in the [element reference](@blogic_elements).

## Creating a custom screen

1. Sign in to SuperOffice Service.
2. From the hamburger menu, select **System Design** and then select **Screens**.
3. Click **New screen**.
4. Enter screen properties (name is mandatory) and click **OK**.
5. Add elements.
6. Click **OK** to save your screen.
7. Toggle preview to test your current screen.
8. Set up a [screen chooser](@crmscript_screen_choosers).

## Adding an element

1. Click **New element**.
2. Select an [element type](@blogic_elements) and enter element properties.
3. Add config in the **Simple values** tab.
4. Click **Apply**.
5. Select the **Creation script tab.
6. Set which data to display by extending the script.
7. Click **Apply**.

> [!TIP]
> Click **Apply** after selecting an element type. This adds information the selected element to the **Help** tab.
