var http=require('http')
var server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<html><body><h1>html</h1><b>My frist html content</b></body></html>' );
    res.end();

}).listen(8000);