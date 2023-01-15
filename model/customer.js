const mongoose = require("mongoose")

const CustomerSchema =new mongoose.Schema(
    {
        name:String,
        date:String,
        time:{
            type:String,
          
        },
        end_time:String,
        room: {
            type:mongoose.Types.ObjectId,
            ref:"rooms",
        },
    },
    {timestamps:true}
)
const Booking = mongoose.model("Bookings",CustomerSchema)


module.exports=Booking;