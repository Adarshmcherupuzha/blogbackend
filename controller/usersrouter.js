const express = require("express");
const usersrouter = require("../model/users");

const router = express.Router();

router.post("/signup", async (req, res) => {
  let data = req.body;
  let user = new usersrouter(data);
  let result = await user.save();
  res.json({ status: "success" });
});





module.exports = router;
