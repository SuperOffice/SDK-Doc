# NetServer Artchive Providers

From low-level Objectified-SQL to higher-level business Entities, SuperOffice integrations have several ways to access to SuperOffice data. Complete access to the database through web services, however, is subject to all kinds of security threats and therefore is not a simple problem to solve. Archive providers were later introduced as a means to execute complex queries through web services in a secure and easy-to-user manner, and this article describes how to use them. 

## What is an Archive Provider

Fundamentally, an archive providers is similar to a database view. They each have a unique name, expose a fixed-set of selectable fields and mask their join logic. Underneath the hood lies a dynamic system that, based on the requested fields, only creates joins that are absolutely necessary. This of course increases query performance and throughput.

An Archive provider is determined by three main properties:

1.  Archive Name
2.  Available Entities
3.  Available Columns

Entities add a dimension that database views do not possess. They act as an additional filtering capability. For example, not all, but several archive providers return rows that are of multiple types. This means that a single query can return rows of details that represent several differenct types of rows like appointment, sale and document. On providers that support multiple entities, it possible to tell the provider to only return one or two types of rows, and ignore the rest.

Executing complex queries requires a way to specify criteria, and archive providers do this with Archive Restrictions.

There is a long list of archive providers that give access to virtually the entire database. Some of the most common are the Find providers.

*   FindAppointment Archive Provider
*   FindContact Archive Provider
*   FindDocument Archive Provider
*   FindProject Archive Provider
*   FindSale Archive Provider
*   FindSelection Archive Provider

