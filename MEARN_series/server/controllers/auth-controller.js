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
// const register=async(req,resp)=>{
//     try {
//         resp.status(200).send("<h1> this is registeration page </h1>")
//     } catch (error) {
//         console.log(error);
//     }
// }

// --------------------using post method
const register=async(req,resp)=>{
    try {
        console.log(req.body);
        resp.status(200).json({message:req.body});
    } catch (error) {
        resp.status(500).json("internal server error")
    }
};

module.exports={home,register};