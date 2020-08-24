
# <span style="color:navy">Project Name:</span> *Hospital API*

## <span style="color:navy">Description:</span> its a hospital api to keep the tracks of patients and their reports and also for doctors as administrator.

  

## <span style="color:navy">Technologies:</span>

*Postman
Node.js
Express.js
Passport.js 
MongoDB
Robo3T*

## <span style="color:navy">Features:</span>

- Authentication
- Doctor Register
- Doctor Login
- Patients Register
- Create Report 
- Patient's all reports
- Status

## <span style="color:navy">Run and Test:</span>
Launch <span style="color:orange">Postman</span> and pass the below requests

|<span style="color:green">URL PATH</span>          |<span style="color:green">Request Type</span>|<span style="color:green">Description</span>| <span style="color:green">Field-Input Needed</span> |
| :---                                             |    :----:                                  |        :---:                              |          ---:                              |
| localhost:8000/api/v1/doctors/register           |POST                                        |create and register doctor                | Body: name, username, password, confirm_password and select x-www-form-urlencoded|
| localhost:8000/api/v1/doctors/login              |POST                                        |login the doctor in app                   |Body: username, password and select x-www-form-urlencoded. you will get your json webtoken|
| localhost:8000/api/v1/patients/register          |POST                                        |register patients in hospital             | Body: phoneNumber, name.    Headers: Authorization- Bearer yourJsonWebToken|
| localhost:8000/api/v1/patients/:id/create_report |POST                                        |create the report for any specific patient|Body: status-(Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit).  Headers: Authorization- Bearer yourJsonWebToken.. Params: Path Variables=> id-phoneNumber of the patients|
| localhost:8000/api/v1/patients/:id/all_reports   |GET                                         |get all reports of a specific patient     |Headers: Authorization- Bearer yourJsonWebToken.. Params: Path Variables=> id-phoneNumber of the patients|
| localhost:8000/api/v1/reports/:status            |GET                                         |to get all reports of a specific status   |Headers: Authorization- Bearer yourJsonWebToken.. Params: Path Variables=> status-Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit|

  
## <span style="color:navy">Project Setup:</span>

 

<span style="color:darksalmon">**Environment: **</span> *Windows 10,*
	
<span style="color:darksalmon">**NPM: **</span>
			

 - express
 - express-ejs-layouts
 - express-session
 - passport
 - passport-local
 - passport-jwt
 - mongoose
 - connect-mongo
 - jsonwebtoken
 
 
  Commands to start the server, to install node-package-manager are:
```
npm start
npm install "package-name"

```

<span style="color:darksalmon">**Other Applications: **</span>

 - Robo3T
 - Postman
 - vs code

## <span style="color:navy">Step By Step guide</span>

 - create index file for the project
 - set up the directory folder structure (Config, controllers, models, routes)
   -   Config folder for database connection and authentication setup
   - Controllers folder for all controllers functions
   - routes folder for all routes
   - models folder for all models including my DB
- link the folders as required
- link mongoDB
- setup schema for models
- create routes for the desired operations in the route folder
- create controllers for the desired operations in the controllers folder
- setup passport js and passport jwt
