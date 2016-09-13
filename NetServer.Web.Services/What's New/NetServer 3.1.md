<properties date="2016-06-24"
SortOrder="89"
/>

NetServer 3.1
=============

Released March 2008, as part of 6.web 6.2
SOAP Namespace
--------------

The SOAP Namespace changed since the version number is encoded in the XML namespace. You will need to regenerate SOAP proxies that reference the NetServer services.
Known issues
------------

### ArchiveList data

There is a bug in the SOAP serialization of the Archivelist, so that the column data values are serialized with an extra container XML element. This causes problems for Java clients.
### Appointment timespan

The .net framework contains a bug that causes TimeSpan properties to be serialized as empty values.

SOAP Serialization
------------------

The serialization format for the SOAP messages has changed, so you will need to regenerate any web-reference proxies you have. 

The tablerights enum has been replaced with a SHORT that contains the bitflags. So instead of INSERT, you now get the value 1. 

Each carrier has a TableRight property which consist of a Right and a Reason property. The Right property is a 16-bit integer which is the bit representation of the user’s table rights for the current carrier.  Each value in the following list represents a bit in the table right enumeration:


* None = 0
* Select = 1
* Update = 2
* Insert = 4
* Delete = 8
* Filtering = 16
* RestrictedUpdate = 32
* Uninitialized = 128

We recommend that you create an enum that looks like the code listed below. Feel free to copy this code and use it in your client(this is C\#.Net, please modify to suit the language of choise):

           [Flags]
           public enum ETableRight
           {
                 /// <summary>
                 /// The row should be hidden from the user.
                 /// </summary>
                 None = 0,
                 /// <summary>
                 /// The user is allowed to see the row.
                 /// </summary>
                 Select = 1,
                 /// <summary>
                 /// The user is allowed to modify the values in this row.
                 /// Applies to rows with id > 0.
                 /// Row with id = 0 needs insert rights instead.
                 /// </summary>
                 Update = 2,
                 /// <summary>
                 /// The user is allowed to add new rows to the table.
                 /// Implies update rights on a row with id = 0.
                 /// </summary>
                 Insert = 4,
                 /// <summary>
                 /// The user is allowed to delete this row.
                 /// </summary>
                 Delete = 8,
                 /// <summary>
                 /// A flag used to indicate that some fields may be hidden.
                 /// The user has no Select access, but he will have Filtering.
                 /// Used on rows where the visiblity flag may affect what the user can see
                 /// (e.g.: private appointments).
                 /// </summary>
                 Filtering = 16,
                 /// <summary>
                 /// A hint flag used to indicate that some fields may not be updateable, even though
                 /// the user has update access to the row.
                 /// Used on rows where some fields are locked down by business rules or integrity constraints.
                 /// (e.g.: the database owner contact.name field is read-only. An invitation's contact id is read-only)
                 /// </summary>
                 RestrictedUpdate = 32,
                 /// <summary>
                 /// Magic value to indicate not initialized
                 /// </summary>
                 Uninitialized = 128,
           };


So let’s say that you get the value “51” in the Right property of the TableRight. The XML returned from our service would look like this:



 

              &lt;TableRight&gt;
                &lt;Right&gt;51&lt;/Right&gt;
                &lt;Reason /&gt;
              &lt;/TableRight&gt;

So what does this value “51” tell us? In case you are unfamiliar with bitflags and how to calculate the value of them, I’ll run through it. We will start at the bottom of the list and subtract the value of the table right if it is smaller than or equal to our 16-bit integer Right value.

 Using this algorithm, we find that Uninitialized is not a part of our table rights as it is larger than 51. RestrictedUpdate on the other hand is smaller than 51 and when subtracted we are left with 19. This means that RestrictedUpdate is a part of our table rights. Filtering is smaller than 19, which leaves us with 3 after adding Filtering to our table rights. Both Delete and Insert are larger than three, which leaves us with Update and Select as our final table rights. So 51 means that the user has the following table rights:
Select, Update, Filtering and RestrictedUpdate.

Programmatically, this is done in a more elegant fashion. The bitwise AND operator ‘&’, enable you to do this quite easily using the previously defined ETableRight enumeration. Let’s say that you want to verify that a user has Delete table rights. It would look something like this:

ETableRight right ;

if( (right & ETableRight.Delete) == ETableRight.Delete )

    //Delete something :)
What you do here is that you perform a logical bitwise AND operation on the bit representing Delete. If the result equals the value of Delete, that table right is present in the 16 bit interger representing the users table rights.
