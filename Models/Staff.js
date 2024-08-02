const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  phone:{
    type:Number,
    required:true,
  },
  position:{
    type:String,
    required:true,
  },
  salary:{
    type:String,
    required:true,
  },
  

});
exports.Staff=mongoose.model("Staff", staffSchema);