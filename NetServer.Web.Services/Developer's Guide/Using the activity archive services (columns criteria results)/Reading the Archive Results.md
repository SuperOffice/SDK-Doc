<properties date="2016-06-24"
SortOrder="9"
/>

Once all parameters have been created we may use them with the GetArchiveListByColumns() method which returns an array of ArchiveListItem. The next step we need to do is to loop through the above array. This is done by using a foreach loop.

```
      foreach (KeyValuePair<string, ArchiveColumnData> column 
                  in archiveRow.ColumnData)
      {
            Console.Write(column.Key + "\t");
      }
```

 

What is done by the above code segments is that for each column type which is a Key/Value pair it writes the key of it. Since this segment is used inside the “If” statement the code piece will be executed only when the loop is run for the first time. The intended purpose of the above is to display the column headings.

The archiveRow.ColumnData is a dictionary of column data items. Each column data item contains a display value, a tooltip hint, a link hint, and an ordinary value. The display values are encoded by the CultureDataFormatter and can be decoded/localized by that class. All other values are optional. Tooltip hints can be passed into the TooltipProvider (Tooltip service) to be translated into an actual tooltip.

An important point to remember!

**CultureDataFormatter** – This is the helper class designed to encode, parse and reformat culturally sensitive data types between an application server without culture knowledge and a front end with such knowledge.

**Tooltip Provider** – This is the one-stop shop for asynchronous tooltips. This class takes in a tooltip hint and through the static method converts it into a tooltip.

The second for loop is the one that actually retrieves the data from the database.

```
      foreach (ArchiveColumnData archiveCell 
            in archiveRow.ColumnData.Values)
      {
            Console.Write(archiveCell.DisplayValue + "\t");
      }
```

 

Here we make use of the ArchiveRow.ColumnData’s DisplayValue property which is the visible display value for an archive cell. This is always a String and any other data type should be converted to it according to the invariant culture.

```
foreach (ArchiveListItem archiveRow in arcLstItm)
      {
            if (rowNo == 1)
            {
                  foreach (KeyValuePair<string, ArchiveColumnData> column in archiveRow.ColumnData)
                  {
                        Console.Write(column.Key + "\t");
                  }
                  Console.WriteLine();
            }
 
            // extract and display the displayValue of each cell (you need to parse culturally sensitive values such as dates
            // to get the correct client display format)
            foreach (ArchiveColumnData archiveCell in archiveRow.ColumnData.Values)
            {
                  Console.Write(archiveCell.DisplayValue + "\t");
            }
            Console.WriteLine();
            ++rowNo;
      }    
```

 

Following is the output returned once the above code has been executed.

```
person/fullName  contact/name    associate/fullName   currency    saleId
0-Feil           Software AS     Brede Bredesen       SEK         [I:19]
0-Feil           Software AS     Arne Arnesen         SEK         [I:10]   0-Feil        Software AS    Arne Arnesen         NOK         [I:9]
0-Feil           Software AS     Arne Arnesen         NOK         [I:8]
0-Feil           Software AS     Arne Arnesen         SEK         [I:7]
```

 

See Also:

[Archive services](../Archive%20Services/Archive%20Services.md)

 

 
