const mongoose = require("mongoose")

const RoomSchema =new mongoose.Schema(
    {
        Number_seat:String,
        Amenities:String,
        Price:String,
    },
    {timestamps:true}
)
const room = mongoose.model("rooms",RoomSchema)


module.exports=room;