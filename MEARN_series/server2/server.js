const express=require("express")
const app = express();
const router = require("./router/auth_rout")

const port=5010;

app.use("", router);

app.listen(port, ()=>{
    console.log(`server is listned at localhost :${port}`);
})
