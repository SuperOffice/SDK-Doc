
##EXAMPLE

**TrLogMax**

This text may be copied to the notepad, and saved as a *.vbs file. Remember to change the login information.

![](..\..\Examples\vbs\SOTravellers.TrLogMax.vbs.txt)


##SUMMARY

This returns the last record currently in traveltransactionlog.


##VALUE

Long – the last entry in traveltransactionlog (traveltransactionlog_id)


##REMARKS

Traveltransactionlog is used to keep track of all updates, that is, insertions, deletions and changes to all data records in SuperOffice. It is used by the update functions in Travel (local update, async update, central update) and Satellite (up, down files) to determine what to send. 

The log contains one record for each change. The record does not actually contain the data that was changed, only a reference to the table and record id of the changed record