Please [see the NetServer documentation](https://community.superoffice.com/documentation/SDK/SO.NetServer.Data.Access/html/1e692fa5-44a2-4a3c-a783-bc538d375821.htm) for a complete list of available archive providers.

## How to Perform an Archive Provider Query

While archive providers make complex queries possible through web services, they of course work in and with their lower-level data types executed in the belly NetServer.

This section presents a demonstration how to query an archive provider both using the core NetServer API, as well as the NetServer Web Services API.

Both examples represent a query that selects all sales where the sale project id is set to 47.

### NetServer Core

``` CSharp

    // specify the name and instantiate the archive provider

    IArchiveProvider provider = ArchiveProviderFactory.Create("FindSale");

    // set the desired fields

    provider.SetDesiredColumns("saleId", "heading");

    // set the desired entities

    provider.SetDesiredEntities("sale");

    // set the paging information

    provider.SetPagingInfo(50, 0);

    // specify and set the criteria restriction

    provider.SetRestriction(new ArchiveRestrictionInfo("projectId", "=", "47"));

    // execute the query and iterate over the results

    foreach (ArchiveRow row in provider.GetRows(""))
    {
        int saleId     = (int)row.ColumnData["saleId"].RawValue;
        string heading =      row.ColumnData["heading"].RawValue.ToString();

        Console.WriteLine("SaleId {0}, Heading {1}",
                    saleId,
                    heading);
    }

    // remember to close the provider to release resources
    provider.Close();
```

### NetServer Web Services

``` CSharp
    // Instantiate the FindAgent web service proxy class

    using (FindAgent fa = new FindAgent())
    {

        // specify the archive provider name

        string providerName = "FindSale";

        // set the desired fields

        string[] columns = { "saleId", "heading", "projectId" };

        // specify the criteria restriction

        ArchiveRestrictionInfo[] restrictions =
        {
            new ArchiveRestrictionInfo() 
            { 
                Name = "projectId", 
                Operator = "=", 
                Values = new [] {"47"}, 
                IsActive = true 
            }
        };

        // execute the query and get the results

        var results = fa.FindFromRestrictionsColumns(
                            restrictions, 
                            providerName, 
                            columns, 
                            50, 
                            0);

        // ensure there are results and iterate over the them
        if (   results != null 
            && results.ArchiveRows != null 
            && results.ArchiveRows.Length > 0   )
        {
            foreach (var row in results.ArchiveRows)
            {
                var saleId    = row.ColumnData["saleId"].DisplayValue;
                var heading   = row.ColumnData["heading"].DisplayValue;

                Console.WriteLine("SaleId {0}, Heading {1}",
                    SuperOffice.CRM.Globalization.CultureDataFormatter.
                    ParseEncodedInt(saleId).ToString(),
                    heading.ToString());
            }
        }

    }
```

There are suble differences between core and web services API’s, but for the most part they are the same. One of the biggest differences is how value types are returned, i.e. integers, Double and DateTime.

## Encoded Values

With core NetServer, the archive row column data contains a RawValue property of type Object, and can safely be cast to the appropriate type.

Using NetServer web services, it depends on whether you are using SuperOffice proxies or not. If you are, the RawValue property contains the column value. If not, only the DisplayValue exists.

With the exception of string column values, DisplayValue always contains an encoded string that represents the column values. We recommend you use `SuperOffice.CRM.Globalization.CultureDataFormatter` class to handle these encoded values. As seen in the web services API example, SuperOffice.CRM.Globalization.CultureDataFormatter easily parses and returns the column value in the correct data type.

An encoded value is always a string of characters in the format: [data-type-marker : value], i.e. [I:3]. Columns that are of type string will never be in an encoded format.

The data type marker indicates the column data type followed by a colon, then the column data value. The following table lists all encodings.

<table class="table table-striped table-bordered">

<thead>

<tr>

<th>Data Type</th>

<th>Marker</th>

<th>Example</th>

</tr>

</thead>

<tbody>

<tr>

<td>Binary</td>

<td>B</td>

<td>[B:X98…]</td>

</tr>

<tr>

<td>Date</td>

<td>D</td>

<td>[D:09.11.2017]</td>

</tr>

<tr>

<td>DateTime</td>

<td>DT</td>

<td>[DT:11/09/2017 14:53:18]</td>

</tr>

<tr>

<td>Double, Decimal</td>

<td>F</td>

<td>[F:123.4]</td>

</tr>

<tr>

<td>Int</td>

<td>I</td>

<td>[I:123]</td>

</tr>

<tr>

<td>Money</td>

<td>M</td>

<td>[M:123.45]</td>

</tr>

<tr>

<td>Time</td>

<td>T</td>

<td>[T:14:52]</td>

</tr>

<tr>

<td>String</td>

<td> </td>

<td>“Not encoded”</td>

</tr>

</tbody>

</table>

For each data type, CultureDataFormatter has a static Encode and ParseEncoded method, for example:

*   string = CultureDataFormatter.EncodeInt(int),
*   int = CultureDataFormatter.ParseEncodedInt(string)

Although query restrictions do not have to encode parameter values when settings each restriction, they are allowed and NetServer knows how to detect and process them accordingly.

## Data Aggregation

In addition to specifying desired column names, providers accept aggregate functions as column parameters. These are called and referred to as aggregate columns.

Aggregate columns are extremely useful when the results need to be transformed in a structured way. Aggregate columns can also nest other aggregate functions.

### Aggregate Functions:

<table class="table table-striped table-bordered">

<thead>

<tr>

<th>Function</th>

<th>Description</th>

<th>Example</th>

</tr>

</thead>

<tbody>

<tr>

<td>Avg</td>

<td>Average of all values.</td>

<td>Avg(amount)</td>

</tr>

<tr>

<td>Count</td>

<td>Count unique values</td>

<td>Count(saleId)</td>

</tr>

<tr>

<td>CountAll</td>

<td>Count all values, even duplicates</td>

<td>CountAll(appointmentId)</td>

</tr>

<tr>

<td>CurrencyConvert</td>

<td>Convert numbers in amountcol, understood to be in currency set by currencycol to the Base currency, users Own currency, or don’t convert.</td>

<td>CurrencyConvert(amountcol;currencycol):Base or Own or None</td>

</tr>

<tr>

<td>DatePart</td>

<td>DateModifiers:, - Year, Quarter, Month, Day, DayOfYear - simple numbers,- ISODate, ISODateHour : formatted strings, - DayOfWeek, DayOfWeekFromMonday, Weekno, YearWeekno, YearWeekAsISODate : week functions, - YearQuarter, YearMonth : string: number/number</td>

<td>DatePart(date):YearMonth</td>

</tr>

<tr>

<td>Expression</td>

<td>Expects two or more fields, only supports Multiply modifier.</td>

<td>Expression(amount;probabilityPercent):Multiply</td>

</tr>

<tr>

<td>GroupBy</td>

<td>Controls processing and is independent of query OrderBy</td>

<td>GroupBy(stage)</td>

</tr>

<tr>

<td>Median</td>

<td>Returns the middle number. Values expect to be integer or double type.</td>

<td>Median(quantity)</td>

</tr>

<tr>

<td>Percent</td>

<td>Returns a percentage of the accumulated value of a field. Values can be integer or double.</td>

<td>Percent(progProbability)</td>

</tr>

<tr>

<td>Sum</td>

<td>Total accumulated amount of a field. Values can be integer or double.</td>

<td>Sum(quantity)</td>

</tr>

<tr>

<td>Weighted</td>

<td>Multiply numbers in amountcol by the percentage in the weightcol</td>

<td>Weighted(amountcol;weightcol)</td>

</tr>

</tbody>

</table>

Data transformations can be as simple returning a running count of a column, or as complex as including nested groups; with the use of multiple GroupBy functions. The default ouput of every archive provider are rows that include the specified detail columns.

### Default row output

<table class="table table-striped table-bordered" style="width: 664px; height: 26px;">

<thead>

<tr>

<th>Detail Row =></th>

<th>Column1</th>

<th>Column2</th>

<th>Column3</th>

<th>Column4</th>

</tr>

</thead>

</table>

However, hidden as an option is the GrandTotal row. GrandTotal is a reserved placeholder for returning aggregate results, such as a total count or total sum.

When specified in a providers GetRows method, i.e. `provider.GetRows("GrandTotal=True")`, the grand total row is output as the very last row. This is useful to display the results of one or more aggregate columns.

### <a id="Default_row_output_with_GrantTotal_202"></a>Default row output with GrandTotal

<table class="table table-striped table-bordered" style="width: 657px; height: 91px;">

<thead>

<tr>

<th>Detail Row1 =>  
Detail Row2 =></th>

<th>Column1  
Column1</th>

<th>Column2  
Column2</th>

<th>Column3  
Column3</th>

<th>Column4  
Column4</th>

</tr>

</thead>

<tbody>

<tr>

<td>_GrandTotal Row_ =></td>

<td>Function1</td>

<td>Function2</td>

<td> </td>

<td> </td>

</tr>

</tbody>

</table>

### <a id="Aggregate_Function_Modifiers_208"></a>Aggregate Function Modifiers

Function modifiers are used to set the behavior or output of an aggregate function. An aggregate function can include one or more modifiers, and the format is as follows:

`FunctionName(columnName)[:Modifer[,Modifier]...]`

<table class="table table-striped table-bordered">

<thead>

<tr>

<th>Modifer</th>

<th>Description</th>

<th>Used by:</th>

</tr>

</thead>

<tbody>

<tr>

<td>HideDetail</td>

<td>Removes running value in the detail rows.</td>

<td>All Functions</td>

</tr>

<tr>

<td>Base</td>

<td>Use the base currency.</td>

<td>ConvertCurrency</td>

</tr>

<tr>

<td>Own</td>

<td>Use the associates set currency.</td>

<td>ConvertCurrency</td>

</tr>

<tr>

<td>None</td>

<td>Do not convert to a different currency.</td>

<td>ConvertCurrency</td>

</tr>

<tr>

<td>Multiply</td>

<td>Perform multiplication on column.</td>

<td>Expression</td>

</tr>

<tr>

<td>Header</td>

<td>Generates a header row when this group level key changes</td>

<td>GroupBy</td>

</tr>

<tr>

<td>Footer</td>

<td>Generates a footer row when this group level key changes</td>

<td>GroupBy</td>

</tr>

<tr>

<td>Integer</td>

<td>A number the nested level this key belongs to; default is 1</td>

<td>GroupBy</td>

</tr>

</tbody>

</table>

HideDetail is commonly used when calculation results should only appear in the Header, Footer and GrandTotal rows. Given the example `Count(SaleId):HideDetail`, the HideDetail modifier instructs the provider to not include this desired column in the row.ColumnData collection.

It only makes sense to output headers or footers row when results are grouped. Therefore, the Header, Footer and an Integer modifers are only used together with GroupBy.

The Integer modifer is literally a number that specifies the nest level of a group. The first GroupBy function has a defaul level value of 1 and is not required. in a Using integer is only useful when there are more than one

<table class="table table-striped table-bordered">

<thead>

<tr>

<th style="width: 40%;">Function and Modifier</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>Count(columnName):HideDetail</td>

<td>Count but hide in detail row. Available in GrandTotal, Headers and Footers</td>

</tr>

<tr>

<td>GroupBy(columnName):Header</td>

<td>Display header row for this group for each unique value</td>

</tr>

<tr>

<td>GroupBy(columnName):Footer</td>

<td>Display footer row for this group for each unique value</td>

</tr>

<tr>

<td>GroupBy(columnName):Footer,HideDetail</td>

<td>Display footer row for this group for each unique value, Remove the detail rows</td>

</tr>

<tr>

<td>GroupBy(columnName):Header,Footer,1</td>

<td>Display first level of header and footer rows for each unique value</td>

</tr>

<tr>

<td>GroupBy(columnName):Header,Footer,2</td>

<td>Display nested level of header and footer rows under first level for each unique value</td>

</tr>

</tbody>

</table>

Below are two examples that demonstrate how to use the count function to:

1.  display the accumulative sale count.
2.  use with a HideDetail modifier to save the output for the GrantTotal row.

### Example: Using Count(“saleId”)

``` CSharp
    IArchiveProvider provider = ArchiveProviderFactory.Create("FindSale");

    provider.SetDesiredColumns("Count(saleId)", "saleId", "heading");
    provider.SetDesiredEntities("sale");
    provider.SetPagingInfo(50, 0);

    ArchiveRestrictionInfo[] restrictions = {
        new ArchiveRestrictionInfo("projectId", "=", "47")
    };

    provider.SetRestriction(restrictions);

    foreach (ArchiveRow row in provider.GetRows(""))
    {
        int count      = (int)row.ColumnData["Count(saleId)"].RawValue;
        int saleId     = (int)row.ColumnData["saleId"].RawValue;
        string heading =      row.ColumnData["heading"].RawValue.ToString();

        Debug.WriteLine("{0}) SaleId: {1}, Heading: {2}",
                    count,
                    saleId,
                    heading);
    }

    // remember to close the provider to release resources
    provider.Close();
``` 

Example Output:

    1) SaleId: 1, Heading: SalgAAAA
    2) SaleId: 5, Heading: SalgWAAW
    3) SaleId: 6, Heading: SalgØAAØ
    4) SaleId: 12, Heading: SalgGBBG
    5) SaleId: 16, Heading: SalgÅBBÅ
    6) SaleId: 21, Heading: SalgCDDC
    7) SaleId: 24, Heading: SalgSDDS
    8) SaleId: 25, Heading: SalgYDDY
    9) SaleId: 33, Heading: SalgOFFO
    10) SaleId: 37, Heading: Salg4FF4
    11) SaleId: 40, Heading: SalgEHHE
    12) SaleId: 43, Heading: SalgUHHU
    13) SaleId: 49, Heading: SalgKGGK
    14) SaleId: 51, Heading: Salg0GG0

