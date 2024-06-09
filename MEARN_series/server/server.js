const express = require("express");
const app = express();
const router=require("./router/auth-router")

app.use(express.json())

const port=5000;

app.use("", router)

app.listen(port,()=>{
    console.log(`server is running at localhost: ${port}`);
});
