const home = async(req, resp)=>{
   try {
    resp.status(200).send("<h1> this is home page");
   } catch (error) {
    console.log("server error");
   }
}

module.exports={home};