Each row includes the result of the Count(saleId) function, and is accessed just like normal detail columns in the row.ColumnData collection.

The following example includes the “GrandTotal=True” option in the GetRows method. This acts as a signal to save the results of all functions with the HideDetail modifier and include them as available columns in the final row output. When set, the final row RowType is “grandtotal”.

### Example: Using Count(“saleId”):HideDetail with GrandTotal

``` CSharp
    IArchiveProvider provider = ArchiveProviderFactory.Create("FindSale");

    provider.SetDesiredColumns("Count(saleId):HideDetail", "saleId", "heading");
    provider.SetDesiredEntities("sale");
    provider.SetPagingInfo(50, 0);

    ArchiveRestrictionInfo[] restrictions = {
        new ArchiveRestrictionInfo("projectId", "=", "47")
    };

    provider.SetRestriction(restrictions);

    foreach (ArchiveRow row in provider.GetRows("GrandTotal=True"))
    {
        if(row.RowType == "grandtotal")
        {
            int count = (int)row.ColumnData["Count(saleId):HideDetail"].RawValue;

            Debug.WriteLine("Total Project 47 Sales: {0}", count);
        }
        else
        {
            int saleId = (int)row.ColumnData["saleId"].RawValue;
            string heading = row.ColumnData["heading"].RawValue.ToString();

            Debug.WriteLine("SaleId: {0}, Heading: {1}", saleId, heading);
        }

    }

    // remember to close the provider to release resources
    provider.Close();
```

