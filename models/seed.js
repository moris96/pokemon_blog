require('dotenv').config()

const db = require('./db')
const Pokemon = require('./pokemon')

/*
const starterPokemon = [
  {
    name: 'Apple', color: 'red', readyToEat: true
  },
  {

    name: 'Orange', color: 'orange', readyToEat: true
  },
  {

    name: 'Coconut', color: 'brown', readyToEat: true
  },
  {

    name: 'Grapes', color: 'red', readyToEat: true
  },
  {

    name: 'Pear', color: 'green', readyToEat: false
  }
]
*/


Pokemon.deleteMany({})
    .then(() => {
        Fruit.create(starterPokemon)
            .then((createdPokemon) => {
                console.log('created fruits:', createdPokemon)
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