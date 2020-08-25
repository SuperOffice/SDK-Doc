<properties date="2016-06-24"
SortOrder="2"
/>

Introduction
============

A simple but powerful feature of SuperOffice Expander Tools is the possibility of creating extra tables in the database. Instantly, these tables will be available for standard CRUD-operations (Create, Read, Update, Delete) inside the Customer Service client. They can also be accessed from within the Sales & Marketing client by accessing the Customer Service interface inside a web panel.

A very normal use case is to create a table to store customer information which cannot be stored in an extra field (multiple values), however this system is quite flexible and can be used to create databases of multiple related tables used to store pretty much anything.

In this example, I will demonstrate how to create an extra table used to organize equipment units (inventory), and relate them to requests (many requests for one unit) and companies (many units for one company). Furthermore, I will make this table available as a web panel inside the Sales & Marketing client.