Example Output:

    SaleId: 1, Heading: SalgAAAA
    SaleId: 5, Heading: SalgWAAW
    SaleId: 6, Heading: SalgØAAØ
    SaleId: 12, Heading: SalgGBBG
    SaleId: 16, Heading: SalgÅBBÅ
    SaleId: 21, Heading: SalgCDDC
    SaleId: 24, Heading: SalgSDDS
    SaleId: 25, Heading: SalgYDDY
    SaleId: 33, Heading: SalgOFFO
    SaleId: 37, Heading: Salg4FF4
    SaleId: 40, Heading: SalgEHHE
    SaleId: 43, Heading: SalgUHHU
    SaleId: 49, Heading: SalgKGGK
    SaleId: 51, Heading: Salg0GG0
    Total Project 47 Sales: 14

When using the GrandTotal option, the results outputs a final row that facilitates access to all aggregate functions that were specified with the HideDetails modifier. This becomes useful for displaying a summary of the query results.

> Note: A detail RowType will _not_ say row.RowType=detail. Instead, then RowType of a detail row is equal to the entity name that the row represents, i.e. contact, project, sale, etc.

## Structured Aggregation Output With GroupBy

Probably the most powerful aggregate function, GroupBy provides the capability to band query results into rigid report-like structures. With capabilitities that span aggregation-only to combined to detail only, it’s a flexible tool that can be used in a couple different ways.

Strict aggregation-only use is most similar to the SQL _GROUP BY_ statement, where it arranges the query results into groups of rows, usually for the purpose of performing one or more aggregations on each group. Nearly all of widgets in SuperOffice Dashboards use this form of aggregation to display results.

Using the archive provider _appointmentdynamicselection_, construct a query that will count all activities for the current user for the past month and group them by type.

Use the Count function to count each unique appointmentId, and use the HideDetail modifier to remove the column from the detail rows. Then use the GroupBy function to divide the query results into activity types. Use the Footer modifier to output a footer row that contains the count and type columns for each group. Also append the HideDetails modifier to not return any detail rows; just the footer rows.

``` CSharp
    // use selection provider to get all my completed activities this month

    var provider = ArchiveProviderFactory.Create("appointmentdynamicselection");

    // Set the aggregate functions to get how many of each, grouped by type

    provider.SetDesiredColumns(
       "Count(appointmentId):HideDetail",
       "GroupBy(type):Footer,HideDetail"
       );

    provider.SetDesiredEntities("appointment");
    provider.SetPagingInfo(100, 0);

    // specifiy the restrictions

    provider.SetRestriction(
       new ArchiveRestrictionInfo("endDate", ">", CultureDataFormatter.EncodeDate(DateTime.Now.AddMonths(-1))),
       new ArchiveRestrictionInfo("associateId", "currentAssociate", ""),
       new ArchiveRestrictionInfo("completed", "set", "1"),
       new ArchiveRestrictionInfo("selectionId", "=", "-1")
       );

    // fetch the rows

    foreach (var row in provider.GetRows(""))
    {
       var activityType  =      row.ColumnData["GroupBy(type):Footer,HideDetail"].RawValue.ToString();
       var activityCount = (int)row.ColumnData["Count(appointmentId):HideDetail"].RawValue;
    }
```

The results are one row for each activity type and occurance count.

### Query output:

<table class="table table-striped table-bordered" style="width: 805px; height: 125px;">

<thead>

<tr>

<th>Rowno</th>

<th>Row type</th>

<th>Count(appointmentId):HideDetail</th>

<th>GroupBy(type):Footer,HideDetail</th>

</tr>

</thead>

<tbody>

<tr>

<td>0 (1)</td>

<td>[footer:1]</td>

<td>4</td>

<td>Meeting (Internal)</td>

</tr>

<tr>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>1 (2)</td>

<td>[footer:1]</td>

<td>1</td>

<td>Phone-Out</td>

</tr>

</tbody>

</table>

Similar to reports, combined aggregation results use GroupBy functions together with other columns, both aggregate and non-aggregate, to display Header and Footer, and Detail rows. For example, a new group of rows is created everytime a GroupBy column value changes, dividing the results into one or more Header - Details - Footer rows. Modifiers are used to control where aggregation columns reside and become accessible.

An rows’ RowType property determines if the output is a normal detail row, header row, footer row, or grandtotal row.

<table class="table table-striped table-bordered" style="width: 613px; height: 168px;">

<thead>

<tr>

<th style="text-align: right;">Row Types:</th>

<th> </th>

<th> </th>

<th> </th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align: right;">**header**</td>

<td>Function</td>

<td>Function</td>

<td>Function</td>

</tr>

<tr>

<td style="text-align: right;">**detail**</td>

<td>Column Data</td>

<td>Column Data</td>

<td>Column Data</td>

</tr>

<tr>

<td style="text-align: right;">**footer**</td>

<td>Function</td>

<td>Function</td>

<td>Function</td>

</tr>

<tr>

<td style="text-align: right;">**grandtotal**</td>

<td>Function</td>

<td>Function</td>

<td>Function</td>

</tr>

</tbody>

</table>

To demonstrate the concepts, create a query that uses the person archive provider and set the desired columns to include the firstName, middleName, lastName and rank, then set the restriction to where the contactId equals 24\. Next, create three aggregate columns that do the following:

