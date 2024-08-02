const mongoose=require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
    serviceID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Service",
        required:true

    },
    bookingID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking",
        required:true

    },
    requestDate:{
        type:Date,
        required:true,
    },
    status:{
        type:Boolean,
        default:false,
        required:true,
    }
    
});

exports.ServiceRequest=mongoose.model("ServiceRequest", serviceRequestSchema);
