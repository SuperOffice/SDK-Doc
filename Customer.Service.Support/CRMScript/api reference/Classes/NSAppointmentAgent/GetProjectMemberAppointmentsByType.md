---
title: NSAppointment[] GetProjectMemberAppointmentsByType(Integer personId, DateTime startTime, DateTime endTime, Integer count, Integer appointmentType)
path: /EJScript/Classes/NSAppointmentAgent/Member functions/NSAppointment[] GetProjectMemberAppointmentsByType(Integer p_0, DateTime p_1, DateTime p_2, Integer p_3, Integer p_4)
intellisense: 1
classref: 1
sortOrder: 868
keywords: GetProjectMemberAppointmentsByType(Integer,DateTime,DateTime,Integer,Integer)
---


Method that returns a specified number of appointments of a specific appointment type within a time range. The appointments belong to the projects where the person specified is member.



* **personId:** The project member's person id
* **startTime:** The start of the time interval we want appointments from. This will usually be the current time.
* **endTime:** The end of the time interval.
* **count:** The maximum number of appointments that should be returned. -1 means no count restrictions.
* **appointmentType:** The appointment type, e.g. inDiary, inChecklist etc.
* **Returns:** Array of Appointments.