*   Sum the rank column for display in details.
*   Count all of the occurances of firstName for display in details.
*   Group the results by middleName, and make this column available in both the header and footer, but hide in detail rows.

``` CSharp
    var provider = ArchiveProviderFactory.Create(PersonProvider.ProviderName);

    provider.SetDesiredColumns(
       "firstName", 
       "middleName", 
       "lastName", 
       "rank", 
       "Sum(rank)",
       "CountAll(firstName)", 
       "GroupBy(middleName):Header,Footer"
    );

    provider.SetDesiredEntities("person");
    provider.SetPagingInfo(100, 0);
    provider.SetRestriction(new ArchiveRestrictionInfo("contactId", "=", CultureDataFormatter.Encode(24)));

    foreach (var row in provider.GetRows(string.Empty))
    {
       //parse the results.
    }

``` 

### Sample Data:

<table class="table table-striped table-bordered" style="width: 476px; height: 202px;">

<thead>

<tr>

<th>Company Name: Superoso</th>

<th>_5 employees_</th>

<th> </th>

<th> </th>

</tr>

</thead>

<tbody>

<tr>

<td>**First Name**</td>

<td>**Middle Name**</td>

<td>**Last Name**</td>

<td>**Rank**</td>

</tr>

<tr>

<td>Jane</td>

<td>Ray</td>

<td>Doe</td>

<td>1</td>

</tr>

<tr>

<td>Billy</td>

<td>Ray</td>

<td>Doe</td>

<td>2</td>

</tr>

<tr>

<td>Bobby</td>

<td>Sue</td>

<td>Doe</td>

<td>3</td>

</tr>

<tr>

<td>Mary</td>

<td>Sue</td>

<td>Smith</td>

<td>4</td>

</tr>

<tr>

<td>Tabby</td>

<td>Sue</td>

<td>Smith</td>

<td>5</td>

</tr>

</tbody>

</table>

Using the sample data, the results are divided into two distinct groups. The first group contains all persons with the middle name Ray and the second group contains all people with the middle name Sue.

Every time the middle name changes, the results will create and output a new band of header, detail and footer rows. According to the specification, two of the aggregate columns are available in the detail rows, but the GroupBy column is only available in the header and footer rows of each band.

## Query Output

<table class="table table-striped table-bordered" style="width: 883px; height: 348px;">

<thead>

<tr>

<th>Rowno (id)</th>

<th>Row type</th>

<th style="text-align: center;">GroupBy(middleName):  
HideDetail,Header,Footer</th>

<th style="text-align: center;">CountAll(firstName)</th>

<th style="text-align: center;">fName</th>

<th style="text-align: center;">lName</th>

<th style="text-align: center;">mName</th>

<th style="text-align: center;">rank</th>

<th style="text-align: center;">Sum(rank)</th>

</tr>

</thead>

<tbody>

<tr>

<td>0 (1)</td>

<td>[header:1]</td>

<td style="text-align: center;">Ray</td>

<td style="text-align: center;">2</td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;">3</td>

</tr>

<tr>

<td>1 (324)</td>

<td>[person]</td>

<td style="text-align: center;"> </td>

<td style="text-align: center;">1</td>

<td style="text-align: center;">Jane</td>

<td style="text-align: center;">Doe</td>

<td style="text-align: center;">Ray</td>

<td style="text-align: center;">1</td>

<td style="text-align: center;">1</td>

</tr>

<tr>

<td>2 (325)</td>

<td>[person]</td>

<td style="text-align: center;"> </td>

<td style="text-align: center;">2</td>

<td style="text-align: center;">Billy</td>

<td style="text-align: center;">Doe</td>

<td style="text-align: center;">Ray</td>

<td style="text-align: center;">2</td>

<td style="text-align: center;">3</td>

</tr>

<tr>

<td>3 (1)</td>

<td>[footer:1]</td>

<td style="text-align: center;">Ray</td>

<td style="text-align: center;">2</td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;">3</td>

</tr>

<tr>

<td>--------</td>

<td>--------</td>

<td style="text-align: center;">--------</td>

<td style="text-align: center;">--------</td>

<td style="text-align: center;">--------</td>

<td style="text-align: center;">--------</td>

<td style="text-align: center;">--------</td>

<td style="text-align: center;">--------</td>

<td style="text-align: center;">--------</td>

</tr>

<tr>

<td>4 (2)</td>

<td>[header:1]</td>

<td style="text-align: center;">Sue</td>

<td style="text-align: center;">3</td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;">12</td>

</tr>

<tr>

<td>5 (326)</td>

<td>[person]</td>

<td style="text-align: center;"> </td>

<td style="text-align: center;">1</td>

<td style="text-align: center;">Bobby</td>

<td style="text-align: center;">Doe</td>

<td style="text-align: center;">Sue</td>

<td style="text-align: center;">3</td>

<td style="text-align: center;">3</td>

</tr>

<tr>

<td>6 (327)</td>

<td>[person]</td>

<td style="text-align: center;"> </td>

<td style="text-align: center;">2</td>

<td style="text-align: center;">Mary</td>

<td style="text-align: center;">Smith</td>

<td style="text-align: center;">Sue</td>

<td style="text-align: center;">4</td>

<td style="text-align: center;">7</td>

</tr>

<tr>

<td>7 (328)</td>

<td>[person]</td>

<td style="text-align: center;"> </td>

<td style="text-align: center;">3</td>

<td style="text-align: center;">Tabby</td>

<td style="text-align: center;">Smith</td>

