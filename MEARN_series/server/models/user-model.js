const mongoose = require("mongoose");

// ---------------------------------------defining the schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        length:20
    },

    email:{
        type:String,
        require:true
    },

    phone:{
        type:Number,
        require:true,
        length:10
    },

    password:{
        type:String,
        require:true,
        length:8
    },

    isAdmin:{
        type:Boolean,
        default:false
    }
});


//----------------------------------- you need to define the collection name

const User =new mongoose.model("User", userSchema) ;

module.exports=User;
