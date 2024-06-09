// router instance is a complete middleware and routing system; for this reasion , it is often referred to as a "mini-app"


const express = require("express");
const router=express.Router();
// const {home, register} = require("../controllers/auth-controller");
const authcontrollers= require("../controllers/auth-controller")


router.route("/").get(authcontrollers.home);
router.route("/register").post(authcontrollers.register);
// ------------------------------or-------------------

// router.get("/", (req,resp)=>{
//     resp
//     .status(200)
//     .send("visited home page sucessfully");
// });


// router.get("/register", (req, resp)=>{
//     resp.send("welcome to registration page")
// });

module.exports= router;
