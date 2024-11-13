//program to display all the records available in the table student.//
// show_record.js//

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "college",
    port: 3306
});

con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM student", function(err,result,fields){
        if(err) throw err;
        // Showing all the records
        console.log(result);
        //console.log(fields);
    });
});