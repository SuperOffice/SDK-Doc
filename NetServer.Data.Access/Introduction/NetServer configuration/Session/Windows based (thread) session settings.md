<properties date="2016-05-11"
SortOrder="99"
/>

If you configure your applications session to behave in the above method, every session will require suspend and continue method to be called in. In this specific configuration, each thread that is executed in the NetServer will have sessions that are stored in them with the implication of different threads having different session values stored in them. If you want to suspend a session, you must call the suspend method which returns a string with the session values. Should you wish to continue that session, you must call the continue method and pass the string with session values in it as a parameter.

 

 

```
<Session>
<add key="Mode" value="Thread"/>
</Session>

 

 
```
