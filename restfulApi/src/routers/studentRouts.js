const express=require("express");
const router=new express.Router();
const student_model = require("../models/student");

// router.get("/piyush", (req,res)=>{
//     res.send("hello this is piyush this side")
// })

// -------------------------by using promisis
// // creation a new student
// router.post("/studentRegestration",(req,resp)=>{
// // resp.send("<h1> this is student registrstion page</h1> ")

// const user=new student_model(req.body)
// console.log(req.body);
// user.save().then(()=>{
//     resp.status(201).send(user);
// }).catch((e)=>{
//     resp.status(400).send(e);
// })

//     resp.send("hello from the other side")
// })

//-------------------------- by using async and await
router.post("/studentRegestration",async(req,resp)=>{
    try 
    {
     const user=new student_model(req.body)
     const createUser =await user.save();
     resp.status(201).send(createUser)
     // console.log(req.body);
 
    } 
    catch (error)
    {
     resp.status(400).send(error)
    };
 })
 
 // -------------------to read the data from the registered student
 router.get("/studentRegestration",async(req,resp)=>{
     try {
         const studentData=await student_model.find()
         resp.send(studentData)
     } catch (error) {
         resp.send(error)
     }
 })
 
 // -----------get the individual student data using id
 router.get("/studentRegestration/:id",async(req,resp)=>{
     try {
         const _id=req.params.id;
         // console.log(req.params.id);
         // resp.send(req.params.id)
         
         const studentsData=await student_model.findById({_id:_id});
         // jab key and value dono same ho tho we can do object destructing that is (findById({_id:_id}) directly we can write findById({_id})
         resp.send(studentsData)
 
     } catch (error) {
         resp.send(error)
     }
 })
 
 
 // ---------------------------------finding particular person deatails by their name---------------------
 // router.get("/studentRegestration/:name", async(req,resp)=>{
 //     try {
 //         const _name=req.params.name;
 //         const studentDataByName=await student_model.find({name:_name})
 //         // console.log(studentDataByName);
 
 //         if(!studentDataByName)
 //         {
 //             return resp.status(404).send()
 //         }
 //         else{
 //             resp.send(studentDataByName)
 //         }
 //     } catch (error) {
 //         console.log(error);
 //     }
 // })
 
 
 // -------------------------------------update the student by its id
 router.patch("/studentRegestration/:id", async(req,resp)=>{
     // console.log("hello");
     try {
         // console.log("hello 1");
     const _id=req.params.id;
     const updateStudent=await student_model.findByIdAndUpdate(_id,req.body,{
         new:true
     });
     // console.log(updateStudent);
     resp.send(updateStudent)
     } catch (error) {
         resp.status(500).send(error)
     }
 })
 
 // -------------------------------------delete the students by their id
 router.delete("/studentRegestration/:id", async(req,resp)=>{
    try {
     const deleteStudent=await student_model.findByIdAndDelete(req.params.id)
     if(!deleteStudent)
     {
         return resp.status(404).send();
     }
     else{
         resp.send(deleteStudent)
     }
    } catch (error) {
     resp.status(500).send(error)
    }
 })
 

module.exports = router;