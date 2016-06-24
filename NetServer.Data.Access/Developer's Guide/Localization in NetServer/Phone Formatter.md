<properties date="2016-05-11"
SortOrder="10"
/>

<img src="../Localization%20in%20NetServer_files/image004.gif" id="Picture 5" width="497" height="72" />

The phone formatter class that exists in the SuperOffice.CRM.Globalization namespace contains various methods that can be used to format a phone number. The methods of the phone formatter class does not take any data from the database instead you have to specify the data and you have to select the method that will return a phone number formatted as you want . Let’s take examples for each method and discuss further.

```
using SuperOffice.CRM.Globalization;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//get the international number of the specifed country for the
given
      //phone number
      string formatedPhoneNumber =
      PhoneFormatter.GetInternationalNumber(578, "96458551");
      //output 4796458551     
}
```

 

The method GetInternationalNumber method of the phone formatter class as the name implies will get you the international number of the phone number you specify. In the above example we specify a normal local number and the method will format this local number to an international number. In the example we convert the number to a Norwegian international number so it will give an out as specified in the example.

 

```
using SuperOffice.CRM.Globalization;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//format the phone number to the base number format of the
//specified country this will get rid of the additional
//number and characters
      string formatedPhoneNumber =
PhoneFormatter.GetBaseNumber(578, "+47
779 645 855");
//output 779645855
}
```

 

This example uses the GetBaseNumber method. This is another useful method that exists in the phone formatter class. As you can see in the example we have specified the country ID and the phone number we want to format. The method will format the phone to the normal phone number format of the specified country, in the above case it is Norway. Like shown in the example the method will get rid of the additional numbers and characters and return us the base number as a string.

```
using SuperOffice.CRM.Globalization;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//format the phone number to GSM compliant format of the given
      //country the letters of the phone number will be resolved
      string formatedPhoneNumber = PhoneFormatter.GetGSMNumber(578,
"077
      748VISTA");
      //output +4707774884782
}
```

 

This example uses another useful method in the phone formatter class called GetGSMNumber. This method will give us the GSM compliant phone number formatted according to the country we specify for the phone number we specify. In addition to that the method will resolve the letters in the number in the above case the V will resolved to 8 according to the standard phone key pad, and so are the other letters. Here we convert the phone number to the GSM complaint format of Norway (578).

```
using SuperOffice.CRM.Globalization;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//get the long dispaly number formatted accoding to the country
      // specifed the method will add the country code and the area
code to
      //the number
      string formatedPhoneNumber =
PhoneFormatter.GetLongDisplayNumber(578,
      "678657856");
      //output +47 678657856
}
```

 

The above example shows the use of the <a href="" id="OLE_LINK2"></a> <a href="" id="OLE_LINK1">GetLongDisplayNumber</a> method which is designed to format a number to the long number format of the country we specify. Here the number will be formatted to the long phone number format of Norway. As one can see the method will add the country code to the phone number.

```
using SuperOffice.CRM.Globalization;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//get the country prefix of the country we specify
      string formatedPhoneNumber = PhoneFormatter.GetPrefix(578);
      //output +47
}
```

 

The above method is a very simple method designed to return the country prefix of the specified country as a string. Here we retrieve the country prefix of Norway.

```
using SuperOffice.CRM.Globalization;
using SuperOffice;
 
using(SoSession session = SoSession.Authenticate("SAL0", ""))
{
//get the alpha numeric charcters of a phone number that we specify
      //resolved this will happen according to the standard key pad
of
      //phone e.g: the letters T,U and V will be replased will
number 8
      string formatedPhoneNumber =
      PhoneFormatter.ResolveAlphanumericNumber("077 748VISTA");
      //output 077 74884782
}
```

 

This is also a simple method which is designed to resolve the alpha numeric characters in a number. Here the number will get resolved according to the standard key pad of a phone.

 
