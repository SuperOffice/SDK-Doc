---
uid: PersonPictureandBlobs
title: Person Picture and Blobs
---

Pictures are stored in the BLOB table.

The Blobs are linked to other records in the system using the BinaryLink table.

Blobs are currently used for four things:

-   Pictures on Person records.
-   Pictures on Project records.
-   Flags on Country records
-   Status Monitor pictures.

 

If you add a picture to a person, you must write the picture to the BinaryObject table, and then write the corresponding BinaryObjectLink to link the BLOB with the person record.

Without the link record, the picture will not appear.

 

Example
-------

First the BLOB data is inserted into the binaryobject table:

INSERT INTO CRM5."binaryobject" ("BinaryObject\_id", "conceptualType", "mimeType", "description", "originalSize", "blobSize", "isZipped", "isEncrypted", "extraInfo", "binaryData", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (624, 'PersonImage', 'image/jpeg', 'Njål Narvestad', 1333, 1333, 0, 0, '', (blobdata), 1164194209, 13, 0, 0, 0)

The conceptualType is useful for classifying the image. The same image can be used in several different contexts, thanks to the Link table. The conceptualType is primarily intended to provide a filter when generating lists for browsing.

Note that the mimeType is used to determine how to display the image, so it should be set appropriately.  The description is useful when browsing the BLOB table - so try to set it to something meaningful.

The zip and encrypt values are not supported at the moment, so they should be 0.

OriginalSize and BlobSize are used to when allocating read buffers, so they must be set to the size of the BLOB.

When we add support for ZIP compression, the BlobSize may be smaller than the originalSize.

 

Then the link from the BLOB (binaryObjectId=624) to the person record (ownerTable=6, ownerRecord=74)

INSERT INTO CRM5."binaryobjectlink" ("BinaryObjectLink\_id", "binaryObjectId", "ownerTable", "ownerRecord", "linkComment", "linkType", "rank", "registered", "registered\_associate\_id", "updated", "updated\_associate\_id", "updatedCount") VALUES (267, 624, 6, 74, '', 1, 1, 1164194209, 13, 0, 0, 0)

Of course, we must not forget to make a note of our inserts in the transaction log:

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110415, 1164197809, 0, 4352, 13, 205, 624)

INSERT INTO CRM5."traveltransactionlog" ("traveltransactionlog\_id", "ttime", "prev\_record\_id", "type", "associate\_id", "tablenumber", "record\_id") VALUES (110416, 1164197809, 0, 4352, 13, 206, 267)


### See Also:

[binaryobject Table](../Tables/binaryobject.md)
[binaryobjectlink Table](../Tables/binaryobjectlink.md)