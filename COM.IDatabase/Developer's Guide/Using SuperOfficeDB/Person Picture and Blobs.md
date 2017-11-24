---
uid: PersonPictureandBlobs
title: Person Picture and Blobs
---

Pictures are get/set’able, and extractable via COM

Pictures are currently supported on three objects: <see cref="IPerson.Picture">Person.Picture</see>, <see cref="IProject.Picture">Project.Picture</see>, and <see cref="IStatusMonitor.Picture">StatusMonitor.Picture</see>

 

```
ISOPicture : IDispatch
    Id         -&gt; record identity (read-only)
    Type     -&gt; string   (read-only - picture format GIF/JPEG/BMP)
    Height    -&gt; long   (read-only – pixel size of picture)
    Width    -&gt; long   (read-only)
    IsReadOnly  -&gt; boolean  (read-only – can we load a new picture?)
    Picture   -&gt; bitmap  (get picture in format suitable for use with GUI controls)
    ReadFromFile( path )    (can’t be called if read-only)
    WriteToFile( path  )
    Delete()      (removes picture from object - can’t be called if read-only)
```
 

 

This means we can write code like this:

```
    Set p = db.GetPerson( 123 )
    If p.HasPicture Then
       p.Picture.WriteToFile( “123.image.jpg”  )
       msgbox p.Picture.Width & ”x” &  p.Picture.Height
    Else
       p.Picture.ReadFromFile(“defaultimage.jpg”)
       p.Save
    End if
```
 

 

The blob system is also accessible from the Database object:

<see cref="Database.ExportBlobToFile">Database.ExportBlobToFile</see> and <see cref="Database.ImportBlobFromFile">Database.ImportBlobFromFile</see>

 

This allows you to store any object you like in the database, and to associate it with any object in the database you like.