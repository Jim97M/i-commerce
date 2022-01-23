const mongoose = require('mongoose');
const resetTokens = new mongoose.Schema({
    token:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    created:{
        type: Date,
        default: () => Date.now(),
    },
    created:{
        type: Date,
        default: () => Date.now(),
    }
});

module.exports = mongoose.model('resetTokens', resetTokens);