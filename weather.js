//Slip 28 - A) Create a Node.js Application to check whether given name is file of directory,
// if it file, truncate the content after 10 bytes.
// node weather.js

var fs = require("fs");

var buf = new Buffer(1024);

console.log("Going to open an existing file");

fs.open('input.txt', 'r+', function(err, fd) {

if (err) {

return console.error(err);

}

console.log("File opened successfully!");

console.log("Going to truncate the file after 10 bytes");

// Truncate the opened file.

fs.ftruncate(fd, 10, function(err){

if (err){

console.log(err);

}

console.log("File truncated successfully.");

console.log("Going to read the same file");

fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){if (err){

console.log(err);

}

// Print only read bytes to avoid junk.

if(bytes > 0){

console.log(buf.slice(0, bytes).toString());

}

// Close the opened file.

fs.close(fd, function(err){

if (err){

console.log(err);

}

console.log("File closed successfully.");

});

});

});

});