const mongoose = require('mongoose');


// creating connection
const stdRecord=async()=>{
    
    try {
        await mongoose.connect("mongodb://localhost:27017/SittingArrangment")
        console.log("connection successful");
    } catch (error) {
        console.log("connection not created")
    }
    
// designing schema
const studentSchema=mongoose.Schema({
    Roll:{
        type:String,
        required:[true,"roll is maindatory"]
    },

    Subject:{
        type:String,
        required:[true,"one subject is compulsory"]
    },

    Id:{
        type:String,
        required:[true,"id is maindatory"]
    }
})

// creating collection
const studentmodel=new mongoose.model("StudentRecord", studentSchema)

let subject_collection=["C", "C++", "JAVA", "JAVA SCRIPT", "PYTHON"];
let j=0;

for (let i = 0; i < 500 ; i++) 
{
    if(j==subject_collection.length) /*or if(j==5) */
    {
        j=0;
    }
    try {
        let student_document=new studentmodel({
            Roll:"2201990172"+(i+1),
            Subject:subject_collection[j],
            Id:"SOOO"+ i
        })

        await student_document.save();
    } catch (error) {
        console.log("Document "+i+" Not Inserted");
    }
    j++;
}

}

stdRecord();
