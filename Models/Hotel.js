const mongoose=require('mongoose');

const hotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        max:255,
        min:10,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    zipCode:{
        type:Number,
        required:true,
    },
    country:{
        type:String,
        required:true,
    }
});

exports.Hotel=mongoose.model("Hotel", hotelSchema);
