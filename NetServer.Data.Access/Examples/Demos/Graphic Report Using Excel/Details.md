<properties date="2016-05-11"
SortOrder="3"
/>

We have made use of Providers which are Available through the SuperOffice.CRM.ArchiveLists namespace in order to retrieve the data.

```
//Setting the Parameters that needs to be passed to Agent method  
//Parameter - providerName - The name of the archive provider to
use
IArchiveProvider newSalePro = new SaleProvider();
 
//Parameter - columns - An array of the names of the columns
wanted.
string[] columns = new string[] { "project/name", "amount",
"earningPercent" };
newSalePro.SetDesiredColumns(columns);
 
//Parameter - entities - Which entities to include
string[] entities = new string[] { "sale", "contact" };
newSalePro.SetDesiredEntities(entities);
 
//Parameter - restriction - Archive restrictions
ArchiveRestrictionInfo[] archiveRest = new
ArchiveRestrictionInfo[1];
archiveRest[0] = new ArchiveRestrictionInfo("contactid", "=",
"113");
newSalePro.SetRestriction(archiveRest);
 
//Parameter - page - Page number, page 0 is the first page
//Parameter - pageSize - Page size  
int page = 1;
int pageSize = 10;
newSalePro.SetPagingInfo(pageSize, page);
//Parameter - sortOrder - Sort order for the archive
ArchiveOrderByInfo[] archiveSrtOrd = new ArchiveOrderByInfo[1];
archiveSrtOrd[0] = new ArchiveOrderByInfo("project/name",
SuperOffice.Util.OrderBySortType.DESC);
newSalePro.SetOrderBy(archiveSrtOrd);               
```

 

What we have done above is created a SaleProvider and assign values to the provider using certain methods available through it. Once this is done next step is to retrieve the data and get the data converted to a way acceptable by .Net which can be used to generated the excel report. This is necessary since the data returned by the provider consists of data that is not of the basic data types. The following code segment is used for this purpose.

```
//Converting the data into an acceptable form
CoreWebList<SalesData> coreWebTestList = new
CoreWebList<SalesData>();
foreach (ArchiveRow row in newSalePro.GetRows())
{
ArrayList frArrLst = new ArrayList();
foreach (KeyValuePair<string, ArchiveColumnData> column in
row.ColumnData)
{
            string displayValue = column.Value != null ?
column.Value.DisplayValue.ToString() : "-";
            frArrLst.Add(displayValue);
}
SalesData frSaleData = new SalesData(frArrLst[0].ToString(),
frArrLst[1].ToString(), frArrLst[2].ToString());
coreWebTestList.Add(frSaleData);
frArrLst.Clear();
}
```

 

What we have done is first to create an instance of our explicit conversion class called CoreWebList. Container class for Sales data which is called “SaleData” is passed in.

```
//Explicit conversion class that converts the list to be converted
to a data table.
public class CoreWebList<T> : List<T>
{
//Variable declarations
private static bool _enforceKeys;
 
//Class Contructor
public CoreWebList()
{
            _enforceKeys = false;
}
 
//Get / Set method
public bool DataTableEnforceKeys
{
            get { return _enforceKeys; }
            set { _enforceKeys = value; }
}
 
//List to data table conversion method
static explicit operator DataTable(CoreWebList<T> wblist)
{
            DataTableConverter<T> converter = new
DataTableConverter<T>(_enforceKeys);
            return converter.GetDataTable(wblist);
}
}
```

 

The SaleData Container is as follows.

```
//The Container class for the Sale information
public class SalesData
{       
string _proName;
string _SalAmnt;
string _SalEarnPer;
 
//Class constructor
public SalesData(string proName, string salAmnt, string salEarnPer)
{           
            _ proName = proName;
            _SalAmnt = salAmnt;
            _SalEarnPer = salEarnPer;
}
 
//Conversion methods for each property  
[Conversion(ConvertDataTable = true, KeyFields = true, DBNull =
false)]
public string ProName
      {
      get { return _ proName; }
            set { _ proName = value; }
}
 
[Conversion(ConvertDataTable = true, KeyFields = true, DBNull =
false)]
public string SalAmnt
{
            get { return _SalAmnt; }
            set { _SalAmnt = value; }
}
 
[Conversion(ConvertDataTable = true, KeyFields = true, DBNull =
false)]
public string SalEarnPer
{
            get { return _SalEarnPer; }
            set { _SalEarnPer = value; }
}
}
```

 

