<properties date="2016-05-11"
SortOrder="8"
/>

A Windows Service can call a web-service to automatically update the currency rates once a day.

For that the following free web service is used. “  [http://www.webservicex.net/CurrencyConvertor.asmx](http://www.webservicex.net/CurrencyConvertor.asmx) ” to get the currency rates.

Above web service has a base method called ConversionRate it uses 2 parameters.

 For example, we can use 2 currencies as parameters first one is the From currency(Base currency) next one is the To Currency

ConversionRate(“USD”, “NOK”) gives value as 5.5352

This means it takes 5.5352 Norwegian Kroner to make one US Dollar.

Once the service starts to run, OnStart method of the service is invoked. It starts the timer for a 24 hour time interval. After 24 hours timer ElapsedEventHandler is fired and then it runs the OnElapsedTime method. This method includes all the basic concepts to update the currency rates.

The service continues to run until the OnStop event is triggered by the service manager.

Basic Code used in the application is given below.

```
protected override void OnStart(string[] args)
        {
           
            timer.Elapsed += new
ElapsedEventHandler(OnElapsedTime);
 
            // set interval to 1 minute (= 60,000 milliseconds)
            // this is for 24 hours
           
            timer.Interval = 216000000;
 
            // enabling the timer
            timer.Enabled = true;
 
 
        }
```

 

```
private void OnElapsedTime(object source, ElapsedEventArgs e)
{
try
 {    //this is use to get the UserName from the App Config
string userName=
System.Configuration.ConfigurationManager.AppSettings["UserName"]
.ToString();
//this is use to get the Password from the App Config
string password = 
System.Configuration.ConfigurationManager.AppSettings["Password"]
.ToString();
      using (newSession = SoSession.Authenticate(userName,
password))
      {
            CurrencyUpdater.Currency basecurrencyName;
            //get the base currency id from the database
            int baseCurrencyId =
SuperOffice.CRM.Rows.Util.CurrencyConversionHelper.BaseCurrencyId;
            CurrencyRow currencyRow =
CurrencyRow.GetFromIdxCurrencyId(baseCurrencyId);
            basecurrencyName =
(Currency)Enum.Parse(typeof(Currency), currencyRow.Name, true);
                   
            Select sqlSelect = S.NewSelect();
            // Create an instance of the CurrencyTableInfo object
            CurrencyTableInfo c1 =
TablesInfo.GetCurrencyTableInfo();
 
            // Set the return fields to All
            sqlSelect.ReturnFields.Add(c1.All);
 
            //Establishing a Database Connection
            SoConnection myConn =
ConnectionFactory.GetConnection();
 
            //Creating and SoCommand instance and assigning the
earlier
            created Select statement
 
            SoCommand myComm = myConn.CreateCommand();
            myComm.SqlCommand = sqlSelect;
 
            //open the connection
            myConn.Open();
 
            SoDataReader myReader = myComm.ExecuteReader();
                   
            //Retrieving the Data from the Reader
            CurrencyRows currencyRows=
            CurrencyRows.GetFromReader(myReader,c1);
                   
            //Closing the Reader and Disposing the session
            myReader.Close();
                   
            foreach (CurrencyRow row in currencyRows)
            {
            //Create an instance of currency converter service 
            CurrencyUpdater.CurrencyConvertor cConvertor = new 
            CurrencyUpdater.CurrencyConvertor();
            try
                  {
                  CurrencyUpdater.Currency currencyName =  
(CurrencyUpdater.Currency)Enum.Parse(typeof(CurrencyUpdater.Currency),
row.Name, true);
            //Currency rate is given relevant to 1 unit of base
currency
            //Invoke ConversionRate()  method from the currency
converter service
                  double currencyRate =
cConvertor.ConversionRate(basecurrencyName, currencyName);
                 //Set the rate by multiplying the currencyRate in
to units
                 //if row.Units=1
                 //currencyRate=5.5352
                 //then row.Rate=5.5352
                  row.Rate = currencyRate* row.Units;
                  //Update the currency row with new rate
                  row.Save();
                           
 
                           
                  }
                  catch (Exception ex)
                  {
                        System.Diagnostics.Debug.Write(ex.Message);
                  }
           }
 
   }
}
 
```

 

```
protected override void OnStop()
        {
            timer.Enabled = false;
        }
```

 

Cade segment from the App config file.

```
<appSettings>
            <add key="UserName" value="SAL0" />
            <add key="Password" value="" />
</appSettings>
```

 

In the app config file of the service, under the “appSettings” tag have to give the “Username” and “Password” as shown above.

Within the OnElapsedTime method it gets the Username and Password from the app config file to authenticate the user.

Within this method, by using CurrencyConversionHelper class can obtain the BaseCurrencyId then can retrieve the BaseCurrencyName. Currency Table data are filled in to the CurrencyRows while reading the SoDataReader.

For each Currency type in the CurrencyRows updated the Currency rate from the web service  [http://www.webservicex.net/CurrencyConvertor.asmx](http://www.webservicex.net/CurrencyConvertor.asmx) .
