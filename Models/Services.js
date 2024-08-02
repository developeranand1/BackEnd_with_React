const mongoose=require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    
});

exports.Service=mongoose.model("Service", serviceSchema);
