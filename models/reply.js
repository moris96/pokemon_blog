const mongoose = require('mongoose')

// Make a Schema 
const replySchema = new mongoose.Schema({
    text: { type: String, required: false }
})

const Reply = mongoose.model('Reply', replySchema)
// Export the Model for Use in the App 

module.exports = Reply 