http=require("http")
const port=8001;
const server=http.createServer((req,res)=>{
    res.statuscode=200
    res.setHeader('content.type','text/plain')
    res.end(`${10+10}`)
 });
 server.listen(port,()=>{
    console.log(`server runninng on port ${port}`);
 })