The above code makes use of our custom attribute class which acquires the meta data about the properties of our container class that is built at runtime.

The next step is to build the class which actually does the conversion. We have identified it as

```
//The class uses the System.Reflection namespace to query
attributes at run-time
//and builds a builds a data table schema and fill it.
public class DataTableConverter<T>
{
//Variable Declaration
private bool _enforceKeys;
 
//Class contructors
public DataTableConverter() { }
 
public DataTableConverter(bool enforceKeys)
{
            _enforceKeys = enforceKeys;
      }
 
public DataTable GetDataTable(List<T> listItems)
{           
      DataTable newDatTbl;
                       
            // Build a table schema from the first element in the
collection
            newDatTbl =
this.ConstructDataTableSchema(listItems[0]);           
           
            // Create a new row for every item in the collection
and fill it.
            for (int i = 0; i < listItems.Count; i++)
            {
                  DataRow newDataRow = newDatTbl.NewRow();
 
                  Type newType = listItems[i].GetType();
                  MemberInfo[] newMembers =
newType.GetProperties();
                  foreach (MemberInfo newMember in newMembers)
                  {
                        object[] mewAtts =
newMember.GetCustomAttributes(true);
                  if (mewAtts.Length != 0)
                        {
                             foreach (object mewAtt in mewAtts)
                             {
                                   ConversionAttribute newConAtt =
mewAtt as ConversionAttribute;
                                   if (newConAtt != null)
                                   {
                                         if
(newConAtt.ConvertDataTable)
                                   {
                                               string[] newNameArr
= newMember.Name.ToString().Split(Convert.ToChar(" "));
                                               PropertyInfo
newPropInfo = newType.GetProperty(newNameArr[0]);
                                               Type newValType =
newPropInfo.GetValue(listItems[i], null).GetType();
                                              
newDataRow[newNameArr[0]] = newPropInfo.GetValue(listItems[i],
null);
                                         }
                                   }
                             }
                        }
            }
                  newDatTbl.Rows.Add(newDataRow);
            }
            return newDatTbl;           
}
 
// This method reads the attributes of your container class via
reflection in order to
// build a schema for the DataTable that you will explicitly
convert to.
private DataTable ConstructDataTableSchema(T item)
{
            string tblName = string.Empty;
            List<DataTableConverterContainer> schCon = new
List<DataTableConverterContainer>();
 
            Type newType = item.GetType();
      MemberInfo[] newMemsInfo = newType.GetProperties();
 
      foreach (MemberInfo newMemInfo in newMemsInfo)
            {
                  object[] newAtts =
newMemInfo.GetCustomAttributes(true);
                  if (newAtts.Length != 0)
                  {
                        foreach (object newAtt in newAtts)
                        {
                             ConversionAttribute newConAtt = newAtt
as ConversionAttribute;
                             if (newConAtt != null)
                             {
                                   if (newConAtt.ConvertDataTable)
                                   {
                                         // The name of the
container class is used to name your DataTable
                                         string[] newClsNameArr =
newMemInfo.ReflectedType.ToString().Split(Convert.ToChar("."));
                                         tblName =
newClsNameArr[newClsNameArr.Length - 1];
                                   string newName =
newMemInfo.Name.ToString();
                                         PropertyInfo propInfo =
newType.GetProperty(newName);
                                         Type NewValType =
propInfo.GetValue(item, null).GetType();
 
                                         // Each property that is 
will be a column in our DataTable.
                                   schCon.Add(new
DataTableConverterContainer(newName, NewValType, newConAtt.DBNull,
newConAtt.KeyFields));
                             }
                        }
                  }
                  }
      }
      if (schCon.Count > 0)
      {
                  DataTable newDataTbl = new DataTable(tblName);
                  DataColumn[] newDataCol = new
DataColumn[schCon.Count];
 
                  // Counts the number of keys that will need to be
created
            int numberOfKeys = 0;
            foreach (DataTableConverterContainer newContainer in
schCon)
                  {
                        if (newContainer.CheckKey == true
&& _enforceKeys == true)
                        {
                             numberOfKeys = numberOfKeys + 1;
                        }
            }
 
                  // Builds the DataColumns for our DataTable
                  DataColumn[] newKeyColArr = new
DataColumn[numberOfKeys];
                  int keyColIdx = 0;
            for (int i = 0; i < schCon.Count; i++)
                  {
                        newDataCol[i] = new DataColumn();
                        newDataCol[i].DataType =
schCon[i].PropType;
                        newDataCol[i].ColumnName =
schCon[i].PropName;
                        newDataCol[i].AllowDBNull =
schCon[i].CheckDbNull;
                  newDataTbl.Columns.Add(newDataCol[i]);
                  if (schCon[i].CheckKey == true &&
_enforceKeys == true)
                  {
                             newKeyColArr[keyColIdx] =
newDataCol[i];
                              keyColIdx = keyColIdx + 1;
                        }
                  }
                  if (_enforceKeys)
                  {
                        newDataTbl.PrimaryKey = newKeyColArr;
                  }
                  return newDataTbl;
            }
      return null;
}
 
#region Internal Classes
private class DataTableConverterContainer
{
      //Internal class variables
      private string _propName;
      private Type _propType;
      private bool _DbNull;
      private bool _Key;
 
      //Intenal Class Contructor
      internal DataTableConverterContainer(string propName, Type
propType, bool DbNull, bool Key)
      {
                  _propName = propName;
                  _propType = propType;
                  _DbNull = DbNull;
                  _Key = Key;
      }
 
      //Get / Set methods
      public string PropName
      {
            get { return _propName; }
            set { _propName = value; }
      }
 
      public Type PropType
      {
                  get { return _propType; }
                  set { _propType = value; }
            }
 
      public bool CheckDbNull
      {
                  get { return _DbNull; }
                  set { _DbNull = value; }
      }
 
      public bool CheckKey
      {
                  get { return _Key; }
                  set { _Key = value; }
      }
      }
#endregion
}
```

 

