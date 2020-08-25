<properties date="2016-06-24"
/>

Adding Priority

Adding priority
---------------

Using this working method, it is quite easy to start differentiating on priority. Some requests are more urgent than others, and making sure the users pick the highest priority requests first make sure they are managed in this fashion. Doing this, is as simple as specifying that when people list requests, they should order by priority and pick the topmost. To prioritize between requests of the same priority, we can also order by creation date. I.e. pick the oldest request with the highest priority.

The downside of this method is that the highest prioritized request always will be picked first, even when other requests have been waiting in the queue for a long time. If the inbound volume of requests is high enough, perhabs we will never get around to handling the medium prioritized requests. Perhabs we would like these medium (or low) prioritized requests to become higher prioritized.

Using deadline
--------------

Another method of sorting by priority is using the "deadline" field on a requests. This is a field which value will be set when a request is created, according to its priority and the deadline for that priority. The value is also calculated around the working hours of that priority.

E.g. a request (1) created monday at 13:00 with medium priority (mon-fri, 0800-1600, 8 hour deadline) will get deadline tuesday at 13:00.

Anther request (2) created monday at 13:00 with high priority (mon-fri, 0800-1900, 4 hour deadline) will get deadline monday at 17:00.

A third request (3), created tuesday at 12:00 with high priority will get deadline tuesday at 16:00.

If these requests are managed ordered by deadline, then we will manage request \# 2 before request \# 3, even if the last one has a higher pirority. This is probably what we want, since it makes sure that medium priority requests will get handled when they reach a certain age.
