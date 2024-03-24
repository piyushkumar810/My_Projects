const httpCall=require('http')
httpCall.createServer((req,resp)=>{
    resp.write("<h1> hello this is piyush kumar wirking on local host")
    //it is complusary to end response
    resp.end();
}).listen(4500);