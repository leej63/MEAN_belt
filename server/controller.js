const Pet = require('./models');

module.exports = {
    allPets: (req, res)=>{
        Pet.find()
            .then(data=>res.json({info: data, message: 'success'}))
            .catch(data=>res.json({info: err, message: 'failure'}))
    },
    createPet:(req, res)=>{
        Pet.create(req.body)
        .then(data=>res.json({info: data, message: 'success'}))
        .catch(data=>res.json({info: err, message: 'failure'}))
    },
    showOnePet:(req, res)=>{
        Pet.findById(req.params.id)
        .then(data=>res.json({info: data, message: 'success'}))
        .catch(data=>res.json({info: err, message: 'failure'}))
    },
    editPet:(req, res)=>{
        Pet.update({_id: req.params.id}, req.body, {runValidators: true})
        .then(data=>res.json({info: data, message: 'success'}))
        .catch(data=>res.json({info: err, message: 'failure'}))
    },
    deletePet:(req, res)=>{
        Pet.findByIdAndRemove(req.params.id)
        .then(data=>res.json({info: data, message: 'success'}))
        .catch(data=>res.json({info: err, message: 'failure'}))
    },

}