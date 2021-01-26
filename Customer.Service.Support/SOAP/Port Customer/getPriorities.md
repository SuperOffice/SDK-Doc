<properties date="2016-06-24"
SortOrder="130"
/>

*Description*:

Gets all the available external priorities. The lowest ordered priority will be first in the array.

 

*In Parameters*:

* sessionKey            - A valid session key

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* priorities    - A sorted array of *PriorityStruct* with lowest sortOrder first. Elements are:

  * id         - internal ID of the priority

  * name    - name of the priority

  * sortOrder         - Sort order number, where higher number indicated higher priority.

                       

*Example*:
```
string sessionKey;

customer.customerService custService = new customer.customerService();

if(custService.login("test","test",out sessionKey)=="0")
{
   customer.PriorityStruct[] priorities;
   custService.getPriorities(sessionKey, out priorities);
   string newValue="";
   foreach(customer.PriorityStruct i in priorities)
   {
      newValue += i.name +"\\r\\n";
   }
   textBox1.Text = newValue;
}
```