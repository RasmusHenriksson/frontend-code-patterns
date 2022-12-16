# Frontend Code-Patterns

In this project we have a frontend using react and we are using ASP.NET WEB-API in a different repository as a Backend WebAPI.
We also have a SQL server database using Entity Framework core in our Backend WebAPI.

# Languages, libraries & frameworks
- REACT
- HTML
- CSS
- JavaScript

# Assignment
`MVVM`
`Single Responsibility Principle`
`Open Closed Principle`
`Liskov Substitution Principle`
`Interface Segregation Principle`
`Dependency Inversion Principle`



## INSTALLATION

inside the frontend application run :
`npm install`
(downloads the proper dependencies for this repository)

in the backend-API, add a new database connection and pass in its connection string inside `SQL` in appsettings.
run the following commands when it's done
`add-migration '(name)'`
`update-database`

Now you will need to hardcode values to the table Products and the tables Categories.
Once that is done you can now run the backend-API and wait for it to load, simultaneously in the vscode project, you can run `npm start`.
Which runs the app in the development mode.
Open [http://localhost:3000]to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

:sparkles: Now you should be able to see the products displayed on the frontend from your backendAPI.