const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    userId: { type: String, required: true },
    product: [
        {
            productId: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Pending" },

},
    { timestamps: true }
)