const controller = require('./controller')
const path = require('path');

module.exports = function(app){
    app.get('/api/pets', controller.allPets)
    app.post('/api/pets', controller.createPet)
    app.get('/api/pets/:id', controller.showOnePet)
    app.put('/api/pets/:id', controller.editPet)
    app.delete('/api/pets/:id', controller.deletePet)
    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve('./public/dist/public/index.html'))
    });
}