require('dotenv').config()

const db = require('./db')
const Pokemon = require('./pokemon')

/*
const starterPokemon = [
]
*/


Pokemon.deleteMany({})
    .then(() => {
        Pokemon.create(starterPokemon)
            .then((createdPokemon) => {
                console.log('created pokemon:', createdPokemon)
                db.close()
            })
            .catch(err => {
                console.log(err)
                db.close()
            })
    }).catch(err => {
        console.log(err)
        db.close()
    })