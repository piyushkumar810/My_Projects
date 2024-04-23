const mongoose=require("mongoose")

const fun=async ()=>{
    try {
       await mongoose.connect("mongodb://localhost:27017/cardb")
       console.log("sucessfully connected");
   } catch (error) {
       console.log(error); 
   }
}
fun();
