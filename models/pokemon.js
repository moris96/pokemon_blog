const mongoose = require('mongoose')

// Make a Schema 
const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true},
    favePoke: { type: String, required: false},
    image: { type: String, required: false},
    comment: { type: String, required: true },
    thoughts: { type: String, required: false },
    replies: [{ type: mongoose.Types.ObjectId, ref: "Reply" }],
    username: String 
})


const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon 