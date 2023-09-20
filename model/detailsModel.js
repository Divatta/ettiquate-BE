const mongoose = require('mongoose')

const detailsSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true 
    },
    lastName:{
        type: String,
        trim: true
    },
    dob:{
        type: String,
        trim: true
    },
    grade:{
        type: String,
        trim: true
    },
    allergy:{
        type: String,
        trim: true
    },
    firstName1:{
        type: String,
        trim: true
    },
    lastName1:{
        type: String,
        trim: true
    },
    cellPhone:{
        type: String,
        trim: true,
        unique: [true, "mobile already exists."]
    },
    workPhone:{
        type: String,
        trim: true,
        unique: [true, "mobile already exists."]
    },
    email:{
        type: String,
        trim: true,
        unique: [true, "email already exists."]
    }
},{
    collection: 'details',
    timestamps: true
})

module.exports = mongoose.model("StudentsDetails", detailsSchema)