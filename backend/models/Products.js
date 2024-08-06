const mongoose = require("mongoose")


const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    detail: {
        type: String,
        required : true
    },
    price: {
        type: Number,
        required : true
    },
    file: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("products",productsSchema)