The final steps of the code would be to get the result into an excel sheet that can be used to generate graphs and charts. For this we use the XmlTextWriterClass.

```
//Coverting the data which can be used to construct Excel Graphs
DataTable newDataTbl = (DataTable)coreWebTestList;
DataTable newDataTbl2 = new DataTable();
newDataTbl2.TableName = "Sales Information";
newDataTbl2.Columns.Add("Project Name");
newDataTbl2.Columns.Add("Amount");
newDataTbl2.Columns.Add("Earning %");               
foreach (DataRow datRow in newDataTbl.Rows)
{
DataRow dr = newDataTbl2.NewRow();
dr[0] = datRow.ItemArray[0].ToString();
dr[1] = float.Parse(datRow.ItemArray[1].ToString().Substring(3,
datRow.ItemArray[1].ToString().Length - 4));
dr[2] = float.Parse(datRow.ItemArray[2].ToString().Substring(3,
datRow.ItemArray[2].ToString().Length - 4));
newDataTbl2.Rows.Add(dr);
}
 
//Write the data into the DataGrid
DataView newDateView = new DataView(newDataTbl2);
GridView1.DataSource = newDateView;
GridView1.DataBind();
 
//Write the Data into an XML file using the XmlTextWriter class
FileStream newFs = new FileStream("C:\\SaleData.xml",
FileMode.Create);
XmlTextWriter newTextWriter = new XmlTextWriter(newFs,
Encoding.Unicode);
newDataTbl2.WriteXml(newTextWriter);
```
