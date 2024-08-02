const express=require('express');
const router=express.Router();
const {Invoice}=require('../Models/invoice');


router.get("/hotel-list/:id", async(request, response) => {
    console.log(request.body);
    const {id}=request.params;
    try{
        const InvoiceData =await Invoice.findById(id);
        if(!InvoiceData){
            return response.status(404).json("InvoiceData page is not found!");
        }
        response.status(200).json(InvoiceData);
    }
    catch(error){
        console.error(error);
        return response.status(500).json({message:"Internal Server Error",error});
    }
})

router.get("/invoice-list",async(req, res) => {
   try{
    const invoiceList=await Hotel.find();

    if(!invoiceList){
        return res.status(404).json({message:"invoiceList is not found!"})
    }

    return res.status(200).json(invoiceList);
   }
   catch(error){
    console.error(error);
    return res.status(500).json({message:"Internal Server Error",error});
   }
})




router.post("/add-hotel", async(req, res) => {

    const {name, address, city, state,zipCode,country} =req.body;

    try{
        const hotel=new Hotel({name, address, city, state,zipCode,country});

        if(!hotel){
            return res.status(404).json({mgs:"Hotel page is not found!"})
        }

        await hotel.save();
        return res.status(200).json({message:"New Hotel Added Successfully!"})
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:"Internal Server Error",error});
    }
    
});

router.delete("/delete-hotel/:id", async(req, res) => {
   try{

    const deleteHotel=await Hotel.findByIdAndDelete(req.params.id);

    if(!deleteHotel){
        return res.status(400).json({message:"Page is not found!"})
    }
    return res.status(200).json({message:"Hotel data is deleted!"})

   }catch(error){
    console.error(error);
    return res.status(500).json({message:"Internal Server Error",error});
}
})

module.exports=router;