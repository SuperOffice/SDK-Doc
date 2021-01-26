<properties date="2016-06-24"
SortOrder="115"
/>

*Description*:

Enter a users score to an FAQ entry. The total score is weighted of all votes.

 

*In Parameters*:

* sessionKey            - A valid session key. If  the entry is private a valid session key is required, otherwise the session key can be empty

* entryId   - The FAQ entry ID.

* score       - The new score. A value from 0-10 where 10 is top score.

 

*Out Parameters*:

* errorCode  - See appendix for error codes

 

*Example*:

customer.customerService custService = new customer.customerService(); 

string entryId="2";

string score = "8";

string res = custService.faq\_scoreEntry("",entryId,score);
