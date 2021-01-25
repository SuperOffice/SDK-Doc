<properties date="2016-06-24"
SortOrder="163"
/>

*Description*:

Gets data for a single reply template in a specified language.

 

*In Parameters*:

* psessionKey                      - A valid session key

* preplyTemplateId              - The reply template id

* planguageId                      - The language id to retrieve the reply template fields in

*Out Parameters*:

* errorCode              - See appendix for error codes

* subject                   - The subject of the reply template

* headers                  - Optional headers for the reply template

* plainBody             - Plaintext body of the reply template

* htmlBody              - Html body of the reply template

* hasPlainBody        - If true the reply template is set to include the plaintext body

* hasHtmlBody        - If true the reply template is set to include the html body



*Example*:
```
ticket.ticketService ticketService = new ticket.ticketService();

string sessionKey;

string errorCode = ticketService.login("egon", "norges bank", out sessionKey);

 
if (errorCode.Equals("0")
{

  getReplyTemplate(sessionKey, 19, 1, out subject, out headers, out plainBody, out htmlBody,  out hasPlainBody,  out hasHtmlBody);

}
```
 
