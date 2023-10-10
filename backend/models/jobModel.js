const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Salary:{
        type: Number,
        required: true
    },
    Contract:{
        type: String,
        required: true
    },
    Localisation:{
        type: String,
        required: true
    },
    Booster:{
        type: Boolean,
        required: true
    }
},{ timestamps: true})    //associated timestamp information indicating when it was created or last updated

module.exports = mongoose.model('job', jobSchema)

