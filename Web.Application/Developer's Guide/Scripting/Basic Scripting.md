<properties date="2016-06-24"
SortOrder="3"
/>

Basic NetServer Scripting
-------------------------

### Events

There are Before, After and AfterAsync events for each method on each web service agent. These are void methods, Sub routines in Visual Basic.NET, where there is no return value. The naming standard of every available scripting event is the exact same as the web service method, prefixed with the Before or After keyword. Asynchronous scripting events are always prefixed with "After" and have an "Async" suffix.

\[Before|After\]ServiceMethod\[Async\]

The Before method has the same parameters as the agent method.

The After method has the same parameters as the agent method + the return value at the end of the param list.

The AfterAsync method has the same parameters as the agent method plus the return value at the end of the parameter list, however, changes done to the return value parameter are not passed on.

Listing Two: Scripting Method Prototypes.

    public static void BeforeGetContactEntity(int contactid, object  State)
    public static void AfterGetContactEntity (int contactid, ContactEntity entity, object  State)
    public static void AfterGetContactEntityAsync(int contactid, ContactEntity entity, object  State)
    public static void BeforeSaveContactEntity(ContactEntity  entity, object State)
    public static void AfterSaveContactEntity(ContactEntity  entity, ContactEntity  returnedEntity, object State)
    public static void AfterSaveContactEntityAsync(ContactEntity  entity, ContactEntity  returnedEntity ,object State)
     
    public static void BeforeGetDuplicates(string name, object State )
    public static void AfterGetDuplicates(string name, DuplicateEntry[] result, object State)
    public static void AfterGetDuplicatesAsync(string name, DuplicateEntry[] result, object State)

### Script APIs

All scripts inherit the current NetServer session that initiated the call. This is an important point, because scripts do not need to do any additional authentication. The scripts execute within the same context as the application and are free to use all of NetServer, or any other objects they can create – to do their work. The only restriction is that the scripts can not display any user interface - since these scripts run on the application server.
### Script Error Logging, Tracing

Script compilation and runtime errors are logged using normal NetServer logging features. The script itself may contain an OnError( errorDetails ) event handler that can report errors to the script author.

    public static void OnError(string message)

### Register Scripts

To enable your scripts, simply drop the script files (or assemblies) into the folder specified in the Scripting section of the configuration file. Remember to flush in order to get 6.web aware of the new scripts.dll.
