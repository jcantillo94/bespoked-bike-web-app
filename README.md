# bespoked-bike-web-app

![image](https://user-images.githubusercontent.com/48455155/228117449-d67ca17a-4313-4163-aecc-c76cf5b23b21.png)

## Business Operational Intelligence Web Application
This is a web application that allows for business operational intelligence. The back-end was built with ASP.NET Core 7.0 API and the front-end was built with React Vite. The database used for this project was SQL Server and it was scaffolded using Entity Framework to create entities in the back-end project.

The application is intended to display visualizations for the business intelligence data that was received from the SQL Server database data source. To display these visualizations, we intended to use Microsoft PowerBI by generating an access token via the Power BI Embed REST API. However, there were issues with generating the access token which we are currently working on resolving.

## Technologies Used
* ASP.NET Core 7.0
* React Vite
* SQL Server
* Entity Framework Core
* Microsoft PowerBI


## Installation
Clone the repository to your local machine.
Open the solution in Visual Studio.
Configure the connection string for the SQL Server database.
Run the Entity Framework migration to create the necessary tables in the database.
Build and run the ASP.NET Core back-end project.
Navigate to the front-end directory and run the React Vite project.
Use the application to view the business intelligence data and visualize it in Microsoft PowerBI (if access token generation issue is resolved).

