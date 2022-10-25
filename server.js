//Import modules & setup global vars 
require('dotenv');
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors'); //who's allowed access to API 

//connect to database 
const db = require('./models/db');
db.once('open', () => {
    console.log('connected to MongoDB Atlas')
});

//Initialize view engine 
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//Mount express middleware
app.use((req, res, next) => {
    res.locals.data = {}
    next()
}); //creates res.locals.data 

//middleware needed to be available in routes controller 
app.use(express.urlencoded({ extended: true })) //creates req.body
app.use(cors());
//urlencoded
app.use(express.json());
app.use(methodOverride('_method')); //override methods
app.use(express.static('public')); //have Static Files

//localhost:3000/pokemon as entry for blogs 
app.use('/pokemon', require('./controllers/routeController.js')) 

//listen on PORT 3000 
app.listen(PORT, () => {
    console.log('Listening on Port', PORT)
})