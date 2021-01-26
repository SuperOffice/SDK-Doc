<properties date="2016-06-24"
SortOrder="181"
/>

*Description*:                

*This method should normally not be used.*

 

Gets the binary file of the agent available on the server.

                                   

*In Parameters*:

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* binaryData            - The binary executable.



*Example*:
```
admin.adminService adminService = new admin.adminService();

System.Byte[] data;

if(adminService.getAgent( out data ) == “0”)
{

  ...storeDataToDisk...

}
```