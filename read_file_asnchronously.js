// read_file_asynchronously.js

fs=require('fs');
fs.readFile('programming.txt','utf8',function(err,data){
if(err){
    return console.log(err);
}    
console.log(data);
})