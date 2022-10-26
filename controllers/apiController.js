const apiController = {
    index(req, res, next){
        res.json(res.locals.data.pokemon)
    },
    show(req, res, next){
        res.json(res.locals.data.pokemon)
    }
};

module.exports = apiController 