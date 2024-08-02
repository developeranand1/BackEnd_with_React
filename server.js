const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv=require('dotenv').config();
const cors = require('cors');

// All Routers
const adminRouter=require('./routes/Admin');
const hotelRouter=require('./routes/Hotel');
const StaffRouter=require('./routes/Staff');

const app = express();
const PORT = 4000;
app.use(bodyParser.json());
app.use(cors());

// All Routes
app.use("/admin",adminRouter);
app.use("/hotel", hotelRouter);
app.use("/staff", StaffRouter);

const dbURL =process.env.MY_URL;

const DBConnection = mongoose
  .connect(dbURL)
  .then(() => console.log("Database connected!"));


app.listen(PORT, () => {
  console.log(`My server is running localhost:${PORT}`);
  DBConnection;
});
