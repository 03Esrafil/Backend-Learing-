const http= require('http')

const myServer=http.createServer((req,res)=>{
    console.log("new Req rec");
    res.end("Hello Sever ")
});

myServer.listen(3000,()=>console.log('Sever started ok'))