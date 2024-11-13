const fs = require('fs');
let data ="this is a file containing a collection of books.";
fs.writeFile("books.txt",data,(err)=>{
    if(err)
    console.log(err);
    else{
        console.log("file has been successfully\n");
        console.log("with following content");
        console.log(fs.readFileSync("books.txt","utf8"));
    }
})