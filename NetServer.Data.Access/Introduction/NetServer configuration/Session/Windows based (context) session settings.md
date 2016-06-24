<properties date="2016-05-11"
SortOrder="100"
/>

If the application session is set to behave in the above manner, your session only requires an authentication and a closure. In this configuration however, once you authenticate a session it will be for the entire lifetime of the session. It is not necessary to call continue and suspend methods. The session values for this configuration will be stored in a context static manner.

 

 

```
<Session>
<add key="Mode" value="Context"/>
</Session>

 

 
```

 
