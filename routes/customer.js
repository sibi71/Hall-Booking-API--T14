const router = require("express").Router();
const {Booking,room}= require("../model");


router.get("/",(req,res)=>{
    res.send("booking route is working")
});
router.post("/bookingAdd",async(req,res)=>{
    try {
        const Newbooking = await Booking.create(req.body);
        const roomdata = await room.findByIdAndUpdate(req.body.room,
        {
            $push:{Bookings:Newbooking._id},
        },{new:true}
        );
        res.json({booking:Newbooking,room:roomdata})
    } catch (error) {
        return res.json({msg:error.message})
    }
});
router.get("/bookinglist",async(req,res)=>{
    const bookinglist = await Booking.find().populate(
        "room","Number_seat Amenities Price"
    );
    res.json(bookinglist);
})

module.exports=router