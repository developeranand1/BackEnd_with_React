const express=require('express');
const router=express.Router();
const {Staff}=require('../Models/Staff');


router.get("/get-by-id/:id", async(request, response) => {
    console.log(request.body);
    const {id}=request.params;
    try{
        const staffData =await Staff.findById(id);
        if(!staffData){
            return response.status(404).json("page is not found!");
        }
        response.status(200).json(staffData);
    }
    catch(error){
        console.error(error);
        return response.status(500).json({message:"Internal Server Error",error});
    }
})

router.get("/get-staff-list",async(req, res) => {
   try{
    const staffList=await Staff.find();

    if(!staffList){
        return res.status(404).json({message:"Staff data is not found!"})
    }

    return res.status(200).json(staffList);
   }
   catch(error){
    console.error(error);
    return res.status(500).json({message:"Internal Server Error",error});
   }
})

// Pagination API 

router.get("/get-list", async(req, res) => {
    try{

        const {page=1, limit=5}=req.query;

        const pageNumber=parseInt(page,10);
        const limitNumber=parseInt(limit,10);
        const skip=(pageNumber-1)*limitNumber;
        const list=await Staff.find().skip(skip).limit(limitNumber);
        const totalItems=await Staff.countDocuments();
        
        res.status(200).json({totalItems, page:pageNumber,    totalPages: Math.ceil(totalItems / limitNumber),list})
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Internal Server  error ", error:error})
    }
})

router.post("/create-new-staff", async(req, res) => {

    const {firstName, lastName, email, phone,position,salary} =req.body;

    try{
        const staff=new Staff({firstName, lastName, email, phone,position,salary});

        if(!staff){
            return res.status(404).json({mgs:"Staff page is not found!"})
        }

        await staff.save();
        return res.status(200).json({message:"New Staff Added Successfully!"})
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:"Internal Server Error",error});
    }
    
});

router.put("/update-staff/:id", async(req, res) => {
    try{
        const updateStaff=await Staff.findByIdAndUpdate(req.params.id, {new:true});

        if(!updateStaff){
            return res.status(400).json({message:"Page is not found!"})
        }
        return res.status(200).json({message:"Staff data is updated!",id:req.params.id})
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:"Internal Server Error",error});
    }
})

router.delete("/delete-staff/:id", async(req, res) => {
   try{

    const deleteStaff=await Staff.findByIdAndDelete(req.params.id);

    if(!deleteStaff){
        return res.status(400).json({message:"Page is not found!"})
    }
    return res.status(200).json({message:"Staff data is deleted!"})

   }catch(error){
    console.error(error);
    return res.status(500).json({message:"Internal Server Error",error});
}
})

module.exports=router;