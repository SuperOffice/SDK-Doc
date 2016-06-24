<properties date="2016-05-11"
SortOrder="17"
/>

 

In this section let’s concentrate on the SO Data Reader that we used in our select statement. The SO Data Reader class based upon the system and it implements the IDataReader interface. Since it implements this interface the SO Reader has all the capabilities of a normal ADO.Net reader and it has more functions built into it by the NetServer.  Let’s take the SO Date Reader code snippet of the select example.

```
//Loading the Data into the DataReader
SoDataReader myReader = myComm.ExecuteReader();
 
//Retrieving the Data from the Reader
while(myReader.Read())
{
string conDept = myReader.GetString(1);
     string conName = myReader.GetString(2);
      string perName = myReader.GetString(3) + " " +
myReader.GetString(4);
      string perPhone = myReader.GetInt16(5).ToString();
      string conEmail = myReader.GetString(6);
      string conEmlDesc = myReader.GetString(7);
      string conCou = myReader.GetString(8);
}
```

 

In the above code snippet after we have executed the reader the data will be returned and they will be held in the reader. You can see that the fields returned from the database to the reader are retrieved using the specific data type methods just as you would do if you are using ADO.Net reader.

As in a normal ADO.Net data reader the SO Data Reader also can retrieve data using the field in index. The ADO.Net data reader has only two overloads for the index, either you can give the column index or you can give the column name, but in the so data reader you have three over loads you have the ADO.Net methods and you can pass in a field info object and NetServer will return the data of the first matching column. The following code snippet is a modification of the above code snippet to show the working of the three overload methods.

First let’s look at how you can retrieve data using the column index.

```
//Loading the Data into the DataReader
SoDataReader myReader = myComm.ExecuteReader();
 
//Retrieving the Data from the Reader
while(myReader.Read())
{
//we will convert all the return values to string
      //assuming that we dont know the return data type
      string conID = myReader[0].ToString();
      string conDept = myReader[1].ToString();
      string conName = myReader[2].ToString();
      string perName = myReader[3].ToString() + " " +
myReader[4].ToString();
      string perPhone = myReader[5].ToString();
      string conEmail = myReader[6].ToString();
      string conEmlDesc = myReader[7].ToString();
      string conCou = myReader[8].ToString();
}
 
//Closing the Reader and Disposing the session
myReader.Close();
```

 

This is the same way as if you would use the method in an ADO.Net data reader. You may notice that we have converted all the return values to string type assuming that we don’t know the data type that will be returned. If you know the data type you can always cast the return value to the appropriate data type as in the following line.

```
intconID = (int)myReader[0];
```

 

Now let’s look at how we can retrieve data using the column name.

```
//Loading the Data into the DataReader
SoDataReader myReader = myComm.ExecuteReader();
 
//Retrieving the Data from the Reader
while(myReader.Read())
{
//we will convert all the return values to string
      //assuming that we dont know the return data type
      string conID =
myReader[newConTable.ContactId.DbName].ToString();
      string conDept =
myReader[newConTable.Department.DbName].ToString();
      string conName =
myReader[newConTable.Name.DbName].ToString();
      string perName =
myReader[newPerTable.Firstname.DbName].ToString() + " " +
myReader[newPerTable.Lastname.DbName].ToString();
      string perPhone =
myReader[newPerTable.PhonePresent.DbName].ToString();
      string conEmail =
myReader[newEMLTable.EmailAddress.DbName].ToString();
      string conEmlDesc =
myReader[newEMLTable.Description.DbName].ToString();
      string conCou =
myReader[newCouTable.EnglishName.DbName].ToString();
}
```

Here we have given the column name by using the appropriate table info object to specify the column name. This is a good way of doing it since you don’t have to know the exact name of the table column. Of course you can give the column name and retrieve the data as shown in the below line.

```
 string conID = myReader["Contact_Id"].ToString();
```

 

Now let’s look at the NetServer provided overloaded method.

```
//Loading the Data into the DataReader
SoDataReader myReader = myComm.ExecuteReader();
 
FieldInfo test = new FieldInfo(newConTable,
FieldDataType.dbInt,"Contact_Id");
 
//Retrieving the Data from the Reader
while(myReader.Read())
{
//in this method we have to know the table field data type
      //so we can cast and get the value to a variable of same type
      int conID = (int)myReader[newConTable.ContactId];
      string conDept = (string)myReader[newConTable.Department];
      string conName = (string)myReader[newConTable.Name];
      string perName = (string)myReader[newPerTable.Firstname] + "
" + myReader[newPerTable.Lastname];
      string conEmail = (string)myReader[newEMLTable.EmailAddress];
      string conEmlDesc =
(string)myReader[newEMLTable.Description];
      string conCou = (string)myReader[newCouTable.EnglishName];
}
//Closing the Reader
myReader.Close();
```

 

Here we have used the NetServer provide method of retrieving data through the index. Here we are passing a FieldInfo object as the parameter to the method. You can see that we have used the TableInfo object to specify column name.
