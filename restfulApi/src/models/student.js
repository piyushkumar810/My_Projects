const mongoose=require("mongoose");
const validator=require("validator");

const student_schema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name must be filled"],
        maxlength:[20,"name must be less than 20 character"]
    },

    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },

    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },

    address:{
        type:String,
        required:true
    }
})

const student_model=new mongoose.model("student_model",student_schema);

module.exports=student_model;