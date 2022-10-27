// Import Dependencies
const mongoose = require('mongoose')

// Define Model
// pull schema and model from mongoose
const { Schema, model } = mongoose

// make pokemon schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

// make pokemon model
const User = model('User', userSchema)


module.exports = User