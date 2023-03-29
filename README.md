# bespoked-bike-web-app

![image](https://user-images.githubusercontent.com/48455155/228117449-d67ca17a-4313-4163-aecc-c76cf5b23b21.png)

![image](https://user-images.githubusercontent.com/48455155/228117952-78135297-f6c4-4691-bc8a-165a2c674b84.png)

![image](https://user-images.githubusercontent.com/48455155/228118152-548fd519-af1c-46df-8fd4-f49b133b2483.png)


## Business Operational Intelligence Web Application
This is a web application that allows for business operational intelligence. The back-end was built with ASP.NET Core 7.0 API and the front-end was built with React Vite. The database used for this project was SQL Server and it was scaffolded using Entity Framework to create entities in the back-end project.

The application is intended to display visualizations for the business intelligence data that was received from the SQL Server database data source. To display these visualizations, the intention was to use Microsoft PowerBI by generating an access token via the Power BI Embed REST API. However, there were issues with generating the access token which is currently being worked on towards resolving.

## Technologies Used
* ASP.NET Core 7.0 (Backend API)
* React Vite (Frontend Client)
* SQL Server (Database for Business Entities)
* Entity Framework Core (Data Modeling for use in the Backend API)
* Microsoft PowerBI (Reporting)


## Installation
1. Clone the repository to your local machine.
2. Open the solution in Visual Studio.
3. Configure the connection string for the SQL Server database.
4. Run the Entity Framework migration to create the necessary tables in the database.
5. Build and run the ASP.NET Core back-end project.
6. Navigate to the front-end directory and run the React Vite project.
7. Use the application to view the business intelligence data and visualize it in Microsoft PowerBI (if access token generation issue is resolved).

## Business Requirements Not Completed (3/27/2023)
* Display a list of sales. 
* Optionally filter by date range. 
* This should include the Product, Customer, Date, Price, Salesperson, and Salesperson Commission.
* Create a sale
* Display a quarterly salesperson commission report

* Products – No duplicate product can be entered.
* Salespersons – No duplicate salesperson can be entered.

## Non-functional Requirements Not Completed (3/27/2023)
* Optional: Host in Azure.

