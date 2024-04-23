const express=require("express");
const path=require("path");
require("./db/conn.js")

const app=express();
const port=process.env.PORT || 3000;


// hum jo public folder create kiya actually woo static code hai
// now how to include static folder in your app.js file
app.use(express.static);

app.get("/home", (req,resp)=>{
    resp.send("this is my home page")
})

app.listen(port,()=>{
    console.log(`server is listen at localhost: ${port}`);
})