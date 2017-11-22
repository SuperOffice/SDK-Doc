
##SUMMARY


Retrieve a specific member from the collection by its index.

The preferred interest will be returned if Index is not given (Interest with rank=1).

Use the Count() method to find how many members there are



##VALUE

SOInterest – The specified interest


##EXAMPLE

**Item**


This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.


This will return the current contacts first active company interest.


![](..\..\Examples\vbs\SOInterests.Item.vbs.txt)


##PARAM: Index


index of the interest to retrieve.


Note - the id here is a virtual id, not the persint.persint_id or contint.contint_id.