<td style="text-align: center;">Sue</td>

<td style="text-align: center;">5</td>

<td style="text-align: center;">12</td>

</tr>

<tr>

<td>8 (2)</td>

<td>[footer:1]</td>

<td style="text-align: center;">Sue</td>

<td style="text-align: center;">3</td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;">12</td>

</tr>

</tbody>

</table>

If the provider.GetRows method included the GrandTotal option, the last row in the results include thre GrandTotal row type. Notice how the Sum and CountAll functions appear and display the total results. All aggregrate colums, except GroupBy, are included and available in the granttotal row.

``` CSharp
    foreach (var row in provider.GetRows(AggregationProvider2.GrandTotalOption + "=True"))
    {
        if (row.RowType == "granttotal")
        {
            int totalNameCount = (int)row.ColumnData["CountAll(firstName)"].RawValue;
            int totalRankSum   = (int)row.ColumnData["Sum(rank)"].RawValue;
        }
    }
```

<table class="table table-striped table-bordered" style="width: 886px; height: 72px;">

<thead>

<tr>

<th>Rowno (id)</th>

<th>Row type</th>

<th style="text-align: center;">GroupBy(middleName):  
HideDetail,Header,Footer</th>

<th style="text-align: center;">CountAll(firstName)</th>

<th style="text-align: center;">fName</th>

<th style="text-align: center;">lName</th>

<th style="text-align: center;">mName</th>

<th style="text-align: center;">rank</th>

<th style="text-align: center;">Sum(rank)</th>

</tr>

</thead>

<tbody>

<tr>

<td>9 (1)</td>

<td>[grandtotal]</td>

<td style="text-align: center;"> </td>

<td style="text-align: center;">5</td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;"> </td>

<td style="text-align: center;">15</td>

</tr>

</tbody>

</table>

As expected, the grandtotal output includes the total CountAll and Sum results.

### Multiple Level GroupBy

It’s easy to specify an additional group level with the integer modifier. Building on the last example, create a query that sets the desired columns to include the firstName, then set the restriction to where the contactId equals 24\. Next, create these five aggregate columns:

*   Count all of the occurances of firstName for display in details.
*   Count the unique occurances of middleName for display in details.
*   Sum the rank column for display in details.
*   Group the first level of results by middleName, and make the column available in both the header and footer, but hide in detail rows.
*   Group the second level of results by lastName, and make the column available in the details row, as well as both the header and footer.

``` CSharp
    var provider = ArchiveProviderFactory.Create(PersonProvider.ProviderName);
    provider.SetDesiredColumns("firstName",
           "CountAll(firstName)",
           "Count(middleName)",
           "Sum(rank):HideDetail",
           "GroupBy(middleName):Header,Footer,1",
           "GroupBy(lastName):Header,Footer,2");
    provider.SetDesiredEntities("person");
    provider.SetPagingInfo(100, 0);
    provider.SetRestriction(new ArchiveRestrictionInfo("contactId", "=", CultureDataFormatter.Encode(24)));

    foreach (var row in provider.GetRows(AggregationProvider2.GrandTotalOption + "=true"))
    {
       // ...
    }
```

## Query Output

<table class="table table-striped table-bordered" style="width: 884px; height: 655px;">

<thead>

<tr>

<th>RowNo</th>

<th>RowType</th>

<th>Count  
(middleName)</th>

<th>CountAll  
(firstName)</th>

<th>firstName</th>

<th>GroupBy  
(middleName):  
HideDetail,Header,Footer,1</th>

<th>GroupBy  
(lastName):  
Header,Footer,2</th>

<th>Sum(rank):  
HideDetail</th>

</tr>

</thead>

<tbody>

<tr>

<td>0 (1)</td>

<td>[header:1]</td>

<td>1</td>

<td>2</td>

<td> </td>

<td>Ray</td>

<td> </td>

<td>3</td>

</tr>

<tr>

<td>1 (2)</td>

<td>[header:2]</td>

<td>1</td>

<td>2</td>

<td> </td>

<td> </td>

<td>Doe</td>

<td>3</td>

</tr>

<tr>

<td>2 (359)</td>

<td>[person]</td>

<td>1</td>

<td>1</td>

<td>Jane</td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>3 (360)</td>

<td>[person]</td>

<td>1</td>

<td>2</td>

<td>Billy</td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>4 (1)</td>

<td>[footer:2]</td>

<td>1</td>

<td>2</td>

<td> </td>

<td> </td>

<td>Doe</td>

<td>3</td>

</tr>

<tr>

<td>5 (2)</td>

<td>[footer:1]</td>

<td>1</td>

<td>2</td>

<td> </td>

<td>Ray</td>

<td> </td>

<td>3</td>

</tr>

<tr>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>6 (3)</td>

<td>[header:1]</td>

<td>1</td>

<td>3</td>

<td> </td>

<td>Sue</td>

<td> </td>

<td>12</td>

</tr>

<tr>

<td>7 (4)</td>

<td>[header:2]</td>

<td>1</td>

<td>1</td>

<td> </td>

<td> </td>

<td>Doe</td>

<td>3</td>

</tr>

<tr>

<td>8 (361)</td>

<td>[person]</td>

<td>1</td>

<td>1</td>

<td>Bobby</td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>9 (3)</td>

<td>[footer:2]</td>

<td>1</td>

<td>1</td>

<td> </td>

<td> </td>

<td>Doe</td>

<td>3</td>

</tr>

<tr>

<td>10 (5)</td>

<td>[header:2]</td>

<td>1</td>

<td>2</td>

<td> </td>

<td> </td>

<td>Smith</td>

