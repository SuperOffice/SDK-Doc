<properties date="2016-06-24"
SortOrder="183"
/>

*Description*:

Returns a list of the name and paths to all executable cgi-bin modules of Service (ie: customer= <http://cs.mydomain.com/scripts/customer.exe>). Usefull if you need to redirect to a specific frame or screen in Service.

                  

*In Parameters*:

* sessionKey      - A valid session key

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* paths    - An array of names and modules:

  * module – the name

  * path – the path



*Example*:
```
admin.adminService adminService = new admin.adminService();

ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

if (errorCode.Equals("0")
{
  admin.ModulePathStruct[] tmpPaths;

  adminService.getModulePaths(sessionKey, out tmpPaths);

  foreach(admin.ModulePathStruct i in tmpPaths)
  {
    cout << "module: " << i.module << " path: " << i.path << endl;

  }

}
```