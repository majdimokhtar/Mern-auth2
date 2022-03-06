const mongoose = require('mongoose');


const schema =mongoose.Schema;
const ProductsSchema=new schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    review:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    review:{
        type:String,
        required:true,
    },
    countinstock:{
        type:String,
        required:true,
    },



});

module.exports=mongoose.model("products",ProductsSchema);