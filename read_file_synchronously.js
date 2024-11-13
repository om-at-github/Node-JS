// read_file_synchronously.js

const  fs = require('fs');
const data = fs.readFileSync('./books.txt', {encoding:'utf8',flag:'r'});

console.log(data);