const express=require('express');
const router=express.Router();
const {Guests}=require('../Models/Guests');


router.get("/guest-list/:id", async(request, response) => {
    const {id}=request.params;
    try{
        const guestData =await Guests.findById(id);
        if(!guestData){
            return response.status(404).json("Guest page is not found!");
        }
        response.status(200).json(guestData);
    }
    catch(error){
        console.error(error);
        return response.status(500).json({message:"Internal Server Error",error});
    }
})

router.get("/guest-list",async(req, res) => {
   try{
    const guestList=await Guests.find();

    if(!guestList){
        return res.status(404).json({message:"Guest data is not found!"})
    }

    return res.status(200).json(guestList);
   }
   catch(error){
    console.error(error);
    return res.status(500).json({message:"Internal Server Error",error});
   }
})




router.post("/create-guest", async(req, res) => {

    const {firstName, lastName, email, phone,address,city,state,zipCode,country} =req.body;

    try{
        const guestData =new Guests({firstName, lastName, email, phone,address,city,state,zipCode,country});

        if(!guestData){
            return res.status(404).json({mgs:"Guest page is not found!"})
        }

        await guestData.save();
        return res.status(200).json({message:"New Guest Added Successfully!"})
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:"Internal Server Error",error});
    }
    
});

router.delete("/delete-guest/:id", async(req, res) => {
   try{

    const deleteGuest=await Guests.findByIdAndDelete(req.params.id);

    if(!deleteGuest){
        return res.status(400).json({message:"Page is not found!"})
    }
    return res.status(200).json({message:"Guest data is deleted!", id:req.params.ids})

   }catch(error){
    console.error(error);
    return res.status(500).json({message:"Internal Server Error",error});
}
})

module.exports=router;