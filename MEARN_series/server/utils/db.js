const mongoose = require("mongoose");
const URI="mongodb://localhost:27017/mern_admin"

//----------------------------------------- connecting to datatbase 
// mongoose.connect(URI)


// ---------------------------------connecting database with handling risky code
const connectdb=async()=>{
    try {
        await mongoose.connect(URI)
        console.log("database connected successful");
    } catch (error) {
        console.log("database connected failed");
        process.exit(0);
    }
};

module.exports=connectdb;
