<properties date="2016-06-24"
SortOrder="180"
/>

*Description*:                                                    


*This method should normally not be used.*

 

Checks if your Service Agent client is older than the one available on the server. You can also be notified that you should upgrade as the version you are using are incompatible with Service on the server.

                  

*In Parameters*:

* sessionKey      - A valid session key

* version             - The version of the agent.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* newVersion     - True if there are a new version on the server.



*Example*:
```
admin.adminService adminService = new admin.adminService();

ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

if (errorCode.Equals(“0”)
{

  boolean newVersion;

  boolean forceUpgrade;

  adminService.checkAgentVersion(sessionKey, ”13”, out newVersion, out forceUpgrade);

  if(newVersion)
  {

    ...doUpgradeStuff()...
  }
}
```