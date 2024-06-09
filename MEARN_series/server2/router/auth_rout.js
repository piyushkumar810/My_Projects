const express = require("express");
const router=express.Router();

const authcontroller=require("../controller/auth_control")

router.route("/").get(authcontroller.home)

module.exports=router;