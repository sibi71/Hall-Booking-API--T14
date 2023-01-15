const express = require("express");
const bodyparser = require("body-parser");
const connectDB = require("./config/db");
const uniqid = require("uniqid");
const apiRouter = require("./routes");


const app = express();
const port = process.env.PORT || 4000 ;
app.use(bodyparser.json());

connectDB();
app.use(express.json());
app.use("/api",apiRouter)

app.get("/",(req,res)=>{
 res.send("its working ")
})
app.listen(port,()=>{
    console.log(`server is up and running on port ${port}`);
})