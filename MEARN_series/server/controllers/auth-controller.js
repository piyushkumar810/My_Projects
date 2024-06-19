

// const bcrypt = require('bcrypt');
// const user = require("../models/user-model");

// // Controller for handling the home route
// const home = async (req, resp) => {
//     try {
//         resp.status(200).send("Visited home page successfully");
//     } catch (error) {
//         console.log(error);
//     }
// };

// // Controller for handling user registration
// const register = async (req, resp) => {
//     try {
//         // Step 1: Get registration data from the request body
//         const { username, email, phone, password } = req.body;

//         // Step 2: Check if email already exists
//         const userExist = await user.findOne({ email: email });
//         if (userExist) {
//             return resp.status(400).json({ message: "Email is already registered" });
//         }

//         // Step 3: Hash the password securely
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Step 4: Create a new user with hashed password
//         const newUser = new user({
//             username,
//             email,
//             phone,
//             password: hashedPassword
//         });

//         // Step 5: Save the new user to the database
//         await newUser.save();

//         // Step 6: Respond with "Registration successful"
//         resp.status(201).json({ message: "Registration successful" });
//     } catch (error) {
//         console.error(error);
//         resp.status(500).json({ message: "Internal server error" });
//     }
// };

// module.exports = { home, register };



















const user = require("../models/user-model");  


// in an express.js application, a "controller" refers to a part of your code
// that is responsible for handling the applications logic. controller are 
// typiclly used to process incoming request, intract with models (data source)
// and send response bask to client. they help organize your application by 
// ṣeparating corner and following MVC (model-view-controller) design pattern.

const home=async(req,resp)=>{
    try {
        resp.status(200).send("visited home page sucessfully");
    } catch (error) {
        console.log(error);
    }
}


// -----------------using GET method
// const register = async(req,resp)=>{
//     try {
//         resp.status(200).send("<h1> this is registeration page </h1>")
//     } catch (error) {
//         console.log(error);
//     }
// }

// --------------------using post method
const register = async(req,resp)=>{
    try {
        // console.log(req.body);


        // ------------------------------------some useful tips
        // 1. get registratin data:     registration user data
        // 2. check email existance: check if email is always register.
        // 3. hash password:   securly hash the password .
        // 4. create user:     create a new user with hashed password.
        // 5. save to DB:      save user data to the database.
        // 6. respond :        respond with "Registration successfully" or handle error


        const {username, email, phone, password}= req.body;

        const userExist= user.findOne({email:email})
        
        if(userExist){
            return resp.status(400).json({msg:"email already exists"})
        }


        await user.create({username, email, phone, password})
        
        // const data = req.body;
        resp.status(200).json({data});



    } catch (error) {
        resp.status(500).json("internal server error")
    }
};

module.exports={home,register};