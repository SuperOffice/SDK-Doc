<properties date="2016-06-24"
SortOrder="186"
/>

*Description*:

With this method you can get various information about the specified user. Just supply the fields you want to retrieve and the user id. Valid fields are:

 

            user.id
            user.name
            user.firstname

user.middlename

            user.lastname
            user.email
            user.loginname           
            user.username
            user.language (0 = English, 1 = Norwegian)
            user.status (1 = Normal, 2 = Not available, 3 = Deleted, 4 = Read Only)
                  

*In Parameters*:

* sessionKey      - A valid session key

* userId              - A valid user id

* userFields        - An array of strings where each element is one of the above

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* userResult - An array of ResultStruct where each element is of the form:

o   field – name of the requested field

o   value – the value of requested field

o   type – the type of the requested field (see the appendix)

* *

*Example*:

admin.adminService adminService = new admin.adminService();

ticket.ticketService ticketService = new ticket.ticketService();

 

string sessionKey;

string errorCode = ticketService.login("egon",

                   "pass1234", out sessionKey);

 

if (errorCode.Equals(“0”)

{

  admin.ResultStruct\[\] userResult;

  string\[\] userFields = new string\[2\];

  userFields\[0\] = "user.id";

  userFields\[1\] = "user.email";

  

  errorCode = adminService.getUser(sessionKey, “2”, userFields, out           userResult);

  foreach(admin.ResultStruct i in userResult)

  {

    string field = i.field; // Here you get the field
    string value = i.value; // Here you get the value
    string type = i.type;   // Here you get the type

  }

}
