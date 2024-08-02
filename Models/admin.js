const mongoose =require('mongoose');
const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
   
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['admin','staff'],
        default:"admin"
    }
});


exports.Admin=mongoose.model("Admin",adminSchema)