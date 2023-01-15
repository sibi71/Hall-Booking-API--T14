const router = require("express").Router();
const {room} = require("../model");

router.get("/",(req,res)=>{
    res.send("room route is working")
});

router.post("/roomAdd",async(req,res)=>{
    try {
        const NewRoom = new room(req.body);
        const data = await NewRoom.save();
        return res.json(data);
    } catch (error) {
        return res.json({msg:error.message});
    }
});
router.get("/roomlist",async(req,res)=>{
    const roomlist = await room.find();
    res.json(roomlist);
});

module.exports=router;