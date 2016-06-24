<properties date="2016-06-24"
SortOrder="15"
/>

You can call any server-side class method using the AjaxMethodDispatcher. The only requirement is that the method return must be of type string.

In this article, we will add functionality for creating a follow-up appointment for a sale. Here is the code from the class we will register as an AjaxMethod object that does exactly that;

public class AjaxDemo

    {
    public string CreateFollowUp()
    {
        SaleEntity sale = AgentFactory.GetSaleAgent().GetSaleEntity(SuperStateManager.GetCurrentId("sale"));

  

        if (sale != null)
        {
            IAppointmentAgent agent = AgentFactory.GetAppointmentAgent();
            AppointmentEntity app = agent.CreateDefaultAppointmentEntityByType(SuperOffice.Data.TaskType.Appointment);
            app.Contact = sale.Contact;
            app.Person = sale.Person;
            app.Associate = sale.Associate;
            app.Description = "Sample Follow-up from Sale "+ sale.SaleId;
            app.StartDate = DateTime.Today.AddDays(7);
            app.EndDate = app.StartDate;
            app = agent.SaveAppointmentEntity(app);

  

            return app.AppointmentId.ToString();
        }
        else
            return String.Empty;
    }
    }

After you have registered the class in CRM.web, you will have access to all CRM.web objects, like SuperStateManager etc. So, as you can see from the code, we use the SuperStateManager to get the current sale id. If there is a current sale, the method will create a new appointment for the contact, person and associate from the sale, with a start date one week from today.

The new appointment is saved using the NetServer Appointment service agent.

The id of the new appointment is finally returned from the method in a string.
