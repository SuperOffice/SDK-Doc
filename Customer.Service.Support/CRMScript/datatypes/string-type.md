---
title: String data type
---

A text string is a sequence of characters written with quotes.
You can use single or double quotes, but they must always come in pairs. Quotes can also be nested, by alternating between single and double quotes.

```crmscript
String myCompany = "SuperOffice";
String myLocation = 'Oslo';
String onion = "The 'onion' has many layers.";
```

## Special characters

Some characters are part of the CRMScript syntax and must be escaped with a backslash. These are:

* Semicolon ;
* Single and double quotes "" ''
* Backslash \

```crmscript!
printLine("The reserved characters are: \; \" \' \\");
```

### Whitespace

Some characters produce whitespace and can be used to structure your text. These are:

* Backspace \b
* Newline \n
* Tab \t

## Length

The length of a text string is the number of characters in it, including whitespace. The 1st character is in position 0, similar to [arrays](../fundamentals/arrays.md).

### Integer getLength()

To find the length of a string, use the built-in `getLength()` method. It will return the number of characters as an Integer.

```crmscript!
String txt = "Wergelandsveien";
printLine(txt.getLength().toString());
```

## Case

If your script processes case-sensitive data, you probably need to validate input. Or perhaps you are preparing formatted output and need to make your subject lines and headings stand out. CRMScript has built-in capabilities for both scenarios.

### Changing case

#### String toLower()

`toLower()` will convert the string to its lower-case representation (all lower-case).

```crmscript
String s = "SuperOffice";
String sLow = s.toLower();
```

#### String toUpper()

`toUpper()` will convert the string to its upper-case representation (all upper-case).

```crmscript
String s = "SuperOffice";
String sUp = s.toUpper();
```

### Checking case

#### Bool isLower()

`isLower()` determines if the string contains lower-case characters only. Will return **true** if no upper-case characters are found, otherwise **false**.

#### Bool isUpper()

`isUpper()` determines if the string contains upper-case characters only. Will return **true** if no lower-case characters are found, otherwise **false**.

## Comparing text

### Matching exact string

You can determine if there is an exact match between 2 strings either case sensitive or ignoring any difference in upper and lower case. Both methods take the string representing your pattern as input parameter.

#### Bool equals()

Case sensitive comparison.

```crmscript!
String s1 = "apple";
String s2 = "Apple";
if (s1.equals(s2))
  print(s1 + " is identical to " + s2);
else
  print(s1 + " differs from " + s2);
```

#### Bool equalsIgnoreCase()

Case ignorant comparison. Same as using `toLower()` on both strings before calling `equals()`.

```crmscript!
String s1 = "apple";
String s2 = "Apple";
if (s1.equalsIgnoreCase(s2))
  print(s1 + " is identical to " + s2);
else
  print(s1 + " differs from " + s2);
```

### Matching start or end of a string

The pattern you wish to match against must be given as an input parameter.
The methods will return **true** if the beginning or end of your string matches the pattern, otherwise **false**.
`beginsWith()` and `endsWith()` are case sensitive, but they also have case ignorant variants.

#### beginsWith()

```crmscript!
String s1 = "apple";
String s2 = "appletree";
if (s2.beginsWith(s1))
  print(s2 + " begins with " + s1);
else
  print("No match found.");
```

To ignore case, use `caseBeginsWith()` instead.

#### endsWith()

```crmscript!
String s1 = "dog";
String s2 = "hotdog";
if (s2.endsWith(s1))
  print(s2 + " ends with " + s1);
else
  print("No match found.");
```

To ignore case, use `caseEndsWith()` instead.

### Determining lexicographic order

Strings are commonly sorted in **lexicographic order**. This is the dictionary order with 1 small exception: upper case letters precede lower case letters.

Two strings are lexicographic identical if they are the same length and they also contain the same characters in the same position.

To determine which string comes 1st, compare the corresponding characters from left to right. The 1st position where the 2 strings differ determines which string comes 1st.

* All uppercase letters come before lowercase letters. Thus *B* comes before *a*.
* If both characters have the same case, they are compared by alphabetical order. Thus *A* comes before *B*.
* If both strings contain the same characters in the same position, the shortest string comes 1st. Thus *ship* comes before *shipping*.

#### Understanding return values

| String    | Relation     | Parameter | s1.compare(s2) returns |
|-----------|--------------|-----------|------------------------|
| String s1 | less than    | String s2 | negative Integer       |
| String s1 | equal        | String s2 | zero                   |
| String s1 | greater than | String s2 | positive Integer       |

> [!NOTE]
> When s1 precedes s2, the result is negative, while when the order is s2 s1, you get a positive result. Think of it as a number axis where 0 represents identical strings. If s1 sorts 1st, it will be to the left of 0, thus negative. If s1 sorts last, it will be to the right of 0, thus positive.

#### Integer compare()

Case sensitive comparison.

```crmscript!
String s1 = "a";
String s2 = "B";
if (s1.compare(s2) < 0)  
  print(s1 + " comes before " + s2);
else if (s1.compare(s2) == 0)
  print(s1 + " is identical to " + s2);
else
  print(s2 + " comes before " + s1);
```

#### Integer caseCompare()

Case ignorant comparison. Same as dictionary or alphabetic order.

```crmscript
String s1 = "a";
String s2 = "B";
Integer sortOrder = s1.caseCompare(s2);
```

The sort order here is a, B (negative).
