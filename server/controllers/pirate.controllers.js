const Pirate = require('../models/pirate.models');

module.exports = {
    createPirate(req, res) {
        Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json(err));
    } ,
    
    getAllPirates(_, res){
        Pirate.find()
        .then(allPirates => res.json(allPirates))
        .catch(err => res.json(err));
    },

    deletePirate(req, res){
        Pirate.findByIdAndDelete(req.params.id)
            .then(() => res.json({status: "succesfully deleted!"}))
            .catch(err => res.json(err));
    },

    getOnePirate(req, res){
        Pirate.findOne({_id: req.params.id})
            .then(pirate => res.json(pirate))
            .catch(err => res.json(err))
    },
    editOnePirate(req, res){
        Pirate.findOneAndUpdate({_id : req.params.id}, req.body, {new:true})
            .then(updatedPirate => console.log(updatedPirate))
            .catch(err => res.status(400).json(err))
    }

}