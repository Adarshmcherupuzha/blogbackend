const mongoose=require("mongoose")

const usersschema=mongoose.Schema(
    {
        name:String,
        age:String,
        mobile:String,
        address:String,
        pin:String,
        email:String,
        password:String
    }
)
module.exports=mongoose.model("users",usersschema)
