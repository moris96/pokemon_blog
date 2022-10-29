const mongoose = require('mongoose')

// Make a Schema 
const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true},
    favePoke: { type: String, required: false},
    image: { type: String, required: false},
    comment: { type: String, required: true },
    replies: [{ type: mongoose.Types.ObjectId, ref: "Reply" }]
})




// Make A Model From The Schema 

const Pokemon = mongoose.model('Pokemon', pokemonSchema)
// Export the Model for Use in the App 

module.exports = Pokemon 