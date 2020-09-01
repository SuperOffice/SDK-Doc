---
title: Code structure (syntax)
uid: crmscript_fundamentals_syntax
sortOrder: 10
---

CRMScript has a set of rules that dictate how you can and can't write your code. Conventions and best practices expand on the formal syntax.

You can learn all the basic codes structures here in the fundamentals. Then check out the code quality section, learn more about the data types, dive into the advanced topics, and look up the built-in classes and functions as needed.

## Backward compatibility

CRMscript is a language under continuos improvements. Some changes might alter the behavior of the script. To account for this, the **setLanguageLevel** setting indicates which compatibility level the script should run as.

```crmscript
#setLanguageLevel 3;
```

| Level | SuperOffice version   | Description |
|:-----:|:----------------------|:------------------------------------------------------- |
| 1     |                       | Obsolete                                                |
| 2     | version 6 and earlier | Compatibility layer added for later versions            |
| 3     | version 7 and later   | No compatibility layer. Must specify the correct table. |

> [!CAUTION]
> The compatibility layer will transform some pre-7 database tables to their current equivalents. **This will affect performance!**

## Case and character set

CRMScript is case sensitive and uses the Unicode character set.

```crmscript
String userplan = "Standard";
String Userplan = "Sales";
String userPlan = "Marketing;"
```

These are 3 distinct variables because they have different casing.

CRMScript is commonly written with camel case that starts with a lower-case letter.
Structs and the built-in classes use pascal-case starting with an upper-case letter.

## Keywords

Keywords are words that have special meaning in CRMScript and can't be used to name stuff in your code.
Check the [list of reserved words](xref:crmscript_fundamentals_reserved_words) if in doubt.

## Statements

Instructions are called *statements* and are separated by semicolons (`;`).
Statements that should be executed together as a code block must be enclosed in a pair of curly braces {}.

Expressions are combinations of values/[variables](xref:crmscript_fundamentals_variables) and [operators](xref:crmscript_fundamentals_operators).

Types of statements:

* [variable](xref:crmscript_fundamentals_variables) declaration
* [assignment](xref:crmscript_fundamentals_operators)
* [struct](xref:crmscript_fundamentals_structs) definition
* [function](xref:crmscript_fundamentals_functions) definition and call
* [for](xref:crmscript_fundamentals_loops_for) and [while](xref:crmscript_fundamentals_loops_while) loops
* [conditional statements](xref:crmscript_fundamentals_if_else)

## Text and numbers

Text is written within double or single quotes. Numbers are written with or without decimals.

Learn more about [data types](xref:crmscript_fundamentals_datatypes_intro).

## Comments

Comments are explanatory text that is purposely ignored when the script is run. They are for the humans reading the code.

Comments can also be statements selectively marked to not be executed. For example, you could exclude some failing code while trying to narrow down where you problem is.

* Single-line comments start with double slashes //
* Multi-line comments are wrapped between /\* and \*/

```crmscript!
// This is a single-line comment.
Integer i = 5;
/*
This is a multi-line comment with an ignored statement.
i = i * 2;
*/
print(i.toString());
```
