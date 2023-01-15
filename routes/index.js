const roomRoute = require("./room");
const BookingRoute = require("./customer");
const router = require("express").Router();

router.use("/room",roomRoute);
router.use("/booking",BookingRoute);

module.exports=router;