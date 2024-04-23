const mongoose=require('mongoose')

const classRecord=async()=>{

    // creating connection
    try {
        await mongoose.connect("mongodb://localhost:27017/SittingArrangment")
        console.log("connection successful");
    } catch (error) {
        console.log("connection failed");
    }

    // creating schema
    const RoomSchema=new mongoose.Schema({
        Room_no:{
            type:String,
            required:[true,"room no is complusary"]
        },

        No_of_rows:{
            type:Number,
            required:true
        },

        No_of_columns:{
            type:Number,
            required:true
        }
    })

    // creating model
    const RoomCollection=new mongoose.model("Room",RoomSchema);

    let Classes=["A", "B", "C", "D" , "E", "F", "G", "H", "I", "J"];
    let j=0;

    for (let i = 0; i < (500/50) ; i++) 
    {
        if(j == Classes.length)
        {
            j=0;
        }

        try {
            const document=new RoomCollection({
                Room_no:Classes[j]+"00"+ i,
                No_of_rows:10,
                No_of_columns:2
            }) 
            
            await document.save();
        } catch (error) {
            console.log("not inserted for "+ i + "th data");
        }
        j++;
    }

}

classRecord();
