const mongoose =require('mongoose');
const invoiceSchema = new mongoose.Schema({
    invoiceDate:{
        type:String,
        required:true
    },
    bookingID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking",
        required:true

    },
    totalAmount:{
        type:String,
        required:true,
    },
    dueDate:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true,
        default:false,
    }
});


exports.invoice=mongoose.model("invoice",invoiceSchema)