<properties date="2016-06-24"
SortOrder="177"
/>

<img src="../../Superoffice_Net%20Server_Services_files/image012.jpg" width="470" height="267" />

 

Name – frmAppointment

Text - Today's Appointments

 

Grid view

 

Name – dgvAppointments

 

Add the following columns to the columns collection of the grid.

 

Column 0

Name – AppId

Header text – AppId

Visible – false

 

Column 1

Name – ContactName

Header text – Contact Name

 

Column 2

Name – Desc

Header text – Description

 

Column 3

Name – DueDate

Header text – Due Date

 

Column 4

Name – status

Header text – Status

 

Button 1

Name – btnComplete

Text - Change status to complete

 

Button 2

Name – btnPostpone

Text - Postpone App: to tomorrow

 

After you have the above controls ready paste the below code in you forms .CS file of the frmAppointment form.

    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Data;
    using System.Drawing;
    using System.Text;
    using System.Windows.Forms;
    using SuperOffice;
    using SuperOffice.CRM.Services;
    using SuperOffice.Data.SQL;
    using SuperOffice.Data;
    using SuperOffice.CRM.Security;
     
    namespace WindowsApplication2
    {
        public partial class frmAppointment : Form
        {
            public frmAppointment()
            {
                InitializeComponent();
            }
     
            private void frmAppointment_Load(object sender, EventArgs e)
            {
                //when the form loads lets populate the grid with data
                PopulateData();
            }
     
            private void btnComplete_Click(object sender, EventArgs e)
            {
                try
                {
                    if (dgvAppointments.SelectedCells[4].Value.ToString() != SuperOffice.Data.AppointmentStatus.Completed.ToString())
                    {
                        //get the appointment agent
                        using(AppointmentAgent compAppointmentAgent = new AppointmentAgent())
                        {
                            //get the appointment entity of the selected appointment ID
                            AppointmentEntity selectedApp = compAppointmentAgent.GetAppointmentEntity(
                                                                      Convert.ToInt32(dgvAppointments.SelectedCells[0].Value));
         
                            //check whether the user has the rights to change the data in the DB
                            if ((selectedApp.FieldProperties["Completed"].FieldRight.IsActive) &
                                (selectedApp.FieldProperties["Done"].FieldRight.IsActive))
                            {
                                //change the completed property to complete
                                //Note: when you change the completed property the status will also change to complete
                                selectedApp.Completed = SuperOffice.Data.ActivityStatus.Completed;
                                //change the done time to now
                                selectedApp.Done = DateTime.Now;
                                //finally save the entity
                                compAppointmentAgent.SaveAppointmentEntity(selectedApp);
                                PopulateData();
                                dgvAppointments.Refresh();
                            }
                            else
                            {
                                MessageBox.Show("You do not have the necessary rights to perform this operation", "Message", MessageBoxButtons.OK, MessageBoxIcon.Information);
                            }
                        }
                    }
                    else
                    {
                        MessageBox.Show("You can not change the status of an already completed appointment", "Message", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    }
                    ButtonDisabled();
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message, "Message", MessageBoxButtons.OK, MessageBoxIcon.Information); 
                }
     
            }
     
            private void btnPostpone_Click(object sender, EventArgs e)
            {
                try
                {
                    if (dgvAppointments.SelectedCells[4].Value.ToString() != SuperOffice.Data.AppointmentStatus.Completed.ToString())
                    {
                        //get the appointment agent
                        using(AppointmentAgent compAppointmentAgent = new AppointmentAgent())
                        {
                            //get the appointment entity of the selected appointment ID
                            AppointmentEntity selectedApp = compAppointmentAgent.GetAppointmentEntity
                                (Convert.ToInt32(dgvAppointments.SelectedCells[0].Value));
         
                            //check whether the user has the permission to change the values in the DB
                            if ((selectedApp.FieldProperties["ActiveDate"].FieldRight.IsActive) &
                                (selectedApp.FieldProperties["DoBy"].FieldRight.IsActive) &
                                (selectedApp.FieldProperties["EndDate"].FieldRight.IsActive) &
                                (selectedApp.FieldProperties["Status"].FieldRight.IsActive))
                            {
                                //set the ActiveDate,DoBy and the EndDate properties to next day
                                selectedApp.ActiveDate = selectedApp.ActiveDate.AddDays(1);
                                selectedApp.DoBy = selectedApp.DoBy.AddDays(1);
                                selectedApp.EndDate = selectedApp.EndDate.AddDays(1);
                                //Change status property to not started
                                selectedApp.Status = SuperOffice.Data.AppointmentStatus.NotStarted;
                                //finaly save the entity
                                selectedApp = compAppointmentAgent.SaveAppointmentEntity(selectedApp);
                                PopulateData();
                                dgvAppointments.Refresh();
                            }
                            else
                            {
                                MessageBox.Show("You do not have the necessary rights to perform this operation", "Message", MessageBoxButtons.OK, MessageBoxIcon.Information);
                            }
                        }
                    }
                    else
                    {
                        MessageBox.Show("You can not postpone a Completed appointment", "Message", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    }
                    ButtonDisabled();
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message, "Message", MessageBoxButtons.OK, MessageBoxIcon.Information);  
                }
            }
     
            /// 
            /// This method will populate the data grid with today's appointments
            /// of the logged in users diary.
            /// 
            private void PopulateData()
            {
                try
                {
                    //set the AutoGenerateColumns of the grid to false since we dont need
                    //all the columns to be visible.
                    dgvAppointments.AutoGenerateColumns = false;
                    //get the appointment agent
                    using(AppointmentAgent appointmentAgent = new AppointmentAgent())
                    {
                        //get the appointemnts of the logged in users diary which are due for today.
                        Appointment[] appoinmentList = appointmentAgent.GetAssociateDiary(SoContext.CurrentPrincipal.AssociateId, DateTime.Today, DateTime.Today.AddHours(24), 10);
                        //set the datasource of the datagrid
                        dgvAppointments.DataSource = appoinmentList;
                        if (appoinmentList.Length > 0)
                        {
                            foreach (Appointment appointmentRow in appoinmentList)
                            {
                                //here we set the dataproperty of each column we added to the
                                //grid during design time.
                                dgvAppointments.Columns[0].DataPropertyName = "AppointmentId";
                                dgvAppointments.Columns[1].DataPropertyName = "ContactName";
                                dgvAppointments.Columns[2].DataPropertyName = "Description";
                                dgvAppointments.Columns[3].DataPropertyName = "doby";
                                dgvAppointments.Columns[4].DataPropertyName = "status";
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message, "Message", MessageBoxButtons.OK, MessageBoxIcon.Information);   
                }
            }
     
            private void dgvAppointments_RowHeaderMouseClick(object sender, DataGridViewCellMouseEventArgs e)
            {
                ButtonEnable();
            }
     
            private void ButtonEnable()
            {
                btnComplete.Enabled = true;
                btnPostpone.Enabled = true;
            }
     
            private void ButtonDisabled()
            {
                btnComplete.Enabled = false;
                btnPostpone.Enabled = false;
            }
     
            private void frmAppointment_FormClosed(object sender, FormClosedEventArgs e)
            {
                Application.Exit();
            }
        }
    }
