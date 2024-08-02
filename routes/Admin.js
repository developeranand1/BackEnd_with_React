const express = require("express");
const router = express.Router();
const dotenv = require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Admin } = require('../Models/admin');
const jwtSecret = process.env.JWT_SECRET;

router.post('/create', async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const admin = new Admin({ username, email, password: hashPassword, role });
        await admin.save();

        const token = jwt.sign({ id: admin._id, role: admin.role }, jwtSecret, { expiresIn: '1h' });
        res.status(200).json({ message: "Admin created successfully!", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", error });
    }
});

router.post("/login", async(req, res) =>{
    const {email, password}=req.body;
    try{
        const admin=await Admin.findOne({email});
        if(!admin){
            return res.status(400).json({message:"Invalid Email Id! "});
        }

        const isMatch=await bcrypt.compare(password, admin.password);
        if(!isMatch){
            return res.status(400).json({message:"Incorrect password"});
        }

        const token =jwt.sign({id:admin._id,role:admin.role}, jwtSecret, {expiresIn:'1h'});
        res.status(200).json({token});
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal server error", error });
    }
})

module.exports = router;
