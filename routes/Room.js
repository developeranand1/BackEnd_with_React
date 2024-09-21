const express=require('express');
const router=express.Router();
const {Room}=require('../Models/Rooms');


router.get("/hotel-list/:id", async(request, response) => {
    console.log(request.body);
    const {id}=request.params;
    try{
        const roomList =await Room.findById(id);
        if(!roomList){
            return response.status(404).json("hotelData page is not found!");
        }
        response.status(200).json(roomList);
    }
    catch(error){
        console.error(error);
        return response.status(500).json({message:"Internal Server Error",error});
    }
})

router.get("/room-list",async(req, res) => {
   try{
    const roomList=await Room.find().populate("hotelId");

    if(!roomList){
        return res.status(404).json({message:"Hotel data is not found!"})
    }

    return res.status(200).json(roomList);
   }
   catch(error){
    console.error(error);
    return res.status(500).json({message:"Internal Server Error",error});
   }
})




router.post("/add-room", async(req, res) => {

    const {hotelId, roomNumber, roomType, price,status} =req.body;

    try{
        const addRoom=new Room({hotelId, roomNumber, roomType, price,status});

        if(!addRoom){
            return res.status(404).json({mgs:"Room page is not found!"})
        }

        await addRoom.save();
        return res.status(200).json({message:"New Room Added Successfully!"})
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:"Internal Server Error",error});
    }
    
});

router.delete("/delete-hotel/:id", async(req, res) => {
   try{

    const roomList=await Room.findByIdAndDelete(req.params.id);

    if(!roomList){
        return res.status(400).json({message:"Page is not found!"})
    }
    return res.status(200).json({message:"Hotel data is deleted!"})

   }catch(error){
    console.error(error);
    return res.status(500).json({message:"Internal Server Error",error});
}
})

module.exports=router;