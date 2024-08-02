const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  hotelId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Hotel',
    required:true
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  roomType:{
    type:String,
    required:true,
  },
  price:{
    type:String,
    required:true,
  },
  status:{
    type:Boolean,
    required:true,
    default:false
  }
});
exports.Room=mongoose.model("Room", roomSchema);