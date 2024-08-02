const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  bookingID: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Booking",
    required: true,
  },
  amount:{
    type:String,
    required:true,
  },
  paymentDate:{
    type:Date,
    required:true,
  },
  paymentMethod:{
    type:Number,
    required:true,
  },

});
exports.Payment=mongoose.model("Payment", paymentSchema);