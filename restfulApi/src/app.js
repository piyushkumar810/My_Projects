const express=require("express");
// connecting mongoose file
require("./db/conn")
const student_model=require("./models/student")
const studentRouter=require("./routers/studentRouts")

const app=express();
const port=5050;

app.use(studentRouter)
app.use(express.json());


// ------------------------------------how to add a router

// step 1:- create a new router
// const router =new express.Router()

// step 2:- we need to define a router
// Router.get("/piyush", (req,res)=>{
//     res.send("hello this is piyush this side")
// })

// step 3:- we need to register the router
// app.use(router)


app.listen(port,()=>{
    console.log(`the server is listen at port ${port}`);
})
