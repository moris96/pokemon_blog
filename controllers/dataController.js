const Pokemon = require('../models/pokemon')
const Reply = require('../models/reply')

const dataController = {
    //Index,
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
    },
    //Destroy
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
    },
    //Update
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
    },
    //function addReply() ; find pokemon, create reply, add created reply to pokemon 
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
    },
    //Create
    create(req, res, next){
        req.body.readyToEat = req.body.readyToEat === 'on'? true : false;
        req.body.username = req.session.username
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
    },
    //Edit
    //Show
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
}

module.exports = dataController