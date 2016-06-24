<properties date="2016-06-24"
SortOrder="5"
/>

The Tooltip services are used by JavaScript’s on the web-client to provide detailed tooltips at run-time. Using the tooltip agent we can retrieve a constructed tool tip for various business objects of SuperOffice for example contact, person and so on. The different tooltips given for each business object will be different depending on the business need of the object. Below are some typical tooltips that will be given for each business object.

Tooltip for contact

```
{contact_id=5}
Bjørge AS, BAvdeling
B-gaten 45
04
Kunde
Admin Adminson
```

 

Person tooltip

```
{person_id=9}
Admin Adminson
(ADMIN - Administrasjon)
StateZeroDatabase
Norway
qa.testbruker@superoffice.com
```

 

Project tooltip

```
{project_id=15}
Prasjaakt
DM/Kampanje - Planlagt
This is text....
{person_id=10}
[IMG:person_id=10]Arne Arnesen
(AA - Administrasjon)
StateZeroDatabase
A-veien 23
N-0245 OSLO
Norway
qa.testbruker@superoffice.com
```

 

 

Appointment tooltip

```
{appointment_id=59}
Yngve Yssen (Yngve'S Fisk & Vilt, YAvdeling)
Prösjöökt
Telefon ut
[SR_DONE]: [DT:08/07/2002 14:39:56.0000000]
BTelefon utBBB
([DT:03/31/2002 18:00:00.0000000] - [DT:03/31/2002 18:15:00.0000000])
Brede Bredesen  [DT:08/07/2002 12:39:47.0000000], Brede Bredesen [DT:08/07/2002 12:39:56.0000000]
```

 

Sale tooltip

```
{sale_id=5}
Yngve Yssen (Yngve'S Fisk & Vilt, YAvdeling)
Pr"sj""kt
SalgWAAW
Sendt tilbud - 100%
([DT:12/31/2002 00:00:00.0000000])
[M:15000] - [M:1399.5] = [M:13600.5]
Arne Arnesen  [DT:07/31/2002 11:13:58.0000000]
```

 

Each tooltip is different from the other. Here we can see that the tooltip gives us a fairly detailed data for each business object.

1. autolist
