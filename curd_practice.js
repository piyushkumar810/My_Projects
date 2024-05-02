const mongoose=require('mongoose');

// creting connection
const curd_op=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/piyushdb3");
        console.log("connection successful");

    } catch (error) {
        console.log(err);
    }

// defining schemma
    const car_schema=new mongoose.Schema({
        car_name:{
            type:String,
            required:true
        },

        car_no:{
            type:String,
            required:true
        },

        car_seat:{
            type:String,
            required:true
        }
    });


// creating model
const car_model=new mongoose.model("car_collection", car_schema);

// let carName=["mahindra", "tata nexon", "bitrra brizza", "alto", "benz", "mustang", "thar"];
// let j=0;

// let carseat=["4 seater", "6 seater"];
// let k=0;

// for (let i = 0; i < 40; i++) 
// {
//     if(j == carName.length)
//     {
//         j=0;
//     }    

//     if(k == carseat.length)
//     {
//         k=0;
//     }

//     try {
//         const car_documents=new car_model({
//             car_name:carName[j],
//             car_no: "BH40"+[i+1],
//             car_seat:carseat[k]
//         })

//         const result=await car_documents.save();
//         // console.log(result)

//     } catch (error) {
//         console.log(`Document ${i} is not inserted`);
//     }
//     j++;
//     k++;
// }

const getDocumment=async()=>{
    // const result2=await car_model.find({car_name:"mustang"})

    // my query is mustang car mai 6 seater car kitna avilable hai
    const result2=await car_model.find({$and :[{car_name:"mustang"},{car_seat:"6 seater"}]}).count()
    console.log(result2);
}
getDocumment()

// const getDocumment=async()=>{
//     const result1= await car_model.find().count()
//     console.log(result1);
// }
// getDocumment()
}

curd_op();
