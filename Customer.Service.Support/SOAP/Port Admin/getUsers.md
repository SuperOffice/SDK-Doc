<properties date="2016-06-24"
SortOrder="187"
/>

*Description*:

With this method you will get the ids of the users in eJournal. You can specify if you want to get only those which are set to normal in eJournal or if you want to get everyone (except deleted and read users). The result is sorted by username.

                  

*In Parameters*:

* sessionKey                        - A valid session key

* includeOnlyNormal          - do only include those with status “Normal”

 

*Out Parameters*:

* errorCode  - See appendix for error codes

* users          - An array of user ids, sorted by username
