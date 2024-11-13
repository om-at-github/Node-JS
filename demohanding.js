var http = require('http')
var server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'content_type':'text/html'})
        res.write('<html><body> <h1>home page route</h1> </body></html>')
        res.end()
    }
    if(req.url=='/student'){
        res.writeHead(200,{'content_type':'text/html'})
        res.write('<html><body><h1>student route</h1></body></html>')
        res.end()
    }
    if(req.url=='/test'){
        res.writeHead(200,{'content_type':'text/html'})
        res.write('<html><body style="background-color:orange;"><h1>test route</h1></body></html>')
        res.end()
    }
})

server.listen(8000,()=>{
    console.log(`server running on port 8000`);
});
