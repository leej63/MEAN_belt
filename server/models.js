const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean_belt', {useNewUrlParser: true});

// const SkillSchema = new mongoose.Schema({
//     skill_one: {type: String},
//     skill_two: {type: String},
//     skill_three: {type: String}
// }, {timestamps: true})

const PetSchema = new mongoose.Schema({
    name: {type: String, minlength: 3, required: [true, "A name is required!"]},
    type: {type: String, minlength: 3, required: [true, "Please enter type of animal."]},
    description: {type: String, minlength: 3, required: [true, "Please give a brief description of the pet."]},
    likes: {type: Number, default: null},
    // skills: [SkillSchema]
    skills_one: {type: String},
    skills_two: {type: String},
    skills_three: {type: String}
}, {timestamps: true})

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;