---
title: Screen choosers
path: /Blogic/Screen choosers
sortOrder: 8
---

Here a ejScript can be added to several eJournal display screens. This script can then redirect to a new blogic screen, or perform other actions.


    To perform a redirect use the setVariable("url", url-to-redirect-to);

Note that the redirection happens after the screen chooser has finished executing and not instant when the url variable is set.

Remember to resend GET/POST variables if needed.


