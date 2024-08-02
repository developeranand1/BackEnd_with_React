const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  guestID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guest",
    required: true,
  },
  hotelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  roomID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },

  status: {
    type: Boolean,
    required: true,
    default: false,
  },
});
exports.Booking = mongoose.model("Booking", bookingSchema);
