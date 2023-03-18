const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    des : {
        type : String,
        required: true,
    },
    img : {
        type : String,
        required: true,
        unique:true
    },
    categories : {
        type : Array,
        required: true,
    },
    price : {
        type : Number,
        required: true,
    },
    
},
{timestamps : true})

module.exports = mongoose.model('Product',ProductSchema);