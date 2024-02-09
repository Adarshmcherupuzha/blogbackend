const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userrouter=require("./controller/usersrouter")

const app=express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://adarsh:adarsh123@cluster0.bsql3fl.mongodb.net/userblogDb?retryWrites=true&w=majority",
{useNewurlParser:true})
app.use("/api/blog",userrouter)

app.listen(3000,()=>{
    console.log("server running")
})