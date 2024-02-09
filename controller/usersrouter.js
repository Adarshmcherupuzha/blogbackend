const express = require("express");
const usersrouter = require("../model/users");
const bcrypt=require("bcryptjs")

const router = express.Router();

hashpasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)



}





router.post("/signup", async (req, res) => {
  let {data}={"data":req.body}
  let password=data.password
  hashpasswordgenerator(password).then(
    (hashedpassword)=>{
    console.log(hashedpassword)
    data.password=hashedpassword
    console.log(data)
    
  let user = new usersrouter(data);
  let result = user.save();
res.json({ status: "success" });


}
  )
  
 
});





module.exports = router;
