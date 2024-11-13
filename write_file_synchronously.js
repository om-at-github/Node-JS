/// write_file_synchronously.js

const fs = require('fs');
let data ="this is a file containing a collection"
+"of programming languages.\n"
+"1.JAVA\n2.C++\n3.R";
fs.writeFileSync("programming.txt",data);
console.log("File written successfully\n");
console.log("the written successfully\n");
console.log(fs.readFileSync("programming.txt","utf8"));