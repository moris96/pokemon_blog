# Pokemon Blog Site 

### A CRUD web app that lets you discuss your favorite Pokemon: games, anime, cards, etc, using a cloud-deployed database via MongoDB. 

---

## Getting Started:
#### Click here (add heroku link once deployed) to get started. You might have to wait a minute or two for Heroku to warmup...

---

## Technologies Used:
* HTML
* CSS
* JavaScript
* Node.js
* Mongoose 
* MongoDB
* Express
* Google Fonts 

---

## ERD: (upload screenshot of it)

---

## Project Screenshots:

---

## Code Discussion:

### This web app uses the MVC code organization. Bulk of the project is divided into 3 folders:
* models
* views
* controllers 

### Models:
* database model (for MongoDB)
* user model (for login/signup)
* pokemon model (for new page)
* seed (for seed: deleting & replacing everything in database)

### continue readme 

---

## Restful Routes: 
Action | URL | HTTP Verb | JSX view filename | mongoose method 
--- | --- | --- | --- |--- 
Index | /pokemon/ | GET | Index.jsx | Pokemon.find() | Pokemon.find()
Show | /pokemon/:id/ | READ | Show.jsx | Pokemon.findOne or Pokemon.findById | 
New | /pokemon/new | GET | New.jsx | none | 
Create | /pokemon/ | POST | none | Pokemon.create(req.body) | 
Edit | /pokemon/:id/edit | GET | Edit.jsx | Pokemon.findOne or Pokemon.findById | 
Update | /pokemon/:id | PUT | none | Pokemon.findByIdAndUpdate or Pokemon.findOneAndUpdate | 
Destroy | /pokemon/:id | DELETE | none | Pokemon.findByIdAndRemove or Pokemon.findByIdAndDelete | 

### Login & Signup routes: 
HTTP Verb | URL | JSX view filename  
--- | --- | --- | 
GET | /user/login | LogIn.jsx 
GET | user/signup | SignUp.jsx