<td>9</td>

</tr>

<tr>

<td>11 (362)</td>

<td>[person]</td>

<td>1</td>

<td>1</td>

<td>Mary</td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>12 (363)</td>

<td>[person]</td>

<td>1</td>

<td>2</td>

<td>Tabby</td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>13 (4)</td>

<td>[footer:2]</td>

<td>1</td>

<td>2</td>

<td> </td>

<td> </td>

<td>Smith</td>

<td>9</td>

</tr>

<tr>

<td>14 (5)</td>

<td>[footer:1]</td>

<td>1</td>

<td>3</td>

<td> </td>

<td>Sue</td>

<td> </td>

<td>12</td>

</tr>

<tr>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>15 (1)</td>

<td>[grandtotal]</td>

<td>2</td>

<td>5</td>

<td> </td>

<td> </td>

<td> </td>

<td>15</td>

</tr>

</tbody>

</table>

The output includes two first-level groups; one for each of the two different middle names. The first band is grouped by middleName and contains two people with the middle name Ray. Because both of these people share the same last name, there are no nested levels grouped by lastName. The second group contains three people with the same second name. However, only two share the same last name and so there becomes two nested groups; one for lastName Doe and one for last name Smith.

## Nested Aggregate Functions

Functions can contain functions, so it’s possible to pass the result of one aggregate function to another aggregate function for compound operations. For example, with regards to a sale amount, first weight the amount and then converted to a specific currency using:

`CurrencyConvert(Weighted(amount;probPercent);currencyId))`

To demonstrate the concept, construct a query that displays the top sales representatives this month. Do this by specifying a restriction where the userGroup equals the sales group, the saleStatus is sold, and the sale date is within the past month. Sort the results by the sum of the sale amount, descending. Then add the following aggregate functions to display the results in a footer - one for each distinct group:

*   using Sum and ConvertCurrency, convert all sale amounts to one currency and then sum the amounts.
*   use GroupBy to divide the results by full name, personId and title.

``` CSharp
    // get a currencyId to convert sale amount to. 

    var currency = SuperOffice.CRM.Rows.Util.CurrencyConversionHelper.BaseCurrencyId;

    // set the formatted function for use in multiple places below

    var formattedSum = string.Format("Sum(CurrencyConvert(amount;{0})):HideDetail", currency);

    // use selection provider to get all my completed activities this month

    var provider = ArchiveProviderFactory.Create("saledynamicselection");
    provider.SetDesiredEntities("sale");
    provider.SetPagingInfo(100, 0);

    // specify the sort order

    provider.SetOrderBy(
        new ArchiveOrderByInfo(
            formattedSum,
            SuperOffice.Data.OrderBySortType.DESC));

    // Set the aggregate functions to get how many of each, grouped by type

    provider.SetDesiredColumns(
        formattedSum,
        "GroupBy(associate/fullName):Footer,HideDetail", //default level 1, no nesting
        "GroupBy(associate/personId):Footer,HideDetail", //default level 1, no nesting
        "GroupBy(associate/title):Footer,HideDetail"     //default level 1, no nesting
        );

    // specifiy the restrictions

    provider.SetRestriction(
        new ArchiveRestrictionInfo("userGroup", "oneOf", SuperOffice.SoContext.CurrentPrincipal.GroupId),
        new ArchiveRestrictionInfo("saleStatus", "oneOf", "2"),
        new ArchiveRestrictionInfo("date", ">", CultureDataFormatter.EncodeDate(DateTime.Now.AddMonths(-1))),
        new ArchiveRestrictionInfo("selectionId", "=", "-1")
        );

        foreach (var row in provider.GetRows(AggregationProvider2.GrandTotalOption + "=True"))
        {
            if(row.RowType.StartsWith("footer"))
            {
                var fullName = row.ColumnData["GroupBy(associate/fullName):Footer,HideDetail"].DisplayValue;
                var personId = row.ColumnData["GroupBy(associate/personId):Footer,HideDetail"].DisplayValue;
                var perTitle = row.ColumnData["GroupBy(associate/title):Footer,HideDetail"].DisplayValue;
                var persoSum = row.ColumnData[formattedSum].DisplayValue;

                Console.WriteLine("Fullname: {0}, PersonId: {1}, Title: {2}, Sum: {3}", 
                                  fullName, personId, perTitle, CultureDataFormatter.LocalizeEncoded(persoSum));

            }
            else if(row.RowType.StartsWith("grandtotal"))
            {
                var grandTotalSum = row.ColumnData[formattedSum].DisplayValue;
                Console.WriteLine("Grand Total: {0}", CultureDataFormatter.LocalizeEncoded(grandTotalSum));
            }
        }
    }
`
```
> Note the use of CultureDataFormatter to format the summed amount into local currency in both the footer and grandtotal rows.

### Query Results

<table class="table table-striped table-bordered" style="width: 881px; height: 235px;">

<thead>

<tr>

<th>Rowno</th>

<th>Row type</th>

<th>GroupBy  
(associate/fullName):  
Footer,HideDetail</th>

<th>GroupBy  
(associate/personId):  
Footer,HideDetail</th>

<th>GroupBy  
(associate/title):  
Footer,HideDetail</th>

<th>Sum  
(CurrencyConvert  
(amount;36)):  
HideDetail</th>

</tr>

</thead>

<tbody>

<tr>

<td>0 (1)</td>

<td>[footer:1]</td>

<td>Rebecca Franklin</td>

<td>9</td>

<td>Sales Representative</td>

<td>1 480 110,00</td>

</tr>

<tr>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>1 (2)</td>

<td>[footer:1]</td>

<td>Sean Baker</td>

<td>8</td>

<td>Tech and Sales</td>

<td>152 495,00</td>

</tr>

<tr>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>2 (1)</td>

<td>[grandtotal]</td>

<td> </td>

<td> </td>

<td> </td>

<td>1 632 605,00</td>

</tr>

</tbody>

</table>

Another common scenario to demonstrate nested functions is to group sales based on a DatePart. Combined together with a GroupBy, the use of DatePart makes it easy to aggregate sales by week, month or quarter.

Use the previous example as a template and modify the restriction sale date to show just this year. Modify the Sort to use the GroupBy DatePart, ascending. Then change the desired columns to just include the Sum of sale amounts and a GroupBy to divide the results by months.
``` CSharp
    var currency = SuperOffice.CRM.Rows.Util.CurrencyConversionHelper.BaseCurrencyId;

    // set the formatted function for use in multiple places below
    s
    var formattedSum = string.Format("Sum(CurrencyConvert(amount;{0})):HideDetail", currency);

    // use selection provider to get all my completed activities this month

    var provider = ArchiveProviderFactory.Create("saledynamicselection");

    // Set the aggregate functions to get how many sales, grouped by Month

    provider.SetDesiredColumns(
        formattedSum,
        "GroupBy(DatePart(date):Month):Footer,HideDetail"
        );

    provider.SetDesiredEntities("sale");
    provider.SetPagingInfo(100, 0);

    // specifiy the restrictions

    provider.SetRestriction(
        new ArchiveRestrictionInfo("userGroup", "oneOf", SuperOffice.SoContext.CurrentPrincipal.GroupId),
        new ArchiveRestrictionInfo("saleStatus", "oneOf", "2"),
        new ArchiveRestrictionInfo("date", "thisYear"),
        new ArchiveRestrictionInfo("selectionId", "=", "-1")
        );

    // set the sort by to the month ascending

    provider.SetOrderBy(
        new ArchiveOrderByInfo("GroupBy(DatePart(date):Month):Footer,HideDetail",
        SuperOffice.Data.OrderBySortType.ASC)
    );

    using (ArchiveRowDumper d = new ArchiveRowDumper(provider))
    {

        foreach (var row in provider.GetRows(AggregationProvider2.GrandTotalOption + "=True"))
        {
            if (row.RowType.StartsWith("footer"))
            {
                // get the month and sale sum data 

                var monthInt = (int)row.ColumnData["GroupBy(DatePart(date):Month):Footer,HideDetail"].RawValue;
                var foSum    =      row.ColumnData[formattedSum].DisplayValue;

                // convert the integer representation of month to month name

                var monthName = System.Globalization.CultureInfo.CurrentCulture
                                      .DateTimeFormat.GetMonthName(monthInt);

                Debug.WriteLine("Month: {0}, Sum: {1}", monthName, foSum);

            }
            else if (row.RowType.StartsWith("grandtotal"))
            {
                // get out the total sum value

                var grandTotalSum = row.ColumnData[formattedSum].DisplayValue;

                Debug.WriteLine("Grand Total: {0}", CultureDataFormatter.LocalizeEncoded((grandTotalSum)));
            }

            d.DumpRow(row);
        }

    }
