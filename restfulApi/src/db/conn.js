const mongoose=require("mongoose");

(async function(){
    try {
        await mongoose.connect("mongodb://localhost:27017/piyushdb6");
        console.log("connection successful");
    } catch (error) {
        console.log("connection failed");   
    }
})();