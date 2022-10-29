require('dotenv').config()

const db = require('./db')
const Pokemon = require('./pokemon')


const starterPokemon = [
  {
    name: 'Trainer Red', favePoke: 'Pikachu', image: "https://i1.sndcdn.com/artworks-000193803962-tla7ov-t500x500.jpg", thoughts: "I beat everyone in both Kanto and Johto. Feeling cute, might go to Unova and do the same. Idk.", comment: "I am the true champion of Kanto"
  }
  
]



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