const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    county:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    streetline:{
        type: String,
        required: true,
    },
    houseno: {
        type: String,
        required: true,
    },
},
{timestamps: true}
)

module.exports = mongoose.model("Location", LocationSchema);
