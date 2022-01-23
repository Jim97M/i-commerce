const mongoose = require('mongoose');

const BackgroundSchema = mongoose.Schema({
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        possibleValues: ['Male', 'Female'],
        required: true
    },
    maritalstatus:{
        type: String,
        possibleValues: ['Single', 'Married'],
        required: true
    },
    nationality:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Background', BackgroundSchema);