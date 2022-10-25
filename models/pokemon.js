const mongoose = require('mongoose');

//schema
const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    image: { type: String, required: false }
});

//make model 
const Pokemon = mongoose.model('Pokemon', pokemonSchema)

//export model for use in app
module.exports = Pokemon 