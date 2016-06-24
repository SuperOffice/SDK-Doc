<properties date="2016-05-11"
SortOrder="3"
/>

 

In the following section we will discuss how to accept an invitation. When you are trying to accept an invitation, two things comes to you mind. First what is the method to retrieve the invitations second what are the invitations that we are going to accept. We will build example that use the providers to retrieve an invitation and let’s accept the first invitation in the list which has an invitation date greater than today.

```
using SuperOffice.CRM.ArchiveLists;
using SuperOffice.CRM.Lists;
using SuperOffice.CRM.Entities;
using SuperOffice;
 
using(SoSession mySession = SoSession.Authenticate("SAL0",""))
{
//create an instance of the InvitationProvider
      IArchiveProvider myInvitationProvider = new
InvitationProvider();
      //set the order by rule we want
      myInvitationProvider.SetOrderBy(new
ArchiveOrderByInfo("appointmentId",
SuperOffice.Util.OrderBySortType.DESC));
      //set the coloumns we want to retrive
      myInvitationProvider.SetDesiredColumns("appointmentId");
      //set the page size limit it close the results that we might
get
      myInvitationProvider.SetPagingInfo(100, 0);
      //add the restriction we want
      myInvitationProvider.SetRestriction(new
ArchiveRestrictionInfo("associateId", "=", "17"),new
ArchiveRestrictionInfo("date",">",DateTime.Today.ToString()));
      //lets execute the provider and loop through the results when
we get   
      //the first onewe are going out of the loop
      int appID = 0;
      foreach (ArchiveRow row in myInvitationProvider.GetRows())
      {
            appID =
System.Convert.ToInt32(SuperOffice.CRM.Globalization.CultureDataFormatter.LocalizeEncoded(row.GetDisplayValue("appointmentId")));
            break;
      }
      //create a appointment matrix for the appointment that we got
      AppointmentMatrix myAppMatrix = new AppointmentMatrix(appID,
SuperOffice.Data.RecurrenceUpdateMode.OnlyThis);
      //and we acceept finally
      myAppMatrix.Accept();
}
```

 

An important point to remember!

The provider concept is a very powerful tool that exists in the NetServer. In NetServer there are many types of providers and the main purpose of the providers are to retrieve some specific data using some restrictions we want.

In the above example we have used the invitation provider to get the invitations that we want.We have created an invitation provider since we are trying to retrieve some invitations we want for a given restriction criteria. In a provider we can set the columns that we want to retrieve in the above example we have said that we only want appointmentId. Also we have set how we want the data to be sorted using the setOrderBy method of the provider.

The restrictions are special in provider, in the invitation provider a restriction for the associateId is a must since we are trying to pull out invitations of an associate. If you don’t specify this restriction the NetServer will throw an exception. After specifying the compulsory restriction you may give any other restriction that you want, in this case we have specified that we want invitation that are ahead of the current date.

Now we have given all the information to the provider and all that is left is to execute it and get the results. The provider is executed by call the GetRows method of the provider which will return a set of ArchiveRows which we can loop through. The data in the rows are represented as Key Value pairs. The providers have lots of ways that can be used to retrieve the data; we have used one such way which is GetDisplayValue. Using the GetDisplayValue method we can get the value of the column we give as a parameter to the method. In the above case we have said we want the value of the appointmentId column. The values returned are formatted in a special way unique to NetServer, so in order to format the values as a normal string that is suited for the formatting of your region we can use the methods in the CultureDataFormatter class which exists in the SuperOffice.CRM.Globalization name space.   

If you analyzes the above code you can see that we have jumped out of our loop that traverse the returned records that is because in the beginning we have set ourselves a assumption that we are going to accept the first invitation in the returned list. Finally we have used the appointment matrix to accept the invitation we retrieved. The appointment matrix is used in the NetServer to deal with various kinds of invitations that exists in SuperOffice application.

 

An important point to remember!

By default the invitation provider will filter out only the appointment that follows under the following status definitions. The NetServer has done this since you want to accept only the appointments that have the status definitions listed in the table below .

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Status type</p></td>
<td><p>Id</p></td>
<td><p>Comment</p></td>
</tr>
<tr class="even">
<td><p>Booking</p></td>
<td><p>5</p></td>
<td><p>You are invited (initial status)</p></td>
</tr>
<tr class="odd">
<td><p>Booking has moved</p></td>
<td><p>6</p></td>
<td><p>You may have seen, declined or accepted the booking, but it has been moved, so you will be asked again.</p></td>
</tr>
<tr class="even">
<td><p>Booking seen</p></td>
<td><p>7</p></td>
<td><p>You have seen the booking, but not declined or accepted it.</p></td>
</tr>
<tr class="odd">
<td><p>Booking moved seen</p></td>
<td><p>8</p></td>
<td><p>The booking has been moved and you have seen the change, but not declined or accepted it.</p></td>
</tr>
<tr class="even">
<td><p>Assignment</p></td>
<td><p>11</p></td>
<td><p>You are assigned this appointment.</p></td>
</tr>
<tr class="odd">
<td><p>Assignment seen</p></td>
<td><p>12</p></td>
<td><p>You have seen the assignment, but not accepted or declined it</p></td>
</tr>
</tbody>
</table>

 
