require("dotenv").config();

const express = require("express");
const app = express();
const router=require("./router/auth-router")
const connectdb=require("./utils/db")

app.use(express.json())

const port=5010;

app.use("", router)

connectdb().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running at localhost: ${port}`);
    });
})