```

<table class="table table-striped table-bordered" style="width: 789px; height: 336px;">

<thead>

<tr>

<th>Rowno</th>

<th>Row type</th>

<th style="text-align: center;">GroupBy(DatePart(date):Month)  
:Footer,HideDetail</th>

<th>Sum(CurrencyConvert(amount;36))  
:HideDetail</th>

</tr>

</thead>

<tbody>

<tr>

<td>0 (1)</td>

<td>[footer:1]</td>

<td style="text-align: center;">January</td>

<td>123 123,00</td>

</tr>

<tr>

<td>1 (2)</td>

<td>[footer:1]</td>

<td style="text-align: center;">February</td>

<td>450 987,00</td>

</tr>

<tr>

<td>2 (3)</td>

<td>[footer:1]</td>

<td style="text-align: center;">March</td>

<td>1 123 123,00</td>

</tr>

<tr>

<td>3 (4)</td>

<td>[footer:1]</td>

<td style="text-align: center;">April</td>

<td>750 009,00</td>

</tr>

<tr>

<td>4 (5)</td>

<td>[footer:1]</td>

<td style="text-align: center;">May</td>

<td>321 244,99</td>

</tr>

<tr>

<td>5 (6)</td>

<td>[footer:1]</td>

<td style="text-align: center;">June</td>

<td>2 334 854,00</td>

</tr>

<tr>

<td>6 (7)</td>

<td>[footer:1]</td>

<td style="text-align: center;">July</td>

<td>1 875 987,00</td>

</tr>

<tr>

<td>7 (8)</td>

<td>[footer:1]</td>

<td style="text-align: center;">August</td>

<td>890 000,00</td>

</tr>

<tr>

<td>8 (9)</td>

<td>[footer:1]</td>

<td style="text-align: center;">September</td>

<td>1 432 423,00</td>

</tr>

<tr>

<td>9 (10)</td>

<td>[footer:1]</td>

<td style="text-align: center;">October</td>

<td>987 798,00</td>

</tr>

<tr>

<td>10 (11)</td>

<td>[footer:1]</td>

<td style="text-align: center;">November</td>

<td>123 654,00</td>

</tr>

</tbody>

</table>

## Conclusion

From situations that depend on constructing light-weight datamodels to performing complex aggregate queries, archive providers are an attractive tool in your tool-belt. They are easy to use data sources and work well for executing wide variety of queries.