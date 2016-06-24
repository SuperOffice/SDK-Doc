<properties date="2016-06-24"
SortOrder="6"
/>

Get a List of Invitations
=========================

The code below is used to retrieve a List of Invitations for a specific Associate.

```
using SuperOffice;
using SuperOffice.CRM.ArchiveLists;
 
using(SoSession newSession = SoSession.Authenticate("sam", "sam"))
{
      //Create an instance of the InvitationProvider
      IArchiveProvider newInvPro = new InvitationProvider();
 
      //Set the order by rule for the Provider
      newInvPro.SetOrderBy(new ArchiveOrderByInfo("appointmentId", SuperOffice.Util.OrderBySortType.DESC));
           
      //Set the columns we want to retrive
      newInvPro.SetDesiredColumns("appointmentId", "date", "associate/contactFullName", "endDate" );
 
      //Set the page size
      newInvPro.SetPagingInfo(100, 0);
 
      //Add the restriction the provider should be based on
      newInvPro.SetRestriction( 
         new ArchiveRestrictionInfo("associateId", "=", "5"), 
         new ArchiveRestrictionInfo("date",">",DateTime.Today.ToString()));
 
      //Looping through the provider in order to get the results
      //we are going out of the loop
 
      int rowNo = 1;
 
      foreach (ArchiveRow archiveRow in newInvPro.GetRows())
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
}
```

 

In the code we have used an instance of the InvitationProvider and some of its methods in order to restrict and arrange the output returned by the provider.

The SetOrderBy() method sorts the output by id. The SetPageInfo() method limits the number of rows returned to the first 100 rows. The SetDesiredColumns() method is used to identify which columns should be returned by the provider and the SetRestriction() method sets the query restriction for the Provider.

GetRows() method provided in the provider can be used to retrieve the rows returned by the provider. The provider returns a collection of ArchiveRow types. Thereby looping through each ArchiveRow we could get details of invitation for the Associate.

Following is the result when the above code has been executed.

```
associate/contactFullName    date        endDate           appointmentId
StateZeroDatabase       [D:07/05/2007]    [D:07/05/2007]    [I:186]    
StateZeroDatabase       [D:07/26/2007]    [D:07/26/2007]    [I:179]    
StateZeroDatabase       [D:04/28/2007]    [D:04/28/2007]    [I:172]    
StateZeroDatabase       [D:06/14/2007]    [D:06/14/2007]    [I:161]    
StateZeroDatabase       [D:04/28/2007]    [D:04/28/2007]    [I:150]    
```
