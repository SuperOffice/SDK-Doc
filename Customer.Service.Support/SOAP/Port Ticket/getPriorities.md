<properties date="2016-06-24"
SortOrder="162"
/>

*Description*:

Gets all the available priorities. The lowest ordered priority will be first in the array.

 

*In Parameters*:

* sessionKey            - A valid session key

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* priorities    - A sorted array of *PriorityStruct* with lowest sortOrder first. Elements are:

o   id         - internal ID of the priority

o   name    - name of the priority

o   sortOrder         - Sort order number, where higher number indicates higher priority.

                       

*Example*:

string sessionKey;

customer.customerService custService = new customer.customerService();

if(custService.login("test","test",out sessionKey)=="0")

{

       customer.PriorityStruct\[\] priorities;
       custService.getPriorities(sessionKey, out priorities);
       string newValue="";
       foreach(customer.PriorityStruct i in priorities)
       {
          newValue += i.name +"\\r\\n";
       }
       textBox1.Text = newValue;

}

 
