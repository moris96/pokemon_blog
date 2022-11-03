# Pokemon Blog Site 

### A CRUD web app that lets you discuss your favorite Pokemon: games, anime, cards, etc, using a cloud-deployed database via MongoDB. 

---

## Getting Started:
#### [Click Me](https://pokemonblog.herokuapp.com/) to get started. You might have to wait a minute or two for Heroku to warmup depending on your internet speed...

---

## Technologies Used:
* HTML
* CSS
* JavaScript
* Node.js
* Mongoose 
* MongoDB
* Express
* React 
* Google Fonts (CDC Fonts)

---

## ERD: 
![](/images/erd.png)
trello workboard link: [trello](https://trello.com/b/bCob98Ys/pokemon)

---

## Project Screenshots:
### Index Page: 
![](/images/indexPage.png)

### Show Page: 
![](/images/showPage.png)

### Create New Blog Page: 
![](/images/newPoke.png)

### Edit Blog Page:
![](/images/editPoke.png)

### Login Page: 
![](/images/login.png)

### Singup Page:
![](/images/singup.png)

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

### Pokemon Models Include:
* user name 
* favorite pokemon
* image
* user initial comment
* user thoughts 
* replies (anyone can add a reply)

### User Model Includes: 
* user name 
* user password 

### CRUD:
#### This app takes advantage of methods and functions within express and Mongoose. To get to a page you wants, we call the .find() function 
```JavaScript
Pokemon.find({}, (err, foundPokemons) => {
            if(err){
               res.status(400).send({
                msg: err.message
               }) 
            } else {
                res.locals.data.pokemons = foundPokemons
                next()
            }
        })
```
#### Replies: In order for all users to reply to an individual post made by another user, we use the addReply function to give permission to all, and replies are displayed in the MongoDB (mongo database)
```JavaScript
addReply(req, res, next){
        Pokemon.findById(req.params.id, (err, foundPokemon)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                Reply.create(req.body)
                .then((createdReply) => {
                    foundPokemon.replies.addToSet(createdReply)
                    foundPokemon.save()
                    res.locals.data.pokemon = foundPokemon
                    next()
                }).catch((err) => {
                    res.status(400).send({
                        msg: err.message
                    })
                })
            }
        })
``` 

#### Create: We use the create() function to create a new blog post 
```JavaScript
create(req, res, next){
        req.body.readyToEat = req.body.readyToEat === 'on'? true : false;
        Pokemon.create(req.body, (err, createdPokemon)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.pokemon = createdPokemon
                next()
            }
        })
```

#### Index: Shows user's created blog post on index page 
```JavaScript
index(req, res, next){
        Pokemon.find({ username: req.session.username }, (err, foundPokemons) => {
            if(err){
               res.status(400).send({
                msg: err.message
               }) 
            } else {
                res.locals.data.pokemons = foundPokemons
                next()
            }
        })
    }
```

#### Destroy: User deletes a blog post with delete button 
```JavaScript
destroy(req, res, next){
        Pokemon.findByIdAndDelete(req.params.id, (err, deletedPokemon) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.pokemon = deletedPokemon
                next()
            }
        })
    }
```

#### Update: User edits a blog post on edit page 
```JavaScript
update(req, res, next){
        req.body.readyToEat = req.body.readyToEat === 'on'? true : false;
        Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPokemon)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.pokemon = updatedPokemon
                next()
            }
        })
    }
```

#### Show: Shows a user blog post on show page (the blog post itself) with replies functionality 
```JavaScript
show(req, res, next){
        Pokemon.findById(req.params.id).populate("replies").exec((err, foundPokemon) => {
            if(err){
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a pokemon with that ID'
                })
            } else {
                res.locals.data.pokemon = foundPokemon
                next()
            }
        })
    }
```

#### Seed Data: 
```JavaScript
const starterPokemon = [
  {
    name: 'Trainer Red', favePoke: 'Pikachu', image: "https://i1.sndcdn.com/artworks-000193803962-tla7ov-t500x500.jpg", thoughts: "I beat everyone in both Kanto and Johto. Feeling cute, might go to Unova and do the same. Idk.", comment: "I am the true champion of Kanto"
  }
  
]
```

#### Note: The 400 error messages is used to display errors on the browser in the event an error has occured with the HTTP Request. 

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
GET | /user/signup | SignUp.jsx

---

## Key Learnings / Takeaways: 
* Learned how the internet and websites work 
* Learned more about Node, JSX, express, mongoose, React (bulk of the backend work)
* Learned how to connect server to database 
* Understood the simplicity of using Jsx templates for pages 

---

## Challenges: 
* CSS & Styling (My strength lies in backend work lol)
    * Getting the images on the index page to be the same size (biggest CSS problem I faced!)
* Getting the user login/signup pages to work 
* Getting the replies button to work to show multiples replies (even in database) instead of just 1 

--- 

# My love for Pokemon: 

### I love Pokemon. It's my favorite video game franchise since I was 6 years old. The first game I played was Crystal Version on the Game Boy Color, but my favorite game is Emerald Version which I still replay many times a year to this day on my GBA SP (Gameboy Advanced SP). Pokemon in my opinion is the greatest video game franchise in history, and it's super fun to play. I recommend starting with Fire Red / Leaf Green version as they are remakes of the original Red/Blue/Green games, but with generation 3 graphics and additional story content. 

## Credits to Satoshi Tajiri for creating Pokemon! 

## My top 5 favorite Pokemon are: 
1. Rayquaza
2. Dragonite 
3. Mudkip 
4. Flygon 
5. Squirtle 

I'd say I'm a Dragon/Water type trainer. Great combo btw. 

## My top 5 favorite Pokemon games are: 
1. Emerald 
2. Black 2
3. Platinum 
4. Fire Red / Leaf Green (they are both the same lol)
5. Heart Gold / Soul Silver (only difference is main legendary lol)

--- 

### How websites like twitter, this project, and etc work: 
![](/images/workflow.png)