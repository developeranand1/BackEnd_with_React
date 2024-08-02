const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  firstName: {
    type: Number,
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
  address:{
    type:String,
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
    type:String,
    required:true,
  },
  country:{
    type:String,
    required:true,
  },

});
exports.Guest=mongoose.model("Guest", guestSchema);