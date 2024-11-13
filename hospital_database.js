//node hospital_database.js

// Create a Node,js file that demonstrate create database and Hospital table
// (hReg, hName,address, contact) in MySQL.



var mysql=require('mysql');

var cn=mysql.createConnection({

host:"localhost",

user:"root",

password:"",

database:"mydb"

});

cn.connect(function(err){

      if(err) throw err;

      console.log("connected!");

      var sql="CREATE TABLE Hospital(hReg INT

       AUTO_INCREMENT PRIMARY KEY ,hName

        VARCHAR(20),hAddress VARCHAR(20),contact  INT)";


    cn.query(sql,function(err,result){

       if(err)throw err;

            console.log("Table Created!");

   });

});