http=require("http")
const port=8000;
const server=http.createServer((req,res)=>{
    res.statuscode=200
    res.setHeader('content.type','text/plain')
    res.end(`hello world`)
});
server.listen(port,()=>{
    console.log(`server running on port ${port}`);
}) 